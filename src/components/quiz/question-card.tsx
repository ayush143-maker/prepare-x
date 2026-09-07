"use client";

import { useEffect, useRef } from "react";

import type { Question } from "@/types/question";

import { Badge } from "@/components/ui/badge";
import { getSettings } from "@/lib/settings";
import { sfx } from "@/lib/sound";

import { OptionCard } from "./option-card";

interface QuestionCardProps {
  question: Question;
  selectedIndex: number | null;
  submitted?: boolean;
  showExplanation?: boolean;
  onSelect: (index: number) => void;
}

export function QuestionCard({
  question,
  selectedIndex,
  submitted = false,
  showExplanation = false,
  onSelect,
}: QuestionCardProps) {
  const settings = getSettings();
  const prevSubmitted = useRef(submitted);

  useEffect(() => {
    if (submitted && !prevSubmitted.current) {
      if (selectedIndex === question.correctIndex) {
        sfx.correct();
      } else {
        sfx.wrong();
      }
    }
    prevSubmitted.current = submitted;
  }, [submitted, selectedIndex, question.correctIndex]);

  const showInstant =
    !submitted && settings.instantExplanation && selectedIndex !== null;
  const showAfterSubmit =
    submitted && (showExplanation || settings.explanationAfterSubmit);
  const showExplanationBox =
    (showInstant || showAfterSubmit) && Boolean(question.explanation);

  return (
    <div className="glass-card p-8">
      {question.passage ? (
        <div className="mb-6 max-h-64 overflow-y-auto rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Reading Passage
          </p>
          <p className="mt-2 whitespace-pre-line text-sm leading-6 text-zinc-300">
            {question.passage}
          </p>
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="info">{question.subject}</Badge>
        <Badge>{question.topic}</Badge>
        <Badge variant="warning" className="capitalize">
          {question.difficulty}
        </Badge>
      </div>

      <h2 className="mt-6 text-2xl font-semibold leading-9">
        {question.question}
      </h2>

      <div className="mt-8 space-y-4">
        {question.options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const isCorrect = submitted && index === question.correctIndex;
          const isIncorrect =
            submitted && isSelected && index !== question.correctIndex;

          return (
            <OptionCard
              key={`${question.id}-${index}`}
              option={option}
              index={index}
              selected={isSelected}
              correct={isCorrect}
              incorrect={isIncorrect}
              disabled={submitted}
              onSelect={(i) => {
                sfx.select();
                onSelect(i);
              }}
            />
          );
        })}
      </div>

      {showExplanationBox ? (
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm font-semibold text-cyan-300">Explanation</p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            {question.explanation}
          </p>
        </div>
      ) : null}
    </div>
  );
}
