import { useState } from "react"
import { AlertTriangle, Check, Download, X } from "lucide-react"
import { assetPath } from "../../lib/assetPath"
import { LOGO_FILES, Wordmark, type LogoVariant } from "./Wordmark"

type Bg = "white" | "blue" | "gold" | "black"
type Rose = "two" | "one"
type Layout = "horizontal" | "stacked"

const PREVIEW: Record<Bg, { two: LogoVariant; one: LogoVariant; note: string; label: string }> = {
  white: { two: "blue-gold2", one: "blue-gold1", label: "Primary · Blue + Gold", note: "The blue and gold lockup on white is our primary, preferred application." },
  blue: { two: "white-gold2", one: "white-gold1", label: "Reversed · White + Gold", note: "On LISD Blue, use the reversed lockup: white type with the gold Compass Rose." },
  black: { two: "white-gold2", one: "white-gold1", label: "Reversed · White + Gold", note: "On black or very dark photography, use the reversed white and gold lockup." },
  gold: { two: "black-black1", one: "black-black1", label: "One-color · Black", note: "On LISD Unigold, the gold Compass Rose would disappear. Use the one-color black lockup." },
}

const LIBRARY: { variant: LogoVariant; name: string; rose: string; tile: string }[] = [
  { variant: "blue-gold2", name: "Blue + Gold", rose: "Two-color rose", tile: "bg-background" },
  { variant: "blue-gold1", name: "Blue + Gold", rose: "One-color rose", tile: "bg-background" },
  { variant: "black-gold2", name: "Black + Gold", rose: "Two-color rose", tile: "bg-background" },
  { variant: "black-gold1", name: "Black + Gold", rose: "One-color rose", tile: "bg-background" },
  { variant: "white-gold2", name: "White + Gold", rose: "Two-color rose", tile: "bg-primary" },
  { variant: "white-gold1", name: "White + Gold", rose: "One-color rose", tile: "bg-primary" },
  { variant: "black-black1", name: "All Black", rose: "One-color", tile: "bg-background" },
  { variant: "white-white1", name: "All White", rose: "One-color", tile: "bg-foreground" },
]

const STACKED: { file: string; name: string; rose: string; tile: string }[] = [
  { file: "mercury-attachments/lisd-stacked-blue-gold2.svg", name: "Blue + Gold", rose: "Two-color rose", tile: "bg-background" },
  { file: "mercury-attachments/lisd-stacked-blue-gold1.svg", name: "Blue + Gold", rose: "One-color rose", tile: "bg-background" },
  { file: "mercury-attachments/lisd-stacked-black-gold2.svg", name: "Black + Gold", rose: "Two-color rose", tile: "bg-background" },
  { file: "mercury-attachments/lisd-stacked-black-gold1.svg", name: "Black + Gold", rose: "One-color rose", tile: "bg-background" },
  { file: "mercury-attachments/lisd-stacked-white-gold2.svg", name: "White + Gold", rose: "Two-color rose", tile: "bg-primary" },
  { file: "mercury-attachments/lisd-stacked-white-gold1.svg", name: "White + Gold", rose: "One-color rose", tile: "bg-primary" },
  { file: "mercury-attachments/lisd-stacked-black-black1.svg", name: "All Black", rose: "One-color", tile: "bg-background" },
  { file: "mercury-attachments/lisd-stacked-white-white1.svg", name: "All White", rose: "One-color", tile: "bg-foreground" },
]

const SHORT: { file: string; name: string; rose: string; tile: string }[] = [
  { file: "mercury-attachments/lisd-short-blue-gold2.svg", name: "Blue + Gold", rose: "Two-color rose", tile: "bg-background" },
  { file: "mercury-attachments/lisd-short-blue-gold1.svg", name: "Blue + Gold", rose: "One-color rose", tile: "bg-background" },
  { file: "mercury-attachments/lisd-short-black-gold2.svg", name: "Black + Gold", rose: "Two-color rose", tile: "bg-background" },
  { file: "mercury-attachments/lisd-short-black-gold1.svg", name: "Black + Gold", rose: "One-color rose", tile: "bg-background" },
  { file: "mercury-attachments/lisd-short-white-gold2.svg", name: "White + Gold", rose: "Two-color rose", tile: "bg-primary" },
  { file: "mercury-attachments/lisd-short-white-gold1.svg", name: "White + Gold", rose: "One-color rose", tile: "bg-primary" },
  { file: "mercury-attachments/lisd-short-black-black1.svg", name: "All Black", rose: "One-color", tile: "bg-background" },
  { file: "mercury-attachments/lisd-short-white-white1.svg", name: "All White", rose: "One-color", tile: "bg-foreground" },
]

const TAGLINE: { file: string; name: string; rose: string; tile: string }[] = [
  { file: "mercury-attachments/lisd-tagline-blue-gold2.svg", name: "Blue + Gold", rose: "Two-color rose", tile: "bg-background" },
  { file: "mercury-attachments/lisd-tagline-black-gold2.svg", name: "Black + Gold", rose: "Two-color rose", tile: "bg-background" },
  { file: "mercury-attachments/lisd-tagline-white-gold2.svg", name: "White + Gold", rose: "Two-color rose", tile: "bg-primary" },
  { file: "mercury-attachments/lisd-tagline-black-black1.svg", name: "All Black", rose: "One-color", tile: "bg-background" },
  { file: "mercury-attachments/lisd-tagline-white-white1.svg", name: "All White", rose: "One-color", tile: "bg-foreground" },
]

const ROSES: { file: string; name: string; use: string; tile: string }[] = [
  { file: "mercury-attachments/lisd-rose-gold2.svg", name: "Gold · Two-color", use: "Primary mark for full-color print, web, and social.", tile: "bg-background" },
  { file: "mercury-attachments/lisd-rose-gold1-light.svg", name: "Gold · One-color", use: "For light backgrounds, spot-color, and embroidery.", tile: "bg-background" },
  { file: "mercury-attachments/lisd-rose-gold1-dark.svg", name: "Gold · One-color", use: "For LISD Blue and other dark backgrounds.", tile: "bg-primary" },
  { file: "mercury-attachments/lisd-rose-white1.svg", name: "White", use: "For photography and dark fields where gold won’t read.", tile: "bg-foreground" },
  { file: "mercury-attachments/lisd-rose-black1.svg", name: "Black", use: "For single-color black print, faxes, and gold fields.", tile: "bg-secondary" },
]

function DownloadButtons({ file, label }: { file: string; label: string }) {
  const pngFile = file.replace(/\.svg$/, ".png")
  const buttonClass = "inline-flex h-9 items-center justify-center gap-ds-xs rounded-md border border-border px-ds-sm font-label text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"

  return (
    <div className="flex shrink-0 items-center gap-ds-xs">
      <a href={assetPath(pngFile)} download aria-label={`Download ${label} (PNG)`} className={buttonClass}>
        <Download className="h-4 w-4" />
        PNG
      </a>
      <a href={assetPath(file)} download aria-label={`Download ${label} (SVG)`} className={buttonClass}>
        <Download className="h-4 w-4" />
        SVG
      </a>
    </div>
  )
}

export function LogoSection() {
  const [bg, setBg] = useState<Bg>("white")
  const [rose, setRose] = useState<Rose>("two")
  const [layout, setLayout] = useState<Layout>("horizontal")
  const info = PREVIEW[bg]
  const variant = info[rose]
  const oneColorOnly = info.two === info.one

  return (
    <section id="logo" className="bg-muted/40 px-ds-xl py-ds-3xl xl:px-ds-3xl" data-oid="cf8cbf8254" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <div className="flex flex-wrap items-end justify-between gap-ds-lg" data-oid="077d296cdb">
        <div data-oid="0921281e8b">
          <p className="type-label uppercase text-primary" data-oid="58d260e93a">02 — Logos</p>
          <h2 className="type-display mt-ds-md text-[4rem] uppercase text-foreground" data-oid="0fa11d030d">District Logos</h2>
        </div>
        <p className="type-body max-w-xl text-muted-foreground" data-oid="3ce48cd788">
          Our primary logos pair the LEANDER ISD wordmark with the Compass Rose. Only use the approved files below. These marks are central to our brand; never redraw them or use AI to generate different versions of the Compass Rose or any brand letterforms.
        </p>
      </div>

      <div className="mt-ds-2xl grid grid-cols-1 gap-ds-lg xl:grid-cols-12" data-oid="2f0cf81aa2">
        <div
          data-bg={bg}
          className="relative flex min-h-[26rem] items-center justify-center rounded-lg border border-border bg-background px-ds-xl transition-colors duration-300 data-[bg=black]:bg-foreground data-[bg=blue]:bg-primary data-[bg=gold]:bg-secondary xl:col-span-8" data-oid="67d462b43c" data-oid-text-editable="false" data-oid-text-source="expression:06c3349982b5|element:p"
        >
          {layout === "horizontal" ? (
            <Wordmark variant={variant} className="h-auto w-full max-w-[40rem]" />
          ) : (
            <img
              src={assetPath(`mercury-attachments/lisd-stacked-${variant}.svg`)}
              alt="Leander ISD stacked lockup"
              draggable={false}
              className="h-auto max-h-[20rem] w-full max-w-[22rem] select-none object-contain py-ds-xl" data-oid="1d0343f0e7"
            />
          )}
          <p
            data-bg={bg}
            className="type-label absolute left-ds-lg top-ds-lg uppercase text-muted-foreground data-[bg=black]:text-background data-[bg=blue]:text-primary-foreground data-[bg=gold]:text-secondary-foreground" data-oid="4586902a03"
          >
            {info.label}
          </p>
        </div>
        <div className="flex flex-col gap-ds-lg rounded-lg bg-background p-ds-xl xl:col-span-4" data-oid="395bfa290f">
          <h3 className="type-heading text-foreground" data-oid="40a9d24d3b">Try a Background</h3>
          <div className="grid grid-cols-2 gap-ds-sm" role="group" aria-label="Logo background" data-oid="41c7b51879">
            <button type="button" aria-pressed={bg === "white"} onClick={() => setBg("white")} className="ds-button justify-start border-border bg-background text-foreground aria-pressed:border-primary aria-pressed:ring-2 aria-pressed:ring-primary" data-oid="62fd125af8">
              <span className="h-4 w-4 rounded-full border border-input bg-background" data-oid="c3fde88d1b" />
              White
            </button>
            <button type="button" aria-pressed={bg === "blue"} onClick={() => setBg("blue")} className="ds-button justify-start border-border bg-background text-foreground aria-pressed:border-primary aria-pressed:ring-2 aria-pressed:ring-primary" data-oid="af8a061493">
              <span className="h-4 w-4 rounded-full bg-primary" data-oid="6c3939b364" />
              LISD Blue
            </button>
            <button type="button" aria-pressed={bg === "gold"} onClick={() => setBg("gold")} className="ds-button justify-start border-border bg-background text-foreground aria-pressed:border-primary aria-pressed:ring-2 aria-pressed:ring-primary" data-oid="7c7a271122">
              <span className="h-4 w-4 rounded-full bg-secondary" data-oid="4284940e21" />
              LISD Unigold
            </button>
            <button type="button" aria-pressed={bg === "black"} onClick={() => setBg("black")} className="ds-button justify-start border-border bg-background text-foreground aria-pressed:border-primary aria-pressed:ring-2 aria-pressed:ring-primary" data-oid="37535ded20">
              <span className="h-4 w-4 rounded-full bg-foreground" data-oid="f4945b5bbe" />
              Black
            </button>
          </div>

          <div className="border-t border-border pt-ds-lg">
            <p className="type-label mb-ds-sm uppercase text-muted-foreground">Logo orientation</p>
          <div className="ds-tabs" data-oid="1b3da310b1">
            <div className="ds-tab-list" role="tablist" aria-label="Lockup layout" data-oid="9b80e81a15">
              <button type="button" role="tab" className="ds-tab uppercase" aria-selected={layout === "horizontal"} onClick={() => setLayout("horizontal")} data-oid="a890d62286">Horizontal</button>
              <button type="button" role="tab" className="ds-tab uppercase" aria-selected={layout === "stacked"} onClick={() => setLayout("stacked")} data-oid="fd086cb8ca">Stacked</button>
            </div>
          </div></div>

          <div className="border-t border-border pt-ds-lg">
            <p className="type-label mb-ds-sm uppercase text-muted-foreground">Compass Rose artwork</p>
          <div className="ds-tabs" data-oid="53e1395670">
            <div className="ds-tab-list" role="tablist" aria-label="Compass rose version" data-oid="013251b873">
              <button type="button" role="tab" className="ds-tab uppercase disabled:opacity-40" aria-selected={rose === "two" && !oneColorOnly} disabled={oneColorOnly} onClick={() => setRose("two")} data-oid="7465e18488">Two-Color Rose</button>
              <button type="button" role="tab" className="ds-tab uppercase" aria-selected={rose === "one" || oneColorOnly} onClick={() => setRose("one")} data-oid="1e30bff6e9">One-Color Rose</button>
            </div>
          </div></div>

          <p className="type-body text-muted-foreground" data-oid="4096bb3fc6">{info.note}</p>
          <div className="mt-auto border-t border-border pt-ds-lg" data-oid="b733fcbadc">
            <h4 className="type-label uppercase text-foreground" data-oid="19a4e3731c">Clear Space</h4>
            <p className="type-body mt-ds-xs text-muted-foreground" data-oid="c20516063b">Keep a margin equal to the height of the letters in LEANDER on all sides. Minimum width: 1.5″ in print, 180px on screen.</p>
          </div>
        </div>
      </div>

      <div className="mt-ds-2xl" data-oid="fea4a0c648">
        <div className="flex flex-wrap items-end justify-between gap-ds-md" data-oid="9864b2dfb7">
          <h3 className="type-heading text-foreground" data-oid="cba5cb1e18">Horizontal District Logo</h3>
          <p className="type-caption max-w-xl text-muted-foreground" data-oid="a740a14acf">The default and primary district logo. Choose the two-color Compass Rose for full-color print and screens; use one-color artwork for embroidery, screen printing and smaller applications.</p>
        </div>
        <ul className="mt-ds-lg grid grid-cols-1 gap-ds-lg md:grid-cols-2 xl:grid-cols-4" data-oid="289648a2f8">
          {LIBRARY.map((item, index) => (
            <li key={item.variant} data-index={index} className="overflow-hidden rounded-lg border border-border bg-background" data-oid="5e6ed90dab" data-oid-shared="true" data-oid-instance-targetable="true">
              <div className={`flex h-40 items-center justify-center px-ds-lg ${item.tile}`} data-oid="8826844f89" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-classname-dynamic="true">
                <Wordmark variant={item.variant} className="h-auto w-full max-w-[15rem]" />
              </div>
              <div className="flex items-center justify-between gap-ds-sm border-t border-border p-ds-md" data-oid="6fe7c59082" data-oid-shared="true" data-oid-instance-targetable="true">
                <div data-oid="7c6e050b27" data-oid-shared="true" data-oid-instance-targetable="true">
                  <p className="font-heading text-[1rem] font-bold text-foreground" data-oid="d49a42e036" data-oid-shared="true" data-oid-instance-targetable="true">{item.name}</p>
                  <p className="type-caption text-muted-foreground" data-oid="5af4d7d77a" data-oid-shared="true" data-oid-instance-targetable="true">{item.rose}</p>
                </div>
                <DownloadButtons file={LOGO_FILES[item.variant]} label={`${item.name}, ${item.rose}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-ds-2xl" data-oid="8bf8162681">
        <div className="flex flex-wrap items-end justify-between gap-ds-md" data-oid="ee821448c0">
          <h3 className="type-heading text-foreground" data-oid="c02b21722b">Stacked Lockups</h3>
          <p className="type-caption max-w-xl text-muted-foreground" data-oid="24410fc942">Use the stacked orientation for square and vertical spaces such as social avatars, signage, apparel and banners, where the horizontal logo would be forced to be too small.</p>
        </div>
        <ul className="mt-ds-lg grid grid-cols-1 gap-ds-lg md:grid-cols-2 xl:grid-cols-4" data-oid="7faf031f23">
          {STACKED.map((item, index) => (
            <li key={item.file} data-index={index} className="overflow-hidden rounded-lg border border-border bg-background" data-oid="de938b1c0f" data-oid-shared="true" data-oid-instance-targetable="true">
              <div className={`flex h-56 items-center justify-center p-ds-lg ${item.tile}`} data-oid="f60b912b16" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-classname-dynamic="true">
                <img src={assetPath(item.file)} alt={`Leander ISD stacked lockup, ${item.name}, ${item.rose}`} draggable={false} className="h-full w-full select-none object-contain" data-oid="bf28114731" data-oid-shared="true" data-oid-instance-targetable="true" />
              </div>
              <div className="flex items-center justify-between gap-ds-sm border-t border-border p-ds-md" data-oid="e775d9972f" data-oid-shared="true" data-oid-instance-targetable="true">
                <div data-oid="0869c39dbb" data-oid-shared="true" data-oid-instance-targetable="true">
                  <p className="font-heading text-[1rem] font-bold text-foreground" data-oid="a6bceba7fd" data-oid-shared="true" data-oid-instance-targetable="true">{item.name}</p>
                  <p className="type-caption text-muted-foreground" data-oid="e93519f577" data-oid-shared="true" data-oid-instance-targetable="true">{item.rose}</p>
                </div>
                <DownloadButtons file={item.file} label={`stacked ${item.name}, ${item.rose}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-ds-2xl" data-oid="b36c02a479">
        <div className="flex flex-wrap items-end justify-between gap-ds-md" data-oid="13ab3b7abc">
          <div data-oid="53da656b34">
            <p className="type-label uppercase text-muted-foreground" data-oid="82726cff0e">Special Use Only</p>
            <h3 className="type-heading mt-ds-xs text-foreground" data-oid="e94b0f4085">LISD Abbreviated Lockup</h3>
          </div>
          <p className="type-caption max-w-xl text-muted-foreground" data-oid="f01724d0c5">A shorthand version of our identity. It is not a substitute for the full LEANDER ISD lockup.</p>
        </div>
        <div className="mt-ds-lg flex items-start gap-ds-md rounded-lg border border-border border-l-4 border-l-secondary bg-background p-ds-lg" data-oid="4659274b43">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-foreground" data-oid="9fcb4d5019" />
          <div data-oid="c9a1adb653">
            <h4 className="type-label uppercase text-foreground" data-oid="d55546cef5">Use Sparingly</h4>
            <p className="type-body mt-ds-xs max-w-4xl text-muted-foreground" data-oid="f1dfbf7c3b">Reserve the LISD lockup for internal materials, or for pieces where the full Leander ISD identity is already established nearby, such as a second page, a slide footer, or the back of a shirt that has the full logo on the front. Public-facing, first-impression, and official communications always use the full lockup.</p>
          </div>
        </div>
        <ul className="mt-ds-lg grid grid-cols-1 gap-ds-lg md:grid-cols-2 xl:grid-cols-4" data-oid="139b8769e0">
          {SHORT.map((item, index) => (
            <li key={item.file} data-index={index} className="overflow-hidden rounded-lg border border-border bg-background" data-oid="1392234461" data-oid-shared="true" data-oid-instance-targetable="true">
              <div className={`flex h-40 items-center justify-center px-ds-xl py-ds-lg ${item.tile}`} data-oid="1ec89c2707" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-classname-dynamic="true">
                <img src={assetPath(item.file)} alt={`LISD abbreviated lockup, ${item.name}, ${item.rose}`} draggable={false} className="h-full w-full select-none object-contain" data-oid="1af5709860" data-oid-shared="true" data-oid-instance-targetable="true" />
              </div>
              <div className="flex items-center justify-between gap-ds-sm border-t border-border p-ds-md" data-oid="64c829f1db" data-oid-shared="true" data-oid-instance-targetable="true">
                <div data-oid="eba618aecb" data-oid-shared="true" data-oid-instance-targetable="true">
                  <p className="font-heading text-[1rem] font-bold text-foreground" data-oid="e398880564" data-oid-shared="true" data-oid-instance-targetable="true">{item.name}</p>
                  <p className="type-caption text-muted-foreground" data-oid="ea69a50a1a" data-oid-shared="true" data-oid-instance-targetable="true">{item.rose}</p>
                </div>
                <DownloadButtons file={item.file} label={`LISD abbreviated ${item.name}, ${item.rose}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-ds-2xl" data-oid="310c8b4c1e">
        <div className="flex flex-wrap items-end justify-between gap-ds-md" data-oid="0014dda7f8">
          <div data-oid="552ecbd147">
            <p className="type-label uppercase text-muted-foreground" data-oid="fa53442053">Legacy · Limited Use</p>
            <h3 className="type-heading mt-ds-xs text-foreground" data-oid="6f3e5e643d">Horizontal Lockup with Tagline</h3>
          </div>
          <p className="type-caption max-w-xl text-muted-foreground" data-oid="3d65b63e35">Includes our tagline, “Leading to a Bright Future.” Kept on file for existing materials and approved requests.</p>
        </div>
        <div className="mt-ds-lg flex items-start gap-ds-md rounded-lg border border-border border-l-4 border-l-input bg-background p-ds-lg" data-oid="e1acb1b1fe">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" data-oid="2c4eb42fe1" />
          <div data-oid="ca7de3bdd1">
            <h4 className="type-label uppercase text-foreground" data-oid="215ce4de86">De-Prioritized</h4>
            <p className="type-body mt-ds-xs max-w-4xl text-muted-foreground" data-oid="466c308a6d">Going forward, default to the lockup without the tagline for all new work. The tagline version is still allowed, but only for updating materials that already use it, or when Communications specifically approves it. Don’t add the tagline to new designs on your own, and never set the tagline as separate text next to the logo.</p>
          </div>
        </div>
        <ul className="mt-ds-lg grid grid-cols-1 gap-ds-lg md:grid-cols-2 xl:grid-cols-3" data-oid="501f2718c8">
          {TAGLINE.map((item, index) => (
            <li key={item.file} data-index={index} className="overflow-hidden rounded-lg border border-border bg-background" data-oid="e5c9447832" data-oid-shared="true" data-oid-instance-targetable="true">
              <div className={`flex h-44 items-center justify-center px-ds-xl py-ds-lg ${item.tile}`} data-oid="1d10c1226a" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-classname-dynamic="true">
                <img src={assetPath(item.file)} alt={`Leander ISD horizontal lockup with tagline, ${item.name}, ${item.rose}`} draggable={false} className="h-full w-full select-none object-contain" data-oid="ace5988219" data-oid-shared="true" data-oid-instance-targetable="true" />
              </div>
              <div className="flex items-center justify-between gap-ds-sm border-t border-border p-ds-md" data-oid="ea60b1b964" data-oid-shared="true" data-oid-instance-targetable="true">
                <div data-oid="96fb8fe9e7" data-oid-shared="true" data-oid-instance-targetable="true">
                  <p className="font-heading text-[1rem] font-bold text-foreground" data-oid="26f49c1551" data-oid-shared="true" data-oid-instance-targetable="true">{item.name}</p>
                  <p className="type-caption text-muted-foreground" data-oid="ce686a03ae" data-oid-shared="true" data-oid-instance-targetable="true">{item.rose}</p>
                </div>
                <DownloadButtons file={item.file} label={`tagline lockup, ${item.name}, ${item.rose}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-ds-2xl" data-oid="6423f9d798">
        <div className="flex flex-wrap items-end justify-between gap-ds-md" data-oid="83b368fcba">
          <div data-oid="a46ddedb69">
            <h3 className="type-heading text-foreground" data-oid="ac8644d752">The Compass Rose</h3>
            <p className="type-body mt-ds-xs max-w-4xl text-muted-foreground" data-oid="4d32c875c5">The Compass Rose is the prominent and most recognizable anchor of our district brand. It can stand alone on apparel or social media and may be used strategically where the district identity is already established. Its uppermost point always uses the same directional lighting: the left face is illuminated and the right face is shaded. Never invert, mirror or reconstruct the artwork.</p>
          </div>
          <p className="type-caption text-muted-foreground" data-oid="93bc3c6058">Minimum size: 0.375″ in print, 24px on screen.</p>
        </div>
        <ul className="mt-ds-lg grid grid-cols-1 gap-ds-lg md:grid-cols-3 xl:grid-cols-5" data-oid="0cd5bed7ea">
          {ROSES.map((item, index) => (
            <li key={item.file} data-index={index} className="flex flex-col overflow-hidden rounded-lg border border-border bg-background" data-oid="21fc7de784" data-oid-shared="true" data-oid-instance-targetable="true">
              <div className={`flex aspect-square items-center justify-center p-ds-xl ${item.tile}`} data-oid="1fa6f980ce" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-classname-dynamic="true">
                <img src={assetPath(item.file)} alt={`Leander ISD compass rose, ${item.name}`} draggable={false} className="h-full w-full select-none object-contain" data-oid="e2d211a4cf" data-oid-shared="true" data-oid-instance-targetable="true" />
              </div>
              <div className="flex flex-1 flex-col gap-ds-sm border-t border-border p-ds-md" data-oid="3d1ef414ea" data-oid-shared="true" data-oid-instance-targetable="true">
                <p className="font-heading text-[1rem] font-bold text-foreground" data-oid="c3868eeb26" data-oid-shared="true" data-oid-instance-targetable="true">{item.name}</p>
                <p className="type-caption flex-1 text-muted-foreground" data-oid="e8945bbddf" data-oid-shared="true" data-oid-instance-targetable="true">{item.use}</p>
                <DownloadButtons file={item.file} label={`compass rose, ${item.name}`} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-ds-2xl" data-oid="d181ca3031">
        <h3 className="type-heading text-foreground" data-oid="8f513d9c04">Please don’t</h3>
        <div className="mt-ds-lg grid grid-cols-1 gap-ds-lg md:grid-cols-2 xl:grid-cols-4" data-oid="f0aa6f887f">
          <div className="overflow-hidden rounded-lg border border-border bg-background" data-oid="a9bd93ceca">
            <div className="flex h-44 items-center justify-center overflow-hidden px-ds-lg" data-oid="08facc7236">
              <Wordmark className="h-12 scale-x-[1.3] scale-y-[0.65]" />
            </div>
            <div className="flex items-start gap-ds-sm border-t-4 border-destructive p-ds-md" data-oid="0ba41dc51b">
              <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" data-oid="ad1e2a8f2a" />
              <p className="type-body text-foreground" data-oid="a79ca868de">Stretch or squash the lockup.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-background" data-oid="31403f372e">
            <div className="flex h-44 items-center justify-center overflow-hidden px-ds-lg" data-oid="bc20863cbd">
              <Wordmark className="h-11 -rotate-12" />
            </div>
            <div className="flex items-start gap-ds-sm border-t-4 border-destructive p-ds-md" data-oid="99edfb8271">
              <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" data-oid="84652a019c" />
              <p className="type-body text-foreground" data-oid="75c5ac3569">Rotate or set it on an angle.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-background" data-oid="8ff8b211af">
            <div className="flex h-44 items-center justify-center overflow-hidden px-ds-lg hue-rotate-[140deg]" data-oid="0d054a0454">
              <Wordmark className="h-12" />
            </div>
            <div className="flex items-start gap-ds-sm border-t-4 border-destructive p-ds-md" data-oid="58f2ecfe12">
              <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" data-oid="19fde481af" />
              <p className="type-body text-foreground" data-oid="84526f26cb">Recolor it outside the brand palette.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-background" data-oid="2619dcad26">
            <div className="flex h-44 items-center justify-center overflow-hidden bg-secondary px-ds-lg" data-oid="4141d27652">
              <Wordmark variant="blue-gold2" className="h-12 drop-shadow-[4px_4px_0_rgb(0_0_0/0.45)]" />
            </div>
            <div className="flex items-start gap-ds-sm border-t-4 border-destructive p-ds-md" data-oid="1bb51ef0f8">
              <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" data-oid="298b45da66" />
              <p className="type-body text-foreground" data-oid="864f8012c6">Place the gold rose on gold, or add shadows and effects.</p>
            </div>
          </div>
        </div>
        <div className="mt-ds-lg flex items-center gap-ds-sm" data-oid="34fee2a625">
          <Check className="h-5 w-5 text-success" data-oid="ec6d31aefc" />
          <p className="type-caption text-muted-foreground" data-oid="8aee830e2f">When in doubt, place the blue and gold lockup on white with plenty of breathing room.</p>
        </div>
      </div>
    </section>
  )
}
