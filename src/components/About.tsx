import { about } from '../content'
import { useReveal } from '../hooks/useReveal'

export function About() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section about reveal" id="about" ref={ref}>
      <div>
        <p className="section__eyebrow">{about.eyebrow}</p>
        <h2 className="section__headline">{about.headline}</h2>
      </div>
      <div>
        <div className="about__body">
          {about.body.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        <ul className="about__highlights">
          {about.highlights.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
