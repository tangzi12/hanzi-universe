export function formatCurrency(cents: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(cents / 100);
}

export function fundingPercent(raised: number, goal: number) {
  if (goal <= 0) return 0;
  return Math.min(100, Math.round((raised / goal) * 100));
}
