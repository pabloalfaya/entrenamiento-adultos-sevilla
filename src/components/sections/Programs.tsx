import { Activity, ShieldCheck, Heart, PersonStanding, Brain, Footprints } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Programs() {
  // TODO: confirmar con Juan José qué programas ofrece realmente y quitar los que no aplique
  const programs = [
    {
      icon: Footprints,
      title: "Equilibrio Activo",
      description: "Para prevenir caídas y ganar seguridad al caminar. Trabajo específico de propiocepción y marcha.",
    },
    {
      icon: ShieldCheck,
      title: "Post-Hospitalización",
      description: "Recuperación guiada tras un ingreso o una cirugía. Ritmo lento, progresión medida.",
    },
    {
      icon: Activity,
      title: "Fuerza Vital",
      description: "Contra la sarcopenia, la pérdida de masa muscular que empieza a los 70. El programa más importante a largo plazo.",
    },
    {
      icon: PersonStanding,
      title: "Movilidad y Espalda",
      description: "Para rigideces, dolor cervical y lumbar. Rutinas suaves para recuperar amplitud de movimiento.",
    },
    {
      icon: Brain,
      title: "Acompañamiento Neurológico",
      description: "Adaptado a deterioro cognitivo o motor leve. Sesiones cortas, claras, con referentes visuales.",
    },
    {
      icon: Heart,
      title: "Vida Activa 65+",
      description: "Para mayores autónomos que quieren llegar a los 85 caminando solos. Mantenimiento inteligente.",
    },
  ];

  return (
    <section id="programas" className="bg-bg py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-[40px]">
            Programas pensados para cada momento vital
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-ink-soft">
            No es lo mismo entrenar para mantener la autonomía que para recuperarla después de un golpe. Por eso trabajamos con programas específicos, siempre adaptados persona a persona.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((prog) => (
            <article 
              key={prog.title}
              className="group flex flex-col gap-4 rounded-2xl bg-surface p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md border border-transparent hover:border-muted"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-warm-glow text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <prog.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-ink mt-2">
                {prog.title}
              </h3>
              <p className="text-base text-ink-soft leading-relaxed">
                {prog.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl bg-warm-glow p-8 md:p-10 lg:p-12 shadow-sm border border-primary/10">
          <p className="text-lg md:text-xl font-medium text-ink leading-relaxed mb-6">
            "Todos los programas se basan en evidencia científica. El Programa Otago, por ejemplo, ha demostrado reducir las caídas en mayores en un 35%. Aplicamos protocolos validados, adaptados persona a persona."
          </p>
          <Link 
            href="/importancia-entrenamiento"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          >
            Ver más sobre la importancia del entrenamiento en mayores
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}
