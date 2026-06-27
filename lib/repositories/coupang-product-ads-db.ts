import { prisma } from "@/lib/db";
import { normalizeCoupangPathname } from "@/lib/coupang-partners";

export type MatchedCoupangProductAd = {
  id: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  description: string | null;
  partnerUrl: string;
  buttonText: string;
  priority: number;
};

const MAX_PRODUCT_AD_ITEMS = 3;

export async function getMatchedCoupangProductAds(pathname: string): Promise<MatchedCoupangProductAd[]> {
  const pagePath = normalizeCoupangPathname(pathname);

  const mappings = await prisma.pageProductAdMapping.findMany({
    where: {
      pagePath,
      enabled: true,
      category: {
        enabled: true,
        links: {
          some: {
            enabled: true,
            partnerUrl: { not: "" },
          },
        },
      },
    },
    orderBy: [{ priority: "desc" }, { category: { sortOrder: "asc" } }],
    take: MAX_PRODUCT_AD_ITEMS,
    include: {
      category: {
        select: {
          slug: true,
          name: true,
          links: {
            where: {
              enabled: true,
              partnerUrl: { not: "" },
            },
            orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }],
            take: 1,
            select: {
              id: true,
              title: true,
              description: true,
              partnerUrl: true,
              buttonText: true,
            },
          },
        },
      },
    },
  });

  return mappings.flatMap((mapping) => {
    const link = mapping.category.links[0];
    if (!link) return [];

    return {
      id: link.id,
      categorySlug: mapping.category.slug,
      categoryName: mapping.category.name,
      title: link.title,
      description: link.description,
      partnerUrl: link.partnerUrl,
      buttonText: link.buttonText,
      priority: mapping.priority,
    } satisfies MatchedCoupangProductAd;
  });
}
