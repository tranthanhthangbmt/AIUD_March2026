import os
import requests
from bs4 import BeautifulSoup
import re
from urllib.parse import urljoin

BASE_URL = "https://iiab.live/modules/en-gcf_learn_2021/edu.gcfglobal.org/en/powerpoint/index.html"
LESSON_BASE = "https://iiab.live/modules/en-gcf_learn_2021/edu.gcfglobal.org/en/powerpoint/"
IMAGE_BASE = "https://iiab.live/modules/en-gcf_learn_2021/media.gcflearnfree.org/" # Not exact, we'll use urljoin
PRACTICE_BASE = "https://iiab.live/modules/en-gcf_learn_2021/media.gcflearnfree.org/content/"

OUTPUT_DIR = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\PowerPoint"
BASIC_DIR = os.path.join(OUTPUT_DIR, "Basic")
ADV_DIR = os.path.join(OUTPUT_DIR, "Advanced")

for d in [os.path.join(BASIC_DIR, "images"), os.path.join(ADV_DIR, "images")]:
    os.makedirs(d, exist_ok=True)

def scrape_lessons():
    print("Fetching index page...")
    resp = requests.get(BASE_URL)
    resp.raise_for_status()
    soup = BeautifulSoup(resp.text, 'html.parser')
    
    # In GCFGlobal index pages, lessons are typically inside 'topic-item' or 'lesson-list'
    # Actually we can just find all links that match 'powerpoint/.*/1/index.html' or similar
    # But some might be to videos. Let's rely on the structure or just extract the lesson IDs
    # Wait, the index page HTML has a specific structure. Let's just find all 'a' tags that match lesson structure
    lesson_links = []
    seen_urls = set()
    for a in soup.find_all('a', href=True):
        href = a['href']
        # Looking for paths like 'lesson-slug/1/index.html' or similar
        # Since it's a relative URL, it might be 'getting-started-with-powerpoint/1/index.html'
        if re.search(r'([a-zA-Z0-9\-]+)/1/index\.html', href):
            url = urljoin(BASE_URL, href)
            if url not in seen_urls and '/powerpoint/' in url:
                seen_urls.add(url)
                # Need to find the name of the lesson. We'll extract from URL slug.
                slug = re.search(r'powerpoint/([a-zA-Z0-9\-]+)/1/', url).group(1)
                lesson_links.append((url, slug))
                
    print(f"Found {len(lesson_links)} lessons. Starting scrape...")
    
    for i, (url, slug) in enumerate(lesson_links, 1):
        if i <= 12:
            target_dir = BASIC_DIR
            cat = "Basic"
        else:
            target_dir = ADV_DIR
            cat = "Advanced"
            
        print(f"Scraping Lesson {i}: {slug}")
        lesson_resp = requests.get(url)
        lesson_soup = BeautifulSoup(lesson_resp.text, 'html.parser')
        
        # The content is usually in <div id="lessoncontent">
        content_div = lesson_soup.find('div', id='lessoncontent')
        if not content_div:
            print(f"  Warning: No lessoncontent found for {url}")
            continue
            
        # Download images
        for img in content_div.find_all('img'):
            src = img.get('src')
            if src:
                img_url = urljoin(url, src)
                # Ensure it's not a tiny tracking pixel, though we'll download everything
                img_filename = os.path.basename(img_url.split('?')[0])
                if not img_filename:
                    continue
                    
                img_filepath = os.path.join(target_dir, "images", img_filename)
                
                # Download if not exists
                if not os.path.exists(img_filepath):
                    try:
                        img_data = requests.get(img_url).content
                        with open(img_filepath, 'wb') as f:
                            f.write(img_data)
                    except Exception as e:
                        print(f"  Failed to download image {img_url}: {e}")
                
                # Update src to point to our local structure
                img['src'] = f"Module_1-6/TaiLieuHuongDan/PowerPoint/{cat}/images/{img_filename}"
                
        # Also let's find practice files (if any are linked in href)
        # We can't easily download all practice files automatically unless we parse hrefs for typical extensions
        for a in content_div.find_all('a', href=True):
            href = a['href']
            if href.endswith(('.pptx', '.docx', '.xlsx', '.zip')):
                file_url = urljoin(url, href)
                filename = os.path.basename(file_url.split('?')[0])
                pf_dir = os.path.join(target_dir, "practice_files")
                os.makedirs(pf_dir, exist_ok=True)
                pf_path = os.path.join(pf_dir, filename)
                if not os.path.exists(pf_path):
                    try:
                        pf_data = requests.get(file_url).content
                        with open(pf_path, 'wb') as f:
                            f.write(pf_data)
                    except Exception as e:
                        print(f"  Failed to download practice file {file_url}: {e}")
                
                a['href'] = f"Module_1-6/TaiLieuHuongDan/PowerPoint/{cat}/practice_files/{filename}"
                
        # Remove unwanted navigation/sidebar elements inside lessoncontent if any
        for div in content_div.find_all('div', class_=['sidebar', 'social-share']):
            div.decompose()
            
        # Extract the title if available in h2 or h1
        h1 = content_div.find('h1')
        title = h1.text if h1 else slug.replace('-', ' ').title()
        
        # Save HTML
        out_filename = f"Lesson_{i}_{slug}.html"
        out_filepath = os.path.join(target_dir, out_filename)
        with open(out_filepath, 'w', encoding='utf-8') as f:
            f.write(str(content_div))
            
    print("Scraping completed!")

if __name__ == "__main__":
    scrape_lessons()
