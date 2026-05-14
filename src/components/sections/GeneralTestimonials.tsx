import { Quote } from "lucide-react";

export default function GeneralTestimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Llevo ya más de un año y me encanta. Son todos un encanto y hacen que entrenar sea súper ameno. Se lo recomiendo a todo el mundo.",
      author: "Laura M.",
      context: "Clienta desde 2024",
    },
    {
      id: 2,
      quote: "Es el mejor tipo de entrenamiento que he realizado en muchos años. Las instalaciones son perfectas y los entrenadores son increíbles como profesionales y como personas. Fomentan la unidad en las clases y convierten el deporte en algo divertido.",
      author: "Carlos R.",
      context: "6 meses entrenando",
    },
    {
      id: 3,
      quote: "Llevo yendo desde septiembre y no puedo estar más contento. El ambiente y los entrenamientos son muy buenos. Combinan ejercicios de fuerza y cardio y se adaptan al ritmo y a las necesidades de cada persona del grupo.",
      author: "Antonio G.",
      context: "Cliente desde 2023",
    },
    {
      id: 4,
      quote: "Las clases son súper dinámicas y entretenidas, así da gusto entrenar. El trato de los entrenadores es excelente. Es un entrenamiento en grupo pero se adaptan a las necesidades de cada persona. Me siento como en casa.",
      author: "Patricia S.",
      context: "1 año entrenando",
    },
    {
      id: 5,
      quote: "Los entrenadores son 100% profesionales, atentos y no dudan en motivarte. Es lo mejor que puedes encontrar en la zona.",
      author: "María J.",
      context: "Clienta actual",
    },
    {
      id: 6,
      quote: "Muy sabio, simpático y con mucha paciencia. Estamos más fuertes y además super contentos. Recomendado 100%.",
      author: "Fernando y Ana",
      context: "Entrenamiento en pareja",
    },
  ];

  return (
    <section className="bg-surface py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-[40px]">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Experiencias reales de quienes entrenan con nosotros cada semana.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article 
              key={t.id}
              className="relative flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md border border-muted/50"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10 rotate-180" aria-hidden="true" />
              
              <p className="relative z-10 text-lg leading-relaxed text-ink italic mb-8 flex-1">
                "{t.quote}"
              </p>
              
              <div className="mt-auto flex items-center gap-4 pt-6 border-t border-muted/50">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
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

      </div>
    </section>
  );
}
