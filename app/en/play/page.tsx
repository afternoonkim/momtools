import type { Metadata } from "next";
import PlayHubView from "@/components/play/PlayHubView";

export const metadata: Metadata = {
  title: "Printable Play Pages | MomTools",
  description: "Browse printable play topics for coloring, mazes, hidden picture activities, and dot-to-dot pages.",
  alternates: { canonical: "https://momtools.kr/en/play" },
  robots: { index: false, follow: true },
};

export default function EnglishPlayHomePage() {
  return <PlayHubView locale="en" />;
}
