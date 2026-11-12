import { useEffect, useRef, useState } from "react"
import { ChevronDown, X } from "lucide-react"
import { SECTIONS } from "./sections"
import { Wordmark } from "./Wordmark"

/** Sticky header for screens below `lg`: shows the current section, scroll progress, and a jump menu. */
export function MobileNav() {
  const [active, setActive] = useState<string>("intro")
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

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

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const jumpTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById(id)
    if (!el) return
    e.preventDefault()
    setOpen(false)
    const offset = headerRef.current?.offsetHeight ?? 0
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" })
    history.replaceState(null, "", `#${id}`)
  }

  const current = SECTIONS.find((s) => s.id === active) ?? SECTIONS[0]
  const currentIndex = SECTIONS.findIndex((s) => s.id === current.id)

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-border bg-background lg:hidden" data-oid="f3964978c7" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true" data-oid-text-editable="false" data-oid-text-source="element:div|element:div|expression:5c3db5b4f7b7">
      <div className="flex items-center justify-between gap-ds-md px-ds-md py-ds-sm" data-oid="1caec4b1c0">
        <a href="#intro" onClick={jumpTo("intro")} className="block shrink-0" aria-label="Back to top" data-oid="998f45642a">
          <Wordmark className="h-7" />
        </a>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-section-menu"
          onClick={() => setOpen((o) => !o)}
          className="flex min-w-0 items-center gap-ds-sm rounded-md bg-primary px-ds-md py-ds-sm text-primary-foreground transition-colors hover:bg-accent-foreground aria-expanded:bg-foreground" data-oid="a0afe64aeb" data-oid-text-editable="false" data-oid-text-source="element:span|element:span|expression:d67934bf6c3f"
        >
          <span className="type-caption shrink-0 tabular-nums text-secondary" data-oid="0509dbe59c" data-oid-text-editable="false" data-oid-text-source="expression:28b89fb4f475|text">{current.number} / 07</span>
          <span className="truncate font-heading text-[0.875rem] font-semibold" data-oid="a19bb36eea">{current.label}</span>
          {open ? <X className="h-4 w-4 shrink-0" data-oid="910d5898e3" /> : <ChevronDown className="h-4 w-4 shrink-0" data-oid="8c8c65b2d5" />}
        </button>
      </div>

      <div className="h-1 w-full bg-muted" role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)} data-oid="82d1f718b5">
        <div className="h-full bg-secondary transition-[width] duration-150" style={{ width: `${progress * 100}%` }} data-oid="f73a71b342" data-oid-style-dynamic="width" />
      </div>

      {open && (
        <>
          <div className="pointer-events-auto fixed inset-0 top-[var(--mobile-nav-h,4.5rem)] z-40 bg-foreground/40" onClick={() => setOpen(false)} aria-hidden="true" data-oid="07d17fe29f" />
          <nav id="mobile-section-menu" aria-label="Guideline sections" className="absolute inset-x-0 top-full z-50 max-h-[70vh] overflow-y-auto border-b-4 border-secondary bg-primary px-ds-md py-ds-md shadow-lg" data-oid="ea16ca23c1">
            <p className="type-label px-ds-sm uppercase text-secondary" data-oid="ec005206e3">Brand Guidelines · 2026</p>
            <ul className="mt-ds-sm flex flex-col" data-oid="bc090c7a34">
              {SECTIONS.map((s, index) => (
                <li key={s.id} data-oid="72f1e09c1a" data-oid-shared="true" data-oid-instance-targetable="true">
                  <a
                    href={`#${s.id}`}
                    data-index={index}
                    onClick={jumpTo(s.id)}
                    aria-current={active === s.id ? "true" : undefined}
                    className="flex items-center gap-ds-md border-b border-primary-foreground/15 px-ds-sm py-ds-md font-heading text-[1.125rem] font-bold text-primary-foreground transition-colors hover:text-secondary aria-[current=true]:text-secondary" data-oid="823f2a4fdd" data-oid-shared="true" data-oid-instance-targetable="true" data-oid-text-editable="false" data-oid-text-source="element:span|expression:b66d107c5223|expression:8a0cb4bd42f2"
                  >
                    <span className="type-caption tabular-nums text-primary-foreground/60" data-oid="552da9a4ed" data-oid-shared="true" data-oid-instance-targetable="true">{s.number}</span>
                    {s.label}
                    {index < currentIndex && <span className="type-caption ml-auto uppercase text-primary-foreground/50" data-oid="3eabce4bc6" data-oid-shared="true">Read</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  )
}
