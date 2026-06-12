import { fundingPercent, formatCurrency } from "@/lib/format";

type ProgressBarProps = {
  raised: number;
  goal: number;
  currency?: string;
};

export function ProgressBar({ raised, goal, currency = "USD" }: ProgressBarProps) {
  const percent = fundingPercent(raised, goal);

  return (
    <div>
      <div className="mb-2 flex items-end justify-between gap-4">
        <div>
          <p className="text-lg font-bold text-ink">{formatCurrency(raised, currency)}</p>
          <p className="text-xs font-medium text-slate-500">raised of {formatCurrency(goal, currency)}</p>
        </div>
        <p className="text-sm font-semibold text-pine">{percent}%</p>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-pine" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
