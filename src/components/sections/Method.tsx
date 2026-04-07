export default function Method() {
  const steps = [
    {
      number: "1",
      duration: "15 min",
      title: "Valoración inicial",
      description: "Hablamos contigo y con tu familiar, revisamos el historial y medimos fuerza, equilibrio y movilidad con tests validados (SPPB, Timed Up & Go).",
    },
    {
      number: "2",
      duration: "10 min",
      title: "Calentamiento consciente",
      description: "Movilidad articular y activación respiratoria. Entramos al ejercicio sin sustos y con el cuerpo listo.",
    },
    {
      number: "3",
      duration: "30 min",
      title: "Bloque principal",
      description: "Fuerza suave con gomas y peso corporal, equilibrio progresivo y marcha. Todo adaptado al nivel real de ese día.",
    },
    {
      number: "4",
      duration: "10 min",
      title: "Vuelta a la calma",
      description: "Estiramientos, respiración y repaso de lo trabajado. Nos despedimos con la sensación de haber hecho algo bueno.",
    },
  ];

  return (
    <section id="metodo" className="bg-surface py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-[40px]">
            Así trabajamos cada sesión
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-ink-soft">
            Cada sesión sigue la misma estructura clara. Así, tu familiar sabe qué esperar, gana confianza semana a semana y los resultados son medibles.
          </p>
        </div>

        {/* Stepper Vertical Móvil / Horizontal Desktop */}
        <div className="relative">
          {/* Línea conectora (visible solo en desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-muted -z-10" aria-hidden="true" />
          
          <div className="grid gap-8 md:grid-cols-4 md:gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col md:items-center">
                
                {/* Línea conectora (visible solo en móvil) */}
                {i !== steps.length - 1 && (
                  <div className="md:hidden absolute top-20 left-6 w-0.5 h-full bg-muted -z-10" aria-hidden="true" />
                )}

                {/* Número circular grande */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-md md:h-16 md:w-16 md:text-3xl ring-4 ring-surface mb-4 md:mb-6">
                  {step.number}
                </div>

                <div className="bg-bg rounded-2xl p-6 md:text-center w-full h-full border border-muted/30 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                  <span className="inline-block rounded-full bg-warm-glow px-3 py-1 text-sm font-semibold text-primary mb-3">
                    {step.duration}
                  </span>
                  <h3 className="text-xl font-bold text-ink mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base text-ink-soft leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
