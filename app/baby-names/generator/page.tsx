import type { Metadata } from "next";
import NameGeneratorClient from "@/components/baby-names/NameGeneratorClient";
import AdBlock from "@/components/ad/AdBlock";
export const metadata: Metadata = { title: "아이 이름 생성기", description: "성씨와 분위기를 선택해 참고용 아이 이름 조합을 바로 추천하는 MomTools 이름 생성기입니다.", alternates: { canonical: "https://momtools.kr/baby-names/generator" } };
export default function Page(){ return <div className="mt-page"><div className="mt-container space-y-8"><NameGeneratorClient /><AdBlock placement="contentInline" format="rectangle" label="아이 이름 생성기 광고 영역" /></div></div>; }
