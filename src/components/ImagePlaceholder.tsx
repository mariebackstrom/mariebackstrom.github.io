export default function ImagePlaceholder({
  note,
  caption,
  aspect = "aspect-[4/3]",
}: {
  note: string;
  caption?: string;
  aspect?: string;
}) {
  return (
    <figure>
      <div
        className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-sm border border-border bg-surface`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(254,108,97,0.08) 0px, rgba(254,108,97,0.08) 2px, transparent 2px, transparent 14px)",
        }}
      >
        <span className="rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] tracking-wide text-muted uppercase">
          Bild saknas · {note}
        </span>
      </div>
      {caption ? (
        <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
