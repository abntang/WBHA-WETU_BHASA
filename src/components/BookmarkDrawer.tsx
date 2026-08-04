import React from 'react'
import type { Prasasti } from '../data/prasastiData'
import { X, Bookmark, ArrowRight, Trash2 } from 'lucide-react'

interface BookmarkDrawerProps {
  isOpen: boolean
  bookmarks: string[]
  prasastiList: Prasasti[]
  onClose: () => void
  onSelectPrasasti: (id: string) => void
  onRemoveBookmark: (id: string) => void
}

export default function BookmarkDrawer({
  isOpen,
  bookmarks,
  prasastiList,
  onClose,
  onSelectPrasasti,
  onRemoveBookmark
}: BookmarkDrawerProps) {
  if (!isOpen) return null

  const bookmarkedItems = prasastiList.filter(p => bookmarks.includes(p.id))

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 95,
        backgroundColor: 'rgba(26,25,20,0.5)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        justifyContent: 'flex-end',
        animation: 'fadeIn 0.2s ease-out'
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '420px',
          height: '100%',
          backgroundColor: '#f5f0e8',
          color: '#1a1914',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem 1.75rem',
          fontFamily: 'Work Sans, sans-serif'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid rgba(26,25,20,0.1)', paddingBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Bookmark size={18} color="#8a7f6e" />
            <h3 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '1.25rem', margin: 0, fontWeight: 400 }}>
              Prasasti Tersimpan ({bookmarkedItems.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#8a7f6e', padding: 4 }}
          >
            <X size={20} />
          </button>
        </div>

        {/* List */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {bookmarkedItems.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#8a7f6e', padding: '3rem 1rem' }}>
              <Bookmark size={32} style={{ opacity: 0.3, marginBottom: '0.75rem' }} />
              <p style={{ fontSize: '0.85rem', margin: '0 0 0.5rem' }}>Belum ada prasasti yang disimpan.</p>
              <p style={{ fontSize: '0.75rem', opacity: 0.7 }}>Tekan ikon bookmark pada prasasti untuk menyimpannya ke daftar bacaan Anda.</p>
            </div>
          ) : (
            bookmarkedItems.map(item => (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(26,25,20,0.08)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ display: 'flex', height: '90px' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '90px', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ flex: 1, padding: '0.75rem 1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', color: '#8a7f6e', textTransform: 'uppercase' }}>
                      {item.year}
                    </span>
                    <h4 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '1rem', margin: '0.1rem 0 0.2rem', color: '#1a1914' }}>
                      {item.title}
                    </h4>
                    <span style={{ fontSize: '0.7rem', color: '#666', fontStyle: 'italic' }}>
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', borderTop: '1px solid rgba(26,25,20,0.06)', backgroundColor: '#faf7f2' }}>
                  <button
                    onClick={() => { onSelectPrasasti(item.id); onClose(); }}
                    style={{
                      flex: 1,
                      background: 'none',
                      border: 'none',
                      padding: '0.6rem 1rem',
                      fontSize: '0.72rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: '#1a1914',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      fontFamily: 'Work Sans, sans-serif'
                    }}
                  >
                    <span>Baca Prasasti</span>
                    <ArrowRight size={12} />
                  </button>
                  <button
                    onClick={() => onRemoveBookmark(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      borderLeft: '1px solid rgba(26,25,20,0.06)',
                      padding: '0.6rem',
                      color: '#c62828',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    title="Hapus dari simpanan"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
