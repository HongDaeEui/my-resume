import json
import re

with open('src/data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'export const projects: Project\[\] = (\[.*\]);', content, re.DOTALL)
if match:
    existing_projects = json.loads(match.group(1))
else:
    existing_projects = []

with open('scratch/repos.json', 'r', encoding='utf-8') as f:
    repos = json.loads(f.read())

filtered_repos = [r for r in repos if 'Language: TypeScript' in r['contributions'][1] or 'Language: JavaScript' in r['contributions'][1]]

existing_projects.extend(filtered_repos)

ts_code = 'import { Project } from "@/lib/types";\n\nexport const projects: Project[] = ' + json.dumps(existing_projects, ensure_ascii=False, indent=2) + ';\n'

with open('src/data/projects.ts', 'w', encoding='utf-8') as f:
    f.write(ts_code)

print(f"Appended {len(filtered_repos)} personal projects.")
