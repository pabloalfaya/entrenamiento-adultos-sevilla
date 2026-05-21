import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import FacilitiesGallery from "@/components/sections/FacilitiesGallery";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Instalaciones | Entrena Sevilla",
  description:
    "Conoce nuestro centro de entrenamiento en Los Remedios, Sevilla. Accesible, amplio y equipado para entrenamiento personal y en grupo.",
  openGraph: {
    title: "Instalaciones | Entrena Sevilla",
    description:
      "Conoce nuestro centro de entrenamiento en Los Remedios, Sevilla. Accesible, amplio y equipado para entrenamiento personal y en grupo.",
    url: "https://entrenasevilla.es/instalaciones",
    type: "website",
  },
};

const features = [
  "Entrada a pie de calle, sin barreras",
  "Sala amplia y bien iluminada",
  "Material para fuerza, cardio y entrenamiento funcional",
  "Ambiente tranquilo, con plazas limitadas en grupo",
];

export default function InstalacionesPage() {
  return (
    <div className="bg-[#f5f7fb]">
      <FacilitiesGallery />

      <section className="py-16 md:py-20 bg-surface">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <ul className="flex flex-col gap-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-lg font-medium text-ink">
                <CheckCircle2
                  className="mt-1 h-6 w-6 text-accent shrink-0"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
