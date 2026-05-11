import re
with open('data/lessons.js', encoding='utf-8') as f:
    content = f.read()
for title in re.findall(r'title:\s*[\"\'\`](.*?)[\"\'\`]', content):
    if 'Excel' in title:
        print(title)
