# Anna Advisory — Independent Cross-Border Wealth Management

> A bespoke, multi-page digital platform engineered for private wealth preservation, family relocation finance, and European regulatory compliance (Berlin • Kyiv).

🔗 **Live Production Deployment:** [Visit Website](https://danielopezpiepoli.github.io/anna-advisory/) *(actualiza con tu enlace real si aplica)*

---

## 🏛️ Project Architecture & Purpose

**Anna Advisory** is an editorial, high-trust digital advisory platform designed specifically for founders, expatriates, and private families navigating complex cross-border financial and tax landscapes between Germany/Western Europe and Eastern European jurisdictions.

The project emphasizes a fee-only, fiduciary advisory standard (eliminating corporate banking commissions and third-party kickbacks), supported by strict compliance disclosures under European Union and German statutory frameworks.

---

## ✨ Key Technical & UX Highlights

* **Client-Side Localization Engine (i18n):**
  * Seamless 4-language support: **English (`en`)**, **German (`de`)**, **Ukrainian (`uk`)**, and **Russian (`ru`)**.
  * Persistent locale state management via `localStorage` and dynamic document-level language tagging (`document.documentElement.lang`).
  * Instant attribute parsing across dynamic text nodes (`data-i18n`) and input placeholder values (`data-i18n-ph`).

* **Modern CSS Design System & Fluid UI:**
  * Custom CSS Custom Properties design system with warm, authoritative corporate aesthetics (*Terracotta*, *Sage*, *Warm Parchment*).
  * Fluid typography utilizing modern CSS math functions (`clamp()`, `calc()`).
  * Dynamic header elevation and compression transitions triggered on viewport scroll (`.header.scrolled`).

* **Touch-Optimized Micro-Interactions:**
  * Dual-mode interactivity: CSS `:hover` for pointer-fine desktop interfaces and active tap toggle triggers (`.active`) for mobile touch devices.
  * Interactive portrait blur overlay and floating multi-language badge.
  * Fully responsive mobile navigation drawer with backdrop filtering and touch isolation.

* **European Statutory & Legal Compliance:**
  * Architecture structured in strict accordance with the German Digital Services Act (**§ 5 DDG - Digitale-Dienste-Gesetz**).
  * European General Data Protection Regulation (**GDPR / DSGVO**) privacy disclosures and engagement term frameworks (*Impressum*, *Datenschutzerklärung*, *Terms of Engagement*).

---

## 🛠️ Technology Stack

* **Markup & Semantics:** HTML5 (Accessible landmark regions, meta viewports, structured schema).
* **Styling & Layout:** Vanilla CSS3 (Custom Properties, CSS Grid, Flexbox, Glassmorphism, Zero CSS Framework Overhead).
* **Scripting:** Vanilla JavaScript (ES6+, DOM event delegation, dynamic translation engine, touch listeners).
* **Deployment & CI/CD:** GitHub Pages.

---

## 📂 Repository Structure

```text
├── index.html          # Main landing & practice overview
├── services.html       # Detailed advisory focus areas & engagement process
├── about.html          # Professional background, identity & perspective
├── philosophy.html     # Fiduciary manifesto & corporate desk comparison
├── faq.html            # Structured accordion for engagement FAQs
├── contact.html        # Confidential inquiry portal & direct channels
├── impressum.html      # German statutory legal notice (§ 5 DDG)
├── datenschutz.html    # GDPR / DSGVO European data privacy policy
├── terms.html          # Formal engagement framework & terms
├── style.css           # Global design system, typography & responsive layouts
└── main.js             # Client-side i18n translation dictionary & UI engine
```

---

## 🚀 Local Development Setup

To inspect or run this project locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/danielopezpiepoli/anna-advisory.git](https://github.com/danielopezpiepoli/anna-advisory.git)
   cd anna-advisory
   ```

2. **Serve locally:**
   Because the project uses pure vanilla web standards, you can open `index.html` directly in any modern browser, or run a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   ```

   Open `http://localhost:8000` in your browser.

---

## 👨‍💻 Author & Architecture

**Daniel López Piepoli**  
* Frontend Developer & Digital Architect | Data Science Enthusiast  
* 📍 Berlin, Germany  
* ✉️ [danielopezpiepoli@gmail.com](mailto:danielopezpiepoli@gmail.com)  
* 💼 [GitHub Profile](https://github.com/danielopezpiepoli)
