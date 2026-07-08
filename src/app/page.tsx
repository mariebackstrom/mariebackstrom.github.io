import Link from "next/link";
import ProjectGrid from "@/components/ProjectGrid";
import { clients, siteInfo, testimonials } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center sm:py-36">
          <p className="text-sm tracking-[0.3em] text-muted uppercase">
            {siteInfo.name}
          </p>
          <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight sm:text-6xl">
            UX designer
            <br />
            <span className="text-accent">UI designer</span>
          </h1>
          <Link
            href="/kontakt"
            className="mt-10 rounded-full border border-accent px-6 py-2.5 text-sm tracking-wide uppercase transition-colors hover:bg-accent hover:text-black"
          >
            Säg hej
          </Link>
        </div>
      </section>

      <section id="uppdrag" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-2 h-0.5 w-10 bg-accent" />
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Utvalda
          <br />
          uppdrag
        </h2>
        <div className="mt-12">
          <ProjectGrid />
        </div>
      </section>

      <section id="omdomen" className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-2 h-0.5 w-10 bg-accent" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ord från
            <br />
            kollegor
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote
                key={t.name + t.title}
                className="rounded-sm border border-border p-6"
              >
                <p className="text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 text-sm text-muted">
                  <span className="font-semibold text-foreground">{t.name}</span>
                  {" — "}
                  {t.title}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
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
