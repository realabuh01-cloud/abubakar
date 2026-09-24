# Project 1 — About Me Portfolio

A personal portfolio website built with **vanilla HTML, CSS, and JavaScript** — no frameworks, no build tools.

## ✨ Features

- 🌙 **Dark / light theme** with persistence (localStorage + system preference detection)
- ⌨️ **Typing animation** for the hero name
- 📊 **Animated counters** in the hero stats
- 📈 **Skill bars** that animate when scrolled into view
- 🎴 **3D tilt effect** on project cards (mouse-tracking)
- 🎯 **Scroll-spy** navigation (active link updates as you scroll)
- 📬 **Contact form** with simulated submission
- 👀 **Reveal-on-scroll** animations via IntersectionObserver
- 📱 **Fully responsive** — works on mobile, tablet, and desktop

## 🛠️ Tech Stack

| Layer    | Tech |
|----------|------|
| Markup   | HTML5 |
| Styling  | CSS3 (custom properties, animations, grid, flexbox) |
| Behavior | Vanilla JavaScript (ES6+) |

## 🚀 Running Locally

Just open `index.html` in a browser — no build step required.

```bash
# Option 1: open directly
open index.html

# Option 2: serve with a local server (recommended)
python -m http.server 8080
# then visit http://localhost:8080
```

## 📂 File Structure

```
project1-about-me/
├── index.html      # Main page
├── styles.css      # All styles (themes, layout, animations)
├── script.js       # All interactivity
└── README.md
```

## 🎨 Customization

1. **Your name** — edit `fullName` in `script.js`
2. **Email / social links** — edit the `#contact` section in `index.html`
3. **Skills & levels** — edit `.skill-item` data-level attributes
4. **Colors** — edit CSS custom properties under `:root` in `styles.css`
