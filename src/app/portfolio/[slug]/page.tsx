import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/content";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ProjectBody from "@/components/ProjectBody";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Marie Bäckström`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];
  if (!project) notFound();

  const otherProjects = [
    ...projects.slice(projectIndex + 1),
    ...projects.slice(0, projectIndex),
  ].slice(0, 3);

  return (
    <article className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Link href="/#uppdrag" className="text-sm text-muted hover:text-accent transition-colors">
        ← Alla uppdrag
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_320px]">
        <div className="max-w-3xl">
          <p className="text-sm tracking-wide text-accent uppercase">
            {project.categories.join(" · ")}
          </p>
          <h1 className="font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h1>

          <div className="mt-10">
            <ImagePlaceholder note={project.coverNote} aspect="aspect-video" />
          </div>

          <div className="mt-10">
            <ProjectBody blocks={project.body} />
          </div>
        </div>

        <aside className="h-fit space-y-3 rounded-3xl border border-border bg-surface p-6 shadow-sm lg:sticky lg:top-24">
          <h2 className="font-display text-lg font-bold tracking-tight">
            Fler uppdrag
          </h2>
          <div className="flex flex-col gap-3">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                className="rounded-full bg-[image:var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
              >
                {p.title} →
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="rounded-full border border-accent px-5 py-3 text-center text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
            >
              Kontakta mig →
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}
