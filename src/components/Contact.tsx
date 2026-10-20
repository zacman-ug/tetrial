import { contact, site } from '../content'
import { useReveal } from '../hooks/useReveal'

export function Contact() {
  const ref = useReveal<HTMLElement>()

  return (
    <section className="section contact reveal" id="contact" ref={ref}>
      <div className="contact__panel">
        <p className="section__eyebrow">{contact.eyebrow}</p>
        <h2 className="section__headline">{contact.headline}</h2>
        <p className="contact__body">{contact.body}</p>
        <a className="contact__email" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <div className="contact__meta">
          <span>{site.location}</span>
          <a href={site.social.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={site.social.twitter} target="_blank" rel="noreferrer">
            X
          </a>
        </div>
      </div>
    </section>
  )
}
