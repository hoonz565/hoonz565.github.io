# Nguyễn Minh Hưng - Interactive Pixel Art Portfolio 🎮

Welcome to the repository of my personal portfolio website. This is not just a standard resume; it's an interactive, game-like "scrollytelling" experience built to showcase my journey as a Software Engineering student and Front-End developer.

**Live Demo:** [https://mhung.github.io](https://mhung.github.io)

---

## 🌟 The Concept

Inspired by classic side-scrolling platformers, this portfolio uses scroll position to drive character animation and background parallax effects. As you scroll down the page, the character moves forward in time and space, passing through different "Levels" of my life, including my education at HCMUT, technical skills, and featured projects.

### Core Features
* **Scrollytelling Mechanics:** Horizontal scrolling driven by vertical mouse scroll.
* **Parallax Environments:** Multi-layered pixel art backgrounds creating a sense of depth.
* **Sprite Animation:** Custom character walk cycles synced perfectly with the scroll progress.
* **Interactive Modals:** Project details and skill sets revealed as the character approaches specific zones.

---

## 🛠️ Tech Stack

This project is built from scratch utilizing modern web technologies:

* **Framework:** React 19 + Vite (for lightning-fast HMR and building)
* **Styling:** Tailwind CSS (configured for `image-rendering: pixelated` to preserve retro aesthetics)
* **Animation Engine:** GSAP (GreenSock Animation Platform) + ScrollTrigger plugin
* **Deployment:** GitHub Actions & GitHub Pages

