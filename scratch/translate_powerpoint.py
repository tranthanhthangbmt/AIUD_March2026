import re
import time
from deep_translator import GoogleTranslator

LESSONS_JS_PATH = r"I:\MY_CODE\AIUD_March2026\data\lessons.js"

# PowerPoint UI keywords to preserve in English
PRESERVE_KEYWORDS = [
    "Quick Access Toolbar", "Backstage view", "Start Screen", "Zoom Control", "Scroll Bar",
    "Ribbon Display Options", "Auto-hide Ribbon", "Show Tabs and Commands", "Show Tabs", "Expand Ribbon",
    "Slide Master", "Handout Master", "Notes Master",
    "Animation Pane", "Effect Options", "Animation Painter",
    "Presenter View", "Reading View", "Slide Sorter", "Outline View", "Notes Page",
    "Format Background", "Slide Size", "Selection Pane",
    "Bring to Front", "Send to Back", "Bring Forward", "Send Backward",
    "Format Painter", "Text Box", "WordArt", "SmartArt", "Online Pictures",
    "Screen Recording", "Date & Time", "Slide Number",
    "Microsoft Account", "Office 365", "OneDrive",
    "Blank Presentation",
    "Shape Fill", "Shape Outline", "Shape Effects",
    "Picture Tools", "Drawing Tools", "SmartArt Tools", "Chart Tools", "Table Tools",
    "Transitions", "Animations", "Slide Show", "Review", "View",
    "Home", "Insert", "Design",
    "File", "Save As", "Save", "Open", "Close", "Print", "Export", "Share",
    "Undo", "Redo", "Repeat", "Cut", "Copy", "Paste",
    "Bold", "Italic", "Underline", "Font Size", "Font Color", "Font",
    "New Slide", "Layout", "Reset", "Section", "Slide", "Slides",
    "Transition", "Animation", "Trigger",
    "Shape", "Shapes", "Chart", "Table", "Pictures", "Video", "Audio",
    "Theme", "Themes", "Variants",
    "Group", "Ungroup", "Align", "Rotate",
    "Header", "Footer",
    "Find", "Replace", "Select",
    "Template", "Backstage", "Info", "New", "Recent", "Icons", "Draw Tab", "Draw", "Format",
    "Tell me", "Ribbon"
]

# Sort by length descending to match longest phrases first
PRESERVE_KEYWORDS.sort(key=len, reverse=True)

def protect_keywords(text):
    protected_dict = {}
    
    # We will temporarily replace keywords with [KW_index]
    for i, kw in enumerate(PRESERVE_KEYWORDS):
        # Use regex to replace whole words, case-insensitive
        # Avoid replacing inside HTML tags if possible, but the text we translate has already had HTML split out
        pattern = re.compile(r'\b' + re.escape(kw) + r'\b', re.IGNORECASE)
        
        # We need a function to replace and store
        def replacer(match):
            placeholder = f"[KW{i}]"
            protected_dict[placeholder] = match.group(0) # Store original case
            return placeholder
            
        text = pattern.sub(replacer, text)
        
    return text, protected_dict

def restore_keywords(text, protected_dict):
    for placeholder, original_kw in protected_dict.items():
        text = text.replace(placeholder, original_kw)
    return text

def translate_text(text, max_retries=3):
    if not text or not text.strip():
        return text
        
    text_to_translate, protected_dict = protect_keywords(text)
    
    for attempt in range(max_retries):
        try:
            result = GoogleTranslator(source='en', target='vi').translate(text_to_translate)
            if result:
                return restore_keywords(result, protected_dict)
            return text
        except Exception as e:
            if attempt < max_retries - 1:
                time.sleep(1)
            else:
                print(f"    ⚠️ Translation failed: {e}")
                return text

def translate_html_content(html_str):
    if not html_str or not html_str.strip():
        return html_str
        
    parts = re.split(r'(<[^>]+>)', html_str)
    
    text_parts = []
    text_indices = []
    
    for i, part in enumerate(parts):
        if not part:
            continue
        if part.startswith('<'):
            continue
        stripped = part.strip()
        if stripped and len(stripped) > 1 and not stripped.startswith('Module_1-6'):
            text_parts.append(part)
            text_indices.append(i)
            
    if not text_parts:
        return html_str
        
    chunk_size = 30
    translated_parts = []
    for ci in range(0, len(text_parts), chunk_size):
        chunk = text_parts[ci:ci+chunk_size]
        try:
            # Protect all texts in chunk
            protected_chunk = []
            chunk_dicts = []
            for t in chunk:
                pt, pd = protect_keywords(t)
                protected_chunk.append(pt)
                chunk_dicts.append(pd)
                
            batch_result = GoogleTranslator(source='en', target='vi').translate_batch(protected_chunk)
            
            # Restore
            for t_idx, trans in enumerate(batch_result):
                if trans:
                    restored = restore_keywords(trans, chunk_dicts[t_idx])
                    translated_parts.append(restored)
                else:
                    translated_parts.append(chunk[t_idx])
                    
        except Exception as e:
            print(f"    ⚠️ Batch failed, falling back to individual: {e}")
            for t in chunk:
                translated_parts.append(translate_text(t))
        time.sleep(0.3)
        
    for idx, ti in enumerate(text_indices):
        if idx < len(translated_parts) and translated_parts[idx]:
            original = parts[ti]
            leading = len(original) - len(original.lstrip())
            trailing = len(original) - len(original.rstrip())
            
            trans = str(translated_parts[idx])
            
            if leading > 0:
                trans = original[:leading] + trans.lstrip()
            if trailing > 0:
                trans = trans.rstrip() + original[-trailing:]
                
            parts[ti] = trans
            
    return ''.join(parts)

def translate_step_title(title):
    match = re.match(r'^(Phần \d+:\s*)(.*)', title)
    if match:
        prefix = match.group(1)
        rest = match.group(2)
        if rest:
            translated = translate_text(rest)
            return prefix + (translated if translated else rest)
        return title
    return translate_text(title) or title

print("Reading lessons.js...")
with open(LESSONS_JS_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

for session_name, session_id, prefix in [("PowerPoint Cơ Bản", 69, "pb"), ("PowerPoint Nâng Cao", 70, "pa")]:
    print(f"\n{'='*60}")
    print(f"Translating {session_name} (session {session_id})...")
    print(f"{'='*60}")
    
    step_title_pattern = re.compile(
        r'(title: ")(Phần \d+: [^"]+)(")'
    )
    
    content_pattern = re.compile(
        r'(content: ")([^"]*(?:\\.[^"]*)*?)(",)'
    )
    
    if prefix == "pb":
        section_start = content.find('title: "PowerPoint Cơ Bản"')
        section_end = content.find('title: "Buổi 13:')
    else:
        section_start = content.find('title: "PowerPoint Nâng Cao"')
        section_end = content.find('title: "Buổi 15:')
        
    if section_start == -1 or section_end == -1:
        print(f"  ❌ Could not find section boundaries for {session_name}")
        continue
        
    section = content[section_start:section_end]
    
    print(f"  Translating step titles...")
    title_count = 0
    
    def replace_title(match):
        global title_count
        full = match.group(0)
        title_text = match.group(2)
        if re.search(r'[a-zA-Z]{3,}', title_text.replace('Phần', '')):
            translated = translate_step_title(title_text)
            print(f"    [{title_text}] -> [{translated}]")
            return match.group(1) + translated + match.group(3)
        return full
        
    translated_section = step_title_pattern.sub(replace_title, section)
    
    lesson_title_pattern = re.compile(r'(title: "Bài \d+: )([^"]+)(")')
    def replace_lesson_title(match):
        full = match.group(0)
        title_text = match.group(2)
        if re.search(r'[a-zA-Z]{3,}', title_text):
            translated = translate_text(title_text)
            print(f"    [{title_text}] -> [{translated}]")
            return match.group(1) + translated + match.group(3)
        return full
    
    translated_section = lesson_title_pattern.sub(replace_lesson_title, translated_section)
    
    print(f"  Translating content blocks...")
    content_count = 0
    
    def replace_content(match):
        global content_count
        content_str = match.group(2)
        
        unescaped = content_str.replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
        translated = translate_html_content(unescaped)
        
        if translated and translated != unescaped:
            content_count += 1
            re_escaped = translated.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
            if content_count % 5 == 0:
                print(f"    Translated {content_count} content blocks...")
            return match.group(1) + re_escaped + match.group(3)
        return match.group(0)
        
    translated_section = content_pattern.sub(replace_content, translated_section)
    
    content = content[:section_start] + translated_section + content[section_end:]
    
    print(f"  ✅ {session_name} translation complete!")

print("\nSaving lessons.js...")
with open(LESSONS_JS_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("\n🎉 All PowerPoint lessons translated to Vietnamese!")
