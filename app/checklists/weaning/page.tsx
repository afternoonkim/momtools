import type { Metadata } from "next";
import WeaningPrepPage from "@/app/checklists/weaning-prep/page";
export const metadata: Metadata = { title: "이유식 준비 체크리스트", description: "이유식 시작 전 필요한 준비물을 정리한 MomTools 체크리스트입니다.", alternates: { canonical: "https://momtools.kr/checklists/weaning" } };
export default function Page(){ return <WeaningPrepPage />; }
