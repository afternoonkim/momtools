import type { Metadata } from "next";
import RouteHtmlLang from "@/components/layout/RouteHtmlLang";

export const metadata: Metadata = {
  title: { default: "MomTools English", template: "%s | MomTools" },
  description:
    "US-friendly parenting tools, checklists, and practical guides for due dates, baby age, vaccine timing, starting solids, and everyday baby care.",
  openGraph: {
    title: "MomTools English",
    description:
      "Practical parenting tools and guides for families in the United States.",
    locale: "en_US",
    type: "website",
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteHtmlLang lang="en" />
      {children}
    </>
  );
}
