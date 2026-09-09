export default function AvatarPlaceholder() {
  return (
    <div
      className="pointer-events-none absolute -right-4 -bottom-6 hidden h-32 w-32 items-center justify-center rounded-full border-4 border-background bg-surface-tint sm:flex"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(254,108,97,0.12) 0px, rgba(254,108,97,0.12) 2px, transparent 2px, transparent 14px)",
      }}
    >
      <span className="rounded-full border border-border bg-surface/90 px-2 py-1 text-center text-[10px] leading-tight tracking-wide text-muted uppercase">
        Bild
        <br />
        saknas
      </span>
    </div>
  );
}
