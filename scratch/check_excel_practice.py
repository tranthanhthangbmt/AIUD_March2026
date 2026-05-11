import os
import re

BASE_DIR = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Excel"

def check_practice_in_file(filepath):
    dir_path = os.path.dirname(filepath)
    practice_dir = os.path.join(dir_path, "practice_files")
    
    if not os.path.exists(practice_dir):
        return 0
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find [text](practice_files/filename.ext)
    pattern = r'\[[^\]]*\]\(practice_files/([^\)]+)\)'
    
    matches = re.findall(pattern, content)
    broken_count = 0
    for file_name in matches:
        file_path = os.path.join(practice_dir, file_name)
        if not os.path.exists(file_path):
            print(f"  Broken practice file in {os.path.basename(filepath)}: {file_name}")
            broken_count += 1
            
    return broken_count

def run():
    print("Checking Excel practice files...")
    total_broken = 0
    
    # Basic
    basic_path = os.path.join(BASE_DIR, "Basic")
    for f in os.listdir(basic_path):
        if f.endswith('.md'):
            total_broken += check_practice_in_file(os.path.join(basic_path, f)) or 0
            
    # Advanced
    adv_path = os.path.join(BASE_DIR, "Advanced")
    for f in os.listdir(adv_path):
        if f.endswith('.md'):
            total_broken += check_practice_in_file(os.path.join(adv_path, f)) or 0
            
    print(f"Total broken practice files found: {total_broken}")

if __name__ == "__main__":
    run()
