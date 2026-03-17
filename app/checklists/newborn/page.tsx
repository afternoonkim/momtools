import type { Metadata } from "next";
import NewbornPrepPage from "@/app/checklists/newborn-prep/page";
export const metadata: Metadata = { title: "신생아 준비 체크리스트", description: "신생아 맞이 전 준비물을 정리한 MomTools 체크리스트입니다.", alternates: { canonical: "https://momtools.kr/checklists/newborn" } };
export default function Page(){ return <NewbornPrepPage />; }
