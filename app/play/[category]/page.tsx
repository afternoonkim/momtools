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
    title: `${getLocalizedPlayText(current.name, "ko")} | 놀이 자료 | MomTools`,
    description: `${getLocalizedPlayText(current.name, "ko")} 카테고리에서 아이 연령과 난이도에 맞는 프린트 놀이 자료를 살펴보세요. ${getLocalizedPlayText(current.description, "ko")}`,
    alternates: { canonical: `https://momtools.kr/play/${category}` },
  };
}

export default async function PlayCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!getPlayCategory(category)) notFound();

  return <PlayCategoryView category={category as PlayCategory} locale="ko" />;
}
