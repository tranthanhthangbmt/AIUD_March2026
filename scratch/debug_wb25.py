import re
with open('data/lessons.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find wb_25
pos = content.find('id: "wb_25"')
print(f'wb_25 at pos {pos}')

# Find the end of session 65 (Word Co Ban) - look for the next top-level session
# Search for pattern like '    {\n        id: 60,' or similar
next_session = content.find('\n    {\n        id: 60,', pos)
if next_session == -1:
    next_session = content.find('\n    {\n        id: 7,', pos)

section = content[pos:next_session] if next_session > 0 else content[pos:pos+100000]

# Count steps arrays
steps_count = section.count('steps: [')
print(f'Number of steps arrays in wb_25 section: {steps_count}')

# Find all lesson ids
ids = re.findall(r'id:\s*"(wb_\d+)"', section)
print(f'Lesson IDs found after wb_25: {ids}')

# Find all step titles within wb_25 proper
# wb_25's steps are the first steps: [ after its id
steps_start = section.find('steps: [')
# Find the matching ]
bracket_pos = steps_start + len('steps: [') - 1
bracket_count = 1
i = bracket_pos + 1
while bracket_count > 0 and i < len(section):
    if section[i] == '[':
        bracket_count += 1
    elif section[i] == ']':
        bracket_count -= 1
    i += 1

wb25_steps = section[bracket_pos:i]
titles = re.findall(r'title:\s*"(Phần \d+:.*?)"', wb25_steps)
print(f'\nwb_25 has {len(titles)} steps:')
for t in titles:
    print(f'  {t}')
