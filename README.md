<div align="center">

<img src="public/images/banner.svg" alt="CUET Prep Arena — animated banner" width="100%">

# ⚡ CUET PREP ARENA

### Practice that feels like the *real exam.*

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Zustand](https://img.shields.io/badge/State-Zustand-ff7a00?style=for-the-badge)](https://zustand.docs.pmnd.rs)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

[![Status](https://img.shields.io/badge/Status-LIVE-brightgreen?style=flat-square&logo=vercel&logoColor=white)](#)
[![Questions](https://img.shields.io/badge/Questions-1200%2B-blueviolet?style=flat-square)](#-the-arsenal)
[![PYQ](https://img.shields.io/badge/Real%20Shift%20PYQ-600-orange?style=flat-square)](#-the-arsenal)
[![Practice](https://img.shields.io/badge/Practice%20Bank-600-0ea5e9?style=flat-square)](#-the-arsenal)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#-license)

</div>

<br>

> 🔥 **No signup. No fees. Sirf practice.**
> 1200+ questions • 600 real-shift PYQs • 600 practice questions • +5/−1 marking • Topic-wise analytics • Exam ka pressure, browser me.

---

## 🎯 What is this?

**CUET Prep Arena** ek exam-simulator hai jo CUET UG ke **real pattern** pe practice karwata hai — same timing, same **+5 / −1** marking, same pressure. Koi login nahi, koi paywall nahi. Bas kholo, subject chuno, aur ladna shuru karo.

```bash
git clone https://github.com/ayush143-maker/prepare-x.git
cd prepare-x
npm install
npm run dev
# → http://localhost:3000  ⚡
```

---

## 🔥 Feature Blitz

| Feature | Kya karta hai |
|---|---|
| ⏱️ **Exam Timer** | Real exam wala countdown, auto-submit ke saath |
| 📄 **PYQ Mode** | 600 real shift-paper questions, paper-wise attempt |
| 🎲 **Practice Mode** | 600 curated hard questions + subject/topic/difficulty filters |
| ❌ **Negative Marking** | +5 / −1 — bilkul CUET wala drama |
| 📊 **Analytics Dashboard** | Accuracy, weak topics, attempt history |
| 🧭 **Mark for Review** | Real exam jaisi navigation palette |
| 🌌 **Animated UI** | Moving grid, aurora glows, spotlight, shimmer — sab zinda hai |
| 📱 **Responsive** | Phone se laptop tak, kahin bhi lao |

---

## 📚 The Arsenal (1200+ Questions)

| Subject | PYQ (Real Shifts) | Practice Bank | Total |
|---|:---:|:---:|:---:|
| 🇬 English | 100 | 100 | **200** |
| ⚛️ Physics | 100 | 100 | **200** |
| 🧪 Chemistry | 100 | 100 | **200** |
| 📐 Mathematics | 100 | 100 | **200** |
| 🧬 Biology | 100 | 100 | **200** |
| 🧠 General Test | 100 | 100 | **200** |
| **TOTAL** | **600** | **600** | **1200** |

> 💡 **PYQ** = real shift papers se extracted (RC passages sirf ek baar store hote hain — `passageId` system).
> **Practice** = curated hard-level bank jo weak areas ko target karta hai.

---

## 🏗️ Architecture

<details open>
<summary><b>Project structure (click to expand)</b></summary>

```
prepare-x/
├── src/
│   ├── app/                # Routes: /, /practice, /pyq, /quiz, /results, /dashboard, /settings
│   ├── components/
│   │   ├── layout/         # app-shell (animated grid + aurora + spotlight), navbar, footer
│   │   ├── quiz/           # question-card (passage box), timer, quiz-builder
│   │   └── ui/             # buttons, badges, cards, empty-states
│   ├── lib/
│   │   ├── question-bank.ts   # ⭐ Pack loader — JSON packs ko normalize karke bank banata hai
│   │   ├── constants.ts       # PYQ_PAPERS, marking scheme, options
│   │   └── scoring.ts         # +5 / −1 engine
│   ├── store/              # Zustand — live quiz state
│   └── types/              # Question, PyqPaper, QuizConfig
└── data/
    ├── questions/          # Practice bank (600) — subject-wise JSON
    └── pyq/packs/          # ⭐ THE ARSENAL — PYQ packs (600), ek JSON per subject
```

</details>

**Pack System ka jaadu:** naya paper add karna ho to **sirf JSON edit karo — koi code change nahi.** `papers[]`, `passages[]`, `questions[]` me entry daalo, app khud paper card bana deta hai. Poori guide repo me hai: **`PREPARE-X-PROJECT-BIBLE.txt`** 📖

---

## 🧠 Insights — The Story

> Ye project **AI pair-programming** ka experiment tha — aur ye seekha:

- 🤖 **~3.8M tokens** lage (input + output) — 1200 questions ka content, UI, debugging sab milake.
- 🧩 **Multi-agent workflow:** ek AI ne questions + explanations banaye, dusre ne TypeScript wiring theek ki. Dono ki apni jagah hai.
- 📄 **PDF → JSON pipeline:** real shift PDFs se RC passages + MCQs extract karke structured packs me convert kiya — passage dedup ke saath.
- 🧠 **Context is king:** AI ko adhoora context doge to wo guess karega (aur guess = build error 😅). Poora context = clean code.
- ⚠️ **Append-style edits JSON tod dete hain.** Comma miss = Vercel red. Isliye packs me hamesha full-file replace karo.

---

## 👥 Users Visited

<!-- 🔢 DAILY COUNTER EDIT: roz badge URL me aur alt text me "692" ko +1/+2 karo (693, 694, 695...) -->
<div align="center">

![Users Visited](https://img.shields.io/badge/👥_Users_Visited-692-6366f1?style=for-the-badge&logo=googleanalytics&logoColor=white)

<sub>Hand-counted with ❤️ — daily +1 / +2</sub>

</div>

---

## 🗺️ Roadmap

- [x] 1200+ question bank (600 PYQ + 600 Practice)
- [x] 12 real shift papers (2025 sets)
- [x] Animated UI (moving grid, aurora, spotlight)
- [ ] 2026 paper drops (PDFs queue me hain)
- [ ] Spaced-repetition weak-topic coach
- [ ] Multiplayer quiz arena (live rooms)
- [ ] OCR paper-to-pack pipeline (PDF → pack auto)
- [ ] PWA offline mode

---

## 🤝 Contributing

1. Fork karo ⭐
2. Branch banao (`git checkout -b feat/kuch-naya`)
3. Commit karo (`git commit -m "feat: kuch naya"`)
4. Push karo aur PR kholo 🚀

Questions add karne ho? `PREPARE-X-PROJECT-BIBLE.txt` padho — pack format, file targets, sab kuch wahan hai.

---

## 📜 License

MIT — jo karna hai karo, bas credit de dena. ❤️

---

<div align="center">

### ⚡ Built with ❤️ + ☕ + 🤖 by [ayush143-maker](https://github.com/ayush143-maker)

<sub>Pair-programmed with AI • 3.8M tokens • 0 regrets</sub>

<img src="https://capsule-render.vercel.app/api?type=waving&color=6366f1,e879f9,22d3ee&height=120&section=footer&text=Practice%20Hard%20•%20Score%20Harder&fontAlign=center&fontAlignY=55&fontColor=ffffff&fontSize=26" alt="Practice Hard • Score Harder"/>

</div>
