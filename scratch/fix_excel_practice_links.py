import os
import re

BASE_DIR = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Excel"

def get_actual_files(path):
    if not os.path.exists(path):
        return {}
    return {f.lower().replace(' ', ''): f for f in os.listdir(path)}

basic_files = get_actual_files(os.path.join(BASE_DIR, "Basic", "practice_files"))
adv_files = get_actual_files(os.path.join(BASE_DIR, "Advanced", "practice_files"))

def fix_links_in_file(filepath, actual_files, section_name):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find [text](practice_files/filename.ext)
    pattern = r'\[([^\]]+)\]\(practice_files/([^\)]+)\)'
    
    def replace_func(match):
        text = match.group(1)
        filename = match.group(2)
        
        # Clean up filename for matching
        clean_filename = filename.lower().replace(' ', '').replace('%20', '')
        
        if clean_filename in actual_files:
            new_filename = actual_files[clean_filename]
            print(f"  Fixed link in {os.path.basename(filepath)}: {filename} -> {new_filename}")
            return f'[{text}](practice_files/{new_filename})'
        else:
            print(f"  Warning: Could not find match for {filename} in {section_name}")
            return match.group(0)

    new_content = re.sub(pattern, replace_func, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def run():
    print("Fixing Excel practice links...")
    
    # Basic
    basic_path = os.path.join(BASE_DIR, "Basic")
    for f in os.listdir(basic_path):
        if f.endswith('.md'):
            fix_links_in_file(os.path.join(basic_path, f), basic_files, "Basic")
            
    # Advanced
    adv_path = os.path.join(BASE_DIR, "Advanced")
    for f in os.listdir(adv_path):
        if f.endswith('.md'):
            fix_links_in_file(os.path.join(adv_path, f), adv_files, "Advanced")

if __name__ == "__main__":
    run()
