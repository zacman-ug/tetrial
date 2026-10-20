import { projects, work, type Project } from '../content'
import { useReveal } from '../hooks/useReveal'

export function Projects() {
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section className="section" id="work" aria-labelledby="work-heading">
      <div className="work-header reveal" ref={headerRef}>
        <p className="section__eyebrow">{work.eyebrow}</p>
        <h2 className="section__headline" id="work-heading">
          {work.headline}
        </h2>
      </div>
      <ul className="work-list">
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </ul>
    </section>
  )
}

function ProjectRow({ project }: { project: Project }) {
  const ref = useReveal<HTMLLIElement>()

  return (
    <li className="project reveal" ref={ref}>
      <a
        className="project__media"
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.title} — open`}
      >
        <img
          src={project.image.src}
          alt={project.image.alt}
          width={1600}
          height={1100}
          loading="lazy"
        />
        {project.placeholder && (
          <span className="project__badge">Stock media</span>
        )}
      </a>
      <div className="project__copy">
        <div className="project__meta">
          <span>{project.year}</span>
          <ul className="project__tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <h3 className="project__title">
          <a href={project.href} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </h3>
        <p className="project__summary">{project.summary}</p>
        {project.note && <p className="project__note">{project.note}</p>}
        <div className="project__links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Live demo
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              Repository
            </a>
          )}
        </div>
      </div>
    </li>
  )
}
