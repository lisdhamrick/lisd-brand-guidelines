import { useState } from "react"

type Style = "display" | "heading" | "body" | "label"

const STYLE_META: Record<Style, { family: string; print: string; weight: string }> = {
  display: { family: "font-display font-extrabold uppercase tracking-[-0.035em] leading-[0.95]", print: "Futura PT Bold", weight: "Poppins ExtraBold 800" },
  heading: { family: "font-heading font-bold tracking-[-0.02em] leading-[1.15]", print: "Futura PT Bold", weight: "Poppins Bold 700" },
  body: { family: "font-body font-normal leading-[1.65]", print: "Noto Serif Regular", weight: "Noto Serif Regular 400" },
  label: { family: "font-label font-semibold uppercase tracking-[0.08em] leading-[1.3]", print: "Futura PT Demi", weight: "Poppins SemiBold 600" },
}

export function TypographySection() {
  const [text, setText] = useState("Go Big Blue & Gold")
  const [size, setSize] = useState(72)
  const [style, setStyle] = useState<Style>("display")

  return (
    <section id="typography" className="relative overflow-hidden bg-foreground px-ds-xl py-ds-3xl text-background xl:px-ds-3xl" data-oid="2e130460f6" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <div className="pointer-events-none absolute -right-24 top-ds-xl select-none font-display text-[28rem] font-extrabold leading-none text-background/5" data-oid="6aa5c10a3e">Aa</div>
      <div className="relative" data-oid="d261227a0a">
        <p className="type-label uppercase text-secondary" data-oid="a9652e37e2">04 — Typography</p>
        <h2 className="type-display mt-ds-md text-[4rem] uppercase" data-oid="46d91b560d">Bold over clear</h2>
        <p className="type-body mt-ds-md max-w-2xl text-background/75" data-oid="c63e786ae9">
          Heavy geometric headlines give us an athletic, confident voice. A warm serif body keeps longer reading friendly for families. In print, use Futura PT and Noto Serif; on the web and in digital tools, use the approved web equivalents below.
        </p>

        <div className="mt-ds-2xl grid grid-cols-1 gap-ds-lg xl:grid-cols-2" data-oid="91c623d38a">
          <div className="rounded-lg border border-background/15 p-ds-xl" data-oid="3cae886adf">
            <p className="type-label uppercase text-secondary" data-oid="9d701e917c">Headlines</p>
            <p className="mt-ds-md font-display text-[9rem] font-extrabold leading-none tracking-[-0.04em]" data-oid="c37192f2bd">Aa</p>
            <h3 className="type-heading mt-ds-md" data-oid="d43e1cd7ed">Futura PT Bold</h3>
            <p className="type-caption mt-ds-xs text-background/60" data-oid="f426fa7d38">Web: Poppins ExtraBold / Bold</p>
            <p className="mt-ds-lg break-all font-display text-[1.5rem] font-bold tracking-[0.04em]" data-oid="e80ca4f947">ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789</p>
          </div>
          <div className="rounded-lg border border-background/15 p-ds-xl" data-oid="d80f4d5b83">
            <p className="type-label uppercase text-secondary" data-oid="5e81f5b22f">Body copy</p>
            <p className="mt-ds-md font-body text-[9rem] leading-none" data-oid="e86e321df7">Aa</p>
            <h3 className="type-heading mt-ds-md" data-oid="b03b26699c">Noto Serif</h3>
            <p className="type-caption mt-ds-xs text-background/60" data-oid="4d2daf102b">Web: Noto Serif Regular / Bold</p>
            <p className="mt-ds-lg break-all font-body text-[1.5rem]" data-oid="c8588b8bb7">abcdefghijklmnopqrstuvwxyz 0123456789</p>
          </div>
        </div>

        <div className="mt-ds-2xl rounded-lg bg-background p-ds-xl text-foreground" data-oid="82d3114884">
          <div className="flex flex-wrap items-end gap-ds-lg" data-oid="db22c7d11a">
            <div className="ds-field min-w-[18rem] flex-1" data-oid="bc417b69d4">
              <label htmlFor="type-tester" className="ds-field-label uppercase" data-oid="4f083d870f">Type tester</label>
              <input id="type-tester" className="ds-input" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a headline…" data-oid="0e4c574764" />
            </div>
            <div className="ds-field w-56" data-oid="31a579be43">
              <label htmlFor="type-size" className="ds-field-label uppercase" data-oid="6f9d2fe48c" data-oid-text-editable="false" data-oid-text-source="text|expression:89368e1d6801|text">Size · {size}px</label>
              <input id="type-size" type="range" min={12} max={160} value={size} onChange={(e) => setSize(Number(e.target.value))} className="h-[42px] accent-primary" data-oid="6ce42d3de6" />
            </div>
            <div className="ds-tabs" data-oid="3a351d49f9">
              <div className="ds-tab-list" role="tablist" aria-label="Type style" data-oid="475d18dc1b">
                <button type="button" role="tab" className="ds-tab uppercase" aria-selected={style === "display"} onClick={() => { setStyle("display"); setSize(72) }} data-oid="60e42e499f">Display</button>
                <button type="button" role="tab" className="ds-tab uppercase" aria-selected={style === "heading"} onClick={() => { setStyle("heading"); setSize(32) }} data-oid="0dc78e48b7">Heading</button>
                <button type="button" role="tab" className="ds-tab uppercase" aria-selected={style === "body"} onClick={() => { setStyle("body"); setSize(17) }} data-oid="9795d8d95c">Body</button>
                <button type="button" role="tab" className="ds-tab uppercase" aria-selected={style === "label"} onClick={() => { setStyle("label"); setSize(13) }} data-oid="806697ca23">Label</button>
              </div>
            </div>
          </div>
          <div className="mt-ds-xl min-h-[12rem] overflow-hidden border-t border-border pt-ds-xl" data-oid="1933e9a1fd">
            <p className={`${STYLE_META[style].family} break-words text-primary`} style={{ fontSize: `${size}px` }} data-oid="bdc2468b0b" data-oid-style-dynamic="fontSize" data-oid-classname-dynamic="true">
              {text || "Type a headline…"}
            </p>
          </div>
          <p className="type-caption mt-ds-lg text-muted-foreground" data-oid="dbbfeb1143" data-oid-text-editable="false" data-oid-text-source="text|expression:cabca7caeae8|text|expression:1ec57a24652f">
            Print: {STYLE_META[style].print} · Web: {STYLE_META[style].weight}
          </p>
        </div>

        <div className="mt-ds-2xl" data-oid="ad9eb4535c">
          <h3 className="type-heading" data-oid="f628d657c2">Type scale</h3>
          <div className="mt-ds-lg divide-y divide-background/15 border-y border-background/15" data-oid="1cc11745c9">
            <div className="grid grid-cols-12 items-baseline gap-ds-md py-ds-lg" data-oid="1df865a8d5">
              <p className="type-label col-span-2 uppercase text-secondary" data-oid="8575779e97">Display</p>
              <p className="type-display col-span-7 uppercase" data-oid="15a097c888">Lead</p>
              <p className="type-caption col-span-3 text-right text-background/60" data-oid="031cd51183">80px · 800 · 0.95</p>
            </div>
            <div className="grid grid-cols-12 items-baseline gap-ds-md py-ds-lg" data-oid="3c95d87001">
              <p className="type-label col-span-2 uppercase text-secondary" data-oid="aa230b0a2c">Heading</p>
              <p className="type-heading col-span-7" data-oid="4a36be36fb">Welcome back, families</p>
              <p className="type-caption col-span-3 text-right text-background/60" data-oid="39726472d3">32px · 700 · 1.15</p>
            </div>
            <div className="grid grid-cols-12 items-baseline gap-ds-md py-ds-lg" data-oid="8b48c1a5de">
              <p className="type-label col-span-2 uppercase text-secondary" data-oid="aa65271ae0">Body</p>
              <p className="type-body col-span-7" data-oid="df73af8252">Registration for the new school year opens in March. Visit your campus office for help.</p>
              <p className="type-caption col-span-3 text-right text-background/60" data-oid="418a31c7c9">17px · 400 · 1.65</p>
            </div>
            <div className="grid grid-cols-12 items-baseline gap-ds-md py-ds-lg" data-oid="c9097ab7a3">
              <p className="type-label col-span-2 uppercase text-secondary" data-oid="16e4237bc7">Label</p>
              <p className="type-label col-span-7 uppercase" data-oid="3894a7fcb6">Athletics · Fine Arts · Academics</p>
              <p className="type-caption col-span-3 text-right text-background/60" data-oid="dee8bf0d99">13px · 600 · +8%</p>
            </div>
            <div className="grid grid-cols-12 items-baseline gap-ds-md py-ds-lg" data-oid="2d6253b50c">
              <p className="type-label col-span-2 uppercase text-secondary" data-oid="660f00a511">Caption</p>
              <p className="type-caption col-span-7" data-oid="5e4b0dbfeb">Photo: Students at a district STEM night.</p>
              <p className="type-caption col-span-3 text-right text-background/60" data-oid="a9a508d7b0">12px · 400 · 1.45</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
