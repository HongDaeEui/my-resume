const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '../resume_source/경력 기술서.md');
const content = fs.readFileSync(mdPath, 'utf8');

const projectBlocks = content.split('### ').filter(b => b.trim().length > 0 && !b.startsWith('# '));

const projects = [];

projectBlocks.forEach((block, index) => {
  const lines = block.split('\n').map(l => l.trim());
  
  const titleLine = lines[0].replace(/^\*\*|\*\*$/g, '');
  
  // Try to extract name and stack from titleLine e.g. "두비두팝 (React Native + Expo / Web) 보컬 커스터마이징 스튜디오 개발"
  let name = titleLine;
  let stack = [];
  const stackMatch = titleLine.match(/\((.*?)\)/);
  if (stackMatch) {
    stack = stackMatch[1].split(/[\+\/,]/).map(s => s.trim()).filter(Boolean);
    name = titleLine.replace(stackMatch[0], '').trim();
  }
  
  let period = { start: "", end: "" };
  let oneLiner = "";
  let results = [];
  let roles = [];
  
  let mode = "";
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line || line === '---') continue;
    
    if (line.match(/^[0-9]{4}\.[0-9]{2}/)) {
      const parts = line.split('~').map(s => s.trim());
      period.start = parts[0];
      period.end = parts[1] || "";
      continue;
    }
    
    if (line.startsWith('**') && !line.includes('주요 성과') && !line.includes('주요 업무') && oneLiner === "") {
      oneLiner = line.replace(/^\*\*|\*\*$/g, '');
      continue;
    }
    
    if (line.includes('주요 성과')) {
      mode = "results";
      continue;
    }
    if (line.includes('주요 업무')) {
      mode = "roles";
      continue;
    }
    
    if (line.startsWith('- ')) {
      const item = line.substring(2).trim();
      if (mode === "results") results.push(item);
      if (mode === "roles") roles.push(item);
    }
  }
  
  const slug = 'project-' + (index + 1).toString().padStart(2, '0');
  
  projects.push({
    slug,
    name,
    oneLiner: oneLiner || name,
    period,
    team: "팀 규모 미상",
    role: "Frontend Engineer",
    contributions: roles.map(r => r.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')),
    stack: stack.length > 0 ? stack : ["Frontend"],
    type: "work",
    detail: {
      background: oneLiner || "프로젝트 배경 정보가 제공되지 않았습니다.",
      approach: roles.map(r => r.replace(/\*\*(.*?)\*\*/g, '')), // Stripped markdown
      results: {
        metrics: [],
        details: results.map(r => r.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'))
      },
      reflection: "프로젝트 진행 과정에서 기술적, 비즈니스적 요구사항을 성공적으로 조율하고 완수하였습니다."
    }
  });
});

const tsCode = `import { Project } from "@/lib/types";

export const projects: Project[] = ${JSON.stringify(projects, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/projects.ts'), tsCode);
console.log('Successfully generated projects.ts with ' + projects.length + ' projects.');
