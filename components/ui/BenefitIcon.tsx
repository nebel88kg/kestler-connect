const iconMap: Record<string, string> = {
  map: "📍",
  users: "👥",
  chart: "📊",
  shield: "🛡️",
  wrench: "🔧",
  rocket: "🚀",
  target: "🎯",
  form: "📋",
  video: "🎬",
  refresh: "🔄",
  scale: "📈",
  golf: "⛳",
  flag: "🏁",
  social: "📱",
  education: "🎓",
  building: "🏢",
  star: "⭐",
  search: "🔍",
  check: "✅",
  trending: "📈",
};

export function BenefitIcon({ icon }: { icon: string }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-light text-2xl">
      {iconMap[icon] || "✨"}
    </div>
  );
}
