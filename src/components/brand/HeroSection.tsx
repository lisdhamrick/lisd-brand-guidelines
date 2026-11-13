import { ArrowDown, ArrowRight } from "lucide-react";
import { assetPath } from "../../lib/assetPath";

export function HeroSection() {
  return (
    <section id="intro" className="relative overflow-hidden bg-primary text-primary-foreground" data-oid="16354e8182" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      {/*<div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0_38px,rgb(255_255_255/0.035)_38px_40px)]" data-oid="4036b49a3a" />
      <div className="pointer-events-none absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgb(255_192_0/0.18),transparent_65%)]" data-oid="d48febf5d1" />*/}
      <img
        src={assetPath("mercury-attachments/lisd-rose-white1.svg")}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-[30%] h-[44rem] w-[44rem] select-none opacity-10" data-oid="a12c316170" />
      
      <div className="relative grid min-h-screen grid-cols-1 xl:grid-cols-12" data-oid="a500ab9e2b">
        <div className="flex flex-col justify-between gap-ds-2xl px-ds-xl py-ds-2xl xl:col-span-7 xl:px-ds-3xl xl:py-ds-3xl" data-oid="c44ddfddc7">
          <div className="flex items-center gap-ds-md" data-oid="5c44fd47c2">
            <span className="h-1 w-16 bg-secondary" data-oid="8a1ad2691c" />
            <p className="type-label uppercase text-secondary" data-oid="9f80a3d7c1">Brand Guidelines · Edition 2026</p>
          </div>
          <div data-oid="93acd10fb8">
            <h1 className="type-display text-[clamp(3.6rem,6.25vw,7rem)] leading-[0.8] tracking-[-0.04em] uppercase" data-oid="5e4eb0ddf8">
              For Every
              <br data-oid="0b968033fc" />
              Student.
            </h1>
            <p className="type-display text-[clamp(3.6rem,6.25vw,7rem)] leading-[0.8] tracking-[-0.04em] uppercase text-[#FFC000]" data-oid="f0ff8fd14b">Always.</p>
            <p className="type-body mt-ds-xl max-w-2xl text-[1.375rem] text-primary-foreground/85" data-oid="38ed55c68d">
              Every Leander ISD communication is part of the experience we create for students, families, staff and community. These standards ensure we show up clearly and consistently, building trust and familiarity with every social media post, branded T-shirt and board presentation.
            </p>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-ds-lg" data-oid="4fa4213179">
            <a href="#story" className="ds-button ds-button-secondary h-12 px-ds-lg uppercase" data-oid="7654d33cf7">
              Start the guide
              <ArrowDown className="h-4 w-4" data-oid="9f2dbcdb51" />
            </a>
            <div className="flex flex-wrap gap-x-ds-xl gap-y-ds-sm" aria-label="Quick links" data-oid="7105c015c6">
              {[["Find a logo", "#logo"], ["Copy colors", "#color"], ["Check your work", "#checklist"]].map(([label, href]) => (
                <a key={href} href={href} className="inline-flex items-center gap-ds-xs font-heading text-[0.9375rem] font-bold uppercase tracking-[0.04em] text-primary-foreground hover:text-secondary">
                  {label}<ArrowRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="relative min-h-[28rem] xl:col-span-5" data-oid="1259d7a68b">
          <div className="absolute inset-0 bg-accent-foreground" data-oid="3660fd35aa">
            <img src={import.meta.env.BASE_URL + "mercury-attachments/45b738331987199babfa6b8cd34a3c01-22-Academic_Student-Mixer.jpg"}

            alt="Leander ISD students walking together through a school hallway"
            className="h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.hidden = true;
            }} data-oid="5f7d89de18" />
            
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-transparent" data-oid="f59e643db8" />
          <div className="absolute bottom-ds-2xl left-0 bg-secondary px-ds-lg py-ds-md text-secondary-foreground xl:-left-ds-2xl" data-oid="9dbfe3478d">
            <p className="type-label uppercase" data-oid="05dee4811f">Section 00</p>
            <p className="font-display text-[1.5rem] font-extrabold uppercase leading-tight" data-oid="47c503ccad">Start here</p>
          </div>
        </div>
      </div>
    </section>);

}
