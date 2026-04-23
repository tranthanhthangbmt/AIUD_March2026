"""
Analyze ALL lessons in Word Cơ Bản (session 65) for duplicate/short sections.
"""
import re

with open('data/lessons.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all wb_* lessons in session 65
lesson_pattern = re.compile(r'id:\s*"(wb_\d+)"')
lessons = []
for m in lesson_pattern.finditer(content):
    lesson_id = m.group(1)
    pos = m.start()
    # Find title
    title_m = re.search(r'title:\s*"(.*?)"', content[pos+len(m.group(0)):pos+500])
    title = title_m.group(1) if title_m else "?"
    lessons.append((lesson_id, pos, title))

print(f"Found {len(lessons)} lessons in Word Cơ Bản:\n")

for idx, (lesson_id, lesson_pos, lesson_title) in enumerate(lessons):
    # Find steps array for this lesson
    steps_search_start = lesson_pos
    # Find next lesson or end
    if idx + 1 < len(lessons):
        next_lesson_pos = lessons[idx + 1][1]
    else:
        # Find end of session 65 section
        next_lesson_pos = len(content)
    
    lesson_content = content[lesson_pos:next_lesson_pos]
    
    # Find steps: [ ... ]
    steps_idx = lesson_content.find('steps: [')
    if steps_idx == -1:
        print(f"  {lesson_id}: {lesson_title} - NO STEPS")
        continue
    
    # Extract step titles and check for images
    step_titles = []
    step_pattern = re.compile(r'title:\s*"(Phần \d+:.*?)"')
    
    # Find each step object
    steps_section = lesson_content[steps_idx:]
    for sm in step_pattern.finditer(steps_section):
        step_title = sm.group(1)
        # Check surrounding content for images
        context_start = sm.end()
        # Get content until next title or end
        next_title = step_pattern.search(steps_section, context_start)
        if next_title:
            context = steps_section[context_start:next_title.start()]
        else:
            context = steps_section[context_start:context_start+5000]
        
        has_img = '<img' in context or '\\u003cimg' in context
        # Estimate content length (find content: "..." )
        content_m = re.search(r'content:\s*"', steps_section[sm.start()-200:sm.start()+10000])
        content_len = len(context)
        
        step_titles.append((step_title, has_img, min(content_len, 9999)))
    
    total = len(step_titles)
    with_img = sum(1 for _, h, _ in step_titles if h)
    without_img = total - with_img
    short_no_img = sum(1 for _, h, l in step_titles if not h and l < 500)
    
    status = "⚠️  NEEDS CLEANUP" if short_no_img > 2 else "✅ OK"
    print(f"{'='*80}")
    print(f"  {lesson_id}: {lesson_title}")
    print(f"  Total steps: {total} | With images: {with_img} | Without images: {without_img} | Short+no-img: {short_no_img} | {status}")
    
    if short_no_img > 0:
        print(f"  --- Steps detail ---")
        for st, hi, cl in step_titles:
            marker = "  ✓" if hi else ("  ✗ SHORT" if cl < 500 else "  ~ long-text")
            print(f"    {st:55s} img={'Y' if hi else 'N'} len={cl:5d} {marker}")
    print()
