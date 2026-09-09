"use client";

import { useState, type FormEvent } from "react";
import { chatbotFaq, chatbotFallback } from "@/lib/content";

type Message = {
  role: "user" | "bot";
  text: string;
};

function findAnswer(query: string): string {
  const normalized = query.toLowerCase();
  const match = chatbotFaq.find((entry) =>
    entry.keywords.some((keyword) => normalized.includes(keyword)),
  );
  return match?.answer ?? chatbotFallback;
}

export default function AskMeWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [askedIds, setAskedIds] = useState<string[]>([]);

  function ask(question: string, id?: string) {
    const answer = findAnswer(question);
    setMessages((prev) => [
      ...prev,
      { role: "user", text: question },
      { role: "bot", text: answer },
    ]);
    if (id) setAskedIds((prev) => [...prev, id]);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    ask(trimmed);
    setInput("");
  }

  const suggestions = chatbotFaq.filter((entry) => !askedIds.includes(entry.id)).slice(0, 4);

  return (
    <div>
      <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
        Vill du fråga mig något?
      </h2>
      <p className="mt-1 text-xs tracking-wide text-muted uppercase">
        Skriptad demo, inte äkta AI
      </p>

      {messages.length > 0 && (
        <div className="mt-6 max-h-80 space-y-3 overflow-y-auto pr-1">
          {messages.map((message, i) => (
            <div
              key={i}
              className={
                message.role === "user"
                  ? "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[image:var(--gradient-accent)] px-4 py-2.5 text-sm text-white"
                  : "mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-surface-tint px-4 py-2.5 text-sm text-foreground/90"
              }
            >
              {message.text}
            </div>
          ))}
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="mt-6 flex flex-col gap-3">
          {suggestions.map((entry) => (
            <button
              key={entry.id}
              type="button"
              onClick={() => ask(entry.question, entry.id)}
              className="rounded-full bg-[image:var(--gradient-accent)] px-5 py-3 text-left text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
            >
              {entry.question}
            </button>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Skriv en fråga..."
          className="w-full rounded-full border border-border bg-surface px-5 py-2.5 text-sm text-foreground shadow-sm outline-none focus:border-accent"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-[image:var(--gradient-accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md"
        >
          Skicka
        </button>
      </form>
    </div>
  );
}
