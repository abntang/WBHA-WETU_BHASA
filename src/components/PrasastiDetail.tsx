import React, { useState } from 'react'
import kudaduImg from '@/imports/Kudadu.jpg'

const S = {
  bg: '#f5f0e8',
  text: '#1a1914',
  muted: '#8a7f6e',
  border: 'rgba(26,25,20,0.1)',
  serif: 'DM Serif Display, Georgia, serif',
  sans: 'Work Sans, system-ui, sans-serif',
}

export function FlagID({ active }: { active: boolean }) {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" style={{ borderRadius: 2, opacity: active ? 1 : 0.45, transition: 'opacity 0.2s', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))' }}>
      <rect width="20" height="7" fill="#E70011" />
      <rect y="7" width="20" height="7" fill="#FFFFFF" />
      <rect width="20" height="14" rx="1" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" fill="none" />
    </svg>
  )
}

export function FlagEN({ active }: { active: boolean }) {
  return (
    <svg width="20" height="14" viewBox="0 0 60 42" fill="none" style={{ borderRadius: 2, opacity: active ? 1 : 0.45, transition: 'opacity 0.2s', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))' }}>
      <clipPath id="gb-detail"><rect width="60" height="42" rx="3" /></clipPath>
      <g clipPath="url(#gb-detail)">
        <rect width="60" height="42" fill="#012169" />
        <path d="M0,0 L60,42 M60,0 L0,42" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M0,0 L60,42 M60,0 L0,42" stroke="#C8102E" strokeWidth="2" />
        <path d="M30,0 V42 M0,21 H60" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M30,0 V42 M0,21 H60" stroke="#C8102E" strokeWidth="6" />
      </g>
      <rect width="60" height="42" rx="3" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

export interface LocalizedContent {
  subtitle: string
  lead: string
  body: string[]
  closing: string
  meta: string
}

export interface Prasasti {
  id: string
  collectionNum: string
  year: { id: string; en: string }
  title: string
  image?: string
  idContent: LocalizedContent
  enContent: LocalizedContent
}

export const PRASASTI_DATA: Prasasti[] = [
  {
    id: 'kudadu',
    collectionNum: '01',
    year: { id: '1294 M', en: '1294 CE' },
    title: 'Prasasti Kudadu',
    image: kudaduImg,
    idContent: {
      subtitle: 'Awal Mula Majapahit',
      lead: 'Sebuah rekaman awal tentang lahirnya Majapahit, dibaca sebagai jejak kesetiaan dan pembentukan kekuasaan pada akhir abad ke-13.',
      body: [
        'Prasasti Kudadu adalah salah satu dokumen paling awal yang menyebut nama Raden Wijaya secara eksplisit — pendiri Kerajaan Majapahit. Ditulis di atas lempengan tembaga menggunakan aksara Kawi dalam bahasa Jawa Kuno, prasasti ini mencatat pembebasan pajak atas Desa Kudadu sebagai anugerah atas kesetiaan para warganya kepada sang raja muda.',
        'Ketika Raden Wijaya melarikan diri dari kejaran pasukan Jayakatwang, penduduk Desa Kudadu menyembunyikan dan melindunginya dengan risiko nyawa mereka sendiri. Setelah ia berhasil merebut kembali kekuasaan dan mendirikan Majapahit, ia tidak melupakan budi baik itu. Prasasti Kudadu adalah bukti bahwa ingatan seorang raja adalah catatan tertua tentang keadilan.',
        'Dalam sejarah epigrafis Nusantara, prasasti ini menempati posisi yang sangat penting — bukan hanya sebagai dokumen administratif, melainkan sebagai kesaksian atas momen kelahiran sebuah kerajaan besar yang kelak akan mewarnai seluruh Nusantara selama dua abad.',
      ],
      closing: 'Kesetiaan kecil bisa mengubah jalannya sebuah peradaban.',
      meta: 'Tahun: 1294 M · Raja: Kertarajasa Jayawardhana · Aksara: Kawi · Bahasa: Jawa Kuno · Material: Tembaga · Kategori: Piagam Kerajaan',
    },
    enContent: {
      subtitle: 'The Beginning of Majapahit',
      lead: 'An early record of Majapahit\'s birth, read as a trace of loyalty and power formation at the end of the 13th century.',
      body: [
        'The Kudadu Inscription is one of the earliest documents explicitly naming Raden Wijaya — the founder of the Majapahit Kingdom. Written on copper plates using Kawi script in Old Javanese, this inscription records tax exemption granted to Kudadu Village as a reward for the villagers\' unwavering loyalty to the young king.',
        'When Raden Wijaya fled from Jayakatwang\'s pursuing army, the people of Kudadu Village sheltered and protected him at the risk of their own lives. Once he successfully reclaimed power and established Majapahit, he did not forget their kindness. The Kudadu Inscription stands as proof that a king\'s memory is humanity\'s oldest record of justice.',
        'In the epigraphic history of Nusantara, this inscription holds paramount importance — not merely as an administrative document, but as an eyewitness testimony to the birth of a empire that would shape the archipelago for two centuries.',
      ],
      closing: 'A small act of loyalty can alter the course of a civilization.',
      meta: 'Year: 1294 CE · Reign: Kertarajasa Jayawardhana · Script: Kawi · Language: Old Javanese · Material: Copper · Category: Royal Decree',
    },
  },
  {
    id: 'sukamerta',
    collectionNum: '02',
    year: { id: '1296 M', en: '1296 CE' },
    title: 'Prasasti Sukamerta',
    image: '',
    idContent: {
      subtitle: 'Warisan Seorang Ibu',
      lead: 'Tidak setiap prasasti mengabarkan tentang peperangan. Sebagian mengabadikan ingatan tentang kasih sayang, rasa syukur, dan penghormatan kepada keluarga.',
      body: [
        'Dikeluarkan pada masa awal pemerintahan Kertarajasa Jayawardhana (Raden Wijaya), Prasasti Sukamerta mencatat penetapan sima (tanah bebas pajak) untuk mendukung pembangunan tempat suci di Sukamerta dan Antang. Tempat suci tersebut diperuntukkan bagi penghormatan kepada para leluhur raja, termasuk ibunda sang raja.',
        'Di luar fungsi administratifnya, prasasti ini memperlihatkan sisi personal dari Majapahit. Ini menggambarkan bagaimana kekuasaan politik berkelindan erat dengan bakti kepada orang tua dan penghormatan leluhur, membuktikan bahwa memuliakan asal-usul dianggap sebagai kewajiban utama seorang penguasa.',
        'Sebuah kerajaan mungkin bangkit melalui keberanian, tetapi seorang penguasa dibentuk oleh mereka yang membesarkannya.',
      ],
      closing: 'Sebuah kerajaan mungkin bangkit melalui keberanian, tetapi seorang penguasa dibentuk oleh mereka yang membesarkannya.',
      meta: 'Tahun: 1296 M · Raja: Kertarajasa Jayawardhana · Aksara: Kawi · Bahasa: Jawa Kuno · Material: Batu · Kategori: Piagam Kerajaan',
    },
    enContent: {
      subtitle: "A Mother's Legacy",
      lead: 'Not every inscription speaks of war. Some preserve the memory of love, gratitude, and devotion to one\'s family.',
      body: [
        'Issued during the early reign of Kertarajasa Jayawardhana (Raden Wijaya), the Sukamerta Inscription records the establishment of tax-free land (sima) to support the construction of a sacred sanctuary in Sukamerta and Antang. The sanctuary was dedicated to honoring royal ancestors, including the king\'s mother.',
        'Beyond its administrative function, the inscription reflects the deeply personal side of Majapahit. It illustrates how political authority was intertwined with filial piety and ancestral reverence, demonstrating that honoring one\'s origins was considered an essential responsibility of a ruler.',
        'A kingdom may rise through courage, but a ruler is shaped by the people who raised him.',
      ],
      closing: 'A kingdom may rise through courage, but a ruler is shaped by the people who raised him.',
      meta: 'Year: 1296 CE · Reign: Kertarajasa Jayawardhana · Script: Kawi · Language: Old Javanese · Material: Stone · Category: Royal Decree',
    },
  },
  {
    id: 'katiden',
    collectionNum: '03',
    year: { id: '1392 M', en: '1392 CE' },
    title: 'Prasasti Katiden',
    image: '',
    idContent: {
      subtitle: 'Melindungi Warisan Suci',
      lead: 'Mengapa sebuah kerajaan besar memilih untuk menjaga tempat suci yang lebih tua dari kerajaannya sendiri?',
      body: [
        'Dikeluarkan pada masa pemerintahan Hayam Wuruk atau awal masa Wikramawardhana, Prasasti Katiden mencatat perintah resmi untuk melindungi dan merawat tempat suci yang diwarisi dari zaman Kerajaan Singhasari.',
        'Alih-alih menghapus jejak masa lalu, Majapahit memilih untuk memeliharanya. Prasasti ini menjadi bukti nyata komitmen kerajaan dalam menjaga warisan budaya dan keagamaan, serta mengakui peradaban pendahulu sebagai bagian tak terpisahkan dari identitas sejarah mereka.',
        'Peradaban besar tidak pernah menghapus sejarah. Mereka melindunginya.',
      ],
      closing: 'Peradaban besar tidak pernah menghapus sejarah. Mereka melindunginya.',
      meta: 'Tahun: 1392 M · Raja: Hayam Wuruk / Wikramawardhana · Lokasi: Malang · Aksara: Kawi · Bahasa: Jawa Kuno · Material: Batu',
    },
    enContent: {
      subtitle: 'Preserving Sacred Heritage',
      lead: 'Why would a great kingdom choose to preserve a sanctuary older than itself?',
      body: [
        'Issued during the reign of Hayam Wuruk or the early reign of Wikramawardhana, the Katiden Inscription records an official order to protect and maintain a sacred sanctuary inherited from the Singhasari Kingdom.',
        'Rather than erasing traces of the past, Majapahit chose to preserve them. This inscription serves as clear evidence of the kingdom\'s commitment to protecting cultural and religious heritage, recognizing earlier civilizations as an inseparable part of their historical identity.',
        'Great civilizations never erase history. They protect it.',
      ],
      closing: 'Great civilizations never erase history. They protect it.',
      meta: 'Year: 1392 CE · Reign: Hayam Wuruk / Wikramawardhana · Location: Malang · Script: Kawi · Language: Old Javanese · Material: Stone',
    },
  },
  {
    id: 'waringin-pitu',
    collectionNum: '04',
    year: { id: '1447 M', en: '1447 CE' },
    title: 'Prasasti Waringin Pitu',
    image: '',
    idContent: {
      subtitle: 'Arsitektur Kekuasaan',
      lead: 'Kerajaan yang agung tidak hanya ditopang oleh rajanya, melainkan oleh tatanan sistem yang mengelolanya.',
      body: [
        'Prasasti Waringin Pitu dikeluarkan pada masa pemerintahan Sri Maharaja Jayawisesa. Prasasti ini merupakan salah satu sumber sejarah paling krusial yang menguraikan struktur birokrasi dan tata pemerintahan Kerajaan Majapahit.',
        'Prasasti ini mencatat deretan pejabat tinggi, penguasa daerah, serta pejabat keagamaan, memberikan gambaran terperinci bagi para sejarawan mengenai bagaimana tata kelola birokrasi Majapahit bekerja. Hal ini membuktikan adanya sistem administrasi canggih yang mampu menopang salah satu kerajaan maritim terbesar di Asia Tenggara.',
        'Sebuah kerajaan berdiri kokoh karena institusinya berdiri tegak.',
      ],
      closing: 'Sebuah kerajaan berdiri kokoh karena institusinya berdiri tegak.',
      meta: 'Tahun: 1447 M · Raja: Sri Maharaja Jayawisesa · Aksara: Kawi · Bahasa: Jawa Kuno · Material: Batu · Kategori: Tata Pemerintahan',
    },
    enContent: {
      subtitle: 'The Architecture of Power',
      lead: 'A great kingdom is sustained not only by its monarch, but by the governance system that manages it.',
      body: [
        'The Waringin Pitu Inscription was issued during the reign of Sri Maharaja Jayawisesa. It stands as one of the most critical historical sources detailing the administrative structure and governance of Majapahit.',
        'The inscription lists numerous high-ranking officials, regional governors, and religious dignitaries, offering historians a meticulous view of how Majapahit\'s bureaucracy operated. It proves the existence of a sophisticated administrative system capable of sustaining one of Southeast Asia\'s largest maritime empires.',
        'A kingdom stands strong because its institutions stand firm.',
      ],
      closing: 'A kingdom stands strong because its institutions stand firm.',
      meta: 'Year: 1447 CE · Reign: Sri Maharaja Jayawisesa · Script: Kawi · Language: Old Javanese · Material: Stone · Category: Governance',
    },
  },
  {
    id: 'jiyu',
    collectionNum: '05',
    year: { id: 'Abad XV', en: '15th Century' },
    title: 'Prasasti Jiyu',
    image: '',
    idContent: {
      subtitle: 'Keharmonisan dalam Keyakinan',
      lead: 'Berbeda keyakinan. Satu kerajaan. Sebuah harapan bersama akan kedamaian.',
      body: [
        'Prasasti Jiyu berasal dari periode akhir Majapahit dan ditemukan di wilayah Mojokerto. Prasasti ini mencatat penganugerahan tanah sima bebas pajak kepada para pemimpin keagamaan Siwa (Hindu) maupun Buddha.',
        'Lembaran prasasti ini mengutarakan hubungan harmonis antara agama dan tata negara di masa akhir Majapahit. Dengan merangkul serta mendukung komunitas Hindu dan Buddha secara adil, kerajaan menunjukkan kebijakan koeksistensi beragama yang menjaga stabilitas sosial dan keberlanjutan spiritual.',
        'Keyakinan boleh berbeda, namun kedamaian adalah milik bersama.',
      ],
      closing: 'Keyakinan boleh berbeda, namun kedamaian adalah milik bersama.',
      meta: 'Periode: Abad XV · Lokasi: Mojokerto · Aksara: Kawi · Bahasa: Jawa Kuno · Material: Batu · Kategori: Anugerah Keagamaan',
    },
    enContent: {
      subtitle: 'Faith in Harmony',
      lead: 'Diverse beliefs. One realm. A shared hope for peace.',
      body: [
        'The Jiyu inscriptions date to the late Majapahit period and were uncovered in the Mojokerto region. They document grants of tax-exempt sima lands to both Shaivite (Hindu) and Buddhist religious leaders.',
        'These inscriptions illustrate the harmonious relationship between faith and governance in late Majapahit. By supporting both Hindu and Buddhist communities equally, the kingdom demonstrated a policy of religious coexistence that fostered social stability and spiritual continuity.',
        'Faiths may differ, but peace belongs to all.',
      ],
      closing: 'Faiths may differ, but peace belongs to all.',
      meta: 'Period: 15th Century · Location: Mojokerto · Script: Kawi · Language: Old Javanese · Material: Stone · Category: Religious Grant',
    },
  },
]

interface PrasastiDetailProps {
  prasasti: Prasasti
  lang: 'id' | 'en'
  setLang: (l: 'id' | 'en') => void
  onBack: () => void
  onNavigate: (id: string) => void
}

export default function PrasastiDetail({ prasasti, lang, setLang, onBack, onNavigate }: PrasastiDetailProps) {
  const [showFullImage, setShowFullImage] = useState(false)
  const currentIndex = PRASASTI_DATA.findIndex(p => p.id === prasasti.id)
  const prev = PRASASTI_DATA[currentIndex - 1]
  const next = PRASASTI_DATA[currentIndex + 1]

  const content = lang === 'id' ? prasasti.idContent : prasasti.enContent
  const yearText = lang === 'id' ? prasasti.year.id : prasasti.year.en

  return (
    <div style={{ backgroundColor: S.bg, color: S.text, fontFamily: S.sans, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* NAV */}
      <nav style={{
        borderBottom: `1px solid ${S.border}`,
        padding: '0 3.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backgroundColor: S.bg
      }}>
        {/* CLICKABLE LOGO TITLE -> GO TO LANDING PAGE */}
        <button
          onClick={onBack}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: S.serif, fontSize: '0.95rem', letterSpacing: '0.04em',
            color: S.text, padding: 0, display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}
          title={lang === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
        >
          <span style={{ fontSize: '0.8rem', color: S.muted }}>←</span> WBHA <span style={{ color: S.muted }}>—</span> WETU BHASA
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            {[
              ['archive', lang === 'id' ? 'Arsip' : 'Archive'],
              ['timeline', lang === 'id' ? 'Linimasa' : 'Timeline'],
              ['gallery', lang === 'id' ? 'Galeri' : 'Gallery']
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={onBack}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: S.sans, fontSize: '0.85rem', color: S.muted, padding: 0 }}
              >
                {label}
              </button>
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

      {/* CONTENT */}
      <main style={{ flex: 1, maxWidth: 840, width: '100%', margin: '0 auto', padding: '4rem 2.5rem 5rem' }}>

        {/* Breadcrumb */}
        <p style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: S.muted, marginBottom: '2rem', fontWeight: 500 }}>
          {lang === 'id' ? 'Koleksi I' : 'Collection I'} / {prasasti.collectionNum} / {yearText}
        </p>

        {/* Title */}
        <h1 style={{ fontFamily: S.serif, fontSize: 'clamp(2.6rem, 5.5vw, 3.8rem)', lineHeight: 1.08, margin: '0 0 0.6rem', letterSpacing: '-0.01em', fontWeight: 400 }}>
          {prasasti.title}
        </h1>

        {/* Subtitle */}
        <p style={{ fontFamily: S.serif, fontStyle: 'italic', fontSize: 'clamp(1.05rem, 2vw, 1.35rem)', color: S.muted, margin: '0 0 2.5rem', lineHeight: 1.35 }}>
          {content.subtitle}
        </p>

        {/* Picture of Archive */}
        {prasasti.image && (
          <div style={{ marginBottom: '2.5rem', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => setShowFullImage(true)}>
            <img
              src={prasasti.image}
              alt={prasasti.title}
              style={{ width: '100%', maxHeight: 420, objectFit: 'cover', display: 'block', filter: 'sepia(12%) brightness(0.9)', transition: 'filter 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.filter = 'sepia(5%) brightness(0.98)')}
              onMouseLeave={e => (e.currentTarget.style.filter = 'sepia(12%) brightness(0.9)')}
            />
            <span style={{ fontSize: '0.75rem', color: S.muted, fontStyle: 'italic', marginTop: '0.5rem', display: 'block' }}>
              {lang === 'id' ? 'Klik gambar untuk melihat foto prasasti ukuran penuh' : 'Click image to view full size inscription photo'}
            </span>
          </div>
        )}

        {/* Divider */}
        <div style={{ height: 1, backgroundColor: S.border, marginBottom: '2.5rem' }} />

        {/* Lead */}
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: S.text, margin: '0 0 1.75rem', fontWeight: 400 }}>
          {content.lead}
        </p>

        {/* Body paragraphs */}
        {content.body.map((para, i) => (
          <p key={i} style={{ fontSize: '0.95rem', lineHeight: 1.85, color: '#3d3a33', margin: '0 0 1.4rem' }}>
            {para}
          </p>
        ))}

        {/* Divider */}
        <div style={{ height: 1, backgroundColor: S.border, margin: '2.5rem 0 1.75rem' }} />

        {/* Metadata */}
        <p style={{ fontSize: '0.8rem', lineHeight: 1.75, color: S.muted, letterSpacing: '0.01em' }}>
          {content.meta}
        </p>
      </main>

      {/* PREV / NEXT */}
      {(prev || next) && (
        <div style={{ borderTop: `1px solid ${S.border}`, display: 'grid', gridTemplateColumns: prev ? (next ? '1fr 1fr' : '1fr') : '1fr' }}>
          {prev && (
            <button
              onClick={() => onNavigate(prev.id)}
              style={{ background: 'none', border: 'none', borderRight: next ? `1px solid ${S.border}` : 'none', cursor: 'pointer', padding: '2.2rem 3.5rem', textAlign: 'left', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(26,25,20,0.03)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.muted, display: 'block', marginBottom: '0.35rem' }}>
                {lang === 'id' ? '← Sebelumnya' : '← Previous'}
              </span>
              <span style={{ fontFamily: S.serif, fontSize: '1.05rem', color: S.text }}>{prev.title}</span>
            </button>
          )}
          {next && (
            <button
              onClick={() => onNavigate(next.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2.2rem 3.5rem', textAlign: 'right', transition: 'background 0.2s', marginLeft: 'auto', width: '100%' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(26,25,20,0.03)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: S.muted, display: 'block', marginBottom: '0.35rem' }}>
                {lang === 'id' ? 'Berikutnya →' : 'Next →'}
              </span>
              <span style={{ fontFamily: S.serif, fontSize: '1.05rem', color: S.text }}>{next.title}</span>
            </button>
          )}
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${S.border}`, padding: '3rem 3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
          <span style={{ fontFamily: S.serif, fontSize: '1.1rem' }}>WBHA</span>
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

      {/* Fullscreen Modal Image */}
      {showFullImage && prasasti.image && (
        <div
          onClick={() => setShowFullImage(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            backgroundColor: 'rgba(26,25,20,0.92)', backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', cursor: 'pointer'
          }}
        >
          <img
            src={prasasti.image}
            alt={prasasti.title}
            style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: '4px', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}
          />
        </div>
      )}

    </div>
  )
}
