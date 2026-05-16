import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Entrena Sevilla | Centro de entrenamiento en Los Remedios",
  description:
    "Centro de entrenamiento en grupos reducidos, personal y para adultos mayores en Los Remedios, Sevilla. Primera clase gratis. Reserva tu plaza.",
  openGraph: {
    title: "Entrena Sevilla | Centro de entrenamiento en Los Remedios",
    description: "Centro de entrenamiento en grupos reducidos, personal y para adultos mayores en Los Remedios, Sevilla. Primera clase gratis. Reserva tu plaza.",
    url: "https://entrenasevilla.es/",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrena Sevilla | Centro de entrenamiento en Los Remedios",
    description: "Centro de entrenamiento en grupos reducidos, personal y para adultos mayores en Los Remedios, Sevilla. Primera clase gratis. Reserva tu plaza.",
  },
  verification: {
    google: "JsrPeEXupny75_tml0zIZQC4beFmyl4K_wJ8sqy1jbg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sevilla Senior Training",
    "image": "/logoprueba.png",
    "description": "Centro especializado en entrenamiento para personas mayores en Los Remedios, Sevilla.",
    "telephone": "+34666003340",
    "email": "farrosqui@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Virgen de Setefilla 12",
      "addressLocality": "Sevilla",
      "postalCode": "41011",
      "addressCountry": "ES"
    },
    "founder": {
      "@type": "Person",
      "name": "Juan José Alfaya Arias",
      "jobTitle": "Entrenador Personal y Graduado CAFD"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} flex min-h-screen flex-col font-sans antialiased bg-bg text-ink`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:p-4 focus:text-primary">
          Saltar al contenido
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
