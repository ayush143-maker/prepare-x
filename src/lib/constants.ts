export const MARKING_SCHEME = {
  correct: 5,
  incorrect: -1,
  unanswered: 0
};

export interface PaperMeta {
  id: string;
  title: string;
  year: number;
  subject: string;
  section: "language" | "domain" | "general";
  durationMinutes: number;
  totalQuestions: number;
}

export const PYQ_PAPERS: PaperMeta[] = [
  // English
  { id: "pack-english-2025", title: "CUET UG 2025 English", year: 2025, subject: "English", section: "language", durationMinutes: 45, totalQuestions: 50 },
  { id: "pack-english-2026", title: "CUET UG 2026 English", year: 2026, subject: "English", section: "language", durationMinutes: 45, totalQuestions: 50 },
  
  // Physics
  { id: "pack-physics-2025", title: "CUET UG 2025 Physics", year: 2025, subject: "Physics", section: "domain", durationMinutes: 45, totalQuestions: 50 },
  { id: "pack-physics-2026", title: "CUET UG 2026 Physics", year: 2026, subject: "Physics", section: "domain", durationMinutes: 45, totalQuestions: 50 },

  // Chemistry
  { id: "pack-chemistry-2025", title: "CUET UG 2025 Chemistry", year: 2025, subject: "Chemistry", section: "domain", durationMinutes: 45, totalQuestions: 50 },
  { id: "pack-chemistry-2026", title: "CUET UG 2026 Chemistry", year: 2026, subject: "Chemistry", section: "domain", durationMinutes: 45, totalQuestions: 50 },

  // Mathematics
  { id: "pack-maths-2025", title: "CUET UG 2025 Mathematics", year: 2025, subject: "Mathematics", section: "domain", durationMinutes: 45, totalQuestions: 50 },
  { id: "pack-maths-2026", title: "CUET UG 2026 Mathematics", year: 2026, subject: "Mathematics", section: "domain", durationMinutes: 45, totalQuestions: 50 },

  // Biology
  { id: "pack-biology-2025", title: "CUET UG 2025 Biology", year: 2025, subject: "Biology", section: "domain", durationMinutes: 45, totalQuestions: 50 },
  { id: "pack-biology-2026", title: "CUET UG 2026 Biology", year: 2026, subject: "Biology", section: "domain", durationMinutes: 45, totalQuestions: 50 },

  // General Test
  { id: "pack-gat-2025", title: "CUET UG 2025 General Test", year: 2025, subject: "General Test", section: "general", durationMinutes: 60, totalQuestions: 50 },
  { id: "pack-gat-2026", title: "CUET UG 2026 General Test", year: 2026, subject: "General Test", section: "general", durationMinutes: 60, totalQuestions: 50 },
];

export const APP_NAME = "Prepare-X";
export const SUBJECTS = ["English", "Physics", "Chemistry", "Mathematics", "Biology", "General Test"];
