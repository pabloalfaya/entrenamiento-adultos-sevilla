import { GraduationCap, Clock, Users, Building2 } from "lucide-react";

export default function WhyUs() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Titulación CAFD",
      description:
        "Graduado en Ciencias de la Actividad Física y del Deporte. El único perfil legalmente habilitado para entrenar a personas con patologías.",
    },
    {
      icon: Clock,
      title: "+5 años con mayores",
      description:
        "Experiencia específica con personas de la tercera edad. Cada década a partir de los 60 tiene sus propias adaptaciones, y las conocemos.",
    },
    {
      icon: Users,
      title: "Atención 1 a 1 o en pareja",
      description:
        "Nunca entrenarás en grupos grandes. Solo individual o en pareja (con tu pareja, un amigo o un familiar). Máxima atención, siempre.",
    },
    {
      icon: Building2,
      title: "Local accesible",
      description:
        "Sin escaleras en la entrada, espacio amplio para moverse con seguridad y baño cercano. Pensado para que venir sea fácil, no una obligación.",
    },
  ];

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          
          {/* Header Text */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start lg:max-w-md">
            <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-[40px]">
              Un entrenador titulado, un método propio y un local pensado para ti
            </h2>
            <p className="text-lg leading-relaxed text-ink-soft">
              En España, por ley, solo un graduado en Ciencias de la Actividad Física y el Deporte puede entrenar a personas con patologías. Es la diferencia entre un monitor de gimnasio y un profesional sanitario-deportivo. Juan José Alfaya Arias es CAFD y lleva más de cinco años dedicado exclusivamente al entrenamiento de la tercera edad.
            </p>
          </div>

          {/* Grid Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {credentials.map((cred, i) => (
              <article 
                key={cred.title}
                className="group flex flex-col gap-4 rounded-2xl bg-bg p-8 transition-shadow hover:shadow-md border border-transparent hover:border-muted"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-warm-glow text-primary transition-transform group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
                  <cred.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-ink">
                  {cred.title}
                </h3>
                <p className="text-base text-ink-soft leading-relaxed">
                  {cred.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
