import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.2em] uppercase"
        >
          Marie Bäckström
        </Link>
        <nav className="flex items-center gap-8 text-sm tracking-wide uppercase">
          <Link href="/#uppdrag" className="hover:text-accent transition-colors">
            Uppdrag
          </Link>
          <Link href="/#omdomen" className="hover:text-accent transition-colors">
            Omdömen
          </Link>
          <Link href="/kontakt" className="hover:text-accent transition-colors">
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
