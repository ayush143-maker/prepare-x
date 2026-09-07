export interface AppSettings {
  theme: "dark" | "light";
  defaultTimerMinutes: number;
  autoSubmit: boolean;
  instantExplanation: boolean;
  explanationAfterSubmit: boolean;
  soundEffects: boolean;
}

export const DEFAULT_SETTINGS: AppSettings = {
  theme: "dark",
  defaultTimerMinutes: 15,
  autoSubmit: true,
  instantExplanation: false,
  explanationAfterSubmit: true,
  soundEffects: true,
};

const KEY = "cpa-settings";

export function getSettings(): AppSettings {
  try {
    if (typeof window === "undefined") return DEFAULT_SETTINGS;
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...(JSON.parse(raw) as Partial<AppSettings>) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: AppSettings): void {
  try {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(KEY, JSON.stringify(settings));
  } catch {
    // ignore
  }
}
