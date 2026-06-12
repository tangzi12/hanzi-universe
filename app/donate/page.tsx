import Link from "next/link";
import { dogs } from "@/lib/dogs";

export default function DonatePlaceholderPage({
  searchParams
}: {
  searchParams: { dog?: string; amount?: string };
}) {
  const dog = dogs.find((item) => item.slug === searchParams.dog) ?? dogs[0];

  return (
    <main className="bg-white py-16">
      <div className="container-shell max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-pine">Donation checkout</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink">Stripe checkout comes next.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Phase 1 includes the campaign experience and schema. This placeholder preserves the donation path for{" "}
          {dog.name}
          {searchParams.amount ? ` at $${searchParams.amount}` : ""} until the Stripe Checkout API is wired in Phase 2.
        </p>
        <Link
          href={`/dogs/${dog.slug}`}
          className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-pine px-5 font-semibold text-white"
        >
          Back to {dog.name}
        </Link>
      </div>
    </main>
  );
}
