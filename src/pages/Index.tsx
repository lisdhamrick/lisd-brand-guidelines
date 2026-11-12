import { Toaster } from "sonner"
import { Sidebar } from "../components/brand/Sidebar"
import { MobileNav } from "../components/brand/MobileNav"
import { HeroSection } from "../components/brand/HeroSection"
import { StorySection } from "../components/brand/StorySection"
import { LogoSection } from "../components/brand/LogoSection"
import { ColorSection } from "../components/brand/ColorSection"
import { TypographySection } from "../components/brand/TypographySection"
import { PhotographySection } from "../components/brand/PhotographySection"
import { VoiceSection } from "../components/brand/VoiceSection"
import { ChecklistSection } from "../components/brand/ChecklistSection"

export default function Index() {
  return (
    <main className="min-h-screen scroll-smooth bg-background" data-oid="033b6f01be" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <Sidebar />
      <MobileNav />
      <div className="lg:ml-72" data-oid="3cdebcab9a">
        <HeroSection />
        <StorySection />
        <LogoSection />
        <ColorSection />
        <TypographySection />
        <PhotographySection />
        <VoiceSection />
        <ChecklistSection />
      </div>
      <Toaster position="bottom-right" richColors />
    </main>
  )
}
