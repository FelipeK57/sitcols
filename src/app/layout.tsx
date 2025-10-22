import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Supports weights 200-800
import "@fontsource-variable/manrope";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "SITCOLS - Desarrollo de Software y Soluciones Tecnológicas en Colombia",
  description:
    "En SITCOLS transformamos ideas en productos de software modernos, escalables y de alta calidad. Expertos en desarrollo web, infraestructura y soporte tecnológico en Colombia.",
  keywords: [
    "desarrollo de software",
    "soluciones tecnológicas",
    "infraestructura cloud",
    "SITCOLS",
    "software a medida",
    "desarrollo web Colombia",
    "ERP",
    "CRM",
    "hosting y soporte técnico",
  ],
  authors: [{ name: "SITCOLS", url: "https://sitcols.kevinbolanos.com" }],
  creator: "SITCOLS",
  publisher: "SITCOLS",
  metadataBase: new URL("https://sitcols.kevinbolanos.com"),
  openGraph: {
    title: "SITCOLS - Software & Infrastructure Technology Colombia Solutions",
    description:
      "Desarrollamos soluciones modernas de software, infraestructura y soporte para tu negocio. SITCOLS: el software del mañana, hecho para ti hoy.",
    url: "https://sitcols.kevinbolanos.com",
    siteName: "SITCOLS",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SITCOLS - Soluciones Tecnológicas en Colombia",
    description:
      "Software moderno, infraestructura escalable y soporte confiable. Transformamos ideas en soluciones digitales.",
    images: ["/sitcols-og-image.png"],
    creator: "@sitcols", // si tienes cuenta de X/Twitter
  },
  alternates: {
    canonical: "https://sitcols.kevinbolanos.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/sitcols-logo.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
