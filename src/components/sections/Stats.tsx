"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-bg py-20 md:py-24" aria-label="Estadísticas de experiencia">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div 
          ref={ref}
          className="grid gap-12 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-muted/50"
        >
          <div className="flex flex-col items-center text-center pt-8 md:pt-0">
            <p className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
              +{inView ? <CountUp end={5} duration={2} /> : "0"}
            </p>
            <p className="text-xl font-medium text-ink">
              Años especializándome en mayores
            </p>
            {/* TODO: confirmar número exacto con Juan José */}
          </div>

          <div className="flex flex-col items-center text-center pt-8 md:pt-0">
            <p className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
              {inView ? <CountUp end={100} duration={2} /> : "0"}%
            </p>
            <p className="text-xl font-medium text-ink">
              Sesiones personalizadas, nunca en grupo grande
            </p>
            {/* TODO: pedir número real a Juan José. Placeholder cualitativo usado. */}
          </div>

          <div className="flex flex-col items-center text-center pt-8 md:pt-0">
            <p className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
              1 a 1
            </p>
            <p className="text-xl font-medium text-ink">
              Atención individual o en pareja
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
