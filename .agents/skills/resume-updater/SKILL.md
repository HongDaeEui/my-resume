---
name: resume-updater
description: Updates the resume data files (src/data/*.ts) by extracting information from a user-provided resume file in the resume_source/ directory.
---

# Resume Updater Skill

## When to use this skill
Use this skill when the user asks you to "update the resume," "read my resume file," or similar requests after they upload their original resume (PDF, MD, TXT, DOCX) into the workspace.

## Prerequisites
Check if a resume file exists in the `resume_source/` directory.
If it doesn't exist, politely ask the user to place their resume file into the `resume_source/` directory and notify you.

## Execution Steps

1. **Read the Source File**
   Use the `view_file` tool to carefully read the user's resume file located in the `resume_source/` directory.

2. **Analyze and Map Data**
   Extract the information and mentally map it to the structure of the four data files in `src/data/`:
   - `profile.ts`: Name, headline, short bio, social links, and education.
   - `experience.ts`: Work experience (company, period, role, achievements) and skills (StackCategory).
   - `projects.ts`: Project details (period, team, role, contributions, background, approach, results).
   - `aiCases.ts`: AI usage cases (if the user provides any; otherwise leave the existing mock data or empty them based on user preference).

3. **Apply Typography and Highlighting Rules**
   - **CRITICAL**: When extracting `achievements` or `contributions`, identify key metrics, impact, numbers, and percentages. Wrap them in HTML `<strong>` tags so they are visually bolded on the UI (e.g., "전환율 <strong>8.4% 개선</strong>").
   - Ensure you escape any quotes properly for TypeScript strings.

4. **Update the TypeScript Files**
   Use the `multi_replace_file_content` or `write_to_file` tools to replace the mock data inside `src/data/*.ts` with the user's actual data.
   Keep the TypeScript typing intact. Do not change the `export const` names or variable types.

5. **Verify and Report**
   After updating, briefly explain to the user what sections were updated and confirm if they want to review the changes in the browser.
