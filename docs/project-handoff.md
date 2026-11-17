# Leander ISD Brand Guidelines: Project Handoff

Last updated: November 17, 2026

This document is the durable context for the Leander ISD brand guidelines website. It consolidates the foundational planning, editorial decisions, visual and asset standards, implementation history, and unresolved questions that previously lived across several ChatGPT and Codex conversations.

Use this file as the first reference when continuing the project in a new chat, on another computer, or in a cloud development environment. The repository remains the source of truth for implemented work.

## Project links

- Repository: <https://github.com/lisdhamrick/lisd-brand-guidelines>
- Current public preview: <https://lisdhamrick.github.io/lisd-brand-guidelines/>
- Original shared planning conversation: <https://chatgpt.com/share/6afc6dd7-ffe8-83ea-a98d-63329118cf09>
- Current implementation baseline: commit `6b32686` or newer on `main`

## Executive summary

The project is a portable, responsive, one-page website for Leander ISD's district brand guidelines. Its editorial visual direction is inspired by `espn.design`: oversized typography, confident color fields, strong pacing, clear chapters, and practical assets presented in context.

It is not designed specifically for WordPress, Payload, or any other CMS. The repository produces a static build that can be published independently or consumed by different hosting environments. This preserves the option to keep `design.leanderisd.org` on WordPress, move it to Payload, or point it at a static host without rebuilding the experience.

The guide should be visually ambitious but operationally simple. A staff member, vendor, or campus communicator should be able to arrive, identify the correct logo, and download it in seconds without reading an essay about design philosophy.

## Foundational principles

### One continuous editorial experience

The district guidelines should exist as a single anchored page rather than a conventional collection of small documentation pages. One page does not mean one undifferentiated wall of content: each chapter should feel distinct through scale, color, photography, spacing, and transitions.

Persistent desktop navigation and compact mobile navigation should make every section directly reachable. Deep links must stop below the sticky mobile header rather than hiding section headings.

### Portable code and hosting independence

The codebase is canonical. WordPress, Payload, GitHub Pages, or another host should consume the generated static build rather than becoming the source of the guidelines.

The project currently uses React, TypeScript, Vite, and Tailwind CSS. It builds with Node.js 22 and writes its deployable output to `dist/`. All asset URLs respect Vite's configurable base path.

### Practical guidance over decorative documentation

Every section should help a user make a correct decision. Downloads belong beside the relevant guidance. Color values should be copyable. Background-dependent artwork should be demonstrated on the backgrounds where it belongs. File formats should be explained in plain language.

### Official artwork only

Never redraw, reconstruct, recolor, mirror, or use AI to generate Leander ISD logo artwork or brand letterforms. The website should display and distribute approved exports supplied by Leander ISD Communications.

Do not fabricate official artwork to fill a gap. If an approved export is missing or being refreshed, use an explicit placeholder or withhold the download until the correct file is available.

## District identity and editorial foundation

### Primary district line

`For Every Student. Always.` is the primary opening statement and should retain its prominent role in the hero.

### Language that sounds like Leander ISD

Copy should draw from language already established in district communications rather than generic brand-strategy phrasing. Recurring ideas include:

- knowing and appreciating each student;
- student ownership of learning;
- student voice and choice;
- students feeling seen, valued, and supported;
- meaningful learning and meaningful futures;
- partnership among students, families, staff, and community;
- curiosity, confidence, connection, innovation, and reflection; and
- one district serving many distinct communities.

Use `each and every student` when it reflects an official district statement, but do not force it into every paragraph. The goal is recognizable district language, not repetition.

### Voice characteristics

Even though the dedicated Voice & Tone section is intentionally hidden pending additional review, current copy should be:

- clear, human, and useful;
- warm without becoming flippant;
- confident without becoming boastful;
- specific rather than bureaucratic;
- honest rather than defensive;
- energetic without becoming loud; and
- centered on student impact and the reader's next step.

District marketing demonstrates that the voice can be lightly playful when appropriate while remaining trustworthy. Operational, safety, and sensitive communications require a more direct tone than celebratory marketing.

## Information architecture

### Original six-chapter plan

The foundational planning established this structure:

1. Introduction
2. Our Logos
3. The Compass Rose
4. Color
5. Typography
6. Using Our Identity

### Current implemented structure

The current site has evolved into:

1. Introduction
2. Our Story
3. District Logos
4. Color
5. Typography
6. Photography
7. Checklist & Resources

Voice & Tone remains implemented in source but is intentionally not rendered or listed in navigation. It should not be restored for launch until the content is reviewed with Daniel.

The Compass Rose currently appears within District Logos. The original plan treated it as a distinct chapter because it is the most recognizable element of the system and has an unusual lighting rule. Moving it back into a dedicated anchored section remains a valid future refinement, especially if more geometry, background, or misuse examples are added.

## Section-by-section content direction

### 00 — Introduction

The hero should lead with `For Every Student. Always.` and explain that every district communication contributes to the experience created for students, families, staff, and community.

The previous abstract metrics (`Full`, `Flex`, `5`) were removed because they looked editorial but did not help users. The hero now includes direct paths to find a logo, copy colors, and check work before publishing.

Concrete examples such as a social post, branded T-shirt, kindergarten welcome letter, stadium banner, or board presentation help communicate the breadth of the system.

### 01 — Our Story

The central idea is:

> Leander ISD serves many distinct communities, united by one shared commitment: knowing and appreciating each student.

The three current pillars are:

1. **For Every Student** — Each student is at the heart of decisions, communications, and design.
2. **One District, Many Communities** — Every campus has its own character; the district identity connects them through shared purpose.
3. **Clear, Human and Useful** — Respect people's time, make information understandable, and help families know what comes next.

Avoid unsupported claims such as communicating `in every language` unless the guide also provides actual translation and language-access standards.

### 02 — District Logos

The approved hierarchy is:

1. Full horizontal district logo: primary and default.
2. Full stacked district logo: alternative for narrow, square, or vertical spaces.
3. Standalone Compass Rose: prominent supporting symbol.
4. LISD abbreviated logo: secondary, internal, or already-established contexts only.
5. Tagline configurations: deprioritized and retained for legacy or specifically approved uses.

Public-facing, first-impression, and official communications should use the full Leander ISD identity rather than the abbreviation.

Going forward, new work should default to the horizontal logo without the `Leading to a Bright Future` tagline. Tagline versions may be used to update existing materials or when specifically approved. Do not typeset the tagline separately beside the logo.

The primary logo pairs the LEANDER ISD wordmark with the Compass Rose. These are not ingredients to explore creatively. Never redraw them, rearrange their components, or ask an AI system to create variants.

The current interface provides PNG and SVG downloads:

- PNG is appropriate for everyday documents, presentations, websites, and social media.
- SVG is appropriate for professional print, signage, apparel, and vendor production.

Clear-space and minimum-size values should not be presented as official requirements unless Communications has formally approved them. If retained without formal approval, label them as recommendations.

### The Compass Rose

The Compass Rose is the district brand's prominent and most recognizable anchor. It may stand alone on apparel or social content and may be used strategically when other elements have already established the district identity. It is not a universal replacement for the full logo on official communications.

#### Directional lighting rule

The Compass Rose has a consistent implied light source. On the uppermost point, the left face is illuminated and the right face is shaded. This orientation must remain consistent across every approved version.

Do not invert, mirror, recolor, or reconstruct the mark.

#### Why there are two single-color Unigold exports

The light-background and dark-background single-color Unigold Compass Roses are distinct, intentional variants—not redundant exports. In this artwork, the surrounding background participates in the light and dark surfaces of the mark. The appropriate export preserves the apparent left-side illumination on its intended background.

The interface should make the choice easy rather than requiring every user to understand the construction. Ideally, a background selection automatically presents the correct file.

The current standalone variants are:

- two-color gold;
- one-color Unigold for light backgrounds;
- one-color Unigold for dark backgrounds;
- white for dark backgrounds and photography; and
- black for single-color production and light or Unigold fields.

### Asset naming convention

Production filenames should describe identity, configuration, and color treatment:

`LeanderISD-[Configuration]-[Colorway].[extension]`

Examples:

- `LeanderISD-Horizontal-Blue-Gold2.svg`
- `LeanderISD-Stacked-White-Gold1.svg`
- `LeanderISD-Abbreviated-Black-Black1.svg`
- `LeanderISD-CompassRose-Gold1-LightBG.svg`
- `LeanderISD-CompassRose-Gold1-DarkBG.svg`
- `LeanderISD-Horizontal-Tagline-Blue-Gold2.svg`

Use these configuration terms consistently:

- `Horizontal`
- `Stacked`
- `Abbreviated`
- `CompassRose`
- `Horizontal-Tagline`

Use `Gold1` for single-color gold and `Gold2` for two-color gold where those compact terms are helpful for production organization.

Do not put `Futura` in filenames. Typography is part of the approved artwork specification, not an end-user option. Figma frame names should match export filename stems where practical.

Public download labels should remain human-friendly. Filenames organize the library; labels help people choose the right file.

### 03 — Color

Core colors:

- LISD Blue: `#005987`
- LISD Unigold: `#FFC000`
- LISD Deep Gold: `#FCB01A`
- LISD Bright Yellow: `#FFCB0C`

LISD Blue is dominant. LISD Unigold is an energetic accent used to point, highlight, and celebrate—not as a background for long passages of text.

Deep Gold and Bright Yellow are embedded in approved two-color Compass Rose artwork. They are not general-purpose substitutes for Unigold and should not encourage users to rebuild the mark.

Black, white, and Cool Gray are functional supporting neutrals.

The unexplained color-proportion graphic was removed. Do not reintroduce numeric ratios unless the numbers have an approved meaning and the visual explains how to use them.

Color swatches should remain copyable in HEX, RGB, and CMYK. Contrast guidance should favor understandable demonstrations over dense compliance jargon. Never use Unigold for small body text on white. Verify any published contrast ratios before presenting numerical claims.

Do not add Pantone or production color formulas unless they have been confirmed from official source material.

### 04 — Typography

Primary typefaces:

- Futura PT Bold for major display headlines and strong editorial headings.
- Noto Serif for paragraphs, explanatory copy, and longer editorial reading.

Approved practical equivalents:

- Google Workspace display fallback: Geologica ExtraBold.
- Google Workspace serif fallback: Noto Serif Telugu.
- Canva display treatment: Canva's Futura set to ExtraBold for the closest visual match to Futura PT Bold.
- Noto Serif is available through the district Canva Brand Kit.

Short editorial headlines may use all caps. Body copy and longer subheads should use sentence case.

Avoid describing the typographic voice as primarily `athletic`; the district identity must represent academics, fine arts, operations, community, and athletics. `Bold, clear and confident` is more inclusive.

Typography specimens should use real district language such as:

- For Every Student. Always.
- Critical and Creative Thinkers
- Skilled Communicators and Collaborators
- Athletics · Fine Arts · Academics

The production site loads Futura PT through Adobe Fonts and Noto Serif from Google Fonts. Remove or correct any stale references to Poppins.

### 05 — Photography

The photography direction is `Real kids. Real moments.` Photography should show learning in action and students learning, creating, collaborating, performing, serving, and taking ownership of their experience.

Current guidance includes:

- prefer candid, in-the-moment action over posed lineups;
- use bright, natural light and clean backgrounds;
- represent the full breadth of students, staff, programs, and communities over time;
- provide meaningful alt text that communicates the image's purpose and important details;
- avoid placing text over faces or essential activity;
- avoid heavy filters that make district photography feel artificial;
- follow privacy and media-consent requirements; and
- never use AI-generated or reimagined views of district facilities, branding, or school graphics.

Future guidance may add composition and cropping standards, negative space for copy, credits, captions, and how to avoid accidentally revealing private student information.

### Voice & Tone — draft, not currently launched

The draft heading is `Clear, Human & Useful`.

The working introduction is:

> We communicate the way our best educators do: with clarity, care, confidence and respect. Lead with what people need to know, make the next step easy to find and explain how the information affects students.

This section should remain hidden until it is developed further with Daniel. When revisited, practical rewrite examples should be central. Useful contexts include registration, weather closures, safety notices, bond and construction updates, family action requests, student celebrations, and social media.

Tone should adjust by context: celebratory, urgent, sensitive, and procedural communications should not sound identical.

### 06 — Checklist & Resources

The interactive checklist is a quality-control aid, not an approval workflow. Completing every item does not substitute for Communications approval when approval is required.

It currently checks logo selection, background-specific artwork, clear space, color and contrast, typography, photography, alt text, factual verification, language access, and whether the next action is easy to find.

The resource area links back to approved downloads and to the district School & Community Relations page. Future resources may include templates, a review-request workflow, a direct asset request, and a way to report outdated artwork.

## Current implementation notes

### Repository structure

- `src/components/brand/` contains each major page section and shared brand components.
- `src/components/brand/sections.ts` controls public navigation order.
- `src/pages/Index.tsx` controls which sections are rendered.
- `src/global.css` contains design tokens, font assignments, and component styles.
- `public/mercury-attachments/` contains approved logo exports and district photography used by the site.
- `docs/deployment.md` describes the hosting options.

### Hidden Voice & Tone section

`VoiceSection.tsx` remains in the repository. It is intentionally omitted from both `Index.tsx` and `sections.ts`. This preserves the draft without exposing it publicly.

### Deployment

GitHub Pages currently publishes the public preview from `main`. The project can also build for a root-hosted `design.leanderisd.org` deployment by setting the appropriate Vite base path.

The intended long-term model is:

1. keep this repository canonical;
2. produce the static `dist/` build;
3. allow the district's chosen host to serve or consume that build; and
4. move the `design.leanderisd.org` DNS target without changing the application itself.

## Settled decisions

- One-page, anchored editorial experience.
- ESPN Design is the visual reference, not a template to copy literally.
- Portable code; no WordPress-specific architecture.
- GitHub repository is the source of truth.
- Horizontal logo is primary.
- Stacked logo is an alternate layout.
- Compass Rose is prominent and may stand alone in appropriate contexts.
- LISD abbreviation is secondary and not for first-impression public communications.
- Tagline logo is deprioritized for new work.
- Compass Rose top point is always lit from the left.
- Light- and dark-background Unigold exports are distinct intentional assets.
- Official assets only; no AI-redrawn identity artwork.
- LISD Blue, LISD Unigold, and the two artwork-only gold values are documented separately.
- Futura PT Bold and Noto Serif are the primary typographic system.
- Voice & Tone stays hidden pending further review.
- Real district photography is preferred; fake or reimagined district imagery is prohibited.

## Open questions and future work

- Should the Compass Rose return to its own numbered and anchored chapter?
- Are the current clear-space and minimum-size measurements formally approved, or should they be labeled recommendations?
- What is the final official resource/contact workflow for brand review and asset requests?
- Should the site offer a downloadable ZIP containing the full approved asset library?
- Which templates should eventually be distributed: presentations, documents, social graphics, signage, or campus communications?
- What multilingual and language-access standards should the guide include?
- When is the Voice & Tone content ready for review and launch?
- Should campus identities eventually be incorporated into this system, and if so, how can that be maintained without overwhelming the district guide?
- Which environment will ultimately serve `design.leanderisd.org`: the existing WordPress host, Payload, or a dedicated static platform?
- What analytics, update cadence, and ownership process should accompany the final district-hosted release?

## Continuation protocol for future chats or agents

Before making changes:

1. Read this document, `README.md`, and `docs/deployment.md`.
2. Pull the latest `main` branch and inspect recent commits; the user sometimes edits files directly in GitHub.
3. Inspect the live GitHub Pages site, not only the source.
4. Preserve existing official assets and unrelated user changes.
5. Distinguish settled decisions from open questions above.

When making changes:

1. Keep copy recognizable as Leander ISD rather than generic institutional brand language.
2. Favor practical guidance and immediate downloads.
3. Never invent official artwork, measurements, color specifications, or contact information.
4. Validate desktop and mobile rendering.
5. Exercise at least one interactive path, such as navigation, background selection, color copying, downloads, or checklist state.
6. Run the production build with Node.js 22.
7. Commit and publish the completed work to GitHub when authorized.
8. Verify the public deployment after GitHub Pages finishes rebuilding.

## Context provenance

This handoff synthesizes:

- the original `Brand Guidelines Planning` conversation;
- the shared planning link listed above;
- the implementation conversation that produced the current React/Vite site;
- the district's Summer 2025 publication and its language patterns;
- user-authored editorial revisions applied in November 2026; and
- the repository's implemented behavior as of the latest baseline commit.

The conversation history remains useful for nuance, but this document is intended to hold the decisions that must survive independently of any one computer or chat.
