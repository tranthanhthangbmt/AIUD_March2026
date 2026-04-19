import os
import re
import time
from deep_translator import GoogleTranslator

base_dir = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Word\Basic"

def translate_batch_texts(texts):
    if not texts: return []
    # Send all sentences in one batch to Google
    try:
        translated = GoogleTranslator(source='en', target='vi').translate_batch(texts)
        return translated
    except Exception as e:
        print(f"Batch translation failed: {e}")
        return texts

def extract_safe_str(text):
    # If standard markdown line, return safe str
    return text

file_list = [f for f in os.listdir(base_dir) if f.endswith('.md')]

for filename in file_list:
    path = os.path.join(base_dir, filename)
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
        
    print(f"Processing {filename}...")
    
    # Preprocessing: Remove the broken webp/webm video links
    content = re.sub(r'\[!\[[^\]]*\]\([^)]+\.webp\)\]\([^)]+\.webm\)', '', content, flags=re.MULTILINE|re.DOTALL)
    
    # Split content into blocks quickly
    lines = content.split('\n')
    
    # Identify lines that need translation
    tr_indices = []
    tr_texts = []
    
    for i, line in enumerate(lines):
        ls = line.strip()
        if not ls: continue
        if re.match(r'^!\[\]\([^)]+\)$', ls): continue
        if ls.startswith('![') and ls.endswith(')'): continue
        if ls.startswith('```'): continue
        if re.match(r'^[-+*]\s*$', ls): continue
        
        # Heading prefix
        match_heading = re.match(r'^(#+)\s+(.*)', ls)
        if match_heading:
            tr_texts.append(match_heading.group(2))
            tr_indices.append(i)
            continue
            
        match_list = re.match(r'^([-+*]|[0-9]+\.)\s+(.*)', ls)
        if match_list:
            tr_texts.append(match_list.group(2))
            tr_indices.append(i)
            continue
            
        tr_texts.append(ls)
        tr_indices.append(i)
        
    if tr_texts:
        # Group into chunks of 100 to avoid limits
        chunk_size = 50
        translated_results = []
        for i in range(0, len(tr_texts), chunk_size):
            chunk = tr_texts[i:i+chunk_size]
            res = translate_batch_texts(chunk)
            translated_results.extend(res)
            
        # Place back
        for i, idx in enumerate(tr_indices):
            original_line = lines[idx]
            indent = len(original_line) - len(original_line.lstrip())
            prefix = original_line[:indent]
            
            ls = original_line.strip()
            # extract markers
            marker = ""
            match_heading = re.match(r'^(#+)\s+', ls)
            match_list = re.match(r'^([-+*]|[0-9]+\.)\s+', ls)
            if match_heading: marker = match_heading.group(0)
            elif match_list: marker = match_list.group(0)
            
            tr_val = translated_results[i] if i < len(translated_results) and translated_results[i] else tr_texts[i]
            
            # Post-process translated val to fix broken markdown
            tr_val = str(tr_val)
            tr_val = re.sub(r'\*\*\s+(.*?)\s+\*\*', r'**\1**', tr_val)
            tr_val = re.sub(r'\[\s*(.*?)\s*\]\s*\(', r'[\1](', tr_val)
            tr_val = tr_val.replace('** ', '**').replace(' **', '**')
            
            lines[idx] = prefix + marker + tr_val
            
    final_content = '\n'.join(lines)
    
    with open(path, 'w', encoding='utf-8') as file:
        file.write(final_content)
        
print("All files translated successfully!")

# Then we run fix_tasks.py automatically!
print("Running fix_tasks.py to rebuild lessons.js...")
os.system(r"python I:\MY_CODE\AIUD_March2026\scratch\fix_tasks.py")
print("Done!")
