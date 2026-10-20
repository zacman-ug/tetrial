import { site } from '../content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        © {year} {site.name}
      </p>
      <p className="footer__note">
        Content placeholders live in <code>src/content.ts</code>
      </p>
    </footer>
  )
}
