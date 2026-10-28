const base = import.meta.env.BASE_URL

const certificates = [
  {
    title: 'certified in Intellectual Property Webinar',
    type: 'Appreciation',
    date: 'Apr 28, 2025',
    file: 'intellectual-property-webinar.pdf',
  },
  {
    title: 'Intro to Game Development with GDevelop',
    type: 'Appreciation',
    date: 'May 31, 2025',
    file: 'gdevelop-intro.pdf',
  },
  {
    title: 'Intro to Git Version Control',
    type: 'Certificate',
    date: 'Sep 19, 2025',
    file: 'git-version-control.pdf',
  },
  {
    title: 'Intro to UI/UX Design',
    type: 'Certificate',
    date: 'Sep 26, 2025',
    file: 'ui-ux-design.pdf',
  },
  {
    title: 'Classroom to Career',
    type: 'Certificate',
    date: 'Nov 4, 2025',
    file: 'classroom-to-career.pdf',
  },
  {
    title: 'IT Certification: Certifying IT Excellence',
    type: 'Certificate',
    date: 'Mar 11, 2026',
    file: 'it-certification.pdf',
  },
  {
    title: 'Information Security Bootcamp',
    type: 'Certificate',
    date: 'Apr 29, 2026',
    file: 'information-security-bootcamp.pdf',
  },
  {
    title: 'Classroom to Career: Stories to Life Through Cinematic Art',
    type: 'Certificate',
    date: 'Apr 30, 2026',
    file: 'classroom-to-career-cinematic-art.pdf',
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <h2>Certificates</h2>
      {certificates.map((c) => {
        const url = `${base}certificates/${c.file}`
        return (
          <article key={c.file} className="project">
            <h3>{c.title}</h3>
            <p>
              La Salle University Ozamiz &middot; {c.type} &middot; {c.date}
            </p>
            <div className="cert-actions">
              <a
                className="btn ghost"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                View PDF
              </a>
              <a className="btn ghost" href={url} download>
                Download
              </a>
            </div>
          </article>
        )
      })}
    </section>
  )
}
