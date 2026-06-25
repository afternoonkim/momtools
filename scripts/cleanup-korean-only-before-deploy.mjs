import fs from "node:fs";
import path from "node:path";

const targets = [
  "app/en",
  "components/en",
  "data/en",
  "components/layout/LanguageSwitch.tsx",
  "components/layout/RouteHtmlLang.tsx",
  "lib/site-locale.ts",
];

for (const target of targets) {
  const fullPath = path.resolve(process.cwd(), target);
  if (!fs.existsSync(fullPath)) continue;
  fs.rmSync(fullPath, { recursive: true, force: true });
  console.log(`removed: ${target}`);
}

console.log("한국어 우선 배포용 영어 섹션 정리가 끝났습니다.");
