import { useState } from "react"
import { Copy } from "lucide-react"
import { toast } from "sonner"

type Format = "hex" | "rgb" | "cmyk"

const COLORS = {
  blue: { name: "LISD Blue", hex: "#005987", rgb: "0, 89, 135", cmyk: "100, 34, 0, 47" },
  gold: { name: "LISD Unigold", hex: "#FFC000", rgb: "255, 192, 0", cmyk: "0, 25, 100, 0" },
  deepGold: { name: "LISD Deep Gold", hex: "#FCB01A", rgb: "252, 176, 26", cmyk: "0, 30, 90, 1" },
  brightYellow: { name: "LISD Bright Yellow", hex: "#FFCB0C", rgb: "255, 203, 12", cmyk: "0, 20, 95, 0" },
  black: { name: "Black", hex: "#000000", rgb: "0, 0, 0", cmyk: "0, 0, 0, 100" },
  white: { name: "White", hex: "#FFFFFF", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0" },
  gray: { name: "Cool Gray", hex: "#939598", rgb: "147, 149, 152", cmyk: "3, 2, 0, 40" },
}

type Key = keyof typeof COLORS

export function ColorSection() {
  const [format, setFormat] = useState<Format>("hex")

  const value = (k: Key) => (format === "hex" ? COLORS[k].hex : format === "rgb" ? `rgb(${COLORS[k].rgb})` : `cmyk(${COLORS[k].cmyk})`)

  const copy = (k: Key) => {
    const v = value(k)
    navigator.clipboard?.writeText(v).catch(() => undefined)
    toast.success(`${COLORS[k].name} copied`, { description: v })
  }

  return (
    <section id="color" className="bg-background px-ds-xl py-ds-3xl xl:px-ds-3xl" data-oid="ad3db87488" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <div className="flex flex-wrap items-end justify-between gap-ds-lg" data-oid="cff3f95917">
        <div data-oid="206c545e25">
          <p className="type-label uppercase text-primary" data-oid="b4e87f42b3">03 — Color</p>
          <h2 className="type-display mt-ds-md text-[4rem] uppercase text-foreground" data-oid="d70281e95a">Blue Builds Trust. Unigold Brings Energy.</h2>
          <p className="type-body mt-ds-md max-w-2xl text-muted-foreground" data-oid="d43510e623">
            LISD Blue is our dominant color. LISD Unigold is a sharp accent — use it to point, highlight and celebrate, never as a background for long text. Click any swatch below to copy its value, or switch between HEX, RGB and CMYK values.
          </p>
        </div>
        <div className="ds-tabs" data-oid="8be8eb0e37">
          <div className="ds-tab-list" role="tablist" aria-label="Color format" data-oid="b55e89dea5">
            <button type="button" role="tab" className="ds-tab uppercase" aria-selected={format === "hex"} onClick={() => setFormat("hex")} data-oid="2d99c9587c">HEX</button>
            <button type="button" role="tab" className="ds-tab uppercase" aria-selected={format === "rgb"} onClick={() => setFormat("rgb")} data-oid="9e54e46bd5">RGB</button>
            <button type="button" role="tab" className="ds-tab uppercase" aria-selected={format === "cmyk"} onClick={() => setFormat("cmyk")} data-oid="553a691b81">CMYK</button>
          </div>
        </div>
      </div>

      <div className="mt-ds-2xl grid grid-cols-1 gap-ds-md md:grid-cols-6 md:grid-rows-[18rem_12rem]" data-oid="3b4ebbf9ba">
        <button type="button" onClick={() => copy("blue")} className="group relative flex flex-col justify-between rounded-lg bg-primary p-ds-xl text-left text-primary-foreground transition-transform hover:-translate-y-1 md:col-span-4 md:row-span-2" data-oid="1b0dee6d23">
          <span className="type-label uppercase text-secondary" data-oid="9c14fa203c">Primary</span>
          <span className="flex items-end justify-between gap-ds-md" data-oid="6e08659298">
            <span className="flex flex-col" data-oid="684515ce80">
              <span className="font-display text-[3.5rem] font-bold uppercase leading-none tracking-[-0.03em]" data-oid="9146fed45e">LISD Blue</span>
              <span className="mt-ds-sm font-label text-[1.125rem] font-semibold tabular-nums" data-oid="278b17d673">{value("blue")}</span>
            </span>
            <Copy className="h-6 w-6 opacity-60 group-hover:opacity-100" data-oid="b45a29a9aa" />
          </span>
        </button>
        <button type="button" onClick={() => copy("gold")} className="group flex flex-col justify-between rounded-lg bg-secondary p-ds-lg text-left text-secondary-foreground transition-transform hover:-translate-y-1 md:col-span-2" data-oid="4eebfd71a9">
          <span className="type-label uppercase" data-oid="885994bf5f">Accent</span>
          <span className="flex items-end justify-between" data-oid="ee95611400">
            <span className="flex flex-col" data-oid="a11cc914bd">
              <span className="font-display text-[2rem] font-bold uppercase leading-none" data-oid="552845b6d9">LISD Unigold</span>
              <span className="mt-ds-xs font-label text-[1rem] font-semibold tabular-nums" data-oid="d8415b5643">{value("gold")}</span>
            </span>
            <Copy className="h-5 w-5 opacity-60 group-hover:opacity-100" data-oid="d0bb7e856b" />
          </span>
        </button>
        <div className="grid grid-cols-3 gap-ds-md md:col-span-2" data-oid="1eb300c58b">
          <button type="button" onClick={() => copy("black")} className="flex flex-col justify-end rounded-lg bg-foreground p-ds-md text-left text-background transition-transform hover:-translate-y-1" data-oid="47761cca3b">
            <span className="font-label text-[0.9375rem] font-bold" data-oid="cb78838da0">Black</span>
            <span className="type-caption break-all tabular-nums opacity-80" data-oid="a5de7817a4">{value("black")}</span>
          </button>
          <button type="button" onClick={() => copy("white")} className="flex flex-col justify-end rounded-lg border border-border bg-background p-ds-md text-left text-foreground transition-transform hover:-translate-y-1" data-oid="c92e79154e">
            <span className="font-label text-[0.9375rem] font-bold" data-oid="7beb32889d">White</span>
            <span className="type-caption break-all tabular-nums text-muted-foreground" data-oid="29ecd50f14">{value("white")}</span>
          </button>
          <button type="button" onClick={() => copy("gray")} className="flex flex-col justify-end rounded-lg bg-chart-4 p-ds-md text-left text-foreground transition-transform hover:-translate-y-1" data-oid="9d9bce7305">
            <span className="font-label text-[0.9375rem] font-bold" data-oid="9f2b538f66">Cool Gray</span>
            <span className="type-caption break-all tabular-nums" data-oid="33d0385273">{value("gray")}</span>
          </button>
        </div>
      </div>

      <div className="mt-ds-2xl rounded-lg border border-border bg-muted/40 p-ds-lg" data-oid="1d7a482148">
        <h3 className="type-heading text-foreground" data-oid="66d85aff15">Compass Rose Artwork Colors</h3>
        <p className="type-body mt-ds-xs max-w-3xl text-muted-foreground">These two colors are embedded in approved two-color Compass Rose artwork. Do not use them as general-purpose palette colors or rebuild the artwork yourself.</p>
        <div className="mt-ds-md grid grid-cols-1 gap-ds-md sm:grid-cols-2">
          {(["deepGold", "brightYellow"] as const).map((key) => (
            <button key={key} type="button" onClick={() => copy(key)} className="group flex items-center justify-between rounded-lg border border-border bg-background p-ds-md text-left transition-transform hover:-translate-y-1">
              <span className="flex items-center gap-ds-md"><span className={`h-12 w-12 rounded-md ${key === "deepGold" ? "bg-[#FCB01A]" : "bg-[#FFCB0C]"}`} /><span><span className="font-heading font-bold text-foreground">{COLORS[key].name}</span><span className="type-caption block text-muted-foreground">{value(key)}</span></span></span>
              <Copy className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-ds-2xl" data-oid="19616e99b5">
        <h3 className="type-heading text-foreground" data-oid="ed4b5d6f55">Accessible Pairings</h3>
        <p className="type-body mt-ds-xs text-muted-foreground" data-oid="a9e1a56f7a">Use high-contrast combinations for legible communications. Unigold is an accent, not a body-text color.</p>
        <div className="mt-ds-lg grid grid-cols-1 gap-ds-md md:grid-cols-5" data-oid="1a984a242b">
          <div className="rounded-lg bg-primary p-ds-lg" data-oid="d27f1af49a">
            <p className="font-display text-[2rem] font-bold text-primary-foreground" data-oid="d79470b8c2">Aa</p>
            <p className="type-label mt-ds-sm text-primary-foreground" data-oid="b7b29aa614">White on LISD Blue</p>
            <p className="type-caption mt-ds-xs inline-block rounded-sm bg-success px-ds-sm text-success-foreground" data-oid="9d382381c6">Good contrast</p>
          </div>
          <div className="rounded-lg bg-primary p-ds-lg" data-oid="a978b6fca9">
            <p className="font-display text-[2rem] font-bold text-secondary" data-oid="87dacb3db7">Aa</p>
            <p className="type-label mt-ds-sm text-primary-foreground" data-oid="afb2393a44">Unigold on LISD Blue</p>
            <p className="type-caption mt-ds-xs inline-block rounded-sm bg-warning px-ds-sm text-warning-foreground" data-oid="0931537dc2">Large, bold text only</p>
          </div>
          <div className="rounded-lg bg-secondary p-ds-lg" data-oid="4ee5c3b1f9">
            <p className="font-display text-[2rem] font-bold text-secondary-foreground" data-oid="d6369de92f">Aa</p>
            <p className="type-label mt-ds-sm text-secondary-foreground" data-oid="1029d270e5">Black on Unigold</p>
            <p className="type-caption mt-ds-xs inline-block rounded-sm bg-success px-ds-sm text-success-foreground" data-oid="941196bd82">Good contrast</p>
          </div>
          <div className="rounded-lg border border-border bg-background p-ds-lg" data-oid="6ee6ff3b4a">
            <p className="font-display text-[2rem] font-bold text-chart-4" data-oid="08c2167449">Aa</p>
            <p className="type-label mt-ds-sm text-foreground" data-oid="ed316aec21">Cool Gray on White</p>
            <p className="type-caption mt-ds-xs inline-block rounded-sm bg-warning px-ds-sm text-warning-foreground" data-oid="b104218bfd">Large text only</p>
          </div>
          <div className="rounded-lg border border-border bg-background p-ds-lg" data-oid="d2abad5f8d">
            <p className="font-display text-[2rem] font-bold text-secondary" data-oid="96d020ee8e">Aa</p>
            <p className="type-label mt-ds-sm text-foreground" data-oid="8f01c5e9c2">Unigold on White</p>
            <p className="type-caption mt-ds-xs inline-block rounded-sm bg-destructive px-ds-sm text-destructive-foreground" data-oid="5408e19dfb">Never for text</p>
          </div>
        </div>
      </div>
    </section>
  )
}
