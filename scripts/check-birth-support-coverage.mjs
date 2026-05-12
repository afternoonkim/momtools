import fs from "node:fs";

const officialListCount = 227;
const ts = fs.readFileSync("data/birthSupportCalculator.ts", "utf8");
const extra = JSON.parse(fs.readFileSync("data/birthSupportExtraRegions.json", "utf8"));

function getMainRegionCodes(source) {
  const start = source.indexOf("export const birthSupportRegions");
  const end = source.indexOf("type ExtraBirthSupportBenefitSeed", start);
  const mainSection = start >= 0 && end > start ? source.slice(start, end) : "";
  return [...mainSection.matchAll(/regionCode:\s*"([^"]+)"/g)].map((match) => match[1]);
}

const mainRegionCodes = getMainRegionCodes(ts);
const extraRegionCodes = extra.map((region) => region.regionCode).filter(Boolean);
const allRegionCodes = [...mainRegionCodes, ...extraRegionCodes];
const uniqueRegionCodes = new Set(allRegionCodes);
const duplicateRegionCodes = allRegionCodes.filter((code, index) => allRegionCodes.indexOf(code) !== index);

console.log(`Birth support region data: ${uniqueRegionCodes.size} unique regionCode item(s) (main ${mainRegionCodes.length} + extra ${extraRegionCodes.length})`);
console.log(`Official childcare.go.kr 2026 list count: ${officialListCount} items`);

if (duplicateRegionCodes.length > 0) {
  console.error(`Duplicate regionCode detected: ${[...new Set(duplicateRegionCodes)].join(", ")}`);
  process.exitCode = 1;
}

if (uniqueRegionCodes.size !== officialListCount) {
  console.warn(`Coverage check: ${officialListCount - uniqueRegionCodes.size} item(s) differ from the official list count. Do not show a fixed total count on user-facing pages until the list is fully reconciled.`);
  process.exitCode = 1;
}
