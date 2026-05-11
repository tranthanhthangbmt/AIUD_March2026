import re
content = open('data/lessons.js', encoding='utf-8').read()
# Find all remaining broken video URLs
matches = re.findall(r'\.\./.*/www\.youtube\.com/embed/[^\."]+\.webm', content)
unique = set(matches)
print(f"Found {len(matches)} total, {len(unique)} unique broken URLs:")
for m in sorted(unique)[:10]:
    print(f"  {m}")
