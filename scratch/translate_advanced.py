import os
import re
import time
from deep_translator import GoogleTranslator

# Directory for Advanced lessons
base_dir = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Word\Advanced"

# UI Terms to protect (Basic + Advanced)
UI_TERMS = [
    "Ribbon", "Quick Access Toolbar", "Backstage view", "Tell Me", "Ruler", 
    "Scroll Bar", "Zoom Control", "Document Views", "Read Mode", "Print Layout", 
    "Web Layout", "Microsoft Account", "OneDrive", "Office 365", "Word 2019", 
    "Word 2016", "File", "Home", "Insert", "Design", "Layout", "References", 
    "Mailings", "Review", "View", "Help", "Draw", "Save", "Save As", "Open", 
    "New", "Print", "Share", "Export", "Close", "Account", "Options", "Info", 
    "Blank document", "Start Screen", "Template", "Auto-hide Ribbon", "Show Tabs", 
    "Show Tabs and Commands", "Ribbon Display Options", "Customize Quick Access Toolbar", 
    "Tell me bar", "Spelling & Grammar", "Find and Replace",
    # Advanced Terms
    "Pictures", "Shapes", "Text Box", "SmartArt", "Charts", "Icons",
    "Text Wrapping", "Align", "Group", "Rotate", "Selection Pane",
    "Track Changes", "Comments", "Simple Markup", "All Markup", "No Markup", "Original",
    "Inspect Document", "Protect Document", "Check for Issues", "Accessibility",
    "Styles", "Styles Pane", "Normal style", "Heading 1", "Heading 2",
    "Mail Merge", "Envelopes", "Labels", "Select Recipients", "Address Block", "Greeting Line", "Preview Results", "Finish & Merge",
    "Watermark", "Page Color", "Page Borders", "Footnote", "Endnote", "Bibliography", "Table of Contents",
    "Ink to Shape", "Ink to Math", "Draw tab"
]

# Sort terms by length descending to match longer phrases first
UI_TERMS.sort(key=len, reverse=True)

def protect_terms(text):
    placeholders = {}
    temp_text = text
    for i, term in enumerate(UI_TERMS):
        pattern = re.compile(r'\b' + re.escape(term) + r'\b', re.IGNORECASE)
        placeholder = f"[[UI_{i}]]"
        matches = pattern.findall(temp_text)
        if matches:
            placeholders[placeholder] = term 
            temp_text = pattern.sub(placeholder, temp_text)
    return temp_text, placeholders

def restore_terms(text, placeholders):
    temp_text = text
    for placeholder, original in placeholders.items():
        temp_text = temp_text.replace(placeholder, original)
    return temp_text

def fix_markdown_spacing(text):
    text = re.sub(r'([a-zA-Zà-ỹ0-9])(\*\*)', r'\1 \2', text)
    text = re.sub(r'(\*\*)([a-zA-Zà-ỹ0-9])', r'\1 \2', text)
    text = re.sub(r'([a-zA-Zà-ỹ0-9])(\*)', r'\1 \2', text)
    text = re.sub(r'(\*)([a-zA-Zà-ỹ0-9])', r'\1 \2', text)
    text = text.replace('  ', ' ')
    return text

def translate_batch_texts(texts):
    if not texts: return []
    try:
        translated = GoogleTranslator(source='en', target='vi').translate_batch(texts)
        return translated
    except Exception as e:
        print(f"Batch translation failed: {e}")
        return texts

file_list = [f for f in os.listdir(base_dir) if f.endswith('.md')]

for filename in file_list:
    path = os.path.join(base_dir, filename)
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
        
    print(f"Translating {filename}...")
    
    # 1. Preprocessing: Remove broken video links
    content = re.sub(r'\[!\[[^\]]*\]\([^)]+\.webp\)\]\([^)]+\.webm\)', '', content, flags=re.MULTILINE|re.DOTALL)
    
    lines = content.split('\n')
    tr_indices = []
    tr_texts = []
    all_placeholders = []
    
    for i, line in enumerate(lines):
        ls = line.strip()
        if not ls: continue
        if re.match(r'^!\[\]\([^)]+\)$', ls): continue
        if ls.startswith('![') and ls.endswith(')'): continue
        if ls.startswith('```'): continue
        
        match_heading = re.match(r'^(#+)\s+(.*)', ls)
        match_list = re.match(r'^([-+*]|[0-9]+\.)\s+(.*)', ls)
        
        text_to_translate = ls
        if match_heading: text_to_translate = match_heading.group(2)
        elif match_list: text_to_translate = match_list.group(2)
        
        protected_text, placeholders = protect_terms(text_to_translate)
        
        tr_texts.append(protected_text)
        tr_indices.append(i)
        all_placeholders.append(placeholders)
        
    if tr_texts:
        chunk_size = 30
        translated_results = []
        for i in range(0, len(tr_texts), chunk_size):
            chunk = tr_texts[i:i+chunk_size]
            res = translate_batch_texts(chunk)
            translated_results.extend(res)
            
        for i, idx in enumerate(tr_indices):
            original_line = lines[idx]
            indent = len(original_line) - len(original_line.lstrip())
            prefix = original_line[:indent]
            
            ls = original_line.strip()
            marker = ""
            mh = re.match(r'^(#+)\s+', ls)
            ml = re.match(r'^([-+*]|[0-9]+\.)\s+', ls)
            if mh: marker = mh.group(0)
            elif ml: marker = ml.group(0)
            
            tr_val = str(translated_results[i]) if i < len(translated_results) else tr_texts[i]
            tr_val = restore_terms(tr_val, all_placeholders[i])
            tr_val = re.sub(r'(\*\*+)\s*(.*?)\s*(\*\*+)', r'\1\2\3', tr_val)
            tr_val = fix_markdown_spacing(tr_val)
            lines[idx] = prefix + marker + tr_val
            
    final_content = '\n'.join(lines)
    with open(path, 'w', encoding='utf-8') as file:
        file.write(final_content)
        
print("Translation complete.")
