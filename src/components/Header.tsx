import Link from "next/link";
import { siteInfo } from "@/lib/content";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display shrink-0 text-base font-bold tracking-tight whitespace-nowrap text-accent sm:text-lg"
        >
          Marie Bäckström
        </Link>
        <nav className="flex items-center gap-4 text-sm text-muted sm:gap-8">
          <Link href="/#uppdrag" className="hidden hover:text-accent transition-colors sm:inline">
            uppdrag
          </Link>
          <Link href="/#omdomen" className="hidden hover:text-accent transition-colors sm:inline">
            omdömen
          </Link>
          <Link
            href="/kontakt"
            className="rounded-full border border-accent px-4 py-1.5 whitespace-nowrap text-accent hover:bg-accent hover:text-white transition-colors"
          >
            kontakt
          </Link>
          <div className="flex items-center gap-3 border-l border-border pl-4">
            <ThemeToggle />
            <a
              href={siteInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-accent transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
            <a
              href={`mailto:${siteInfo.socialEmail}`}
              aria-label="E-post"
              className="text-muted hover:text-accent transition-colors"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
                <path d="m3.5 6 8.5 7 8.5-7" />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
