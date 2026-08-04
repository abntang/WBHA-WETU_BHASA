import React, { useState } from 'react'
import type { KawiLine } from '../data/prasastiData'
import { Languages, Copy, Check } from 'lucide-react'

interface KawiExplorerProps {
  lines: KawiLine[]
  prasastiTitle: string
}

export default function KawiExplorer({ lines, prasastiTitle }: KawiExplorerProps) {
  const [activeLine, setActiveLine] = useState<number>(0)
  const [langMode, setLangMode] = useState<'all' | 'id' | 'en' | 'kawi'>('all')
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  if (!lines || lines.length === 0) return null

  return (
    <div style={{
      marginTop: '2.5rem',
      marginBottom: '2.5rem',
      backgroundColor: 'rgba(26,25,20,0.03)',
      border: '1px solid rgba(26,25,20,0.1)',
      borderRadius: '2px',
      padding: '1.75rem 1.5rem',
      fontFamily: 'Work Sans, sans-serif'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid rgba(26,25,20,0.08)', paddingBottom: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Languages size={16} style={{ color: '#8a7f6e' }} />
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8a7f6e', fontWeight: 600 }}>
            Transliterasi & Alih Bahasa Aksara Kawi
          </span>
        </div>

        {/* View Mode Controls */}
        <div style={{ display: 'flex', gap: '4px' }}>
          {(['all', 'id', 'en'] as const).map(mode => (
            <button
              key={mode}
              onClick={() => setLangMode(mode)}
              style={{
                background: langMode === mode ? '#1a1914' : 'transparent',
                color: langMode === mode ? '#f5f0e8' : '#8a7f6e',
                border: 'none',
                fontSize: '0.65rem',
                letterSpacing: '0.05em',
                padding: '3px 8px',
                borderRadius: '2px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                transition: 'all 0.2s'
              }}
            >
              {mode === 'all' ? 'Lengkap' : mode === 'id' ? 'ID' : 'EN'}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Line List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {lines.map((line, idx) => {
          const isSelected = activeLine === idx
          return (
            <div
              key={idx}
              onClick={() => setActiveLine(idx)}
              style={{
                padding: '1rem 1.1rem',
                backgroundColor: isSelected ? '#ffffff' : 'transparent',
                borderRadius: '4px',
                borderLeft: isSelected ? '3px solid #1a1914' : '3px solid transparent',
                boxShadow: isSelected ? '0 2px 10px rgba(0,0,0,0.04)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {/* Aksara Kawi Original Glyph */}
              <div style={{
                fontFamily: 'DM Serif Display, serif',
                fontSize: '1.35rem',
                color: '#1a1914',
                marginBottom: '0.4rem',
                letterSpacing: '0.04em'
              }}>
                {line.kawi}
              </div>

              {/* Transliteration */}
              <div style={{
                fontFamily: 'DM Serif Display, Georgia, serif',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: '#5c5446',
                marginBottom: '0.6rem'
              }}>
                "{line.transliteration}"
              </div>

              {/* Translations depending on selected mode */}
              {(langMode === 'all' || langMode === 'id') && (
                <div style={{ fontSize: '0.85rem', color: '#2d2b26', lineHeight: 1.5, marginBottom: langMode === 'all' ? '0.3rem' : 0 }}>
                  <span style={{ fontSize: '0.65rem', color: '#8a7f6e', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '0.4rem' }}>ID:</span>
                  {line.indonesian}
                </div>
              )}

              {(langMode === 'all' || langMode === 'en') && (
                <div style={{ fontSize: '0.82rem', color: '#686052', lineHeight: 1.5 }}>
                  <span style={{ fontSize: '0.65rem', color: '#8a7f6e', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: '0.4rem' }}>EN:</span>
                  {line.english}
                </div>
              )}

              {/* Copy action */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.4rem' }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCopy(`${line.transliteration} - ${line.indonesian}`, idx)
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#8a7f6e',
                    fontSize: '0.65rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    cursor: 'pointer',
                    opacity: isSelected ? 1 : 0.6
                  }}
                >
                  {copiedIndex === idx ? <Check size={12} color="#2e7d32" /> : <Copy size={12} />}
                  <span>{copiedIndex === idx ? 'Tersalin' : 'Salin Teks'}</span>
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
