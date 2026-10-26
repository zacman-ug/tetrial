import { site } from '../content'

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact', hideSm: true },
]

export function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <a className="nav__mark" href="#top">
        {site.shortName}
      </a>
      <ul className="nav__links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} {...(link.hideSm ? { 'data-hide-sm': true } : {})}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
