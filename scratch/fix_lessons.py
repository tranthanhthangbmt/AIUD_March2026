import re
import codecs
import sys
import json

def dict_to_js(d, indent=4):
    js = json.dumps(d, ensure_ascii=False, indent=indent)
    # clean up keys for JS
    js = re.sub(r'"(\w+)":', r'\1:', js)
    js = "    " + js.replace("\n", "\n    ") + ",\n"
    return js

# 1. Load the good json representation
with open(r"I:\MY_CODE\AIUD_March2026\scratch\word_basic_session.json", "r", encoding="utf-8") as f:
    session_data = json.load(f)

# 2. Add video fields pointing to HTML
for lesson in session_data["lessons"]:
    # doc file format is like "Module_1-6/TaiLieuHuongDan/Word/Basic/Lesson_X.md"
    md_path = lesson["docs"][0]["file"]
    html_path = md_path.replace(".md", ".html")
    lesson["video"] = html_path
    
# 3. Create the replacement string
good_session_text = dict_to_js(session_data)

# 4. Load the corrupted lessons.js
lessons_file = r"I:\MY_CODE\AIUD_March2026\data\lessons.js"
with open(lessons_file, "r", encoding="utf-8") as f:
    content = f.read()

# 5. Extract everything from start of file up to our injection point
# Let's find the start of our id: 65 block
start_idx = content.find("    {\n        id: 65,")
if start_idx == -1:
    print("Could not find start of id: 65 block")
    sys.exit(1)

# Find the start of id: 7 block
end_idx = content.find("    {\n        id: 7,")
if end_idx == -1:
    print("Could not find start of id: 7 block")
    sys.exit(1)

# we just cut out what's in between and paste good_session_text
new_content = content[:start_idx] + good_session_text + content[end_idx:]

with open(lessons_file, "w", encoding="utf-8") as f:
    f.write(new_content)

print("lessons.js fixed successfully!")
