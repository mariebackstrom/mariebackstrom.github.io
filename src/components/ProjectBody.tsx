import type { Block } from "@/lib/content";
import ImagePlaceholder from "@/components/ImagePlaceholder";

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={i} className="leading-relaxed text-foreground/90">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul key={i} className="list-disc space-y-2 pl-5 text-foreground/90">
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="border-l-2 border-accent pl-4 text-foreground/80 italic"
        >
          {block.text}
        </blockquote>
      );
    case "link":
      return (
        <p key={i}>
          <a
            href={block.href}
            target="_blank"
            rel="noreferrer"
            className="text-accent underline underline-offset-4 hover:no-underline"
          >
            {block.text}
          </a>
        </p>
      );
    case "image":
      return (
        <div key={i} className="py-2">
          <ImagePlaceholder note={block.note} caption={block.caption} aspect="aspect-video" />
        </div>
      );
    default:
      return null;
  }
}

type Group = { heading?: string; items: Block[] };

function groupBlocks(blocks: Block[]): Group[] {
  const groups: Group[] = [];
  let current: Group = { items: [] };

  for (const block of blocks) {
    if (block.type === "h") {
      if (current.heading || current.items.length) groups.push(current);
      current = { heading: block.text, items: [] };
    } else {
      current.items.push(block);
    }
  }
  if (current.heading || current.items.length) groups.push(current);
  return groups;
}

export default function ProjectBody({ blocks }: { blocks: Block[] }) {
  const groups = groupBlocks(blocks);

  return (
    <div className="space-y-6">
      {groups.map((group, i) =>
        group.heading ? (
          <div
            key={i}
            className="rounded-2xl border border-border bg-surface-tint p-6"
          >
            <h2 className="font-display text-lg font-bold tracking-tight text-accent">
              {group.heading}
            </h2>
            <div className="mt-4 space-y-4">
              {group.items.map((block, j) => renderBlock(block, j))}
            </div>
          </div>
        ) : (
          <div key={i} className="space-y-4">
            {group.items.map((block, j) => renderBlock(block, j))}
          </div>
        ),
      )}
    </div>
  );
}
