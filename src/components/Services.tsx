import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal } from '../hooks/useReveal'

export default function Services() {
  const { t } = useLanguage()
  const { ref, inView } = useReveal()

  return (
    <section id="services" className="py-28 md:py-36 hairline">
      <div className="container-edit">
        <div className="max-w-[46ch] mb-14 md:mb-20">
          <p className="text-sm text-paper-muted mb-4">{t.services.kicker}</p>
          <h2 className="text-3xl md:text-4xl font-medium text-paper">{t.services.heading}</h2>
        </div>

        <div ref={ref} className="flex flex-col">
          {t.services.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-ink-line items-baseline hover:bg-ink-elevated/40 transition-colors duration-300 px-2 -mx-2 rounded-sm"
            >
              <span className="md:col-span-1 text-paper-dim text-sm">{`0${i + 1}`}</span>
              <h3 className="md:col-span-4 font-display text-xl md:text-2xl text-paper">
                {item.title}
              </h3>
              <p className="md:col-span-7 text-paper-muted max-w-[52ch]">{item.description}</p>
            </motion.div>
          ))}
          <div className="border-t border-ink-line" />
        </div>
      </div>
    </section>
  )
}
