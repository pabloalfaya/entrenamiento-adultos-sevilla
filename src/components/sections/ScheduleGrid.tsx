import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  DAYS,
  TIME_SLOTS,
  SCHEDULE,
  CLASS_COLORS,
  type ClassSession,
} from "@/lib/schedule-data";

function ClassCard({ session }: { session: ClassSession }) {
  const colors = CLASS_COLORS[session.type];
  const isFull = session.enrolled >= session.capacity;

  return (
    <div
      className={`rounded-lg p-2 sm:p-3 min-h-[72px] flex flex-col justify-between ${colors.bg} ${colors.text}`}
    >
      <div>
        <p className="font-bold text-xs sm:text-sm leading-tight">{session.type}</p>
        <p className="text-[10px] sm:text-xs mt-0.5 opacity-90 leading-tight">
          {session.instructor}
        </p>
      </div>
      <p
        className={`text-xs sm:text-sm font-semibold mt-1 ${isFull ? "text-primary" : ""}`}
      >
        {session.enrolled}/{session.capacity}
        {isFull && <span className="sr-only"> — completo</span>}
      </p>
    </div>
  );
}

export default function ScheduleGrid() {
  return (
    <div className="bg-[#f5f7fb] min-h-screen">
      <section className="py-10 md:py-14 bg-bg border-b border-muted/50">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Link
            href="/grupos"
            className="inline-flex items-center gap-2 text-ink-soft hover:text-primary font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver a Grupos reducidos
          </Link>
          <h1 className="font-serif text-3xl font-bold text-ink sm:text-4xl md:text-5xl">
            Horarios y plazas
          </h1>
          <p className="mt-4 text-lg text-ink-soft max-w-2xl">
            Consulta la disponibilidad de cada clase. Los números indican plazas ocupadas
            sobre el aforo máximo.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {(
              Object.entries(CLASS_COLORS) as [
                keyof typeof CLASS_COLORS,
                (typeof CLASS_COLORS)[keyof typeof CLASS_COLORS],
              ][]
            ).map(([type, { bg }]) => (
              <span
                key={type}
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${bg} text-ink`}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6 overflow-x-auto">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-[56px_repeat(5,1fr)] gap-1 sm:gap-2">
              <div className="sticky left-0 z-10 bg-[#f5f7fb]" />
              {DAYS.map((day) => (
                <div
                  key={day}
                  className="text-center font-bold text-ink text-sm sm:text-base py-2 bg-white rounded-t-lg"
                >
                  {day}
                </div>
              ))}

              {TIME_SLOTS.map((time) => (
                <div key={time} className="contents">
                  <div className="sticky left-0 z-10 flex items-center justify-center bg-white rounded-lg text-xs sm:text-sm font-semibold text-ink-soft py-2">
                    {time}
                  </div>
                  {DAYS.map((day) => {
                    const session = SCHEDULE[day][time];
                    return (
                      <div key={`${day}-${time}`} className="min-h-[80px] p-0.5">
                        {session ? (
                          <ClassCard session={session} />
                        ) : (
                          <div className="h-full min-h-[72px] rounded-lg bg-white/50" />
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 text-center px-4">
        <p className="text-ink-soft mb-6">
          ¿Quieres reservar plaza en alguna clase?
        </p>
        <a
          href="https://wa.me/34666003340?text=Hola%20Juan%20Jos%C3%A9%2C%20me%20gustar%C3%ADa%20apuntarme%20a%20los%20entrenamientos%20en%20grupo."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-primary px-8 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-primary-hover"
        >
          Reservar por WhatsApp
        </a>
      </section>
    </div>
  );
}
