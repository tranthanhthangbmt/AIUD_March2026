import re

LESSON_JS_PATH = r"I:\MY_CODE\AIUD_March2026\data\lessons.js"

MAPPING = {'wb_1': 'j-ZAVHk5SaU', 'wb_3': 'PafCMUVH_OA', 'wb_4': 'iHuFzz7Wvt4', 'wb_5': 'vmEzxQfVj5c', 'wb_6': 'ViGf0RKbCyA', 'wb_7': 'p3Ql9y3eEyo', 'wb_8': 'vJGYWVe52T4', 'wb_9': 'mXWvKHWe2Co', 'wb_10': 'tyXahko-tX8', 'wb_11': 'fqLQ1adyrjA', 'wb_12': 'jgNpoksYOLE', 'wb_13': '7bLQFTCsH8Y', 'wb_14': '78fvQ9Ks8DA', 'wb_15': 'X1n2VG1yxFs', 'wb_16': 'lNdjuIYuB3o', 'wb_17': 'JDqPR98mIZM', 'wb_23': 'XNBrCEgzddw', 'wb_25': 'uzrpa-gwN1A'}

with open(LESSON_JS_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

for lesson_id, yt_id in MAPPING.items():
    video_url = f"https://www.youtube.com/embed/{yt_id}"
    
    # Check if lesson exists and find its position
    # The pattern is id: "wb_X",
    idx = content.find(f'id: "{lesson_id}"')
    if idx != -1:
        # Find the next } wrapping the lesson
        end_idx = content.find('}', idx)
        
        # Check if video property already exists in this block
        block = content[idx:end_idx]
        if 'video:' not in block:
            # Inject video: "...", after description
            pattern = r'(id:\s*"' + re.escape(lesson_id) + r'",.*?description:\s*"[^"]+",\s*)'
            content = re.sub(pattern, r'\1video: "' + video_url + '",\n                ', content, flags=re.DOTALL)
        else:
            # Update existing video property
            pattern = r'(id:\s*"' + re.escape(lesson_id) + r'".*?video:\s*")[^"]+'
            content = re.sub(pattern, r'\1' + video_url, content, flags=re.DOTALL)

with open(LESSON_JS_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("lessons.js updated with YouTube videos.")
