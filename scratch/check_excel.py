with open(r'I:\MY_CODE\AIUD_March2026\data\lessons.js', 'r', encoding='utf-8') as f:
    content = f.read()

p = content.find('title: "Excel Cơ Bản"')
print(content[p:p+1500])
