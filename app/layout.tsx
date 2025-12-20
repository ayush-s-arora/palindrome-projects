import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// Using a clean, modern font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Palindrome Projects",
  description: "High quality rentals and short-term stays.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-[var(--bg)] text-[var(--fg)]`}>
        <Header />
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}