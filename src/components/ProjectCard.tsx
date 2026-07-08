import Link from "next/link";
import type { Project } from "@/lib/content";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <ImagePlaceholder note={project.coverNote} aspect="aspect-[4/3]" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{project.categories.join(" · ")}</p>
      </div>
    </Link>
  );
}
