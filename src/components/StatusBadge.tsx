export default function StatusBadge({ status }: { status: string }) {
  const active = status === "работает" || status === "открытый код";
  return (
    <span
      className={`whitespace-nowrap rounded-full border px-2.5 py-1 text-[11.5px] tracking-[.04em] ${
        active ? "border-ap-accent/55 text-ap-accent" : "border-white/28 text-white/60"
      }`}
    >
      {status}
    </span>
  );
}
