import type { Metadata } from "next";
import { DogListingClient } from "@/app/dogs/dog-listing-client";
import { dogs } from "@/lib/dogs";

export const metadata: Metadata = {
  title: "Browse Dogs",
  description: "Browse published dog medical sponsorship campaigns by disease, urgency, region, and treatment status."
};

export default function DogsPage() {
  return (
    <main>
      <section className="bg-white py-14">
        <div className="container-shell max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-pine">Published campaigns</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Choose a dog to sponsor.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Filter active cases by diagnosis type, country or region, urgency, funding progress, and treatment status.
          </p>
        </div>
      </section>
      <DogListingClient dogs={dogs} />
    </main>
  );
}
