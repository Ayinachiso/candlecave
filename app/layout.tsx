import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Candlecave | Your space. Your energy.",
  description: "Home fragrance from Lagos, delivered across Nigeria. Meet Aura, Obsession and Good Juju — the Candlecave best sellers.",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
