import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#centro", label: "El centro" },
    { href: "#metodo", label: "Cómo entrenamos" },
    { href: "#programas", label: "Programas" },
    { href: "#precios", label: "Precios" },
    { href: "#ubicacion", label: "Cómo llegar" },
    { href: "#faq", label: "Preguntas" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-muted/50 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-lg"
          aria-label="Ir al inicio de Sevilla Senior Training"
        >
          <Image
            src="/logo.png"
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            priority
            aria-hidden="true"
          />
          <div className="leading-tight hidden sm:block">
            <p className="text-xs font-semibold tracking-[0.2em] text-ink-soft">
              SEVILLA
            </p>
            <p className="text-sm font-semibold tracking-tight text-ink">
              SENIOR TRAINING
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-8 text-base font-medium text-ink-soft">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-sm px-1 py-0.5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:+34666003340"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 min-h-[48px] text-base font-medium text-white shadow-sm transition hover:bg-primary-hover focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Llamar
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-ink hover:bg-muted focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg border-b border-muted shadow-lg">
          <nav aria-label="Móvil" className="px-4 py-6">
            <ul className="flex flex-col gap-6 text-xl font-medium text-ink">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="block w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-muted">
                <a
                  href="tel:+34666003340"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-lg font-medium text-white shadow-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="h-6 w-6" aria-hidden="true" />
                  Llamar ahora
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
