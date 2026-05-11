import os
import re

BASIC_DIR = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Excel\Basic"
ADV_DIR = r"I:\MY_CODE\AIUD_March2026\Module_1-6\TaiLieuHuongDan\Excel\Advanced"

# Terminology mapping: Incorrect/Translated -> English/Preferred
FIX_MAP = {
    r"Tế bào": "Ô",
    r"tế bào": "ô",
    r"sổ bài tập": "sổ làm việc",
    r"Sổ bài tập": "Sổ làm việc",
    r"Ruy băng": "Ribbon",
    r"ruy băng": "ribbon",
    r"Dải băng": "Ribbon",
    r"dải băng": "ribbon",
    r"ruy-băng": "ribbon",
    r"Nói cho tôi": "Tell me",
    r"Cho tôi biết": "Tell me",
    r"Thanh công thức": "Formula Bar",
    r"Hộp tên": "Name Box",
    r"Thanh công cụ truy cập nhanh": "Quick Access Toolbar",
    r"Chế độ xem hậu trường": "Backstage view",
    r"Chế độ xem Backstage": "Backstage view",
    r"Màn hình bắt đầu Excel": "Excel Start Screen",
    r"Sổ làm việc trống": "Blank workbook",
    r"tab trang tính": "worksheet tab",
    r"Tab trang tính": "Worksheet tab",
    r"thanh cuộn": "scroll bar",
    r"Thanh cuộn": "Scroll bar",
    r"kiểm soát thu phóng": "Zoom Control",
    r"Điều khiển thu phóng": "Zoom Control",
    r"Tùy chọn hiển thị Ribbon": "Ribbon Display Options",
    r"Tùy chọn Hiển thị Ribbon": "Ribbon Display Options",
    r"Tự động ẩn Dải băng": "Auto-hide Ribbon",
    r"Hiển thị tab": "Show Tabs",
    r"Hiển thị Tab": "Show Tabs",
    r"Hiển thị Tab và Lệnh": "Show Tabs and Commands",
    r"Hiển thị tab và lệnh": "Show Tabs and Commands",
}

def fix_terminology(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    for pattern, replacement in FIX_MAP.items():
        content = re.sub(pattern, replacement, content)
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

def process_all():
    count = 0
    for d in [BASIC_DIR, ADV_DIR]:
        if not os.path.exists(d): continue
        for f in os.listdir(d):
            if f.endswith('.md'):
                if fix_terminology(os.path.join(d, f)):
                    count += 1
                    print(f"Fixed terminology in {f}")
    print(f"Total files fixed: {count}")

if __name__ == "__main__":
    process_all()
