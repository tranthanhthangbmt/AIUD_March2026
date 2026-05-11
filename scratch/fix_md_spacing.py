import os
import re

BASIC_DIR = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Excel\Basic"
ADV_DIR = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Excel\Advanced"

VN_CHARS = "a-zA-Z0-9àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹdđ"

def fix_spacing(content):
    # 1. Fix images joined with text (put them on new lines)
    content = re.sub(r'([^\n])(!\[)', r'\1\n\n\2', content) # Double newline for safety
    
    # 2. Fix bullet points joined with text
    # Ensure there is a blank line before a list starts if it follows a paragraph
    content = re.sub(r'([^\n])(\n\s*\* )', r'\1\n\2', content)
    content = re.sub(r'([^\n])(\s+\*\s)', r'\1\n\n* ', content)
    content = re.sub(r'([^\n])(\s+-\s)', r'\1\n\n- ', content)
    
    # Handle the specific case of "***" which I converted to bullet points
    content = re.sub(r'([^\n])(\s*\*\*\*)', r'\1\n\n* **', content)
    content = re.sub(r'(\*\*\*)', r'\n* **', content)
    
    # Ensure space after the bullet asterisk if missing
    content = re.sub(r'^\*(\w)', r'* \1', content, flags=re.MULTILINE)

    # 3. Clean up spaces INSIDE bold tags
    content = re.sub(r'\*\*\s+([^*]+?)\s+\*\*', r'**\1**', content)
    content = re.sub(r'\*\*\s+([^*]+?)\*\*', r'**\1**', content)
    content = re.sub(r'\*\*([^*]+?)\s+\*\*', r'**\1**', content)
    
    # 4. Ensure space OUTSIDE bold tags
    content = re.sub(f'([{VN_CHARS}])(\*\*)', r'\1 \2', content)
    content = re.sub(f'(\*\*)([{VN_CHARS}])', r'\1 \2', content)

    # 5. Handle joined headers and paragraphs
    content = re.sub(r'^(#+\s+.*?)(\s+\*\*)', r'\1\n\n\2', content, flags=re.MULTILINE)
    
    # 6. Handle double bold tags
    content = content.replace('****', '** **')
    
    # 7. Clean up
    content = content.replace('  ', ' ')
    # Fix spaces before punctuation
    content = re.sub(r'(?<!\*)\s+([.,!?;)])', r'\1', content)
    
    # Ensure single newline after images if they are in the middle of text
    content = re.sub(r'(\)\]\s*)([^\n])', r'\1\n\n\2', content) 

    # FINAL CLEANUP: Ensure no triple newlines
    content = re.sub(r'\n{3,}', '\n\n', content)
    
    return content

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = fix_spacing(content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def run():
    count = 0
    for d in [BASIC_DIR, ADV_DIR]:
        if not os.path.exists(d): continue
        for f in os.listdir(d):
            if f.endswith('.md'):
                if process_file(os.path.join(d, f)):
                    count += 1
                    print(f"Fixed formatting in {f}")
    print(f"Total files fixed: {count}")

if __name__ == "__main__":
    run()
