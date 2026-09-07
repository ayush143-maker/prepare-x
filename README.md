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
[![Questions](https://img.shields.io/badge/Questions-600%2B-blueviolet?style=flat-square)](#-the-arsenal)
[![Real Papers](https://img.shields.io/badge/Real%20Shift%20Papers-12-orange?style=flat-square)](#-the-arsenal)
[![AI Tokens](https://img.shields.io/badge/AI%20Tokens-3.8M%2B-ff69b4?style=flat-square)](#-insights--the-story)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#-license)

</div>

<br>

> 🔥 **No signup. No fees. Sirf practice.**
> Timed quizzes • Real PYQ shift papers • Negative marking • Topic-wise analytics • Exam ka pressure, browser me.

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
| 📄 **PYQ Mode** | Real shift papers, paper-wise attempt |
| 🎲 **Practice Mode** | Subject + topic + difficulty filters ke saath custom quiz |
| ❌ **Negative Marking** | +5 / −1 — bilkul CUET wala drama |
| 📊 **Analytics Dashboard** | Accuracy, weak topics, attempt history |
| 🧭 **Mark for Review** | Real exam jaisi navigation palette |
| 🌌 **Animated UI** | Moving grid, aurora glows, spotlight, shimmer — sab zinda hai |
| 📱 **Responsive** | Phone se laptop tak, kahin bhi lao |

---

## 📚 The Arsenal

| Subject | 2025 | 2026 | Total | Source |
|---|:---:|:---:|:---:|---|
|  English | 50 | 50 | **100** | Real shift PDFs (4 shifts) |
| ⚛️ Physics | 50 | 50 | **100** | Real shift PDFs + hard top-ups |
| 🧪 Chemistry | 50 | 50 | **100** | Real shift PDFs (3 sets) |
| 📐 Mathematics | 50 | 50 | **100** | Real shift PDFs (2 sets) |
| 🧬 Biology | 50 | 50 | **100** | Real shift PDFs (3 sets) |
| 🧠 General Test | 50 | 50 | **100** | Original CUET-pattern (hard) |
| **TOTAL** | **300** | **300** | **600** | ⚡ |

> 💡 Har RC passage sirf **ek baar** store hota hai (`passageId` system) — questions usko reference karte hain. Isliye packs halki hain aur fast load hoti hain.

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
    └── pyq/packs/          # ⭐ THE ARSENAL — ek JSON pack per subject
        ├── english-pack.json
        ├── physics-pack.json
        ├── chemistry-pack.json
        ├── maths-pack.json
        ├── biology-pack.json
        └── gat-pack.json
```

</details>

**Pack System ka jaadu:** naya paper add karna ho to **sirf JSON edit karo — koi code change nahi.** `papers[]`, `passages[]`, `questions[]` me entry daalo, app khud paper card bana deta hai. Poori guide repo me hai: **`PREPARE-X-PROJECT-BIBLE.txt`** 📖

---

## 🧠 Insights — The Story

> Ye project **AI pair-programming** ka experiment tha — aur ye seekha:

- 🤖 **~3.8M tokens** lage (input + output) — 6 subjects ka content, UI, debugging sab milake.
- 🧩 **Multi-agent workflow:** ek AI ne 600+ questions + explanations banaye, dusre ne TypeScript wiring theek ki. Dono ki apni jagah hai.
- 📄 **PDF → JSON pipeline:** real shift PDFs se RC passages + MCQs extract karke structured packs me convert kiya — passage dedup ke saath.
- 🧠 **Context is king:** AI ko adhoora context doge to wo guess karega (aur guess = build error 😅). Poora context = clean code.
- ⚠️ **Append-style edits JSON tod dete hain.** Comma miss = Vercel red. Isliye packs me hamesha full-file replace karo.

---

## 🗺️ Roadmap

- [x] 600+ question bank (6 subjects)
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

[![Star History](https://api.star-history.com/svg?repos=ayush143-maker/prepare-x&type=Date)](https://star-history.com/#ayush143-maker/prepare-x&Date)

<img src="https://capsule-render.vercel.app/api?type=waving&color=6366f1:e879f9:22d3ee&height=120&section=footer&text=Practice%20Hard,%20Score%20Harder&fontAlignY=65"/>

</div>
