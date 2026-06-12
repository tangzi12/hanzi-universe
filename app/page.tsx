import Link from "next/link";
import Image from "next/image";
import { ClipboardCheck, FileHeart, HeartHandshake, ListChecks, ShieldCheck } from "lucide-react";
import { DogCard } from "@/components/dog-card";
import { ProgressBar } from "@/components/progress-bar";
import { dogs } from "@/lib/dogs";

const steps = [
  "Dog is submitted with veterinary records",
  "AlphaGene reviews the case",
  "A treatment plan and budget are published",
  "Donors sponsor specific dogs",
  "Progress updates are posted"
];

const trustItems = [
  { title: "Vet diagnosis required", icon: ClipboardCheck },
  { title: "Transparent budget", icon: ListChecks },
  { title: "Treatment updates", icon: FileHeart },
  { title: "Donation records", icon: ShieldCheck }
];

export default function HomePage() {
  const featuredDog = dogs[0];

  return (
    <main>
      <section className="bg-white">
        <div className="container-shell grid min-h-[calc(100vh-64px)] items-center gap-12 py-12 lg:grid-cols-[1fr_0.9fr]">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-md bg-mist px-3 py-1 text-sm font-semibold text-pine">
              Global pet medical sponsorship
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Sponsor a Dog Fighting Cancer or Organ Failure
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600">
              Choose a dog. Fund a treatment. Follow the journey through veterinary-supervised updates and transparent
              case budgets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/dogs"
                className="inline-flex h-12 items-center justify-center rounded-md bg-pine px-6 font-semibold text-white transition hover:bg-ink"
              >
                Browse dogs
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 font-semibold text-ink transition hover:border-pine hover:text-pine"
              >
                How it works
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
            <div className="image-wash aspect-[4/3]">
              <Image
                src={featuredDog.coverImageUrl}
                alt={`${featuredDog.name}, a featured sponsorship campaign`}
                width={900}
                height={675}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-pine">Featured case</p>
                  <h2 className="mt-1 text-2xl font-bold text-ink">{featuredDog.name}</h2>
                  <p className="mt-1 text-sm text-slate-600">
                    {featuredDog.diseaseType} - {featuredDog.location}
                  </p>
                </div>
                <HeartHandshake className="text-pine" size={30} aria-hidden />
              </div>
              <ProgressBar
                raised={featuredDog.amountRaisedCents}
                goal={featuredDog.fundingGoalCents}
                currency={featuredDog.currency}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-pine">Featured dogs</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">Sponsor a specific care plan</h2>
            </div>
            <Link href="/dogs" className="hidden text-sm font-semibold text-pine hover:text-ink md:block">
              View all campaigns
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {dogs.map((dog) => (
              <DogCard key={dog.id} dog={dog} />
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-pine">How it works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">
              Case-based support with clear review steps.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step} className="rounded-lg border border-slate-200 bg-cloud p-5">
                <p className="text-sm font-bold text-pine">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-semibold leading-6 text-ink">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="py-20">
        <div className="container-shell">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-pine">Trust</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">
              Built for medical clarity without outcome promises.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {trustItems.map(({ title, icon: Icon }) => (
              <div key={title} className="rounded-lg border border-slate-200 bg-white p-5">
                <Icon className="text-pine" size={26} aria-hidden />
                <p className="mt-4 font-semibold text-ink">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
