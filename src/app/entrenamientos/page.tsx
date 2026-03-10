import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrenamientos | Sevilla Senior Training",
  description:
    "Sesiones de ejercicio adaptadas al adulto mayor en Sevilla. Fuerza, equilibrio, movilidad y respiración.",
};

export default function EntrenamientosPage() {
  return (
    <div className="bg-[#f5f7fb] text-slate-900">
      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Entrenamientos pensados para el adulto mayor
            </h1>
            <p className="mt-3 text-slate-600 sm:text-lg">
              Explicamos cada ejercicio con palabras sencillas, demostrando con
              calma y corrigiendo siempre con respeto.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Sesiones de fuerza suave
              </h2>
              <p className="mt-3 text-slate-700">
                Uso de gomas, pequeños pesos y el propio cuerpo para fortalecer
                piernas, brazos y espalda. Ejercicios adaptados a cada nivel y
                condición.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Trabajo de equilibrio y marcha
              </h2>
              <p className="mt-3 text-slate-700">
                Ejercicios específicos para reducir el riesgo de caídas y
                mejorar la seguridad al caminar. Rutinas progresivas y seguras.
              </p>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Movilidad y respiración
              </h2>
              <p className="mt-3 text-slate-700">
                Rutinas suaves para aliviar rigideces, mejorar la postura y
                favorecer una respiración tranquila.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
