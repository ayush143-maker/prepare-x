"use client";

import { useEffect, useState, type ReactNode } from "react";
import { RotateCcw, Volume2 } from "lucide-react";

import { AppShell, PageShell } from "@/components/layout";
import { Card } from "@/components/ui";
import { sfx } from "@/lib/sound";
import {
  DEFAULT_SETTINGS,
  getSettings,
  saveSettings,
  type AppSettings,
} from "@/lib/settings";

function Toggle({
  on,
  label,
  onChange,
}: {
  on: boolean;
  label: string;
  onChange: (value: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={() => {
        sfx.click();
        onChange(!on);
      }}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
        on ? "bg-cyan-400" : "bg-white/15"
      }`}
    >
      <span
        className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${
          on ? "left-6" : "left-1"
        }`}
      />
    </button>
  );
}

function Row({
  title,
  desc,
  children,
}: {
  title: string;
  desc: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-zinc-100">{title}</p>
          <p className="mt-1 text-sm leading-6 text-zinc-400">{desc}</p>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    setSettings(getSettings());
  }, []);

  const update = (patch: Partial<AppSettings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      saveSettings(next);
      return next;
    });
  };

  return (
    <AppShell>
      <PageShell>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Settings
        </p>
        <h1 className="mt-3 text-4xl font-black md:text-5xl">
          App <span className="gradient-text">Preferences</span>
        </h1>
        <p className="mt-3 text-zinc-400">
          Quiz experience ko apne hisaab se control karo.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card className="space-y-5 p-6">
            <h2 className="text-lg font-semibold">General Settings</h2>

            <Row
              title="Theme"
              desc="Dark theme primary hai. Light theme jald hi fully polish hoke aayegi."
            >
              <div className="flex shrink-0 rounded-xl border border-white/10 bg-black/40 p-1">
                <button
                  type="button"
                  onClick={() => {
                    sfx.click();
                    update({ theme: "dark" });
                  }}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                    settings.theme === "dark"
                      ? "bg-cyan-400/20 text-cyan-200"
                      : "text-zinc-400"
                  }`}
                >
                  Dark
                </button>
                <button
                  type="button"
                  disabled
                  className="cursor-not-allowed rounded-lg px-4 py-2 text-sm font-semibold text-zinc-600"
                >
                  Light · soon
                </button>
              </div>
            </Row>

            <Row
              title="Default Timer"
              desc="Practice quiz start karte waqt default timer."
            >
              <div className="flex shrink-0 rounded-xl border border-white/10 bg-black/40 p-1">
                {[15, 30, 45, 60].map((minutes) => (
                  <button
                    key={minutes}
                    type="button"
                    onClick={() => {
                      sfx.click();
                      update({ defaultTimerMinutes: minutes });
                    }}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      settings.defaultTimerMinutes === minutes
                        ? "bg-cyan-400/20 text-cyan-200"
                        : "text-zinc-400"
                    }`}
                  >
                    {minutes}m
                  </button>
                ))}
              </div>
            </Row>

            <button
              type="button"
              onClick={() => {
                sfx.click();
                setSettings(DEFAULT_SETTINGS);
                saveSettings(DEFAULT_SETTINGS);
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:bg-white/10"
            >
              <RotateCcw className="h-4 w-4" />
              Reset to Defaults
            </button>
          </Card>

          <div className="space-y-6">
            <Card className="space-y-5 p-6">
              <Row
                title="Auto Submit"
                desc="Timer khatam hone par quiz automatically submit ho jayegi."
              >
                <Toggle
                  on={settings.autoSubmit}
                  label="Auto submit"
                  onChange={(v) => update({ autoSubmit: v })}
                />
              </Row>

              <Row
                title="Instant Explanation"
                desc="Option select karte hi explanation dikhegi — sirf un questions me jahan explanation available hai."
              >
                <Toggle
                  on={settings.instantExplanation}
                  label="Instant explanation"
                  onChange={(v) => update({ instantExplanation: v })}
                />
              </Row>

              <Row
                title="Explanation After Submit"
                desc="Submit ke baad har question ki explanation dikhegi."
              >
                <Toggle
                  on={settings.explanationAfterSubmit}
                  label="Explanation after submit"
                  onChange={(v) => update({ explanationAfterSubmit: v })}
                />
              </Row>

              <Row
                title="Sound Effects"
                desc="Option select, correct/wrong aur submit par subtle sounds."
              >
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={() => sfx.submit()}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:bg-white/10"
                  >
                    <Volume2 className="h-3.5 w-3.5" />
                    Test
                  </button>
                  <Toggle
                    on={settings.soundEffects}
                    label="Sound effects"
                    onChange={(v) => {
                      update({ soundEffects: v });
                      if (v) sfx.click();
                    }}
                  />
                </div>
              </Row>
            </Card>

            <Card className="p-6">
              <p className="font-semibold">Pro Tip</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Exam se 2 hafta pehle instant explanation band kar do aur auto
                submit on rakho. Isse real exam pressure simulate hota hai.
              </p>
            </Card>
          </div>
        </div>
      </PageShell>
    </AppShell>
  );
}
