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
import cover10 from "@/assets/covers/midlife-romance.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Audio Antiqua Studios" },
      { name: "description", content: "Where AI audio meets human soul." },
    ],
  }),
});

const covers = [cover2, cover1, cover10, cover7, cover5, cover8, cover3, cover9, cover4, cover6];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Quiet mark */}
      <div className="px-8 pt-10">
        <span className="font-display text-sm tracking-[0.4em] uppercase text-muted-foreground">
          Audio Antiqua
        </span>
      </div>

      {/* Hero — pure type */}
      <section className="flex min-h-[80vh] items-center px-8">
        <h1 className="font-display text-[14vw] leading-[0.9] tracking-tight md:text-[9vw]">
          where ai audio
          <br />
          meets
          <span className="italic text-gradient-gold"> human soul</span>.
        </h1>
      </section>

      {/* Visual gallery — no labels, asymmetric */}
      <section className="px-8 pb-32">
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          <Tile src={covers[0]} className="col-span-7 md:col-span-5 md:col-start-2 aspect-square" />
          <Tile src={covers[1]} className="col-span-5 md:col-span-3 md:col-start-9 aspect-square mt-12 md:mt-32" />

          <Tile src={covers[2]} className="col-span-6 md:col-span-3 md:col-start-2 aspect-square mt-8" />
          <Tile src={covers[3]} className="col-span-6 md:col-span-4 md:col-start-6 aspect-square" />
          <Tile src={covers[4]} className="col-span-12 md:col-span-2 md:col-start-10 aspect-square md:mt-24" />

          <Tile src={covers[5]} className="col-span-7 md:col-span-4 md:col-start-3 aspect-square mt-8" />
          <Tile src={covers[6]} className="col-span-5 md:col-span-3 md:col-start-8 aspect-square md:mt-20" />

          <Tile src={covers[7]} className="col-span-6 md:col-span-3 md:col-start-3 aspect-square mt-8" />
          <Tile src={covers[8]} className="col-span-6 md:col-span-3 md:col-start-6 aspect-square" />
          <Tile src={covers[9]} className="col-span-12 md:col-span-3 md:col-start-9 aspect-square md:mt-16" />
        </div>
      </section>

      {/* Single statement */}
      <section className="border-t border-border/60 px-8 py-32">
        <p className="mx-auto max-w-3xl font-display text-3xl leading-snug md:text-5xl">
          We build the voice. We write the words. <br />
          You keep half — forever.
        </p>
      </section>

      {/* Minimal facts + payouts */}
      <section className="px-8 pb-32">
        <div className="mx-auto grid max-w-5xl gap-px overflow-hidden border-y border-border/60 md:grid-cols-2">
          <ul className="grid grid-cols-1 gap-px bg-border/60 sm:grid-cols-3 md:grid-cols-1">
            <Fact k="50/50" v="lifetime" />
            <Fact k="free" v="production" />
            <Fact k="spotify" v="audiobooks" />
          </ul>
          <div className="bg-background px-6 py-10 text-center">
            <div className="font-display text-4xl text-gradient-gold md:text-5xl">quarterly</div>
            <div className="mt-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">payouts</div>
          </div>
        </div>
      </section>

      {/* Contact — quiet */}
      <footer className="flex flex-col items-start justify-between gap-6 border-t border-border/60 px-8 py-10 md:flex-row md:items-center">
        <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Audio Antiqua Studios
        </span>
        <a
          href="mailto:contact@audioantiqua.com"
          className="font-display text-2xl italic text-gradient-gold hover:opacity-80 md:text-3xl"
        >
          contact@audioantiqua.com
        </a>
      </footer>
    </main>
  );
}

function Tile({ src, className }: { src: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className ?? ""}`}>
      <img
        src={src}
        alt=""
        loading="lazy"
        className="max-h-full max-w-full object-contain grayscale transition duration-1000 hover:grayscale-0"
      />
    </div>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <li className="bg-background px-6 py-10 text-center">
      <div className="font-display text-4xl text-gradient-gold md:text-5xl">{k}</div>
      <div className="mt-3 text-xs uppercase tracking-[0.4em] text-muted-foreground">{v}</div>
    </li>
  );
}
