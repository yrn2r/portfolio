import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { languages } from '../i18n/translations'

export default function Nav() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#work', label: t.nav.work },
    { href: '#services', label: t.nav.services },
    { href: '#about', label: t.nav.about },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ease-editorial ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-ink-line' : 'bg-transparent'
      }`}
    >
      <nav className="container-edit flex items-center justify-between h-20">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-paper hover:opacity-70 transition-opacity"
        >
          YERNUR
        </a>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-paper-muted hover:text-paper transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 border border-ink-line rounded-full px-1 py-1">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`text-xs px-3 py-1.5 rounded-full transition-colors duration-300 ${
                  lang === l.code
                    ? 'bg-paper text-ink'
                    : 'text-paper-muted hover:text-paper'
                }`}
                aria-pressed={lang === l.code}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <button
          className="md:hidden text-paper text-sm border border-ink-line rounded-full px-4 py-2"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink-line bg-ink px-6 py-6">
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1 border border-ink-line rounded-full px-1 py-1 mt-6 w-fit">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`text-xs px-3 py-1.5 rounded-full transition-colors duration-300 ${
                  lang === l.code ? 'bg-paper text-ink' : 'text-paper-muted'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
