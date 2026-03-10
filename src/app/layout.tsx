import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sevilla Senior Training | Entrenamiento Personas Mayores Sevilla",
  description: "Entrenamiento personalizado para el adulto mayor en Sevilla. Mejora tu fuerza, equilibrio y autonomía.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${plusJakarta.variable} flex min-h-screen flex-col font-sans antialiased`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <a
          href="https://wa.me/34666489362"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="fixed bottom-5 right-4 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-slate-900/20 transition hover:bg-[#20b457] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#f5f7fb]"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
          >
            <path
              d="M5.2 19.4 5.9 16a6.9 6.9 0 1 1 2.6 2.6l-3.3.8Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.2 13.5c-.2-.1-1.2-.6-1.4-.7s-.3-.1-.4.1-.4.7-.5.8-.3.1-.5 0c-.2-.1-.9-.3-1.7-1.1-.6-.6-1.1-1.3-1.2-1.5s0-.3.1-.4c.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3C9.1 9.3 8.6 8.1 8.4 7.7c-.1-.4-.4-.3-.5-.3h-.4c-.2 0-.4.1-.5.2-.2.2-.7.7-.7 1.7s.7 1.9.8 2c.1.1 1.4 2.2 3.4 3.1s2 .8 2.4.9.9.1 1.1.1.7-.3.8-.6.3-.6.3-.7-.1-.2-.3-.3Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </body>
    </html>
  );
}
