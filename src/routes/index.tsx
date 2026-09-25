import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";
import medicineAmber from "@/assets/medicine-amber.jpg";
import medicineBlister from "@/assets/medicine-blister.jpg";
import medicineDropper from "@/assets/medicine-dropper.jpg";
import medicineVial from "@/assets/medicine-vial.jpg";
import { MolecularScene } from "@/components/MolecularScene";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Veyra Pharma — Trusted Science. Better Days." },
      { name: "description", content: "An India-focused pharmaceutical company committed to quality medicines, responsible healthcare, and scientific discipline." },
      { property: "og:title", content: "Veyra Pharma — Trusted Science. Better Days." },
      { property: "og:description", content: "Explore Veyra Pharma's approach to quality, access, people, and responsible medicine discovery." },
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
  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground antialiased selection:bg-signal selection:text-ivory">
      <header className="absolute inset-x-0 top-0 z-40 text-ivory">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 lg:px-12">
          <a href="#top" className="flex items-baseline gap-2" aria-label="Veyra Pharma home">
            <span className="font-display text-3xl leading-none">Veyra</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/60">Pharma</span>
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-9 text-sm md:flex">
            <a href="#portfolio" className="text-ivory/65 transition-colors hover:text-ivory">Portfolio</a>
            <a href="#pillars" className="text-ivory/65 transition-colors hover:text-ivory">Approach</a>
            <a href="#people" className="text-ivory/65 transition-colors hover:text-ivory">People</a>
            <a href="#enquiry" className="text-ivory/65 transition-colors hover:text-ivory">Enquiry</a>
          </nav>
          <a href="#enquiry" className="hidden items-center gap-2 rounded-full border border-ivory/25 px-5 py-2.5 text-sm transition-colors hover:bg-signal sm:inline-flex">
            Start a conversation
          </a>
        </div>
      </header>

      <section id="top" className="hero-stage relative min-h-[880px] overflow-hidden bg-ink text-ivory lg:min-h-screen">
        <div className="glass-panel glass-panel-one" />
        <div className="glass-panel glass-panel-two" />
        <div className="mx-auto grid min-h-[880px] max-w-[1440px] items-center gap-12 px-6 pb-20 pt-36 lg:min-h-screen lg:grid-cols-12 lg:px-12 lg:pt-28">
          <div className="relative z-10 lg:col-span-7">
            <div className="rise flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-ivory/65">
              <span className="h-px w-10 bg-signal" />
              Maharashtra · India
            </div>
            <h1 className="rise-two mt-8 max-w-[9ch] text-balance font-display text-7xl leading-[0.86] sm:text-8xl lg:text-[8.5rem]">
              Trusted Science.<br /><em className="text-signal">Better Days.</em>
            </h1>
            <p className="rise-three mt-8 max-w-[48ch] text-pretty text-base leading-relaxed text-ivory/70 lg:text-lg">
              We shape dependable medicines through scientific discipline, responsible standards, and a clear focus on the people they serve.
            </p>
            <div className="rise-three mt-10 flex flex-wrap gap-4">
              <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm text-ivory transition-colors hover:bg-ivory hover:text-ink">
                Explore medicines <ArrowRight aria-hidden="true" size={16} />
              </a>
              <a href="#pillars" className="rounded-full border border-ivory/35 px-6 py-3 text-sm transition-colors hover:bg-ivory/10">Our story</a>
            </div>
          </div>
          <div className="relative z-10 lg:col-span-5">
            <div className="float-scene relative mx-auto aspect-square w-full max-w-[520px] rounded-[32px] border border-ivory/20 bg-ivory/5 backdrop-blur-sm">
              <MolecularScene />
              <span className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.24em] text-ivory/55">Molecular study / 01</span>
              <span className="absolute bottom-5 right-5 size-2 rounded-full bg-signal shadow-[0_0_24px_var(--signal)]" />
            </div>
            <div className="mt-5 flex justify-between text-[10px] uppercase tracking-[0.22em] text-ivory/45">
              <span>Interactive structure</span><span>Continuous motion</span>
            </div>
          </div>
        </div>
        <a href="#portfolio" aria-label="Scroll to medicine portfolio" className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-[10px] uppercase tracking-[0.28em] text-ivory/50">Scroll ↓</a>
      </section>

      <section id="portfolio" className="border-b border-border bg-ivory py-20 lg:py-28">
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
              <article key={`${product.code}-${index}`} className="product-card w-[290px] shrink-0 bg-card p-4 ring-1 ring-foreground/10 sm:w-[320px]">
                <img src={product.image} alt={`Illustrative ${product.name} medicine packaging`} loading="lazy" width={816} height={816} className="aspect-square w-full object-cover" />
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

      <section id="pillars" className="bg-ink py-20 text-ivory lg:py-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="flex items-start gap-5">
            <span className="font-display text-7xl leading-none text-signal lg:text-8xl">02</span>
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-ivory/45">Our principles</p>
              <h2 className="max-w-[18ch] text-balance font-display text-5xl leading-[0.94] lg:text-6xl">Healthcare should be built on trust.</h2>
            </div>
          </div>
          <div className="mt-16 grid overflow-hidden border border-ivory/15 md:grid-cols-3">
            {[
              ["Quality", "Built to be verified", "Quality-led processes, consistency, safety, and responsible standards guide every decision."],
              ["Access", "Designed to reach", "We work toward helping dependable medicines reach people and healthcare professionals."],
              ["People", "Human at the centre", "Long-term relationships with healthcare stakeholders shape how we listen and act."],
            ].map(([eyebrow, title, copy], index) => (
              <article id={index === 2 ? "people" : undefined} key={eyebrow} className="pillar-panel min-h-[330px] border-ivory/15 p-8 md:border-r md:last:border-r-0 lg:p-10">
                <span className="text-[10px] uppercase tracking-[0.3em] text-signal">0{index + 1} / {eyebrow}</span>
                <h3 className="mt-20 max-w-[8ch] font-display text-4xl">{title}</h3>
                <p className="mt-5 max-w-[35ch] text-sm leading-relaxed text-ivory/55">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="bg-ivory py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-5">
            <span className="font-display text-7xl leading-none text-signal lg:text-8xl">03</span>
            <h2 className="mt-6 max-w-[10ch] text-balance font-display text-5xl leading-[0.94] lg:text-6xl">Let&apos;s build better healthcare, together.</h2>
            <p className="mt-5 max-w-[42ch] text-sm leading-relaxed text-foreground/60">Choose the path that best describes you. We do not provide personal medical advice through this website.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {[
              ["Healthcare", "Professionals", "Product and scientific information enquiries."],
              ["Business", "Distributors", "Portfolio, partnership, and supply conversations."],
              ["General", "Visitors", "Company, media, and general enquiries."],
            ].map(([eyebrow, title, copy]) => (
              <a href="mailto:hello@veyra.example" key={title} className="enquiry-card group flex min-h-[280px] flex-col border border-foreground/15 p-6 transition-colors hover:border-signal hover:bg-signal hover:text-ivory">
                <span className="text-[10px] uppercase tracking-[0.25em] text-mineral group-hover:text-ivory/65">{eyebrow}</span>
                <h3 className="mt-4 font-display text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/55 group-hover:text-ivory/70">{copy}</p>
                <ArrowRight className="mt-auto transition-transform group-hover:translate-x-1" aria-hidden="true" size={19} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-ivory/10 bg-ink text-ivory">
        <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-baseline gap-2"><span className="font-display text-5xl">Veyra</span><span className="text-[10px] uppercase tracking-[0.3em] text-ivory/45">Pharma</span></div>
              <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-ivory/55">Trusted Science. Better Days. An India-focused pharmaceutical company built around quality, access, and people.</p>
              <div className="mt-8 flex gap-3">
                {socialLinks.map(({ label, icon }) => <a key={label} href="#" aria-label={label} title={label} className="grid size-11 place-items-center rounded-full border border-ivory/25 transition-colors hover:border-signal hover:bg-signal">{icon}</a>)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
              {[
                ["Explore", ["Medicines", "Quality", "Our story"]],
                ["Company", ["About", "Careers", "Contact"]],
                ["Legal", ["Privacy", "Terms", "Disclaimer"]],
              ].map(([heading, links]) => (
                <div key={heading as string}>
                  <h4 className="text-[10px] uppercase tracking-[0.25em] text-ivory/35">{heading}</h4>
                  <ul className="mt-5 space-y-3 text-sm text-ivory/65">{(links as string[]).map((link) => <li key={link}><a href="#top" className="transition-colors hover:text-signal">{link}</a></li>)}</ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-ivory/10 pt-8 text-[10px] uppercase tracking-[0.18em] text-ivory/35 sm:flex-row">
            <span>© 2026 Veyra Pharma · Illustrative concept</span><span>No medical advice · Product data pending approval</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
