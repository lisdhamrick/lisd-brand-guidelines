import { assetPath } from "./assetPath"

// Loads the district's Noto Serif variable font and makes it the body/serif face.
const NOTO_SERIF_URL = assetPath(
  "mercury-assets/urn_aaid_sc_US_dc577cb7-7ec8-4fcf-98b3-4f5f1eb83fa2-NotoSerif-VariableFont_wdth_wght.ttf",
)

const BODY_STACK = `"Noto Serif", "Source Serif 4", serif`

export function installBrandFonts() {
  if (typeof document === "undefined") return
  if (!document.getElementById("brand-font-noto-serif")) {
    const style = document.createElement("style")
    style.id = "brand-font-noto-serif"
    style.textContent = `@font-face {
  font-family: "Noto Serif";
  src: url("${NOTO_SERIF_URL}") format("truetype");
  font-weight: 100 900;
  font-stretch: 62.5% 100%;
  font-style: normal;
  font-display: swap;
}`
    document.head.appendChild(style)
  }
  // Inline on <html> so it wins over the compiled :root tokens.
  const root = document.documentElement.style
  root.setProperty("--ds-font-source-serif-4", BODY_STACK)
  root.setProperty("--font-body", BODY_STACK)
}
