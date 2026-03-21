import type { Metadata } from "next";
import NewbornPrepPage from "../newborn-prep/page";

export const metadata: Metadata = {
  title: "Newborn Checklist | Sleep, Feeding, Diapering, and Home Setup",
  description:
    "Review the newborn basics most parents set up first, including safe sleep, feeding supplies, diapering, and simple at-home routines.",
  alternates: { canonical: "https://momtools.kr/en/checklists/newborn" },
};

export default function Page() {
  return <NewbornPrepPage />;
}
