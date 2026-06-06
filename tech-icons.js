/* Mapeia cada habilidade -> logo oficial (Devicon, via jsDelivr).
   Formato: [slug, variant, invert?]  — invert para logos escuros (ex.: Unreal). */
(function () {
  const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons';
  const TECH = {
    'React':            ['react', 'original'],
    'Tailwind':         ['tailwindcss', 'original'],
    'Tailwind CSS':     ['tailwindcss', 'original'],
    'Blade':            ['laravel', 'original'],
    'Laravel':          ['laravel', 'original'],
    'JavaScript':       ['javascript', 'original'],
    'TypeScript':       ['typescript', 'original'],
    'PHP':              ['php', 'original'],
    'Python':           ['python', 'original'],
    'FastAPI':          ['fastapi', 'original'],
    'Flutter':          ['flutter', 'original'],
    'Dart':             ['dart', 'original'],
    'C++':              ['cplusplus', 'original'],
    'Unreal':           ['unrealengine', 'original', true],
    'Unreal Engine':    ['unrealengine', 'original', true],
    'PostgreSQL':       ['postgresql', 'original'],
    'MySQL':            ['mysql', 'original'],
    'PyTorch':          ['pytorch', 'original'],
    'OpenCV':           ['opencv', 'original']
  };

  window.TECH = TECH;
  window.techIconURL = function (name) {
    const t = TECH[name];
    return t ? `${BASE}/${t[0]}/${t[0]}-${t[1]}.svg` : null;
  };
  window.techIcon = function (name, size) {
    size = size || 18;
    const url = window.techIconURL(name);
    if (!url) {
      return `<span class="tech-ic tech-ic-fallback" style="width:${size}px;height:${size}px" aria-hidden="true"></span>`;
    }
    const inv = TECH[name][2] ? ' tech-ic-inv' : '';
    return `<img class="tech-ic${inv}" src="${url}" alt="${name}" width="${size}" height="${size}" loading="lazy" onerror="this.style.display='none'" />`;
  };

  // estilos compartilhados para os ícones
  const css = `
    .tech-ic { display:inline-block; vertical-align:middle; object-fit:contain; flex:none; }
    .tech-ic-inv { filter: invert(0.92) brightness(1.4); }
    .tech-ic-fallback { background: var(--accent-soft, rgba(80,120,255,.14)); border:1px solid var(--border, #333); border-radius:5px; }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();
