import os
import re
import markdown

base_dir = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Word\Basic"

# Basic styling for the output HTML to look like a modern document
HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<style>
    body {{
        font-family: 'Outfit', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f9f9f9;
    }}
    .lesson-content {{
        background: white;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    }}
    img {{
        max-width: 100%;
        height: auto;
        border-radius: 6px;
        margin: 15px 0;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }}
    h1, h2, h3, h4 {{
        color: #2c3e50;
        margin-top: 1.5em;
        margin-bottom: 0.5em;
    }}
    h1 {{
        font-size: 2.2em;
        border-bottom: 2px solid #3498db;
        padding-bottom: 10px;
        color: #3498db;
    }}
    a {{
        color: #3498db;
        text-decoration: none;
    }}
    a:hover {{
        text-decoration: underline;
    }}
    table {{
        border-collapse: collapse;
        width: 100%;
        margin: 20px 0;
    }}
    table, th, td {{
        border: 1px solid #ddd;
    }}
    th, td {{
        padding: 12px;
        text-align: left;
    }}
    th {{
        background-color: #f2f2f2;
    }}
    blockquote {{
        border-left: 4px solid #3498db;
        padding-left: 15px;
        color: #666;
        background: #f1f8ff;
        padding: 10px 15px;
        border-radius: 0 4px 4px 0;
        margin-left: 0;
    }}
</style>
</head>
<body>
    <div class="lesson-content">
        {content}
    </div>
</body>
</html>
"""

# Process Markdown files
html_map = {}

for filename in os.listdir(base_dir):
    if filename.endswith(".md"):
        filepath = os.path.join(base_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            md_text = f.read()

        html_content = markdown.markdown(md_text, extensions=['tables', 'fenced_code'])
        
        # Determine title
        title = filename.replace('.md', '').replace('_', ' ').title()
        match = re.search(r'^#\s+(.+)', md_text, re.MULTILINE)
        if match:
            title = match.group(1).strip()
            
        # Final HTML
        final_html = HTML_TEMPLATE.format(title=title, content=html_content)
        
        html_filename = filename.replace('.md', '.html')
        out_filepath = os.path.join(base_dir, html_filename)
        
        with open(out_filepath, 'w', encoding='utf-8') as f:
            f.write(final_html)
            
        print(f"Generated {html_filename}")
        
        rel_html_path = f"Module_1-6/TaiLieuHuongDan/Word/Basic/{html_filename}"
        html_map[filename] = rel_html_path

# Update lessons.js
lessons_js_path = r"I:\MY_CODE\AIUD_March2026\data\lessons.js"
with open(lessons_js_path, 'r', encoding='utf-8') as f:
    lessons_content = f.read()

for md_filename, html_rel_path in html_map.items():
    # We look for where the documentation is mapped for this markdown file
    # Example: file: "Module_1-6/TaiLieuHuongDan/Word/Basic/Lesson_1_getting-started-with-word.md"
    # Which is inside "docs: [" block
    # We will inject the video property right before docs: [
    
    # We can use regex to find the lesson block where this file is referenced
    pattern = r'(description:\s*"Nội dung chi tiết cho bài [^"]+",\n\s*)(docs:\s*\[\s*{\s*name:\s*"Nội Dung Bài Học \(Markdown\)",\s*file:\s*"' + re.escape(f"Module_1-6/TaiLieuHuongDan/Word/Basic/{md_filename}") + r'")'
    
    replacement = r'\1video: "' + html_rel_path + '",\n                \2'
    
    lessons_content = re.sub(pattern, replacement, lessons_content)

with open(lessons_js_path, 'w', encoding='utf-8') as f:
    f.write(lessons_content)

print("lessons.js updated successfully!")
