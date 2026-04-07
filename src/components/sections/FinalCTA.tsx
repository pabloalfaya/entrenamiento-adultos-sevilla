import { Phone, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-primary py-20 md:py-28 text-center text-white">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        
        <h2 className="font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-[56px] mb-8">
          Cada semana que pasa cuenta
        </h2>
        
        <p className="mx-auto max-w-2xl text-xl leading-relaxed text-white/90 mb-12">
          La fuerza y el equilibrio se pierden rápido a partir de los 70. Pero se recuperan, si se trabajan bien. Da el primer paso: ven a conocer el centro, sin compromiso, y hablamos.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="tel:+34666003340"
            className="flex min-h-[56px] w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-white px-8 text-lg font-semibold text-primary shadow-sm transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            Llamar al centro
          </a>
          
          <a
            href="https://wa.me/34666003340?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20entrenamiento%20para%20mi%20familiar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[56px] w-full sm:w-auto items-center justify-center gap-3 rounded-full border-2 border-white px-8 text-lg font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <MessageCircle className="h-6 w-6" aria-hidden="true" />
            Escribir por WhatsApp
          </a>
        </div>
        
        <p className="text-base text-white/80">
          Te atiende Juan José personalmente. Sin bots ni call centers.
        </p>

      </div>
    </section>
  );
}
