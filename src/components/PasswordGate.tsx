"use client";

import { useEffect, useState, type FormEvent } from "react";

const PASSWORD_HASH =
  "b1d793f5fa50e472ea2d947c33f4e77c48d0ad0c3e5ef651b898275751afcc26";
const STORAGE_KEY = "mb-portfolio-access";

async function sha256Hex(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setUnlocked(window.localStorage.getItem(STORAGE_KEY) === PASSWORD_HASH);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const hash = await sha256Hex(input);
    if (hash === PASSWORD_HASH) {
      window.localStorage.setItem(STORAGE_KEY, hash);
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (unlocked === null) {
    return null;
  }

  if (!unlocked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm rounded-3xl border border-border bg-surface p-8 shadow-[0_20px_60px_-30px_rgba(23,22,42,0.25)]"
        >
          <h1 className="font-display text-lg font-bold tracking-tight text-accent">
            Marie Bäckström
          </h1>
          <p className="mt-2 text-sm text-muted">
            Den här portfolion är lösenordsskyddad. Ange lösenord för att
            fortsätta.
          </p>
          <input
            type="password"
            autoFocus
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
              setError(false);
            }}
            className="mt-6 w-full rounded-full border border-border bg-background px-5 py-2.5 text-foreground outline-none focus:border-accent"
            placeholder="Lösenord"
          />
          {error && (
            <p className="mt-2 text-sm text-accent">Fel lösenord, försök igen.</p>
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-[image:var(--gradient-accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            Lås upp
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
