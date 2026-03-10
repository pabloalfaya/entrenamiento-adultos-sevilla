import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="border-t border-slate-200 bg-white px-4 py-10 md:px-6 md:py-14"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-3">
            <Image
              src="/logo.png"
              alt="Sevilla Senior Training"
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 object-contain"
            />
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#0f3c73]">
                SEVILLA SENIOR TRAINING
              </p>
              <p className="mt-2 max-w-sm text-sm text-slate-600">
                Entrenamiento personalizado para personas mayores en Sevilla.
                Hablamos despacio, escuchamos y buscamos el ritmo que mejor se
                adapte a cada persona.
              </p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Contacto</p>
            <p>Sevilla, España</p>
            <a
              href="tel:+34666003340"
              className="block text-[#0f3c73] underline-offset-2 hover:underline"
            >
              +34 666 003 340
            </a>
            <a
              href="mailto:farrosqui@gmail.com"
              className="block text-[#0f3c73] underline-offset-2 hover:underline"
            >
              farrosqui@gmail.com
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col border-t border-slate-200 pt-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Sevilla Senior Training. Todos los
            derechos reservados.
          </p>
          <div className="mt-2 flex gap-4 md:mt-0">
            <a href="#" className="hover:text-slate-700">
              Aviso legal
            </a>
            <a href="#" className="hover:text-slate-700">
              Política de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
