import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  const commonFeatures = [
    "Sesión de 50 minutos en el centro",
    "Entrenador graduado CAFD",
    "Valoración inicial gratuita (sin compromiso)",
    "Plan personalizado progresivo",
    "Informe periódico de evolución",
  ];

  return (
    <section id="precios" className="bg-surface py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-[40px]">
            Precios y mensualidades
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 max-w-5xl mx-auto">
          
          {/* Tarjeta 1: Individual */}
          <article className="relative flex flex-col rounded-3xl bg-bg p-8 md:p-10 shadow-lg border-2 border-primary">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-sm font-bold tracking-wide text-white shadow-sm">
              ATENCIÓN PERSONAL TOTAL
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
              className="mt-auto flex min-h-[56px] w-full items-center justify-center rounded-full bg-primary px-8 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Reservar valoración gratuita
            </a>
          </article>

          {/* Tarjeta 2: Pareja */}
          <article className="flex flex-col rounded-3xl bg-bg p-8 md:p-10 shadow-md border border-muted/50 transition-shadow hover:shadow-lg mt-8 lg:mt-0 lg:scale-[0.98]">
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
                <span className="text-lg text-ink font-medium">Entrena con tu pareja, un amigo o un familiar...</span>
              </li>
              {commonFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-lg text-ink">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl bg-warm-glow p-4 mb-8">
              <p className="text-sm font-medium text-primary">
                Compartir la sesión hace la rutina más sostenible y motivadora. Ideal para parejas o hermanos que quieren cuidarse juntos.
              </p>
            </div>

            <a
              href="https://wa.me/34666003340?text=Hola%20Juan%20Jos%C3%A9%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20el%20entrenamiento%20especializado%20en%20adultos."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex min-h-[56px] w-full items-center justify-center rounded-full border-2 border-primary px-8 text-lg font-semibold text-primary shadow-sm transition-colors hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Hablar con Juan José
            </a>
          </article>

        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-semibold tracking-wide text-ink-soft uppercase bg-white inline-block px-4 py-2 rounded-full border border-muted/50">
            Sin matrícula ni permanencia
          </p>
        </div>

      </div>
    </section>
  );
}
