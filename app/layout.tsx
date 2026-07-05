import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AMAUI — Equipo de Desarrollo de Software",
  description:
    "AMAUI es un equipo de desarrollo de software. Construimos aplicaciones web, móviles y APIs. Conoce al equipo y nuestro portafolio de proyectos.",
  keywords: [
    "AMAUI",
    "desarrollo de software",
    "desarrollo web",
    "portafolio",
    "equipo de desarrollo",
  ],
  openGraph: {
    title: "AMAUI — Equipo de Desarrollo de Software",
    description:
      "Construimos aplicaciones web, móviles y APIs. Conoce al equipo y nuestro portafolio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
