import { X } from "lucide-react"
import { assetPath } from "../../lib/assetPath"

const EXAMPLES = [
  ["stretch", "Don’t stretch it.", "Keep the original width-to-height proportions. Resize from a corner with proportions locked."],
  ["squash", "Don’t squeeze it to fit.", "Choose the approved stacked logo for a narrow space instead of compressing the horizontal version."],
  ["rotate", "Keep it upright.", "Don’t tilt the logo or rotate the Compass Rose for decoration."],
  ["recolor", "Don’t invent colorways.", "Use the supplied color versions. Campus or event colors don’t replace the district palette."],
  ["blue-rose", "A blue Rose is still wrong.", "Even LISD Blue is not an approved Compass Rose color. Use the supplied gold, white or black artwork."],
  ["compression", "Don’t recycle a damaged copy.", "Skip screenshots, tiny web copies and compressed images. Start with a fresh PNG or SVG download."],
  ["shadow", "Skip the special effects.", "Don’t add drop shadows, bevels, metallic finishes or other dimensional treatments."],
  ["outline", "Don’t trace or outline it.", "Keep the solid artwork intact. An outline changes the letterforms and the Compass Rose."],
  ["gradient", "Don’t add gradients.", "The two gold values in the approved Rose are intentional flat colors, not an invitation to add a gradient."],
  ["badge", "Don’t build a new logo from it.", "Don’t rearrange the elements or package them inside homemade badges, borders or decorative flourishes."],
  ["mirror", "Keep the light on the left.", "Don’t mirror or invert the Rose. The top point’s left face is always illuminated; its right face is shaded."],
  ["wrong-background", "Match the Rose to its background.", "The light- and dark-background Unigold files are different on purpose. This light-background file reverses the lighting on blue."],
] as const

export function LogoMisuse() {
  return (
    <div id="logo-misuse" className="mt-ds-2xl scroll-mt-24">
      <p className="type-label uppercase text-primary">Protect the identity</p>
      <h3 className="type-display mt-ds-sm text-[clamp(2.5rem,5vw,4rem)] uppercase text-foreground">Please don’t.</h3>
      <p className="type-body mt-ds-md max-w-3xl text-muted-foreground">Small changes add up to a different identity. These are deliberately incorrect examples, made from our official artwork to show what to avoid.</p>
      <ul className="mt-ds-xl grid grid-cols-1 gap-ds-lg md:grid-cols-2 2xl:grid-cols-3">
        {EXAMPLES.map(([id, title, description]) => (
          <li key={id} className="overflow-hidden rounded-lg border border-border bg-background">
            <img src={assetPath(`examples/logo-misuse/${id}.svg`)} alt={`Incorrect use: ${description}`} width={800} height={440} loading="lazy" className="block h-auto w-full" />
            <div className="border-t-4 border-destructive p-ds-lg">
              <h4 className="flex items-start gap-ds-sm font-heading text-xl font-bold text-foreground"><X aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-destructive" />{title}</h4>
              <p className="type-caption mt-ds-sm text-muted-foreground">{description}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-ds-lg rounded-lg border border-border bg-background p-ds-lg">
        <h4 className="type-heading text-foreground">Use the current artwork. Don’t recreate it.</h4>
        <p className="type-body mt-ds-sm max-w-4xl text-muted-foreground">Retire older Compass Rose files, even if they look familiar. Don’t substitute a similar star or compass, retype the wordmark in another font, or ask AI to redraw, embellish or “improve” the logo. Download the current approved files above.</p>
      </div>
    </div>
  )
}
