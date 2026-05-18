export type ClassType = "GROUP" | "FUERZA TERAPEUTICA" | "GAP" | "ROUND";

export interface ClassSession {
  type: ClassType;
  instructor: string;
  enrolled: number;
  capacity: number;
}

export const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"] as const;

export const TIME_SLOTS = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "14:00",
  "15:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
] as const;

/** Horario semanal de clases en grupo */
export const SCHEDULE: Record<
  (typeof DAYS)[number],
  Partial<Record<(typeof TIME_SLOTS)[number], ClassSession>>
> = {
  Lunes: {
    "07:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 6, capacity: 10 },
    "08:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 2, capacity: 10 },
    "09:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 3, capacity: 10 },
    "10:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 7, capacity: 10 },
    "11:00": { type: "FUERZA TERAPEUTICA", instructor: "Maria Montero", enrolled: 11, capacity: 12 },
    "14:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 7, capacity: 12 },
    "17:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 9, capacity: 12 },
    "18:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 9, capacity: 12 },
    "19:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 12, capacity: 12 },
    "20:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 8, capacity: 12 },
    "21:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 10, capacity: 12 },
  },
  Martes: {
    "07:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 4, capacity: 10 },
    "08:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 2, capacity: 10 },
    "09:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 3, capacity: 10 },
    "10:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 6, capacity: 10 },
    "11:00": { type: "FUERZA TERAPEUTICA", instructor: "Maria Montero", enrolled: 4, capacity: 8 },
    "14:00": { type: "GAP", instructor: "Juan Moreno", enrolled: 4, capacity: 12 },
    "15:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 4, capacity: 12 },
    "17:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 6, capacity: 12 },
    "18:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 11, capacity: 12 },
    "19:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 10, capacity: 12 },
    "20:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 3, capacity: 12 },
    "21:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 1, capacity: 12 },
  },
  Miércoles: {
    "07:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 4, capacity: 10 },
    "08:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 1, capacity: 10 },
    "09:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 1, capacity: 10 },
    "10:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 2, capacity: 10 },
    "11:00": { type: "FUERZA TERAPEUTICA", instructor: "Maria Montero", enrolled: 11, capacity: 12 },
    "14:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 6, capacity: 12 },
    "17:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 6, capacity: 12 },
    "18:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 5, capacity: 12 },
    "19:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 11, capacity: 12 },
    "20:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 2, capacity: 12 },
    "21:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 4, capacity: 12 },
  },
  Jueves: {
    "07:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 0, capacity: 10 },
    "08:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 1, capacity: 10 },
    "09:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 3, capacity: 10 },
    "10:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 0, capacity: 10 },
    "11:00": { type: "FUERZA TERAPEUTICA", instructor: "Maria Montero", enrolled: 5, capacity: 8 },
    "14:00": { type: "GROUP", instructor: "Maria Montero", enrolled: 4, capacity: 10 },
    "15:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 2, capacity: 12 },
    "17:00": { type: "GAP", instructor: "Juan Moreno", enrolled: 5, capacity: 12 },
    "18:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 10, capacity: 12 },
    "19:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 12, capacity: 12 },
    "20:00": { type: "ROUND", instructor: "Juan José Alfaya", enrolled: 5, capacity: 15 },
    "21:00": { type: "GROUP", instructor: "Juan Moreno", enrolled: 1, capacity: 12 },
  },
  Viernes: {
    "10:00": { type: "GAP", instructor: "Maria Montero", enrolled: 3, capacity: 12 },
    "11:00": { type: "GAP", instructor: "Maria Montero", enrolled: 1, capacity: 12 },
  },
};

export const CLASS_COLORS: Record<ClassType, { bg: string; text: string }> = {
  GROUP: { bg: "bg-[#c8e6c9]", text: "text-ink" },
  "FUERZA TERAPEUTICA": { bg: "bg-[#b2ebf2]", text: "text-ink" },
  GAP: { bg: "bg-[#fff59d]", text: "text-ink" },
  ROUND: { bg: "bg-[#ffccbc]", text: "text-ink" },
};
