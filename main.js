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
