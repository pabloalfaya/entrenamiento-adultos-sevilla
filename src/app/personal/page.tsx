import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";
import Pricing from "@/components/sections/Pricing";

import Image from "next/image";

export const metadata: Metadata = {
  title: "Entrenamiento personal y en pareja en Sevilla | Entrena Sevilla",
  description: "Entrenamiento personal individual y en pareja en Los Remedios, Sevilla. Programas 100% adaptados a tus objetivos. Reserva tu primera sesión gratis.",
  openGraph: {
    title: "Entrenamiento personal y en pareja en Sevilla | Entrena Sevilla",
    description: "Entrenamiento personal individual y en pareja en Los Remedios, Sevilla. Programas 100% adaptados a tus objetivos. Reserva tu primera sesión gratis.",
    url: "https://entrenasevilla.es/personal",
    type: "website",
  },
};

export default function PersonalPage() {
  return (
    <div className="bg-[#f5f7fb]">
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Instalaciones1.jpeg"
            alt="Instalaciones del centro Entrena Sevilla"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#f5f7fb]/60 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold tracking-wide text-accent mb-6 shadow-sm hero-text-shadow">
              <span>ATENCIÓN 100% PERSONALIZADA</span>
            </div>
            <h1 className="font-serif text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-6xl mb-8 hero-text-shadow-lg">
              Tu entrenamiento, a tu ritmo y medida
            </h1>
            <p className="text-xl leading-relaxed text-ink mb-10 hero-text-shadow">
              No creemos en las rutinas de cajón. Evaluamos tu estado inicial, escuchamos tus objetivos y trazamos un plan de entrenamiento individual o en pareja con la supervisión constante de un graduado en CAFD.
            </p>
            <Link
              href="https://wa.me/34666003340?text=Hola%20Juan%20Jos%C3%A9%2C%20me%20gustar%C3%ADa%20reservar%20una%20valoraci%C3%B3n%20gratuita%20para%20entrenamiento%20personal."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-primary px-8 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Reservar valoración gratuita
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Pricing />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="bg-surface rounded-3xl p-8 border border-muted/50">
              <h2 className="font-serif text-3xl font-bold text-ink mb-6">Entrenamiento personal individual</h2>
              <p className="text-ink-soft mb-8">
                El servicio más exclusivo. Una hora dedicada íntegramente a ti, a corregir tu postura, ajustar cargas y asegurar que cada repetición cuenta.
              </p>
              <ul className="space-y-4 mb-8">
                {["Valoración inicial exhaustiva", "Planificación 100% a medida", "Adaptación instantánea del entreno", "Horarios flexibles"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-lg text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface rounded-3xl p-8 border border-muted/50">
              <h2 className="font-serif text-3xl font-bold text-ink mb-6">Entrenamiento personal en pareja</h2>
              <p className="text-ink-soft mb-8">
                Entrena con tu pareja, un amigo o un familiar... Mantenemos una altísima calidad de atención pero sumamos el factor motivación y compromiso que da entrenar con alguien de confianza.
              </p>
              <ul className="space-y-4 mb-8">
                {["Más económico que la sesión individual", "Extra de motivación y compromiso", "Ejercicios adaptados a ambos", "Se comparte la sesión, no la calidad"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-lg text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
