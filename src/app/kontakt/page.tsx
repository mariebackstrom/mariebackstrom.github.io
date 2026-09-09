import type { Metadata } from "next";
import { siteInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt — Marie Bäckström",
  description: "Säg hej — kontaktuppgifter till Marie Bäckström, UX designer.",
};

export default function KontaktPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-6 py-24">
      <div className="mb-2 h-1 w-10 rounded-full bg-[image:var(--gradient-accent)]" />
      <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Kontakt
      </h1>
      <p className="mt-4 text-xl text-muted">Säg hej.</p>

      <div className="mt-12 space-y-4 rounded-3xl border border-border bg-surface p-8 shadow-sm">
        <a
          href={`mailto:${siteInfo.email}`}
          className="block text-2xl font-semibold tracking-tight hover:text-accent transition-colors sm:text-3xl"
        >
          {siteInfo.email}
        </a>
        <a
          href={`tel:${siteInfo.phone.replace(/\s|-/g, "")}`}
          className="block text-2xl font-semibold tracking-tight hover:text-accent transition-colors sm:text-3xl"
        >
          {siteInfo.phone}
        </a>
      </div>
    </section>
  );
}
