import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function KakaoLoginButton({ next = "/auth/after-login" }: { next?: string }) {
  const href = `/api/auth/kakao?next=${encodeURIComponent(next)}`;

  return (
    <Link
      href={href}
      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#FEE500] px-4 py-3 text-sm font-extrabold text-[#191919] shadow-sm transition active:scale-[0.99] sm:w-auto sm:min-w-64"
    >
      <MessageCircle size={18} aria-hidden />
      카카오로 시작하기
    </Link>
  );
}
