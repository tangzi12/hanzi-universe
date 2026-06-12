import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Download, Facebook, FileText, Instagram, Mail, MessageCircle, Share2 } from "lucide-react";
import { ProgressBar } from "@/components/progress-bar";
import { StatusBadge } from "@/components/status-badge";
import { REQUIRED_DISCLAIMER } from "@/lib/content";
import { dogs, getDogBySlug } from "@/lib/dogs";
import { formatCurrency } from "@/lib/format";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return dogs.map((dog) => ({ slug: dog.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const dog = getDogBySlug(params.slug);
  if (!dog) return {};

  return {
    title: `${dog.name}'s Campaign`,
    description: dog.story
  };
}

export default function DogDetailPage({ params }: PageProps) {
  const dog = getDogBySlug(params.slug);
  if (!dog) notFound();

  return (
    <main>
      <section className="bg-white">
        <div className="container-shell grid gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-lg image-wash">
            <Image
              src={dog.coverImageUrl}
              alt={`${dog.name}, ${dog.breed}`}
              width={1000}
              height={850}
              priority
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <StatusBadge status={dog.status} />
              <span className="rounded-md bg-mist px-2.5 py-1 text-xs font-semibold text-pine">{dog.urgency} urgency</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-ink">{dog.name}</h1>
            <p className="mt-3 text-lg font-medium text-slate-600">
              {dog.breed} - {dog.age} - {dog.location}
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-700">{dog.story}</p>
            <div className="mt-8 rounded-lg border border-slate-200 bg-cloud p-6">
              <ProgressBar raised={dog.amountRaisedCents} goal={dog.fundingGoalCents} currency={dog.currency} />
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[25, 50, 100].map((amount) => (
                  <Link
                    key={amount}
                    href={`/donate?dog=${dog.slug}&amount=${amount}`}
                    className="inline-flex h-11 items-center justify-center rounded-md bg-white text-sm font-bold text-ink ring-1 ring-slate-200 transition hover:bg-pine hover:text-white"
                  >
                    ${amount}
                  </Link>
                ))}
              </div>
              <Link
                href={`/donate?dog=${dog.slug}`}
                className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-md bg-pine px-5 font-semibold text-white transition hover:bg-ink"
              >
                Donate or sponsor monthly
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.68fr_0.32fr]">
          <div className="space-y-8">
            <Panel title="Medical summary">
              <p className="text-slate-700">{dog.diagnosisSummary}</p>
            </Panel>

            <Panel title="Treatment plan">
              <p className="text-slate-700">{dog.treatmentPlan}</p>
            </Panel>

            <Panel title="Budget breakdown">
              <div className="divide-y divide-slate-200">
                {dog.budgetItems.map((item) => (
                  <div key={item.title} className="grid gap-3 py-5 first:pt-0 last:pb-0 sm:grid-cols-[1fr_auto]">
                    <div>
                      <p className="font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                    <p className="font-bold text-pine">{formatCurrency(item.amountCents, dog.currency)}</p>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="Timeline updates">
              <div className="space-y-5">
                {dog.updates.map((update) => (
                  <article key={update.title} className="border-l-2 border-pine pl-5">
                    <p className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                      <CalendarDays size={15} aria-hidden />
                      {new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(
                        new Date(update.date)
                      )}
                    </p>
                    <h3 className="mt-2 font-bold text-ink">{update.title}</h3>
                    <p className="mt-2 leading-7 text-slate-700">{update.content}</p>
                  </article>
                ))}
              </div>
            </Panel>
          </div>

          <aside className="space-y-6">
            <Panel title="Diagnosis files">
              <div className="space-y-3">
                {dog.diagnosisFiles.map((file) => (
                  <div key={file} className="flex items-center justify-between gap-3 rounded-md bg-cloud p-3">
                    <span className="flex items-center gap-2 text-sm font-medium text-ink">
                      <FileText size={16} aria-hidden />
                      {file}
                    </span>
                    <Download size={16} className="text-slate-400" aria-hidden />
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="Supporter wall">
              <div className="flex flex-wrap gap-2">
                {dog.supporters.map((supporter) => (
                  <span key={supporter} className="rounded-md bg-mist px-3 py-2 text-sm font-semibold text-pine">
                    {supporter}
                  </span>
                ))}
              </div>
            </Panel>

            <Panel title="Share">
              <div className="grid grid-cols-5 gap-2">
                {[Share2, Instagram, Facebook, MessageCircle, Mail].map((Icon, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label="Share campaign"
                    className="flex aspect-square items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 transition hover:border-pine hover:text-pine"
                  >
                    <Icon size={18} aria-hidden />
                  </button>
                ))}
              </div>
            </Panel>

            <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
              {REQUIRED_DISCLAIMER}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold tracking-tight text-ink">{title}</h2>
      {children}
    </section>
  );
}
