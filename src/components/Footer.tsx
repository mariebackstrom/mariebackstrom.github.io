import { siteInfo } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteInfo.name}</p>
        <div className="flex gap-6">
          <a href={`mailto:${siteInfo.email}`} className="hover:text-accent transition-colors">
            {siteInfo.email}
          </a>
          <a href={`tel:${siteInfo.phone.replace(/\s|-/g, "")}`} className="hover:text-accent transition-colors">
            {siteInfo.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
