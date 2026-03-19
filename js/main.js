/* ===========================
   ТОВ ПРОТРАКТОР — main.js
   =========================== */

/* ===========================
   #ДАНІ КАТАЛОГУ
   ===========================

   Як заповнювати картку:

   cat:      категорія для фільтра — 'tractor' або 'attachment
   badge:    текст бейджа на картці (напр. "Трактор колісний", "Навісне", "Новинка")
   badgeNew: true → бейдж жовтий (для новинок); false або відсутній → зелений
   name:     назва товару (заголовок картки та модалки)
   shortDesc:короткий опис під назвою на картці (1–2 речення)
   desc:     повний опис у модальному вікні (2–4 речення)
   img:      шлях до фото, напр. "img/tractor-ag-120.jpg"
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
    name:      'Трактор2',
    shortDesc: 'Універсальний колісний трактор для широкого спектру польових робіт',
    desc:      'Універсальний колісний трактор для широкого спектру польових робіт. Надійний двигун, комфортна кабіна, широкий вибір навісного обладнання.',
    img:       'img/tractor-ag-120.jpg',
    imgAlt:    'Трактор АГ-120',
    specs: [
      { label: 'Потужність',        value: '120 к.с.' },
      { label: 'Маса',              value: '5 800 кг' },
      { label: 'Колісна база',      value: '2 650 мм' },
      { label: 'Тип трансмісії',    value: 'Механічна, 16+4' },
      { label: 'ЗПВ',               value: 'До 4 500 кг' },
      { label: 'Гарантія',          value: '2 роки' },
    ],
  },

  // Трактор 1
  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'Трактор1',
    shortDesc: '—',
    desc:      '—',
    img:       'img/tractor-ag-180.jpg',
    imgAlt:    'Трактор1',
    specs: [
      { label: 'Потужність',     value: '—' },
      { label: 'Маса',           value: '—' },
      { label: 'Колісна база',   value: '—' },
      { label: 'Тип трансмісії', value: '—' },
      { label: 'ЗПВ',            value: '—' },
      { label: 'Гарантія',       value: '—' },
    ],
  },

  // Міні-трактор
  {
    cat:       'tractor',
    badge:     'Новинка',
    badgeNew:  true,
    name:      'Міні-трактор1',
    shortDesc: '—',
    desc:      '—',
    img:       'img/tractor-mini.jpg',
    imgAlt:    'Міні-трактор1',
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

  // Навісний пристрій 1 — заповніть дані
  {
    cat:       'attachment',
    badge:     'Навісне',
    badgeNew:  false,
    name:      'Навісний пристрій 1',
    shortDesc: '—',
    desc:      '—',
    img:       'img/attachment-1.jpg',
    imgAlt:    'Навісний пристрій 1',
    specs: [
      { label: 'Характеристика 1', value: '—' },
      { label: 'Характеристика 2', value: '—' },
      { label: 'Характеристика 3', value: '—' },
    ],
  },

  // Навісний пристрій 2 — заповніть дані
  {
    cat:       'attachment',
    badge:     'Навісне',
    badgeNew:  false,
    name:      'Навісний пристрій 2',
    shortDesc: '—',
    desc:      '—',
    img:       'img/attachment-2.jpg',
    imgAlt:    'Навісний пристрій 2',
    specs: [
      { label: 'Характеристика 1', value: '—' },
      { label: 'Характеристика 2', value: '—' },
      { label: 'Характеристика 3', value: '—' },
    ],
  },

  // Навісний пристрій 3 — заповніть дані
  {
    cat:       'attachment',
    badge:     'Навісне',
    badgeNew:  false,
    name:      'Навісний пристрій 3',
    shortDesc: '—',
    desc:      '—',
    img:       'img/attachment-3.jpg',
    imgAlt:    'Навісний пристрій 3',
    specs: [
      { label: 'Характеристика 1', value: '—' },
      { label: 'Характеристика 2', value: '—' },
      { label: 'Характеристика 3', value: '—' },
    ],
  },

];


/* ===========================
   #РЕНДЕР КАТАЛОГУ
   =========================== */
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


/* ===========================
   ІНІЦІАЛІЗАЦІЯ
   =========================== */
document.addEventListener('DOMContentLoaded', () => {

  // Спочатку рендеримо картки з даних
  renderCatalog();

  // #фільтр каталогу
  const filterBtns   = document.querySelectorAll('.filter-btn');
  const catalogItems = document.querySelectorAll('.catalog-item');

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

  // #модальне вікно товару
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

  // #плавна прокрутка для хеш-якорів
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

  // #анімація при прокрутці (Intersection Observer)
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

  // #активне посилання в навбарі
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
