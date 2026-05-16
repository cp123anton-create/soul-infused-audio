import { createFileRoute } from "@tanstack/react-router";
import cover1 from "@/assets/covers/porn-damaged-brain.png";
import cover2 from "@/assets/covers/nuns-grace.png";
import cover3 from "@/assets/covers/nuns-meditative.png";
import cover4 from "@/assets/covers/benedictine-calm.png";
import cover5 from "@/assets/covers/benedictine-grace.png";
import cover6 from "@/assets/covers/nuns-reverent.png";
import cover7 from "@/assets/covers/doom-scrolling.png";
import cover8 from "@/assets/covers/sleep-bp.png";
import cover9 from "@/assets/covers/ptsd.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Audio Antiqua Studios — Where AI Audio Meets Human Soul" },
      {
        name: "description",
        content:
          "Audio Antiqua Studios produces audiobooks for creators. Free voice cloning, scripts, covers and direct Spotify publishing — 50/50 lifetime royalties.",
      },
      { property: "og:title", content: "Audio Antiqua Studios" },
      { property: "og:description", content: "Where AI Audio Meets Human Soul." },
    ],
  }),
});

const catalog = [
  { src: cover1, title: "The Porn Damaged Brain", author: "Anthony Buckley", tag: "Spotify Audiobook" },
  { src: cover7, title: "Doom Scrolling", author: "Jamie Knight", tag: "Spotify Audiobook" },
  { src: cover8, title: "Sleep Hypnosis For High Blood Pressure", author: "Olivia Stephenson", tag: "Spotify Audiobook" },
  { src: cover9, title: "Deep Sleep Hypnosis For PTSD", author: "Jackie Wright", tag: "Spotify Audiobook" },
  { src: cover2, title: "The Meditative Grace of Nuns", author: "Gregorian Chants", tag: "YouTube · 1.1M views" },
  { src: cover3, title: "The Meditative Calm Of Nuns", author: "Gregorian Chants", tag: "YouTube · 952K views" },
  { src: cover4, title: "The Calm Of Benedictine Monks", author: "Gregorian Chants", tag: "YouTube · 759K views" },
  { src: cover5, title: "The Grace Of Benedictine Monks", author: "Gregorian Chants", tag: "YouTube · 564K views" },
  { src: cover6, title: "The Reverent Calm Of Nuns", author: "Gregorian Chants", tag: "YouTube · 776K views" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background bg-grain text-foreground">
      {/* Nav */}
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-3">
            <span className="font-display text-xl tracking-wide">Audio Antiqua</span>
            <span className="hidden text-xs uppercase tracking-[0.3em] text-muted-foreground sm:inline">
              Studios
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#catalog" className="hover:text-foreground">Catalog</a>
            <a href="#how" className="hover:text-foreground">How it works</a>
            <a href="#deal" className="hover:text-foreground">The deal</a>
            <a href="#market" className="hover:text-foreground">Market</a>
          </nav>
          <a
            href="mailto:contact@audioantiqua.com"
            className="rounded-sm border border-primary/40 bg-primary/10 px-4 py-2 text-sm text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            Apply to publish
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-32 md:pb-32">
          <p className="text-xs uppercase tracking-[0.4em] text-primary/80">
            Est. — An Audiobook House for the New Era
          </p>
          <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
            Where <span className="italic text-gradient-gold">AI audio</span> meets
            <br /> human soul.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            We turn your words into beautifully produced audiobooks — voiced by a
            professional clone of you, published straight to Spotify, and shared
            with you 50/50 for life.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:contact@audioantiqua.com"
              className="rounded-sm bg-primary px-6 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground transition hover:opacity-90"
            >
              Start your audiobook
            </a>
            <a
              href="#catalog"
              className="rounded-sm border border-border px-6 py-3 text-sm uppercase tracking-widest text-foreground/90 transition hover:border-primary/60 hover:text-primary"
            >
              Hear our work
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border/60 pt-10 md:grid-cols-4">
            {[
              ["Millions", "Listeners reached"],
              ["50 / 50", "Lifetime royalty split"],
              ["$0", "Cost to the creator"],
              ["100%", "You own your voice"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-primary md:text-4xl">{n}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="border-y border-border/60 bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-primary/80">From the studio</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-5xl">
                Audio that has reached <em className="text-primary">millions</em> worldwide.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              A selection of our published audiobooks on Spotify and long-form music
              programs on YouTube.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3">
            {catalog.map((c) => (
              <figure key={c.title} className="group">
                <div className="overflow-hidden rounded-sm border border-border/60 bg-muted">
                  <img
                    src={c.src}
                    alt={c.title}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4">
                  <div className="text-xs uppercase tracking-[0.25em] text-primary/80">{c.tag}</div>
                  <h3 className="mt-2 font-display text-xl leading-snug">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.author}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-primary/80">The process</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl">
            A full-service audio house — for free.
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border/60 bg-border md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                t: "Voice cloning",
                d: "We build a professional, studio-grade clone of your voice. You own it forever — 100% of the rights.",
              },
              {
                n: "02",
                t: "Scriptwriting",
                d: "Our writers craft the manuscript. You approve, edit, deny, and add your own calls-to-action.",
              },
              {
                n: "03",
                t: "Cover & production",
                d: "Original cover art, mastering, and chaptering — produced to platform spec.",
              },
              {
                n: "04",
                t: "Spotify publishing",
                d: "We publish directly to Spotify Audiobooks and pay royalties out quarterly, for life.",
              },
            ].map((s) => (
              <div key={s.n} className="bg-background p-8">
                <div className="font-display text-3xl text-primary/70">{s.n}</div>
                <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Deal */}
      <section id="deal" className="border-t border-border/60 bg-card/30 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.4em] text-primary/80">The deal</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Honest terms,
              <br /> written plainly.
            </h2>
            <p className="mt-6 text-muted-foreground">
              No upfront fees. No subscriptions. No tricks. We invest the
              production, you bring the voice and the vision — and we share the
              upside forever.
            </p>
            <a
              href="mailto:contact@audioantiqua.com"
              className="mt-10 inline-block rounded-sm bg-primary px-6 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground transition hover:opacity-90"
            >
              Apply to publish
            </a>
          </div>

          <div className="lg:col-span-7">
            <dl className="divide-y divide-border/60 border-y border-border/60">
              {[
                ["Cost to creator", "100% free"],
                ["Royalty split", "50 / 50, paid quarterly, for life"],
                ["Voice clone ownership", "Creator owns 100%"],
                ["Master recording rights", "Audio Antiqua Studios"],
                ["Script control", "Approve · Edit · Deny · Add CTAs"],
                ["Distribution", "Direct to Spotify Audiobooks"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-3 gap-6 py-5">
                  <dt className="col-span-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">{k}</dt>
                  <dd className="col-span-2 font-display text-xl text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Market */}
      <section id="market" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-primary/80">The opportunity</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl">
            The audiobook era has just begun.
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            <article className="border-l border-primary/40 pl-6">
              <div className="font-display text-5xl text-gradient-gold">$35.47B</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Projected size of the global audiobook market by 2030.
              </p>
            </article>
            <article className="border-l border-primary/40 pl-6">
              <div className="font-display text-5xl text-gradient-gold">Sept 2022</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Spotify Audiobooks launched, opening a new royalty pool for
                independent creators.
              </p>
            </article>
            <article className="border-l border-primary/40 pl-6">
              <div className="font-display text-5xl text-gradient-gold">{">"} Audible</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Spotify royalties currently outperform Audible's payouts for
                independent titles.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary/80">Begin</p>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-5xl leading-tight md:text-7xl">
            Your voice, immortalised on the world's largest stage.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Tell us about your audience and your idea. We'll reply within two
            business days.
          </p>
          <a
            href="mailto:contact@audioantiqua.com"
            className="mt-10 inline-block rounded-sm bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.25em] text-primary-foreground transition hover:opacity-90"
          >
            contact@audioantiqua.com
          </a>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-10 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:items-center">
          <div className="font-display text-base normal-case tracking-normal text-foreground">
            Audio Antiqua Studios
          </div>
          <div>© {new Date().getFullYear()} — All rights reserved</div>
          <a href="mailto:contact@audioantiqua.com" className="hover:text-primary">
            contact@audioantiqua.com
          </a>
        </div>
      </footer>
    </div>
  );
}
