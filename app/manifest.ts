import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MomTools - 육아 기록과 계산기",
    short_name: "MomTools",
    description: "아이 개월수, 예방접종, 이유식 기록, 발달 체크를 빠르게 확인하는 육아 도구",
    start_url: "/?source=pwa",
    scope: "/",
    display: "standalone",
    background_color: "#fffdf8",
    theme_color: "#f59e0b",
    orientation: "portrait-primary",
    categories: ["parenting", "health", "utilities"],
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
