import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "MomTools English", template: "%s | MomTools" },
  description:
    "Practical U.S. parenting tools, checklists, and baby guides for pregnancy, newborn care, feeding, growth, and everyday family questions.",
  robots: { index: true, follow: true },
  alternates: {
    languages: {
      "en-US": "https://momtools.kr/en",
      "ko-KR": "https://momtools.kr/",
      "x-default": "https://momtools.kr/",
    },
  },
  openGraph: {
    siteName: "MomTools",
    locale: "en_US",
    type: "website",
  },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="en-US">{children}</div>;
}
