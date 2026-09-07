"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

interface ConfettiTriggerProps {
  fire: boolean;
}

export function ConfettiTrigger({ fire }: ConfettiTriggerProps) {
  useEffect(() => {
    if (!fire) return;

    // Center burst
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#6366f1", "#e879f9", "#22d3ee", "#ffffff"],
    });

    // Side cannons
    const timeout = setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#6366f1", "#e879f9", "#22d3ee"],
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#6366f1", "#e879f9", "#22d3ee"],
      });
    }, 250);

    return () => clearTimeout(timeout);
  }, [fire]);

  return null;
}
