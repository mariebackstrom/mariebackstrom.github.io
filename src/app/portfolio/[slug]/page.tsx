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
    title: `${project.title} — Marie Nilsson`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Link href="/#uppdrag" className="text-sm text-muted hover:text-accent transition-colors">
        ← Alla uppdrag
      </Link>

      <p className="mt-6 text-sm tracking-wide text-accent uppercase">
        {project.categories.join(" · ")}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {project.title}
      </h1>

      <div className="mt-10">
        <ImagePlaceholder note={project.coverNote} aspect="aspect-video" />
      </div>

      <div className="mt-10">
        <ProjectBody blocks={project.body} />
      </div>
    </article>
  );
}
