import { navigation, scenes } from './content/siteContent.js';
import { sources } from './content/sources.js';
import { socialLinks } from './content/socialLinks.js';

const app = document.querySelector('#app');
const menu = document.querySelector('#site-menu');
const toggle = document.querySelector('.menu-toggle');
const progressFill = document.querySelector('.progress-fill');
const count = document.querySelector('.chapter-count');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const lineBreaks = value => value.split('\n\n').map(p => `<p>${p}</p>`).join('');
const title = scene => scene.title.map((line, i) => `<span class="title-line ${i === 1 ? 'accent-line' : ''}">${line}</span>`).join('');
const image = scene => `<img class="scene-image" src="./images/${scene.image}" alt="" ${scene.id === 'inicio' ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" />`;
const sceneBody = (scene, index) => {
  const opening = `<div class="beat beat-opening"><div class="copy-wrap">${scene.eyebrow ? `<p class="eyebrow">${scene.eyebrow}</p>` : ''}<h${index === 0 ? '1' : '2'} class="display-title">${title(scene)}</h${index === 0 ? '1' : '2'}>${scene.subtitle ? `<p class="subtitle">${scene.subtitle}</p>` : ''}${scene.badge ? `<p class="hero-badge">${scene.badge}</p>` : ''}${scene.cue ? `<span class="explore">${scene.cue}</span>` : ''}</div></div>`;
  if (index === 0) return `${opening}<div class="beat beat-intro"><div class="copy-wrap text-panel">${lineBreaks(scene.intro)}</div></div>`;
  const intro = `<div class="beat beat-intro"><div class="copy-wrap text-panel">${lineBreaks(scene.intro)}</div></div>`;
  const steps = (scene.steps || []).map(([head, body], j) => `<div class="beat beat-step"><div class="copy-wrap step-wrap"><span class="step-index">${String(j + 1).padStart(2, '0')} / ${String(scene.steps.length).padStart(2, '0')}</span><h3>${head}</h3><div class="step-rule"></div><div class="step-body">${lineBreaks(body)}</div></div></div>`).join('');
  const coda = scene.coda ? `<div class="beat beat-coda"><div class="copy-wrap text-panel"><p>${scene.coda}</p>${scene.source ? `<small class="source">${scene.source}</small>` : ''}</div></div>` : '';
  if (index === 6) {
    const links = [
      ['CONHECER O PROGRAMA', sources.program],
      ['CONSULTAR O PERFIL ELEITORAL', sources.electoralProfile],
      ...socialLinks.map(link => [link.label, link.url])
    ];
    const linkMarkup = links.map(([label, url]) => url ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>` : `<span class="link-pending" title="Endereço oficial aguardando verificação">${label} <small>LINK EM VERIFICAÇÃO</small></span>`).join('');
    const socialPending = socialLinks.length ? '' : `<span class="link-pending">REDES SOCIAIS <small>LINKS EM VERIFICAÇÃO</small></span>`;
    return `${opening}<div class="beat beat-end"><div class="copy-wrap end-wrap"><div class="closing-facts">${scene.facts.map(f => `<strong>${f}</strong>`).join('')}</div><div class="text-panel">${lineBreaks(scene.intro)}</div></div></div><div class="beat beat-links"><div class="copy-wrap end-wrap"><div class="end-links">${linkMarkup}${socialPending}</div><footer><p>${scene.footer.replace('\n', '<br>')}</p><p>${scene.imageNotice}</p></footer></div></div>`;
  }
  return opening + intro + steps + coda;
};

app.innerHTML = scenes.map((scene, i) => `<section id="${scene.id}" class="chapter ${scene.type || ''} chapter-${scene.id}" style="height:${(2 + (scene.steps?.length || 0) + (scene.coda ? 1 : 0) + (i === 6 ? 1 : 0)) * 94}svh" aria-label="${navigation[i][1]}"><div class="sticky-stage"><div class="visual">${image(scene)}<div class="scrim"></div></div><div class="scene-number" aria-hidden="true">${String(i+1).padStart(2,'0')} <span>/ 07</span></div><div class="stage-beats">${sceneBody(scene, i)}</div></div></section>`).join('');
menu.innerHTML = navigation.map(([id, label], i) => `<a href="#${id}"><span>${String(i + 1).padStart(2, '0')}</span>${label}</a>`).join('');

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  menu.inert = !open;
  menu.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  if (open) menu.querySelector('a').focus(); else toggle.focus();
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.inert) setMenu(false); });

let ticking = false;
const chapters = [...document.querySelectorAll('.chapter')];
function update() {
  const pageMax = Math.max(1, document.documentElement.scrollHeight - innerHeight);
  progressFill.style.transform = `scaleX(${scrollY / pageMax})`;
  let current = 0;
  chapters.forEach((section, i) => {
    const top = section.offsetTop, length = section.offsetHeight - innerHeight;
    const p = Math.max(0, Math.min(1, (scrollY - top) / Math.max(1, length)));
    const active = scrollY >= top - innerHeight * .4 && scrollY < top + section.offsetHeight - innerHeight * .4;
    if (active) current = i;
    section.style.setProperty('--scene-progress', p.toFixed(4));
    const beats = [...section.querySelectorAll('.beat')];
    const beatIndex = Math.min(beats.length - 1, Math.max(0, Math.floor(p * beats.length)));
    beats.forEach((beat, j) => beat.classList.toggle('is-current', j === beatIndex));
  });
  count.textContent = `${String(current + 1).padStart(2, '0')} / 07`;
  menu.querySelectorAll('a').forEach((a, i) => {if (i === current) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');});
  ticking = false;
}
function requestUpdate() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
addEventListener('scroll', requestUpdate, { passive: true });
addEventListener('resize', requestUpdate);
addEventListener('load', update);
update();
