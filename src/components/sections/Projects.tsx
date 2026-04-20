'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useGitHubRepos } from '@/hooks/useGitHubRepos'

const FEATURED_PROJECTS = [
  { name: 'WeekWize-AI', description: 'AI-powered productivity assistant to manage weekly tasks with intelligent recommendations. Built with React, Node.js, and OpenAI API.', topics: ['javascript', 'react', 'nodejs', 'openai', 'vercel'], html_url: 'https://github.com/faizkhan013', homepage: '', icon: '🤖', featured: true },
  { name: 'Whypper', description: 'Community-driven platform for sharing ideas and discussions. Features authentication, post management, and rich UI/UX.', topics: ['react', 'express', 'mongodb', 'nodejs'], html_url: 'https://github.com/faizkhan013', homepage: '', icon: '💬', featured: true },
  { name: 'Amusement Town', description: 'Entertainment website with SEO optimization and responsive design. Focused on UI/UX and content integration.', topics: ['wordpress', 'html', 'css', 'javascript', 'seo'], html_url: 'https://github.com/faizkhan013', homepage: 'https://github.com/faizkhan013', icon: '🎪', featured: true },
]

const ICONS: Record<string, string> = {
  JavaScript: '🟨', TypeScript: '🔷', Python: '🐍', Java: '☕', PHP: '🐘', HTML: '🌐', CSS: '🎨', default: '📦'
}

export default function Projects() {
  const { repos, loading, error } = useGitHubRepos('faizkhan013')
  const [showCount, setShowCount] = useState(6)

  const featuredNames = FEATURED_PROJECTS.map(p => p.name.toLowerCase().replace(/[^a-z]/g, ''))
  const extraRepos = repos
    .filter(r => !featuredNames.some(f => r.name.toLowerCase().replace(/[^a-z]/g, '').includes(f.substring(0, 6))))
    .slice(0, showCount)

  return (
    <section id="projects" style={{ padding: '6rem 2rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <p className="section-tag">Projects</p>
            <h2 className="section-title">What I've Built</h2>
          </div>
          <a href="https://github.com/faizkhan013" target="_blank" className="btn-secondary">All on GitHub ↗</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {FEATURED_PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
          {loading && (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '2rem', color: 'var(--text3)' }}>
              <div style={{ width: 24, height: 24, border: '2px solid var(--border)', borderTopColor: 'var(--accent)', borderRadius: '50%', margin: '0 auto 1rem', animation: 'spin 0.8s linear infinite' }} />
              Fetching GitHub repos...
            </div>
          )}
          {!loading && extraRepos.map((r, i) => (
            <ProjectCard key={r.id} project={{ ...r, icon: ICONS[r.language || ''] || ICONS.default, featured: false, homepage: r.homepage || '' }} index={FEATURED_PROJECTS.length + i} />
          ))}
        </div>

        {!loading && repos.length > showCount + 3 && (
          <button onClick={() => setShowCount(c => c + 6)} style={{
            display: 'block', margin: '2rem auto 0', padding: '0.75rem 2rem',
            background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)',
            color: 'var(--text)', cursor: 'pointer', fontFamily: 'var(--font)', fontSize: '0.9rem',
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.color = 'var(--text)' }}
          >
            Load More Repos
          </button>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
     style={{
  padding: '1.5rem',
  background: project.featured
    ? 'rgba(124,58,237,0.05)'
    : 'var(--surface)',
  border: `1px solid ${
    project.featured
      ? 'rgba(124,58,237,0.35)'
      : 'var(--border)'
  }`,
  borderRadius: 'var(--radius)',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s'
}}
      whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(0,0,0,0.3)', borderColor: 'var(--accent)' }}
    >
      {project.featured && (
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.2rem 0.6rem', background: 'var(--grad)', borderRadius: '50px', fontSize: '0.65rem', fontWeight: 700, color: '#fff' }}>Featured</div>
      )}
      <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{project.icon}</div>
      <div style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>{project.name}</div>
      <div style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.6, flex: 1, marginBottom: '1rem' }}>
        {project.description || 'No description provided.'}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
        {(project.topics || []).slice(0, 5).map((t: string) => (
          <span key={t} style={{ padding: '0.15rem 0.5rem', background: 'var(--surface2)', borderRadius: '4px', fontSize: '0.7rem', color: 'var(--text3)', fontFamily: 'var(--mono)' }}>{t}</span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href={project.html_url} target="_blank" rel="noopener" style={{ fontSize: '0.8rem', color: 'var(--accent2)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          ↗ GitHub
        </a>
        {project.homepage && (
          <a href={project.homepage} target="_blank" rel="noopener" style={{ fontSize: '0.8rem', color: 'var(--accent2)', textDecoration: 'none' }}>
            ↗ Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}
