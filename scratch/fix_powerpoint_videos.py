import re

def fix_videos():
    file_path = r'I:\MY_CODE\AIUD_March2026\data\lessons.js'
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    p = content.find('title: "PowerPoint Cơ Bản"')
    if p == -1:
        print("PowerPoint Cơ Bản not found")
        return
        
    before_pp = content[:p]
    pp_content = content[p:]
    
    # Pattern to match each lesson block precisely
    pattern = re.compile(
        r'(id:\s*"((?:pb|pa)_\d+)",\s*\n\s*sessionId:\s*\d+,\s*\n\s*title:\s*"[^"]+",\s*\n\s*description:\s*"[^"]+",)(\s*\n\s*tasks:\s*\[.*?steps:\s*\[.*?\]\s*\})',
        flags=re.DOTALL
    )

    def replacer(match):
        part1 = match.group(1) # id, sessionId, title, description
        lid = match.group(2)
        rest = match.group(3) # tasks, steps
        
        # Look for video-embed
        embed_match = re.search(r'<div class=\\"video-embed\\">.*?src=\\"[^"]*?www\.youtube\.com/embed/([a-zA-Z0-9_-]+)\.[^"]+.*?</div>', rest, flags=re.DOTALL)
        if embed_match:
            video_id = embed_match.group(1)
            video_url = f"https://www.youtube.com/embed/{video_id}"
            
            # Remove video-embed from rest
            # We match optional \n or \\n before and after
            cleaned_rest = re.sub(r'(?:\\n|\n)*<div class=\\"video-embed\\">.*?</div>(?:\\n|\n)*', '', rest, flags=re.DOTALL)
            
            # Construct new block
            new_block = f'{part1}\n                video: "{video_url}",{cleaned_rest}'
            print(f"  ✅ Fixed video for {lid}: {video_url}")
            return new_block
        else:
            print(f"  ⚠️ No video found for {lid}")
            return match.group(0)

    new_pp_content = pattern.sub(replacer, pp_content)
    
    new_content = before_pp + new_pp_content
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("🎉 Successfully updated lessons.js with video properties!")

if __name__ == "__main__":
    fix_videos()
