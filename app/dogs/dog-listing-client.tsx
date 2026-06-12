"use client";

import { useMemo, useState } from "react";
import { DogCard } from "@/components/dog-card";
import type { Dog } from "@/lib/dogs";
import { filterOptions } from "@/lib/dogs";
import { fundingPercent } from "@/lib/format";

const fundingBands = [
  { label: "Any funding", value: "all" },
  { label: "Under 25%", value: "under-25" },
  { label: "25% to 75%", value: "25-75" },
  { label: "Over 75%", value: "over-75" }
];

export function DogListingClient({ dogs }: { dogs: Dog[] }) {
  const [disease, setDisease] = useState("all");
  const [country, setCountry] = useState("all");
  const [urgency, setUrgency] = useState("all");
  const [status, setStatus] = useState("all");
  const [funding, setFunding] = useState("all");

  const filteredDogs = useMemo(() => {
    return dogs.filter((dog) => {
      const percent = fundingPercent(dog.amountRaisedCents, dog.fundingGoalCents);
      const fundingMatch =
        funding === "all" ||
        (funding === "under-25" && percent < 25) ||
        (funding === "25-75" && percent >= 25 && percent <= 75) ||
        (funding === "over-75" && percent > 75);

      return (
        (disease === "all" || dog.diseaseType === disease) &&
        (country === "all" || dog.country === country) &&
        (urgency === "all" || dog.urgency === urgency) &&
        (status === "all" || dog.status === status) &&
        fundingMatch
      );
    });
  }, [country, disease, dogs, funding, status, urgency]);

  return (
    <>
      <section className="border-y border-slate-200 bg-white py-5">
        <div className="container-shell grid gap-3 md:grid-cols-5">
          <FilterSelect label="Disease type" value={disease} onChange={setDisease} options={filterOptions.diseaseTypes} />
          <FilterSelect label="Country/region" value={country} onChange={setCountry} options={filterOptions.countries} />
          <FilterSelect label="Urgency" value={urgency} onChange={setUrgency} options={filterOptions.urgencies} />
          <FilterSelect label="Treatment status" value={status} onChange={setStatus} options={filterOptions.statuses} />
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Funding percentage
            </span>
            <select
              value={funding}
              onChange={(event) => setFunding(event.target.value)}
              className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-ink outline-none focus:border-pine focus:ring-2 focus:ring-pine/20"
            >
              {fundingBands.map((band) => (
                <option key={band.value} value={band.value}>
                  {band.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className="py-12">
        <div className="container-shell">
          <p className="mb-6 text-sm font-semibold text-slate-600">
            Showing {filteredDogs.length} of {dogs.length} published campaigns
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredDogs.map((dog) => (
              <DogCard key={dog.id} dog={dog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-ink outline-none focus:border-pine focus:ring-2 focus:ring-pine/20"
      >
        <option value="all">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
