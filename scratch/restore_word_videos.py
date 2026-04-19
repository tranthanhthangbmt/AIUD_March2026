import os
import requests
import re
import json
from bs4 import BeautifulSoup
from urllib.parse import urljoin

BASE_URL = "https://iiab.live/modules/en-gcf_learn_2021/edu.gcfglobal.org/en/word/"
LESSON_JS_PATH = r"I:\MY_CODE\AIUD_March2026\data\lessons.js"

LESSONS = [
    (1, "getting-started-with-word"), (2, "understanding-onedrive"), (3, "creating-and-opening-documents"),
    (4, "saving-and-sharing-documents"), (5, "text-basics"), (6, "formatting-text"),
    (7, "using-find-and-replace"), (8, "indents-and-tabs"), (9, "line-and-paragraph-spacing"),
    (10, "lists"), (11, "links"), (12, "page-layout"), (13, "printing-documents"),
    (14, "breaks"), (15, "columns"), (16, "headers-and-footers"), (17, "page-numbers"),
    (23, "tables"), (25, "checking-spelling-and-grammar")
]

video_map = {}

print("Fetching video URLs from source...")

for lid, slug in LESSONS:
    url = f"{BASE_URL}{slug}/1/index.html"
    try:
        res = requests.get(url, timeout=10)
        if res.status_code == 200:
            soup = BeautifulSoup(res.content, 'html.parser')
            # Look for iframe or any youtube link
            yt_id = None
            
            # 1. Check iframes
            for iframe in soup.find_all('iframe'):
                src = iframe.get('src', '')
                match = re.search(r'(?:youtube\.com/embed/|youtu\.be/|v=)([a-zA-Z0-9_-]+)', src)
                if match:
                    yt_id = match.group(1)
                    break
            
            # 2. Check all links if iframe failed
            if not yt_id:
                for a in soup.find_all('a', href=True):
                    href = a['href']
                    match = re.search(r'(?:youtube\.com/embed/|youtu\.be/|youtube\.com/watch\?v=)([a-zA-Z0-9_-]+)', href)
                    if match:
                        yt_id = match.group(1)
                        break
            
            if yt_id:
                video_map[f"wb_{lid}"] = f"https://www.youtube.com/embed/{yt_id}"
                print(f"  Lesson {lid}: Found video {yt_id}")
            else:
                print(f"  Lesson {lid}: No video found.")
    except Exception as e:
        print(f"  Error fetching lesson {lid}: {e}")

# Update lessons.js
with open(LESSON_JS_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# We need to find each lesson block and inject/update the video property
# Example: id: "wb_1", ... (lots of lines) ... tasks:
for lesson_id, video_url in video_map.items():
    # Regex to find the lesson object with this id and inject video property after description
    pattern = r'(id:\s*"' + re.escape(lesson_id) + r'",\s*sessionId:\s*65,\s*title:\s*"[^"]+",\s*description:\s*"[^"]+",\s*)'
    # Check if video already exists (it shouldn't, but let's be safe)
    if 'video:' in content[content.find(f'id: "{lesson_id}"'):content.find(f'id: "{lesson_id}"')+500]:
        # Update existing
        sub_pattern = r'(id:\s*"' + re.escape(lesson_id) + r'".*?video:\s*")[^"]+'
        content = re.sub(sub_pattern, r'\1' + video_url, content, flags=re.DOTALL)
    else:
        # Inject new
        content = re.sub(pattern, r'\1video: "' + video_url + '",\n                ', content)

with open(LESSON_JS_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("\nDone! lessons.js updated with restored videos.")
