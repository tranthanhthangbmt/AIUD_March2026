import re
import json
import os

lessons_js_path = r"I:\MY_CODE\AIUD_March2026\data\lessons.js"

if not os.path.exists(lessons_js_path):
    print(f"Error: {lessons_js_path} not found")
    exit(1)

with open(lessons_js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract video URLs
video_matches = re.findall(r'id: "(e[ab]_\d+)",.*?video: "(https://www\.youtube\.com/embed/[^"]+)"', content, re.DOTALL)
video_map = dict(video_matches)

output_path = r"I:\MY_CODE\AIUD_March2026\scratch\excel_video_map.json"
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(video_map, f, indent=4)

print(f"Extracted {len(video_map)} video URLs to {output_path}")
