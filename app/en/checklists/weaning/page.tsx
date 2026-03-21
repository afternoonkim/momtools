import type { Metadata } from "next";
import WeaningPrepPage from "../weaning-prep/page";

export const metadata: Metadata = {
  title: "Starting Solids Checklist | High Chair, First Foods, and Feeding Setup",
  description:
    "Plan your starting solids setup with a practical checklist for high chair safety, feeding tools, cleanup basics, and first-food prep.",
  alternates: { canonical: "https://momtools.kr/en/checklists/weaning" },
};

export default function Page() {
  return <WeaningPrepPage />;
}
