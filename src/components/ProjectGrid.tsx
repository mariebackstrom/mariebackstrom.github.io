"use client";

import { useState } from "react";
import { categories, projects, type Category } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectGrid() {
  const [active, setActive] = useState<Category | "Alla">("Alla");

  const filtered =
    active === "Alla"
      ? projects
      : projects.filter((p) => p.categories.includes(active));

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {(["Alla", ...categories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-1.5 text-sm tracking-wide transition-colors ${
              active === cat
                ? "border-transparent bg-[image:var(--gradient-accent)] text-white"
                : "border-border text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
