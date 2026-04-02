/* ===========================
   ТОВ ПРОТРАКТОР — main.js
   =========================== */

const PRODUCTS = [

  /* ─────────────────────────────────────────
     ТРАКТОРИ КОЛІСНІ
     ───────────────────────────────────────── */

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'EUROFENG 554 LUX',
    shortDesc: 'Чотирициліндровий 4-тактний дизельний трактор 4х4, 50 к.с.',
    desc:      'Потужний колісний трактор EUROFENG 554LUX з чотирициліндровим 4-тактним двигуном потужністю 50 к.с. Повний привід 4х4, електричний стартер, блокування заднього диференціалу. Постачається в комплекті з інструментом та приладдям (ЗІП).',
    img:       'img/EUROFENG 554LUX.png',
    imgAlt:    'Трактор колісний EUROFENG 554 LUX',
    specs: [
      { label: 'Потужність двигуна',      value: '36,8 кВт (50,0 к.с.) при 2200 об/хв' },
      { label: 'Тип двигуна',             value: 'Чотирициліндровий, 4-тактний' },
      { label: 'Колісна формула',         value: '4х4' },
      { label: 'Тип палива',              value: 'Дизельне' },
      { label: 'Система запуску',         value: 'Електричний стартер' },
      { label: 'Привод',                  value: 'Пряма передача' },
      { label: 'Трансмісія',              value: 'Шестерний редуктор' },
      { label: 'Кількість швидкостей',    value: '8 вперед, 2 назад (4+1)х2' },
      { label: 'Об\'єм циліндрів',        value: '3170 см³' },
      { label: 'Номінальні оберти',       value: '2350 об/хв' },
      { label: 'Розмір передніх шин',     value: '8.30-20.0 (ялинка)' },
      { label: 'Розмір задніх шин',       value: '12.40-28.0 (ялинка)' },
      { label: 'Блокування диференціалу', value: '+' },
      { label: 'Система охолодження',     value: 'Водяне радіаторне, циркуляційного типу' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'EUROFENG 554DXL',
    shortDesc: 'Чотирициліндровий 4-тактний дизельний трактор 4х4, 50 к.с.',
    desc:      'Потужний колісний трактор EUROFENG 554DXL з чотирициліндровим 4-тактним двигуном потужністю 50 к.с. Повний привід 4х4, електричний стартер, блокування заднього диференціалу. Постачається в комплекті з інструментом та приладдям (ЗІП).',
    img:       'img/EUROFENG 554DXL.png',
    imgAlt:    'Трактор колісний EUROFENG 554DXL',
    specs: [
      { label: 'Потужність двигуна',      value: '36,8 кВт (50,0 к.с.) при 2200 об/хв' },
      { label: 'Тип двигуна',             value: 'Чотирициліндровий, 4-тактний' },
      { label: 'Колісна формула',         value: '4х4' },
      { label: 'Тип палива',              value: 'Дизельне' },
      { label: 'Система запуску',         value: 'Електричний стартер' },
      { label: 'Привод',                  value: 'Пряма передача' },
      { label: 'Трансмісія',              value: 'Шестерний редуктор' },
      { label: 'Кількість швидкостей',    value: '8 вперед, 2 назад (4+1)х2' },
      { label: 'Об\'єм циліндрів',        value: '3170 см³' },
      { label: 'Номінальні оберти',       value: '2350 об/хв' },
      { label: 'Розмір передніх шин',     value: '8.30-20.0 (ялинка)' },
      { label: 'Розмір задніх шин',       value: '12.40-28.0 (ялинка)' },
      { label: 'Блокування диференціалу', value: '+' },
      { label: 'Система охолодження',     value: 'Водяне радіаторне, циркуляційного типу' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'TERRA FORCE 554LUX',
    shortDesc: 'Чотирициліндровий 4-тактний дизельний трактор 4х4, 50 к.с.',
    desc:      'Надійний колісний трактор TERRA FORCE 554LUX з чотирициліндровим 4-тактним двигуном потужністю 50 к.с. Повний привід 4х4, електричний стартер, блокування заднього диференціалу. Постачається в комплекті з інструментом та приладдям (ЗІП).',
    img:       'img/TERRA FORCE 554LUX.jpg',
    imgAlt:    'Трактор колісний TERRA FORCE 554LUX',
    specs: [
      { label: 'Потужність двигуна',      value: '36,8 кВт (50,0 к.с.) при 2200 об/хв' },
      { label: 'Тип двигуна',             value: 'Чотирициліндровий, 4-тактний' },
      { label: 'Колісна формула',         value: '4х4' },
      { label: 'Тип палива',              value: 'Дизельне' },
      { label: 'Система запуску',         value: 'Електричний стартер' },
      { label: 'Привод',                  value: 'Пряма передача' },
      { label: 'Трансмісія',              value: 'Шестерний редуктор' },
      { label: 'Кількість швидкостей',    value: '8 вперед, 2 назад (4+1)х2' },
      { label: 'Об\'єм циліндрів',        value: '3170 см³' },
      { label: 'Номінальні оберти',       value: '2350 об/хв' },
      { label: 'Розмір передніх шин',     value: '8.30-20.0 (ялинка)' },
      { label: 'Розмір задніх шин',       value: '12.40-28.0 (ялинка)' },
      { label: 'Блокування диференціалу', value: '+' },
      { label: 'Система охолодження',     value: 'Водяне радіаторне, циркуляційного типу' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'ДМТЗ T-252',
    shortDesc: 'Одноциліндровий 4-тактний дизельний трактор 4х2, 24 к.с.',
    desc:      'Компактний колісний трактор ДМТЗ T-252 з одноциліндровим 4-тактним двигуном потужністю 24 к.с. Клиноременева передача (4 ременя), ручний та електричний стартер, блокування заднього диференціалу. Постачається в комплекті з ЗІП.',
    img:       'img/ДМТЗ T-252.png',
    imgAlt:    'Трактор колісний ДМТЗ T-252',
    specs: [
      { label: 'Потужність двигуна',      value: '17,6 кВт (24,0 к.с.) при 2200 об/хв' },
      { label: 'Тип двигуна',             value: 'Одноциліндровий, 4-тактний' },
      { label: 'Колісна формула',         value: '4х2' },
      { label: 'Тип палива',              value: 'Дизельне' },
      { label: 'Система запуску',         value: 'Ручний стартер, Електричний стартер' },
      { label: 'Привод',                  value: 'Клиноременева передача (4 ременя)' },
      { label: 'Трансмісія',              value: 'Шестерний редуктор' },
      { label: 'Кількість швидкостей',    value: '6 вперед, 2 назад (3+1)х2' },
      { label: 'Об\'єм циліндрів',        value: '1230 см³' },
      { label: 'Номінальні оберти',       value: '2200 об/хв' },
      { label: 'Розмір передніх шин',     value: '7.00-12.0 (ялинка)' },
      { label: 'Розмір задніх шин',       value: '9.50-16.0 (ялинка)' },
      { label: 'Блокування диференціалу', value: '+' },
      { label: 'Система охолодження',     value: 'Водяне радіаторне, циркуляційного типу' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'ДМТЗ 255B',
    shortDesc: 'Одноциліндровий 4-тактний дизельний трактор 4х2, 24 к.с.',
    desc:      'Надійний колісний трактор ДМТЗ 255B з одноциліндровим 4-тактним двигуном потужністю 24 к.с. Клиноременева передача (4 ременя), ручний та електричний стартер, блокування заднього диференціалу. Постачається в комплекті з ЗІП.',
    img:       'img/ДМТЗ 255B.png',
    imgAlt:    'Трактор колісний ДМТЗ 255B',
    specs: [
      { label: 'Потужність двигуна',      value: '17,6 кВт (24,0 к.с.) при 2200 об/хв' },
      { label: 'Тип двигуна',             value: 'Одноциліндровий, 4-тактний' },
      { label: 'Колісна формула',         value: '4х2' },
      { label: 'Тип палива',              value: 'Дизельне' },
      { label: 'Система запуску',         value: 'Ручний стартер, Електричний стартер' },
      { label: 'Привод',                  value: 'Клиноременева передача (4 ременя)' },
      { label: 'Трансмісія',              value: 'Шестерний редуктор' },
      { label: 'Кількість швидкостей',    value: '8 вперед, 2 назад (4+1)х2' },
      { label: 'Об\'єм циліндрів',        value: '1344 см³' },
      { label: 'Номінальні оберти',       value: '2200 об/хв' },
      { label: 'Розмір передніх шин',     value: '6.00-16.0 (ялинка)' },
      { label: 'Розмір задніх шин',       value: '9.50-24.0 (ялинка)' },
      { label: 'Блокування диференціалу', value: '+' },
      { label: 'Система охолодження',     value: 'Водяне радіаторне, циркуляційного типу' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'ДМТЗ 244X',
    shortDesc: 'Трициліндровий 4-тактний дизельний трактор 4х4, 24 к.с.',
    desc:      'Компактний колісний трактор ДМТЗ 244X з трициліндровим 4-тактним двигуном потужністю 24 к.с. Повний привід 4х4, пряма передача, електричний стартер, блокування заднього диференціалу. Постачається в комплекті з ЗІП.',
    img:       'img/ДМТЗ 244Х.jpg',
    imgAlt:    'Трактор колісний ДМТЗ 244X',
    specs: [
      { label: 'Потужність двигуна',      value: '17,6 кВт (24,0 к.с.) при 2200 об/хв' },
      { label: 'Тип двигуна',             value: 'Трициліндровий, 4-тактний' },
      { label: 'Колісна формула',         value: '4х4' },
      { label: 'Тип палива',              value: 'Дизельне' },
      { label: 'Система запуску',         value: 'Електричний стартер' },
      { label: 'Привод',                  value: 'Пряма передача' },
      { label: 'Трансмісія',              value: 'Шестерний редуктор' },
      { label: 'Кількість швидкостей',    value: '8 вперед, 2 назад (4+1)х2' },
      { label: 'Об\'єм циліндрів',        value: '1532 см³' },
      { label: 'Номінальні оберти',       value: '2350 об/хв' },
      { label: 'Розмір передніх шин',     value: '7.50-16.0 (ялинка)' },
      { label: 'Розмір задніх шин',       value: '11.20-24.0 (ялинка)' },
      { label: 'Блокування диференціалу', value: '+' },
      { label: 'Система охолодження',     value: 'Водяне радіаторне, циркуляційного типу' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'TERRA FORCE 3254HX',
    shortDesc: 'Трициліндровий 4-тактний дизельний трактор 4х4, 24 к.с.',
    desc:      'Надійний колісний трактор TERRA FORCE 3254HX з трициліндровим 4-тактним двигуном потужністю 24 к.с. Повний привід 4х4, пряма передача, електричний стартер, блокування заднього диференціалу. Постачається в комплекті з ЗІП.',
    img:       'img/TERRA FORCE 3254HX.png',
    imgAlt:    'Трактор колісний TERRA FORCE 3254HX',
    specs: [
      { label: 'Потужність двигуна',      value: '17,6 кВт (24,0 к.с.) при 2200 об/хв' },
      { label: 'Тип двигуна',             value: 'Трициліндровий, 4-тактний' },
      { label: 'Колісна формула',         value: '4х4' },
      { label: 'Тип палива',              value: 'Дизельне' },
      { label: 'Система запуску',         value: 'Електричний стартер' },
      { label: 'Привод',                  value: 'Пряма передача' },
      { label: 'Трансмісія',              value: 'Шестерний редуктор' },
      { label: 'Кількість швидкостей',    value: '8 вперед, 2 назад (4+1)х2' },
      { label: 'Об\'єм циліндрів',        value: '1532 см³' },
      { label: 'Номінальні оберти',       value: '2350 об/хв' },
      { label: 'Розмір передніх шин',     value: '7.50-16.0 (ялинка)' },
      { label: 'Розмір задніх шин',       value: '11.20-24.0 (ялинка)' },
      { label: 'Блокування диференціалу', value: '+' },
      { label: 'Система охолодження',     value: 'Водяне радіаторне, циркуляційного типу' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'ДМТЗ 404XC',
    shortDesc: 'Чотирициліндровий 4-тактний дизельний трактор 4х4, 40 к.с.',
    desc:      'Потужний колісний трактор ДМТЗ 404XC з чотирициліндровим 4-тактним двигуном потужністю 40 к.с. Повний привід 4х4, пряма передача, електричний стартер, блокування заднього диференціалу. Рік випуску: 2025. Постачається в комплекті з ЗІП.',
    img:       'img/ДМТЗ 404ХС.png',
    imgAlt:    'Трактор колісний ДМТЗ 404XC',
    specs: [
      { label: 'Потужність двигуна',      value: '29,5 кВт (40,0 к.с.) при 2200 об/хв' },
      { label: 'Тип двигуна',             value: 'Чотирициліндровий, 4-тактний' },
      { label: 'Колісна формула',         value: '4х4' },
      { label: 'Тип палива',              value: 'Дизельне' },
      { label: 'Система запуску',         value: 'Електричний стартер' },
      { label: 'Привод',                  value: 'Пряма передача' },
      { label: 'Трансмісія',              value: 'Шестерний редуктор' },
      { label: 'Кількість швидкостей',    value: '8 вперед, 2 назад (4+4)х2' },
      { label: 'Об\'єм циліндрів',        value: '3170 см³' },
      { label: 'Номінальні оберти',       value: '2400 об/хв' },
      { label: 'Розмір передніх шин',     value: '7.50-20.0 (ялинка)' },
      { label: 'Розмір задніх шин',       value: '11.20-28.0 (ялинка)' },
      { label: 'Блокування диференціалу', value: '+' },
      { label: 'Система охолодження',     value: 'Водяне радіаторне, циркуляційного типу' },
      { label: 'Рік випуску',             value: '2025' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'TERRA FORCE 404HXC',
    shortDesc: 'Чотирициліндровий 4-тактний дизельний трактор 4х4, 40 к.с.',
    desc:      'Надійний колісний трактор TERRA FORCE 404HXC з чотирициліндровим 4-тактним двигуном потужністю 40 к.с. Повний привід 4х4, пряма передача, електричний стартер, блокування заднього диференціалу. Постачається в комплекті з ЗІП.',
    img:       'img/TERRA FORCE 404HXC.png',
    imgAlt:    'Трактор колісний TERRA FORCE 404HXC',
    specs: [
      { label: 'Потужність двигуна',      value: '29,5 кВт (40,0 к.с.) при 2200 об/хв' },
      { label: 'Тип двигуна',             value: 'Чотирициліндровий, 4-тактний' },
      { label: 'Колісна формула',         value: '4х4' },
      { label: 'Тип палива',              value: 'Дизельне' },
      { label: 'Система запуску',         value: 'Електричний стартер' },
      { label: 'Привод',                  value: 'Пряма передача' },
      { label: 'Трансмісія',              value: 'Шестерний редуктор' },
      { label: 'Кількість швидкостей',    value: '8 вперед, 2 назад (4+4)х2' },
      { label: 'Об\'єм циліндрів',        value: '3170 см³' },
      { label: 'Номінальні оберти',       value: '2400 об/хв' },
      { label: 'Розмір передніх шин',     value: '7.50-20.0 (ялинка)' },
      { label: 'Розмір задніх шин',       value: '11.20-28.0 (ялинка)' },
      { label: 'Блокування диференціалу', value: '+' },
      { label: 'Система охолодження',     value: 'Водяне радіаторне, циркуляційного типу' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'ДМТЗ 544X',
    shortDesc: 'Чотирициліндровий 4-тактний дизельний трактор 4х4, 50 к.с.',
    desc:      'Потужний колісний трактор ДМТЗ 544X з чотирициліндровим 4-тактним двигуном потужністю 50 к.с. Повний привід 4х4, пряма передача, електричний стартер, блокування заднього диференціалу. Постачається в комплекті з ЗІП.',
    img:       'img/ДМТЗ 544X.jpg',
    imgAlt:    'Трактор колісний ДМТЗ 544X',
    specs: [
      { label: 'Потужність двигуна',      value: '36,8 кВт (50,0 к.с.) при 2200 об/хв' },
      { label: 'Тип двигуна',             value: 'Чотирициліндровий, 4-тактний' },
      { label: 'Колісна формула',         value: '4х4' },
      { label: 'Тип палива',              value: 'Дизельне' },
      { label: 'Система запуску',         value: 'Електричний стартер' },
      { label: 'Привод',                  value: 'Пряма передача' },
      { label: 'Трансмісія',              value: 'Шестерний редуктор' },
      { label: 'Кількість швидкостей',    value: '8 вперед, 2 назад (4+4)х2' },
      { label: 'Об\'єм циліндрів',        value: '3170 см³' },
      { label: 'Номінальні оберти',       value: '2400 об/хв' },
      { label: 'Розмір передніх шин',     value: '7.50-20.0 (ялинка)' },
      { label: 'Розмір задніх шин',       value: '11.20-28.0 (ялинка)' },
      { label: 'Блокування диференціалу', value: '+' },
      { label: 'Система охолодження',     value: 'Водяне радіаторне, циркуляційного типу' },
    ],
  },

  {
    cat:       'tractor',
    badge:     'Трактор колісний',
    badgeNew:  false,
    name:      'TERRA FORCE 554',
    shortDesc: 'Чотирициліндровий 4-тактний дизельний трактор 4х4, 50 к.с.',
    desc:      'Надійний колісний трактор TERRA FORCE 554 з чотирициліндровим 4-тактним двигуном потужністю 50 к.с. Повний привід 4х4, пряма передача, електричний стартер, блокування заднього диференціалу. Постачається в комплекті з ЗІП.',
    img:       'img/TERRA FORCE 554.png',
    imgAlt:    'Трактор колісний TERRA FORCE 554',
    specs: [
      { label: 'Потужність двигуна',      value: '36,8 кВт (50,0 к.с.) при 2200 об/хв' },
      { label: 'Тип двигуна',             value: 'Чотирициліндровий, 4-тактний' },
      { label: 'Колісна формула',         value: '4х4' },
      { label: 'Тип палива',              value: 'Дизельне' },
      { label: 'Система запуску',         value: 'Електричний стартер' },
      { label: 'Привод',                  value: 'Пряма передача' },
      { label: 'Трансмісія',              value: 'Шестерний редуктор' },
      { label: 'Кількість швидкостей',    value: '8 вперед, 2 назад (4+4)х2' },
      { label: 'Об\'єм циліндрів',        value: '3170 см³' },
      { label: 'Номінальні оберти',       value: '2400 об/хв' },
      { label: 'Розмір передніх шин',     value: '7.50-20.0 (ялинка)' },
      { label: 'Розмір задніх шин',       value: '11.20-28.0 (ялинка)' },
      { label: 'Блокування диференціалу', value: '+' },
      { label: 'Система охолодження',     value: 'Водяне радіаторне, циркуляційного типу' },
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
    shortDesc: 'Горизонтальна ґрунтофреза для міні-трактора, ширина обробки 1420 мм.',
    desc:      'Ґрунтофреза ДМТЗ 141225 призначена для стандартної сухої обробки ґрунту. Горизонтальна конфігурація, 26 ножів, глибина обробки до 210 мм. Джерело живлення — міні-трактор колісний. Виробник: Китай.',
    img:       'img/Грунтофреза ДМТЗ 141225.png',
    imgAlt:    'Ґрунтофреза ДМТЗ 141225',
    specs: [
      { label: 'Модель',                  value: '141225' },
      { label: 'Торгова марка',           value: 'ДМТЗ' },
      { label: 'Джерело живлення',        value: 'Міні-трактор колісний' },
      { label: 'Конфігурація',            value: 'Горизонтальна' },
      { label: 'Робочий інструмент',      value: 'Ножі' },
      { label: 'Кількість ножів',         value: '26 шт.' },
      { label: 'Число обертів',           value: '300 об/хв' },
      { label: 'Глибина обробки ґрунту',  value: '80–210 мм' },
      { label: 'Ширина обробки ґрунту',   value: '1420 мм' },
      { label: 'Операції',                value: 'Стандартна суха обробка ґрунту' },
      { label: 'Технічний стан',          value: 'Новий' },
      { label: 'Країна-виробник',         value: 'Китай' },
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
          data-specs='${JSON.stringify(p.specs).replace(/'/g, "&apos;")}'> 
          <div class="prod-card__badge${p.badgeNew ? ' prod-card__badge--new' : ''}">${p.badge}</div>
          <div class="prod-card__img-wrap">
            <img src="${p.img}" alt="${p.imgAlt}" loading="lazy" />
          </div>
          <div class="prod-card__body">
            <h3 class="prod-card__name">${p.name}</h3>
            <p class="prod-card__desc">${p.shortDesc}</p>
            <button class="btn btn-accent btn-sm w-100 prod-card__more">Детальніше</button>
            <div class="prod-card__price">
              💰 Ціна: <span>Уточнюйте за телефоном</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');
}


/* ===========================
   ІНІЦІАЛІЗАЦІЯ
   =========================== */
document.addEventListener('DOMContentLoaded', () => {

  renderCatalog();

  // #фільтр каталогу
  const filterBtns = document.querySelectorAll('.filter-btn');

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

  // #анімація при прокрутці
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

    document.querySelectorAll('.prod-card').forEach(el => {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(16px)';
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
