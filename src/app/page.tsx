export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-60" />
        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="/" className="text-xl font-semibold tracking-tight">
            Entrenamiento Sevilla
          </a>
          <ul className="hidden gap-8 md:flex">
            <li><a href="#caracteristicas" className="text-stone-300 transition hover:text-white">Características</a></li>
            <li><a href="#contacto" className="text-stone-300 transition hover:text-white">Contacto</a></li>
          </ul>
        </nav>
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16 md:pb-32 md:pt-24">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-amber-400/90">
            Bienestar y actividad física
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Entrenamiento diseñado para{" "}
            <span className="text-amber-400">personas mayores</span> en Sevilla
          </h1>
          <p className="mt-6 max-w-xl text-lg text-stone-300 md:text-xl">
            Programas adaptados, profesionales cualificados y un entorno seguro para mejorar tu salud y vitalidad.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center rounded-lg bg-amber-500 px-6 py-3 font-medium text-stone-900 transition hover:bg-amber-400"
            >
              Empezar ahora
            </a>
            <a
              href="#caracteristicas"
              className="inline-flex items-center rounded-lg border border-stone-500/50 px-6 py-3 font-medium text-white transition hover:border-stone-400 hover:bg-white/5"
            >
              Saber más
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-stone-50 to-transparent" />
      </header>

      {/* Features Section */}
      <section id="caracteristicas" className="relative -mt-8 px-6 pb-24 md:-mt-12 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-stone-200/80 bg-white p-8 shadow-xl shadow-stone-200/50 md:p-12">
            <div className="mb-12 text-center md:mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
                Por qué elegirnos
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-stone-600">
                Metodología centrada en la seguridad, el progreso gradual y el disfrute de la actividad física.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <article className="group rounded-xl border border-stone-100 bg-stone-50/50 p-6 transition hover:border-amber-200 hover:bg-amber-50/30">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600 group-hover:bg-amber-200">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-stone-900">Ejercicios adaptados</h3>
                <p className="mt-2 text-stone-600">
                  Rutinas personalizadas según tu nivel y necesidades, respetando tus limitaciones y objetivos.
                </p>
              </article>
              <article className="group rounded-xl border border-stone-100 bg-stone-50/50 p-6 transition hover:border-amber-200 hover:bg-amber-50/30">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600 group-hover:bg-amber-200">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-stone-900">Profesionales cualificados</h3>
                <p className="mt-2 text-stone-600">
                  Formación especializada en ejercicio para mayores y experiencia en atención individualizada.
                </p>
              </article>
              <article className="group rounded-xl border border-stone-100 bg-stone-50/50 p-6 transition hover:border-amber-200 hover:bg-amber-50/30">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-600 group-hover:bg-amber-200">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-stone-900">Espacios accesibles</h3>
                <p className="mt-2 text-stone-600">
                  Instalaciones adaptadas, grupos reducidos y entorno acogedor para entrenar con comodidad.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="border-t border-stone-200 bg-stone-900 px-6 py-12 text-white md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Entrenamiento Sevilla</h3>
              <p className="mt-2 max-w-sm text-stone-400">
                Programas de ejercicio y bienestar para personas mayores. Tu salud, nuestra prioridad.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-stone-400">Contacto</p>
              <p className="text-stone-200"> Sevilla, España</p>
              <a href="mailto:info@entrenamientosevilla.es" className="block text-amber-400 transition hover:text-amber-300">
                info@entrenamientosevilla.es
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between border-t border-stone-700/50 pt-8 md:flex-row">
            <p className="text-sm text-stone-500">
              © {new Date().getFullYear()} Entrenamiento Personas Mayores Sevilla. Todos los derechos reservados.
            </p>
            <div className="mt-4 flex gap-6 md:mt-0">
              <a href="#" className="text-sm text-stone-500 transition hover:text-stone-300">Aviso legal</a>
              <a href="#" className="text-sm text-stone-500 transition hover:text-stone-300">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
