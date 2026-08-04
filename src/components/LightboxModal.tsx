import React from 'react'
import { X, ZoomIn, Info } from 'lucide-react'

interface LightboxModalProps {
  isOpen: boolean
  imageUrl: string
  title: string
  caption?: string
  meta?: string
  onClose: () => void
}

export default function LightboxModal({ isOpen, imageUrl, title, caption, meta, onClose }: LightboxModalProps) {
  if (!isOpen) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(15, 14, 12, 0.94)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        animation: 'fadeIn 0.25s ease-out'
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          background: 'rgba(245,240,232,0.1)',
          border: '1px solid rgba(245,240,232,0.2)',
          color: '#f5f0e8',
          width: 40,
          height: 40,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s',
          zIndex: 101
        }}
      >
        <X size={20} />
      </button>

      {/* Image container */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '1000px',
          maxHeight: '80vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          style={{
            maxWidth: '100%',
            maxHeight: '70vh',
            objectFit: 'contain',
            borderRadius: '4px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
            border: '1px solid rgba(245,240,232,0.1)'
          }}
        />

        {/* Info footer */}
        <div style={{
          marginTop: '1.25rem',
          textAlign: 'center',
          color: '#f5f0e8',
          maxWidth: '640px'
        }}>
          <h3 style={{ fontFamily: 'DM Serif Display, Georgia, serif', fontSize: '1.35rem', margin: '0 0 0.3rem', fontWeight: 400 }}>
            {title}
          </h3>
          {caption && (
            <p style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.75)', margin: '0 0 0.4rem', lineHeight: 1.5 }}>
              {caption}
            </p>
          )}
          {meta && (
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a7f6e' }}>
              {meta}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
