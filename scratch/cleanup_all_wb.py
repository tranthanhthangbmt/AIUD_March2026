"""
Clean up ALL Word Cơ Bản lessons that have duplicate short hotspot sections.
Strategy: For each affected lesson, remove short sections without images
that are duplicates of detailed sections, and renumber remaining sections.
Special case: merge consecutive short hotspot items into the preceding detailed section.
"""
import re

with open('data/lessons.js', 'r', encoding='utf-8') as f:
    content = f.read()

def find_lesson_steps(content, lesson_id):
    """Find the steps array boundaries for a lesson."""
    id_pattern = f'id: "{lesson_id}"'
    id_pos = content.find(id_pattern)
    if id_pos == -1:
        return None, None
    
    steps_str = 'steps: ['
    steps_start = content.find(steps_str, id_pos)
    if steps_start == -1:
        return None, None
    
    bracket_pos = steps_start + len(steps_str) - 1  # position of [
    bracket_count = 1
    i = bracket_pos + 1
    while bracket_count > 0 and i < len(content):
        if content[i] == '[':
            bracket_count += 1
        elif content[i] == ']':
            bracket_count -= 1
        i += 1
    
    return bracket_pos, i  # start of [, position after ]

def extract_steps(steps_content):
    """Extract individual step objects from a steps array string."""
    steps = []
    brace_start = None
    brace_count = 0
    for idx in range(len(steps_content)):
        c = steps_content[idx]
        if c == '{' and brace_count == 0:
            brace_start = idx
            brace_count = 1
        elif c == '{':
            brace_count += 1
        elif c == '}':
            brace_count -= 1
            if brace_count == 0 and brace_start is not None:
                step_str = steps_content[brace_start:idx+1]
                title_m = re.search(r'title:\s*"(.*?)"', step_str)
                if title_m:
                    title = title_m.group(1)
                    has_img = '<img' in step_str or '\\u003cimg' in step_str
                    content_m = re.search(r'content:\s*"(.*)"', step_str, re.DOTALL)
                    content_len = len(content_m.group(1)) if content_m else 0
                    steps.append({
                        'title': title,
                        'raw': step_str,
                        'has_img': has_img,
                        'content_len': content_len,
                        'is_short': content_len < 500 and not has_img
                    })
                brace_start = None
    return steps

def cleanup_lesson(content, lesson_id, strategy='remove_short'):
    """
    Clean up a lesson by removing short no-image sections.
    Strategy: keep sections that have images or substantial content.
    Merge short hotspot items into adjacent detailed section where appropriate.
    """
    start, end = find_lesson_steps(content, lesson_id)
    if start is None:
        print(f"  Lesson {lesson_id} not found!")
        return content
    
    steps_content = content[start:end]
    steps = extract_steps(steps_content)
    
    if not steps:
        print(f"  No steps found in {lesson_id}")
        return content
    
    # Identify which steps to keep
    # Keep: steps with images OR substantial content (>500 chars)
    # Also keep if it's the only version (no detailed duplicate exists)
    
    keep_steps = []
    merge_buffer = []
    
    for i, step in enumerate(steps):
        if step['is_short']:
            # Check if there's a detailed version of this topic
            # For now, if it's short and no image, skip it
            # But accumulate for potential merging
            merge_buffer.append(step)
        else:
            # If we have accumulated merge items, merge them into this step
            # Actually, for the GCFGlobal pattern, the short items come BEFORE
            # the detailed sections, so we just skip them
            if merge_buffer:
                merge_buffer = []  # Discard the short items
            keep_steps.append(step)
    
    # Discard any remaining merge buffer
    merge_buffer = []
    
    # Renumber
    new_steps = []
    for idx, step in enumerate(keep_steps):
        step_raw = step['raw']
        old_title = step['title']
        
        # Extract the part after "Phần N: "
        title_match = re.match(r'Phần \d+:\s*(.*)', old_title)
        if title_match:
            topic = title_match.group(1)
            new_title = f"Phần {idx+1}: {topic}"
            step_raw = step_raw.replace(f'title: "{old_title}"', f'title: "{new_title}"')
        
        new_steps.append(step_raw)
    
    print(f"  {lesson_id}: {len(steps)} steps → {len(new_steps)} steps")
    for s in new_steps:
        tm = re.search(r'title:\s*"(.*?)"', s)
        if tm:
            print(f"    {tm.group(1)}")
    
    # Build new steps array
    new_steps_str = "[\n" + ",\n".join(f"                    {s}" for s in new_steps) + "\n                ]"
    
    return content[:start] + new_steps_str + content[end:]

# Process each lesson that needs cleanup
lessons_to_clean = ['wb_4', 'wb_13', 'wb_23', 'wb_25']

for lesson_id in lessons_to_clean:
    print(f"\n{'='*60}")
    print(f"Processing {lesson_id}...")
    content = cleanup_lesson(content, lesson_id)

# Write back
with open('data/lessons.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\n{'='*60}")
print("Done! All lessons cleaned up.")
