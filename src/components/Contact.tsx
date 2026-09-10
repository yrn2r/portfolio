import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'

// Telegram link left untouched per existing setup. Update email/github here if they change.
const CONTACT = {
  email: 'y.ak6ergen@gmail.com',
  telegramHandle: '@bolvtbekuly',
  telegramHref: 'https://t.me/bolvtbekuly',
  github: 'github.com/yrn2r',
  githubHref: 'https://github.com/yrn2r',
}

export default function Contact() {
  const { t } = useLanguage()
  const { ref, inView } = useReveal()

  const rows = [
    { label: t.contact.email, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { label: t.contact.telegram, value: CONTACT.telegramHandle, href: CONTACT.telegramHref },
    { label: t.contact.github, value: CONTACT.github, href: CONTACT.githubHref },
  ]

  return (
    <section id="contact" className="py-28 md:py-40 hairline">
      <div className="container-edit grid md:grid-cols-12 gap-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-6"
        >
          <h2 className="font-display text-3xl md:text-5xl text-paper max-w-[14ch]">
            {t.contact.heading}
          </h2>
          <p className="mt-6 text-paper-muted max-w-[42ch]">{t.contact.sub}</p>

          <a
            href={CONTACT.telegramHref}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-2 bg-paper text-ink text-sm font-medium px-6 py-3.5 rounded-full transition-transform duration-300 ease-editorial hover:-translate-y-0.5"
          >
            {t.contact.telegram}
          </a>
        </motion.div>

        <div className="md:col-span-5 md:col-start-8 flex flex-col">
          {rows.map((row) => (
            <a
              key={row.label}
              href={row.href}
              target={row.href.startsWith('http') ? '_blank' : undefined}
              rel={row.href.startsWith('http') ? 'noreferrer' : undefined}
              className="group flex items-baseline justify-between py-5 border-t border-ink-line last:border-b hover:pl-1 transition-[padding] duration-300"
            >
              <span className="text-sm text-paper-muted">{row.label}</span>
              <span className="font-display text-paper group-hover:text-paper/80 transition-colors">
                {row.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
