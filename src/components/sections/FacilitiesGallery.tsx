import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

const HERO: GalleryImage = {
  src: "/Instalaciones1.jpeg",
  alt: "Vista general del centro Entrena Sevilla con zona de entrenamiento funcional y césped artificial",
  priority: true,
};

const HIGHLIGHTS: GalleryImage[] = [
  {
    src: "/Instalaciones9.jpeg",
    alt: "Zona de cardio con remo y bicicleta de aire, junto a la entrada del estudio",
  },
  {
    src: "/Instalaciones8.jpeg",
    alt: "Espacio de entrenamiento funcional con espejo, escalera sueca y césped artificial",
  },
];

const GALLERY: GalleryImage[] = [
  {
    src: "/Instalaciones2.jpeg",
    alt: "Zona de mancuernas organizadas frente al espejo",
    className: "col-span-2 md:col-span-2",
  },
  {
    src: "/Instalaciones3.jpeg",
    alt: "Sala principal con remo, TRX y espejo con el lema del centro",
  },
  {
    src: "/Instalaciones4.jpeg",
    alt: "Material funcional sobre césped artificial: mancuernas, foam roller y bandas",
  },
  {
    src: "/Instalaciones5.jpeg",
    alt: "Barra olímpica con discos y cajón pliométrico en zona de fuerza",
  },
  {
    src: "/Instalaciones6.jpeg",
    alt: "Escalera sueca con TRX, bandas elásticas y césped artificial",
  },
  {
    src: "/Instalaciones7.jpeg",
    alt: "Máquina Air Ski junto a ventanal con luz natural",
  },
];

function Photo({
  image,
  sizes,
  aspect = "aspect-[4/3]",
}: {
  image: GalleryImage;
  sizes: string;
  aspect?: string;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl bg-surface shadow-md ring-1 ring-muted/40 ${image.className ?? ""} ${aspect}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={image.priority}
        sizes={sizes}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
    </figure>
  );
}

export default function FacilitiesGallery() {
  return (
    <section className="py-12 md:py-20 bg-bg" aria-label="Galería de instalaciones">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-accent mb-3">
          El centro
        </p>
        <h1 className="font-serif text-3xl font-bold text-center text-ink sm:text-4xl mb-4">
          Conoce el espacio
        </h1>
        <p className="text-center text-lg text-ink-soft max-w-2xl mx-auto mb-12">
          Instalaciones amplias, luminosas y equipadas para entrenamiento personal,
          en pareja y en grupos reducidos.
        </p>

        {/* Foto principal */}
        <Photo
          image={HERO}
          sizes="(max-width: 1280px) 100vw, 1280px"
          aspect="aspect-[4/3] sm:aspect-[21/9] min-h-[280px] sm:min-h-[360px]"
        />

        {/* Destacadas: 9 y 8 */}
        <div className="mt-4 grid gap-4 md:grid-cols-5 md:grid-rows-2">
          <Photo
            image={HIGHLIGHTS[0]}
            sizes="(max-width: 768px) 100vw, 50vw"
            aspect="aspect-[3/4] md:col-span-2 md:row-span-2 min-h-[320px] md:min-h-0"
          />
          <Photo
            image={HIGHLIGHTS[1]}
            sizes="(max-width: 768px) 100vw, 50vw"
            aspect="aspect-[4/3] md:col-span-3 md:row-span-2 min-h-[240px] md:min-h-0"
          />
        </div>

        {/* Resto: 2, 3, 4, 5, 6, 7 */}
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY.map((image) => (
            <Photo
              key={image.src}
              image={image}
              sizes="(max-width: 768px) 50vw, 33vw"
              aspect={`aspect-[4/3] min-h-[160px] ${image.className ?? ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
