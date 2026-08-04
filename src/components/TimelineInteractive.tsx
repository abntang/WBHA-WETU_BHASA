import React, { useState } from 'react'
import type { Prasasti } from '../data/prasastiData'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'

interface TimelineInteractiveProps {
  prasastiList: Prasasti[]
  onOpenPrasasti: (id: string) => void
}

const TIMELINE_DATA = [
  {
    year: '1222 M',
    title: 'The Beginning of Singhasari',
    desc: 'Ken Arok mendirikan Singhasari — cikal bakal genealogi Majapahit.',
    location: 'Malang / Tumapel',
    relatedPrasastiId: 'katiden'
  },
  {
    year: '1294 M',
    title: 'The Birth of Majapahit',
    desc: 'Raden Wijaya mendirikan Majapahit setelah mengusir pasukan Mongol. Prasasti Kudadu mengabadikan momen ini.',
    location: 'Desa Kudadu / Mojokerto',
    relatedPrasastiId: 'kudadu'
  },
  {
    year: '1296 M',
    title: "A Mother's Legacy",
    desc: 'Penetapan Sima Sukamerta oleh Raden Wijaya sebagai bakti suci kepada sang Ibunda.',
    location: 'Sukamerta & Antang, Malang',
    relatedPrasastiId: 'sukamerta'
  },
  {
    year: '1350 M',
    title: "Hayam Wuruk's Golden Era",
    desc: 'Puncak keemasan Majapahit — wilayah meluas ke seluruh Nusantara di bawah Mahapatih Gajah Mada.',
    location: 'Trowulan, Wilwatikta',
    relatedPrasastiId: 'katiden'
  },
  {
    year: '1392 M',
    title: 'Sacred Sanctuary Protection',
    desc: 'Prasasti Katiden dikeluarkan untuk melindung tempat suci warisan Singhasari melampaui perubahan zaman.',
    location: 'Katiden, Malang',
    relatedPrasastiId: 'katiden'
  },
  {
    year: '1447 M',
    title: 'The Architecture of Power',
    desc: 'Prasasti Waringin Pitu mencatat dengan rinci struktur birokrasi pemerintahan 7 dewa menteri Majapahit.',
    location: 'Trowulan / Waringin Pitu',
    relatedPrasastiId: 'waringin-pitu'
  },
  {
    year: 'Abad XV',
    title: 'Faith in Harmony',
    desc: 'Prasasti Jiyu membuktikan kebijakan toleransi dan kerukunan Siwa-Buddha pada masa akhir Majapahit.',
    location: 'Mojokerto / Gunung Anjasmoro',
    relatedPrasastiId: 'jiyu'
  }
]

export default function TimelineInteractive({ prasastiList, onOpenPrasasti }: TimelineInteractiveProps) {
  const [activeIndex, setActiveIndex] = useState<number>(1)
  const currentItem = TIMELINE_DATA[activeIndex]

  return (
    <div style={{ fontFamily: 'Work Sans, sans-serif' }}>

      {/* Stepper Tabs */}
      <div style={{
        display: 'flex',
        gap: '0.75rem',
        overflowX: 'auto',
        paddingBottom: '1.25rem',
        marginBottom: '2rem',
        scrollbarWidth: 'none'
      }}>
        {TIMELINE_DATA.map((item, idx) => {
          const isActive = activeIndex === idx
          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              style={{
                flexShrink: 0,
                background: isActive ? '#1a1914' : 'rgba(26,25,20,0.04)',
                color: isActive ? '#f5f0e8' : '#8a7f6e',
                border: isActive ? '1px solid #1a1914' : '1px solid rgba(26,25,20,0.1)',
                borderRadius: '30px',
                padding: '0.6rem 1.25rem',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Calendar size={12} style={{ opacity: isActive ? 1 : 0.6 }} />
              <span style={{ fontSize: '0.8rem', fontWeight: isActive ? 600 : 400, fontFamily: 'DM Serif Display, serif' }}>
                {item.year}
              </span>
            </button>
          )
        })}
      </div>

      {/* Active Milestone Card Showcase */}
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid rgba(26,25,20,0.1)',
        borderRadius: '4px',
        padding: '2.5rem 2rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '2rem',
        alignItems: 'center'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8a7f6e', fontWeight: 600 }}>
              {currentItem.year}
            </span>
            <span style={{ color: 'rgba(26,25,20,0.2)' }}>•</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: '#8a7f6e' }}>
              <MapPin size={12} />
              <span>{currentItem.location}</span>
            </div>
          </div>

          <h3 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', margin: '0 0 0.8rem', color: '#1a1914', lineHeight: 1.15 }}>
            {currentItem.title}
          </h3>

          <p style={{ fontSize: '0.92rem', lineHeight: 1.75, color: '#4a4640', margin: 0, maxWidth: '640px' }}>
            {currentItem.desc}
          </p>
        </div>

        {/* Action button if related prasasti exists */}
        {currentItem.relatedPrasastiId && (
          <div>
            <button
              onClick={() => onOpenPrasasti(currentItem.relatedPrasastiId!)}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(26,25,20,0.25)',
                color: '#1a1914',
                padding: '0.75rem 1.25rem',
                borderRadius: '2px',
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#1a1914'
                e.currentTarget.style.color = '#f5f0e8'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#1a1914'
              }}
            >
              <span>Buka Prasasti</span>
              <ExternalLink size={14} />
            </button>
          </div>
        )}
      </div>

    </div>
  )
}
