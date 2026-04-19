import os
import re
import json

base_dir = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Word\Basic"

lessons_data = []

# Order files by lesson ID
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
        
        lesson_obj = {
            "id": f"wb_{lesson_id}",
            "sessionId": 65,
            "title": title,
            "description": description,
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

# we can print the JSON representation to a file, but let's format it as JS
def dict_to_js(d, indent=4):
    js = json.dumps(d, ensure_ascii=False, indent=indent)
    # clean up keys for JS
    js = re.sub(r'"(\w+)":', r'\1:', js)
    return js

out_js = dict_to_js(session_obj)
with open(r"I:\MY_CODE\AIUD_March2026\scratch\word_basic_session.json", "w", encoding="utf-8") as out:
    out.write(out_js)
print("Done")
