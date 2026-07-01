"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useId, useMemo, useState } from "react";
import { getSearchSuggestions } from "@/data/searchSuggestions";

interface SearchBoxProps {
  /** 페이지 로드 시 미리 채워진 검색어 (예: /search?q=감기) */
  initialQuery?: string;
  /** 입력창에 보일 placeholder */
  placeholder?: string;
  /** 시각적 크기 */
  size?: "sm" | "md";
  /** 검색 버튼 표시 여부 */
  showSubmitButton?: boolean;
  /** 추천어 표시 여부 */
  showSuggestions?: boolean;
  /** 추가 CSS 클래스 */
  className?: string;
}

/**
 * 사이트 통합 검색 입력창. 사용자가 enter 또는 검색 버튼을 누르면 /search?q= 로 이동합니다.
 * 입력 중에는 모바일에서 바로 누르기 쉬운 추천 검색어를 보여줍니다.
 */
export default function SearchBox({
  initialQuery = "",
  placeholder = "아기 열, 아기 개월수, 이유식 시작 검색",
  size = "md",
  showSubmitButton = false,
  showSuggestions = true,
  className,
}: SearchBoxProps) {
  const router = useRouter();
  const inputId = useId();
  const [query, setQuery] = useState(initialQuery);
  const [focused, setFocused] = useState(false);

  const suggestions = useMemo(() => getSearchSuggestions(query, query.trim() ? 7 : 6), [query]);
  const shouldShowSuggestions = showSuggestions && focused && suggestions.length > 0;

  const moveToSearch = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) {
      router.push("/search");
      return;
    }
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    moveToSearch(query);
  };

  const sizeClasses =
    size === "sm"
      ? "px-3 py-1.5 text-sm"
      : "px-4 py-2.5 text-sm";

  return (
    <div className="relative w-full">
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
          onFocus={() => setFocused(true)}
          onBlur={() => window.setTimeout(() => setFocused(false), 140)}
          placeholder={placeholder}
          autoComplete="off"
          aria-label="사이트 통합 검색"
          aria-expanded={shouldShowSuggestions}
          aria-controls={`${inputId}-suggestions`}
          className="ml-2 w-full bg-transparent text-slate-800 outline-none placeholder:text-slate-400"
        />
        {showSubmitButton ? (
          <button type="submit" className="ml-2 shrink-0 rounded-xl bg-amber-500 px-3 py-2 text-[12px] font-extrabold text-white transition hover:bg-amber-600">
            검색
          </button>
        ) : null}
      </form>

      {shouldShowSuggestions ? (
        <div id={`${inputId}-suggestions`} className="mt-search-suggestions" role="listbox" aria-label="추천 검색어">
          <div className="mt-search-suggestions-head">
            {query.trim() ? "추천 검색어" : "자주 찾는 검색어"}
          </div>
          {suggestions.map((item) => (
            <button
              key={`${item.category}-${item.query}`}
              type="button"
              role="option"
              className="mt-search-suggestion-item"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => moveToSearch(item.query)}
            >
              <span>
                <strong>{item.label}</strong>
                <em>{item.description}</em>
              </span>
              <small>{item.category}</small>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
