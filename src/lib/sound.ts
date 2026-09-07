import { useSettingsStore } from "@/store/settings-store";

let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    if (!ctx) {
      const AC = window.AudioContext || (window as any).webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === "suspended") void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

function isSoundEnabled(): boolean {
  try {
    return useSettingsStore.getState().soundEnabled;
  } catch {
    return true;
  }
}

function beep(freq: number, duration = 0.08, type: OscillatorType = "sine", gain = 0.04, delay = 0) {
  if (!isSoundEnabled()) return;
  const c = getCtx();
  if (!c) return;
  const t = c.currentTime + delay;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(gain, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  osc.connect(g);
  g.connect(c.destination);
  osc.start(t);
  osc.stop(t + duration + 0.03);
}

export const sfx = {
  click: () => beep(520, 0.06, "triangle", 0.03),
  select: () => beep(660, 0.07, "triangle", 0.035),
  correct: () => { beep(660, 0.09, "sine", 0.045); beep(880, 0.14, "sine", 0.045, 0.09); },
  wrong: () => { beep(220, 0.12, "sawtooth", 0.03); beep(150, 0.18, "sawtooth", 0.028, 0.1); },
  submit: () => { beep(440, 0.08, "triangle", 0.04); beep(554, 0.08, "triangle", 0.04, 0.09); beep(659, 0.14, "triangle", 0.04, 0.18); },
  tick: () => beep(980, 0.035, "square", 0.02),
};
