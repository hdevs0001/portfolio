import { techMap, type TechId } from "@/lib/tech";

const sizes = {
  md: { box: "size-14 rounded-xl", icon: 26 },
  sm: { box: "size-10 rounded-lg", icon: 20 },
};

export default function TechTile({
  id,
  size = "md",
  tooltip = false,
}: {
  id: TechId;
  size?: keyof typeof sizes;
  tooltip?: boolean;
}) {
  const { label, Icon, color } = techMap[id];
  const s = sizes[size];

  return (
    <div
      role="img"
      aria-label={label}
      tabIndex={tooltip ? 0 : undefined}
      className={`group relative flex items-center justify-center border border-line bg-[#f4f4f5] outline-none focus-visible:ring-2 focus-visible:ring-foreground ${s.box}`}
    >
      <Icon size={s.icon} color={color} aria-hidden="true" />
      {tooltip && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          {label}
        </span>
      )}
    </div>
  );
}
