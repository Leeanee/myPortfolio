/* Renders project cards + filter buttons from js/data/projects.js */
function initProjects() {
  const grid = document.getElementById('projectGrid');
  const filters = document.getElementById('filters');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  function render(filter) {
    grid.innerHTML = projects.filter(p => filter === 'All' || p.type === filter).map(p => {
      const l = p.links || {};
      const links = [['Demo video', l.demo], ['Live site', l.live], ['Source code', l.code], ['Figma design', l.figma]]
        .filter(x => x[1]).map(x => `<a href="${esc(x[1])}" target="_blank" rel="noopener" aria-label="${x[0]} for ${esc(p.title)} (opens in a new tab)">${x[0]} ↗</a>`).join('');
      const thumb = p.image ? `<img src="${esc(p.image)}" alt="Preview of ${esc(p.title)}" loading="lazy">` : esc(p.short || p.title);
      return `<article class="card project"><div class="thumb" style="--c1:${p.colors[0]};--c2:${p.colors[1]}">${thumb}</div>
        <div class="body"><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
        <ul class="tags">${p.tools.map(t => `<li>${esc(t)}</li>`).join('')}</ul><div class="links">${links}</div></div></article>`;
    }).join('');
  }

  const types = ['All', ...new Set(projects.map(p => p.type))];
  if (types.length <= 2) filters.hidden = true;  // only one project type, so no filter needed
  filters.innerHTML = types.map((t, i) => `<button type="button" aria-pressed="${i === 0}">${t}</button>`).join('');
  filters.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    filters.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b));
    render(b.textContent);
  });
  render('All');
}
