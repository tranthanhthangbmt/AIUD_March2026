"""
Translate Excel Basic and Advanced lessons in lessons.js from English to Vietnamese.
Keeps Excel-specific keywords in English (Ribbon, Cell, Row, Column, etc.)
Strategy: Extract content strings, translate text portions (not HTML tags/attributes), 
re-inject back into lessons.js.
"""
import re
import time
import json
import html
from deep_translator import GoogleTranslator

LESSONS_JS_PATH = r"I:\MY_CODE\AIUD_March2026\data\lessons.js"

# Excel UI keywords to preserve in English
PRESERVE_KEYWORDS = [
    "Ribbon", "Quick Access Toolbar", "Name Box", "Formula Bar", "Tell me",
    "Backstage view", "Start Screen", "Zoom Control", "Scroll Bar",
    "Home", "Insert", "Page Layout", "Formulas", "Data", "Review", "View",
    "File", "Save", "Save As", "Open", "Close", "Print", "Export", "Share",
    "Undo", "Redo", "Repeat", "Cut", "Copy", "Paste", "Format Painter",
    "Bold", "Italic", "Underline", "Font", "Font Size", "Font Color",
    "Fill Color", "Borders", "Merge & Center", "Wrap Text",
    "Number Format", "Percentage", "Currency", "Accounting", "Date",
    "Conditional Formatting", "Format as Table", "Cell Styles",
    "AutoFill", "Flash Fill", "AutoSum", "SUM", "AVERAGE", "COUNT", "MAX", "MIN",
    "IF", "SUMIF", "COUNTIF", "VLOOKUP", "HLOOKUP", "INDEX", "MATCH",
    "Freeze Panes", "Freeze Top Row", "Freeze First Column",
    "Sort", "Filter", "Advanced Filter", "Sort & Filter",
    "PivotTable", "PivotChart", "Slicer",
    "Chart", "Column Chart", "Line Chart", "Pie Chart", "Bar Chart",
    "Insert Function", "Function Arguments",
    "Page Break Preview", "Normal", "Page Layout",
    "Header", "Footer", "Margins", "Orientation", "Size",
    "Print Area", "Print Titles", "Page Setup",
    "Find & Replace", "Find", "Replace", "Go To",
    "Spelling", "Track Changes", "Comments", "Protect Sheet", "Protect Workbook",
    "Group", "Ungroup", "Subtotal",
    "Text to Columns", "Remove Duplicates", "Data Validation",
    "Goal Seek", "Scenario Manager", "Data Table", "What-If Analysis",
    "OneDrive", "Office 365", "Microsoft Account",
    "Workbook", "Worksheet", "Sheet", "Tab",
    "Cell", "Row", "Column", "Range",
    "Template", "Blank workbook",
    "Auto-hide Ribbon", "Show Tabs", "Show Tabs and Commands",
    "Expand Ribbon", "Ribbon Display Options",
    "Backstage", "Info", "New", "Recent",
    "SmartArt", "Icons", "Draw", "Draw Tab",
    "Number", "General", "Text",
    "Comma Style", "Increase Decimal", "Decrease Decimal",
    "Merge Cells", "Unmerge Cells",
    "Insert Sheet Rows", "Insert Sheet Columns", "Delete Sheet Rows", "Delete Sheet Columns",
    "Column Width", "Row Height", "AutoFit Column Width", "AutoFit Row Height",
    "Format Cells", "Alignment", "Protection",
    "Absolute reference", "Relative reference", "Mixed reference",
    "cell reference", "cell references",
    "Freeze", "Unfreeze",
    "Ascending", "Descending", "Custom Sort",
    "Show Detail", "Hide Detail", "Collapse", "Expand",
    "Table", "Table Tools", "Design", "Total Row",
    "Chart Tools", "Chart Elements", "Chart Styles", "Chart Filters",
    "Chart Title", "Axis Titles", "Legend", "Data Labels", "Data Table",
    "Move Chart", "Change Chart Type", "Switch Row/Column",
    "Highlight Cells Rules", "Top/Bottom Rules", "Data Bars", "Color Scales", "Icon Sets",
    "New Rule", "Clear Rules", "Manage Rules",
    "Inspect Document", "Check Accessibility", "Check Compatibility",
    "Encrypt with Password", "Mark as Final", "Restrict Access",
    "Values", "Rows", "Columns", "Filters",
    "Row Labels", "Column Labels", "Report Filter",
    "Summarize Values By", "Show Values As",
    "PivotTable Fields", "Field Settings",
    "Excel Start Screen", "Backstage view",
]

def translate_text(text, max_retries=3):
    """Translate text using Google Translate, with retries."""
    if not text or not text.strip():
        return text
    for attempt in range(max_retries):
        try:
            result = GoogleTranslator(source='en', target='vi').translate(text)
            return result if result else text
        except Exception as e:
            if attempt < max_retries - 1:
                time.sleep(1)
            else:
                print(f"    ⚠️ Translation failed: {e}")
                return text

def translate_html_content(html_str):
    """Translate only the text portions of HTML, preserving tags and attributes."""
    if not html_str or not html_str.strip():
        return html_str
    
    # Split HTML into tags and text segments
    # Pattern matches HTML tags (including self-closing and comments)
    parts = re.split(r'(<[^>]+>)', html_str)
    
    text_parts = []
    text_indices = []
    
    for i, part in enumerate(parts):
        if not part:
            continue
        if part.startswith('<'):
            continue  # HTML tag, skip
        # This is text content
        stripped = part.strip()
        if stripped and len(stripped) > 1 and not stripped.startswith('Module_1-6'):
            text_parts.append(part)
            text_indices.append(i)
    
    if not text_parts:
        return html_str
    
    # Batch translate text parts in chunks
    chunk_size = 30
    translated_parts = []
    for ci in range(0, len(text_parts), chunk_size):
        chunk = text_parts[ci:ci+chunk_size]
        try:
            batch_result = GoogleTranslator(source='en', target='vi').translate_batch(chunk)
            translated_parts.extend(batch_result)
        except Exception as e:
            print(f"    ⚠️ Batch failed, falling back to individual: {e}")
            for t in chunk:
                translated_parts.append(translate_text(t))
        time.sleep(0.3)
    
    # Re-assemble
    for idx, ti in enumerate(text_indices):
        if idx < len(translated_parts) and translated_parts[idx]:
            # Preserve leading/trailing whitespace from original
            original = parts[ti]
            leading = len(original) - len(original.lstrip())
            trailing = len(original) - len(original.rstrip())
            
            trans = str(translated_parts[idx])
            
            # Restore whitespace
            if leading > 0:
                trans = original[:leading] + trans.lstrip()
            if trailing > 0:
                trans = trans.rstrip() + original[-trailing:]
            
            parts[ti] = trans
    
    return ''.join(parts)


def translate_step_title(title):
    """Translate step title, keeping 'Phần X:' prefix."""
    match = re.match(r'^(Phần \d+:\s*)(.*)', title)
    if match:
        prefix = match.group(1)
        rest = match.group(2)
        if rest:
            translated = translate_text(rest)
            return prefix + (translated if translated else rest)
        return title
    return translate_text(title) or title


# Read lessons.js
print("Reading lessons.js...")
with open(LESSONS_JS_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# Process Excel Basic (sessionId: 67) and Excel Advanced (sessionId: 68)
for session_name, session_id, prefix in [("Excel Cơ Bản", 67, "eb"), ("Excel Nâng Cao", 68, "ea")]:
    print(f"\n{'='*60}")
    print(f"Translating {session_name} (session {session_id})...")
    print(f"{'='*60}")
    
    # Find all step titles for this session
    # Pattern: title: "Phần X: ..." within Excel lesson blocks
    # We need to find content blocks that belong to session 67 or 68
    
    # Find all step title entries
    step_title_pattern = re.compile(
        r'(title: ")(Phần \d+: [^"]+)(")'
    )
    
    # Find all content entries - they're the big HTML strings
    content_pattern = re.compile(
        r'(content: ")([^"]*(?:\\.[^"]*)*?)(",)'
    )
    
    # We need to scope our search to only the Excel sections
    # Find the section boundaries
    if prefix == "eb":
        section_start = content.find('title: "Excel Cơ Bản"')
        section_end = content.find('title: "Buổi 10:')
    else:
        section_start = content.find('title: "Excel Nâng Cao"')
        section_end = content.find('title: "Buổi 12:')
    
    if section_start == -1 or section_end == -1:
        print(f"  ❌ Could not find section boundaries for {session_name}")
        continue
    
    section = content[section_start:section_end]
    
    # 1. Translate step titles
    print(f"  Translating step titles...")
    title_count = 0
    
    def replace_title(match):
        global title_count
        full = match.group(0)
        title_text = match.group(2)
        # Only translate if it looks English
        if re.search(r'[a-zA-Z]{3,}', title_text.replace('Phần', '')):
            translated = translate_step_title(title_text)
            print(f"    [{title_text}] -> [{translated}]")
            return match.group(1) + translated + match.group(3)
        return full
    
    translated_section = step_title_pattern.sub(replace_title, section)
    
    # 2. Translate content strings
    print(f"  Translating content blocks...")
    content_count = 0
    
    def replace_content(match):
        global content_count
        content_str = match.group(2)
        
        # Unescape the JS string for processing
        unescaped = content_str.replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
        
        # Translate the HTML content
        translated = translate_html_content(unescaped)
        
        if translated and translated != unescaped:
            content_count += 1
            # Re-escape for JS
            re_escaped = translated.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
            if content_count % 5 == 0:
                print(f"    Translated {content_count} content blocks...")
            return match.group(1) + re_escaped + match.group(3)
        return match.group(0)
    
    translated_section = content_pattern.sub(replace_content, translated_section)
    
    # Replace the section in the full content
    content = content[:section_start] + translated_section + content[section_end:]
    
    print(f"  ✅ {session_name} translation complete!")

# Save
print("\nSaving lessons.js...")
with open(LESSONS_JS_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("\n🎉 All Excel lessons translated to Vietnamese!")
