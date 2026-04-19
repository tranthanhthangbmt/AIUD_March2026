import os
import re
import time
from deep_translator import GoogleTranslator

base_dir = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Word\Basic"

def translate_text(text):
    if not text.strip(): return text
    try:
        translated = GoogleTranslator(source='en', target='vi').translate(text)
        return translated
    except Exception as e:
        print(f"Translation failed for '{text[:20]}...': {e}")
        return text

# A function to carefully translate a line of markdown
def process_line(line):
    # If line is extremely short or just an image/link without text, keep it
    if len(line.strip()) < 3: return line
    if re.match(r'^!\[\]\([^)]+\)$', line.strip()): return line
    if re.match(r'^[-+*]\s*$', line.strip()): return line
    
    # We protect links [text](src) by extracting them
    # But translating text inside links is good!
    # Deep translator handles markdown somewhat okay, but let's just send the whole line.
    translated = translate_text(line)
    
    # Cleanup markdown artifacts that Google Translate ruins
    if translated:
        translated = re.sub(r'\*\*\s+(.*?)\s+\*\*', r'**\1**', translated)
        translated = re.sub(r'\[\s*(.*?)\s*\]\s*\(', r'[\1](', translated)
        translated = translated.replace('** ', '**').replace(' **', '**')
        # fix # heading spaces
        translated = re.sub(r'^(#+)\s*', r'\1 ', translated)
        return translated
    return line

file_list = [f for f in os.listdir(base_dir) if f.endswith('.md')]

for filename in file_list:
    path = os.path.join(base_dir, filename)
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
        
    print(f"Translating {filename}...")
    
    # Preprocessing: Remove the broken webp/webm video links
    # The pattern is: [![...](...webp)](...webm)
    content = re.sub(r'\[!\[[^\]]*\]\([^)]+\.webp\)\]\([^)]+\.webm\)', '', content, flags=re.MULTILINE|re.DOTALL)
    
    # Split content into blocks (paragraphs)
    blocks = content.split('\n\n')
    translated_blocks = []
    
    for block in blocks:
        block = block.strip()
        if not block:
            continue
            
        # Check if block is a pure image
        if block.startswith('![') and block.endswith(')') and '\n' not in block:
            translated_blocks.append(block)
            continue
            
        # Check if it's a code block
        if block.startswith('```') and block.endswith('```'):
            translated_blocks.append(block)
            continue
            
        # Translate line by line to preserve structure
        lines = block.split('\n')
        trans_lines = []
        for line in lines:
            line_stripped = line.strip()
            # If line is empty or just an image
            if not line_stripped:
                trans_lines.append(line)
            elif line_stripped.startswith('![') and line_stripped.endswith(')'):
                trans_lines.append(line)
            else:
                # keep indent
                indent = len(line) - len(line.lstrip())
                prefix = line[:indent]
                
                # Check for heading
                match_heading = re.match(r'^(#+)\s+(.*)', line_stripped)
                if match_heading:
                    lvl = match_heading.group(1)
                    txt = match_heading.group(2)
                    trans_lines.append(prefix + lvl + " " + process_line(txt))
                    continue
                    
                # Check for list
                match_list = re.match(r'^([-+*]|[0-9]+\.)\s+(.*)', line_stripped)
                if match_list:
                    marker = match_list.group(1)
                    txt = match_list.group(2)
                    trans_lines.append(prefix + marker + " " + process_line(txt))
                    continue
                    
                # Just translate
                trans_lines.append(prefix + process_line(line_stripped))
                
        translated_blocks.append('\n'.join(trans_lines))
        time.sleep(0.1) # anti-rate limit
        
    final_content = '\n\n'.join(translated_blocks)
    
    with open(path, 'w', encoding='utf-8') as file:
        file.write(final_content)
        
print("All files translated successfully!")
