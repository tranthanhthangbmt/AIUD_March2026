import os
import re

BASE_DIR = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Excel"

def check_images_in_file(filepath):
    dir_path = os.path.dirname(filepath)
    images_dir = os.path.join(dir_path, "images")
    
    if not os.path.exists(images_dir):
        print(f"  Error: images directory not found in {dir_path}")
        return
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find ![alt](images/filename.ext)
    pattern = r'!\[[^\]]*\]\(images/([^\)]+)\)'
    
    matches = re.findall(pattern, content)
    broken_count = 0
    for img_name in matches:
        # Some links might have titles: "filename.png \"title\""
        clean_img_name = img_name.split(' ')[0]
        img_path = os.path.join(images_dir, clean_img_name)
        if not os.path.exists(img_path):
            print(f"  Broken image in {os.path.basename(filepath)}: {clean_img_name}")
            broken_count += 1
            
    return broken_count

def run():
    print("Checking Excel images...")
    total_broken = 0
    
    # Basic
    basic_path = os.path.join(BASE_DIR, "Basic")
    for f in os.listdir(basic_path):
        if f.endswith('.md'):
            total_broken += check_images_in_file(os.path.join(basic_path, f)) or 0
            
    # Advanced
    adv_path = os.path.join(BASE_DIR, "Advanced")
    for f in os.listdir(adv_path):
        if f.endswith('.md'):
            total_broken += check_images_in_file(os.path.join(adv_path, f)) or 0
            
    print(f"Total broken images found: {total_broken}")

if __name__ == "__main__":
    run()
