import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import type { ProjectItem } from '../i18n/translations'
import ProjectVisual from './ProjectVisual'
import { useReveal } from '../hooks/useReveal'

const variants = ['aura', 'noir', 'vertex'] as const

export default function Work() {
  const { t } = useLanguage()

  return (
    <section id="work" className="py-28 md:py-36 hairline">
      <div className="container-edit">
        <div className="max-w-[46ch] mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-medium text-paper">{t.work.heading}</h2>
          <p className="mt-4 text-paper-muted">{t.work.intro}</p>
        </div>

        <div className="flex flex-col gap-20 md:gap-28">
          {t.work.items.map((project, i) => (
            <ProjectRow key={project.name} project={project} variant={variants[i]} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectRow({
  project,
  variant,
  reverse,
}: {
  project: ProjectItem
  variant: (typeof variants)[number]
  reverse: boolean
}) {
  const { t } = useLanguage()
  const { ref, inView } = useReveal()
  const isBuilt = project.name === 'AURA'

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center`}
    >
      <div
        className={`md:col-span-7 group overflow-hidden rounded-sm border border-ink-line ${
          reverse ? 'md:order-2' : ''
        }`}
      >
        <div className="aspect-[4/3] overflow-hidden">
          {isBuilt ? (
            <Link to="/projects/aura" className="block w-full h-full">
              <div className="w-full h-full transition-transform duration-700 ease-editorial group-hover:scale-[1.04]">
                <ProjectVisual variant={variant} />
              </div>
            </Link>
          ) : (
            <div className="w-full h-full transition-transform duration-700 ease-editorial group-hover:scale-[1.04]">
              <ProjectVisual variant={variant} />
            </div>
          )}
        </div>
      </div>

      <div className={`md:col-span-5 ${reverse ? 'md:order-1' : ''}`}>
        <div className="flex items-baseline gap-3 text-paper-dim text-sm mb-4">
          <span>{project.index}</span>
          <span className="h-px w-8 bg-ink-line2" />
          <span>{project.category}</span>
        </div>

        {isBuilt ? (
          <Link to="/projects/aura">
            <h3 className="font-display text-2xl md:text-3xl text-paper mb-4 hover:opacity-70 transition-opacity">
              {project.name}
            </h3>
          </Link>
        ) : (
          <h3 className="font-display text-2xl md:text-3xl text-paper mb-4">{project.name}</h3>
        )}

        <p className="text-paper-muted mb-5 max-w-[38ch]">{project.description}</p>

        <ul className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs text-paper-muted border border-ink-line rounded-full px-3 py-1"
            >
              {tag}
            </li>
          ))}
        </ul>

        {isBuilt ? (
          <Link
            to="/projects/aura"
            className="inline-flex items-center gap-2 text-sm text-paper border-b border-ink-line2 hover:border-paper transition-colors pb-0.5 w-fit"
          >
            {t.work.openCaseStudy}
          </Link>
        ) : (
          <p className="text-xs text-paper-dim italic">{t.work.note}</p>
        )}
      </div>
    </motion.article>
  )
}
