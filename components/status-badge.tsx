import type { DogStatus } from "@/lib/dogs";

const styles: Record<DogStatus, string> = {
  Reviewing: "bg-slate-100 text-slate-700",
  Funding: "bg-amber-100 text-amber-800",
  "In treatment": "bg-sky-100 text-sky-800",
  Improving: "bg-emerald-100 text-emerald-800",
  Completed: "bg-teal-100 text-teal-800",
  Memorial: "bg-stone-200 text-stone-700"
};

export function StatusBadge({ status }: { status: DogStatus }) {
  return (
    <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold ${styles[status]}`}>
      {status}
    </span>
  );
}
