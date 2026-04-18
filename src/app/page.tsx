import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import ContactForm from '@/components/sections/ContactForm'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* About */}
        <section id="about" style={{ padding: '6rem 2rem', background: 'var(--bg2)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p className="section-tag">About Me</p>
            <h2 className="section-title">Crafting Digital<br />Experiences</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem', alignItems: 'start' }}>
              <div>
                <p style={{ color: 'var(--text2)', lineHeight: 1.8, marginBottom: '1rem' }}>
                  Hey! I&apos;m Faiz — a Full Stack Developer and BTech IT student at SOA University, Bhubaneswar. I love building scalable web applications that solve real problems.
                </p>
                <p style={{ color: 'var(--text2)', lineHeight: 1.8, marginBottom: '1rem' }}>
                  From MERN stack apps to Spring Boot APIs, I work across the full stack. I&apos;m a GSSoC contributor, freelance developer, and Ideathon finalist with a passion for open source.
                </p>
                <p style={{ color: 'var(--text2)', lineHeight: 1.8 }}>
                  When not coding, I&apos;m exploring new tech, contributing to communities, or building side projects that push my limits.
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <a href="https://github.com/faizkhan013" target="_blank" className="btn-secondary">GitHub Profile ↗</a>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[['3+', 'Real-world Projects'], ['6+', 'Certifications'], ['2x', 'Internships'], ['Open', 'Source Contributor']].map(([num, label]) => (
                  <div key={label} className="surface-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                    <div className="grad-text" style={{ fontSize: '2.2rem', fontWeight: 800 }}>{num}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text3)', marginTop: '0.25rem' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" style={{ padding: '6rem 2rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p className="section-tag">Technical Skills</p>
            <h2 className="section-title">My Tech Stack</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
              {[
                { title: 'Frontend', skills: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'Tailwind CSS'] },
                { title: 'Backend', skills: ['Node.js', 'Express.js', 'Spring Boot', 'Java', 'Python', 'PHP', 'REST APIs'] },
                { title: 'Databases', skills: ['MongoDB', 'MySQL', 'SQL', 'Mongoose'] },
                { title: 'Tools & Platforms', skills: ['Git', 'GitHub', 'Vercel', 'WordPress', 'VS Code', 'IntelliJ', 'Linux', 'Bash'] },
              ].map(cat => (
                <div key={cat.title} className="surface-card" style={{ padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: '1rem' }}>{cat.title}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {cat.skills.map(s => (
                      <span key={s} style={{ padding: '0.3rem 0.75rem', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontSize: '0.8rem', color: 'var(--text2)', transition: 'all 0.3s', cursor: 'default' }}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Projects />

        {/* Experience */}
        <section id="experience" style={{ padding: '6rem 2rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p className="section-tag">Experience & Achievements</p>
            <h2 className="section-title">Journey So Far</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
              {[
                { role: 'Web Development Intern', company: 'Topten Technical Services · Dubai (Remote)', date: 'Aug–Sep 2025', desc: 'Designed and improved responsive company websites using front-end and back-end technologies. Enhanced performance and UX in a team environment.' },
                { role: 'Admin Assistant Intern', company: 'Topten Technical Services · Dubai (Remote)', date: 'Aug–Sep 2024', desc: 'Handled documentation, scheduling, and communication. Developed proficiency in MS Office and improved professional coordination skills.' },
                { role: 'Freelance Web Developer', company: 'Self-Employed · Remote', date: 'Jun 2025 – Present', desc: 'Building SEO-optimized, responsive WordPress websites. Delivering end-to-end solutions including design, deployment, and maintenance.' },
                { role: 'Open Source Contributor', company: 'GSSoC (GirlScript Summer of Code)', date: '2024', desc: 'Contributed to open source projects collaborating with global developers, submitting PRs, and improving real-world codebases.' },
              ].map(e => (
                <div key={e.role} className="surface-card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', gap: '1rem' }}>
                    <div>
                      <div style={{ fontWeight: 700 }}>{e.role}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--accent2)', marginTop: '0.15rem' }}>{e.company}</div>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text3)', whiteSpace: 'nowrap', fontFamily: 'var(--mono)' }}>{e.date}</div>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text2)', lineHeight: 1.6 }}>{e.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', display: 'grid', gap: '1rem' }}>
              {[
                { icon: '🏆', title: 'Ideathon Finalist — IIIT Bhubaneswar', desc: 'Competed and reached finals in the regional ideathon, presenting an innovative tech solution.' },
                { icon: '🌱', title: 'GSSoC Open Source Contributor', desc: 'Active open source contributor through GirlScript Summer of Code program.' },
              ].map(a => (
                <div key={a.title} className="surface-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem' }}>
                  <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>{a.icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.2rem' }}>{a.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text2)' }}>{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '0.8rem', color: 'var(--text3)', marginTop: '2.5rem', marginBottom: '1rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Certifications</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
              {[
                ['Accenture', 'Software Engineering (Forage) · 2025'],
                ['AWS', 'Solutions Architecture (Forage) · 2025'],
                ['Deloitte', 'Data Analytics (Forage) · 2025'],
                ['JP Morgan', 'Software Engineering (Forage) · 2025'],
                ['Skyscanner', 'Software Engineering (Forage) · 2025'],
                ['Tata', 'GenAI Data Analytics (Forage) · 2025'],
              ].map(([org, detail]) => (
                <div key={org} className="surface-card" style={{ padding: '0.75rem 1rem', fontSize: '0.8rem', color: 'var(--text2)' }}>
                  <strong style={{ color: 'var(--text)', display: 'block', fontSize: '0.75rem', marginBottom: '0.15rem' }}>{org}</strong>
                  {detail}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ padding: '6rem 2rem', background: 'var(--bg2)' }}>
          <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
            <p className="section-tag">Contact</p>
            <h2 className="section-title">Let&apos;s Build<br />Something Together</h2>
            <p style={{ color: 'var(--text2)', marginBottom: '2rem', lineHeight: 1.7 }}>
              I&apos;m always open to freelance projects, collaborations, and new opportunities. Drop a message!
            </p>
            <ContactForm />
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
              {[
                { href: 'https://github.com/faizkhan013', label: 'GitHub' },
                { href: 'https://linkedin.com/in/faizkhan013', label: 'LinkedIn' },
                { href: 'mailto:faiz.khan6718@gmail.com', label: 'Email' },
                { href: 'https://leetcode.com/u/faizkhan013/', label: 'LeetCode' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.6rem 1.2rem', background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)', color: 'var(--text2)', textDecoration: 'none',
                  fontSize: '0.85rem', transition: 'all 0.3s'
                }}>{s.label} ↗</a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--border)', color: 'var(--text3)', fontSize: '0.8rem' }}>
        Crafted with ❤️ by Mohammad Faiz Khan · 2025 · Bhubaneswar, India
      </footer>
    </>
  )
}

