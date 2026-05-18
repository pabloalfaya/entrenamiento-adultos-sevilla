import { Metadata } from "next";
import ScheduleGrid from "@/components/sections/ScheduleGrid";

export const metadata: Metadata = {
  title: "Horarios y plazas | Grupos reducidos | Entrena Sevilla",
  description:
    "Consulta el horario semanal de clases en grupo y la disponibilidad de plazas en Entrena Sevilla, Los Remedios.",
  openGraph: {
    title: "Horarios y plazas | Grupos reducidos | Entrena Sevilla",
    description:
      "Consulta el horario semanal de clases en grupo y la disponibilidad de plazas en Entrena Sevilla, Los Remedios.",
    url: "https://entrenasevilla.es/grupos/horarios",
    type: "website",
  },
};

export default function HorariosPage() {
  return <ScheduleGrid />;
}
