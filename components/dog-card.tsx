import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Dog } from "@/lib/dogs";
import { ProgressBar } from "@/components/progress-bar";
import { StatusBadge } from "@/components/status-badge";

export function DogCard({ dog }: { dog: Dog }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/dogs/${dog.slug}`} className="block">
        <div className="image-wash aspect-[4/3] overflow-hidden">
          <Image
            src={dog.coverImageUrl}
            alt={`${dog.name}, ${dog.breed}`}
            width={700}
            height={525}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>
      <div className="space-y-5 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link href={`/dogs/${dog.slug}`} className="text-xl font-bold tracking-tight text-ink hover:text-pine">
              {dog.name}
            </Link>
            <p className="mt-1 text-sm text-slate-600">
              {dog.breed} - {dog.age}
            </p>
          </div>
          <StatusBadge status={dog.status} />
        </div>
        <div className="space-y-2 text-sm text-slate-600">
          <p className="font-semibold text-pine">{dog.diseaseType}</p>
          <p className="flex items-center gap-2">
            <MapPin size={15} aria-hidden />
            {dog.location}
          </p>
        </div>
        <ProgressBar raised={dog.amountRaisedCents} goal={dog.fundingGoalCents} currency={dog.currency} />
      </div>
    </article>
  );
}
