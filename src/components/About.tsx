import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const { t } = useLanguage()
  const { ref, inView } = useReveal()

  return (
    <section id="about" className="py-28 md:py-36 hairline">
      <div className="container-edit grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-sm text-paper-muted mb-4">{t.about.kicker}</p>
          <h2 className="font-display text-2xl md:text-3xl text-paper max-w-[16ch]">
            {t.about.heading}
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 md:col-start-6 flex flex-col gap-6"
        >
          {t.about.paragraphs.map((p, i) => (
            <p key={i} className="text-paper-muted text-lg leading-relaxed max-w-[58ch]">
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
