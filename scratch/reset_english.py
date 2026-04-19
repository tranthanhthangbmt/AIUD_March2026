import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, unquote
import markdownify

BASE_URL = "https://iiab.live/modules/en-gcf_learn_2021/edu.gcfglobal.org/en/word/"
OUTPUT_DIR = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Word\Basic"

LESSONS = [
    (1, "getting-started-with-word"), (2, "understanding-onedrive"), (3, "creating-and-opening-documents"),
    (4, "saving-and-sharing-documents"), (5, "text-basics"), (6, "formatting-text"),
    (7, "using-find-and-replace"), (8, "indents-and-tabs"), (9, "line-and-paragraph-spacing"),
    (10, "lists"), (11, "links"), (12, "page-layout"), (13, "printing-documents"),
    (14, "breaks"), (15, "columns"), (16, "headers-and-footers"), (17, "page-numbers"),
    (23, "tables"), (25, "checking-spelling-and-grammar")
]

def process_lesson(lesson_id, lesson_slug):
    url = f"{BASE_URL}{lesson_slug}/1/index.html"
    print(f"Processing Lesson {lesson_id}: {url}")
    
    try:
        res = requests.get(url, timeout=15)
        res.raise_for_status()
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return
        
    soup = BeautifulSoup(res.content, 'html.parser')
    content_area = soup.find('div', id='lessoncontent') or soup.find('div', id='content-area') or soup.find('main')
    
    if not content_area:
        print("Couldn't find content area!!!")
        return
        
    # Process iframes to placeholders (not really needed but good to stay consistent)
    for iframe in content_area.find_all('iframe'):
        src = iframe.get('src')
        if src:
            video_link = soup.new_tag('a', href=src)
            video_link.string = f"[Video Minh Họa]({src})"
            iframe.replace_with(video_link)
            
    # Process images
    for img in content_area.find_all('img'):
        src = img.get('src')
        if src:
            abs_url = urljoin(url, src)
            filename = os.path.basename(unquote(abs_url.split('?')[0]))
            img['src'] = f"images/{filename}"

    # Process practice files
    for a in content_area.find_all('a'):
        href = a.get('href')
        if href and (href.endswith('.docx') or href.endswith('.doc')):
            abs_url = urljoin(url, href)
            filename = os.path.basename(unquote(abs_url.split('?')[0]))
            a['href'] = f"practice_files/{filename}"
            
    # Convert HTML to Markdown
    md_text = markdownify.markdownify(str(content_area), heading_style="ATX")
    
    # Prepend Title
    title = soup.find('h1')
    if title:
        md_text = f"# {title.text.strip()}\n\n" + md_text
    else:
        md_text = f"# Lesson {lesson_id}: {lesson_slug}\n\n" + md_text
        
    md_filename = f"Lesson_{lesson_id}_{lesson_slug}.md"
    out_md_path = os.path.join(OUTPUT_DIR, md_filename)
    
    with open(out_md_path, 'w', encoding='utf-8') as f:
        f.write(md_text)
        
    print(f"  Reset {md_filename} to English.")

for lid, slug in LESSONS:
    process_lesson(lid, slug)
