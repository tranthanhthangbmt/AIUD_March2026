import os
import re
import json

base_dir = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Word\Basic"

lessons_data = []

file_list = [f for f in os.listdir(base_dir) if f.endswith('.md')]
file_list.sort(key=lambda x: int(x.split('_')[1]))

for f in file_list:
    path = os.path.join(base_dir, f)
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
        
        # Extract title from first # heading
        title = "Untitled"
        match = re.search(r'^#\s+(.+)', content, re.MULTILINE)
        if match:
            title = match.group(1).strip()
            
        # Get lesson ID
        lesson_id = int(f.split('_')[1])
        
        # Description
        description = f"Nội dung chi tiết cho bài {title}."
        
        rel_path = f"Module_1-6/TaiLieuHuongDan/Word/Basic/{f}"
        html_rel_path = rel_path.replace('.md', '.html')
        
        lesson_obj = {
            "id": f"wb_{lesson_id}",
            "sessionId": 65,
            "title": title,
            "description": description,
            "video": html_rel_path,
            "docs": [
                {
                    "name": "Nội Dung Bài Học (Markdown)",
                    "file": rel_path
                }
            ],
            "steps": [
                {
                    "title": "Tài liệu chi tiết",
                    "content": f"Vui lòng xem tài liệu đính kèm bên dưới để đọc toàn bộ nội dung của bài **{title}**. Các tài liệu thực hành (nếu có) có thể tìm thấy trong thư mục practice_files.",
                    "icon": "fa-book-open"
                }
            ]
        }
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

# 4. Load the corrupted lessons.js
lessons_file = r"I:\MY_CODE\AIUD_March2026\data\lessons.js"
with open(lessons_file, "r", encoding="utf-8") as f:
    content = f.read()

# 5. Extract everything from start of file up to our injection point
start_idx = content.find("    {\n        id: 65,\n        title: \"Word Cơ Bản")
# It's better to find using index 
if start_idx == -1:
    # Maybe try a fallback search
    start_idx = content.find("    {\n        id: 65")
    if start_idx == -1:
        print("Could not find start of id: 65 block")
        import sys
        sys.exit(1)

# Find the start of id: 7 block
end_idx = content.find("    {\n        id: 7,\n        title: \"Buổi 7")
if end_idx == -1:
    print("Could not find start of id: 7 block")
    import sys
    sys.exit(1)

# we just cut out what's in between and paste good_session_text
new_content = content[:start_idx] + good_session_text + content[end_idx:]

with open(lessons_file, "w", encoding="utf-8") as f:
    f.write(new_content)

print("lessons.js fixed successfully!")
