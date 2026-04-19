import os
import re
import json
import markdown

base_dir = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Word\Basic"

lessons_data = []

file_list = [f for f in os.listdir(base_dir) if f.endswith('.md')]
file_list.sort(key=lambda x: int(x.split('_')[1]))

for f in file_list:
    path = os.path.join(base_dir, f)
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
        
    lesson_id = int(f.split('_')[1])
    
    # Extract title from first # heading
    title = "Untitled"
    match = re.search(r'^#\s+(.+)', content, re.MULTILINE)
    if match:
        title = match.group(1).strip()
        # remove the main title from content
        content = content[match.end():].strip()
        
    # Find Youtube URL
    yt_match = re.search(r'(?:youtube\.com/embed/|youtu\.be/|youtube\.com/watch\?v=)([a-zA-Z0-9_-]+)', content)
    video_url = ""
    if yt_match:
        video_url = f"https://www.youtube.com/embed/{yt_match.group(1)}"
        
    # Find practice files
    practice_matches = re.finditer(r'\[(.*?)\]\((practice_files/([^)]+))\)', content)
    tasks = []
    seen = set()
    for m in enumerate(practice_matches):
        m = m[1] # unpack
        title_text = m.group(1).strip()
        file_path = m.group(2).strip()
        file_name = m.group(3).strip()
        
        # fallback title if it's an image or something
        if not title_text or "!" in title_text:
            title_text = f"File thực hành: {file_name}"
            
        if file_path not in seen:
            seen.add(file_path)
            tasks.append({
                "name": title_text,
                "file": f"Module_1-6/TaiLieuHuongDan/Word/Basic/{file_path}"
            })

    # Find all headings (## or ###)
    sections = []
    parts = re.split(r'^(#{2,3})\s+(.+)$', content, flags=re.MULTILINE)
    
    # Bỏ qua phần text mở đầu (parts[0]) vì nội dung thường chỉ là tiêu đề phụ hoặc không có thông tin (theo yêu cầu của user).
    # intro_text = parts[0].strip()
        
    for i in range(1, len(parts), 3):
        heading_level = parts[i]
        heading_title = parts[i+1].strip()
        section_text = parts[i+2].strip()
        
        sections.append({
            "title": heading_title,
            "content": section_text
        })
        
    # Build steps
    steps = []
    for idx, s in enumerate(sections):
        # Convert markdown to HTML
        html_content = markdown.markdown(s["content"], extensions=['tables', 'fenced_code'])
        
        # Replace image links to absolute relative paths so they load correctly
        html_content = html_content.replace('src="images/', 'src="Module_1-6/TaiLieuHuongDan/Word/Basic/images/')
        
        # Fix practice files links in the steps as well!
        html_content = html_content.replace('href="practice_files/', 'href="Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/')
        
        # Remove all newlines so app.js formatContent() doesn't split the HTML and break tags
        html_content = html_content.replace('\n', ' ')
        
        # Add some custom inline CSS for tables since app.js might not wrap them well
        html_content = html_content.replace('<table>', '<table style="border-collapse: collapse; width: 100%; margin: 10px 0;"><style>table td, table th { border: 1px solid #ddd; padding: 8px; }</style>')
        html_content = html_content.replace('<img', '<img style="max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;"')
        
        steps.append({
            "title": f"Phần {idx+1}: {s['title']}",
            "content": html_content,
            "icon": "fa-list-ul"
        })
        
    rel_md_path = f"Module_1-6/TaiLieuHuongDan/Word/Basic/{f}"

    lesson_obj = {
        "id": f"wb_{lesson_id}",
        "sessionId": 65,
        "title": title,
        "description": f"Nội dung chi tiết cho bài {title}.",
        "tasks": tasks,  # Practice files mapped here!
        "steps": steps
    }
    
    # Add video only if found
    if video_url:
        lesson_obj["video"] = video_url
        
    lessons_data.append(lesson_obj)

session_obj = {
    "id": 65,
    "title": "Word Cơ Bản",
    "description": "Các bài học cơ bản về Microsoft Word dựa trên giáo trình GCFGlobal.",
    "totalLessons": len(lessons_data),
    "lessons": lessons_data
}

def dict_to_js(d, indent=4):
    js = json.dumps(d, ensure_ascii=False, indent=indent)
    # clean up keys for JS
    js = re.sub(r'"(\w+)":', r'\1:', js)
    js = "    " + js.replace("\n", "\n    ") + ",\n"
    return js

good_session_text = dict_to_js(session_obj)

# Update lessons.js
lessons_file = r"I:\MY_CODE\AIUD_March2026\data\lessons.js"
with open(lessons_file, "r", encoding="utf-8") as f:
    orig_content = f.read()

start_idx = orig_content.find("    {\n        id: 65,")
if start_idx == -1: start_idx = orig_content.find("    {\n        id: 65")

end_idx = orig_content.find("    {\n        id: 7,")

if start_idx != -1 and end_idx != -1:
    new_content = orig_content[:start_idx] + good_session_text + orig_content[end_idx:]
    with open(lessons_file, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("lessons.js updated with tasks successfully!")
else:
    print("Could not find the target block in lessons.js")
