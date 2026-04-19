import requests
import re

BASE_URL = "https://iiab.live/modules/en-gcf_learn_2021/edu.gcfglobal.org/en/word/"
# Comprehensive list of Word lessons from GCFGlobal
LESSONS = [
    # Basic (some already done, but re-scanning is safe)
    (1, "getting-started-with-word"), (2, "understanding-onedrive"), (3, "creating-and-opening-documents"),
    (4, "saving-and-sharing-documents"), (5, "text-basics"), (6, "formatting-text"),
    (7, "using-find-and-replace"), (8, "indents-and-tabs"), (9, "line-and-paragraph-spacing"),
    (10, "lists"), (11, "links"), (12, "page-layout"), (13, "printing-documents"),
    (14, "breaks"), (15, "columns"), (16, "headers-and-footers"), (17, "page-numbers"),
    (23, "tables"), (25, "checking-spelling-and-grammar"),
    # Advanced
    (18, "pictures-and-text-wrapping"), (19, "formatting-pictures"), (20, "shapes"),
    (21, "text-boxes"), (22, "aligning-ordering-and-grouping-objects"), (24, "charts"),
    (26, "track-changes-and-comments"), (27, "inspecting-and-protecting-documents"), (28, "smartart-graphics"),
    (29, "applying-and-modifying-styles"), (30, "mail-merge"), (31, "what-is-office-365"),
    (32, "new-features-in-office-2019"), (33, "office-intelligent-services"), (34, "using-the-draw-tab"),
    (35, "working-with-icons")
]

mapping = {}

print("Scanning for YouTube IDs...")

for lid, slug in LESSONS:
    url = f"{BASE_URL}{slug}/1/index.html"
    try:
        res = requests.get(url, timeout=10)
        if res.status_code == 200:
            match = re.search(r'www\.youtube\.com/embed/([a-zA-Z0-9_-]+)\.webm', res.text)
            if not match:
                match = re.search(r'youtube\.com/embed/([a-zA-Z0-9_-]+)', res.text)
            
            if match:
                yt_id = match.group(1)
                mapping[f"wa_{lid}"] = yt_id if lid >= 18 else yt_id # wa for word advanced, but let's use id suffix
                print(f"  Lesson {lid}: {yt_id}")
            else:
                print(f"  Lesson {lid}: NOT FOUND")
    except Exception as e:
        print(f"  Lesson {lid}: Error {e}")

print("\nFinal Mapping:")
print(mapping)
