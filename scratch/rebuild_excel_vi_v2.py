import os
import re
import markdown
import json

# ========== STEP 1: Load Video Map ==========
video_map_path = r"I:\MY_CODE\AIUD_March2026\scratch\excel_video_map.json"
with open(video_map_path, 'r', encoding='utf-8') as f:
    video_map = json.load(f)

# ========== STEP 2: Conversion Logic ==========

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<title>{title}</title>
</head>
<body>
    <div class="lesson-content">
        {content}
    </div>
</body>
</html>
"""

def build_lesson_html_content(base_dir, lesson_id, slug, category):
    md_filename = f"Lesson_{lesson_id}_{slug}.md"
    md_filepath = os.path.join(base_dir, md_filename)
    
    if not os.path.exists(md_filepath):
        print(f"  WARNING: {md_filepath} not found!")
        return ""
    
    with open(md_filepath, 'r', encoding='utf-8') as f:
        md_text = f.read()

    html_content = markdown.markdown(md_text, extensions=['tables', 'fenced_code'])
    
    # Fix image src paths
    html_content = html_content.replace('src="images/', f'src="Module_1-6/TaiLieuHuongDan/Excel/{category}/images/')
    html_content = html_content.replace('href="practice_files/', f'href="Module_1-6/TaiLieuHuongDan/Excel/{category}/practice_files/')
    html_content = re.sub(r'<img\s+(?!style)', '<img style="max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;" ', html_content)
    
    return html_content


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

# ========== STEP 3: Generate the sections ==========

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

excel_basic_dir = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Excel\Basic"
excel_adv_dir = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Excel\Advanced"

print("\nGenerating Excel Cơ Bản section...")
excel_basic_section = generate_section(EXCEL_BASIC_LESSONS, 67, "eb", excel_basic_dir, "Basic", "Excel Cơ Bản", "Các bài học cơ bản về Microsoft Excel dựa trên giáo trình GCFGlobal.")

print("\nGenerating Excel Nâng Cao section...")
excel_adv_section = generate_section(EXCEL_ADV_LESSONS, 68, "ea", excel_adv_dir, "Advanced", "Excel Nâng Cao", "Các bài học nâng cao về Microsoft Excel dựa trên giáo trình GCFGlobal.")

# ========== STEP 4: Robust Replacement in lessons.js ==========

lessons_js_path = r"I:\MY_CODE\AIUD_March2026\data\lessons.js"

with open(lessons_js_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

def find_section_range(lines, session_id):
    start_line = -1
    for i, line in enumerate(lines):
        if f"id: {session_id}," in line:
            # Backtrack to find the starting {
            for j in range(i, -1, -1):
                if "{" in lines[j] and lines[j].strip() == "{":
                    start_line = j
                    break
            break
    
    if start_line == -1: return None
    
    # Find the ending } for this section
    # We count braces to handle nested structures
    brace_count = 0
    end_line = -1
    for i in range(start_line, len(lines)):
        brace_count += lines[i].count('{')
        brace_count -= lines[i].count('}')
        if brace_count == 0:
            end_line = i
            break
    
    return (start_line, end_line)

# Replace Basic (67)
rng_67 = find_section_range(lines, 67)
if rng_67:
    print(f"Replacing session 67 at lines {rng_67[0]+1}-{rng_67[1]+1}")
    new_content = excel_basic_section + ",\n"
    lines[rng_67[0]:rng_67[1]+1] = [new_content]

# Re-read line indices after first replacement
# Replace Advanced (68)
rng_68 = find_section_range(lines, 68)
if rng_68:
    print(f"Replacing session 68 at lines {rng_68[0]+1}-{rng_68[1]+1}")
    new_content = excel_adv_section + ",\n"
    lines[rng_68[0]:rng_68[1]+1] = [new_content]

with open(lessons_js_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("\n🎉 lessons.js updated successfully with Vietnamese content!")
