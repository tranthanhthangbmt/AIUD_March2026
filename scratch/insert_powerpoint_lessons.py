import os
import re

PP_BASIC_LESSONS = [
    (1, "getting-started-with-powerpoint", "Getting Started with PowerPoint"),
    (2, "understanding-onedrive", "Understanding OneDrive"),
    (3, "creating-and-opening-presentations", "Creating and Opening Presentations"),
    (4, "saving-presentations", "Saving Presentations"),
    (5, "slide-basics", "Slide Basics"),
    (6, "text-basics", "Text Basics"),
    (7, "applying-themes", "Applying Themes"),
    (8, "applying-transitions", "Applying Transitions"),
    (9, "managing-slides", "Managing Slides"),
    (10, "using-find-replace", "Using Find & Replace"),
    (11, "printing", "Printing"),
    (12, "presenting-your-slide-show", "Presenting Your Slide Show")
]

PP_ADV_LESSONS = [
    (13, "lists", "Lists"),
    (14, "indents-and-line-spacing", "Indents and Line Spacing"),
    (15, "inserting-pictures", "Inserting Pictures"),
    (16, "formatting-pictures", "Formatting Pictures"),
    (17, "shapes", "Shapes"),
    (18, "aligning-ordering-and-grouping-objects", "Aligning, Ordering, and Grouping Objects"),
    (19, "animating-text-and-objects", "Animating Text and Objects"),
    (20, "inserting-videos", "Inserting Videos"),
    (21, "inserting-audio", "Inserting Audio"),
    (22, "tables", "Tables"),
    (23, "charts", "Charts"),
    (24, "smartart-graphics", "SmartArt Graphics"),
    (25, "checking-spelling-and-grammar", "Checking Spelling and Grammar"),
    (26, "reviewing-presentations", "Reviewing Presentations"),
    (27, "inspecting-and-protecting-presentations", "Inspecting and Protecting Presentations"),
    (28, "modifying-themes", "Modifying Themes"),
    (29, "slide-master-view", "Slide Master View"),
    (30, "links", "Links"),
    (31, "action-buttons", "Action Buttons"),
    (32, "rehearsing-and-recording-your-presentation", "Rehearsing and Recording Your Presentation"),
    (33, "sharing-your-presentation-online", "Sharing Your Presentation Online"),
    (34, "what-is-office-365", "What is Office 365?"),
    (35, "new-features-in-office-2019", "New Features in Office 2019"),
    (36, "office-intelligent-services", "Office Intelligent Services"),
    (37, "using-the-draw-tab", "Using the Draw Tab"),
    (38, "working-with-icons", "Working with Icons")
]

def read_html_content(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()
    return html.strip()

def build_lesson_html_content(base_dir, lesson_id, slug, category):
    html_filename = f"Lesson_{lesson_id}_{slug}.html"
    html_filepath = os.path.join(base_dir, html_filename)
    
    if not os.path.exists(html_filepath):
        print(f"  WARNING: {html_filepath} not found!")
        return ""
    
    content = read_html_content(html_filepath)
    
    # Add inline styles to images to match Word/Excel
    content = re.sub(
        r'<img\s+(?!style)',
        '<img style="max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;" ',
        content
    )
    
    return content

def escape_js_string(s):
    s = s.replace('\\', '\\\\')
    s = s.replace('"', '\\"')
    s = s.replace('\n', '\\n')
    s = s.replace('\r', '')
    return s

def split_content_into_steps(html_content):
    # 1. Clean up GCFGlobal artifacts
    content = re.sub(r'<div class="divider-box"[^>]*>.*?<h4>.*?</h4>\s*</div>', '', html_content, flags=re.DOTALL)
    content = re.sub(r'<h4[^>]*>Lesson \d+:.*?</h4>', '', content, flags=re.DOTALL)
    content = re.sub(r'<p class="scroll-trigger-top">.*?</p>', '', content, flags=re.DOTALL)
    
    # 2. Split by h3 or h4
    parts = re.split(r'(<h[34][^>]*>.*?</h[34]>)', content, flags=re.DOTALL)
    
    steps = []
    current_title = "Phần 1: Giới thiệu"
    current_content = ""
    step_num = 1
    
    for part in parts:
        h_match = re.match(r'<h[34][^>]*>(.*?)</h[34]>', part, re.DOTALL)
        if h_match:
            text_only = re.sub(r'<[^>]+>', '', current_content).strip()
            if text_only:
                steps.append((current_title, current_content.strip()))
                step_num += 1
            
            clean_title = re.sub(r'<[^>]+>', '', h_match.group(1)).strip()
            if clean_title.lower() == "introduction":
                clean_title = "Giới thiệu"
                
            current_title = f"Phần {step_num}: {clean_title}"
            current_content = ""
        else:
            current_content += part
            
    text_only = re.sub(r'<[^>]+>', '', current_content).strip()
    if text_only or current_content.strip():
        steps.append((current_title, current_content.strip()))
        
    if not steps:
        steps.append(("Nội dung bài học", html_content.strip()))
        
    return steps

def generate_lesson_entry(lesson_id, slug, title, session_id, prefix, base_dir, category):
    html_content = build_lesson_html_content(base_dir, lesson_id, slug, category)
    if not html_content:
        return None
        
    steps = split_content_into_steps(html_content)
    
    practice_dir = os.path.join(base_dir, "practice_files")
    practice_files = []
    if os.path.exists(practice_dir):
        for f in os.listdir(practice_dir):
            if slug.replace('-', '') in f.replace('-', '').replace('_', '').lower() or \
               f"lesson{lesson_id}" in f.replace('_', '').lower() or \
               f"powerpoint_{slug.replace('-', '')}" in f.replace('_', '').lower() or \
               slug in f.lower():
                practice_files.append(f)
                
    tasks_str = "[]"
    if practice_files:
        tasks_items = []
        for pf in practice_files:
            rel_path = f"Module_1-6/TaiLieuHuongDan/PowerPoint/{category}/practice_files/{pf}"
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
    
    entry = f'''            {{
                id: "{prefix}_{lesson_id}",
                sessionId: {session_id},
                title: "Bài {lesson_id}: {escape_js_string(title)}",
                description: "Nội dung chi tiết cho bài Bài {lesson_id}: {escape_js_string(title)}.",
                tasks: {tasks_str},
                steps: {steps_str}
            }}'''
    return entry

def generate_section(lessons_list, session_id, prefix, base_dir, category, section_title, section_desc):
    lesson_entries = []
    for lesson_id, slug, title in lessons_list:
        entry = generate_lesson_entry(lesson_id, slug, title, session_id, prefix, base_dir, category)
        if entry:
            lesson_entries.append(entry)
            step_count = len(re.findall(r'title: "Phần', entry))
            print(f"  Generated entry for Bài {lesson_id}: {title} ({step_count} steps)")
            
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

if __name__ == "__main__":
    pp_basic_dir = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\PowerPoint\Basic"
    pp_adv_dir = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\PowerPoint\Advanced"
    
    print("\n========== Generating PowerPoint Cơ Bản section ==========")
    pp_basic_section = generate_section(
        PP_BASIC_LESSONS, 69, "pb", 
        pp_basic_dir, "Basic",
        "PowerPoint Cơ Bản",
        "Các bài học cơ bản về Microsoft PowerPoint dựa trên giáo trình GCFGlobal."
    )

    print("\n========== Generating PowerPoint Nâng Cao section ==========")
    pp_adv_section = generate_section(
        PP_ADV_LESSONS, 70, "pa",
        pp_adv_dir, "Advanced",
        "PowerPoint Nâng Cao",
        "Các bài học nâng cao về Microsoft PowerPoint dựa trên giáo trình GCFGlobal."
    )

    lessons_js_path = r"I:\MY_CODE\AIUD_March2026\data\lessons.js"
    with open(lessons_js_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Replace PowerPoint Cơ Bản
    basic_start = content.find('title: "PowerPoint Cơ Bản"')
    if basic_start != -1:
        block_start = content.rfind('{', 0, basic_start)
        buoi13_pos = content.find('title: "Buổi 13:')
        buoi13_block = content.rfind('{', 0, buoi13_pos)
        
        content = content[:block_start] + pp_basic_section + ",\n    " + content[buoi13_block:]
        print("\n✅ Replaced existing 'PowerPoint Cơ Bản'")
    else:
        buoi13_pos = content.find('title: "Buổi 13:')
        buoi13_block = content.rfind('{', 0, buoi13_pos)
        content = content[:buoi13_block] + pp_basic_section + ",\n    " + content[buoi13_block:]
        print("\n✅ Inserted 'PowerPoint Cơ Bản' before Buổi 13")

    # 2. Replace PowerPoint Nâng Cao
    adv_start = content.find('title: "PowerPoint Nâng Cao"')
    if adv_start != -1:
        block_start = content.rfind('{', 0, adv_start)
        buoi15_pos = content.find('title: "Buổi 15:')
        buoi15_block = content.rfind('{', 0, buoi15_pos)
        
        content = content[:block_start] + pp_adv_section + ",\n    " + content[buoi15_block:]
        print("✅ Replaced existing 'PowerPoint Nâng Cao'")
    else:
        buoi15_pos = content.find('title: "Buổi 15:')
        buoi15_block = content.rfind('{', 0, buoi15_pos)
        content = content[:buoi15_block] + pp_adv_section + ",\n    " + content[buoi15_block:]
        print("✅ Inserted 'PowerPoint Nâng Cao' before Buổi 15")

    with open(lessons_js_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("\n🎉 lessons.js updated successfully with beautiful steps!")
