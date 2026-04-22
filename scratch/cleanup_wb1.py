"""
Clean up wb_1 lesson: remove duplicate short hotspot sections,
keep detailed sections with images, and merge Backstage hotspot items.
"""
import re, json

with open('data/lessons.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to find the steps array for wb_1 and replace it
# Find the wb_1 lesson object's steps array

# Strategy: parse step by step using regex to find each step object
# The steps are between 'steps: [' and the closing ']' for wb_1

# Find wb_1 section
wb1_match = re.search(r'id:\s*"wb_1"', content)
if not wb1_match:
    print("wb_1 not found!")
    exit(1)

# From wb_1 position, find 'steps: ['
steps_start_search = content.find('steps: [', wb1_match.start())
# Now find the matching closing bracket
# We need to count brackets
pos = content.index('[', steps_start_search)
bracket_count = 1
i = pos + 1
while bracket_count > 0 and i < len(content):
    if content[i] == '[':
        bracket_count += 1
    elif content[i] == ']':
        bracket_count -= 1
    i += 1
steps_end = i  # position after the closing ]

steps_content = content[pos:steps_end]

# Now parse individual step objects
# Each step is { title: "...", content: "...", icon: "..." }
# We need to find each one
step_objects = []
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
            # Extract title
            title_m = re.search(r'title:\s*"(.*?)"', step_str)
            if title_m:
                title = title_m.group(1)
                step_objects.append((title, step_str))
            brace_start = None

print(f"Found {len(step_objects)} steps in wb_1")
for t, _ in step_objects:
    print(f"  {t}")

# Define which to keep and how to renumber
# Keep: Phần 1, 15, 16, 17, 18 (merge 19-29 into it), 30, 31
keep_titles = {
    "Phần 1: Giới thiệu",
    "Phần 15: Ribbon",
    "Phần 16: Quick Access Toolbar",
    "Phần 17: Ruler",
    "Phần 18: Backstage view",
    "Phần 30: Document Views và thu phóng",
    "Phần 31: Thử thách!",
}

# For Backstage view (Phần 18), we'll merge sections 19-29 into it
backstage_hotspot_titles = [
    "Phần 19: Open",
    "Phần 20: Save và Save As", 
    "Phần 21: Print",
    "Phần 22: Export",
    "Phần 23: Close",
    "Phần 24: Share",
    "Phần 25: Quay lại Word",
    "Phần 26: Account",
    "Phần 27: Options",
    "Phần 28: Info",
    "Phần 29: New",
]

# Build the merged Backstage content
backstage_step = None
backstage_extras = []
for title, step_str in step_objects:
    if title == "Phần 18: Backstage view":
        backstage_step = step_str
    if title in backstage_hotspot_titles:
        # Extract content
        cm = re.search(r'content:\s*"(.*?)",?\s*$', step_str, re.DOTALL)
        if cm:
            raw = cm.group(1)
            # Clean up
            backstage_extras.append(f"<h4>{title.split(': ', 1)[1]}</h4> {raw}")

# Merge extras into backstage content
if backstage_step and backstage_extras:
    # Find the content field end in backstage_step
    cm = re.search(r'(content:\s*")(.*?)(",\s*\n\s*icon:)', backstage_step, re.DOTALL)
    if cm:
        existing_content = cm.group(2)
        merged_content = existing_content + " " + " ".join(backstage_extras)
        backstage_step_new = backstage_step[:cm.start(2)] + merged_content + backstage_step[cm.end(2):]
    else:
        backstage_step_new = backstage_step
else:
    backstage_step_new = backstage_step

# Build new steps list
new_steps = []
renumber = 1
for title, step_str in step_objects:
    if title in keep_titles:
        if title == "Phần 18: Backstage view":
            step_to_use = backstage_step_new
        else:
            step_to_use = step_str
        
        # Renumber
        new_title = f"Phần {renumber}: {title.split(': ', 1)[1]}"
        step_to_use = step_to_use.replace(f'title: "{title}"', f'title: "{new_title}"')
        new_steps.append(step_to_use)
        renumber += 1

print(f"\nNew steps ({len(new_steps)}):")
for s in new_steps:
    tm = re.search(r'title:\s*"(.*?)"', s)
    if tm:
        print(f"  {tm.group(1)}")

# Build new steps array
new_steps_str = "[\n" + ",\n".join(f"                    {s}" for s in new_steps) + "\n                ]"

# Replace in content
new_content = content[:pos] + new_steps_str + content[steps_end:]

with open('data/lessons.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("\nDone! Updated lessons.js")
