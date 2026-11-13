import { useState } from "react"
import { ArrowUpRight, CheckCircle2, Circle, Download } from "lucide-react"
import { Wordmark } from "./Wordmark"

const ITEMS = [
  "I selected the correct horizontal, stacked, abbreviated or Compass Rose artwork for this use.",
  "The logo has enough clear space and uses the correct light- or dark-background version.",
  "LISD Blue is dominant, Unigold is an accent and every text pairing has sufficient contrast.",
  "Headlines use Futura PT Bold or an approved equivalent; body copy uses Noto Serif.",
  "Photos are candid, well-lit and follow district privacy and media-consent requirements.",
  "Every meaningful image has alt text, and on-image text remains readable.",
  "Names, dates, links and calls to action have been verified.",
  "Translation and language-access needs have been considered.",
  "The message leads with what people need to know and makes the next step easy to find.",
]

export function ChecklistSection() {
  const [done, setDone] = useState<boolean[]>(() => ITEMS.map(() => false))
  const count = done.filter(Boolean).length
  const pct = Math.round((count / ITEMS.length) * 100)

  return (
    <section id="checklist" className="bg-primary px-ds-xl py-ds-3xl text-primary-foreground xl:px-ds-3xl" data-oid="59bb3bd6c6" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <div className="grid grid-cols-1 gap-ds-2xl xl:grid-cols-12" data-oid="70c145f669">
        <div className="xl:col-span-5" data-oid="fd3d799450">
          <p className="type-label uppercase text-secondary" data-oid="f8e36d5050">06 — Checklist &amp; Resources</p>
          <h2 className="type-display mt-ds-md text-[4rem] uppercase" data-oid="62c8d64c6d">Before you hit send</h2>
          <p className="type-body mt-ds-lg text-primary-foreground/80" data-oid="95ee6c862b">Run through these checks before anything goes to print, social media or the website. Completion is a quality check, not a substitute for Communications approval when one is required.</p>
          <div className="mt-ds-2xl" data-oid="2099fd82f2">
            <div className="flex items-end justify-between" data-oid="9412de3bfa">
              <p className="font-display text-[6rem] font-extrabold leading-none text-secondary tabular-nums" data-oid="226ffae786" data-oid-text-editable="false" data-oid-text-source="expression:7e9aaa26d6b0|text">{pct}%</p>
              <p className="type-label uppercase" data-oid="4459d771f7" data-oid-text-editable="false" data-oid-text-source="expression:ee9f38e186ba|text|expression:84722b8f5f4c|text">{count} of {ITEMS.length} complete</p>
            </div>
            <div className="mt-ds-md h-3 overflow-hidden rounded-full bg-primary-foreground/15" data-oid="86b83f7f3a">
              <div className="h-full rounded-full bg-secondary transition-all duration-500" style={{ width: `${pct}%` }} data-oid="3b9e722cd5" data-oid-style-dynamic="width" />
            </div>
            <p className="type-body mt-ds-md text-primary-foreground/80" data-oid="efbdfc63fb">
              {count === ITEMS.length ? "You’re on brand. Go publish it." : "Keep going — consistency is what makes us recognizable."}
            </p>
          </div>
        </div>
        <ul className="flex flex-col gap-ds-sm xl:col-span-7" data-oid="15f9a8cab6">
          {ITEMS.map((item, index) => (
            <li key={item} data-oid="8314885b6b" data-oid-shared="true" data-oid-instance-targetable="true">
              <button
                type="button"
                aria-pressed={done[index]}
                onClick={() => setDone((d) => d.map((v, i) => (i === index ? !v : v)))}
                className="group flex w-full items-center gap-ds-md rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-ds-lg text-left transition-colors hover:bg-primary-foreground/10 aria-pressed:border-secondary aria-pressed:bg-secondary aria-pressed:text-secondary-foreground" data-oid="3a8e9dd2a6" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-text-editable="false" data-oid-text-source="expression:172a01df148e|element:span"
              >
                {done[index] ? <CheckCircle2 className="h-7 w-7 shrink-0" data-oid="4e0df9f439" data-oid-shared="true" /> : <Circle className="h-7 w-7 shrink-0 opacity-60" data-oid="8b6d79bfed" data-oid-shared="true" />}
                <span className="type-body text-[1.125rem]" data-oid="bd32f273e3" data-oid-shared="true" data-oid-instance-targetable="true">{item}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-ds-2xl grid grid-cols-1 gap-ds-md border-t border-primary-foreground/20 pt-ds-xl md:grid-cols-3">
        <a href="#logo" className="group flex items-center justify-between rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-ds-lg hover:bg-primary-foreground/10">
          <span><span className="type-label uppercase text-secondary">Assets</span><span className="type-body mt-ds-xs block">Download approved logos</span></span>
          <Download className="h-6 w-6" />
        </a>
        <a href="https://www.leanderisd.org/schoolcommunityrelations/" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-ds-lg hover:bg-primary-foreground/10">
          <span><span className="type-label uppercase text-secondary">Support</span><span className="type-body mt-ds-xs block">Contact Communications</span></span>
          <ArrowUpRight className="h-6 w-6" />
        </a>
        <a href="https://www.leanderisd.org/schoolcommunityrelations/" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-ds-lg hover:bg-primary-foreground/10">
          <span><span className="type-label uppercase text-secondary">Review</span><span className="type-body mt-ds-xs block">Request help or report an outdated asset</span></span>
          <ArrowUpRight className="h-6 w-6" />
        </a>
      </div>

      <footer className="mt-ds-3xl flex flex-wrap items-center justify-between gap-ds-lg border-t border-primary-foreground/20 pt-ds-xl" data-oid="ef74b9ee15">
        <Wordmark variant="white-gold2" className="h-12" />
        <p className="type-body text-primary-foreground/80" data-oid="ed2cc8985b">Questions or asset requests? Contact the Leander ISD Communications Department.</p>
        <p className="type-caption text-primary-foreground/60" data-oid="7e5ae594b3">Updated November 2026 · © Leander Independent School District</p>
      </footer>
    </section>
  )
}
