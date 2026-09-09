export default function Avatar() {
  return (
    <div className="pointer-events-none absolute right-0 bottom-14 hidden h-28 w-28 overflow-hidden rounded-full border-4 border-background shadow-lg sm:block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/avatar.webp"
        alt="Marie Bäckström"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
