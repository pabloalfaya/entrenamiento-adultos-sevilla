import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  const commonFeatures = [
    "Sesión de 60 minutos en el centro",
    "Entrenador graduado CAFD",
    "Valoración inicial gratuita (sin compromiso)",
    "Plan personalizado progresivo",
    "Informe periódico de evolución",
    "Material deportivo incluido",
    "Seguro de RC y accidentes",
  ];

  return (
    <section id="precios" className="bg-surface py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-[40px]">
            Un precio claro, sin letra pequeña
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-ink-soft">
            La confianza también se construye con transparencia. Este es el precio y esto es todo lo que incluye.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 max-w-5xl mx-auto">
          
          {/* Tarjeta 1: Individual */}
          <article className="relative flex flex-col rounded-3xl bg-bg p-8 md:p-10 shadow-lg border-2 border-primary">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-sm font-bold tracking-wide text-white shadow-sm">
              ATENCIÓN PERSONAL TOTAL
            </div>
            
            <div className="mb-8 text-center mt-4">
              <h3 className="text-2xl font-bold text-ink">Sesión individual (1 a 1)</h3>
              <div className="mt-4 flex items-baseline justify-center gap-2">
                <span className="text-5xl font-serif font-bold tracking-tight text-ink">XX€</span>
                <span className="text-lg font-medium text-ink-soft">/ por sesión</span>
              </div>
            </div>

            <ul className="flex-1 space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-lg text-ink font-medium">Atención exclusiva, uno a uno</span>
              </li>
              {commonFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-lg text-ink">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:+34666003340"
              className="mt-auto flex min-h-[56px] w-full items-center justify-center rounded-full bg-primary px-8 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Reservar valoración gratuita
            </a>
          </article>

          {/* Tarjeta 2: Pareja */}
          <article className="flex flex-col rounded-3xl bg-bg p-8 md:p-10 shadow-md border border-muted/50 transition-shadow hover:shadow-lg mt-8 lg:mt-0 lg:scale-[0.98]">
            <div className="mb-8 text-center mt-4">
              <h3 className="text-2xl font-bold text-ink">Sesión en pareja (2 a 2)</h3>
              <div className="mt-4 flex items-baseline justify-center gap-2">
                <span className="text-5xl font-serif font-bold tracking-tight text-ink">XX€</span>
                <span className="text-lg font-medium text-ink-soft">/ persona y sesión</span>
              </div>
            </div>

            <ul className="flex-1 space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-lg text-ink font-medium">Entrena con tu pareja, un amigo o un familiar</span>
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
              href="https://wa.me/34666003340"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex min-h-[56px] w-full items-center justify-center rounded-full border-2 border-primary px-8 text-lg font-semibold text-primary shadow-sm transition-colors hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Hablar con Juan José
            </a>
          </article>

        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-ink-soft">
            ¿Quieres empezar con un bono de varias sesiones o una frecuencia concreta?
            <br className="hidden sm:block" />
            <a href="tel:+34666003340" className="font-semibold text-primary hover:text-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
              Llámanos
            </a>{" "}
            y lo hablamos sin compromiso.
          </p>
          {/* TODO: cuando haya bonos/cuotas mensuales, añadir tercera tarjeta o nota con precios */}
        </div>

      </div>
    </section>
  );
}
