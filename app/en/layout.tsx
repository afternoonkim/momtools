import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "MomTools",
  description: "MomTools는 한국어 육아 계산기와 육아 정보를 먼저 정리하고 있습니다.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://momtools.kr/" },
};

export default function EnglishLayout() {
  redirect("/");
}
