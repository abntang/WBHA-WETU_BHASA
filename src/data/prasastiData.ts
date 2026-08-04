export interface KawiLine {
  kawi: string
  transliteration: string
  indonesian: string
  english: string
}

export interface Prasasti {
  id: string
  collectionNum: string
  year: string
  centuryLabel: string
  title: string
  subtitle: string
  lead: string
  body: string[]
  closing: string
  meta: string
  location: string
  reign: string
  script: string
  language: string
  material: string
  category: string
  image: string
  detailImages: { url: string; caption: string }[]
  kawiLines: KawiLine[]
}

export const PRASASTI_DATA: Prasasti[] = [
  {
    id: 'kudadu',
    collectionNum: '01',
    year: '1294 M',
    centuryLabel: '13TH CENTURY',
    title: 'Prasasti Kudadu',
    subtitle: 'The Beginning of Majapahit',
    lead: 'Sebuah rekaman awal tentang lahirnya Majapahit, dibaca sebagai jejak kesetiaan dan pembentukan kekuasaan pada akhir abad ke-13.',
    body: [
      'Prasasti Kudadu adalah salah satu dokumen paling awal yang menyebut nama Raden Wijaya secara eksplisit — sang pendiri Kerajaan Majapahit. Ditulis di atas lempengan tembaga menggunakan aksara Kawi dalam bahasa Jawa Kuno, prasasti ini mencatat pembebasan pajak atas Desa Kudadu sebagai anugerah atas kesetiaan para warganya kepada sang raja muda.',
      'Ketika Raden Wijaya melarikan diri dari kejaran pasukan Jayakatwang, penduduk Desa Kudadu menyembunyikan dan melindunginya dengan risiko nyawa mereka sendiri. Setelah ia berhasil merebut kembali kekuasaan dan mendirikan Majapahit, ia tidak melupakan budi baik itu. Prasasti Kudadu adalah bukti bahwa ingatan seorang raja adalah catatan tertua tentang keadilan.',
      'Dalam sejarah epigrafis Nusantara, prasasti ini menempati posisi yang sangat penting — bukan hanya sebagai dokumen administratif, melainkan sebagai kesaksian atas momen kelahiran sebuah kerajaan besar yang kelak akan mewarnai seluruh Nusantara selama dua abad.'
    ],
    closing: 'Kesetiaan kecil bisa mengubah jalannya sebuah peradaban.',
    meta: 'Tahun: 1294 M · Reign: Kertarajasa Jayawardhana · Location: Surabaya / Mojokerto · Script: Kawi · Language: Old Javanese · Material: Copper Plate · Category: Royal Charter',
    location: 'Surabaya / Mojokerto',
    reign: 'Kertarajasa Jayawardhana (Raden Wijaya)',
    script: 'Kawi (Jawa Kuno)',
    language: 'Old Javanese',
    material: 'Lempengan Tembaga (Bronze/Copper)',
    category: 'Piagam Kerajaan (Royal Charter)',
    image: 'https://images.unsplash.com/photo-1711704595645-bc5216e4eeb9?w=1200&h=800&fit=crop&auto=format',
    detailImages: [
      {
        url: 'https://images.unsplash.com/photo-1711704595645-bc5216e4eeb9?w=1000&fit=crop',
        caption: 'Garis ukir aksara Kawi pada permukaan lempengan tembaga Kudadu'
      },
      {
        url: 'https://images.unsplash.com/photo-1643760512932-ad6583917711?w=1000&fit=crop',
        caption: 'Detail batu relief peringatan persembahan sima Kudadu'
      }
    ],
    kawiLines: [
      {
        kawi: '𑌸𑍍𑌵𑌸𑍍𑌤𑌿 𑌶𑌾𑌕𑌵𑌰𑍍𑌷𑌾𑌤𑍀𑌤 𑍧𑍨𑍧𑍬',
        transliteration: 'Swasti śakawarṣātīta 1216',
        indonesian: 'Selamat, tahun Saka yang telah berlalu 1216 (1294 Masehi).',
        english: 'Hail, the Saka year passed 1216 (1294 CE).'
      },
      {
        kawi: '𑌶𑍍𑌰𑍀 𑌪𑌾𑌦𑌮𑌾 𑌨𑌾𑌰𑌾𑌯𑌣 𑌵𑌿𑌜𑌯𑌾𑌨𑌾𑌮',
        transliteration: 'Śrī Pādukā Narārya Śrī Kertarājasa Jayawardhana',
        indonesian: 'Baginda Sri Maharaja Kertarajasa Jayawardhana yang mengasihi kawula.',
        english: 'His Majesty Sri Maharaja Kertarajasa Jayawardhana who loves his subjects.'
      },
      {
        kawi: '𑌮𑌾𑌨𑍍𑌲𑌾 𑌪𑌾𑌰𑌾 𑌵𑌾𑌰𑍍𑌗𑍍𑌗 a𑌨𑍍𑌤𑍍𑌯 𑌕𑌾𑌲 𑌕𑌾𑌸𑌿𑌮𑌾𑌨',
        transliteration: 'Māñlya parā wargga Desa Kudadu anugraha sīma mahāpāt',
        indonesian: 'Memberikan anugerah tanah bebas pajak (sima) kepada warga Desa Kudadu yang setia.',
        english: 'Granted tax-free land (sima) to the loyal villagers of Kudadu.'
      }
    ]
  },
  {
    id: 'sukamerta',
    collectionNum: '02',
    year: '1296 M',
    centuryLabel: '1296 CE',
    title: 'Prasasti Sukamerta',
    subtitle: "A Mother's Legacy",
    lead: 'Not every inscription speaks of war. Some preserve the memory of love, gratitude, and devotion to one\'s family.',
    body: [
      'Issued during the early reign of Kertarajasa Jayawardhana (Raden Wijaya), the Sukamerta Inscription records the establishment of tax-free land (sima) to support the construction of a sacred sanctuary in Sukamerta and Antang. The sanctuary was dedicated to honoring royal ancestors, including the king\'s mother.',
      'Beyond its administrative function, the inscription reflects the deeply personal side of Majapahit. It illustrates how political authority was intertwined with filial piety and ancestral reverence, demonstrating that honoring one\'s origins was considered an essential responsibility of a ruler.',
      'A kingdom may rise through courage, but a ruler is shaped by the people who raised him.'
    ],
    closing: 'A kingdom may rise through courage, but a ruler is shaped by the people who raised him.',
    meta: 'Year: 1296 CE · Reign: Kertarajasa Jayawardhana · Location: Malang / Kediri · Script: Kawi · Language: Old Javanese · Material: Stone · Category: Royal Decree',
    location: 'Malang / Kediri',
    reign: 'Kertarajasa Jayawardhana',
    script: 'Kawi',
    language: 'Old Javanese',
    material: 'Batu (Stone Monument)',
    category: 'Royal Decree / Sima Grant',
    image: 'https://images.unsplash.com/photo-1590059208016-56834d9eb6d3?w=1200&h=800&fit=crop&auto=format',
    detailImages: [
      {
        url: 'https://images.unsplash.com/photo-1590059208016-56834d9eb6d3?w=1000&fit=crop',
        caption: 'Batu prasasti penghormatan lempung di Sukamerta'
      },
      {
        url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1000&fit=crop',
        caption: 'Ornamen bunga teratai lambang penghormatan ibunda raja'
      }
    ],
    kawiLines: [
      {
        kawi: '𑌶𑌾𑌕 𑍧𑍨𑍧𑍬 𑌪𑍍𑌰𑌾𑌪𑍍𑌤𑌿 𑌸𑍁𑌕𑌮𑌰𑍍𑌤',
        transliteration: 'Śāka 1218 Sukamerta Sīma',
        indonesian: 'Tahun Saka 1218 (1296 M) penetapan Sima Sukamerta.',
        english: 'In Saka year 1218 (1296 CE), Sukamerta Sima was established.'
      },
      {
        kawi: '𑌮𑌾𑌤𑍄 𑌪𑍀𑌤𑌿 𑌵𑌿𑌷𑌾𑌲 𑌭𑌕𑍍𑌤𑌿',
        transliteration: 'Mātṛ bhakti viśāla rāja śāsana',
        indonesian: 'Bakti yang tulus kepada sang Ibu dalam titah suci kerajaan.',
        english: 'Profound filial piety unto the Mother preserved in royal decree.'
      }
    ]
  },
  {
    id: 'katiden',
    collectionNum: '03',
    year: '1392 M',
    centuryLabel: '1392 CE',
    title: 'Prasasti Katiden',
    subtitle: 'Preserving Sacred Heritage',
    lead: 'Why would a kingdom preserve a sanctuary older than itself?',
    body: [
      'Issued during the reign of Hayam Wuruk or the early reign of Wikramawardhana, the Katiden Inscription records an official order to preserve a sacred sanctuary inherited from the Singhasari Kingdom.',
      'Rather than replacing the past, Majapahit chose to protect it. The inscription demonstrates the kingdom\'s commitment to preserving cultural and religious heritage, recognizing earlier civilizations as part of its own historical identity.',
      'Great civilizations do not erase history. They protect it.'
    ],
    closing: 'Great civilizations do not erase history. They protect it.',
    meta: 'Year: 1392 CE · Reign: Hayam Wuruk / Wikramawardhana · Location: Malang · Script: Kawi · Language: Old Javanese · Material: Stone',
    location: 'Malang, Jawa Timur',
    reign: 'Hayam Wuruk / Wikramawardhana',
    script: 'Kawi',
    language: 'Old Javanese',
    material: 'Batu Andesit (Stone)',
    category: 'Heritage Preservation',
    image: 'https://images.unsplash.com/photo-1608408843596-b3119736056c?w=1200&h=800&fit=crop&auto=format',
    detailImages: [
      {
        url: 'https://images.unsplash.com/photo-1608408843596-b3119736056c?w=1000&fit=crop',
        caption: 'Situs bangunan suci Singhasari yang dilindungi oleh Katiden'
      },
      {
        url: 'https://images.unsplash.com/photo-1696220844406-d274f04c14f7?w=1000&fit=crop',
        caption: 'Batu bertulis aksara Kawi dari masa peralihan Majapahit'
      }
    ],
    kawiLines: [
      {
        kawi: '𑌶𑌾𑌕 𑍧𑍩𑍧𑍪 𑌕𑌾𑌤𑌿𑌦𑍇𑌨𑍍 𑌰𑌕𑍍𑌷𑌾',
        transliteration: 'Śāka 1314 Katiden Rakṣā',
        indonesian: 'Tahun Saka 1314 (1392 M) Perlindungan atas Katiden.',
        english: 'Saka year 1314 (1392 CE) Preservation of Katiden Sanctuary.'
      },
      {
        kawi: '𑌪𑍂𑌰𑍍𑌵 𑌸𑌿𑌙𑍍𑌹𑌸𑌾𑌰𑌿 𑌪𑍂𑌜𑌾 𑌸𑍍𑌥𑌾𑌨',
        transliteration: 'Pūrva Siṅhasāri pūjā sthāna',
        indonesian: 'Tempat pemujaan suci warisan Kerajaan Singhasari terdahulu.',
        english: 'Sacred place of worship inherited from former Singhasari.'
      }
    ]
  },
  {
    id: 'waringin-pitu',
    collectionNum: '04',
    year: '1447 M',
    centuryLabel: '1447 CE',
    title: 'Prasasti Waringin Pitu',
    subtitle: 'The Architecture of Power',
    lead: 'A great kingdom is sustained not only by its king, but by the system that governs it.',
    body: [
      'The Waringin Pitu Inscription was issued during the reign of Sri Maharaja Jayawisesa. It is one of the most important historical sources describing the governmental structure of Majapahit.',
      'The inscription lists numerous high-ranking officials, regional administrators, and religious authorities, providing historians with a detailed understanding of how Majapahit\'s bureaucracy functioned. It reveals a sophisticated administrative system capable of governing one of Southeast Asia\'s largest kingdoms.',
      'A kingdom stands because its institutions stand.'
    ],
    closing: 'A kingdom stands because its institutions stand.',
    meta: 'Year: 1447 CE · Reign: Sri Maharaja Jayawisesa · Location: Trowulan, Mojokerto · Script: Kawi · Language: Old Javanese · Material: Stone · Category: Government Administration',
    location: 'Trowulan, Mojokerto',
    reign: 'Sri Maharaja Jayawisesa (Vijayaparākramavardhana)',
    script: 'Kawi',
    language: 'Old Javanese',
    material: 'Lempengan Tembaga / Batu',
    category: 'Government Administration',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&h=800&fit=crop&auto=format',
    detailImages: [
      {
        url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1000&fit=crop',
        caption: 'Relief struktur tata pemerintahan Majapahit'
      },
      {
        url: 'https://images.unsplash.com/photo-1702437595734-61abad4b3e11?w=1000&fit=crop',
        caption: 'Catatan nama-nama menteri dan penguasa daerah Majapahit'
      }
    ],
    kawiLines: [
      {
        kawi: '𑌶𑌾𑌕 𑍧𑍪𑍬𑍩 𑌵𑌾𑌰𑌿𑌙𑍍𑌗𑌿𑌨𑍍 𑌪𑌿𑌤𑍁',
        transliteration: 'Śāka 1369 Vāriṅgin Pitu Śāsana',
        indonesian: 'Tahun Saka 1369 (1447 M) Prasasti Waringin Pitu.',
        english: 'Saka year 1369 (1447 CE) Waringin Pitu Decree.'
      },
      {
        kawi: '𑌭𑌾𑌟𑍍𑌟𑌾𑌰𑌾 𑌸𑌪𑍍𑌤 𑌪𑍍𑌰𑌾𑌦𑍇𑌶 𑌮𑌨𑍍𑌤𑍍𑌰𑍀',
        transliteration: 'Bhaṭṭāra sapta prādeśa mantrī gaṇa',
        indonesian: 'Susunan tujuh raja daerah dan jajaran dewa menteri kerajaan.',
        english: 'The governance of seven regional rulers and council of ministers.'
      }
    ]
  },
  {
    id: 'jiyu',
    collectionNum: '05',
    year: 'Abad XV',
    centuryLabel: '15TH CENTURY',
    title: 'Prasasti Jiyu',
    subtitle: 'Faith in Harmony',
    lead: 'Different beliefs. One kingdom. A shared hope for peace.',
    body: [
      'The Jiyu inscriptions belong to the late Majapahit period and were discovered in the Mojokerto region. They document grants of tax-free land to both Shaivite and Buddhist religious leaders.',
      'These inscriptions reveal the important relationship between religion and governance in late Majapahit. By supporting both Hindu and Buddhist communities, the kingdom demonstrated a policy of religious coexistence that contributed to social stability and spiritual continuity.',
      'Faith may differ, but peace belongs to everyone.'
    ],
    closing: 'Faith may differ, but peace belongs to everyone.',
    meta: 'Period: 15th Century · Location: Mojokerto · Script: Kawi · Language: Old Javanese · Material: Stone · Category: Religious Grant',
    location: 'Mojokerto, Jawa Timur',
    reign: 'Girindrawardhana Dyah Ranawijaya',
    script: 'Kawi Late Period',
    language: 'Old Javanese',
    material: 'Batu (Stone Inscription)',
    category: 'Religious Grant / Coexistence',
    image: 'https://images.unsplash.com/photo-1702437595734-61abad4b3e11?w=1200&h=800&fit=crop&auto=format',
    detailImages: [
      {
        url: 'https://images.unsplash.com/photo-1702437595734-61abad4b3e11?w=1000&fit=crop',
        caption: 'Fragmen batu prasasti Jiyu dari masa akhir Majapahit'
      },
      {
        url: 'https://images.unsplash.com/photo-1711704595645-bc5216e4eeb9?w=1000&fit=crop',
        caption: 'Simbol Siwa-Buddha pada inskripsi suci Jiyu'
      }
    ],
    kawiLines: [
      {
        kawi: '𑌶𑌿𑌵 𑌬𑍁𑌦𑍍𑌧 𑌭𑌿𑌨𑍍𑌨𑍇𑌕 𑌤𑍁𑌙𑍍𑌗𑌲𑍍 𑌿𑌕',
        transliteration: 'Śiva Buddha Bhinneka Tunggal Ika',
        indonesian: 'Siwa dan Buddha berbeda namun jua satu jua.',
        english: 'Shiva and Buddha are different yet one in truth.'
      },
      {
        kawi: '𑌸𑌾𑌮𑍍𑌯 𑌧𑌰𑍍𑌮 𑌸𑌾𑌨𑍍𑌤𑌿 𑌰𑌕𑍍𑌷𑌾',
        transliteration: 'Sāmya dharma śānti rakṣā',
        indonesian: 'Kerukunan keagamaan penjaga kedamaian negeri.',
        english: 'Religious harmony guarding the peace of the realm.'
      }
    ]
  }
]
