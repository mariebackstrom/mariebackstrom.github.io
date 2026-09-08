import Link from "next/link";
import ProjectGrid from "@/components/ProjectGrid";
import AskMeWidget from "@/components/AskMeWidget";
import { clients, siteInfo, testimonials } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm tracking-[0.3em] text-muted uppercase">
              {siteInfo.tagline}
            </p>
            <h1 className="font-display mt-6 text-4xl leading-tight font-bold tracking-tight sm:text-6xl">
              Hej, jag är
              <br />
              <span className="text-accent">Marie</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-foreground/80">
              Jag är <span className="font-semibold text-accent">UX- och UI-designer</span>{" "}
              med uppdrag inom bland annat{" "}
              <span className="font-semibold text-accent">
                Netigate, Compentus, Tillväxtverket och Försvarsmakten
              </span>
              . Jag jobbar lika gärna med research och struktur som med grafisk
              formgivning och illustration.{" "}
              <Link
                href="/kontakt"
                className="font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
              >
                Säg hej
              </Link>
              .
            </p>
          </div>

          <AskMeWidget />
        </div>
      </section>

      <section id="uppdrag" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-2 h-1 w-10 rounded-full bg-[image:var(--gradient-accent)]" />
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Utvalda
          <br />
          uppdrag
        </h2>
        <div className="mt-12">
          <ProjectGrid />
        </div>
      </section>

      <section id="omdomen" className="border-t border-border bg-surface-tint">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-2 h-1 w-10 rounded-full bg-[image:var(--gradient-accent)]" />
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Ord från
            <br />
            kollegor
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote
                key={t.name + t.title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
              >
                <p className="text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-sm text-muted">
                  <span className="font-semibold text-accent">{t.name}</span>
                  {" — "}
                  {t.title}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="kunder" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm tracking-[0.3em] text-muted uppercase">
          Kunder & uppdragsgivare
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-lg text-muted">
          {clients.map((c) => (
            <li key={c.name}>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
