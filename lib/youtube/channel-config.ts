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
];
