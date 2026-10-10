import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Page not found | MomTools",
    description: "We could not find that MomTools page. Use the main tools and guides to continue browsing.",
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
  };
}

export default function EnglishFallbackPage() {
  notFound();
}
