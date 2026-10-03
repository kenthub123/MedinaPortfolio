import { useState } from 'react'

const EMAIL = 'kent.medina@lsu.edu.ph'
const PHONE = '09765101508'

const socials = [
  { label: 'GitHub', url: 'https://github.com/kenthub123' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kent-medina-0978a140b/' },
  { label: 'Facebook', url: 'https://www.facebook.com/kent.gella.9/' },
  { label: 'Instagram', url: 'https://www.instagram.com/ken.t1toy/' },
]

export default function Home() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section id="home" className="section hero">
      <div>
        <h1>Kent Medina</h1>
        <p>
          I'm Kent G. Medina, an IT student from La Salle University Ozamis.
          I'm passionate about building web applications and learning new
          technologies
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn">View projects</a>
          <a href="#contact" className="btn ghost">Contact me</a>
        </div>

        <div className="contact-info">
          <p>
            <strong>Email</strong>
            <br />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <p>
            <strong>Phone</strong>
            <br />
            <a href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
          </p>
          <div className="socials">
            {socials.map((s) => (
              <a
                key={s.label}
                className="btn"
                href={s.url}
                target="_blank"
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      {photoFailed ? (
        <div className="avatar" aria-label="Kent Medina">KM</div>
      ) : (
        <img
          src="Profile_Picture.png"
          alt="Kent Medina"
          className="avatar"
          onError={() => setPhotoFailed(true)}
        />
      )}
    </section>
  )
}
