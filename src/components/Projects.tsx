import { projects, work } from '../content'
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

function ProjectRow({
  project,
}: {
  project: (typeof projects)[number]
}) {
  const ref = useReveal<HTMLLIElement>()

  return (
    <li className="project reveal" ref={ref}>
      <div className="project__media">
        <img
          src={project.image.src}
          alt={project.image.alt}
          width={1600}
          height={1100}
          loading="lazy"
        />
        {project.placeholder && (
          <span className="project__badge">Placeholder</span>
        )}
      </div>
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
          {project.href ? (
            <a href={project.href}>{project.title}</a>
          ) : (
            project.title
          )}
        </h3>
        <p className="project__summary">{project.summary}</p>
      </div>
    </li>
  )
}
