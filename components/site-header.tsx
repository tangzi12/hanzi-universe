import Link from "next/link";
import { HeartPulse } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight text-ink">
          <span className="flex size-10 items-center justify-center rounded-md bg-pine text-white">
            <HeartPulse size={21} aria-hidden />
          </span>
          <span>AlphaGene Pet Hope</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/dogs" className="hover:text-pine">
            Dogs
          </Link>
          <Link href="/#how-it-works" className="hover:text-pine">
            How it works
          </Link>
          <Link href="/#trust" className="hover:text-pine">
            Transparency
          </Link>
        </nav>
        <Link
          href="/dogs"
          className="inline-flex h-10 items-center justify-center rounded-md bg-ink px-4 text-sm font-semibold text-white transition hover:bg-pine"
        >
          Sponsor
        </Link>
      </div>
    </header>
  );
}
