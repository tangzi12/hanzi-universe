import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "汉字宇宙 | Interactive Prototype",
  description: "A shareable interactive Chinese character universe prototype."
};

export default function HanziUniversePage() {
  return (
    <main className="min-h-dvh bg-black">
      <iframe
        src="/hanzi-universe.html"
        title="汉字宇宙"
        className="block h-dvh min-h-screen w-full border-0"
        allow="fullscreen"
        scrolling="yes"
      />
    </main>
  );
}
