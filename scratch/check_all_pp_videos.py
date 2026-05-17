import re

with open(r'I:\MY_CODE\AIUD_March2026\data\lessons.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all PowerPoint lesson blocks
p = content.find('title: "PowerPoint Cơ Bản"')
pp_content = content[p:]

matches = re.findall(r'id:\s*"((?:pb|pa)_\d+)".*?description:\s*"[^"]+".*?steps:\s*\[(.*?)\]\s*\}', pp_content, flags=re.DOTALL)

print(f"Found {len(matches)} PowerPoint lessons.")
for lesson_id, steps_str in matches:
    # Look for video-embed
    embeds = re.findall(r'<div class=\\"video-embed\\">(.*?)</div>', steps_str, flags=re.DOTALL)
    if embeds:
        for emb in embeds:
            src_match = re.search(r'src=\\"([^"]+)\\"', emb)
            src = src_match.group(1) if src_match else "NO_SRC"
            print(f"  {lesson_id}: {src}")
    else:
        print(f"  {lesson_id}: No video-embed")
