import { navigation, scenes } from './content/siteContent.js';
import { sources } from './content/sources.js';
import { socialLinks } from './content/socialLinks.js';

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const pad = n => String(n).padStart(2, '0');
const paragraphs = text => text.split('\n\n').map(p => `<p>${p}</p>`).join('');
const heading = (scene, tag = 'h2', className = '') => `<${tag} class="display ${className}">${scene.title.map(t => `<span>${t}</span>`).join('')}</${tag}>`;
const eyebrow = scene => `<p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"></span>${scene.eyebrow}</p>`;
const source = scene => scene.source ? `<small class="source">${scene.source}</small>` : '';
const coda = scene => `<div class="coda wrap"><div class="coda-rule" aria-hidden="true"></div><div class="reveal"><p>${scene.coda}</p>${source(scene)}</div></div>`;
const opening = (scene, extra = '') => `<div class="scene-opening wrap ${extra}"><div class="opening-heading reveal">${eyebrow(scene)}${heading(scene)}${scene.subtitle ? `<p class="subtitle">${scene.subtitle}</p>` : ''}</div><div class="opening-copy prose reveal">${paragraphs(scene.intro)}</div></div>`;
const section = (scene, body) => `<section id="${scene.id}" class="scene scene-${scene.id}" aria-label="${navigation.find(n => n[0] === scene.id)[1]}" tabindex="-1">${body}</section>`;

function priority(scene) {
  return `${opening(scene)}<div class="sequence priority-sequence" data-sequence="priority"><div class="sequence-stage wrap"><div class="priority-nav"><p class="sequence-label">ENER <span>01—05</span></p><ol>${scene.steps.map(([title], i) => `<li><button type="button" data-step="${i}"><span>${pad(i+1)}</span>${title}</button></li>`).join('')}</ol></div><div class="priority-panels">${scene.steps.map(([title, text], i) => `<article class="priority-panel sequence-panel ${i === 0 ? 'is-active' : ''}" data-index="${i}"><span class="large-index" aria-hidden="true">${pad(i+1)}</span><div class="criterion"><p class="mobile-step">ENER / ${pad(i+1)}</p><h3>${title}</h3><p>${text}</p></div></article>`).join('')}</div><div class="sequence-track" aria-hidden="true"><i></i></div></div></div>${coda(scene)}`;
}
function outcomes(scene) {
  return `${opening(scene)}<div class="sequence outcomes-sequence" data-sequence="outcomes"><div class="sequence-stage wrap"><div class="outcomes-spacer" aria-hidden="true"></div><ol class="care-path">${scene.steps.map(([title,text],i)=>`<li class="care-step sequence-panel ${i === 0 ? 'is-active' : ''}" data-index="${i}"><div class="care-point"><span>${pad(i+1)}</span><i></i></div><h3>${title}</h3><p>${text}</p></li>`).join('')}</ol><div class="sequence-track" aria-hidden="true"><i></i></div></div></div>${coda(scene)}`;
}
function digital(scene) {
  return `${opening(scene)}<div class="sequence digital-sequence" data-sequence="digital"><div class="sequence-stage wrap"><div class="digital-window" aria-hidden="true"><span>PRONTO</span><span class="digital-counter">01 / 03</span><i></i></div><div class="digital-rows">${scene.steps.map(([title,text],i)=>`<article class="digital-row sequence-panel ${i===0?'is-active':''}" data-index="${i}"><button type="button" data-step="${i}" aria-expanded="${i===0}"><span>${pad(i+1)}</span><h3>${title}</h3><span class="row-sign" aria-hidden="true">+</span></button><div class="digital-description"><p>${text}</p></div></article>`).join('')}</div><div class="sequence-track" aria-hidden="true"><i></i></div></div></div>${coda(scene)}`;
}
function city(scene) {
  return `<div class="city-opening wrap"><div class="reveal">${eyebrow(scene)}${heading(scene)}<p class="subtitle">${scene.subtitle}</p></div></div><div class="city-intro wrap"><div class="prose reveal">${paragraphs(scene.intro)}</div></div><div class="territory-proposals wrap">${scene.steps.map(([title,text],i)=>`<article class="territory-proposal reveal"><span class="proposal-index" aria-hidden="true">${pad(i+1)}</span><div><h3>${title}</h3><div class="prose">${paragraphs(text)}</div></div></article>`).join('')}</div>${coda(scene)}`;
}
function closing(scene) {
  const links = [['CONHECER O PROGRAMA',sources.program],['CONSULTAR O PERFIL ELEITORAL',sources.electoralProfile],...socialLinks.map(link=>[link.label,link.url])];
  return `<div class="closing-portrait wrap"><div class="closing-title reveal">${heading(scene)}<p class="subtitle">${scene.subtitle}</p><div class="closing-facts">${scene.facts.map(f=>`<p>${f}</p>`).join('')}</div></div></div><div class="closing-document"><div class="wrap document-grid"><div class="prose reveal">${paragraphs(scene.intro)}</div><div class="end-links reveal">${links.filter(([,url])=>url).map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer"><span>${label}</span><span aria-hidden="true">↗</span></a>`).join('')}</div></div><footer class="wrap"><a class="footer-mark" href="#inicio" aria-label="Voltar ao início">MARIANO<br>SHIROMA<span aria-hidden="true">↑</span></a><div><p>${scene.footer.replace('\n','<br>')}</p><p class="image-notice">${scene.imageNotice}</p></div></footer></div>`;
}

const hero = scenes[0];
$('#app').innerHTML = [
  section(hero, `<div class="hero-stage wrap"><div class="hero-top">${eyebrow(hero)}<p class="hero-badge">${hero.badge}</p></div><div class="hero-main"><h1 class="hero-title"><span class="hero-first"><small>DR.</small> MARIANO</span><span>SHIROMA</span></h1><div class="hero-bottom"><p class="hero-subtitle">${hero.subtitle}</p><p class="hero-intro">${hero.intro}</p></div></div><a class="explore" href="#sus"><span>${hero.cue}</span><i aria-hidden="true"></i></a></div>`),
  section(scenes[1], `<div class="hospital-opening wrap"><div class="reveal">${eyebrow(scenes[1])}${heading(scenes[1])}<p class="subtitle">${scenes[1].subtitle}</p></div><div class="depth-frame" aria-hidden="true"></div></div><div class="hospital-story wrap"><div class="story-label" aria-hidden="true">01 / SUS</div><div class="prose reveal">${paragraphs(scenes[1].intro)}</div></div>${coda(scenes[1])}`),
  section(scenes[2],priority(scenes[2])),
  section(scenes[3],outcomes(scenes[3])),
  section(scenes[4],digital(scenes[4])),
  section(scenes[5],city(scenes[5])),
  section(scenes[6],closing(scenes[6]))
].join('');

const film = document.createElement('div');
film.className = 'film';
film.setAttribute('aria-hidden','true');
film.innerHTML = scenes.map((scene,i)=>`<div class="film-layer film-${scene.id}" data-layer="${i}"><img src="./images/${scene.image}" alt="" width="${i===0||i===6?852:1672}" height="${i===0||i===6?1280:941}" ${i<2?'fetchpriority="high"':'loading="lazy"'} decoding="async"><div class="film-shade"></div></div>`).join('');
document.body.prepend(film);

const menu = $('#site-menu');
const toggle = $('.menu-toggle');
menu.innerHTML = `<div class="menu-inner wrap"><p class="menu-caption">MARIANO SHIROMA <span>MISSÃO 14 · 1442</span></p><div class="menu-links">${navigation.map(([id,label],i)=>`<a href="#${id}"><span>${pad(i+1)}</span>${label}<i aria-hidden="true">↗</i></a>`).join('')}</div><p class="menu-bottom">MÉDICO | SÃO PAULO</p></div>`;
$('.chapter-rail').innerHTML = navigation.map(([id,label],i)=>`<a href="#${id}" aria-label="${label}"><span>${label}</span><i></i></a>`).join('');
let menuOpen = false;
function setMenu(open, restoreFocus = true) {
  menuOpen = open;
  toggle.setAttribute('aria-expanded',String(open));
  toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
  $('.menu-word').textContent = open ? 'FECHAR' : 'MENU';
  menu.inert = !open;
  $('#app').inert = open;
  $('.chapter-rail').inert = open;
  document.body.classList.toggle('menu-open',open);
  if(open) requestAnimationFrame(()=>$('a',menu).focus({preventScroll:true})); else if(restoreFocus) toggle.focus({preventScroll:true});
}
toggle.addEventListener('click',()=>setMenu(!menuOpen));
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&menuOpen) setMenu(false);
  if(event.key==='Tab'&&menuOpen){
    const focusable=[toggle,...$$('a',menu)];
    const first=focusable[0],last=focusable.at(-1);
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  }
});
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const compact = matchMedia('(max-width: 760px), (max-height: 620px)');
function setMotion(){document.body.classList.toggle('reduced-motion',reduced.matches);requestMeasure();}
reduced.addEventListener('change',setMotion);
compact.addEventListener('change',()=>requestMeasure());

document.addEventListener('click',event=>{
  const link=event.target.closest('a[href^="#"]');
  if(!link)return;
  const target=$(link.getAttribute('href'));
  if(!target)return;
  event.preventDefault();
  if(menuOpen)setMenu(false,false);
  target.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});
  history.replaceState(null,'',link.getAttribute('href'));
  target.focus({preventScroll:true});
});

const sceneElements=$$('.scene');
const layers=$$('.film-layer');
const sequences=$$('[data-sequence]').map(element=>({element,panels:$$('.sequence-panel',element),buttons:$$('[data-step]',element),track:$('.sequence-track i',element),index:-1,top:0,height:0}));
let sceneMetrics=[],pageHeight=1,viewportHeight=innerHeight,scheduled=false,measurePending=true;
const clamp=(value,min=0,max=1)=>Math.max(min,Math.min(max,value));
function measure(){
  viewportHeight=innerHeight;
  sceneMetrics=sceneElements.map(element=>({top:element.offsetTop,height:element.offsetHeight}));
  sequences.forEach(seq=>{seq.top=seq.element.getBoundingClientRect().top+scrollY;seq.height=seq.element.offsetHeight;});
  pageHeight=Math.max(1,document.documentElement.scrollHeight-viewportHeight);
  measurePending=false;
}
function render(){
  if(measurePending)measure();
  const y=scrollY;
  let current=0;
  sceneMetrics.forEach((metric,i)=>{if(y>=metric.top-viewportHeight*.62)current=i;});
  const cross=current===0?1:clamp((y-sceneMetrics[current].top+viewportHeight*.62)/(viewportHeight*.62));
  layers.forEach((layer,i)=>{
    const active=i===current||i===current-1;
    layer.style.visibility=active?'visible':'hidden';
    layer.style.opacity=i===current?cross:i===current-1?1:0;
    if(active){
      const p=clamp((y-sceneMetrics[i].top)/(sceneMetrics[i].height-viewportHeight));
      layer.style.setProperty('--photo-progress',reduced.matches?0:p);
      const img=$('img',layer);
      if(img.loading==='lazy')img.loading='eager';
    }
    if(i===current+1){const img=$('img',layer);if(img.loading==='lazy')img.loading='eager';}
  });
  $('.chapter-count').textContent=`${pad(current+1)} / 07`;
  $('.progress-fill').style.transform=`scaleX(${clamp(y/pageHeight)})`;
  $('.site-header').classList.toggle('is-scrolled',y>60);
  $$('.chapter-rail a').forEach((a,i)=>{if(i===current)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
  $$('.menu-links a').forEach((a,i)=>{if(i===current)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
  sequences.forEach(seq=>{
    const p=clamp((y-seq.top)/Math.max(1,seq.height-viewportHeight));
    const index=Math.min(seq.panels.length-1,Math.floor(p*seq.panels.length));
    seq.track.style.transform=`scaleX(${p})`;
    if(index!==seq.index){
      seq.panels.forEach((panel,j)=>{panel.classList.toggle('is-active',j===index);panel.classList.toggle('is-past',j<index);});
      seq.buttons.forEach(button=>{const active=Number(button.dataset.step)===index;button.classList.toggle('is-active',active);if(seq.element.dataset.sequence==='digital')button.setAttribute('aria-expanded',String(active||compact.matches||reduced.matches));else if(active)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');});
      const counter=$('.digital-counter',seq.element);if(counter){counter.textContent=`${pad(index+1)} / 03`;$('.digital-window>span:first-child',seq.element).textContent=index===0?'PRONTO':'SAÚDE DIGITAL';}
      seq.index=index;
    }
  });
  scheduled=false;
}
function requestRender(){if(!scheduled){scheduled=true;requestAnimationFrame(render);}}
function requestMeasure(){measurePending=true;requestRender();}
sequences.forEach(seq=>seq.buttons.forEach(button=>button.addEventListener('click',()=>{
  const index=Number(button.dataset.step);
  if(compact.matches||reduced.matches)seq.panels[index].scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'center'});
  else window.scrollTo({top:seq.top+(seq.height-viewportHeight)*(index+.12)/seq.panels.length,behavior:reduced.matches?'instant':'smooth'});
})));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-visible',entry.isIntersecting)),{rootMargin:'0px 0px -5% 0px',threshold:.08});
$$('.reveal').forEach(element=>revealObserver.observe(element));
addEventListener('scroll',requestRender,{passive:true});
addEventListener('resize',requestMeasure,{passive:true});
addEventListener('load',()=>{document.body.classList.add('is-loaded');requestMeasure();});
document.fonts.ready.then(requestMeasure);
new ResizeObserver(requestMeasure).observe($('#app'));
setMotion();
render();
requestAnimationFrame(()=>document.body.classList.add('is-ready'));
if(document.readyState==='complete')document.body.classList.add('is-loaded');
