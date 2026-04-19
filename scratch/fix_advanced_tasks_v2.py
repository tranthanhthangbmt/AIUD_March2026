import os
import re
import json
import markdown

advanced_dir = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Word\Advanced"
lessons_file = r"I:\MY_CODE\AIUD_March2026\data\lessons.js"

MAPPING = {
    'wa_18': 'sqkEDw99szg', 'wa_19': 'eC4bRXx9k6g', 'wa_20': 'uJLhMtlypbQ', 
    'wa_21': 'slateuunUhY', 'wa_22': 'FjkkN9ysjps', 'wa_24': 'kiy81vkZQww', 
    'wa_26': 'm7tmsWN6uH0', 'wa_27': 'SlpIpWe_kNI', 'wa_28': 'Hna1uJN1-qY', 
    'wa_29': 'w2lES-5Ynbk', 'wa_30': 'do9ujnZLIC4', 'wa_31': 'LKLnpVmwifc', 
    'wa_32': 'ndaD7GLITmA', 'wa_34': 'L4TPfHitbKI', 'wa_35': 'c_vNW0q-HEE'
}

lessons_data = []

file_list = [f for f in os.listdir(advanced_dir) if f.endswith('.md')]
file_list.sort(key=lambda x: int(x.split('_')[1]))

for f in file_list:
    path = os.path.join(advanced_dir, f)
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
        
    lesson_num = int(f.split('_')[1])
    lesson_id = f"wa_{lesson_num}"
    
    title = "Untitled"
    match = re.search(r'^#\s+(.+)', content, re.MULTILINE)
    if match:
        title = match.group(1).strip()
        content = content[match.end():].strip()
        
    video_url = ""
    if lesson_id in MAPPING:
        video_url = f"https://www.youtube.com/embed/{MAPPING[lesson_id]}"
        
    practice_matches = re.finditer(r'\[(.*?)\]\((practice_files/([^)]+))\)', content)
    tasks = []
    seen = set()
    for m in practice_matches:
        title_text = m.group(1).strip()
        file_path = m.group(2).strip()
        file_name = m.group(3).strip()
        if not title_text or "!" in title_text:
            title_text = f"File thực hành: {file_name}"
        if file_path not in seen:
            seen.add(file_path)
            tasks.append({
                "name": title_text,
                "file": f"Module_1-6/TaiLieuHuongDan/Word/Advanced/{file_path}"
            })

    sections = []
    parts = re.split(r'^(#{2,3})\s+(.+)$', content, flags=re.MULTILINE)
    for i in range(1, len(parts), 3):
        heading_title = parts[i+1].strip()
        section_text = parts[i+2].strip()
        sections.append({"title": heading_title, "content": section_text})
        
    steps = []
    for idx, s in enumerate(sections):
        html_content = markdown.markdown(s["content"], extensions=['tables', 'fenced_code'])
        html_content = html_content.replace('src="images/', 'src="Module_1-6/TaiLieuHuongDan/Word/Advanced/images/')
        html_content = html_content.replace('href="practice_files/', 'href="Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/')
        html_content = html_content.replace('\n', ' ')
        html_content = html_content.replace('<table>', '<table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><style>table td, table th { border: 1px solid #ddd; padding: 8px; }</style>')
        html_content = html_content.replace('<img', '<img style="max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;"')
        steps.append({"title": f"Phần {idx+1}: {s['title']}", "content": html_content, "icon": "fa-list-ul"})
        
    lesson_obj = {
        "id": f"wa_{lesson_num}",
        "sessionId": 66,
        "title": title,
        "description": f"Nội dung chi tiết cho bài {title}.",
        "tasks": tasks,
        "steps": steps
    }
    if video_url: lesson_obj["video"] = video_url
    lessons_data.append(lesson_obj)

session_obj = {
    "id": 66,
    "title": "Word Nâng Cao",
    "description": "Các bài học nâng cao về Microsoft Word dựa trên giáo trình GCFGlobal.",
    "totalLessons": len(lessons_data),
    "lessons": lessons_data
}

def dict_to_js(d, indent=4):
    js = json.dumps(d, ensure_ascii=False, indent=indent)
    js = re.sub(r'"(\w+)":', r'\1:', js)
    js = "    " + js.replace("\n", "\n    ") + ",\n"
    return js

good_session_text = dict_to_js(session_obj)

with open(lessons_file, "r", encoding="utf-8") as f:
    orig_content = f.read()

# Insert before Session 10
target_str = "    {\n        id: 10,"
insert_pos = orig_content.find(target_str)

if insert_pos == -1:
    # fallback to just id: 10,
    insert_pos = orig_content.find("id: 10,")
    # find the opening { before it
    if insert_pos != -1:
        insert_pos = orig_content.rfind("{", 0, insert_pos)
        # find the indentation
        line_start = orig_content.rfind("\n", 0, insert_pos) + 1
        insert_pos = line_start

if insert_pos != -1:
    new_content = orig_content[:insert_pos] + good_session_text + orig_content[insert_pos:]
    with open(lessons_file, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("lessons.js updated with Word Advanced before Session 10!")
else:
    print("Could not find Session 10 for insertion")
