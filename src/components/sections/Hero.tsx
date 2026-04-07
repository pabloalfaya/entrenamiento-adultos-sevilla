import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold tracking-wide text-accent">
              <MapPinIcon className="h-4 w-4" aria-hidden="true" />
              <span>CENTRO ESPECIALIZADO EN LOS REMEDIOS, SEVILLA</span>
            </div>

            <h1 className="font-serif text-4xl leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[56px]">
              ¿Te preocupa que tu padre o tu madre haya perdido fuerza, equilibrio o confianza al caminar?
            </h1>

            <p className="text-xl leading-relaxed text-ink-soft max-w-2xl">
              Soy Juan José Alfaya, graduado en Ciencias de la Actividad Física y del Deporte, especializado en entrenamiento para personas mayores. En mi centro de Los Remedios trabajo uno a uno, con calma, con método y con el respeto que cada persona merece. Para que recupere la autonomía que creía perdida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-4">
              <Link
                href="#contacto"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-primary px-8 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg w-full sm:w-auto text-center"
              >
                Reservar valoración gratuita
              </Link>
              <Link
                href="#metodo"
                className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full px-8 text-lg font-semibold text-ink transition-colors hover:bg-muted focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg w-full sm:w-auto"
              >
                Conocer el método
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>

            <ul className="flex flex-col gap-3 mt-4 text-base font-medium text-ink-soft">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                <span>Primera sesión sin compromiso</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                <span>Graduado CAFD, +5 años con mayores</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                <span>Local accesible en Los Remedios</span>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-2xl shadow-xl">
              {/* TODO: reemplazar hero-juanjose.jpg con foto real del entrenador */}
              <div className="absolute inset-0 bg-muted flex items-center justify-center text-ink-soft text-center p-8">
                <p>[Foto de Juan José en el centro de Los Remedios]</p>
              </div>
              {/* <Image
                src="/hero-juanjose.jpg"
                alt="Juan José Alfaya, entrenador personal especializado en personas mayores"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              /> */}
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 lg:-left-12 rounded-2xl bg-surface px-6 py-4 shadow-lg border border-muted/50">
              <p className="flex items-center gap-2 text-base font-semibold text-ink">
                <span className="text-xl" aria-hidden="true">📍</span>
                C/ Virgen de Setefilla 12
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
