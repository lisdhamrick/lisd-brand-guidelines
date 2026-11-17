import { Download } from "lucide-react"
import { assetPath } from "../../lib/assetPath"

const DIAGRAMS = [
  { id: "ring-reference", title: "Start with the ring.", description: "Use the implied outside edge of the circular ring as the Rose’s visual boundary. Its long points project beyond that boundary. The dashed circle is a construction guide, not an addition to the logo.", alt: "Official Compass Rose with a dashed circle following the ring and guides distinguishing it from the projecting points." },
  { id: "horizontal-clear-space", title: "Give the full logo room.", description: "X is the height of the letters in LEANDER. Keep at least X clear beyond the lettering at the sides and the Rose’s ring at the top and bottom. Measure from whichever visual edge extends farthest; don’t start an extra X at the point tips.", alt: "Horizontal logo with X measured from the letter height and a shaded clear area extending from the lettering and ring, rather than the Rose’s tips." },
  { id: "rose-clear-space", title: "Carry the same spacing into standalone use.", description: "For the Rose alone, use X from a full logo with the same-sized Rose. Measure outward from the ring on every side. The Rose’s own points may occupy this area; other text, graphics and edges should stay outside it.", alt: "Standalone Compass Rose with an X-wide clear area measured from the ring on all four sides. The points remain inside that clear area." },
  { id: "optical-alignment", title: "Align the visual weight.", description: "When placing the Rose beside text or along a layout margin, align the ring to the guide. Let the points extend into the margin. Aligning the tips instead makes the Rose look inset. Leave enough room at the page or trim edge to keep every point intact.", alt: "Side-by-side comparison: aligning the ring to top and left margins visually connects the Rose to the text below; aligning the tips makes it appear inset and too low." },
] as const

export function LogoSpacing() {
  return (
    <div id="logo-spacing" className="mt-ds-2xl scroll-mt-24">
      <p className="type-label uppercase text-primary">Space & alignment</p>
      <h3 className="type-display mt-ds-sm text-[clamp(2.5rem,5vw,4rem)] uppercase text-foreground">Follow the ring.</h3>
      <p className="type-body mt-ds-md max-w-4xl text-muted-foreground">Give the logo breathing room, then align it by what your eye sees. The Compass Rose’s ring anchors its visual weight; the points extend beyond it.</p>
      <p className="type-caption mt-ds-sm text-muted-foreground">Recommended spacing approach · X = the logotype’s letter height</p>
      <div className="mt-ds-xl grid grid-cols-1 gap-ds-lg xl:grid-cols-2">
        {DIAGRAMS.map(({ id, title, description, alt }) => (
          <figure key={id} className="flex flex-col overflow-hidden rounded-lg border border-border bg-background">
            <img src={assetPath(`examples/logo-spacing/${id}.svg`)} alt={alt} width={800} height={480} loading="lazy" className="block h-auto w-full" />
            <figcaption className="flex flex-1 flex-col items-start border-t border-border p-ds-lg">
              <h4 className="font-heading text-xl font-bold text-foreground">{title}</h4>
              <p className="type-body mt-ds-sm text-muted-foreground">{description}</p>
              <a href={assetPath(`examples/logo-spacing/${id}.svg`)} download className="mt-ds-md inline-flex items-center gap-ds-xs font-label text-sm font-semibold text-primary underline underline-offset-4"><Download aria-hidden="true" className="h-4 w-4" />Download diagram (SVG)</a>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
