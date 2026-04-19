import requests
import re
from bs4 import BeautifulSoup

BASE_URL = "https://iiab.live/modules/en-gcf_learn_2021/edu.gcfglobal.org/en/word/"
LESSONS = [
    (1, "getting-started-with-word"), (2, "understanding-onedrive"), (3, "creating-and-opening-documents"),
    (4, "saving-and-sharing-documents"), (5, "text-basics"), (6, "formatting-text"),
    (7, "using-find-and-replace"), (8, "indents-and-tabs"), (9, "line-and-paragraph-spacing"),
    (10, "lists"), (11, "links"), (12, "page-layout"), (13, "printing-documents"),
    (14, "breaks"), (15, "columns"), (16, "headers-and-footers"), (17, "page-numbers"),
    (23, "tables"), (25, "checking-spelling-and-grammar")
]

mapping = {}

print("Scanning for YouTube IDs...")

for lid, slug in LESSONS:
    url = f"{BASE_URL}{slug}/1/index.html"
    try:
        res = requests.get(url, timeout=10)
        if res.status_code == 200:
            # The browser found IDs in .webm links. Let's search the whole HTML for embed/...webm
            match = re.search(r'www\.youtube\.com/embed/([a-zA-Z0-9_-]+)\.webm', res.text)
            if match:
                yt_id = match.group(1)
                mapping[f"wb_{lid}"] = yt_id
                print(f"  wb_{lid}: {yt_id}")
            else:
                # Fallback to direct youtube embed search
                match = re.search(r'youtube\.com/embed/([a-zA-Z0-9_-]+)', res.text)
                if match:
                    yt_id = match.group(1)
                    mapping[f"wb_{lid}"] = yt_id
                    print(f"  wb_{lid}: {yt_id} (embed)")
                else:
                    print(f"  wb_{lid}: NOT FOUND")
        else:
            print(f"  wb_{lid}: Status {res.status_code}")
    except Exception as e:
        print(f"  wb_{lid}: Error {e}")

print("\nFinal Mapping:")
print(mapping)
