import re

def test_split():
    with open(r'I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\PowerPoint\Basic\Lesson_3_creating-and-opening-presentations.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Clean up GCFGlobal artifacts
    # Match divider-box precisely
    content = re.sub(r'<div class="divider-box"[^>]*>.*?<h4>.*?</h4>\s*</div>', '', content, flags=re.DOTALL)
    content = re.sub(r'<p class="scroll-trigger-top">.*?</p>', '', content, flags=re.DOTALL)
    
    # 2. Split by h3 or h4
    parts = re.split(r'(<h[34][^>]*>.*?</h[34]>)', content, flags=re.DOTALL)
    
    steps = []
    current_title = "Phần 1: Giới thiệu"
    current_content = ""
    step_num = 1
    
    for part in parts:
        h_match = re.match(r'<h[34][^>]*>(.*?)</h[34]>', part, re.DOTALL)
        if h_match:
            text_only = re.sub(r'<[^>]+>', '', current_content).strip()
            if text_only:
                steps.append((current_title, current_content.strip()))
                step_num += 1
            
            clean_title = re.sub(r'<[^>]+>', '', h_match.group(1)).strip()
            if clean_title.lower() == "introduction":
                clean_title = "Giới thiệu"
                
            current_title = f"Phần {step_num}: {clean_title}"
            current_content = ""
        else:
            current_content += part
            
    text_only = re.sub(r'<[^>]+>', '', current_content).strip()
    if text_only or current_content.strip():
        steps.append((current_title, current_content.strip()))
        
    for t, c in steps:
        print(f"[{t}] -> {len(c)} chars (text len: {len(re.sub(r'<[^>]+>', '', c).strip())})")

if __name__ == "__main__":
    test_split()
