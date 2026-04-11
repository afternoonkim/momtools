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
    title: `${getLocalizedPlayText(item.title, "ko")} | 놀이 자료 | MomTools`,
    description: `${getLocalizedPlayText(item.summary, "ko")} ${getLocalizedPlayText(item.ageRange, "ko")} 기준으로 보기 좋은 ${getLocalizedPlayText(item.difficulty, "ko")} 난이도 놀이 자료입니다.`,
    alternates: { canonical: `https://momtools.kr/play/${category}/${slug}` },
  };
}

export default async function PlayDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const item = getPlayItem(category, slug);
  if (!item) notFound();

  return <PlayDetailView item={item} locale="ko" />;
}
