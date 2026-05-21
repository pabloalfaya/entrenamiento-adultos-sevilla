import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TrustBar from "@/components/sections/TrustBar";
import Stats from "@/components/sections/Stats";
import WhyUs from "@/components/sections/WhyUs";
import Center from "@/components/sections/Center";
import Method from "@/components/sections/Method";
import Programs from "@/components/sections/Programs";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrenamiento para adultos mayores en Sevilla | Entrena Sevilla",
  description: "Mejora tu equilibrio, fuerza y movilidad con entrenamiento personalizado para mayores en Los Remedios, Sevilla. Sesiones adaptadas en pareja. Infórmate.",
  openGraph: {
    title: "Entrenamiento para adultos mayores en Sevilla | Entrena Sevilla",
    description: "Mejora tu equilibrio, fuerza y movilidad con entrenamiento personalizado para mayores en Los Remedios, Sevilla. Sesiones adaptadas en pareja. Infórmate.",
    url: "https://entrenasevilla.es/adultos",
    type: "website",
  },
};

export default function MayoresPage() {
  return (
    <div className="bg-[#f5f7fb]">
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Instalaciones1.jpeg"
            alt="Instalaciones del centro Entrena Sevilla"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#f5f7fb]/60 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/90 px-4 py-2 text-sm font-semibold tracking-wide text-accent shadow-sm hero-text-shadow">
                <span>SALUD Y MAYORES DE 70 AÑOS</span>
              </div>
              <h1 className="font-serif text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-6xl hero-text-shadow-lg">
                Recupera la fuerza, el equilibrio y la confianza al caminar
              </h1>
              <p className="text-xl leading-relaxed text-ink max-w-2xl hero-text-shadow">
                Soy Juan José Alfaya, graduado en CAFD especializado en adulto mayor. En mi centro trabajo uno a uno, con calma, método y el respeto que cada persona merece. Trabajo con objetivos concretos como mejorar el día a día o la prevención de caídas.
              </p>
              <Link
                href="https://wa.me/34666003340?text=Hola%20Juan%20Jos%C3%A9%2C%20me%20gustar%C3%ADa%20reservar%20una%20valoraci%C3%B3n%20gratuita."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[56px] w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-primary px-8 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Reservar valoración gratuita
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-2xl shadow-xl bg-warm-glow/50 backdrop-blur-sm">
                <Image
                  src="/jefe.png"
                  alt="Juan José Alfaya, entrenador personal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Pricing />
      
      <TrustBar />
      <Stats />
      <WhyUs />
      <Center />
      <Method />
      <Programs />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
