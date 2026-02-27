import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Sun Goes Down | Martinique & Guadeloupe | Soirées deep house",
  description:
    "Événements électroniques House & Sunset en Martinique et dans la Caraïbe. La Sun Goes Down - From the beat to your mind.",
  openGraph: {
    title: "La Sun Goes Down | Martinique & Guadeloupe",
    description:
      "Événements électroniques House & Sunset en Martinique et dans la Caraïbe.",
    url: "https://www.lasungoesdown.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
