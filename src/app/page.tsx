import Link from "next/link";
import { ArrowRight, Users, UserPlus, Heart } from "lucide-react";
import Image from "next/image";
import Location from "@/components/sections/Location";
import GeneralTestimonials from "@/components/sections/GeneralTestimonials";

export default function Home() {
  return (
    <div className="bg-[#f5f7fb]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/sanolosremedios1.webp"
            alt="Fondo centro de entrenamiento"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#f5f7fb]/90 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl md:text-6xl mb-6">
              Entrenamiento adaptado a tus necesidades
            </h1>
            <p className="text-xl text-ink-soft leading-relaxed">
              En nuestro centro de Los Remedios ofrecemos programas especializados según tus objetivos. Elige cómo quieres entrenar con Juan José.
            </p>
          </div>

          {/* Ramas Options */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Opción 1: Grupos Reducidos */}
            <Link href="/grupos" className="group flex flex-col rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-primary/20">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Users className="h-8 w-8" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-3">
                Grupos Reducidos
              </h2>
              <p className="text-ink-soft mb-8 flex-grow">
                Clases dinámicas en grupos reducidos. Ideal para mantenerte en forma, ganar fuerza y entrenar en un ambiente motivador.
              </p>
              <div className="flex items-center text-primary font-semibold">
                Ver información <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </div>
            </Link>

            {/* Opción 2: Personal / Parejas */}
            <Link href="/personal" className="group flex flex-col rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-primary/20 relative">
              <div className="absolute -top-4 right-8 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-sm font-bold tracking-wide text-white shadow-sm">
                MÁS POPULAR
              </div>
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <UserPlus className="h-8 w-8" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-3">
                Personal y Parejas
              </h2>
              <p className="text-ink-soft mb-8 flex-grow">
                Atención 1 a 1 o 2 a 1. Alcanza tus objetivos con un plan 100% diseñado para ti. Especial atención a patologías y lesiones.
              </p>
              <div className="flex items-center text-primary font-semibold">
                Ver información <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </div>
            </Link>

            {/* Opción 3: Mayores */}
            <Link href="/mayores" className="group flex flex-col rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-primary/20">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Heart className="h-8 w-8" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-3">
                Salud y Adultos Mayores
              </h2>
              <p className="text-ink-soft mb-8 flex-grow">
                Recuperación de fuerza, equilibrio y autonomía para mayores de 70 años. Trabajo con calma, método y mucho respeto.
              </p>
              <div className="flex items-center text-primary font-semibold">
                Ver información <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </div>
            </Link>

          </div>
        </div>
      </section>

      <GeneralTestimonials />
      
      <Location />
    </div>
  );
}
