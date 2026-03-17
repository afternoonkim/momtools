import type { Metadata } from "next";
import BirthPrepPage from "@/app/checklists/birth-prep/page";
export const metadata: Metadata = { title: "출산 준비 체크리스트", description: "입원 준비물과 출산 전 준비 항목을 정리한 MomTools 체크리스트입니다.", alternates: { canonical: "https://momtools.kr/checklists/birth" } };
export default function Page(){ return <BirthPrepPage />; }
