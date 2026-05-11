import os
import re

BASE_DIR = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Excel"

def fix_images_in_dir(path):
    images_dir = os.path.join(path, "images")
    if not os.path.exists(images_dir):
        return
    
    # 1. Rename files on disk
    rename_map = {}
    for f in os.listdir(images_dir):
        if ' ' in f:
            new_f = f.replace(' ', '_')
            os.rename(os.path.join(images_dir, f), os.path.join(images_dir, new_f))
            rename_map[f] = new_f
            print(f"  Renamed image: {f} -> {new_f}")
            
    if not rename_map:
        return

    # 2. Update MD files
    for md_file in os.listdir(path):
        if md_file.endswith('.md'):
            md_path = os.path.join(path, md_file)
            with open(md_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for old_name, new_name in rename_map.items():
                # Replace images/old name.ext with images/new_name.ext
                # Handle space in regex
                old_name_escaped = re.escape(old_name)
                new_content = new_content.replace(f'images/{old_name}', f'images/{new_name}')
            
            if new_content != content:
                with open(md_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"  Updated links in {md_file}")

def run():
    print("Fixing Excel images with spaces...")
    fix_images_in_dir(os.path.join(BASE_DIR, "Basic"))
    fix_images_in_dir(os.path.join(BASE_DIR, "Advanced"))

if __name__ == "__main__":
    run()
