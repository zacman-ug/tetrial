import { hero, site } from '../content'

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <img
          src={hero.image.src}
          alt=""
          width={2400}
          height={1600}
          fetchPriority="high"
        />
      </div>
      <div className="hero__veil" />
      <div className="hero__inner">
        <p className="hero__role">{site.role}</p>
        <h1 className="hero__name">{site.name}</h1>
        <p className="hero__lede">{hero.lede}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.label}
          </a>
          <a className="btn btn--ghost" href={hero.ctaSecondary.href}>
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>
    </header>
  )
}
