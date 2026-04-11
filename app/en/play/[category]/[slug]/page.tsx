import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PlayDetailView from "@/components/play/PlayDetailView";
import { getLocalizedPlayText, getPlayItem, playItems } from "@/data/play";

export async function generateStaticParams() {
  return playItems.map((item) => ({ category: item.category, slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const item = getPlayItem(category, slug);
  if (!item) return {};

  return {
    title: `${getLocalizedPlayText(item.title, "en")} | Printable Play | MomTools`,
    description: `${getLocalizedPlayText(item.summary, "en")} A ${getLocalizedPlayText(item.difficulty, "en").toLowerCase()} printable activity for ${getLocalizedPlayText(item.ageRange, "en")}.`,
    alternates: { canonical: `https://momtools.kr/en/play/${category}/${slug}` },
  };
}

export default async function EnglishPlayDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const item = getPlayItem(category, slug);
  if (!item) notFound();

  return <PlayDetailView item={item} locale="en" />;
}
