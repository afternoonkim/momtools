import type { Metadata } from "next";
import DaycarePrepPage from "../daycare-prep/page";

export const metadata: Metadata = {
  title: "Daycare Prep Checklist | Labels, Extra Clothes, and Daily Drop-Off Basics",
  description:
    "Get ready for daycare with a simple checklist for labels, extra clothes, feeding notes, pickup contacts, and smoother first drop-offs.",
  alternates: { canonical: "https://momtools.kr/en/checklists/daycare" },
};

export default function Page() {
  return <DaycarePrepPage />;
}
