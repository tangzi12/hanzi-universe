import Link from "next/link";
import { REQUIRED_DISCLAIMER } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-shell grid gap-8 py-10 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-sm font-semibold text-ink">AlphaGene Pet Hope</p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{REQUIRED_DISCLAIMER}</p>
        </div>
        <div className="flex flex-wrap items-start gap-4 text-sm font-medium text-slate-600 md:justify-end">
          <Link href="/dogs" className="hover:text-pine">
            Campaigns
          </Link>
          <Link href="/#trust" className="hover:text-pine">
            Fund usage
          </Link>
          <span>Terms</span>
          <span>Privacy</span>
        </div>
      </div>
    </footer>
  );
}
