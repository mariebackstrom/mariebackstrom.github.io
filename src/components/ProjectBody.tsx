import type { Block } from "@/lib/content";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function ProjectBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h":
            return (
              <h2 key={i} className="pt-4 text-xl font-bold tracking-tight">
                {block.text}
              </h2>
            );
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
      })}
    </div>
  );
}
