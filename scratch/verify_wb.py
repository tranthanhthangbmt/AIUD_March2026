"""
Final verification: count steps per lesson using proper bracket matching.
"""
import re

with open('data/lessons.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all wb_* lessons
pattern = re.compile(r'id:\s*"(wb_\d+)"')
for m in pattern.finditer(content):
    lesson_id = m.group(1)
    pos = m.start()
    
    # Find title
    title_m = re.search(r'title:\s*"(.*?)"', content[pos+len(m.group(0)):pos+500])
    title = title_m.group(1) if title_m else "?"
    
    # Find steps: [ and match brackets
    steps_start = content.find('steps: [', pos)
    if steps_start == -1 or steps_start > pos + 50000:
        print(f"{lesson_id}: {title} - NO STEPS")
        continue
    
    bracket_pos = steps_start + len('steps: [') - 1
    bracket_count = 1
    i = bracket_pos + 1
    while bracket_count > 0 and i < len(content):
        if content[i] == '[':
            bracket_count += 1
        elif content[i] == ']':
            bracket_count -= 1
        i += 1
    
    steps_content = content[bracket_pos:i]
    titles = re.findall(r'title:\s*"(Phần \d+:.*?)"', steps_content)
    has_img_count = sum(1 for t_pos in [steps_content.find(f'title: "{t}"') for t in titles] 
                       if '<img' in steps_content[t_pos:t_pos+5000] or '\\u003cimg' in steps_content[t_pos:t_pos+5000])
    
    status = "✅" if all('<img' in steps_content[steps_content.find(f'title: "{t}"'):steps_content.find(f'title: "{t}"')+5000] or 
                        '\\u003cimg' in steps_content[steps_content.find(f'title: "{t}"'):steps_content.find(f'title: "{t}"')+5000]
                        for t in titles) else "⚠️"
    
    print(f"{status} {lesson_id}: {title:45s} | {len(titles)} steps")
