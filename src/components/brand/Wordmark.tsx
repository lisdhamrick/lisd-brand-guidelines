import { assetPath } from "../../lib/assetPath"

/** Official Leander ISD horizontal lockups. "1" = one-color compass rose, "2" = two-color compass rose. */
export const LOGO_FILES = {
  "blue-gold2": "mercury-attachments/lisd-blue-gold2.svg",
  "blue-gold1": "mercury-attachments/lisd-blue-gold1.svg",
  "black-gold2": "mercury-attachments/lisd-black-gold2.svg",
  "black-gold1": "mercury-attachments/lisd-black-gold1.svg",
  "white-gold2": "mercury-attachments/lisd-white-gold2.svg",
  "white-gold1": "mercury-attachments/lisd-white-gold1.svg",
  "black-black1": "mercury-attachments/lisd-black-black1.svg",
  "white-white1": "mercury-attachments/lisd-white-white1.svg",
} as const

export type LogoVariant = keyof typeof LOGO_FILES

export function Wordmark({ variant = "blue-gold2", className }: { variant?: LogoVariant; className?: string }) {
  return (
    <img
      src={assetPath(LOGO_FILES[variant])}
      alt="Leander ISD"
      draggable={false}
      className={["block h-10 w-auto select-none", className].filter(Boolean).join(" ")} data-oid="90e31f22f8" data-oid-component-root="true" data-oid-classname-dynamic="true"
    />
  )
}
