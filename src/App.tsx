import { useState, useEffect } from 'react'
import PrasastiDetail, { PRASASTI_DATA, type Prasasti, FlagID, FlagEN } from './components/PrasastiDetail'
import kudaduImg from '@/imports/Kudadu.jpg'

const S = {
  bg: '#f4f0ea',
  darkBg: '#161512',
  text: '#1a1914',
  darkText: '#f4f0ea',
  muted: '#8c8273',
  darkMuted: '#a09685',
  mutedLight: '#b5aa98',
  border: 'rgba(26,25,20,0.12)',
  darkBorder: 'rgba(245,240,234,0.15)',
  serif: 'DM Serif Display, Georgia, serif',
  sans: 'Work Sans, system-ui, sans-serif',
}

const TIMELINE_ITEMS = [
  {
    year: { id: '1222 M', en: '1222 CE' },
    label: { id: 'Awalan Singhasari', en: 'Singhasari Genesis' },
    desc: {
      id: 'Ken Arok mendirikan Singhasari — cikal bakal genealogi Majapahit.',
      en: 'Ken Arok founded Singhasari — the ancestral root of Majapahit genealogy.'
    }
  },
  {
    year: { id: '1294 M', en: '1294 CE' },
    label: { id: 'Lahirnya Majapahit', en: 'The Birth of Majapahit' },
    desc: {
      id: 'Raden Wijaya mendirikan Majapahit setelah mengusir pasukan Mongol dari pantai Jawa.',
      en: 'Raden Wijaya founded Majapahit after expelling Mongol forces from Java\'s shores.'
    }
  },
  {
    year: { id: '1350 M', en: '1350 CE' },
    label: { id: 'Keemasan Hayam Wuruk', en: 'Hayam Wuruk\'s Golden Reign' },
    desc: {
      id: 'Puncak keemasan Majapahit — wilayah meluas ke seluruh Nusantara di bawah Mahapatih Gajah Mada.',
      en: 'The peak of Majapahit glory — realm expanded across Nusantara under Mahapatih Gajah Mada.'
    }
  },
  {
    year: { id: '1365 M', en: '1365 CE' },
    label: { id: 'Kakawin Negarakertagama', en: 'Negarakertagama Epic' },
    desc: {
      id: 'Mpu Prapanca menggubah kakawin besar yang mencatat wilayah dan keagungan kerajaan.',
      en: 'Mpu Prapanca composed the great epic documenting the realm and majesty of the kingdom.'
    }
  },
  {
    year: { id: 'Abad XV', en: '15th Century' },
    label: { id: 'Masa Senja Kerajaan', en: 'Twilight of the Kingdom' },
    desc: {
      id: 'Perpecahan internal melemahkan Majapahit; aksara tetap bertahan melampaui mahkota dan takhta.',
      en: 'Internal conflict weakened Majapahit; scripts persisted beyond crowns and thrones.'
    }
  },
]

export default function App() {
  const [view, setView] = useState<'home' | 'detail'>('home')
  const [activePrasasti, setActivePrasasti] = useState<Prasasti | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [activeImageModal, setActiveImageModal] = useState<{ url: string; title: string } | null>(null)
  const [lang, setLang] = useState<'id' | 'en'>('id')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { threshold: 0.25 }
    )
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [view])

  const openPrasasti = (id: string) => {
    const p = PRASASTI_DATA.find(x => x.id === id)
    if (p) { setActivePrasasti(p); setView('detail'); window.scrollTo(0, 0) }
  }

  const goHome = () => { setView('home'); setActivePrasasti(null); window.scrollTo(0, 0) }

  if (view === 'detail' && activePrasasti) {
    return <PrasastiDetail prasasti={activePrasasti} lang={lang} setLang={setLang} onBack={goHome} onNavigate={openPrasasti} />
  }

  return (
    <div style={{ backgroundColor: S.bg, color: S.text, fontFamily: S.sans, minHeight: '100vh', position: 'relative' }}>

      {/* ── TOP NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: scrolled ? S.bg : 'transparent',
        borderBottom: scrolled ? `1px solid ${S.border}` : '1px solid transparent',
        transition: 'background 0.3s, border-color 0.3s',
        padding: '0 3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56,
      }}>
        {/* CLICKABLE LOGO TITLE -> NAVIGATE BACK TO LANDING PAGE */}
        <button
          onClick={goHome}
          style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            fontFamily: S.serif, fontSize: '0.95rem', letterSpacing: '0.04em',
            color: scrolled ? S.text : '#ffffff',
            fontWeight: 500,
            display: 'flex', alignItems: 'center'
          }}
          title={lang === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
        >
          WBHA <span style={{ color: scrolled ? S.muted : 'rgba(255,255,255,0.7)', margin: '0 0.4rem' }}>—</span> WETU BHASA
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            {[
              ['archive', lang === 'id' ? 'Arsip' : 'Archive'],
              ['timeline', lang === 'id' ? 'Linimasa' : 'Timeline'],
              ['gallery', lang === 'id' ? 'Galeri' : 'Gallery']
            ].map(([href, label]) => (
              <a
                key={href}
                href={`#${href}`}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: scrolled ? (activeSection === href ? S.text : S.muted) : '#ffffff',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  opacity: scrolled ? 1 : (activeSection === href ? 1 : 0.88)
                }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* LANGUAGE SWITCHER - FLAGS ONLY (NO TEXT) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '0.5rem' }}>
            <button
              onClick={() => setLang('id')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', display: 'flex', alignItems: 'center' }}
              title="Bahasa Indonesia"
            >
              <FlagID active={lang === 'id'} />
            </button>
            <button
              onClick={() => setLang('en')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', display: 'flex', alignItems: 'center' }}
              title="English"
            >
              <FlagEN active={lang === 'en'} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section
        id="hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1643760512932-ad6583917711?w=1800&h=1100&fit=crop&auto=format)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.55)',
        }} />

        {/* Hero text & action button */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1360, margin: '0 auto', width: '100%', padding: '0 3.5rem 5rem' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)', marginBottom: '1rem', fontWeight: 600 }}>
            {lang === 'id' ? 'KOLEKSI I / 01 / 1294 M' : 'COLLECTION I / 01 / 1294 CE'}
          </p>

          <h1 style={{
            fontFamily: S.serif,
            fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
            lineHeight: 1.06,
            letterSpacing: '-0.01em',
            margin: '0 0 1.25rem',
            maxWidth: '920px',
            color: '#ffffff',
            fontWeight: 400,
          }}>
            {lang === 'id' ? 'Membaca prasasti bukan sekadar membaca tulisan.' : 'Reading an inscription is more than reading words.'}
          </h1>

          <p style={{
            fontSize: '1rem',
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.92)',
            maxWidth: 540,
            marginBottom: '2rem',
          }}>
            {lang === 'id'
              ? 'Melihat huruf-huruf kuno adalah cara untuk mendengarkan suara yang telah melintasi berabad-abad silam.'
              : 'Observing ancient scripts is a way to listen to voices that have crossed centuries.'}
          </p>

          <a
            href="#archive"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500,
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.5)',
              padding: '0.9rem 2rem',
              borderRadius: '2px',
              textDecoration: 'none',
              transition: 'all 0.25s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.backgroundColor = '#ffffff'
              el.style.color = '#1a1914'
              el.style.borderColor = '#ffffff'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.backgroundColor = 'rgba(255,255,255,0.12)'
              el.style.color = '#ffffff'
              el.style.borderColor = 'rgba(255,255,255,0.5)'
            }}
          >
            {lang === 'id' ? 'Jelajahi Arsip' : 'Explore Archive'} <span>→</span>
          </a>
        </div>
      </section>

      {/* ── 01 INTRO SECTION ── */}
      <section style={{ maxWidth: 1360, margin: '0 auto', padding: '5.5rem 3.5rem 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '4.5rem', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.muted, marginBottom: '0.75rem', fontWeight: 600 }}>01 —</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)', lineHeight: 1.22, margin: 0, fontWeight: 400 }}>
              {lang === 'id' ? 'Sebuah arsip untuk suara yang datang dari masa lalu.' : 'An archive for voices arriving from the past.'}
            </h2>
          </div>
          <div>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#4a4640', margin: '0 0 2.5rem' }}>
              {lang === 'id'
                ? 'WBHA mengumpulkan dan menafsirkan prasasti-prasasti Nusantara sebagai dokumen hidup. Bukan sekadar artefak museum, melainkan teks yang masih berbicara — tentang kekuasaan, kepercayaan, keluarga, dan keadilan — kepada siapa saja yang bersedia membacanya dengan cermat dan sabar.'
                : 'WBHA gathers and interprets Nusantara inscriptions as living documents. Not merely museum artifacts, but texts that still speak — of power, faith, family, and justice — to anyone willing to read them with care and patience.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
              {[
                {
                  num: lang === 'id' ? 'Senyap' : 'Silent',
                  desc: lang === 'id' ? 'Keheningan batu sebagai bahasa tertua manusia.' : 'The silence of stone as humanity\'s oldest language.'
                },
                {
                  num: lang === 'id' ? 'Autentik' : 'Authentic',
                  desc: lang === 'id' ? 'Prasasti adalah saksi, bukan sekadar narasi.' : 'Inscriptions are witnesses, not mere narratives.'
                },
                {
                  num: lang === 'id' ? 'Editorial' : 'Editorial',
                  desc: lang === 'id' ? 'Setiap guratan diseleksi dengan nalar kuratorial.' : 'Every line selected with curatorial thought.'
                },
                {
                  num: lang === 'id' ? 'Abadi' : 'Enduring',
                  desc: lang === 'id' ? 'Aksara melampaui kerajaan yang mengukirnya.' : 'Scripts outlast the kingdoms that carved them.'
                },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: '1.5rem 1.5rem 1.5rem 0',
                  borderTop: `1px solid ${S.border}`,
                  borderLeft: i % 2 === 1 ? `1px solid ${S.border}` : 'none',
                  paddingLeft: i % 2 === 1 ? '1.5rem' : 0,
                }}>
                  <p style={{ fontFamily: S.serif, fontSize: '1.1rem', margin: '0 0 0.4rem' }}>{item.num}</p>
                  <p style={{ fontSize: '0.85rem', color: S.muted, margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 ARCHIVE / MAJAPAHIT INSCRIPTIONS ── */}
      <section id="archive" style={{ maxWidth: 1360, margin: '0 auto', padding: '5rem 3.5rem', borderTop: `1px solid ${S.border}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4.5rem', marginBottom: '3rem' }}>
          <div>
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.muted, marginBottom: '0.75rem', fontWeight: 600 }}>02 —</p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', lineHeight: 1.12, margin: 0, fontWeight: 400 }}>
              {lang === 'id' ? <>Prasasti<br />Majapahit</> : <>Majapahit<br />Inscriptions</>}
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: '0.25rem' }}>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: '#4a4640', margin: 0 }}>
              {lang === 'id'
                ? 'Lima prasasti yang membentuk tulang punggung koleksi ini. Masing-masing dipilih bukan semata karena usianya, melainkan karena kedalaman cerita yang disimpannya tentang sebuah kerajaan yang pernah menguasai separuh dunia maritim Nusantara.'
                : 'Five inscriptions forming the backbone of this collection. Each chosen not merely for its age, but for the depth of story it preserves about a kingdom that once governed half of Nusantara\'s maritime realm.'}
            </p>
          </div>
        </div>

        {/* Inscription List */}
        <div>
          {PRASASTI_DATA.map((item, i) => {
            const subtitle = lang === 'id' ? item.idContent.subtitle : item.enContent.subtitle
            const year = lang === 'id' ? item.year.id : item.year.en
            return (
              <button
                key={item.id}
                onClick={() => openPrasasti(item.id)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '3rem 1fr auto',
                  alignItems: 'center',
                  gap: '1.5rem',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  borderTop: `1px solid ${S.border}`,
                  padding: '1.35rem 0',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.25s',
                  fontFamily: S.sans,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.paddingLeft = '0.75rem'
                  e.currentTarget.style.backgroundColor = 'rgba(26,25,20,0.02)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.paddingLeft = '0'
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: S.mutedLight, fontWeight: 500 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div>
                  <span style={{ fontFamily: S.serif, fontSize: '1.15rem', color: S.text, display: 'block', marginBottom: '0.2rem' }}>{item.title}</span>
                  <span style={{ fontSize: '0.88rem', color: S.muted }}>{subtitle}</span>
                </div>

                <span style={{ fontSize: '0.85rem', color: S.muted, letterSpacing: '0.04em', whiteSpace: 'nowrap', fontWeight: 500 }}>
                  {year}
                </span>
              </button>
            )
          })}
          <div style={{ borderTop: `1px solid ${S.border}` }} />
        </div>
      </section>

      {/* ── 03 FEATURED INSCRIPTION: Prasasti Kudadu ── */}
      <section style={{ maxWidth: 1360, margin: '0 auto', padding: '5rem 3.5rem', borderTop: `1px solid ${S.border}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4.5rem', alignItems: 'center' }}>
          {/* Image */}
          <div
            style={{ position: 'relative', cursor: 'pointer', borderRadius: '4px', overflow: 'hidden' }}
            onClick={() => setActiveImageModal({ url: kudaduImg, title: lang === 'id' ? 'Prasasti Kudadu — Lempengan Tembaga 1294 M' : 'Kudadu Inscription — Copper Plate 1294 CE' })}
          >
            <img
              src={kudaduImg}
              alt="Prasasti Kudadu — Lempengan Tembaga 1294 M"
              style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', filter: 'sepia(15%) brightness(0.8)' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(26,25,20,0.55) 0%, transparent 50%)',
              display: 'flex', alignItems: 'flex-end', padding: '1.75rem',
            }}>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: 'rgba(245,240,232,0.85)', textTransform: 'uppercase' }}>
                {lang === 'id' ? 'Lempengan Tembaga · Jawa Timur · 1294 M' : 'Copper Plate · East Java · 1294 CE'}
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.muted, marginBottom: '1.25rem', fontWeight: 600 }}>
              {lang === 'id' ? 'KOLEKSI I / 01 / 1294 M' : 'COLLECTION I / 01 / 1294 CE'}
            </p>
            <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', lineHeight: 1.1, margin: '0 0 0.5rem', fontWeight: 400 }}>
              Prasasti Kudadu
            </h2>
            <p style={{ fontFamily: S.serif, fontStyle: 'italic', fontSize: '1.08rem', color: S.muted, margin: '0 0 1.75rem' }}>
              {lang === 'id' ? 'Awal Mula Majapahit' : 'The Beginning of Majapahit'}
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#4a4640', margin: '0 0 2rem' }}>
              {lang === 'id'
                ? 'Sebuah rekaman awal tentang lahirnya Majapahit, dibaca sebagai jejak kesetiaan dan pembentukan kekuasaan pada akhir abad ke-13. Ketika Raden Wijaya melarikan diri, penduduk desa ini menyembunyikannya dengan risiko nyawa.'
                : 'An early record of Majapahit\'s birth, read as a trace of loyalty and power formation at the end of the 13th century. When Raden Wijaya fled, villagers sheltered him at the risk of their lives.'}
            </p>
            <button
              onClick={() => openPrasasti('kudadu')}
              style={{
                background: 'none', border: `1px solid ${S.border}`,
                cursor: 'pointer', padding: '0.85rem 1.85rem',
                fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500,
                color: S.text, fontFamily: S.sans,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLButtonElement; el.style.backgroundColor = '#1a1914'; el.style.color = '#f5f0e8' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLButtonElement; el.style.backgroundColor = 'transparent'; el.style.color = S.text }}
            >
              {lang === 'id' ? 'Baca Selengkapnya' : 'Read Full Story'} →
            </button>
          </div>
        </div>
      </section>

      {/* ── 04 TIMELINE (DARK SECTION) ── */}
      <section
        id="timeline"
        style={{
          backgroundColor: S.darkBg,
          color: S.darkText,
          padding: '5.5rem 0'
        }}
      >
        <div style={{ maxWidth: 1360, margin: '0 auto', padding: '0 3.5rem' }}>
          <p style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.darkMuted, marginBottom: '0.75rem', fontWeight: 600 }}>04 —</p>
          <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', lineHeight: 1.14, margin: '0 0 3rem', fontWeight: 400, color: S.darkText }}>
            {lang === 'id' ? <>Lima penanda dalam perjalanan<br />Majapahit.</> : <>Five milestones in the journey of<br />Majapahit.</>}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 4.5rem' }}>
            {TIMELINE_ITEMS.map((item, i) => (
              <div key={i} style={{ borderTop: `1px solid ${S.darkBorder}`, padding: '1.6rem 0', display: 'grid', gridTemplateColumns: '7rem 1fr', gap: '1.5rem' }}>
                <div>
                  <span style={{ fontFamily: S.serif, fontSize: '0.95rem', color: S.darkMuted, display: 'block', marginBottom: '0.2rem' }}>
                    {lang === 'id' ? item.year.id : item.year.en}
                  </span>
                </div>
                <div>
                  <p style={{ fontFamily: S.serif, fontSize: '1.05rem', margin: '0 0 0.4rem', color: S.darkText }}>
                    {lang === 'id' ? item.label.id : item.label.en}
                  </p>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: S.darkMuted, margin: 0 }}>
                    {lang === 'id' ? item.desc.id : item.desc.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 INSCRIPTION GALLERY ── */}
      <section id="gallery" style={{ maxWidth: 1360, margin: '0 auto', padding: '5rem 3.5rem', borderTop: `1px solid ${S.border}` }}>
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.muted, marginBottom: '0.75rem', fontWeight: 600 }}>
          {lang === 'id' ? '05 — GALERI PRASASTI' : '05 — INSCRIPTION GALLERY'}
        </p>
        <h2 style={{ fontFamily: S.serif, fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)', lineHeight: 1.18, margin: '0 0 2.5rem', fontWeight: 400 }}>
          {lang === 'id' ? 'Galeri — Fragmen batu, aksara, dan ingatan.' : 'Gallery — Stone fragments, scripts, and memory.'}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1.25rem' }}>
          {[
            { id: '1643760512932-ad6583917711', h: 520, label: lang === 'id' ? 'Relief Candi Jawi' : 'Jawi Temple Relief', year: lang === 'id' ? 'Abad XIII' : '13th Century' },
            { id: '1702437595734-61abad4b3e11', h: 520, label: lang === 'id' ? 'Arca beraksara' : 'Inscribed Statue', year: lang === 'id' ? 'Abad XIV' : '14th Century' },
            { id: '1696220844406-d274f04c14f7', h: 520, label: lang === 'id' ? 'Candi Majapahit' : 'Majapahit Temple', year: lang === 'id' ? 'Abad XIV' : '14th Century' },
          ].map((img, i) => {
            const url = `https://images.unsplash.com/photo-${img.id}?w=${i === 0 ? 800 : 450}&h=${img.h}&fit=crop&auto=format`
            return (
              <div
                key={i}
                style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', borderRadius: '3px' }}
                onClick={() => setActiveImageModal({ url, title: `${img.label} · ${img.year}` })}
              >
                <img
                  src={url}
                  alt={img.label}
                  style={{ width: '100%', height: img.h, objectFit: 'cover', display: 'block', filter: 'sepia(20%) brightness(0.75)', transition: 'filter 0.4s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.filter = 'sepia(10%) brightness(0.9)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.filter = 'sepia(20%) brightness(0.75)')}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem 1.25rem 1.25rem', background: 'linear-gradient(transparent, rgba(26,25,20,0.7))' }}>
                  <span style={{ fontSize: '0.78rem', color: 'rgba(245,240,232,0.9)' }}>{img.label} · {img.year}</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── CLOSING QUOTE SECTION ── */}
      <section style={{
        maxWidth: 1360,
        margin: '0 auto',
        padding: '6.5rem 3.5rem 7rem',
        borderTop: `1px solid ${S.border}`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {/* Top Label */}
          <p style={{
            fontSize: '0.68rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: S.muted,
            marginBottom: '2.5rem',
            fontWeight: 600
          }}>
            {lang === 'id' ? 'WBHA PERCAYA' : 'WBHA BELIEVES'}
          </p>

          {/* Centered Serif Quote */}
          <blockquote style={{
            fontFamily: S.serif,
            fontSize: 'clamp(1.9rem, 3.8vw, 3rem)',
            lineHeight: 1.35,
            margin: 0,
            color: S.text,
            fontWeight: 400,
            letterSpacing: '-0.01em'
          }}>
            {lang === 'id' ? (
              <>
                Batu dapat retak. Kerajaan dapat runtuh.<br />
                Namun selama aksara masih dibaca,<br />
                masa lalu akan terus memiliki suara.
              </>
            ) : (
              <>
                Stone may crack. Kingdoms may fall.<br />
                Yet as long as scripts are read,<br />
                the past will always have a voice.
              </>
            )}
          </blockquote>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${S.border}`, maxWidth: 1360, margin: '0 auto', padding: '3rem 3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <span style={{ fontFamily: S.serif, fontSize: '1.15rem' }}>WBHA</span>
          <span style={{ fontSize: '0.85rem', color: S.muted }}>Wetu Bhasa</span>
          <span style={{ fontSize: '0.85rem', color: S.muted }}>{lang === 'id' ? 'Suara Masa Lalu' : 'Voice of the Past'}</span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '0.8rem', color: S.muted, margin: 0, lineHeight: 1.6 }}>
            {lang === 'id' ? 'Arsip digital prasasti-prasasti Nusantara' : 'Digital archive of Nusantara inscriptions'}
          </p>
          <p style={{ fontSize: '0.8rem', color: S.muted, margin: 0, lineHeight: 1.6 }}>
            {lang === 'id' ? 'Dirancang untuk pembacaan mendalam dan ingatan abadi.' : 'Built for slow reading and lasting memory.'}
          </p>
        </div>
      </footer>

      {/* Image Modal Lightbox */}
      {activeImageModal && (
        <div
          onClick={() => setActiveImageModal(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            backgroundColor: 'rgba(26,25,20,0.92)', backdropFilter: 'blur(10px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', cursor: 'pointer'
          }}
        >
          <img
            src={activeImageModal.url}
            alt={activeImageModal.title}
            style={{ maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain', borderRadius: '4px', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}
          />
          <span style={{ color: '#f5f0e8', fontFamily: S.serif, fontSize: '1.05rem', marginTop: '1.25rem' }}>
            {activeImageModal.title}
          </span>
        </div>
      )}

    </div>
  )
}
