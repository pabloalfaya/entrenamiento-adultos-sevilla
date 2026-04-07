import { GraduationCap, Clock, MapPin, HandHeart } from "lucide-react";

export default function TrustBar() {
  const items = [
    { icon: GraduationCap, text: "Graduado CAFD" },
    { icon: Clock, text: "+5 años con mayores" },
    { icon: MapPin, text: "Local accesible" },
    { icon: HandHeart, text: "Primera sesión gratuita" },
  ];

  return (
    <section className="bg-warm-glow py-8 border-y border-muted/50">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Mobile: Grid 2x2. Desktop: 1 fila */}
        <ul className="grid grid-cols-2 gap-y-6 gap-x-4 md:flex md:flex-wrap md:items-center md:justify-center md:gap-8 lg:gap-12">
          {items.map((item, i) => (
            <li 
              key={item.text} 
              className="flex items-center gap-3 text-base font-semibold text-ink"
            >
              <item.icon className="h-6 w-6 text-primary shrink-0" aria-hidden="true" />
              <span>{item.text}</span>
              
              {/* Punto separador solo en desktop y no en el último item */}
              {i < items.length - 1 && (
                <span className="hidden md:inline-block ml-8 lg:ml-12 text-ink-soft opacity-30" aria-hidden="true">
                  •
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
