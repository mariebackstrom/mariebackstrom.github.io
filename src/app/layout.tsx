import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PasswordGate from "@/components/PasswordGate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marie Bäckström — UX & UI designer",
  description:
    "Marie Bäckström är UX- och UI-designer med uppdrag inom bland annat Netigate, Compentus, Tillväxtverket och Försvarsmakten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <PasswordGate>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </PasswordGate>
      </body>
    </html>
  );
}
