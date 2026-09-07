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
  markingScheme: {
    correct: number;
    incorrect: number;
    unanswered: number;
  };
}
export const PYQ_PAPERS: PaperMeta[] = [
  // English
  { id: "pack-english-2025", title: "CUET UG 2025 English", year: 2025, subject: "English", section: "language", durationMinutes: 45, totalQuestions: 50, markingScheme: MARKING_SCHEME },
  { id: "pack-english-2026", title: "CUET UG 2026 English", year: 2026, subject: "English", section: "language", durationMinutes: 45, totalQuestions: 50, markingScheme: MARKING_SCHEME },
  
  // Physics
  { id: "pack-physics-2025", title: "CUET UG 2025 Physics", year: 2025, subject: "Physics", section: "domain", durationMinutes: 45, totalQuestions: 50, markingScheme: MARKING_SCHEME },
  { id: "pack-physics-2026", title: "CUET UG 2026 Physics", year: 2026, subject: "Physics", section: "domain", durationMinutes: 45, totalQuestions: 50, markingScheme: MARKING_SCHEME },
  // Chemistry
  { id: "pack-chemistry-2025", title: "CUET UG 2025 Chemistry", year: 2025, subject: "Chemistry", section: "domain", durationMinutes: 45, totalQuestions: 50, markingScheme: MARKING_SCHEME },
  { id: "pack-chemistry-2026", title: "CUET UG 2026 Chemistry", year: 2026, subject: "Chemistry", section: "domain", durationMinutes: 45, totalQuestions: 50, markingScheme: MARKING_SCHEME },
  // Mathematics
  { id: "pack-maths-2025", title: "CUET UG 2025 Mathematics", year: 2025, subject: "Mathematics", section: "domain", durationMinutes: 45, totalQuestions: 50, markingScheme: MARKING_SCHEME },
  { id: "pack-maths-2026", title: "CUET UG 2026 Mathematics", year: 2026, subject: "Mathematics", section: "domain", durationMinutes: 45, totalQuestions: 50, markingScheme: MARKING_SCHEME },
  // Biology
  { id: "pack-biology-2025", title: "CUET UG 2025 Biology", year: 2025, subject: "Biology", section: "domain", durationMinutes: 45, totalQuestions: 50, markingScheme: MARKING_SCHEME },
  { id: "pack-biology-2026", title: "CUET UG 2026 Biology", year: 2026, subject: "Biology", section: "domain", durationMinutes: 45, totalQuestions: 50, markingScheme: MARKING_SCHEME },
  // General Test
  { id: "pack-gat-2025", title: "CUET UG 2025 General Test", year: 2025, subject: "General Test", section: "general", durationMinutes: 60, totalQuestions: 50, markingScheme: MARKING_SCHEME },
  { id: "pack-gat-2026", title: "CUET UG 2026 General Test", year: 2026, subject: "General Test", section: "general", durationMinutes: 60, totalQuestions: 50, markingScheme: MARKING_SCHEME },
];
export const APP_NAME = "Prepare-X";
export const SUBJECTS: { id: string; name: string; section: "language" | "domain" | "general" }[] = [
  { id: "english", name: "English", section: "language" },
  { id: "physics", name: "Physics", section: "domain" },
  { id: "chemistry", name: "Chemistry", section: "domain" },
  { id: "mathematics", name: "Mathematics", section: "domain" },
  { id: "biology", name: "Biology", section: "domain" },
  { id: "general-test", name: "General Test", section: "general" },
];
// --- Missing Exports Fix ---
export const DEFAULT_MARKING = MARKING_SCHEME;
export const TIMER_OPTIONS: { label: string; value: number }[] = [
  { label: "15 min", value: 15 * 60 },
  { label: "30 min", value: 30 * 60 },
  { label: "45 min", value: 45 * 60 },
  { label: "60 min", value: 60 * 60 },
];
export const DIFFICULTY_OPTIONS = ["easy", "medium", "hard"];
export const QUESTION_COUNT_OPTIONS = [10, 20, 30, 40, 50];
export const PYQ_YEARS = [2024, 2025, 2026];
