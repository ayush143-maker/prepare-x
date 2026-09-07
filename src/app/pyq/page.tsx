"use client";

import { useMemo, useState } from "react";
import { Clock, FileSearch, GraduationCap } from "lucide-react";

import { AppShell, PageShell } from "@/components/layout";
import { PaperCard, YearFilter } from "@/components/pyq";
import { Card, SectionHeading } from "@/components/ui";
import { EmptyState } from "@/components/ui/empty-state";
import { PYQ_PAPERS } from "@/lib/constants";
import { packPapers } from "@/lib/question-bank";

const ALL_YEARS = [2022, 2023, 2024, 2025, 2026];

export default function PyqPage() {
  const [activeYear, setActiveYear] = useState<number | null>(null);

  const allPapers = useMemo(() => [...PYQ_PAPERS, ...packPapers], []);

  const filteredPapers = useMemo(() => {
    if (!activeYear) {
      return allPapers;
    }

    return allPapers.filter((paper) => paper.year === activeYear);
  }, [activeYear, allPapers]);

  return (
    <AppShell>
      <PageShell>
        <SectionHeading
          eyebrow="PYQ Mode"
          title={
            <>
              Previous Year{" "}
              <span className="gradient-text">Question Papers</span>
            </>
          }
          subtitle="Exam-like timer, marking scheme aur detailed analysis ke saath PYQ practice karo."
        />

        <div className="mt-8">
          <YearFilter
            years={ALL_YEARS}
            activeYear={activeYear}
            onSelect={setActiveYear}
          />
        </div>

        {filteredPapers.length === 0 ? (
          activeYear ? (
            <div className="mt-10">
              <Card className="flex flex-col items-start gap-6 p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10">
                    <Clock className="h-6 w-6 text-amber-300" />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">
                      CUET UG {activeYear} Papers
                    </h2>
                    <p className="mt-1 text-sm text-zinc-400">
                      Coming Soon — ye papers jald hi arena me enter karenge.
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-6 text-zinc-500">
                  Tab tak 2025 ke real shift papers practice karo. Naye saal
                  ke papers jaise hi ready honge, ye card apne aap real
                  papers me badal jayega.
                </p>
              </Card>
            </div>
          ) : (
            <div className="mt-10">
              <EmptyState
                icon={FileSearch}
                title="No papers yet"
                description="Abhi tak koi PYQ paper load nahi hua hai. Pack files me papers add hote hi yahan dikhne lagenge."
              />
            </div>
          )
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredPapers.map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>
        )}

        <Card className="mt-10 flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-fuchsia-300" />
              <h2 className="text-xl font-semibold">
                Exam Mode Recommended
              </h2>
            </div>

            <p className="mt-2 max-w-2xl text-sm text-zinc-400">
              PYQ solve karte waqt full timer on rakho. Real exam pressure me
              accuracy aur time management dono improve hota hai.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-zinc-300">
            <Clock className="h-5 w-5 text-emerald-300" />
            Target: 60 seconds per question
          </div>
        </Card>
      </PageShell>
    </AppShell>
  );
}
