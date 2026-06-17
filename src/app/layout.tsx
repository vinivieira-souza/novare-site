import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Montserrat, Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "900"],
});

export const metadata: Metadata = {
  title: "Novare Vision — Agência Digital",
  description:
    "Transformando ideias em presença digital estratégica. Da criação de sites institucionais à gestão completa de marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${jetbrainsMono.variable} ${montserrat.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="bg-novare-dark min-h-full text-white">{children}</body>
    </html>
  );
}
