const projects = [
  {
    title: 'FaceDet',
    description:
      'Real-Time facial expression detector using MediaPipe Face Mesh.',
    tech: ['HTML', 'JavaScript', 'CSS'],
    link: 'https://kenthub123.github.io/dogface/',
    image: '/FacDet.png',
  },
  {
    title: 'Portfolio Website',
    description:
      'My First Portfolio Website using CSS, HTML, and JavaScript. It is a simple and responsive website that showcases my skills and projects.',
    tech: ['HTML', 'JavaScript', 'CSS'],
    link: 'https://kenthub123.github.io/myPortfolio/',
    image: '/KGM.png',
  },
  {
    title: 'ChessElo Predictor',
    description:
      'A machine learning model that predicts the Elo rating of a chess player base on 1 game only.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost'],
    link: 'https://chesselo-rho.vercel.app/',
    image: '/FindingElo.png',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <article className="project" key={p.title}>
            <div className="project-thumb">
              <img src={p.image} alt={`${p.title} screenshot`} />
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tech.map((t) => <span key={t}>{t}</span>)}
              </div>
              <a href={p.link} target="_blank" rel="noreferrer">View project</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}