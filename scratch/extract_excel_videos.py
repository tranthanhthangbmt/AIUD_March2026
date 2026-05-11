"""
Scrape video URLs from the original GCF Excel lesson pages,
then update lessons.js to add video property to each Excel lesson.
"""
import requests
from bs4 import BeautifulSoup
import re
import json

BASE_URL = "https://iiab.live/modules/en-gcf_learn_2021/edu.gcfglobal.org/en/excel/"

ALL_LESSONS = [
    (1, "getting-started-with-excel"),
    (2, "understanding-onedrive"),
    (3, "creating-and-opening-workbooks"),
    (4, "saving-and-sharing-workbooks"),
    (5, "cell-basics"),
    (6, "modifying-columns-rows-and-cells"),
    (7, "formatting-cells"),
    (8, "understanding-number-formats"),
    (9, "working-with-multiple-worksheets"),
    (10, "using-find-replace"),
    (11, "checking-spelling"),
    (12, "page-layout-and-printing"),
    (13, "intro-to-formulas"),
    (14, "creating-more-complex-formulas"),
    (15, "relative-and-absolute-cell-references"),
    (16, "functions"),
    (17, "basic-tips-for-working-with-data"),
    (18, "freezing-panes-and-view-options"),
    (19, "sorting-data"),
    (20, "filtering-data"),
    (21, "groups-and-subtotals"),
    (22, "tables"),
    (23, "charts"),
    (24, "conditional-formatting"),
    (25, "comments-and-coauthoring"),
    (26, "inspecting-and-protecting-workbooks"),
    (27, "intro-to-pivottables"),
    (28, "doing-more-with-pivottables"),
    (29, "whatif-analysis"),
    (30, "what-is-office-365"),
    (31, "new-features-in-office-2019"),
    (32, "what-are-reference-styles"),
    (33, "office-intelligent-services"),
    (34, "using-the-draw-tab"),
    (35, "working-with-icons"),
]

def extract_video_url(lesson_id, slug):
    """Extract YouTube embed URL from a lesson page."""
    url = f"{BASE_URL}{slug}/1/index.html"
    try:
        res = requests.get(url, timeout=15)
        if res.status_code != 200:
            print(f"  ❌ Failed to fetch {url}")
            return None
        soup = BeautifulSoup(res.content, 'html.parser')
        
        # Look for iframe with YouTube or media URL
        for iframe in soup.find_all('iframe'):
            src = iframe.get('src', '')
            if 'youtube' in src or 'youtu.be' in src:
                # Normalize YouTube URL to embed format
                if '/embed/' in src:
                    return src.split('?')[0]  # Clean URL
                video_id_match = re.search(r'(?:v=|youtu\.be/)([a-zA-Z0-9_-]{11})', src)
                if video_id_match:
                    return f"https://www.youtube.com/embed/{video_id_match.group(1)}"
                return src
            elif 'media' in src or 'video' in src:
                return src
        
        # Also check for video tags
        for video in soup.find_all('video'):
            src = video.get('src') or (video.find('source') and video.find('source').get('src'))
            if src:
                return src
        
        return None
    except Exception as e:
        print(f"  ❌ Error: {e}")
        return None

# Step 1: Extract all video URLs
print("=" * 60)
print("Extracting video URLs from Excel lesson pages...")
print("=" * 60)

video_map = {}  # lesson_id -> video_url
for lesson_id, slug in ALL_LESSONS:
    print(f"Lesson {lesson_id}: {slug}...", end=" ")
    video_url = extract_video_url(lesson_id, slug)
    if video_url:
        video_map[lesson_id] = video_url
        print(f"✅ {video_url}")
    else:
        print("⚠️ No video found")

print(f"\nFound {len(video_map)} videos out of {len(ALL_LESSONS)} lessons.")

# Step 2: Update lessons.js
print("\n" + "=" * 60)
print("Updating lessons.js with video URLs...")
print("=" * 60)

lessons_js_path = r"I:\MY_CODE\AIUD_March2026\data\lessons.js"
with open(lessons_js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# For Basic lessons (eb_1 to eb_12)
for lesson_id in range(1, 13):
    if lesson_id in video_map:
        # Find the lesson entry and add video after description
        pattern = f'id: "eb_{lesson_id}",\n                sessionId: 67,\n                title: "Bài {lesson_id}:'
        if pattern in content:
            # Add video property after the description line
            desc_pattern = f'(id: "eb_{lesson_id}",\n                sessionId: 67,\n                title: "Bài {lesson_id}: [^"]+",\n                description: "[^"]+",)'
            replacement = f'\\1\n                video: "{video_map[lesson_id]}",'
            content = re.sub(desc_pattern, replacement, content)
            print(f"  ✅ Added video to eb_{lesson_id}")
        else:
            print(f"  ⚠️ Could not find eb_{lesson_id} in lessons.js")

# For Advanced lessons (ea_13 to ea_35)
for lesson_id in range(13, 36):
    if lesson_id in video_map:
        pattern = f'id: "ea_{lesson_id}",\n                sessionId: 68,\n                title: "Bài {lesson_id}:'
        if pattern in content:
            desc_pattern = f'(id: "ea_{lesson_id}",\n                sessionId: 68,\n                title: "Bài {lesson_id}: [^"]+",\n                description: "[^"]+",)'
            replacement = f'\\1\n                video: "{video_map[lesson_id]}",'
            content = re.sub(desc_pattern, replacement, content)
            print(f"  ✅ Added video to ea_{lesson_id}")
        else:
            print(f"  ⚠️ Could not find ea_{lesson_id} in lessons.js")

with open(lessons_js_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("\n🎉 Done! Video URLs added to lessons.js")
print(f"\nVideo summary:")
for lid, url in sorted(video_map.items()):
    prefix = "eb" if lid <= 12 else "ea"
    print(f"  {prefix}_{lid}: {url}")
