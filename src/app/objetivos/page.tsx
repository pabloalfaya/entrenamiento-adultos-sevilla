import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Objetivos | Sevilla Senior Training",
  description:
    "Nuestro foco está en mantener y recuperar la autonomía de la persona mayor en Sevilla.",
};

export default function ObjetivosPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Objetivos de Sevilla Senior Training
            </h1>
            <p className="mt-3 text-slate-600 sm:text-lg">
              Nuestro foco está en mantener y recuperar la autonomía de la
              persona mayor, siempre con seguridad y acompañamiento profesional.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="flex flex-col gap-3 rounded-2xl bg-[#e6effa] p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0f3c73] text-white">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M9 11.25 11.25 13.5 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-slate-900">
                Mejorar fuerza y equilibrio
              </h2>
              <p className="text-slate-700">
                Ejercicios sencillos, explicados con calma, para ganar seguridad
                al caminar, levantarse o subir escaleras.
              </p>
            </article>

            <article className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0f3c73] text-white">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 6v6l3 3M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-slate-900">
                Mantener la autonomía diaria
              </h2>
              <p className="text-slate-700">
                Programas orientados a las tareas del día a día: vestirse,
                levantarse de la cama o entrar y salir del coche.
              </p>
            </article>

            <article className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0f3c73] text-white">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M15.59 14.37a4.5 4.5 0 0 0-7.58 0L4.318 19.5h15.364L15.59 14.37Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9a3 3 0 1 0 6 0A3 3 0 0 0 9 9Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-slate-900">
                Cuidar el ánimo y la confianza
              </h2>
              <p className="text-slate-700">
                Entrenamientos que respetan el ritmo de cada persona, evitando
                miedos y reforzando la confianza en sí misma.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
