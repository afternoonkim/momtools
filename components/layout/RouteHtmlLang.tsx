"use client";

import { useEffect } from "react";

export default function RouteHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const previousLang = document.documentElement.lang;
    document.documentElement.lang = lang;

    return () => {
      document.documentElement.lang = previousLang || "ko";
    };
  }, [lang]);

  return null;
}
