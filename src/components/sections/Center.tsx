import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Center() {
  const checks = [
    "Entrada a pie de calle, sin barreras",
    "Sala amplia y bien iluminada",
    "Material específico para trabajo con mayores",
    "Ambiente tranquilo, sin música alta ni multitudes",
  ];

  return (
    <section id="centro" className="bg-bg py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col gap-6 lg:order-2">
            <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-[40px]">
              Un centro pensado para el adulto mayor, no un gimnasio reconvertido
            </h2>
            <p className="text-lg leading-relaxed text-ink-soft">
              En Los Remedios, a pie de calle, sin escalones a la entrada y con espacio suficiente para moverse con seguridad. El material es el justo y necesario: gomas, pesas ligeras, steps, colchonetas y elementos de equilibrio. Nada que intimide, nada que sobre.
            </p>
            <ul className="mt-4 flex flex-col gap-4">
              {checks.map((check) => (
                <li key={check} className="flex items-start gap-3 text-lg font-medium text-ink">
                  <CheckCircle2 className="mt-1 h-6 w-6 text-accent shrink-0" aria-hidden="true" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Galería Simple */}
          <div className="lg:order-1 relative h-full min-h-[400px] w-full rounded-2xl overflow-hidden shadow-lg bg-surface">
            {/* TODO: sustituir por 3-5 fotos reales del local (exterior, sala, material) */}
            <div className="absolute inset-0 flex items-center justify-center text-ink-soft p-8 text-center border-2 border-dashed border-muted rounded-2xl m-4">
              <p>[Galería de fotos del centro: entrada, sala y material]</p>
            </div>
            {/* Si usas fotos reales en grid simple:
            <div className="grid grid-cols-2 gap-4 h-full">
               <div className="relative col-span-2 h-64...">...</div>
               <div className="relative h-48...">...</div>
               <div className="relative h-48...">...</div>
            </div>
            */}
          </div>

        </div>
      </div>
    </section>
  );
}
