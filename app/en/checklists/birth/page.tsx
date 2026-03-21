import type { Metadata } from "next";
import BirthPrepPage from "../birth-prep/page";

export const metadata: Metadata = {
  title: "Birth Prep Checklist | Hospital Bag, Paperwork, and Last-Month Prep",
  description:
    "Use a practical birth prep checklist for hospital bag basics, paperwork, partner prep, and the final tasks many US parents finish before labor.",
  alternates: { canonical: "https://momtools.kr/en/checklists/birth" },
};

export default function Page() {
  return <BirthPrepPage />;
}
