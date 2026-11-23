/**
 * Read-only publication schedule validation (Asia/Seoul / +09:00).
 * Optional: MOMTOOLS_NEXT_RELEASE_AT=2026-12-06T12:00:00+09:00
 */
import { parentingProductGuides } from "../data/parentingProductGuides";

let errors = 0;
let warnings = 0;
const error = (message: string) => { console.error(`[ERROR] ${message}`); errors++; };
const warn = (message: string) => { console.warn(`[WARN] ${message}`); warnings++; };
const perDay = new Map<string, number>();
const perTime = new Map<string, string>();
const perBatch = new Map<number, { earliest: number; latest: number }>();
const now = Date.now();
const releaseText = process.env.MOMTOOLS_NEXT_RELEASE_AT;
const releaseAt = releaseText ? Date.parse(releaseText) : undefined;
if (releaseText && (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+09:00$/.test(releaseText) || !Number.isFinite(releaseAt))) {
  error("MOMTOOLS_NEXT_RELEASE_AT must be a valid +09:00 ISO datetime.");
}

for (const guide of parentingProductGuides) {
  const context = `${guide.batch}/${guide.slug}`;
  const time = Date.parse(guide.publishAt);
  if (!Number.isFinite(time)) { error(`${context}: publishAt is not a valid date.`); continue; }
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+09:00$/.test(guide.publishAt)) {
    error(`${context}: publishAt must explicitly use Asia/Seoul UTC+09:00.`);
  }
  const day = guide.publishAt.slice(0, 10);
  perDay.set(day, (perDay.get(day) ?? 0) + 1);
  if (perTime.has(guide.publishAt)) error(`${context}: Duplicate publish time with ${perTime.get(guide.publishAt)}.`);
  perTime.set(guide.publishAt, context);
  const id = Number(guide.batch.slice(6));
  if (Number.isInteger(id)) {
    const range = perBatch.get(id);
    perBatch.set(id, { earliest: Math.min(range?.earliest ?? time, time), latest: Math.max(range?.latest ?? time, time) });
  }
}

for (const [day, count] of [...perDay].sort()) {
  if (count > 3) error(`${day}: ${count} guides scheduled; limit is three per KST day.`);
}
const sorted = [...perBatch].sort(([a], [b]) => a - b);
for (let i = 1; i < sorted.length; i++) {
  const [batch, range] = sorted[i];
  const [previousBatch, previous] = sorted[i - 1];
  if (range.earliest <= previous.latest) {
    error(`batch-${String(batch).padStart(3, "0")} starts before or at the end of batch-${String(previousBatch).padStart(3, "0")}.`);
  }
}
const lastBatch = sorted.at(-1)?.[0];
if (lastBatch !== undefined) {
  for (const guide of parentingProductGuides) {
    // A warning for stale unshipped content, not for already published historical batches.
    if (Number(guide.batch.slice(6)) !== lastBatch) continue;
    const time = Date.parse(guide.publishAt);
    if (time < now) warn(`${guide.batch}/${guide.slug}: latest batch publishAt is in the past; confirm deployment status.`);
    if (releaseAt !== undefined && Number.isFinite(releaseAt) && time <= releaseAt) {
      error(`${guide.batch}/${guide.slug}: scheduled for ${guide.publishAt}, not after the next deployment (${releaseText}).`);
    }
  }
}
console.log(`Parenting product schedule audit: ${parentingProductGuides.length} guides across ${perDay.size} KST days; latest batch batch-${String(lastBatch ?? 0).padStart(3, "0")}.`);
console.log(`Result: ${errors} error(s), ${warnings} warning(s).`);
if (errors) process.exitCode = 1;
