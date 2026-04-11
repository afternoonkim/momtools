import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PlayCategoryView from "@/components/play/PlayCategoryView";
import { getLocalizedPlayText, getPlayCategory, playCategories, type PlayCategory } from "@/data/play";

export async function generateStaticParams() {
  return playCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const current = getPlayCategory(category);
  if (!current) return {};

  return {
    title: `${getLocalizedPlayText(current.name, "en")} | Printable Play | MomTools`,
    description: `${getLocalizedPlayText(current.description, "en")} Browse age-friendly printable activity pages in this category.`,
    alternates: { canonical: `https://momtools.kr/en/play/${category}` },
  };
}

export default async function EnglishPlayCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!getPlayCategory(category)) notFound();

  return <PlayCategoryView category={category as PlayCategory} locale="en" />;
}
