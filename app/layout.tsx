import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Candlecave | A little light. A lot of feeling.",
  description: "Find your next little ritual. Explore the Candlecave scented candle collection.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
