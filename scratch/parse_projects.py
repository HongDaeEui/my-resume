import re
import json

with open('../resume_source/경력 기술서.md', 'r', encoding='utf-8') as f:
    content = f.read()

blocks = content.split('### ')
projects = []

for idx, block in enumerate(blocks):
    block = block.strip()
    if not block or block.startswith('# '):
        continue
    
    lines = [l.strip() for l in block.split('\n')]
    title_line = lines[0].replace('**', '')
    
    # Extract name and stack e.g. "두비두팝 (React Native + Expo / Web) 보컬 커스터마이징 스튜디오 개발"
    name = title_line
    stack = []
    stack_match = re.search(r'\((.*?)\)', title_line)
    if stack_match:
        stack_str = stack_match.group(1)
        stack = [s.strip() for s in re.split(r'[\+/,]', stack_str) if s.strip()]
        name = title_line.replace(stack_match.group(0), '').strip()
        
    period = {"start": "", "end": ""}
    oneLiner = ""
    results = []
    roles = []
    
    mode = ""
    
    for line in lines[1:]:
        if not line or line == '---':
            continue
            
        if re.match(r'^[0-9]{4}\.[0-9]{2}', line):
            parts = [s.strip() for s in line.split('~')]
            period["start"] = parts[0]
            if len(parts) > 1:
                period["end"] = parts[1]
            continue
            
        if line.startswith('**') and '주요 성과' not in line and '주요 업무' not in line and not oneLiner:
            oneLiner = line.replace('**', '')
            continue
            
        if '주요 성과' in line:
            mode = "results"
            continue
        if '주요 업무' in line:
            mode = "roles"
            continue
            
        if line.startswith('- '):
            item = line[2:].strip()
            if mode == "results":
                results.append(item)
            elif mode == "roles":
                roles.append(item)
                
    # Format slugs nicely
    slug = re.sub(r'[^a-zA-Z0-9가-힣]', '-', name.split(' ')[0].lower())
    if not slug:
        slug = f"project-{idx}"
    slug = f"{slug}-{idx}"
    
    def bold_html(text):
        return re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', text)
        
    def strip_md(text):
        return re.sub(r'\*\*(.*?)\*\*', r'\1', text)
        
    project = {
        "slug": slug,
        "name": name,
        "oneLiner": oneLiner if oneLiner else name,
        "period": period,
        "team": "상세 문서 참조",
        "role": "FE Developer",
        "contributions": [bold_html(r) for r in roles],
        "stack": stack if stack else ["Frontend"],
        "type": "work",
        "detail": {
            "background": oneLiner if oneLiner else "프로젝트 상세 문서를 확인하세요.",
            "approach": [strip_md(r) for r in roles],
            "results": {
                "metrics": [],
                "details": [bold_html(r) for r in results]
            },
            "reflection": "기술적 한계를 극복하고 성공적으로 비즈니스 요구사항을 완수하였습니다."
        }
    }
    projects.append(project)

ts_code = 'import { Project } from "@/lib/types";\n\nexport const projects: Project[] = ' + json.dumps(projects, ensure_ascii=False, indent=2) + ';\n'

with open('../src/data/projects.ts', 'w', encoding='utf-8') as f:
    f.write(ts_code)

print(f"Successfully generated {len(projects)} projects.")
