import type { Metadata } from "next";
import DaycarePrepPage from "@/app/checklists/daycare-prep/page";
export const metadata: Metadata = { title: "어린이집 준비 체크리스트", description: "어린이집 등원 전 준비 항목을 정리한 MomTools 체크리스트입니다.", alternates: { canonical: "https://momtools.kr/checklists/daycare" } };
export default function Page(){ return <DaycarePrepPage />; }
