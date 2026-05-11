import os
import re
import markdown
import json

# ========== STEP 1: Convert Markdown to styled HTML ==========

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
        border-bottom: 2px solid #27ae60;
        padding-bottom: 10px;
        color: #27ae60;
    }}
    a {{
        color: #27ae60;
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
        border-left: 4px solid #27ae60;
        padding-left: 15px;
        color: #666;
        background: #f1fff8;
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

def convert_md_to_html(base_dir):
    """Convert all .md files in a directory to styled .html files."""
    for filename in sorted(os.listdir(base_dir)):
        if filename.endswith(".md"):
            filepath = os.path.join(base_dir, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                md_text = f.read()

            html_content = markdown.markdown(md_text, extensions=['tables', 'fenced_code'])
            
            title = filename.replace('.md', '').replace('_', ' ').title()
            match = re.search(r'^#\s+(.+)', md_text, re.MULTILINE)
            if match:
                title = match.group(1).strip()
                
            final_html = HTML_TEMPLATE.format(title=title, content=html_content)
            
            html_filename = filename.replace('.md', '.html')
            out_filepath = os.path.join(base_dir, html_filename)
            
            with open(out_filepath, 'w', encoding='utf-8') as f:
                f.write(final_html)
                
            print(f"  Generated {html_filename}")

excel_basic_dir = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Excel\Basic"
excel_adv_dir = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Excel\Advanced"

print("Converting Excel Basic MD -> HTML...")
convert_md_to_html(excel_basic_dir)
print("Converting Excel Advanced MD -> HTML...")
convert_md_to_html(excel_adv_dir)

# ========== STEP 2: Load Video Map ==========
video_map_path = r"I:\MY_CODE\AIUD_March2026\scratch\excel_video_map.json"
with open(video_map_path, 'r', encoding='utf-8') as f:
    video_map = json.load(f)

# ========== STEP 3: Read HTML content and build lesson JS entries ==========

EXCEL_BASIC_LESSONS = [
    (1, "getting-started-with-excel", "Làm quen với Excel"),
    (2, "understanding-onedrive", "Hiểu về OneDrive"),
    (3, "creating-and-opening-workbooks", "Tạo và mở Workbooks"),
    (4, "saving-and-sharing-workbooks", "Lưu và chia sẻ Workbooks"),
    (5, "cell-basics", "Kiến thức cơ bản về ô"),
    (6, "modifying-columns-rows-and-cells", "Sửa đổi cột, hàng và ô"),
    (7, "formatting-cells", "Định dạng ô"),
    (8, "understanding-number-formats", "Hiểu định dạng số"),
    (9, "working-with-multiple-worksheets", "Làm việc với nhiều Worksheets"),
    (10, "using-find-replace", "Sử dụng Tìm và Thay thế"),
    (11, "checking-spelling", "Kiểm tra chính tả"),
    (12, "page-layout-and-printing", "Bố cục trang và In"),
]

EXCEL_ADV_LESSONS = [
    (13, "intro-to-formulas", "Giới thiệu về Công thức"),
    (14, "creating-more-complex-formulas", "Tạo Công thức phức tạp hơn"),
    (15, "relative-and-absolute-cell-references", "Tham chiếu ô Tương đối và Tuyệt đối"),
    (16, "functions", "Hàm"),
    (17, "basic-tips-for-working-with-data", "Mẹo cơ bản khi làm việc với dữ liệu"),
    (18, "freezing-panes-and-view-options", "Đóng băng ngăn và tùy chọn View"),
    (19, "sorting-data", "Sắp xếp dữ liệu"),
    (20, "filtering-data", "Lọc dữ liệu"),
    (21, "groups-and-subtotals", "Nhóm và Subtotals"),
    (22, "tables", "Bảng"),
    (23, "charts", "Biểu đồ"),
    (24, "conditional-formatting", "Định dạng có điều kiện"),
    (25, "comments-and-coauthoring", "Comments và Đồng tác giả"),
    (26, "inspecting-and-protecting-workbooks", "Kiểm tra và Bảo vệ Workbooks"),
    (27, "intro-to-pivottables", "Giới thiệu PivotTables"),
    (28, "doing-more-with-pivottables", "Nâng cao PivotTables"),
    (29, "whatif-analysis", "Phân tích What-If"),
    (30, "what-is-office-365", "Office 365 là gì?"),
    (31, "new-features-in-office-2019", "Tính năng mới trong Office 2019"),
    (32, "what-are-reference-styles", "Reference Styles là gì?"),
    (33, "office-intelligent-services", "Dịch vụ thông minh Office"),
    (34, "using-the-draw-tab", "Sử dụng tab Draw"),
    (35, "working-with-icons", "Làm việc với Icons"),
]


def read_html_content(filepath):
    """Read HTML file and extract the lesson-content div inner HTML."""
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
    match = re.search(r'<div class="lesson-content">\s*(.*?)\s*</div>', html, re.DOTALL)
    if match:
        return match.group(1).strip()
    return html


def build_lesson_html_content(base_dir, lesson_id, slug, category):
    html_filename = f"Lesson_{lesson_id}_{slug}.html"
    html_filepath = os.path.join(base_dir, html_filename)
    
    if not os.path.exists(html_filepath):
        print(f"  WARNING: {html_filepath} not found!")
        return ""
    
    content = read_html_content(html_filepath)
    content = content.replace('src="images/', f'src="Module_1-6/TaiLieuHuongDan/Excel/{category}/images/')
    content = content.replace('href="practice_files/', f'href="Module_1-6/TaiLieuHuongDan/Excel/{category}/practice_files/')
    content = re.sub(r'<img\s+(?!style)', '<img style="max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;" ', content)
    return content


def escape_js_string(s):
    s = s.replace('\\', '\\\\')
    s = s.replace('"', '\\"')
    s = s.replace('\n', '\\n')
    s = s.replace('\r', '')
    return s


def split_content_into_steps(html_content):
    parts = re.split(r'(<h4>.*?</h4>)', html_content, flags=re.DOTALL)
    steps = []
    current_title = "Phần 1: Giới thiệu"
    current_content = ""
    step_num = 1
    
    for part in parts:
        h4_match = re.match(r'<h4>(.*?)</h4>', part, re.DOTALL)
        if h4_match:
            if current_content.strip():
                steps.append((current_title, current_content.strip()))
                step_num += 1
            current_title = f"Phần {step_num}: {h4_match.group(1).strip()}"
            current_content = ""
        else:
            current_content += part
    
    if current_content.strip():
        steps.append((current_title, current_content.strip()))
    
    if not steps:
        steps.append(("Nội dung bài học", html_content.strip()))
    
    return steps


def generate_lesson_entry(lesson_id, slug, title_vi, session_id, prefix, base_dir, category):
    html_content = build_lesson_html_content(base_dir, lesson_id, slug, category)
    if not html_content: return None
    
    steps = split_content_into_steps(html_content)
    
    practice_dir = os.path.join(base_dir, "practice_files")
    practice_files = []
    if os.path.exists(practice_dir):
        for f in os.listdir(practice_dir):
            if slug.replace('-', '') in f.replace('-', '').replace('_', '').lower() or f"lesson{lesson_id}" in f.replace('_', '').lower():
                practice_files.append(f)
    
    tasks_str = "[]"
    if practice_files:
        tasks_items = []
        for pf in practice_files:
            rel_path = f"Module_1-6/TaiLieuHuongDan/Excel/{category}/practice_files/{pf}"
            tasks_items.append(f'{{ name: "tài liệu thực hành", file: "{rel_path}" }}')
        tasks_str = "[\n                    " + ",\n                    ".join(tasks_items) + "\n                ]"
    
    steps_items = []
    for step_title, step_content in steps:
        escaped_content = escape_js_string(step_content)
        steps_items.append(f'''                    {{
                        title: "{escape_js_string(step_title)}",
                        content: "{escaped_content}",
                        icon: "fa-list-ul"
                    }}''')
    
    steps_str = "[\n" + ",\n".join(steps_items) + "\n                ]"
    
    # Get video URL
    lesson_full_id = f"{prefix}_{lesson_id}"
    video_prop = ""
    if lesson_full_id in video_map:
        video_prop = f'\n                video: "{video_map[lesson_full_id]}",'
    
    entry = f'''            {{
                id: "{lesson_full_id}",
                sessionId: {session_id},
                title: "Bài {lesson_id}: {escape_js_string(title_vi)}",
                description: "Nội dung chi tiết cho bài Bài {lesson_id}: {escape_js_string(title_vi)}.",{video_prop}
                tasks: {tasks_str},
                steps: {steps_str}
            }}'''
    
    return entry


def generate_section(lessons_list, session_id, prefix, base_dir, category, section_title, section_desc):
    lesson_entries = []
    for lesson_id, slug, title_vi in lessons_list:
        entry = generate_lesson_entry(lesson_id, slug, title_vi, session_id, prefix, base_dir, category)
        if entry:
            lesson_entries.append(entry)
            print(f"  Generated entry for Bài {lesson_id}: {title_vi}")
    
    lessons_js = ",\n".join(lesson_entries)
    
    section = f'''    {{
        id: {session_id},
        title: "{section_title}",
        description: "{section_desc}",
        totalLessons: {len(lesson_entries)},
        lessons: [
{lessons_js}
        ]
    }}'''
    
    return section


print("\n========== Generating Excel Cơ Bản section ==========")
excel_basic_section = generate_section(
    EXCEL_BASIC_LESSONS, 67, "eb", 
    excel_basic_dir, "Basic",
    "Excel Cơ Bản",
    "Các bài học cơ bản về Microsoft Excel dựa trên giáo trình GCFGlobal."
)

print("\n========== Generating Excel Nâng Cao section ==========")
excel_adv_section = generate_section(
    EXCEL_ADV_LESSONS, 68, "ea",
    excel_adv_dir, "Advanced",
    "Excel Nâng Cao",
    "Các bài học nâng cao về Microsoft Excel dựa trên giáo trình GCFGlobal."
)

# ========== STEP 4: Update lessons.js ==========

lessons_js_path = r"I:\MY_CODE\AIUD_March2026\data\lessons.js"

with open(lessons_js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the existing Excel Basic section
# We need to find the section by ID 67
basic_pattern = re.compile(r'\{\n\s*id: 67,.*?\}\n    \},', re.DOTALL)
content = basic_pattern.sub(excel_basic_section + ",", content)

# Replace the existing Excel Advanced section
# We need to find the section by ID 68
adv_pattern = re.compile(r'\{\n\s*id: 68,.*?\}\n    \},', re.DOTALL)
content = adv_pattern.sub(excel_adv_section + ",", content)

# Write updated lessons.js
with open(lessons_js_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("\n🎉 lessons.js updated successfully with translated content and videos!")
