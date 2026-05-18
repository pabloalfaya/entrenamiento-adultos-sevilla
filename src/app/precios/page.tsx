import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Precios y Tarifas | Entrena Sevilla",
  description: "Consulta nuestras tarifas para entrenamiento personal, en pareja y grupos reducidos en Los Remedios. Sin matrícula ni permanencia.",
  openGraph: {
    title: "Precios y Tarifas | Entrena Sevilla",
    description: "Consulta nuestras tarifas para entrenamiento personal, en pareja y grupos reducidos en Los Remedios. Sin matrícula ni permanencia.",
    url: "https://entrenasevilla.es/precios",
    type: "website",
  },
};

export default function PreciosPage() {
  const commonFeatures = [
    "Sesión de 50 minutos en el centro",
    "Entrenador graduado CAFD",
    "Valoración inicial gratuita (sin compromiso)",
    "Plan personalizado progresivo",
    "Informe periódico de evolución",
  ];

  return (
    <div className="bg-[#f5f7fb]">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Tarifas transparentes, sin letra pequeña
            </h1>
            <p className="mt-6 text-xl text-ink-soft">
              Elige el formato que mejor se adapte a ti. Todos nuestros planes son <strong>sin matrícula ni permanencia</strong>.
            </p>
          </div>

          {/* SECCIÓN: GRUPOS REDUCIDOS */}
          <div className="mb-24">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold tracking-wide text-accent mb-4">
                <span>GRUPOS REDUCIDOS</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-ink">Entrenamiento en Grupo</h2>
              <p className="text-lg text-ink-soft mt-2">Clases dinámicas con plazas limitadas y atención personalizada.</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
              {/* Mensualidades */}
              <article className="bg-white rounded-3xl p-8 shadow-sm border border-muted/50">
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
              <article className="bg-white rounded-3xl p-8 shadow-sm border border-muted/50">
                <h3 className="text-2xl font-bold text-ink mb-2 text-center">Bonos por entrenamientos</h3>
                <p className="text-sm text-ink-soft text-center mb-6">*A consumir en el mes en curso</p>
                
                <div className="space-y-2 mb-8">
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
                  className="flex min-h-[56px] w-full items-center justify-center rounded-full bg-primary px-8 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
                >
                  Reservar plaza
                </a>
              </article>
            </div>
          </div>

          {/* SECCIÓN: PERSONAL Y PAREJAS */}
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold tracking-wide text-accent mb-4">
                <span>ATENCIÓN 100% PERSONALIZADA</span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-ink">Entrenamiento Personal y Parejas</h2>
              <p className="text-lg text-ink-soft mt-2">Para adultos mayores, patologías, lesiones o atención exclusiva.</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 max-w-5xl mx-auto">
              
              {/* Individual */}
              <article className="relative flex flex-col rounded-3xl bg-bg p-8 shadow-lg border-2 border-primary">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-sm font-bold tracking-wide text-white shadow-sm">
                  1 A 1
                </div>
                
                <div className="mb-6 text-center mt-4">
                  <h3 className="text-2xl font-bold text-ink">Entrenamiento personal individual</h3>
                </div>

                <div className="bg-surface rounded-2xl p-4 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-muted">
                    <span className="text-ink font-medium">1 sesión</span>
                    <span className="text-xl font-bold text-ink">35 €</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-muted">
                    <span className="text-ink font-medium">4 sesiones / mes</span>
                    <span className="text-xl font-bold text-ink">124 €</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-muted">
                    <span className="text-ink font-medium">8 sesiones / mes</span>
                    <span className="text-xl font-bold text-ink">224 €</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-ink font-medium">12 sesiones / mes</span>
                    <span className="text-xl font-bold text-ink">284 €</span>
                  </div>
                </div>

                <ul className="flex-1 space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-lg text-ink font-medium">Atención exclusiva, personalizada</span>
                  </li>
                  {commonFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                      <span className="text-lg text-ink">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/34666003340?text=Hola%20Juan%20Jos%C3%A9%2C%20me%20gustar%C3%ADa%20reservar%20una%20valoraci%C3%B3n%20gratuita."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex min-h-[56px] w-full items-center justify-center rounded-full bg-primary px-8 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
                >
                  Reservar valoración gratuita
                </a>
              </article>

              {/* Pareja */}
              <article className="flex flex-col rounded-3xl bg-bg p-8 shadow-sm border border-muted/50 transition-shadow hover:shadow-lg lg:scale-[0.98]">
                <div className="mb-6 text-center mt-4">
                  <h3 className="text-2xl font-bold text-ink">Entrenamiento personal en pareja</h3>
                </div>

                <div className="bg-white rounded-2xl p-4 mb-6 border border-muted/50">
                  <div className="flex items-center justify-between py-2 border-b border-muted">
                    <span className="text-ink font-medium">1 sesión</span>
                    <span className="text-xl font-bold text-ink">55 €</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-muted">
                    <span className="text-ink font-medium">4 sesiones / mes</span>
                    <span className="text-xl font-bold text-ink">185 €</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-muted">
                    <span className="text-ink font-medium">8 sesiones / mes</span>
                    <span className="text-xl font-bold text-ink">294 €</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-ink font-medium">12 sesiones / mes</span>
                    <span className="text-xl font-bold text-ink">370 €</span>
                  </div>
                </div>

                <ul className="flex-1 space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-lg text-ink font-medium">Entrena con tu pareja o familiar...</span>
                  </li>
                  {commonFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                      <span className="text-lg text-ink">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/34666003340?text=Hola%20Juan%20Jos%C3%A9%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20el%20entrenamiento%20en%20pareja."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex min-h-[56px] w-full items-center justify-center rounded-full border-2 border-primary px-8 text-lg font-semibold text-primary shadow-sm transition-colors hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
                >
                  Hablar con Juan José
                </a>
              </article>

            </div>
          </div>

        </div>
      </section>
      
      <FinalCTA />
    </div>
  );
}
