import sys

def main():
    target_file = r"I:\MY_CODE\AIUD_March2026\data\lessons.js"
    with open(target_file, "r", encoding="utf-8") as f:
        content = f.read()

    json_file = r"I:\MY_CODE\AIUD_March2026\scratch\word_basic_session.json"
    with open(json_file, "r", encoding="utf-8") as f:
        insert_text = f.read()
        
    # Indent it correctly
    # Add a comma at the end
    insert_text = "    " + insert_text.replace("\n", "\n    ") + ",\n"

    # We want to insert it right before `    {\n        id: 7,\n        title: "Buổi 7:`
    target_phrase = '    {\n        id: 7,\n        title: "Buổi 7: Mục lục (Multilevel List, caption, nội dung, hình ảnh, bảng biểu)"'

    if target_phrase not in content:
        print("Could not find the target phrase.")
        sys.exit(1)

    new_content = content.replace(target_phrase, insert_text + target_phrase)

    with open(target_file, "w", encoding="utf-8") as f:
        f.write(new_content)
        
    print("Injected successfully!")

if __name__ == "__main__":
    main()
