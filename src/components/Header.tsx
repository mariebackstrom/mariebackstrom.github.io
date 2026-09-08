import Link from "next/link";

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
        </nav>
      </div>
    </header>
  );
}
