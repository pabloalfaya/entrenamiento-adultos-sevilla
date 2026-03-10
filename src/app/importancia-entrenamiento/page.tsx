import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Importancia del entrenamiento en la tercera edad | Sevilla Senior Training",
  description:
    "Por qué es fundamental mantener la actividad física en mayores. Beneficios del ejercicio adaptado para la tercera edad en Sevilla.",
};

export default function ImportanciaEntrenamientoPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Importancia del entrenamiento en la tercera edad
            </h1>
            <p className="mt-3 text-slate-600 sm:text-lg">
              Mantener una rutina de ejercicio adaptada es uno de los pilares
              para envejecer con salud, autonomía y bienestar.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            <article className="rounded-2xl bg-[#e6effa] p-6 md:p-8">
              <h2 className="text-xl font-semibold text-slate-900">
                Beneficios físicos
              </h2>
              <p className="mt-3 text-slate-700">
                El ejercicio ayuda a conservar la fuerza muscular, mejora el
                equilibrio y reduce el riesgo de caídas. Mantener las articulaciones
                en movimiento alivia la rigidez y favorece una marcha más segura.
                La actividad física regular también contribuye a una mejor salud
                cardiovascular y ósea.
              </p>
            </article>

            <article className="rounded-2xl bg-slate-50 p-6 md:p-8">
              <h2 className="text-xl font-semibold text-slate-900">
                Beneficios cognitivos y emocionales
              </h2>
              <p className="mt-3 text-slate-700">
                La actividad física está relacionada con un mejor estado de ánimo
                y una mayor sensación de vitalidad. El ejercicio moderado puede
                ayudar a mantener las funciones cognitivas y favorecer el descanso.
                Además, las sesiones en grupo fomentan la socialización y reducen
                la sensación de aislamiento.
              </p>
            </article>

            <article className="rounded-2xl bg-[#e6effa] p-6 md:p-8">
              <h2 className="text-xl font-semibold text-slate-900">
                Autonomía y calidad de vida
              </h2>
              <p className="mt-3 text-slate-700">
                Un programa de entrenamiento adaptado ayuda a las personas mayores
                a seguir realizando las tareas del día a día con más seguridad:
                levantarse, vestirse, caminar o subir escaleras. Mantener esta
                autonomía tiene un impacto directo en la calidad de vida y en la
                confianza personal.
              </p>
            </article>

            <article className="rounded-2xl bg-slate-50 p-6 md:p-8">
              <h2 className="text-xl font-semibold text-slate-900">
                Por qué adaptar el ejercicio
              </h2>
              <p className="mt-3 text-slate-700">
                No todos los ejercicios son adecuados para todas las edades. Un
                programa adaptado tiene en cuenta el historial de salud, las
                limitaciones y los objetivos de cada persona. En Sevilla Senior
                Training diseñamos rutinas seguras, progresivas y accesibles,
                siempre con supervisión profesional.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
