/**
 * Read-only quality gate for all MomTools parenting product guides.
 * Usage: npm run check:parenting-products
 * No database, network access, or publication side effects.
 */
import fs from "node:fs";
import path from "node:path";
import { parentingProductGuides } from "../data/parentingProductGuides";

type Issue = { severity: "ERROR" | "WARN"; context: string; message: string };
const issues: Issue[] = [];
const error = (context: string, message: string) => issues.push({ severity: "ERROR", context, message });
const warn = (context: string, message: string) => issues.push({ severity: "WARN", context, message });

const categories = new Set(["신생아", "수유", "외출", "이유식", "어린이집", "생활"]);
const productCategories = new Set([
  "thermometer", "nasal-aspirator", "humidifier", "stroller", "car-seat",
  "baby-carrier", "balance-bike", "baby-food-tool", "baby-bottle",
  "diaper", "baby-wipes", "newborn-item", "daycare-item", "baby-bath",
  "baby-detergent", "sleeping-item", "oral-care", "potty-training",
  "safety-item", "development-toy",
]);
const requiredText = [
  "slug", "title", "shortTitle", "description", "summary", "quickAnswer",
  "safetyTitle", "simpleAction", "publishAt", "updatedAt",
] as const;
const normalize = (value: string) => value.normalize("NFKC").replace(/\s+/g, " ").trim().toLowerCase();
const nonempty = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;
const arrayOfText = (value: unknown, min: number) =>
  Array.isArray(value) && value.length >= min && value.every(nonempty);

const bySlug = new Map<string, string>();
const byTitle = new Map<string, string>();
const byBatch = new Map<number, number>();
const validSlugs = new Set(parentingProductGuides.map((guide) => guide.slug));

for (const [index, guide] of parentingProductGuides.entries()) {
  const context = `${guide.batch ?? "unknown-batch"}/${guide.slug ?? `index-${index}`}`;
  const match = /^batch-(\d{3})$/.exec(guide.batch);
  if (!match || Number(match[1]) < 1) error(context, "Invalid batch identifier (expected batch-001 and onward).");
  else byBatch.set(Number(match[1]), (byBatch.get(Number(match[1])) ?? 0) + 1);

  for (const key of requiredText) {
    if (!nonempty(guide[key])) error(context, `Missing required text: ${key}`);
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(guide.slug)) {
    error(context, "Slug must use lowercase ASCII letters, digits, and hyphens.");
  }
  if (!categories.has(guide.category)) error(context, `Unknown category: ${guide.category}`);
  if (!["PUBLISHED", "SCHEDULED"].includes(guide.status)) {
    error(context, `Unknown publishing status: ${guide.status}`);
  }
  const titleKey = normalize(guide.title);
  if (byTitle.has(titleKey)) error(context, `Duplicate title (also ${byTitle.get(titleKey)})`);
  else byTitle.set(titleKey, context);
  if (bySlug.has(guide.slug)) error(context, `Duplicate slug (also ${bySlug.get(guide.slug)})`);
  else bySlug.set(guide.slug, context);

  if (!arrayOfText(guide.keywords, 1)) error(context, "At least one SEO keyword is required.");
  if (!arrayOfText(guide.coupangKeywords, 1) || guide.coupangKeywords.length > 3) {
    error(context, "Coupang keywords must contain 1-3 nonempty values.");
  } else if (new Set(guide.coupangKeywords.map(normalize)).size !== guide.coupangKeywords.length) {
    warn(context, "Coupang keywords repeat within the guide.");
  }
  if (!arrayOfText(guide.productCategorySlugs, 1)) {
    error(context, "At least one product category is required.");
  } else for (const slug of guide.productCategorySlugs) {
    if (!productCategories.has(slug)) error(context, `Unknown product category: ${slug}`);
  }

  if (!Array.isArray(guide.sections) || guide.sections.length < 2) {
    error(context, "A guide should have at least two substantive sections.");
  } else for (const [i, section] of guide.sections.entries()) {
    if (!nonempty(section.title) || !arrayOfText(section.paragraphs, 1)) {
      error(context, `Section ${i + 1} is missing a title or paragraphs.`);
    }
    if (section.items && !arrayOfText(section.items, 1)) error(context, `Section ${i + 1} has invalid items.`);
  }
  if (!arrayOfText(guide.buyingChecklist, 2)) error(context, "Buying checklist needs two or more items.");
  if (!arrayOfText(guide.safetyNotes, 1)) error(context, "Safety notes are required.");
  if (!Array.isArray(guide.faq) || guide.faq.length === 0 ||
    guide.faq.some((item) => !nonempty(item.question) || !nonempty(item.answer))) {
    error(context, "FAQ requires nonempty questions and answers.");
  }
  if (!Array.isArray(guide.sources) || guide.sources.length === 0 ||
    guide.sources.some((item) => !nonempty(item.title) || !/^https:\/\//.test(item.url))) {
    error(context, "Provide at least one titled HTTPS source.");
  }
  if (!Array.isArray(guide.relatedLinks) || guide.relatedLinks.length === 0) {
    error(context, "At least one related link is required.");
  } else for (const link of guide.relatedLinks) {
    if (!nonempty(link.href) || !link.href.startsWith("/") || !nonempty(link.title) || !nonempty(link.description)) {
      error(context, "Related links require a local href, title, and description.");
      continue;
    }
    if (/^\/parenting-products\//.test(link.href)) {
      const relatedSlug = link.href.slice("/parenting-products/".length).split(/[?#]/)[0];
      if (!validSlugs.has(relatedSlug)) error(context, `Related product guide does not exist: ${link.href}`);
      if (relatedSlug === guide.slug) error(context, "A guide must not link to itself.");
    } else {
      // Other parts of MomTools may be DB-driven or routed dynamically.
      // Check a known static route when possible, but do not make a false failure.
      const segments = link.href.split(/[?#]/)[0].split("/").filter(Boolean);
      const folder = path.join(process.cwd(), "app", ...segments);
      if (!fs.existsSync(path.join(folder, "page.tsx")) && !fs.existsSync(path.join(folder, "page.ts"))) {
        // Not a proof of a bad URL: e.g. /qna/... or /monthly-guide/... are dynamic.
        const dynamicRoot = path.join(process.cwd(), "app", segments[0] ?? "");
        if (!fs.existsSync(dynamicRoot)) warn(context, `Related route needs review: ${link.href}`);
      }
    }
  }
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+09:00$/.test(guide.publishAt) ||
      !Number.isFinite(Date.parse(guide.publishAt))) {
    error(context, `Invalid KST publishing datetime: ${guide.publishAt}`);
  }
  if (!/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}\+09:00)?$/.test(guide.updatedAt) ||
      !Number.isFinite(Date.parse(guide.updatedAt))) {
    error(context, `Invalid updatedAt: ${guide.updatedAt}`);
  }
}

const batchIds = [...byBatch.keys()].sort((a, b) => a - b);
for (let id = 1; id <= (batchIds.at(-1) ?? 0); id++) {
  const count = byBatch.get(id);
  if (!count) error("batch sequence", `batch-${String(id).padStart(3, "0")} is missing.`);
  else if (count !== 5) error("batch sequence", `batch-${String(id).padStart(3, "0")} has ${count} guides, expected 5.`);
}
console.log(`Parenting product content audit: ${parentingProductGuides.length} guides / ${batchIds.length} batches.`);
for (const issue of issues) console.log(`[${issue.severity}] ${issue.context}: ${issue.message}`);
const fail = issues.filter((item) => item.severity === "ERROR").length;
const warningCount = issues.filter((item) => item.severity === "WARN").length;
console.log(`Result: ${fail} error(s), ${warningCount} warning(s).`);
if (fail > 0) process.exitCode = 1;
