'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')

  const handleSend = () => {
    if (!name || !email || !message) {
      setStatus('error')
      return
    }
    window.location.href = `mailto:faiz.khan6718@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`
    setStatus('sent')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <label style={{ fontSize: '0.8rem', color: 'var(--text2)', fontWeight: 500 }}>Your Name</label>
        <input
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ padding: '0.75rem 1rem', width: '100%' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <label style={{ fontSize: '0.8rem', color: 'var(--text2)', fontWeight: 500 }}>Email Address</label>
        <input
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ padding: '0.75rem 1rem', width: '100%' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <label style={{ fontSize: '0.8rem', color: 'var(--text2)', fontWeight: 500 }}>Message</label>
        <textarea
          placeholder="Tell me about your project..."
          rows={5}
          value={message}
          onChange={e => setMessage(e.target.value)}
          style={{ padding: '0.75rem 1rem', width: '100%', resize: 'none' }}
        />
      </div>

      {status === 'error' && (
        <div style={{
          padding: '0.75rem', borderRadius: 'var(--radius)', fontSize: '0.85rem',
          background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#ef4444'
        }}>
          Please fill in all fields before sending.
        </div>
      )}

      {status === 'sent' && (
        <div style={{
          padding: '0.75rem', borderRadius: 'var(--radius)', fontSize: '0.85rem',
          background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', color: '#10b981'
        }}>
          Opening your mail client...
        </div>
      )}

      <button className="btn-primary" style={{ width: '100%', textAlign: 'center' }} onClick={handleSend}>
        Send Message
      </button>
    </div>
  )
}
