/* ===========================
   ТОВ ПРОТРАКТОР — main.js
   =========================== */

/* ===========================
   #ДАНІ КАТАЛОГУ
   ===========================

   Як заповнювати картку:

   cat:      категорія для фільтра — 'tractor' або 'attachment'
   badge:    текст бейджа на картці (напр. "Трактор колісний", "Навісне", "Новинка")
   badgeNew: true → бейдж жовтий (для новинок); false або відсутній → зелений
   name:     назва товару (заголовок картки та модалки)
   shortDesc:короткий опис під назвою на картці (1–2 речення)
   desc:     повний опис у модальному вікні (2–4 речення)
   img:      шлях до фото, напр. "img/tractor-eurofeng-554-lux.jpg"
   imgAlt:   alt-текст зображення
   specs:    масив характеристик у модалці:
               { label: "Назва параметра", value: "Значення" }
             — залиште value: "—" якщо даних ще немає
*/

const PRODUCTS = [

  /* ─────────────────────────────────────────
     ТРАКТОРИ КОЛІСНІ
     ───────────────────────────────────────── */

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'EUROFENG 554 LUX',
    shortDesc: '—',
    desc:      '—',
    img:       'img/tractor-eurofeng-554-lux.jpg',
    imgAlt:    'Трактор колісний EUROFENG 554 LUX',
    specs: [
      { label: 'Потужність',     value: '—' },
      { label: 'Маса',           value: '—' },
      { label: 'Колісна база',   value: '—' },
      { label: 'Тип трансмісії', value: '—' },
      { label: 'ЗПВ',            value: '—' },
      { label: 'Гарантія',       value: '—' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'EUROFENG 554DXL',
    shortDesc: '—',
    desc:      '—',
    img:       'img/tractor-eurofeng-554dxl.jpg',
    imgAlt:    'Трактор колісний EUROFENG 554DXL',
    specs: [
      { label: 'Потужність',     value: '—' },
      { label: 'Маса',           value: '—' },
      { label: 'Колісна база',   value: '—' },
      { label: 'Тип трансмісії', value: '—' },
      { label: 'ЗПВ',            value: '—' },
      { label: 'Гарантія',       value: '—' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'TERRA FORCE 554LUX',
    shortDesc: '—',
    desc:      '—',
    img:       'img/tractor-terra-force-554lux.jpg',
    imgAlt:    'Трактор колісний TERRA FORCE 554LUX',
    specs: [
      { label: 'Потужність',     value: '—' },
      { label: 'Маса',           value: '—' },
      { label: 'Колісна база',   value: '—' },
      { label: 'Тип трансмісії', value: '—' },
      { label: 'ЗПВ',            value: '—' },
      { label: 'Гарантія',       value: '—' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'ДМТЗ T-252',
    shortDesc: '—',
    desc:      '—',
    img:       'img/tractor-dmtz-t252.jpg',
    imgAlt:    'Трактор колісний ДМТЗ T-252',
    specs: [
      { label: 'Потужність',     value: '—' },
      { label: 'Маса',           value: '—' },
      { label: 'Колісна база',   value: '—' },
      { label: 'Тип трансмісії', value: '—' },
      { label: 'ЗПВ',            value: '—' },
      { label: 'Гарантія',       value: '—' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'ДМТЗ 255B',
    shortDesc: '—',
    desc:      '—',
    img:       'img/tractor-dmtz-255b.jpg',
    imgAlt:    'Трактор колісний ДМТЗ 255B',
    specs: [
      { label: 'Потужність',     value: '—' },
      { label: 'Маса',           value: '—' },
      { label: 'Колісна база',   value: '—' },
      { label: 'Тип трансмісії', value: '—' },
      { label: 'ЗПВ',            value: '—' },
      { label: 'Гарантія',       value: '—' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'ДМТЗ 244X',
    shortDesc: '—',
    desc:      '—',
    img:       'img/tractor-dmtz-244x.jpg',
    imgAlt:    'Трактор колісний ДМТЗ 244X',
    specs: [
      { label: 'Потужність',     value: '—' },
      { label: 'Маса',           value: '—' },
      { label: 'Колісна база',   value: '—' },
      { label: 'Тип трансмісії', value: '—' },
      { label: 'ЗПВ',            value: '—' },
      { label: 'Гарантія',       value: '—' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'TERRA FORCE 3254HX',
    shortDesc: '—',
    desc:      '—',
    img:       'img/tractor-terra-force-3254hx.jpg',
    imgAlt:    'Трактор колісний TERRA FORCE 3254HX',
    specs: [
      { label: 'Потужність',     value: '—' },
      { label: 'Маса',           value: '—' },
      { label: 'Колісна база',   value: '—' },
      { label: 'Тип трансмісії', value: '—' },
      { label: 'ЗПВ',            value: '—' },
      { label: 'Гарантія',       value: '—' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'ДМТЗ 404XC',
    shortDesc: '—',
    desc:      '—',
    img:       'img/tractor-dmtz-404xc.jpg',
    imgAlt:    'Трактор колісний ДМТЗ 404XC',
    specs: [
      { label: 'Потужність',     value: '—' },
      { label: 'Маса',           value: '—' },
      { label: 'Колісна база',   value: '—' },
      { label: 'Тип трансмісії', value: '—' },
      { label: 'ЗПВ',            value: '—' },
      { label: 'Гарантія',       value: '—' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'TERRA FORCE 404HXC',
    shortDesc: '—',
    desc:      '—',
    img:       'img/tractor-terra-force-404hxc.jpg',
    imgAlt:    'Трактор колісний TERRA FORCE 404HXC',
    specs: [
      { label: 'Потужність',     value: '—' },
      { label: 'Маса',           value: '—' },
      { label: 'Колісна база',   value: '—' },
      { label: 'Тип трансмісії', value: '—' },
      { label: 'ЗПВ',            value: '—' },
      { label: 'Гарантія',       value: '—' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'ДМТЗ 544X',
    shortDesc: '—',
    desc:      '—',
    img:       'img/tractor-dmtz-544x.jpg',
    imgAlt:    'Трактор колісний ДМТЗ 544X',
    specs: [
      { label: 'Потужність',     value: '—' },
      { label: 'Маса',           value: '—' },
      { label: 'Колісна база',   value: '—' },
      { label: 'Тип трансмісії', value: '—' },
      { label: 'ЗПВ',            value: '—' },
      { label: 'Гарантія',       value: '—' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'TERRA FORCE 554',
    shortDesc: '—',
    desc:      '—',
    img:       'img/tractor-terra-force-554.jpg',
    imgAlt:    'Трактор колісний TERRA FORCE 554',
    specs: [
      { label: 'Потужність',     value: '—' },
      { label: 'Маса',           value: '—' },
      { label: 'Колісна база',   value: '—' },
      { label: 'Тип трансмісії', value: '—' },
      { label: 'ЗПВ',            value: '—' },
      { label: 'Гарантія',       value: '—' },
    ],
  },

  /* ─────────────────────────────────────────
     НАВІСНЕ ОБЛАДНАННЯ
     ───────────────────────────────────────── */

  {
    cat:       'attachment',
    badge:     'Навісне',
    badgeNew:  false,
    name:      'Ґрунтофреза ДМТЗ 141225',
    shortDesc: '—',
    desc:      '—',
    img:       'img/attachment-dmtz-141225.jpg',
    imgAlt:    'Ґрунтофреза ДМТЗ 141225',
    specs: [
      { label: 'Характеристика 1', value: '—' },
      { label: 'Характеристика 2', value: '—' },
      { label: 'Характеристика 3', value: '—' },
    ],
  },

];

function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(p => `
    <div class="col-12 col-sm-6 col-lg-4 col-xxl-3 catalog-item" data-cat="${p.cat}">
      <div class="prod-card" data-modal
        data-name="${p.name}"
        data-badge="${p.badge}"
        ${p.badgeNew ? 'data-badge-new="1"' : ''}
        data-img="${p.img}"
        data-img-alt="${p.imgAlt}"
        data-desc="${p.desc}"
        data-specs='${JSON.stringify(p.specs)}'>
        <div class="prod-card__badge${p.badgeNew ? ' prod-card__badge--new' : ''}">${p.badge}</div>
        <div class="prod-card__img-wrap">
          <img src="${p.img}" alt="${p.imgAlt}" loading="lazy" />
        </div>
        <div class="prod-card__body">
          <h3 class="prod-card__name">${p.name}</h3>
          <p class="prod-card__desc">${p.shortDesc}</p>
          <button class="btn btn-accent btn-sm w-100 prod-card__more">Детальніше</button>
        </div>
      </div>
    </div>
  `).join('');
}


document.addEventListener('DOMContentLoaded', () => {

  renderCatalog();

  const filterBtns   = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.catalog-item').forEach(item => {
        const match = filter === 'all' || item.dataset.cat === filter;
        item.classList.toggle('hidden', !match);
      });
    });
  });

  const productModal = document.getElementById('productModal');
  const bsModal = new bootstrap.Modal(productModal);

  document.addEventListener('click', e => {
    const card = e.target.closest('.prod-card[data-modal]');
    if (!card) return;
    if (e.target.closest('a[href="#contact"]')) return;

    const d = card.dataset;
    const specs = JSON.parse(d.specs || '[]');

    document.getElementById('modalImg').src    = d.img    || '';
    document.getElementById('modalImg').alt    = d.imgAlt || '';
    document.getElementById('modalName').textContent = d.name || '';
    document.getElementById('modalDesc').textContent = d.desc || '';

    const badge = document.getElementById('modalBadge');
    badge.textContent = d.badge || '';
    badge.className   = 'prod-card__badge' + (d.badgeNew ? ' prod-card__badge--new' : '');

    const specsEl = document.getElementById('modalSpecs');
    specsEl.innerHTML = specs.map(s =>
      `<div class="prod-modal__spec-row">
        <span class="prod-modal__spec-label">${s.label}</span>
        <span class="prod-modal__spec-value">${s.value}</span>
      </div>`
    ).join('');

    bsModal.show();
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();

      const doScroll = () => {
        const nav = document.getElementById('mainNav');
        if (nav && nav.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(nav);
          if (bsCollapse) bsCollapse.hide();
        }
        const headerH = document.querySelector('.site-header')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH - 12;
        window.scrollTo({ top, behavior: 'smooth' });
      };

      if (productModal.classList.contains('show')) {
        bsModal.hide();
        productModal.addEventListener('hidden.bs.modal', doScroll, { once: true });
      } else {
        doScroll();
      }
    });
  });

  const animateTargets = document.querySelectorAll('.prod-card');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    animateTargets.forEach(el => {
      el.style.opacity   = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity .4s ease, transform .4s ease';
      observer.observe(el);
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link[href^="#"]');

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => sectionObserver.observe(s));

});
