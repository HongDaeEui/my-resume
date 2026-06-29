import urllib.request
import json
import re

url = "https://api.github.com/users/dayainow/repos?sort=updated&per_page=100"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        repos = json.loads(response.read().decode())
        
    personal_projects = []
    for r in repos:
        if r['fork']: continue
        if not r['description']: r['description'] = "개인 저장소입니다."
        
        # Format for projects.ts
        slug = f"personal-{r['name'].lower()}"
        
        proj = {
            "slug": slug,
            "name": r['name'],
            "oneLiner": r['description'],
            "period": {"start": r['created_at'][:7].replace('-', '.'), "end": r['updated_at'][:7].replace('-', '.')},
            "team": "개인 프로젝트",
            "role": "Fullstack",
            "contributions": [f"GitHub Repository: {r['html_url']}", "Language: " + (r['language'] or "Unknown")],
            "stack": [r['language']] if r['language'] else ["기타"],
            "type": "personal",
            "links": {
                "github": r['html_url']
            },
            "detail": {
                "background": r['description'],
                "approach": ["저장소의 README를 확인해주세요."],
                "results": {
                    "metrics": [
                        {"value": str(r['stargazers_count']), "label": "Stars"}
                    ],
                    "details": [
                        f"최종 업데이트: {r['updated_at'][:10]}"
                    ]
                },
                "reflection": "진행 중인 개인 저장소입니다."
            }
        }
        personal_projects.append(proj)
        
    print(json.dumps(personal_projects, ensure_ascii=False))
except Exception as e:
    print(str(e))
