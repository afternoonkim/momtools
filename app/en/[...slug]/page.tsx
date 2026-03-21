import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Page not found | MomTools English",
    description: "This URL is not part of the public English site structure.",
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
