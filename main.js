(() => {
  const D = window.PORTFOLIO, $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const isPh = s => /TODO/.test(s);
  $('#h-name').textContent = D.name; $('#h-role').textContent = D.role;
  $('#h-tag').textContent = D.tagline; $('#h-loc').textContent = '📍 ' + D.location;
  $('#h-gh').href = D.github; $('#h-mail').href = 'mailto:' + D.email;
  $('#about-body').innerHTML = D.about.map(p => `<p>${esc(p)}</p>`).join('');
  const tl = [...D.experience.map(e => ({h:`${e.title} · ${e.company}`, m:e.period, pts:e.points, ph:e.placeholder})),
              ...D.education.map(e => ({h:`${e.degree} · ${e.school}`, m:e.period, pts:[], ph:e.placeholder}))];
  $('#timeline').innerHTML = tl.map(t => `<div class="tl ${t.ph?'ph':''}"><h4>${esc(t.h)}${t.ph?'<span class="badge">pending</span>':''}</h4>
    <div class="meta">${esc(t.m)}</div>${t.pts.length?`<ul>${t.pts.map(p=>`<li>${esc(p)}</li>`).join('')}</ul>`:''}</div>`).join('');
  $('#skills-grid').innerHTML = Object.entries(D.skills).map(([k,v]) =>
    `<div class="card"><h4>${esc(k)}</h4><div class="tags">${v.map(s=>`<span class="tag">${esc(s)}</span>`).join('')}</div></div>`).join('');
  $('#proj-grid').innerHTML = D.projects.map(p => `<article class="card ${p.featured?'feat':''}">
    <div class="ptop mono"><span>${p.featured?'★ Featured':'📁 Project'}</span><a href="${p.repo}" target="_blank" rel="noopener">${p.label||'GitHub'} ↗</a></div>
    <h4>${esc(p.name)}</h4><p>${esc(p.desc)}</p><div class="tags">${p.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div></article>`).join('');
  const renderStats = (s, langs) => {
    $('#stats-grid').innerHTML = [[s.repos,'Public repos'],[s.followers,'Followers'],[new Date().getFullYear()-s.since+'+','Years on GitHub'],[langs.length,'Main languages']]
      .map(([n,l]) => `<div class="card stat"><b>${n}</b><span>${l}</span></div>`).join('');
    $('#langs').innerHTML = langs.map(l => `<span class="tag">${esc(l)}</span>`).join('');
  };
  renderStats(D.stats, D.stats.topLanguages);
  fetch(`https://api.github.com/users/${D.githubUser}`).then(r => r.ok && r.json()).then(u => {
    if (u) renderStats({repos:u.public_repos, followers:u.followers, since:new Date(u.created_at).getFullYear()}, D.stats.topLanguages);
  }).catch(() => {});
  const links = [['GitHub', D.github], ['Email', 'mailto:' + D.email]];
  if (D.linkedin && !isPh(D.linkedin)) links.push(['LinkedIn', D.linkedin]);
  if (D.resume) links.push(['Resume', D.resume]);
  $('#contact-links').innerHTML = links.map(([t,h],i) => `<a class="btn ${i==1?'primary':''}" href="${h}" target="_blank" rel="noopener">${t}</a>`).join('')
    + `<p class="mono muted" style="width:100%;margin-top:16px">${esc(D.email)}</p>`;
  $('#yr').textContent = new Date().getFullYear();
  $('.burger').onclick = () => $('.links').classList.toggle('open');
  document.querySelectorAll('.links a').forEach(a => a.onclick = () => $('.links').classList.remove('open'));
  const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('in')), {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

(function(){const c=document.getElementById('carousel');if(!c)return;const t=c.querySelector('.track'),cards=[...t.children],d=c.querySelector('.dots');let p=0,tm,pages=1,per=1;
function layout(){per=Math.max(1,Math.floor(c.clientWidth/cards[0].offsetWidth+0.01));pages=Math.ceil(cards.length/per);d.innerHTML='';for(let k=0;k<pages;k++){const b=document.createElement('button');b.setAttribute('aria-label','Page '+(k+1));b.onclick=()=>{go(k);play()};d.appendChild(b)}go(Math.min(p,pages-1))}
function go(k){p=(k+pages)%pages;const gap=parseFloat(getComputedStyle(t).gap)||0,w=cards[0].offsetWidth+gap;let x=p*per*w;const max=t.scrollWidth-c.clientWidth;t.style.transform=`translateX(-${Math.max(0,Math.min(x,max))}px)`;[...d.children].forEach((b,j)=>b.classList.toggle('on',j===p));c.classList.toggle('at-start',p===0);c.classList.toggle('at-end',p===pages-1)}
function play(){stop();tm=setInterval(()=>go(p+1),4000)}function stop(){clearInterval(tm)}
c.querySelector('.prev').onclick=()=>{go(p-1);play()};c.querySelector('.next').onclick=()=>{go(p+1);play()};
c.addEventListener('mouseenter',stop);c.addEventListener('mouseleave',play);
let x0=null;c.addEventListener('touchstart',e=>{x0=e.touches[0].clientX;stop()},{passive:true});
c.addEventListener('touchend',e=>{if(x0!==null){const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40)go(p+(dx<0?1:-1))}x0=null;play()});
addEventListener('resize',layout);addEventListener('load',layout);layout();play()})();
