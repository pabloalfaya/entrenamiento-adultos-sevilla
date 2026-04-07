"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "¿Dónde está el centro y cómo llego?",
      a: "En Calle Virgen de Setefilla 12, en pleno Los Remedios. La entrada es a pie de calle, sin escalones. Hay varias líneas de bus cerca y parkings públicos en Plaza de Cuba.",
    },
    {
      q: "¿Es accesible para alguien con movilidad reducida?",
      a: "Sí. La entrada no tiene barreras arquitectónicas. Si tu familiar usa bastón, andador o tiene dificultad para caminar, puede entrar sin problema. Si usa silla de ruedas, llámanos primero para valorar el caso concreto.",
    },
    {
      q: "¿Qué pasa en la primera sesión?",
      a: "La primera sesión es una valoración gratuita. Hablamos contigo y con tu familiar, revisamos el historial de salud, hacemos unos tests suaves de fuerza y equilibrio, y proponemos un plan. Si no encajamos, no pasa nada: sin compromiso.",
    },
    {
      q: "¿Las sesiones son individuales o en grupo?",
      a: "Individuales (1 a 1) o en pareja (2 a 2). Nunca en grupos grandes. Así garantizamos atención real y corrección constante, que es lo que marca la diferencia a partir de los 65.",
    },
    {
      q: "Mi familiar tiene [párkinson / alzheimer / artrosis / problema cardíaco]. ¿Puede entrenar aquí?",
      a: "En la mayoría de casos sí, y de hecho son las situaciones donde un entrenamiento adaptado tiene más impacto. Pedimos el visto bueno del médico tratante y diseñamos el programa teniendo en cuenta la patología. Si vemos que no es seguro, te lo decimos.",
    },
    {
      q: "¿Cuánto tardan en verse resultados?",
      a: "En equilibrio y confianza al caminar, los primeros cambios se notan entre la 3ª y la 6ª semana. En fuerza muscular, entre la 6ª y la 12ª. Son procesos lentos pero muy reales, y se miden con tests objetivos.",
    },
    {
      q: "¿Qué ropa y material necesita llevar?",
      a: "Ropa cómoda y calzado deportivo. Nada más. Todo el material del centro (gomas, pesas ligeras, steps, colchonetas) ya está aquí.",
    },
    {
      q: "¿Hay seguro de responsabilidad civil?",
      a: "Sí, disponemos de seguro de Responsabilidad Civil profesional y de accidentes durante las sesiones. Está incluido en el precio.",
    },
  ];

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-surface py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-[40px]">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="rounded-2xl border border-muted/50 bg-bg transition-colors hover:border-primary/30"
              >
                <button
                  type="button"
                  onClick={() => toggleOpen(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-bold text-ink">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`h-6 w-6 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                    aria-hidden="true" 
                  />
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-base text-ink-soft leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
