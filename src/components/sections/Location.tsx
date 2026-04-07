import { MapPin, ArrowRight, Bus, Car, Clock } from "lucide-react";

export default function Location() {
  return (
    <section id="ubicacion" className="bg-bg py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <h2 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-[40px]">
            Cómo llegar al centro
          </h2>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-ink-soft">
            Estamos en el corazón de Los Remedios, a pocos minutos a pie de Plaza de Cuba y con varias líneas de autobús cerca.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* Iframe Mapa */}
          <div className="relative aspect-square w-full md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-3xl shadow-lg border border-muted/50 bg-surface">
            <iframe
              title="Mapa de ubicación de Sevilla Senior Training en Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.3664749216443!2d-6.0022378!3d37.3811802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c0c22e430ab%3A0xc66c1f0d3b664d47!2sC.%20Virgen%20de%20Setefilla%2C%2012%2C%20Los%20Remedios%2C%2041011%20Sevilla!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>

          {/* Info Práctica */}
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col gap-8">
              
              <li className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-warm-glow text-primary">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-2">Dirección</h3>
                  <p className="text-lg text-ink-soft">
                    Calle Virgen de Setefilla, 12<br />
                    41011 Los Remedios, Sevilla
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-warm-glow text-primary">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-2">Acceso</h3>
                  <p className="text-lg text-ink-soft">
                    Entrada a pie de calle, sin escalones ni barreras arquitectónicas.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-warm-glow text-primary">
                  <Bus className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-2">Transporte público</h3>
                  <p className="text-lg text-ink-soft">
                    Líneas de bus cercanas en Asunción y República Argentina. Metrocentro y Cercanías a 10 minutos a pie.
                    {/* TODO: verificar líneas exactas con Juan José */}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-warm-glow text-primary">
                  <Car className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-2">Aparcamiento</h3>
                  <p className="text-lg text-ink-soft">
                    Zona azul en la calle y parkings públicos cercanos en Plaza de Cuba y Asunción.
                    {/* TODO: confirmar referencias de parking */}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-warm-glow text-primary">
                  <Clock className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-2">Horario</h3>
                  <p className="text-lg text-ink-soft">
                    Lunes a viernes · 9:00 – 20:00
                    {/* TODO: confirmar horario real */}
                  </p>
                </div>
              </li>

            </ul>

            <a
              href="https://maps.google.com/?q=Calle+Virgen+de+Setefilla+12+Sevilla"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[56px] w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-ink px-8 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-ink-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg mt-4"
            >
              Cómo llegar con Google Maps
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
