import React, { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react'

export default function AudioSoundscape() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.4)
  const [isMuted, setIsMuted] = useState(false)
  const [activeTrack, setActiveTrack] = useState<'slendro' | 'pelog' | 'wind'>('slendro')
  const [isExpanded, setIsExpanded] = useState(false)

  const audioCtxRef = useRef<AudioContext | null>(null)
  const timerRef = useRef<number | null>(null)
  const masterGainRef = useRef<GainNode | null>(null)

  // Slendro / Pelog frequencies (approximate Hertz for traditional gamelan chime resonance)
  const PITCHES = {
    slendro: [261.63, 293.66, 329.63, 392.00, 440.00, 523.25], // C, D, E, G, A, C5
    pelog: [261.63, 277.18, 329.63, 392.00, 415.30, 523.25],   // C, C#, E, G, G#, C5
    wind: [220.00, 246.94, 293.66, 329.63, 440.00, 493.88]    // Low calming tones
  }

  const startAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      audioCtxRef.current = new AudioCtx()
    }

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume()
    }

    const ctx = audioCtxRef.current
    const masterGain = ctx.createGain()
    masterGain.gain.setValueAtTime(isMuted ? 0 : volume * 0.3, ctx.currentTime)
    masterGain.connect(ctx.destination)
    masterGainRef.current = masterGain

    // Play periodic ambient chime
    const triggerTone = () => {
      if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return

      const pitchList = PITCHES[activeTrack]
      const freq = pitchList[Math.floor(Math.random() * pitchList.length)]

      const osc = ctx.createOscillator()
      const toneGain = ctx.createGain()

      // Bell / Bonang chime envelope
      osc.type = activeTrack === 'wind' ? 'sine' : 'triangle'
      osc.frequency.setValueAtTime(freq, ctx.currentTime)

      // Soft decay like metallic resonance
      const now = ctx.currentTime
      toneGain.gain.setValueAtTime(0, now)
      toneGain.gain.linearRampToValueAtTime(0.15, now + 0.1)
      toneGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5)

      osc.connect(toneGain)
      toneGain.connect(masterGain)

      osc.start(now)
      osc.stop(now + 3.6)
    }

    triggerTone()
    // Schedule next chime with organic random interval
    const scheduleNext = () => {
      const delay = Math.random() * 2500 + 1500
      timerRef.current = window.setTimeout(() => {
        triggerTone()
        scheduleNext()
      }, delay)
    }
    scheduleNext()

    setIsPlaying(true)
  }

  const stopAudio = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend()
    }
    setIsPlaying(false)
  }

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio()
    } else {
      startAudio()
    }
  }

  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(
        isMuted ? 0 : volume * 0.3,
        audioCtxRef.current.currentTime
      )
    }
  }, [volume, isMuted])

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (audioCtxRef.current) audioCtxRef.current.close()
    }
  }, [])

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.5rem',
      left: '1.5rem',
      zIndex: 90,
      fontFamily: 'Work Sans, sans-serif'
    }}>
      <div style={{
        backgroundColor: 'rgba(26, 25, 20, 0.88)',
        backdropFilter: 'blur(12px)',
        color: '#f5f0e8',
        borderRadius: '30px',
        padding: isExpanded ? '0.6rem 1rem' : '0.4rem 0.8rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.65rem',
        border: '1px solid rgba(245,240,232,0.15)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>

        {/* Play Toggle */}
        <button
          onClick={togglePlay}
          title={isPlaying ? 'Hentikan Soundscape' : 'Putar Soundscape Suara Masa Lalu'}
          style={{
            background: isPlaying ? 'rgba(212, 175, 55, 0.2)' : 'rgba(255,255,255,0.1)',
            border: isPlaying ? '1px solid rgba(212, 175, 55, 0.5)' : '1px solid rgba(255,255,255,0.2)',
            color: isPlaying ? '#e6c875' : '#f5f0e8',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
            flexShrink: 0
          }}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} style={{ marginLeft: 2 }} />}
        </button>

        {/* Visualizer / Title */}
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 500, color: '#f5f0e8', letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>
              Suara Masa Lalu
            </span>
            <span style={{ fontSize: '0.6rem', color: 'rgba(245,240,232,0.6)', whiteSpace: 'nowrap' }}>
              {isPlaying ? (activeTrack === 'slendro' ? 'Gamelan Slendro' : activeTrack === 'pelog' ? 'Gamelan Pelog' : 'Angin Candi') : 'Klik untuk putar audio'}
            </span>
          </div>

          {/* Animated equalizer bars when playing */}
          {isPlaying && (
            <div style={{ display: 'flex', itemsAlign: 'flex-end', gap: '2px', height: '12px', marginLeft: '0.2rem' }}>
              <span className="animate-pulse" style={{ width: 2, height: '100%', backgroundColor: '#e6c875', borderRadius: 1 }} />
              <span className="animate-pulse" style={{ width: 2, height: '60%', backgroundColor: '#e6c875', borderRadius: 1, animationDelay: '0.15s' }} />
              <span className="animate-pulse" style={{ width: 2, height: '80%', backgroundColor: '#e6c875', borderRadius: 1, animationDelay: '0.3s' }} />
            </div>
          )}
        </div>

        {/* Controls when expanded */}
        {isExpanded && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '0.5rem', borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: '0.6rem' }}>
            {/* Track preset selection */}
            <div style={{ display: 'flex', gap: '4px' }}>
              {(['slendro', 'pelog', 'wind'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => { setActiveTrack(t); if (!isPlaying) startAudio() }}
                  style={{
                    background: activeTrack === t ? 'rgba(245,240,232,0.2)' : 'transparent',
                    border: 'none',
                    color: activeTrack === t ? '#f5f0e8' : 'rgba(245,240,232,0.5)',
                    fontSize: '0.6rem',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    textTransform: 'capitalize'
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Volume mute toggle */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              style={{ background: 'none', border: 'none', color: 'rgba(245,240,232,0.7)', cursor: 'pointer', padding: 2 }}
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
