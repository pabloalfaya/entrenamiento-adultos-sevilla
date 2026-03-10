"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const SLIDES = [
  { src: "/handpage1.webp", alt: "Sevilla Senior Training" },
  { src: "/handpage2.avif", alt: "Entrenamiento adultos tercera edad" },
  { src: "/handpage3.avif", alt: "Ejercicio para mayores" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-slate-900/20 shadow-xl shadow-slate-900/20 backdrop-blur">
      <div className="aspect-[3/4] w-full">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== current}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === current
                ? "w-6 bg-white"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
