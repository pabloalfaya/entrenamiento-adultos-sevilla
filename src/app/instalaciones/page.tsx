import { Metadata } from "next";
import Center from "@/components/sections/Center";
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

export default function InstalacionesPage() {
  return (
    <div className="bg-[#f5f7fb]">
      <section className="py-16 md:py-20 bg-bg">
        <div className="mx-auto max-w-3xl px-4 md:px-6 text-center">
          <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Nuestras instalaciones
          </h1>
          <p className="mt-6 text-xl text-ink-soft leading-relaxed">
            Un espacio en Los Remedios pensado para entrenar con comodidad, seguridad y atención personalizada.
          </p>
        </div>
      </section>

      <Center />

      <FinalCTA />
    </div>
  );
}
