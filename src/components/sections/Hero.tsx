'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const PHRASES = [
  'I build scalable web apps.',
  'I craft beautiful UIs.',
  'I love open source.',
  'MERN · Spring Boot · Java.',
  'I solve real problems with code.',
]

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [typed, setTyped] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  // Typewriter
  useEffect(() => {
    const phrase = PHRASES[phraseIdx]
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting) {
      if (charIdx < phrase.length) {
        timeout = setTimeout(() => { setTyped(phrase.slice(0, charIdx + 1)); setCharIdx(c => c + 1) }, 80)
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000)
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => { setTyped(phrase.slice(0, charIdx - 1)); setCharIdx(c => c - 1) }, 50)
      } else {
        setDeleting(false)
        setPhraseIdx(i => (i + 1) % PHRASES.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx])

  // Particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    const pts = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5
    }))

    const frame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(124,58,237,0.5)'; ctx.fill()
      })
      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y)
        if (d < 120) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(124,58,237,${0.15 * (1 - d / 120)})`; ctx.stroke()
        }
      }))
      raf = requestAnimationFrame(frame)
    }
    frame()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '80px', position: 'relative' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
      <motion.div style={{ position: 'relative', zIndex: 1 }}
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', border: '1px solid var(--border)', borderRadius: '50px', fontSize: '0.8rem', color: 'var(--text2)', marginBottom: '1.5rem', background: 'var(--surface)' }}>
          <span className="pulse-dot" />
          Open to opportunities
        </div>

        <h1 style={{ fontSize: 'clamp(2.5rem,7vw,5.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
          Mohammad<br />
          <span className="grad-text">Faiz Khan</span>
        </h1>

        <p style={{ fontSize: 'clamp(1rem,2.5vw,1.4rem)', color: 'var(--text2)', marginBottom: '0.5rem', fontWeight: 400 }}>
          Full Stack Developer · 3rd Year BTech IT
        </p>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 'clamp(0.9rem,2vw,1.15rem)', color: 'var(--accent2)', minHeight: '1.5em' }}>
          {typed}<span className="cursor-blink" />
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
          <motion.a href="#projects" className="btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>View Projects</motion.a>
          <motion.a href="#contact" className="btn-secondary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>Contact Me</motion.a>
        </div>

        <motion.div style={{ marginTop: '3rem', color: 'var(--text3)' }} animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
