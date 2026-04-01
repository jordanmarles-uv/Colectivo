import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Colectivo | Ciencia Densa, Narrativa Ligera",
  description: "Transformamos investigación científica compleja en experiencias transmedia de alto impacto para startups, universidades y fondos de capital en Cali, Valle del Cauca.",
  keywords: "comunicación científica, transmedia, Cali, Colombia, NIDO, pitch deck, scrollytelling, visualización de datos",
  openGraph: {
    title: "Colectivo | Ciencia Densa, Narrativa Ligera",
    description: "Transformamos ciencia densa en narrativas ligeras que conquistan inversionistas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
