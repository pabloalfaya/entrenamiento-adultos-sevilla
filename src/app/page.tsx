export default function Home() {
  return (
    <div className="bg-[#f5f7fb] text-slate-900">
      {/* Hero */}
      <section
        id="inicio"
        className="relative isolate overflow-hidden bg-slate-900 text-white"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1a4c88,transparent_55%),radial-gradient(circle_at_bottom_right,#0f3c73,transparent_60%)] opacity-90" />
          <div className="absolute inset-0 bg-[url('/hero-senior.jpg')] bg-cover bg-center mix-blend-soft-light opacity-60" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 md:flex-row md:items-center md:gap-14 md:px-6 md:py-24 lg:py-28">
          <div className="max-w-xl">
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-[0.18em] text-slate-100 backdrop-blur">
              ENTRENAMIENTO ESPECIALIZADO PARA MAYORES
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              SEVILLA SENIOR TRAINING: MEJORA TU CALIDAD DE VIDA
            </h1>
            <p className="mt-4 max-w-lg text-base text-slate-100 sm:text-lg md:mt-6 md:text-xl">
              Entrenamiento personalizado diseñado para recuperar tu vitalidad, fuerza y autonomía. Porque cada año es una oportunidad para sentirte mejor.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contacto"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0f3c73] shadow-md transition hover:bg-slate-100"
              >
                Reservar una llamada
              </a>
              <a
                href="/entrenamientos"
                className="inline-flex items-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver entrenamientos
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-200">
              Sesiones adaptadas a cada nivel, con atención cercana y lenguaje claro, pensadas para personas mayores y
              sus familias.
            </p>
          </div>

          <div className="w-full max-w-sm rounded-2xl bg-white/95 p-5 text-slate-900 shadow-xl shadow-slate-900/20 backdrop-blur md:p-6">
            <h2 className="text-lg font-semibold tracking-tight">
              Primera valoración sin compromiso
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Analizamos su estado físico y proponemos un plan sencillo y seguro para empezar.
            </p>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0f3c73]/10 text-[#0f3c73]">
                  ✓
                </span>
                <div>
                  <dt className="font-medium text-slate-900">Sesiones individuales o en grupos reducidos</dt>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0f3c73]/10 text-[#0f3c73]">
                  ✓
                </span>
                <div>
                  <dt className="font-medium text-slate-900">Horarios flexibles de mañana y tarde</dt>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0f3c73]/10 text-[#0f3c73]">
                  ✓
                </span>
                <div>
                  <dt className="font-medium text-slate-900">Comunicación clara y cercana con la familia</dt>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Beneficios para tu Salud */}
      <section
        id="beneficios-salud"
        className="bg-white px-4 py-20 md:px-6 md:py-28"
        aria-labelledby="beneficios-title"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <h2
              id="beneficios-title"
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            >
              Beneficios para tu Salud
            </h2>
            <p className="mt-4 text-slate-600 sm:text-lg">
              Un programa de ejercicio adaptado puede transformar tu día a día. Descubre cómo podemos ayudarte.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            <article className="group flex flex-col items-center rounded-2xl bg-[#e6effa] p-8 text-center transition hover:shadow-lg md:p-10">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0f3c73] text-white shadow-md transition group-hover:scale-105">
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 md:text-xl">
                Vitalidad Diaria
              </h3>
              <p className="mt-3 text-slate-700">
                Ejercicios pensados para que tengas más energía en tu rutina. Levantarte con ánimo y afrontar el día con mayor vitalidad.
              </p>
            </article>

            <article className="group flex flex-col items-center rounded-2xl bg-slate-50 p-8 text-center transition hover:shadow-lg md:p-10">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0f3c73] text-white shadow-md transition group-hover:scale-105">
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 md:text-xl">
                Fortaleza y Equilibrio
              </h3>
              <p className="mt-3 text-slate-700">
                Prevención de caídas y mejora muscular. Gana seguridad al caminar y fortalece piernas y core para una vida más independiente.
              </p>
            </article>

            <article className="group flex flex-col items-center rounded-2xl bg-[#e6effa] p-8 text-center transition hover:shadow-lg md:p-10">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0f3c73] text-white shadow-md transition group-hover:scale-105">
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 md:text-xl">
                Bienestar Mental
              </h3>
              <p className="mt-3 text-slate-700">
                Reducción del estrés y mejora del ánimo. El ejercicio ayuda a dormir mejor, a sentirte más tranquilo y con mayor confianza.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section
        id="objetivos"
        className="bg-[#f5f7fb] px-4 py-20 md:px-6 md:py-28"
        aria-labelledby="objetivos-title"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2
              id="objetivos-title"
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Objetivos de Sevilla Senior Training
            </h2>
            <p className="mt-4 text-slate-600 sm:text-base">
              Nuestro foco está en mantener y recuperar la autonomía de la persona mayor, siempre con seguridad y
              acompañamiento profesional.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <article className="flex flex-col gap-3 rounded-2xl bg-[#e6effa] p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#0f3c73] text-white">
                <svg
                  className="h-5 w-5"
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
              <h3 className="text-base font-semibold text-slate-900">
                Mejorar fuerza y equilibrio
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Ejercicios sencillos, explicados con calma, para ganar seguridad al caminar, levantarse o subir
                escaleras.
              </p>
            </article>

            <article className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#0f3c73] text-white">
                <svg
                  className="h-5 w-5"
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
              <h3 className="text-base font-semibold text-slate-900">
                Mantener la autonomía diaria
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Programas orientados a las tareas del día a día: vestirse, levantarse de la cama o entrar y salir del
                coche.
              </p>
            </article>

            <article className="flex flex-col gap-3 rounded-2xl bg-slate-50 p-5">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#0f3c73] text-white">
                <svg
                  className="h-5 w-5"
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
              <h3 className="text-base font-semibold text-slate-900">
                Cuidar el ánimo y la confianza
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Entrenamientos que respetan el ritmo de cada persona, evitando miedos y reforzando la confianza en sí
                misma.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Entrenamientos */}
      <section
        id="entrenamientos"
        className="bg-white px-4 py-20 md:px-6 md:py-28"
        aria-labelledby="entrenamientos-title"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xl">
              <h2
                id="entrenamientos-title"
                className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
              >
                Entrenamientos pensados para el adulto mayor
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Explicamos cada ejercicio con palabras sencillas, demostrando con calma y corrigiendo siempre con
                respeto.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-slate-700 md:w-1/2">
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="font-semibold text-slate-900">
                  Sesiones de fuerza suave
                </p>
                <p className="mt-1">
                  Uso de gomas, pequeños pesos y el propio cuerpo para fortalecer piernas, brazos y espalda.
                </p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="font-semibold text-slate-900">
                  Trabajo de equilibrio y marcha
                </p>
                <p className="mt-1">
                  Ejercicios específicos para reducir el riesgo de caídas y mejorar la seguridad al caminar.
                </p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="font-semibold text-slate-900">
                  Movilidad y respiración
                </p>
                <p className="mt-1">
                  Rutinas suaves para aliviar rigideces, mejorar la postura y favorecer una respiración tranquila.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
