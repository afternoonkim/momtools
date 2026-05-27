"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";

interface SearchBoxProps {
  /** 페이지 로드 시 미리 채워진 검색어 (예: /search?q=감기) */
  initialQuery?: string;
  /** 입력창에 보일 placeholder */
  placeholder?: string;
  /** 시각적 크기 */
  size?: "sm" | "md";
  /** 추가 CSS 클래스 */
  className?: string;
}

/**
 * 사이트 통합 검색 입력창. 사용자가 enter 또는 검색 버튼을 누르면 /search?q= 로 이동합니다.
 * - 모바일/데스크톱 어느 쪽에서도 작동
 * - 라우팅 후 입력값은 그대로 유지되어 결과 페이지의 검색창과 자연스럽게 이어집니다.
 */
export default function SearchBox({
  initialQuery = "",
  placeholder = "아기 열, 아기 개월수, 이유식 시작 검색",
  size = "md",
  className,
}: SearchBoxProps) {
  const router = useRouter();
  const inputId = useId();
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      router.push("/search");
      return;
    }
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  const sizeClasses =
    size === "sm"
      ? "px-3 py-1.5 text-sm"
      : "px-4 py-2.5 text-sm";

  return (
    <form
      action="/search"
      method="get"
      role="search"
      onSubmit={handleSubmit}
      className={`flex w-full items-center rounded-2xl border border-amber-200 bg-white shadow-sm transition focus-within:border-amber-400 ${sizeClasses} ${
        className ?? ""
      }`.trim()}
    >
      <Search size={size === "sm" ? 14 : 16} className="shrink-0 text-amber-600" aria-hidden />
      <label htmlFor={inputId} className="sr-only">
        사이트 통합 검색
      </label>
      <input
        id={inputId}
        type="search"
        name="q"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        aria-label="사이트 통합 검색"
        className="ml-2 w-full bg-transparent text-slate-800 outline-none placeholder:text-slate-400"
      />
    </form>
  );
}
