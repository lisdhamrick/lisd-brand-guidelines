import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { SECTIONS } from "./sections"
import { Wordmark } from "./Wordmark"

export function Sidebar() {
  const [active, setActive] = useState<string>("intro")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r border-border bg-background lg:flex" data-oid="10ada8093c" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <div className="border-b border-border px-ds-lg py-ds-lg" data-oid="78a81ebb9f">
        <a href="#intro" className="block" data-oid="afd362a13e">
          <Wordmark className="h-11" />
        </a>
        <p className="type-label mt-ds-sm uppercase text-muted-foreground" data-oid="64b365b507">Brand Guidelines · 2026</p>
      </div>
      <nav className="flex-1 overflow-y-auto px-ds-sm py-ds-md" aria-label="Guideline sections" data-oid="35d884d6fb">
        <ul className="flex flex-col gap-ds-xs" data-oid="ee3d03625f">
          {SECTIONS.map((s, index) => (
            <li key={s.id} data-oid="caded3c544" data-oid-shared="true" data-oid-instance-targetable="true">
              <a
                href={`#${s.id}`}
                data-index={index}
                aria-current={active === s.id ? "true" : undefined}
                className="group flex items-center gap-ds-md rounded-md border-l-4 border-transparent px-ds-md py-ds-sm font-heading text-[0.9375rem] font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-primary aria-[current=true]:border-secondary aria-[current=true]:bg-primary aria-[current=true]:text-primary-foreground" data-oid="13e437bed6" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-text-editable="false" data-oid-text-source="element:span|expression:b66d107c5223"
              >
                <span className="type-caption tabular-nums opacity-70" data-oid="17942fc7f0" data-oid-shared="true" data-oid-instance-targetable="true">{s.number}</span>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t border-border px-ds-lg py-ds-lg" data-oid="e11521e545">
        <p className="type-caption text-muted-foreground" data-oid="3bb783e0de">Questions about brand use?</p>
        <a href="#checklist" className="mt-ds-xs inline-flex items-center gap-ds-xs font-heading text-[0.9375rem] font-bold text-primary hover:underline" data-oid="7ec678700f">
          Contact Communications
          <ArrowUpRight className="h-4 w-4" data-oid="794209becd" />
        </a>
      </div>
    </aside>
  )
}
