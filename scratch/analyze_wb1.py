import re

with open('data/lessons.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find wb_1 step range
in_wb1 = False
wb1_steps_start = None
wb1_steps_end = None
step_ranges = []  # (start_line, end_line, title, has_img, content_len)

for i, line in enumerate(lines):
    if 'id: "wb_1"' in line:
        in_wb1 = True
        continue
    if in_wb1 and 'id: "wb_2"' in line:
        break
    if in_wb1:
        m = re.search(r'title:\s*"(Phần \d+:.*?)"', line)
        if m:
            title = m.group(1)
            content_line = lines[i+1] if i+1 < len(lines) else ''
            has_img = '<img' in content_line or '\\u003cimg' in content_line
            content_len = len(content_line.strip())
            
            # Close previous range
            if step_ranges:
                step_ranges[-1] = (*step_ranges[-1][:2], step_ranges[-1][2], step_ranges[-1][3], step_ranges[-1][4])
            
            step_ranges.append((i, None, title, has_img, content_len))

# Now let's show content previews for short sections
print("=== SHORT SECTIONS (likely hotspot tooltips, candidates for removal) ===")
for start, _, title, has_img, clen in step_ranges:
    if clen < 300 and not has_img:
        content = lines[start+1].strip()
        # Extract just the text
        text = re.sub(r'<[^>]+>', '', content)
        text = re.sub(r'\\u003c[^>]*\\u003e', '', text)
        text = text.replace('content: "', '').replace('",', '').strip()[:200]
        print(f"\n  {title} (len={clen}):")
        print(f"    {text[:200]}")

print("\n\n=== DETAILED SECTIONS (with images, should keep) ===")
for start, _, title, has_img, clen in step_ranges:
    if has_img or clen >= 300:
        print(f"  {title} (len={clen}, img={has_img})")
