"""Fix ALL broken YouTube URLs in lessons.js - both in video properties and content strings."""
import re

lessons_js_path = r"I:\MY_CODE\AIUD_March2026\data\lessons.js"

with open(lessons_js_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Count before
before_count = content.count('../../../../../www.youtube.com/embed/')
print(f"Before fix: {before_count} broken YouTube URL fragments")

# Replace ALL occurrences of the broken relative path pattern
# Pattern variations:
# 1. ../../../../../www.youtube.com/embed/ID.webm
# 2. ../../../../../www.youtube.com/embed/ID.webp
# Replace with: https://www.youtube.com/embed/ID
content = re.sub(
    r'\.\./\.\./\.\./\.\./\.\./www\.youtube\.com/embed/([a-zA-Z0-9_-]+)\.(webm|webp)',
    r'https://www.youtube.com/embed/\1',
    content
)

# Count after
after_count = content.count('../../../../../www.youtube.com/embed/')
print(f"After fix: {after_count} broken YouTube URL fragments remaining")

# Also count properly fixed URLs
proper_count = len(re.findall(r'https://www\.youtube\.com/embed/[a-zA-Z0-9_-]+', content))
print(f"Total proper YouTube embed URLs: {proper_count}")

with open(lessons_js_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ All YouTube URLs fixed!")
