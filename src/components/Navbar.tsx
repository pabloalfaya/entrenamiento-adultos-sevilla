import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 md:py-5">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Ir al inicio de Sevilla Senior Training"
        >
          <Image
            src="/logo.png"
            alt="Sevilla Senior Training"
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
            priority
          />
          <div className="leading-tight">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#0f3c73]">
              SEVILLA
            </p>
            <p className="text-sm font-semibold tracking-tight text-slate-900">
              SENIOR TRAINING
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <ul className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <li>
              <Link href="/objetivos" className="hover:text-[#0f3c73]">
                Objetivos
              </Link>
            </li>
            <li>
              <Link href="/entrenamientos" className="hover:text-[#0f3c73]">
                Entrenamientos
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-[#0f3c73]">
                Contacto
              </Link>
            </li>
          </ul>
          <a
            href="tel:+34666003340"
            className="inline-flex items-center rounded-full bg-[#0f3c73] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#12498e]"
          >
            Llámenos
          </a>
        </div>
      </nav>
    </header>
  );
}
