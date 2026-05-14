import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

import Image from "next/image";

export const metadata: Metadata = {
  title: "Entrenamiento en Grupos Reducidos | Sevilla Senior Training",
  description: "Entrenamiento funcional en grupos reducidos en Los Remedios. Dinámico, motivador y guiado por profesionales.",
};

export default function GruposPage() {
  return (
    <div className="bg-[#f5f7fb]">
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/sanolosremedios1.webp"
            alt="Entrenamiento en grupos reducidos"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#f5f7fb]/90 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold tracking-wide text-accent mb-6">
              <span>GRUPOS REDUCIDOS</span>
            </div>
            <h1 className="font-serif text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-6xl mb-8">
              Entrena en grupo, mejora tu forma física y diviértete
            </h1>
            <p className="text-xl leading-relaxed text-ink-soft mb-10">
              Nuestro entrenamiento en grupos reducidos está diseñado para quienes buscan mantenerse activos, ganar fuerza y mejorar su salud general en un entorno dinámico y motivador, con plazas limitadas para asegurar la atención del entrenador.
            </p>
            <Link
              href="https://wa.me/34666003340?text=Hola%20Juan%20Jos%C3%A9%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20los%20entrenamientos%20en%20grupos%20reducidos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-primary px-8 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Consultar horarios y plazas
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Precios y Mensualidades
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Sin matrícula ni permanencia.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            
            {/* Mensualidades */}
            <article className="bg-bg rounded-3xl p-8 shadow-lg border border-primary/20">
              <h3 className="text-2xl font-bold text-ink mb-6 text-center">Mensualidades</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-3 border-b border-muted">
                  <span className="text-ink font-medium text-lg">1 entrenamiento a la semana</span>
                  <span className="text-xl font-bold text-ink">47 €</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-muted">
                  <span className="text-ink font-medium text-lg">2 entrenamientos a la semana</span>
                  <span className="text-xl font-bold text-ink">77 €</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-muted">
                  <span className="text-ink font-medium text-lg">3 entrenamientos a la semana</span>
                  <span className="text-xl font-bold text-ink">87 €</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-muted">
                  <span className="text-ink font-medium text-lg">4 entrenamientos a la semana</span>
                  <span className="text-xl font-bold text-ink">97 €</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-ink font-medium text-lg">5 entrenamientos a la semana <span className="text-sm font-normal text-ink-soft block">(Ilimitado)</span></span>
                  <span className="text-xl font-bold text-ink">107 €</span>
                </div>
              </div>
            </article>

            {/* Bonos */}
            <article className="bg-white rounded-3xl p-8 shadow-md border border-muted/50">
              <h3 className="text-2xl font-bold text-ink mb-2 text-center">Bonos por entrenamientos</h3>
              <p className="text-sm text-ink-soft text-center mb-6">*A consumir en el mes en curso</p>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between py-3 border-b border-muted">
                  <span className="text-ink font-medium text-lg">1 entrenamiento al mes</span>
                  <span className="text-xl font-bold text-ink">12 €</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-muted">
                  <span className="text-ink font-medium text-lg">6 entrenamientos al mes</span>
                  <span className="text-xl font-bold text-ink">64 €</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-ink font-medium text-lg">10 entrenamientos al mes</span>
                  <span className="text-xl font-bold text-ink">82 €</span>
                </div>
              </div>
              
              <a
                href="https://wa.me/34666003340?text=Hola%20Juan%20Jos%C3%A9%2C%20me%20gustar%C3%ADa%20apuntarme%20a%20los%20entrenamientos%20en%20grupo."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex min-h-[56px] w-full items-center justify-center rounded-full bg-primary px-8 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
              >
                Reservar plaza
              </a>
            </article>

          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-serif text-3xl font-bold text-ink mb-12 text-center">
            ¿Qué incluyen los grupos reducidos?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ul className="space-y-6">
              {[
                "Grupos súper reducidos para asegurar calidad",
                "Entrenamiento funcional adaptado al nivel del grupo",
                "Trabajo de fuerza, resistencia y movilidad",
                "Corrección técnica constante por parte del entrenador",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-ink">{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-6">
              {[
                "Ambiente motivador y cercano",
                "Variedad de ejercicios y material (kettlebells, TRX, etc.)",
                "Planificación semanal estructurada",
                "Apto para diferentes niveles de condición física",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-lg text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
