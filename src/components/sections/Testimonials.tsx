import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Mi madre tiene 82 años y llevaba dos sin querer salir de casa tras una caída. En tres meses ha recuperado la confianza para ir a la panadería sola. Yo vivo tranquila por primera vez en años.",
      author: "Carmen, hija de María (82)",
      context: "Triana · tras caída con fractura",
    },
    {
      id: 2,
      quote: "Tengo 74 años y un párkinson leve. Vengo dos veces por semana y Juan José adapta los ejercicios a cómo esté ese día. He ganado fuerza en las piernas y duermo mejor.",
      author: "Antonio (74)",
      context: "Nervión · párkinson leve",
    },
    {
      id: 3,
      quote: "Después del ingreso por insuficiencia cardíaca, el cardiólogo me recomendó hacer ejercicio pero con supervisión. Aquí me siento seguro. No es un gimnasio, es un tratamiento.",
      author: "Rafael (78)",
      context: "Los Remedios · post ingreso cardiológico",
    },
  ];

  return (
    <section className="bg-warm-glow py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-[40px]">
            Familias de Sevilla que ya confían en el centro
          </h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <div className="flex text-amber-500" aria-label="5 estrellas">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <p className="text-lg font-medium text-ink-soft">
              Opiniones reales de clientes y familiares
            </p>
            {/* TODO: cuando haya ficha Google Business Profile, sustituir por "X,X/5 en Google" con enlace */}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {testimonials.map((t) => (
            <article 
              key={t.id}
              className="relative flex flex-col rounded-2xl bg-surface p-8 shadow-sm transition-shadow hover:shadow-md border border-muted/50"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20 rotate-180" aria-hidden="true" />
              
              <p className="relative z-10 text-lg leading-relaxed text-ink italic mb-8 flex-1">
                "{t.quote}"
              </p>
              
              <div className="mt-auto flex items-center gap-4 pt-6 border-t border-muted/50">
                {/* TODO: sustituir por fotos reales o avatar iniciales */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted text-ink-soft font-bold text-lg">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-ink">
                    {t.author}
                  </p>
                  <p className="text-sm font-medium text-ink-soft">
                    {t.context}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        {/* TODO: sustituir por testimonios reales con consentimiento por escrito */}

      </div>
    </section>
  );
}
