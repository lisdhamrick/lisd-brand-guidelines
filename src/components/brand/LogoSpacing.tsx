import { ArrowUpRight, Download } from "lucide-react"
import { assetPath } from "../../lib/assetPath"

type Diagram = {
  id: string
  file: string
  title: string
  description: string
  alt: string
  width: number
  height: number
  sideBySide?: boolean
}

const DIAGRAMS: Diagram[] = [
  {
    id: "horizontal-logo-space",
    file: "horizontal-logo-space.png",
    title: "Give the full logo room.",
    description: "X is the outside diameter of the Compass Rose’s ring. Keep X clear around the visual body: the lettering at the sides and the ring above and below. The points project into that space; don’t add another X beyond them.",
    alt: "Horizontal Leander ISD logo with protected space shown by diagonal hatching. X equals the ring’s outside diameter; the top and bottom spacing starts at the ring, not the projecting compass points.",
    width: 1600,
    height: 600,
  },
  {
    id: "compass-rose-space",
    file: "compass-rose-space.png",
    title: "Same Rose. Same X.",
    description: "For the Rose alone, X is still the ring’s full outside diameter. Measure X outward from the ring on every side. No logotype reference is needed. Keep other text, graphics and page edges outside the protected area.",
    alt: "Standalone Compass Rose with X measured outward from the ring on all four sides. Dashed guides and hatched corners show the protected area; the points project beyond the ring while staying inside that area.",
    width: 784,
    height: 784,
    sideBySide: true,
  },
  {
    id: "optical-alignment",
    file: "optical-alignment.png",
    title: "Align the ring, not the compass points.",
    description: "Align the ring with the layout margin or neighboring text. The points will enter the margin, but every point must remain intact inside the page or trim edge.",
    alt: "Comparison of ring-aligned and point-aligned Compass Roses above the same text. Aligning the ring brings the optical edge to the margin; aligning the compass points makes the Rose look inset.",
    width: 1600,
    height: 700,
  },
  {
    id: "compass-rose-lighting",
    file: "compass-rose-light-source.png",
    title: "One light source. Always.",
    description: "The Compass Rose has a fixed lighting model. On its uppermost point, the left face is illuminated and the right face is shaded. This relationship is built into the approved artwork; it is not a shadow or effect to add. Never mirror, invert or rebuild the mark.",
    alt: "Enlarged Compass Rose with an upper-left hatched field and labeled leaders: the top point’s left face is illuminated, and its right face is shaded.",
    width: 1600,
    height: 640,
  },
]

export function LogoSpacing() {
  return (
    <div id="logo-spacing" className="mt-ds-2xl scroll-mt-24">
      <p className="type-label uppercase text-primary">Space, alignment & lighting</p>
      <h3 className="type-display mt-ds-sm text-[clamp(2.5rem,5vw,4rem)] uppercase text-foreground">Space to be recognized.</h3>
      <p className="type-body mt-ds-md max-w-4xl text-muted-foreground">Give the logo breathing room, then align it by what your eye sees. The Compass Rose’s ring anchors its visual weight; the points extend beyond it.</p>
      <p className="type-caption mt-ds-sm text-muted-foreground">Recommended clear space · X = the ring’s outside diameter</p>

      <div className="mt-ds-xl flex flex-col gap-ds-xl">
        {DIAGRAMS.map(({ id, file, title, description, alt, width, height, sideBySide }) => {
          const src = assetPath(`examples/logo-spacing/${file}`)
          return (
            <figure key={id} id={id} className={`scroll-mt-24 overflow-hidden rounded-sm border border-border bg-background ${sideBySide ? "grid grid-cols-1 lg:grid-cols-2" : ""}`}>
              <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} diagram at full size (opens in a new tab)`} className="block bg-[#181818] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-secondary">
                <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" className="block h-auto w-full" />
              </a>
              <figcaption className={`flex flex-col items-start justify-center p-ds-lg sm:p-ds-xl ${sideBySide ? "border-t border-border lg:border-l lg:border-t-0" : "border-t border-border"}`}>
                <h4 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">{title}</h4>
                <p className="type-body mt-ds-sm max-w-4xl text-muted-foreground">{description}</p>
                {id === "compass-rose-lighting" && (
                  <p className="type-body mt-ds-md max-w-4xl text-muted-foreground">In the single-color Unigold artwork, the background completes the light and dark faces. The light- and dark-background files are deliberately different: choose the approved export for your background to preserve the same lighting.</p>
                )}
                <div className="mt-ds-lg flex flex-wrap gap-x-ds-lg gap-y-ds-sm font-label text-sm font-semibold text-primary">
                  <a href={src} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-ds-xs underline underline-offset-4" aria-label={`View ${title} diagram at full size (opens in a new tab)`}>View full size<ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
                  <a href={src} download className="inline-flex items-center gap-ds-xs underline underline-offset-4" aria-label={`Download ${title} diagram (PNG)`}><Download aria-hidden="true" className="h-4 w-4" />Download diagram (PNG)</a>
                </div>
              </figcaption>
            </figure>
          )
        })}
      </div>
    </div>
  )
}
