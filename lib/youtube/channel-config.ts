export type YoutubeChannelConfig = {
  id: string;
  label: string;
  badgeClassName?: string;
  uploadsPlaylistId?: string;
};

// MomTools용 육아 채널 ID를 여기에 넣으면 됩니다.
// 예시:
// { id: "채널ID", label: "채널명" }
export const YOUTUBE_CHANNELS: YoutubeChannelConfig[] = [
  { id: "UC6t0ees15Lp0gyrLrAyLeJQ", label: "삐뽀삐뽀 119 소아과"},
  { id: "UC-woZsctXZLnJOG-Tu6TZ5g", label: "우리어린이"},
  { id: "UCdy3v5Ftz5LutQXzb7v12Dw", label: "산소형제"},
  { id: "UC-FZjF-oF0Cvq699UNcG5Tg", label: "맘똑티비"},
  { id: "UC36Wcr0fy23W643DhG_U7HQ", label: "다울아이TV"},
  { id: "UCrYh7Ny8UtXRfpETsPuozKw", label: "압구정 호산병원"},
  { id: "UC_AfDhGrbbL6CKr5nxx_Fow", label: "삐뽀삐뽀 정유미TV"},
  { id: "UCTpsxV34z_BypmedxeBSzXA", label: "이민주육아상담소"},
  { id: "UC5m1d4sPHnpcLCJEu3j2FpQ", label: "최민준의 아들TV"},
];
