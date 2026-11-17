// Educational counterexamples only. Approved source artwork is never changed.
// Run with: node scripts/generate-logo-misuse.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
const root = 'public/mercury-attachments/'
const out = 'public/examples/logo-misuse/'
mkdirSync(out, { recursive: true })
const source = (name) => readFileSync(`${root}${name}.svg`, 'utf8')
function place(svg, x=100, y=140, width=600, height=142) {
  return svg.replace(/<svg[^>]*>/, tag => tag.replace(/ width="[^"]*"| height="[^"]*"/g, '').replace('>', ` x="${x}" y="${y}" width="${width}" height="${height}">`))
}
const logo = source('lisd-blue-gold2')
const rose = source('lisd-rose-gold2')
const defs = `<defs><filter id="shadow" x="-30%" y="-50%" width="160%" height="200%"><feDropShadow dx="7" dy="9" stdDeviation="3" flood-opacity=".5"/></filter><linearGradient id="rainbow" x2="0" y2="1"><stop stop-color="#8e247b"/><stop offset="1" stop-color="#f36b32"/></linearGradient></defs>`
const cases = [
 ['stretch', 'Do not stretch the logo', place(logo,60,165,680,92).replace('<svg ', '<svg preserveAspectRatio="none" ')],
 ['squash', 'Do not squash the logo', place(logo,235,90,330,240).replace('<svg ', '<svg preserveAspectRatio="none" ')],
 ['rotate', 'Do not rotate the logo', `<g transform="rotate(-14 400 210)">${place(logo)}</g>`],
 ['recolor', 'Do not use unapproved colors', place(logo.replaceAll('#005987','#9A2869').replaceAll('#FCB01A','#E25038').replaceAll('#FFCB0C','#EE9686'))],
 ['blue-rose', 'Do not recolor the Compass Rose blue', place(source('lisd-rose-black1').replaceAll('fill="black"','fill="#005987"'),280,90,240,240)],
 ['shadow', 'Do not add shadows or dimensional effects', `<g filter="url(#shadow)">${place(logo)}</g>`],
 ['outline', 'Do not outline the artwork', place(source('lisd-black-black1').replaceAll('fill="black"','fill="none" stroke="#005987" stroke-width="2.5"'))],
 ['gradient', 'Do not add gradients', place(logo.replace(/fill="#[0-9a-fA-F]{6}"/g,'fill="url(#rainbow)"'))],
 ['badge', 'Do not build decorative badges around the logo', `<circle cx="400" cy="210" r="146" fill="none" stroke="#005987" stroke-width="6"/><circle cx="400" cy="210" r="130" fill="none" stroke="#FFC000" stroke-width="2"/>${place(rose,330,95,140,140)}${place(logo,230,240,340,80)}<path d="M285 330H515" stroke="#005987" stroke-width="4"/>`],
 ['wrong-background', 'Do not use the light-background Rose on dark backgrounds', place(source('lisd-rose-gold1-light'),280,90,240,240), '#005987'],
 ['mirror', 'Do not reverse the Compass Rose lighting', `<g transform="translate(800 0) scale(-1 1)">${place(rose,280,90,240,240)}</g>`],
]
for (const [id,title,art,bg='#F5F5F2'] of cases) {
 const light = bg === '#005987'
 writeFileSync(`${out}${id}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="440" viewBox="0 0 800 440" role="img" aria-labelledby="title"><title id="title">Incorrect example: ${title}</title>${defs}<rect width="800" height="440" fill="${bg}"/><text x="32" y="42" font-family="Arial,sans-serif" font-size="13" letter-spacing="2" fill="${light?'#fff':'#565656'}">INCORRECT USE</text>${art}<g transform="translate(748 388)" stroke="${light?'#fff':'#B12B28'}" stroke-width="4"><path d="M-9-9 9 9M9-9-9 9"/></g></svg>\n`)
}

// Deliberately downsampled 72px JPEG, embedded to keep regeneration dependency-free.
writeFileSync(`${out}compression.svg`, '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="440" viewBox="0 0 800 440"><title>Incorrect example: Use of a pixelated, compressed copy</title><rect width="800" height="440" fill="#F5F5F2"/><text x="32" y="42" font-family="Arial,sans-serif" font-size="13" letter-spacing="2" fill="#565656">INCORRECT USE</text><image href="data:image/jpeg;base64,/9j/2wBDAEMuMjoyKkM6NjpLR0NPZKZsZFxcZMySmnmm8dT++u3U6eX//////////+Xp////////////////////////////2wBDAUdLS2RXZMRsbMT//+n/////////////////////////////////////////////////////////////////////wAARCAARAEgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAjEAACAgEEAgIDAAAAAAAAAAAAAQIRAxITITEiQQQUQmFx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGxEBAAICAwAAAAAAAAAAAAAAABEhAQIxQWH/2gAMAwEAAhEDEQA/APVvR2lkp0xLNGMFKSat1XsjYlt6Hk8fXib9e6UpcJPhKi0lqeaEZuLu0r/pjzxXqVUm3XVkv4ycWpSt0knXRrwetfDSTVd0KLVvR1SWmXj2xDNGadJpquGT9fyk9S5v8ejYYdtNJ2n+iZ4oxMqU+SXninVNu6pGqDsmWBtNalTbfMbM6T21t4p54qTTUlVW64QJ+vy1rel1arugbpm3YAEUAAAAAAAAAAH/2Q==" x="100" y="140" width="600" height="142" image-rendering="pixelated"/><path d="m739 379 18 18m0-18-18 18" stroke="#B12B28" stroke-width="4"/></svg>')
