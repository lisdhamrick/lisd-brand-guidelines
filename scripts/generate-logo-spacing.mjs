// LEGACY FIRST PASS: current diagrams are Ryan’s Figma-exported PNGs.
// This script uses the superseded cap-height unit and is retained only for history.
// Diagram overlays only. All logo paths come unchanged from the approved exports.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
const out = 'public/examples/logo-spacing/'
mkdirSync(out, { recursive: true })
const source = name => readFileSync(`public/mercury-attachments/${name}.svg`, 'utf8')
const logo = source('lisd-blue-gold2')
const rose = source('lisd-rose-gold2')
// The implied outer ring is centered on (288,288), radius ~184.2,
// in the official 576px Rose viewBox. This is a diagram construction guide.
const R = 184.2
const X = 166.566 - 70.9637 // LEANDER cap height in the 1005 x 238 horizontal export.
function place(svg,x,y,w,h) {
 return svg.replace(/<svg[^>]*>/, t => t.replace(/ width="[^"]*"| height="[^"]*"/g,'').replace('>',` x="${x}" y="${y}" width="${w}" height="${h}">`))
}
const line=(x1,y1,x2,y2,color='#005987',dash=false)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="1.5" ${dash?'stroke-dasharray="7 6"':''}/>`
const text=(x,y,t,size=25,color='#005987',anchor='start')=>`<text x="${x}" y="${y}" fill="${color}" font-family="Arial,sans-serif" font-size="${size}" font-weight="600" text-anchor="${anchor}">${t}</text>`
const box=(x,y,w,h,color='#005987',fill='none',dash=true)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${color}" stroke-width="1.5" ${dash?'stroke-dasharray="7 6"':''}/>`
function dim(x1,y1,x2,y2,label='X') {
 const vertical=x1===x2
 return line(x1,y1,x2,y2)+ (vertical?line(x1-6,y1,x1+6,y1)+line(x2-6,y2,x2+6,y2)+text(x1+12,(y1+y2)/2+8,label):line(x1,y1-6,x1,y1+6)+line(x2,y2-6,x2,y2+6)+text((x1+x2)/2,y1-12,label,25,'#005987','middle'))
}
function save(name,title,desc,body) {
 writeFileSync(out+name+'.svg',`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="480" viewBox="0 0 800 480" role="img" aria-labelledby="title desc"><title id="title">${title}</title><desc id="desc">${desc}</desc><rect width="800" height="480" fill="#FAFAF7"/>${body}</svg>\n`)
}
// 01: the ring, rather than the star tips, defines optical alignment.
{
 const s=.52,cx=400,cy=242,r=R*s,edge=288*s
 save('ring-reference','Find the visual edge','The blue dashed circle follows the implied outside edge of the Compass Rose ring. The gold points extend beyond it. The guide circle is not part of the logo.',
  place(rose,cx-edge,cy-edge,576*s,576*s)+`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#005987" stroke-width="2" stroke-dasharray="6 5"/>`+
  line(cx-r,98,cx-r,386,'#005987',true)+line(cx+r,98,cx+r,386,'#005987',true)+
  line(112,148,cx-r+15,cy-45)+text(38,121,'Ring = visual edge',25)+
  line(cx+edge-4,cy,650,cy)+text(555,290,'Points project',25)+text(555,321,'past the ring.',25)+
  text(400,442,'Guide circle only — never add it to the artwork.',20,'#53616B','middle'))
}
// 02: X clear of the visual bounds of the full horizontal lockup.
{
 const s=.56,x=118,y=169,cap=X*s,ring=R*238/576*s
 const cy=y+119*s,top=cy-ring,bottom=cy+ring,right=x+1005*s
 const outer={x:x-cap,y:top-cap,w:right-x+cap*2,h:bottom-top+cap*2}
 save('horizontal-clear-space','Give the full logo room','X equals the height of the LEANDER letters. Keep X clear beyond the visual logo bounds: lettering at the sides and the ring at the top and bottom. The projecting Rose points sit within this clear area.',
  box(outer.x,outer.y,outer.w,outer.h,'#005987','#EAF2F5',false)+
  box(x,top,right-x,bottom-top,'#005987','#FAFAF7')+
  place(logo,x,y,1005*s,238*s)+
  dim(outer.x,cy,x,cy)+dim(right,cy,outer.x+outer.w,cy)+
  dim(400,outer.y,400,top)+dim(400,bottom,400,outer.y+outer.h)+
  place(logo.replace('viewBox="0 0 1005 238"','viewBox="0 70.9637 66.0761 95.6023"'),230,350,66.0761*s,cap)+dim(200,350,200,350+cap)+text(290,383,'X = logotype height',23)+
  text(400,80,'X = height of the LEANDER letters',25,'#005987','middle')+
  text(400,452,'Measure from the ring, not the top and bottom points.',22,'#53616B','middle'))
}
// 03: carry the same cap-height unit into standalone use; do not invent a new unit.
{
 const s=.36,cx=400,cy=240,r=R*s,edge=288*s,cap=X*576/238*s
 save('rose-clear-space','Give the standalone Rose room','Use X from a full district logo with the same-sized Compass Rose. Measure the clear area outward from the implied ring boundary on every side, not from the point tips. All points remain inside the clear area.',
  box(cx-r-cap,cy-r-cap,2*(r+cap),2*(r+cap),'#005987','#EAF2F5',false)+
  box(cx-r,cy-r,2*r,2*r,'#005987','#FAFAF7')+
  place(rose,cx-edge,cy-edge,edge*2,edge*2)+
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#005987" stroke-width="1.5" stroke-dasharray="6 5"/>`+
  dim(cx-r-cap,cy,cx-r,cy)+dim(cx+r,cy,cx+r+cap,cy)+
  dim(cx,cy-r-cap,cx,cy-r)+dim(cx,cy+r,cx,cy+r+cap)+
  text(400,45,'Same Rose size. Same X.',25,'#005987','middle')+
  text(400,450,'The points stay inside the clear area.',23,'#53616B','middle'))
}
// 04: identical marks, different alignment reference. No path edits or scaling distortion.
{
 const s=.4,r=R*s,edge=288*s,top=152,marginA=95,marginB=491
 const cxA=marginA+r,cyA=top+r,cxB=marginB+edge,cyB=top+edge
 let body=text(95,57,'ALIGN TO THE RING',23)+text(491,57,'NOT THE TIPS',23,'#A22F31')
 for (const [m,cx,cy] of [[marginA,cxA,cyA],[marginB,cxB,cyB]]) {
  body+=line(m,92,m,417,'#005987',true)+line(m-40,top,m+245,top,'#005987',true)+
   place(rose,cx-edge,cy-edge,edge*2,edge*2)+
   `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#005987" stroke-width="1.5" stroke-dasharray="6 5"/>`+
   line(m,405,m+215,405,'#64717A')+line(m,423,m+184,423,'#64717A')+line(m,441,m+200,441,'#64717A')
 }
 body+=text(95,473,'Visually aligned',23)+text(491,473,'Visually inset',23,'#A22F31')
 save('optical-alignment','Align the ring to the margin','Left: the ring aligns with the top and left guides and the content beneath it, while the points project into the margins. Right: aligning the point tips to those guides pushes the visual body inward and downward.',body)
}
