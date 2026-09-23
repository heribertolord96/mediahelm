import './style.css'

const STORAGE_KEY = 'mediahelm-lang'

const strings = {
  en: {
    nav_features: 'Features',
    nav_how: 'How it works',
    nav_gallery: 'Gallery',
    nav_privacy: 'Privacy',
    nav_terms: 'Terms',
    nav_cta: 'Coming soon',
    hero_eyebrow: 'Android · LAN media',
    hero_title_a: 'Play on your phone.',
    hero_title_b: 'Cast when linked.',
    hero_sub:
      'MediaHelm is a play-first media app: browse the web, open local files, and watch TV channels on your phone — then cast to a device on your Wi‑Fi when you want to.',
    cta_primary: 'Coming soon on Google Play',
    cta_secondary: 'Privacy & Terms',
    cta_note: 'Free donationware — no ads, no account, no paywall.',
    features_label: 'What you can do',
    features_title: 'One app for web, files, TV & cast',
    features_sub: 'Built for your local network — discovery and media stay on the LAN.',
    feat_browser_title: 'Browser',
    feat_browser_desc:
      'Multi-tab WebView with stream detection. Prefers HLS playlists when available.',
    feat_files_title: 'Files',
    feat_files_desc:
      'Library & storage (SAF). Cache and relay over LAN — no cloud upload of your media.',
    feat_tv_title: 'TV',
    feat_tv_desc:
      'Public demo HLS channels in-app, plus your own M3U. Local Play works without a Cast device.',
    feat_queue_title: 'Queue',
    feat_queue_desc:
      'Build a playback queue and control remote playback when a receiver is linked.',
    feat_cast_title: 'Cast',
    feat_cast_desc:
      'First-class Chromecast and Google TV / Android TV with Cast. Best-effort DLNA and Roku. Not official partner Cast for YouTube/Netflix — and not a promise to work on every smart TV.',
    how_label: 'How it works',
    how_title: 'Three steps on your Wi‑Fi',
    how_1_title: 'Play on phone',
    how_1_desc: 'Open Browser, Files, or TV. Preview and play locally — no receiver required.',
    how_2_title: 'Link a device',
    how_2_desc: 'Discover Chromecast, Google TV, or try DLNA / Roku on the same network.',
    how_3_title: 'Cast on LAN',
    how_3_desc:
      'MediaHelm relays over your LAN so the TV can fetch the stream — your files stay local.',
    gallery_label: 'Gallery',
    gallery_title: 'See it in action',
    gal_1: 'Queue · casting to TV',
    gal_2: 'Settings · linked Cast device',
    gal_3: 'Queue · HLS remote controls',
    gal_4: 'TV · in-app Play (public demo channel)',
    trust_label: 'Free & fair',
    trust_title: 'Donationware you can trust',
    trust_sub:
      'Optional tips via Google Play Billing thank you only — nothing unlocks behind a paywall.',
    trust_1: 'No MediaHelm account required',
    trust_2: 'No ads, no paywall, no feature locks',
    trust_3: 'Casting uses a local relay on your network',
    trust_4: 'You choose the sites and playlists you open',
    footer_tag: 'Play-first LAN media for Android.',
    footer_contact: 'Contact',
    footer_portfolio: 'Portfolio',
    footer_copy:
      '© MediaHelm. Not affiliated with Google, YouTube, Netflix, or Chromecast trademarks beyond fair use of device compatibility.',
  },
  es: {
    nav_features: 'Funciones',
    nav_how: 'Cómo funciona',
    nav_gallery: 'Galería',
    nav_privacy: 'Privacidad',
    nav_terms: 'Términos',
    nav_cta: 'Próximamente',
    hero_eyebrow: 'Android · Media en LAN',
    hero_title_a: 'Reproduce en el teléfono.',
    hero_title_b: 'Castea cuando enlaces.',
    hero_sub:
      'MediaHelm es una app play-first: navega la web, abre archivos locales y mira canales de TV en el teléfono — y casteá a un dispositivo en tu Wi‑Fi cuando quieras.',
    cta_primary: 'Próximamente en Google Play',
    cta_secondary: 'Privacidad y Términos',
    cta_note: 'Donationware gratis — sin anuncios, sin cuenta, sin paywall.',
    features_label: 'Qué puedes hacer',
    features_title: 'Una app para web, archivos, TV y cast',
    features_sub: 'Hecha para tu red local — descubrimiento y media se quedan en la LAN.',
    feat_browser_title: 'Navegador',
    feat_browser_desc:
      'WebView multi-pestaña con detección de streams. Prioriza playlists HLS cuando hay.',
    feat_files_title: 'Archivos',
    feat_files_desc:
      'Biblioteca y almacenamiento (SAF). Caché y relay por LAN — sin subir tu media a la nube.',
    feat_tv_title: 'TV',
    feat_tv_desc:
      'Canales HLS de demo públicos en la app, más tu propio M3U. Play local sin dispositivo Cast.',
    feat_queue_title: 'Cola',
    feat_queue_desc:
      'Arma una cola de reproducción y controla el remoto cuando hay un receptor enlazado.',
    feat_cast_title: 'Cast',
    feat_cast_desc:
      'Chromecast y Google TV / Android TV con Cast de primera clase. DLNA y Roku best-effort. No es Cast partner oficial de YouTube/Netflix — ni una promesa de funcionar en toda smart TV.',
    how_label: 'Cómo funciona',
    how_title: 'Tres pasos en tu Wi‑Fi',
    how_1_title: 'Play en el teléfono',
    how_1_desc: 'Abre Navegador, Archivos o TV. Previsualiza y reproduce en local — sin receptor.',
    how_2_title: 'Enlaza un dispositivo',
    how_2_desc: 'Descubre Chromecast, Google TV, o prueba DLNA / Roku en la misma red.',
    how_3_title: 'Cast en la LAN',
    how_3_desc:
      'MediaHelm retransmite por tu LAN para que la TV obtenga el stream — tus archivos se quedan locales.',
    gallery_label: 'Galería',
    gallery_title: 'Mírala en acción',
    gal_1: 'Cola · casting a la TV',
    gal_2: 'Ajustes · dispositivo Cast enlazado',
    gal_3: 'Cola · controles remotos HLS',
    gal_4: 'TV · Play en la app (canal demo público)',
    trust_label: 'Gratis y justo',
    trust_title: 'Donationware de confianza',
    trust_sub:
      'Propinas opcionales vía Google Play Billing solo agradecen — nada se desbloquea con paywall.',
    trust_1: 'Sin cuenta de MediaHelm',
    trust_2: 'Sin anuncios, sin paywall, sin locks de funciones',
    trust_3: 'El cast usa un relay local en tu red',
    trust_4: 'Tú eliges los sitios y playlists que abres',
    footer_tag: 'Media LAN play-first para Android.',
    footer_contact: 'Contacto',
    footer_portfolio: 'Portafolio',
    footer_copy:
      '© MediaHelm. No afiliado a Google, YouTube, Netflix ni marcas Chromecast más allá del uso legítimo de compatibilidad.',
  },
}

function detectLang() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'es') return saved
  const nav = (navigator.language || 'en').toLowerCase()
  return nav.startsWith('es') ? 'es' : 'en'
}

function applyLang(lang) {
  const dict = strings[lang] || strings.en
  document.documentElement.lang = lang

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')
    if (dict[key] == null) return
    if (key === 'footer_tag') {
      el.replaceChildren(
        document.createTextNode(`${dict[key]} `),
        Object.assign(document.createElement('code'), {
          className: 'text-slate-400',
          textContent: 'com.mediahelm.app',
        }),
      )
      return
    }
    el.textContent = dict[key]
  })

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang))
  })

  localStorage.setItem(STORAGE_KEY, lang)
}

function initLang() {
  applyLang(detectLang())
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang))
  })
}

function initHeader() {
  const header = document.getElementById('site-header')
  const onScroll = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 12)
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
}

function initMobileNav() {
  const btn = document.getElementById('menu-btn')
  const panel = document.getElementById('mobile-nav')
  if (!btn || !panel) return

  const close = () => {
    panel.classList.add('hidden')
    btn.setAttribute('aria-expanded', 'false')
  }

  btn.addEventListener('click', () => {
    const open = panel.classList.toggle('hidden') === false
    btn.setAttribute('aria-expanded', String(open))
  })

  panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', close))
}

function initReveal() {
  const nodes = document.querySelectorAll('.reveal')
  if (!('IntersectionObserver' in window)) {
    nodes.forEach((n) => n.classList.add('is-visible'))
    return
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  )
  nodes.forEach((n) => io.observe(n))
}

initLang()
initHeader()
initMobileNav()
initReveal()
