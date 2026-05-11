import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, unquote
import markdownify

BASE_URL = "https://iiab.live/modules/en-gcf_learn_2021/edu.gcfglobal.org/en/excel/"
OUTPUT_DIR = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Excel"

LESSONS = [
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
    (35, "working-with-icons")
]

BASIC_IDS = set(range(1, 13))

def get_category_dir(lesson_id):
    cat = "Basic" if lesson_id in BASIC_IDS else "Advanced"
    return os.path.join(OUTPUT_DIR, cat)

def download_file(url, out_path):
    if os.path.exists(out_path):
        return
    try:
        r = requests.get(url, stream=True, timeout=15)
        r.raise_for_status()
        with open(out_path, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
    except Exception as e:
        print(f"Error downloading {url}: {e}")

def process_lesson(lesson_id, lesson_slug):
    url = f"{BASE_URL}{lesson_slug}/1/index.html"
    print(f"Processing Lesson {lesson_id}: {url}")
    
    cat_dir = get_category_dir(lesson_id)
    images_dir = os.path.join(cat_dir, "images")
    practice_dir = os.path.join(cat_dir, "practice_files")
    
    os.makedirs(images_dir, exist_ok=True)
    os.makedirs(practice_dir, exist_ok=True)
    
    try:
        res = requests.get(url, timeout=10)
    except:
        print("Timeout on page!")
        return
        
    if res.status_code != 200:
        print(f"Failed to fetch {url} (status: {res.status_code})")
        return
        
    soup = BeautifulSoup(res.content, 'html.parser')
    
    # Try to find the main content
    content_area = soup.find('div', id='lessoncontent') or soup.find('div', id='content-area') or soup.find('main')
    
    if not content_area:
        print("Couldn't find content area!!!")
        return
        
    # Process iframes (videos)
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
            local_img_path = os.path.join(images_dir, filename)
            download_file(abs_url, local_img_path)
            img['src'] = f"images/{filename}"

    # Process practice files
    for a in content_area.find_all('a'):
        href = a.get('href')
        if href and (href.endswith('.xlsx') or href.endswith('.xls') or 'practice' in href.lower() and '.xls' in href):
            abs_url = urljoin(url, href)
            filename = os.path.basename(unquote(abs_url.split('?')[0]))
            local_file_path = os.path.join(practice_dir, filename)
            print(f"  Downloading practice file: {filename}")
            download_file(abs_url, local_file_path)
            a['href'] = f"practice_files/{filename}"
            
    # Also save HTML file just in case (like scrape_word probably did because list_dir showed .html files)
    html_filename = f"Lesson_{lesson_id}_{lesson_slug}.html"
    out_html_path = os.path.join(cat_dir, html_filename)
    with open(out_html_path, 'w', encoding='utf-8') as f:
        f.write(str(content_area))

    # Convert HTML to Markdown
    md_text = markdownify.markdownify(str(content_area), heading_style="ATX")
    
    # Prepend Title
    title = soup.find('h1')
    if title:
        md_text = f"# {title.text.strip()}\n\n" + md_text
    else:
        md_text = f"# Lesson {lesson_id}: {lesson_slug}\n\n" + md_text
        
    # Save md file
    md_filename = f"Lesson_{lesson_id}_{lesson_slug}.md"
    out_md_path = os.path.join(cat_dir, md_filename)
    
    with open(out_md_path, 'w', encoding='utf-8') as f:
        f.write(md_text)
        
    print(f"  Saved {md_filename}")

def main():
    for lesson_id, lesson_slug in LESSONS:
        process_lesson(lesson_id, lesson_slug)

if __name__ == "__main__":
    main()
