import { useState } from "react"
import { ArrowRight } from "lucide-react"

type Tab = "we-are" | "examples"

export function VoiceSection() {
  const [tab, setTab] = useState<Tab>("we-are")
  const [showAfter, setShowAfter] = useState(true)

  return (
    <section id="voice" className="relative overflow-hidden bg-secondary px-ds-xl py-ds-3xl text-secondary-foreground xl:px-ds-3xl" data-oid="287cbf1b7c" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      {/*<div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0_118px,rgb(0_89_135/0.08)_118px_120px)]" data-oid="2dd7efd69f" />*/}
      <div className="relative grid grid-cols-1 gap-ds-2xl xl:grid-cols-12" data-oid="4a442befd5">
        <div className="xl:col-span-5" data-oid="cc7435c76b">
          <p className="type-label uppercase text-primary" data-oid="9980fd9209">06 — Voice &amp; Tone</p>
          <h2 className="type-display mt-ds-md text-[4rem] uppercase" data-oid="2f7d4bea14">Clear, Human &amp; Useful</h2>
          <p className="type-body mt-ds-lg max-w-lg" data-oid="bf7b306295">
            We communicate the way our best educators do: with clarity, care, confidence and respect. Lead with what people need to know, make the next step easy to find and explain how the information affects students.
          </p>
        </div>

        <div className="rounded-lg bg-background p-ds-xl text-foreground xl:col-span-7" data-oid="039b83cc72" data-oid-text-editable="false" data-oid-text-source="element:div|expression:45bc8d27c638">
          <div className="ds-tabs" data-oid="cd1d6fec7d">
            <div className="ds-tab-list" role="tablist" aria-label="Voice guidance" data-oid="17a5768b1d">
              <button type="button" role="tab" className="ds-tab uppercase" aria-selected={tab === "we-are"} onClick={() => setTab("we-are")} data-oid="74422a7437">We are / We aren’t</button>
              <button type="button" role="tab" className="ds-tab uppercase" aria-selected={tab === "examples"} onClick={() => setTab("examples")} data-oid="fd34b1d412">Rewrite examples</button>
            </div>
          </div>

          {tab === "we-are" ? (
            <div className="mt-ds-xl grid grid-cols-1 gap-ds-md md:grid-cols-2" data-oid="e819fc93cb">
              <div className="flex items-center justify-between rounded-md bg-accent px-ds-lg py-ds-md" data-oid="eee36635b6">
                <p className="font-heading text-[1.25rem] font-bold text-primary" data-oid="be9ce6f40d">Confident</p>
                <p className="type-caption text-muted-foreground" data-oid="dc2e950883">not boastful</p>
              </div>
              <div className="flex items-center justify-between rounded-md bg-accent px-ds-lg py-ds-md" data-oid="c70f5a6701">
                <p className="font-heading text-[1.25rem] font-bold text-primary" data-oid="71e474a3ce">Warm</p>
                <p className="type-caption text-muted-foreground" data-oid="9b824575ad">not casual</p>
              </div>
              <div className="flex items-center justify-between rounded-md bg-accent px-ds-lg py-ds-md" data-oid="d63a208194">
                <p className="font-heading text-[1.25rem] font-bold text-primary" data-oid="e225f076d9">Clear</p>
                <p className="type-caption text-muted-foreground" data-oid="33d9dcb0f8">not bureaucratic</p>
              </div>
              <div className="flex items-center justify-between rounded-md bg-accent px-ds-lg py-ds-md" data-oid="089c7cbbf0">
                <p className="font-heading text-[1.25rem] font-bold text-primary" data-oid="f885842364">Spirited</p>
                <p className="type-caption text-muted-foreground" data-oid="0c7bff441d">not loud</p>
              </div>
              <div className="flex items-center justify-between rounded-md bg-accent px-ds-lg py-ds-md" data-oid="81fc735017">
                <p className="font-heading text-[1.25rem] font-bold text-primary" data-oid="c9a0e9c429">Inclusive</p>
                <p className="type-caption text-muted-foreground" data-oid="37bfd6caae">not generic</p>
              </div>
              <div className="flex items-center justify-between rounded-md bg-accent px-ds-lg py-ds-md" data-oid="0f2224f9f1">
                <p className="font-heading text-[1.25rem] font-bold text-primary" data-oid="83490c94d1">Honest</p>
                <p className="type-caption text-muted-foreground" data-oid="5ee17f6794">not defensive</p>
              </div>
            </div>
          ) : (
            <div className="mt-ds-xl" data-oid="76e11d7556">
              <div className="flex items-center justify-between gap-ds-md" data-oid="7b074db91b">
                <p className="type-label uppercase text-muted-foreground" data-oid="9540b7b09d">Parent newsletter intro</p>
                <button type="button" aria-pressed={showAfter} onClick={() => setShowAfter((v) => !v)} className="ds-button ds-button-primary uppercase" data-oid="4ab5eb75b4" data-oid-text-editable="false">
                  {showAfter ? "Show before" : "Show after"}
                  <ArrowRight className="h-4 w-4" data-oid="f06f0e0c14" />
                </button>
              </div>
              <div
                data-after={showAfter}
                className="mt-ds-lg rounded-md border-l-8 border-destructive bg-muted/50 p-ds-lg data-[after=true]:border-success data-[after=true]:bg-accent" data-oid="0041447b7c"
              >
                <p className="type-label uppercase text-muted-foreground" data-oid="0b63dcafb5">{showAfter ? "After — on brand" : "Before"}</p>
                <p className="type-body mt-ds-sm text-[1.25rem] text-foreground" data-oid="0c1d2d2725">
                  {showAfter
                    ? "Registration for the new school year is open. Complete it online before the posted deadline — it takes about 10 minutes, and your campus office is happy to help."
                    : "Pursuant to district policy, all parents and/or guardians are hereby advised that enrollment procedures for the forthcoming academic year must be finalized prior to the established deadline."}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
