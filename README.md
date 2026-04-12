# services.paulatienza.dev

Freelance web design services site targeting US-based therapists and mental health professionals in private practice.

Built with Next.js, deployed on Vercel.

→ **[services.paulatienza.dev](https://services.paulatienza.dev)**

---

## Stack

- **Framework** — Next.js 14 (App Router)
- **Styling** — Vanilla CSS with CSS variables
- **Fonts** — Playfair Display + Nunito via Google Fonts
- **Forms** — Formspree (`@formspree/react`)
- **Deployment** — Vercel
- **Domain** — Namecheap (CNAME → Vercel)

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> The contact form works on localhost. Formspree accepts submissions from any origin on the free tier.

---

## Project Structure

```
app/
  page.tsx               # Root layout — imports and assembles all sections
  globals.css            # All styles and CSS variables
  layout.tsx             # Metadata, font imports
  components/
    Nav.tsx              # Sticky navigation
    Hero.tsx             # Hero with rotating sample site preview
    Pain.tsx             # Problem/why it matters section
    Included.tsx         # What's included in every project
    SampleWork.tsx       # 3 sample therapist sites with previews
    Packages.tsx         # Pricing — Starter / Professional / Premium
    Handled.tsx          # Full-service difference + onboarding timeline
    Process.tsx          # 4-step process section
    ContactForm.tsx      # Formspree-powered contact form
    Footer.tsx           # Footer

public/
  site-elena-marsh.html  # Sample site — Warm & Grounded (trauma therapist)
  site-james-okafor.html # Sample site — Bold & Modern (anxiety psychologist)
  site-claire-novak.html # Sample site — Soft & Calming (couples therapist)
```

---

## Sample Sites

Three fully designed static HTML sites used as portfolio samples. Each demonstrates a distinct design direction for different therapist personas.

| File | Style | Persona |
|------|-------|---------|
| `site-elena-marsh.html` | Warm & Grounded | Trauma therapist, Portland OR |
| `site-james-okafor.html` | Bold & Modern | Anxiety psychologist, New York |
| `site-claire-novak.html` | Soft & Calming | Couples therapist, Austin TX |

Accessible at `services.paulatienza.dev/site-elena-marsh.html` etc. after deployment.

---

## Pricing

| Package | Price |
|---------|-------|
| Starter | $1,200 |
| Professional | $1,950 |
| Premium | $2,800 |
| Website Care Plan | $150/mo |

---

## Related

- Main portfolio → [paulatienza.dev](https://paulatienza.dev)
- GitHub → [github.com/phatienza](https://github.com/phatienza)