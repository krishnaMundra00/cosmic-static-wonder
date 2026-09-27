import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";
import medicineAmber from "@/assets/medicine-amber.jpg";
import medicineBlister from "@/assets/medicine-blister.jpg";
import medicineDropper from "@/assets/medicine-dropper.jpg";
import medicineVial from "@/assets/medicine-vial.jpg";
import { DnaScene } from "@/components/DnaScene";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Felicity Pharma — Trusted Science. Better Days." },
      { name: "description", content: "An India-focused pharmaceutical company committed to quality medicines, responsible healthcare, and scientific discipline." },
      { property: "og:title", content: "Felicity Pharma — Trusted Science. Better Days." },
      { property: "og:description", content: "Explore Felicity Pharma's approach to quality, access, people, and responsible medicine discovery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { name: "Cardiolin", category: "Cardiovascular", code: "VY—014", form: "Tablet", image: medicineAmber },
  { name: "Aerolux", category: "Respiratory", code: "VY—027", form: "Oral suspension", image: medicineDropper },
  { name: "Metabrin", category: "Metabolic", code: "VY—033", form: "Capsule", image: medicineBlister },
  { name: "Dermaclen", category: "Dermatology", code: "VY—041", form: "Topical solution", image: medicineVial },
  { name: "Bactra", category: "Clinical care", code: "VY—052", form: "Single-dose vial", image: medicineAmber },
];

const socialLinks = [
  { label: "X", icon: <span className="text-sm font-semibold">X</span> },
  { label: "LinkedIn", icon: <Linkedin aria-hidden="true" size={17} strokeWidth={1.7} /> },
  { label: "Instagram", icon: <Instagram aria-hidden="true" size={17} strokeWidth={1.7} /> },
];

function Index() {
  const contactHref = "mailto:?subject=Enquiry%20for%20Felicity%20Pharma";
  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground antialiased selection:bg-signal selection:text-ivory">
      <header className="absolute inset-x-0 top-0 z-40 text-ivory">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 lg:px-12">
          <a href="#top" className="flex items-baseline gap-2" aria-label="Felicity Pharma home">
            <span className="font-display text-3xl leading-none">Felicity</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/60">Pharma</span>
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-9 text-sm md:flex">
            <a href="#portfolio" className="text-ivory/65 transition-colors hover:text-ivory">Portfolio</a>
            <a href="#story" className="text-ivory/65 transition-colors hover:text-ivory">Our story</a>
            <a href={contactHref} className="text-ivory/65 transition-colors hover:text-ivory">Contact</a>
          </nav>
          <a href={contactHref} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ivory/25 px-3 py-2 text-xs transition-colors hover:bg-signal sm:px-5 sm:py-2.5 sm:text-sm">
            Contact Us
          </a>
        </div>
      </header>

      <section id="top" className="hero-stage relative overflow-hidden text-ivory sm:min-h-[850px] lg:min-h-[750px] lg:h-[88svh] lg:max-h-[940px]">
        <div className="glass-panel glass-panel-one" />
        <div className="glass-panel glass-panel-two" />
        <div className="mx-auto grid max-w-[1440px] content-start px-6 pb-7 pt-22 sm:min-h-[850px] sm:content-center sm:gap-x-8 sm:pt-24 lg:h-full lg:min-h-0 lg:grid-cols-12 lg:px-12 lg:pt-20">
          <div className="relative z-10 lg:col-span-7 lg:row-start-1 lg:self-end">
            <div className="rise flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ivory/65">
              <span className="h-px w-10 bg-signal" />
              Maharashtra · India
            </div>
            <h1 className="rise-two mt-4 max-w-[9ch] text-balance font-display text-[clamp(3.75rem,16vw,6rem)] leading-[0.9] sm:mt-8 lg:text-[8.5rem]">
              Felicity<br /><em className="text-founder-green">Pharma.</em>
            </h1>
            <p className="rise-three mt-5 font-display text-2xl text-ivory/90 sm:text-3xl">Trusted Science. Better Days.</p>
          </div>
          <div className="relative z-10 mt-4 h-[160px] w-full min-w-0 min-[360px]:h-[205px] sm:h-[380px] lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:h-[min(70vh,650px)]" role="img" aria-label="Slowly rotating three-dimensional DNA double helix">
            <DnaScene />
          </div>
          <div className="relative z-10 lg:col-span-7 lg:row-start-2 lg:self-start">
            <p className="rise-three mt-1 max-w-[48ch] text-pretty text-sm leading-relaxed text-ivory/80 sm:mt-8 sm:text-base lg:text-lg">
              We shape dependable medicines through scientific discipline, responsible standards, and a clear focus on the people they serve.
            </p>
            <div className="rise-three mt-4 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
              <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full bg-signal px-4 py-3 text-xs text-ivory transition-colors hover:bg-ivory hover:text-ink min-[360px]:px-6 min-[360px]:text-sm">
                Explore medicines <ArrowRight aria-hidden="true" size={16} />
              </a>
              <a href="#story" className="rounded-full border border-ivory/35 px-4 py-3 text-xs transition-colors hover:bg-ivory/10 min-[360px]:px-6 min-[360px]:text-sm">Our story</a>
            </div>
          </div>
        </div>
        <a href="#portfolio" aria-label="Scroll to medicine portfolio" className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 text-[10px] uppercase tracking-[0.28em] text-ivory/50 sm:block">Scroll ↓</a>
      </section>

      <section id="portfolio" className="portfolio-stage border-b border-border py-20 lg:py-28">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-6 lg:flex-row lg:items-end lg:px-12">
          <div className="flex items-start gap-5">
            <span className="font-display text-7xl leading-none text-signal lg:text-8xl">01</span>
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-mineral">Medicine portfolio</p>
              <h2 className="max-w-[16ch] text-balance font-display text-5xl leading-[0.94] lg:text-6xl">Formulations, held in motion.</h2>
              <p className="mt-5 max-w-[46ch] text-sm leading-relaxed text-foreground/60">A first look at our developing portfolio. Names, packs, and compositions shown here are illustrative pending approved product material.</p>
            </div>
          </div>
          <span className="text-sm text-mineral">Drag or scroll to explore →</span>
        </div>
        <div className="portfolio-viewport mt-14 overflow-hidden">
          <div className="portfolio-track flex w-max gap-6 px-6 lg:px-12">
            {[...products, ...products].map((product, index) => (
              <article key={`${product.code}-${index}`} className="product-card w-[290px] shrink-0 rounded-2xl bg-card p-4 ring-1 ring-foreground/10 sm:w-[320px]">
                <img src={product.image} alt={`Illustrative ${product.name} medicine packaging`} loading="lazy" width={816} height={816} className="aspect-square w-full rounded-xl object-cover" />
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.24em] text-signal">{product.category}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/35">{product.code}</span>
                </div>
                <h3 className="mt-2 font-display text-3xl">{product.name}</h3>
                <div className="mt-3 flex items-center justify-between border-t border-border pt-3 text-xs text-foreground/55">
                  <span>{product.form}</span><ArrowRight aria-hidden="true" size={14} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="story-stage py-20 text-ivory lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-6 md:grid-cols-2 md:gap-20 lg:px-12">
          <div>
            <span className="font-display text-7xl leading-none text-signal lg:text-8xl">02</span>
            <p className="mt-7 text-[10px] uppercase tracking-[0.28em] text-ivory/50">Our story</p>
            <h2 className="mt-7 max-w-[10ch] font-display text-6xl leading-[0.96] sm:text-7xl lg:text-8xl">“Built with <em className="text-founder-green">Innovation</em>”</h2>
          </div>
          <div className="flex flex-col justify-center border-t border-ivory/20 pt-9 md:border-l md:border-t-0 md:py-10 md:pl-14">
            <p className="text-[10px] uppercase tracking-[0.28em] text-founder-green">The person behind Felicity</p>
            <p className="mt-8 max-w-[34ch] font-display text-3xl leading-[1.18] sm:text-4xl">
              Felicity Pharma begins with a belief that better healthcare deserves curiosity, care, and the discipline to keep improving.
            </p>
            <p className="mt-6 max-w-[48ch] text-sm leading-7 text-ivory/60">
              Founded by Sanjeev Tripathi, the company is building its path in medicines with a focus on quality, access, and the people behind every decision.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-5">
              <span className="founder-circle relative inline-block px-4 py-3 font-display text-3xl sm:text-4xl">Sanjeev Tripathi</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-ivory/50">Founder</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-stage border-t border-ivory/10 text-ivory">
        <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 sm:gap-12 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
              <div className="flex items-baseline gap-1 sm:gap-2"><span className="font-display text-3xl sm:text-5xl">Felicity</span><span className="text-[8px] uppercase tracking-[0.2em] text-ivory/55 sm:text-[10px] sm:tracking-[0.3em]">Pharma</span></div>
              <p className="mt-5 hidden max-w-[36ch] text-sm leading-relaxed text-ivory/65 sm:block">Trusted Science. Better Days. An India-focused pharmaceutical company built around quality, access, and people.</p>
              <div className="mt-4 flex gap-2 sm:mt-8 sm:gap-3">
                {socialLinks.map(({ label, icon }) => <a key={label} href="#" aria-label={label} title={label} className="grid size-9 shrink-0 place-items-center rounded-full border border-ivory/30 transition-colors hover:border-signal hover:bg-signal sm:size-11">{icon}</a>)}
              </div>
            </div>
            <div className="shrink-0 lg:col-span-5 lg:justify-self-end">
              <h4 className="text-[10px] uppercase tracking-[0.25em] text-ivory/55">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-ivory/80 sm:mt-5 sm:space-y-3">
                <li><a href="#story" className="transition-colors hover:text-founder-green">About</a></li>
                <li><a href="#portfolio" className="transition-colors hover:text-founder-green">Product</a></li>
                <li><a href={contactHref} className="transition-colors hover:text-founder-green">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-7 border-t border-ivory/15 pt-4 text-[10px] text-ivory/55 sm:mt-16 sm:pt-8">
            © 2026 Felicity Pharma. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
