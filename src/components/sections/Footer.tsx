import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-bg">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-12 md:grid-cols-4 lg:gap-8">
          {/* Col 1: Marca */}
          <div className="flex flex-col gap-6 md:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 shrink-0 object-contain brightness-0 invert"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] text-muted">
                  SEVILLA
                </p>
                <p className="text-base font-semibold tracking-tight text-white">
                  SENIOR TRAINING
                </p>
              </div>
            </div>
            <p className="text-lg text-muted">
              Entrenamiento personal para mayores en Sevilla.
            </p>
            <p className="text-base text-muted flex items-start gap-2">
              <MapPin className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
              <span>C/ Virgen de Setefilla 12, Los Remedios</span>
            </p>
          </div>

          {/* Col 2: Navegación */}
          <div className="md:col-span-1">
            <h2 className="mb-6 text-lg font-semibold text-white">El Centro</h2>
            <ul className="flex flex-col gap-4 text-base text-muted">
              <li><Link href="#centro" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">Instalaciones</Link></li>
              <li><Link href="#metodo" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">Método</Link></li>
              <li><Link href="#precios" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">Precios</Link></li>
              <li><Link href="#ubicacion" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">Cómo llegar</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">Preguntas frecuentes</Link></li>
            </ul>
          </div>

          {/* Col 3: Programas */}
          <div className="md:col-span-1">
            <h2 className="mb-6 text-lg font-semibold text-white">Programas</h2>
            <ul className="flex flex-col gap-4 text-base text-muted">
              <li><Link href="#programas" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">Equilibrio Activo</Link></li>
              <li><Link href="#programas" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">Post-Hospitalización</Link></li>
              <li><Link href="#programas" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">Fuerza Vital</Link></li>
              <li><Link href="#programas" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">Movilidad y Espalda</Link></li>
              <li><Link href="#programas" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">Acompañamiento Neurológico</Link></li>
              <li><Link href="#programas" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">Vida Activa 65+</Link></li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div className="md:col-span-1">
            <h2 className="mb-6 text-lg font-semibold text-white">Contacto</h2>
            <ul className="flex flex-col gap-4 text-base text-muted">
              <li>
                <a href="tel:+34666003340" className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
                  <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                  +34 666 003 340
                </a>
              </li>
              <li>
                {/* TODO: cambiar email por uno con dominio propio cuando esté disponible */}
                <a href="mailto:farrosqui@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors break-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
                  <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                  farrosqui@gmail.com
                </a>
              </li>
              <li className="mt-2">
                <p className="font-semibold text-white">Horario de atención:</p>
                <p>Lunes a viernes</p>
                <p>09:00 - 20:00</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col border-t border-ink-soft/50 pt-8 text-sm text-muted md:flex-row md:items-center md:justify-between gap-4">
          <p>
            © {currentYear} Sevilla Senior Training · Juan José Alfaya Arias
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6">
            <Link href="#" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">Aviso legal</Link>
            <Link href="#" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">Política de privacidad</Link>
            <Link href="#" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">Política de cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
