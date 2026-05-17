import re

with open(r'I:\MY_CODE\AIUD_March2026\data\lessons.js', 'r', encoding='utf-8') as f:
    content = f.read()

for match in re.findall(r'(title:.*Buổi.*)', content, re.IGNORECASE):
    print(match)
