import { Check, X } from "lucide-react";
import { assetPath } from "../../lib/assetPath";

export function PhotographySection() {
  return (
    <section id="photography" className="bg-background px-ds-xl py-ds-3xl xl:px-ds-3xl" data-oid="3e192a4d4a" data-oid-component-root="true" data-oid-callsite-deletable="true" data-oid-callsite-single="true">
      <div className="grid grid-cols-1 gap-ds-2xl xl:grid-cols-12" data-oid="9c837c6ea2">
        <div className="xl:col-span-4" data-oid="6731fc0bd8">
          <p className="type-label uppercase text-primary" data-oid="9d4ac12a47">05 — Photography</p>
          <h2 className="type-display mt-ds-md text-[4rem] uppercase text-foreground" data-oid="46c7c5b0d6">Real kids. Real moments.</h2>
          <p className="type-body mt-ds-lg text-muted-foreground" data-oid="493fabd25f">
            Our photography captures the energy of learning in action. Get close, catch genuine expressions, and look for natural pops of blue and gold in the frame.
          </p>
          <ul className="mt-ds-xl flex flex-col gap-ds-md" data-oid="d443ce1d7a">
            <li className="type-body flex items-start gap-ds-sm text-foreground" data-oid="6f21276a57">
              <Check className="mt-1 h-5 w-5 shrink-0 text-success" data-oid="61e2854494" />
              Candid, in-the-moment action over posed lineups
            </li>
            <li className="type-body flex items-start gap-ds-sm text-foreground" data-oid="6c7c961e61">
              <Check className="mt-1 h-5 w-5 shrink-0 text-success" data-oid="7b09fc18db" />
              Diverse students reflecting every campus community
            </li>
            <li className="type-body flex items-start gap-ds-sm text-foreground" data-oid="3dbf5bbea1">
              <Check className="mt-1 h-5 w-5 shrink-0 text-success" data-oid="23237515ba" />
              Bright, natural light and clean backgrounds
            </li>
            <li className="type-body flex items-start gap-ds-sm text-foreground" data-oid="6d05436d9d">
              <X className="mt-1 h-5 w-5 shrink-0 text-destructive" data-oid="429f0b70e5" />
              Heavy filters, clutter, or images that do not follow district privacy and media-consent requirements
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-6 grid-rows-[16rem_16rem_12rem] gap-ds-md xl:col-span-8" data-oid="31a2789e39">
          <figure className="relative col-span-4 row-span-2 overflow-hidden rounded-lg bg-accent" data-oid="31bb23a9a6">
            <img src={import.meta.env.BASE_URL + "mercury-attachments/52e3eb2d1f8d68f3b6152d322fef0b8c-First-Day_003__1_.jpg"}

            alt="Teacher leading an elementary class as students raise their hands"
            className="h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.hidden = true;
            }} data-oid="c9a52ee5ef" />
            
            <figcaption className="type-label absolute bottom-ds-md left-ds-md rounded-sm bg-secondary px-ds-sm py-ds-xs uppercase text-secondary-foreground" data-oid="91326de4e1">Academics</figcaption>
          </figure>
          <figure className="relative col-span-2 row-span-1 overflow-hidden rounded-lg bg-accent-foreground" data-oid="453b179c1e">
            <img src={import.meta.env.BASE_URL + "mercury-attachments/d16db980fdea35ab7c094a893e95a64a-2025-05_UIL_State_Track_Meet_11.jpg"}

            alt="Football stadium under the lights at night"
            className="h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.hidden = true;
            }} data-oid="6736ede3b5" />
            
            <figcaption className="type-label absolute bottom-ds-md left-ds-md rounded-sm bg-primary px-ds-sm py-ds-xs uppercase text-primary-foreground" data-oid="192baae3ff">Athletics</figcaption>
          </figure>
          <figure className="relative col-span-2 row-span-2 overflow-hidden rounded-lg bg-accent" data-oid="3b79630f69">
            <img src={import.meta.env.BASE_URL + "mercury-attachments/e8919980924c2a172ae8cb185a7bf9d6-2025-09-29_FOB_069.jpg"}

            alt="Marching band drummers performing"
            className="h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.hidden = true;
            }} data-oid="afc877bfca" />
            
            <figcaption className="type-label absolute bottom-ds-md left-ds-md rounded-sm bg-primary px-ds-sm py-ds-xs uppercase text-primary-foreground" data-oid="fee4778950">Fine Arts</figcaption>
          </figure>
          <div className="col-span-4 flex items-center gap-ds-lg rounded-lg bg-primary p-ds-xl" data-oid="f94e681715">
            <p className="font-display text-[4rem] font-extrabold leading-none text-secondary" data-oid="26c6bf0cf6">“</p>
            <p className="font-heading text-[1.5rem] font-bold leading-tight text-primary-foreground" data-oid="05d232ff33">If it doesn’t look like a Tuesday at one of our schools, it doesn’t belong in our brand.</p>
          </div>
        </div>
      </div>
    </section>);

}
