"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { FEELING_EMOTIONS, type FeelingVisibility, type MomentPromptSeed } from "@/lib/feelings";

type FeelingComposerChild = {
  id: string;
  name: string;
  isPrimary?: boolean;
};

type FeelingComposerProps = {
  open: boolean;
  onClose: () => void;
  childId?: string;
  childName?: string;
  momentPrompt?: MomentPromptSeed | null;
  onSaved?: () => void;
};

type ContextResponse = {
  loggedIn?: boolean;
  children?: FeelingComposerChild[];
  selectedChild?: FeelingComposerChild | null;
  momentPrompt?: MomentPromptSeed | null;
};

export default function FeelingComposer({ open, onClose, childId, childName, momentPrompt: initialMomentPrompt, onSaved }: FeelingComposerProps) {
  const router = useRouter();
  const [children, setChildren] = useState<FeelingComposerChild[]>(childId ? [{ id: childId, name: childName || "우리 아이" }] : []);
  const [selectedChild, setSelectedChild] = useState<FeelingComposerChild | null>(childId ? { id: childId, name: childName || "우리 아이" } : null);
  const [momentPrompt, setMomentPrompt] = useState<MomentPromptSeed | null>(initialMomentPrompt ?? null);
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
  const [content, setContent] = useState("");
  const [visibility, setVisibility] = useState<FeelingVisibility>("PUBLIC");
  const [pending, setPending] = useState(false);
  const [contextPending, setContextPending] = useState(false);
  const [message, setMessage] = useState("");

  const canSubmit = selectedChild && selectedEmotions.length > 0 && content.trim().length > 0 && !pending && !contextPending;
  const placeholder = useMemo(() => momentPrompt?.placeholder || "오늘 아이와 관련해 기억하고 싶은 일이 있나요?", [momentPrompt]);

  const loadContext = useCallback(
    async (nextChildId?: string) => {
      if (!open) return;
      setContextPending(true);
      const query = nextChildId ? `?childId=${encodeURIComponent(nextChildId)}` : childId ? `?childId=${encodeURIComponent(childId)}` : "";

      const response = await fetch(`/api/feelings/context${query}`, { cache: "no-store" }).catch(() => null);
      setContextPending(false);

      if (response?.status === 401) {
        router.push("/login?next=/feelings");
        return;
      }

      if (!response?.ok) return;
      const data = (await response.json().catch(() => null)) as ContextResponse | null;
      if (!data) return;

      if (Array.isArray(data.children)) setChildren(data.children);
      if (data.selectedChild) setSelectedChild(data.selectedChild);
      setMomentPrompt(data.momentPrompt ?? null);
    },
    [childId, open, router],
  );

  useEffect(() => {
    if (!open) return;
    setMessage("");
    loadContext(selectedChild?.id || childId);
  }, [childId, loadContext, open, selectedChild?.id]);

  function toggleEmotion(key: string) {
    setSelectedEmotions((current) => {
      if (current.includes(key)) return current.filter((item) => item !== key);
      return [...current, key].slice(0, 4);
    });
  }

  function handleChildSelect(nextChildId: string) {
    const nextChild = children.find((child) => child.id === nextChildId);
    if (!nextChild || nextChild.id === selectedChild?.id) return;
    setSelectedChild(nextChild);
    setMomentPrompt(null);
    setMessage("");
    loadContext(nextChild.id);
  }

  async function submit() {
    if (!selectedChild || !canSubmit) return;
    setPending(true);
    setMessage("");

    const response = await fetch("/api/feelings/records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        childId: selectedChild.id,
        emotions: selectedEmotions,
        content,
        visibility,
        momentPromptId: momentPrompt?.id,
      }),
    }).catch(() => null);

    setPending(false);

    if (!response?.ok) {
      const data = await response?.json().catch(() => null);
      setMessage(typeof data?.error === "string" ? data.error : "저장하지 못했어요. 잠시 후 다시 시도해 주세요.");
      return;
    }

    setSelectedEmotions([]);
    setContent("");
    setVisibility("PUBLIC");
    onSaved?.();
    onClose();
    router.refresh();
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/45 px-3 pb-3 lg:items-center lg:pb-0" role="dialog" aria-modal="true" aria-label="오늘의 마음 기록">
      <div className="w-full max-w-lg overflow-hidden rounded-[1.75rem] border border-amber-100 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 px-4 py-3 dark:border-slate-800">
          <div className="min-w-0">
            <p className="text-[11px] font-extrabold text-amber-700">오늘의 마음</p>
            <h2 className="mt-0.5 text-[17px] font-black leading-6 text-slate-950 dark:text-white">{selectedChild?.name || "우리 아이"}와 보낸 마음을 남겨요</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200" aria-label="닫기">
            <X size={18} aria-hidden />
          </button>
        </div>

        <div className="max-h-[72vh] space-y-4 overflow-y-auto px-4 py-4">
          {children.length > 1 ? (
            <section>
              <p className="text-[12px] font-black text-slate-900 dark:text-slate-100">기록할 아이</p>
              <div className="mt-2 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {children.map((child) => {
                  const selected = child.id === selectedChild?.id;
                  return (
                    <button
                      key={child.id}
                      type="button"
                      onClick={() => handleChildSelect(child.id)}
                      aria-pressed={selected}
                      data-state={selected ? "active" : "inactive"}
                      className="mt-choice-control mt-choice-control--pill inline-flex min-h-10 shrink-0 items-center rounded-full border px-3 text-[12px] font-extrabold transition active:scale-[0.98]"
                    >
                      {child.name}
                    </button>
                  );
                })}
              </div>
              <p className="mt-1 text-[10px] font-bold text-slate-400 dark:text-slate-500">선택한 아이 기준으로 오늘의 순간과 공개 범위가 정해져요.</p>
            </section>
          ) : null}

          {momentPrompt ? (
            <section className="rounded-3xl border border-amber-100 bg-amber-50/70 p-3 dark:border-amber-400/20 dark:bg-amber-400/10">
              <p className="text-[11px] font-extrabold text-amber-700">오늘의 순간</p>
              <h3 className="mt-1 text-[14px] font-black leading-5 text-slate-950 dark:text-white">{momentPrompt.title}</h3>
              <p className="mt-1 text-[12px] font-bold leading-5 text-slate-600 dark:text-slate-300">{momentPrompt.question}</p>
            </section>
          ) : null}

          <section>
            <p className="text-[12px] font-black text-slate-900 dark:text-slate-100">감정을 골라주세요</p>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {FEELING_EMOTIONS.map((emotion) => {
                const selected = selectedEmotions.includes(emotion.key);
                return (
                  <button
                    key={emotion.key}
                    type="button"
                    onClick={() => toggleEmotion(emotion.key)}
                    aria-pressed={selected}
                    data-state={selected ? "active" : "inactive"}
                    className="mt-choice-control min-h-14 rounded-2xl border px-1.5 py-2 text-center transition active:scale-[0.98]"
                  >
                    <span className="block text-lg leading-none">{emotion.emoji}</span>
                    <span className="mt-1 block text-[10px] font-extrabold leading-3">{emotion.label}</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section>
            <label htmlFor="feeling-content" className="text-[12px] font-black text-slate-900 dark:text-slate-100">짧은 메모</label>
            <textarea
              id="feeling-content"
              value={content}
              onChange={(event) => setContent(event.target.value.slice(0, 100))}
              rows={3}
              maxLength={100}
              placeholder={placeholder}
              className="mt-input mt-2 w-full resize-none px-3 py-3 text-[13px] font-bold leading-5"
            />
            <p className="mt-1 text-right text-[10px] font-bold text-slate-400">{content.length}/100</p>
          </section>

          <section>
            <p className="text-[12px] font-black text-slate-900 dark:text-slate-100">공개 여부</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setVisibility("PUBLIC")}
                aria-pressed={visibility === "PUBLIC"}
                data-state={visibility === "PUBLIC" ? "active" : "inactive"}
                className="mt-choice-control min-h-11 rounded-2xl border px-3 text-[12px] font-extrabold"
              >
                익명 공개
              </button>
              <button
                type="button"
                onClick={() => setVisibility("PRIVATE")}
                aria-pressed={visibility === "PRIVATE"}
                data-state={visibility === "PRIVATE" ? "active" : "inactive"}
                className="mt-choice-control min-h-11 rounded-2xl border px-3 text-[12px] font-extrabold"
              >
                나만 보기
              </button>
            </div>
            <p className="mt-2 text-[11px] leading-4 text-slate-500 dark:text-slate-400">익명 공개를 선택해도 이름, 아이 이름, 연락처는 보이지 않아요.</p>
          </section>

          {message ? <p className="rounded-2xl bg-rose-50 px-3 py-2 text-[12px] font-bold text-rose-700 dark:bg-rose-950/40 dark:text-rose-200">{message}</p> : null}
        </div>

        <div className="border-t border-slate-100 p-4 dark:border-slate-800">
          <button
            type="button"
            onClick={submit}
            disabled={!canSubmit}
            className="mt-button-primary flex min-h-12 w-full items-center justify-center rounded-2xl px-4 py-3 text-[13px] font-black disabled:cursor-not-allowed disabled:opacity-50"
          >
            {pending ? "저장 중" : contextPending ? "아이 정보 확인 중" : "마음 기록하기"}
          </button>
        </div>
      </div>
    </div>
  );
}
