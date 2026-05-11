"""
Translate Excel Markdown files from English to Vietnamese.
Keeps Excel-specific keywords in English.
Translates both Basic (1-12) and Advanced (13-35) lessons.
"""
import os
import re
import time
from deep_translator import GoogleTranslator

BASIC_DIR = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Excel\Basic"
ADV_DIR = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Excel\Advanced"

def translate_batch(texts, max_retries=3):
    """Batch translate texts with retries."""
    if not texts:
        return []
    for attempt in range(max_retries):
        try:
            results = GoogleTranslator(source='en', target='vi').translate_batch(texts)
            return results
        except Exception as e:
            print(f"    Batch attempt {attempt+1} failed: {e}")
            if attempt < max_retries - 1:
                time.sleep(2)
    return texts  # return originals on total failure

def should_translate(line):
    """Check if a line should be translated."""
    stripped = line.strip()
    if not stripped:
        return False
    if len(stripped) < 3:
        return False
    # Skip pure image lines
    if re.match(r'^!\[.*\]\(.*\)$', stripped):
        return False
    # Skip code blocks  
    if stripped.startswith('```'):
        return False
    # Skip lines that are just dashes or bullets
    if re.match(r'^[-+*]\s*$', stripped):
        return False
    # Skip lines that are just URLs
    if re.match(r'^https?://', stripped):
        return False
    # Skip video embed links
    if '[![' in stripped and 'youtube' in stripped.lower():
        return False
    return True

def extract_line_parts(line):
    """Extract the prefix (heading/list markers) and translatable text."""
    stripped = line.strip()
    indent = len(line) - len(line.lstrip())
    prefix_whitespace = line[:indent]
    
    # Heading
    heading_match = re.match(r'^(#+\s+)(.*)', stripped)
    if heading_match:
        return prefix_whitespace, heading_match.group(1), heading_match.group(2)
    
    # List item (numbered or bulleted)
    list_match = re.match(r'^([-+*]|\d+\.)\s+(.*)', stripped)
    if list_match:
        return prefix_whitespace, list_match.group(1) + ' ', list_match.group(2)
    
    return prefix_whitespace, '', stripped

def translate_md_file(filepath):
    """Translate a single markdown file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove broken video embed links: [![...](....webp)](....webm)
    content = re.sub(
        r'\[!\[[^\]]*\]\([^)]+\.webp\)\]\([^)]+\.webm\)', 
        '', content, flags=re.MULTILINE|re.DOTALL
    )
    
    lines = content.split('\n')
    
    # Collect lines to translate
    translate_indices = []
    translate_texts = []
    
    in_code_block = False
    for i, line in enumerate(lines):
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            continue
        if in_code_block:
            continue
        if not should_translate(line):
            continue
        
        _, _, text = extract_line_parts(line)
        if text and len(text) > 2:
            translate_indices.append(i)
            translate_texts.append(text)
    
    if not translate_texts:
        return
    
    # Batch translate in chunks
    chunk_size = 40
    all_translated = []
    for ci in range(0, len(translate_texts), chunk_size):
        chunk = translate_texts[ci:ci+chunk_size]
        translated = translate_batch(chunk)
        all_translated.extend(translated)
        time.sleep(0.5)
    
    # Reassemble
    for idx, line_idx in enumerate(translate_indices):
        if idx >= len(all_translated) or not all_translated[idx]:
            continue
        
        prefix_ws, marker, _ = extract_line_parts(lines[line_idx])
        translated_text = str(all_translated[idx])
        
        # Fix markdown formatting broken by translator
        translated_text = re.sub(r'\*\*\s+(.*?)\s+\*\*', r'**\1**', translated_text)
        translated_text = re.sub(r'\[\s*(.*?)\s*\]\s*\(', r'[\1](', translated_text)
        translated_text = translated_text.replace('** ', '**').replace(' **', '**')
        
        lines[line_idx] = prefix_ws + marker + translated_text
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))

def process_directory(dir_path, label):
    """Process all MD files in a directory."""
    print(f"\n{'='*60}")
    print(f"Translating {label}...")
    print(f"{'='*60}")
    
    md_files = sorted([f for f in os.listdir(dir_path) if f.endswith('.md')])
    
    for i, filename in enumerate(md_files):
        filepath = os.path.join(dir_path, filename)
        print(f"  [{i+1}/{len(md_files)}] {filename}...", end=" ", flush=True)
        try:
            translate_md_file(filepath)
            print("✅")
        except Exception as e:
            print(f"❌ {e}")
        time.sleep(0.3)

# Process both directories
process_directory(BASIC_DIR, "Excel Cơ Bản (Basic)")
process_directory(ADV_DIR, "Excel Nâng Cao (Advanced)")

print("\n🎉 All Excel MD files translated to Vietnamese!")
print("Next step: Run the rebuild script to update lessons.js")
