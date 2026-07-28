import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default:
      "Joel Automotriz en Acción — Cursos de diagnóstico automotriz por Joel Navarro",
    template: "%s | Joel Automotriz en Acción",
  },
  description:
    "34 cursos de diagnóstico automotriz por Joel Navarro, técnico con 11 certificaciones ASE y +30 años de experiencia. Teoría, demostraciones en autos sanos y diagnóstico real de fallas.",
  authors: [{ name: "Joel Navarro" }],
  openGraph: {
    siteName: "Joel Automotriz en Acción",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Joel Automotriz en Acción",
  sameAs: [
    "https://www.youtube.com/channel/UCSi1HNth5US2-lJlwEZpgeA",
    "https://www.facebook.com/joelautomotiveinaction",
    "https://www.tiktok.com/@joelautomotiveinaction",
    "https://www.instagram.com/joelautomotivein/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#F5F9FF" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
