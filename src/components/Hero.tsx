import { useRef, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 })

  const rotate = useTransform(sx, [-1, 1], [-6, 6])
  const shiftX = useTransform(sx, [-1, 1], [-14, 14])
  const shiftY = useTransform(sy, [-1, 1], [-10, 10])

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const relX = (e.clientX - rect.left) / rect.width
    const relY = (e.clientY - rect.top) / rect.height
    mx.set(relX * 2 - 1)
    my.set(relY * 2 - 1)
  }

  function handleMouseLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <section
      id="top"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="container-edit grid md:grid-cols-12 gap-y-12 gap-x-8 items-center w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="md:col-span-7 lg:col-span-7"
        >
          <h1 className="font-display leading-[0.95] text-paper">
            {t.hero.words.map((word) => (
              <motion.span
                key={word}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="block text-[3rem] sm:text-[4rem] md:text-[4.6rem] lg:text-[5.2rem] font-medium uppercase tracking-tight"
              >
                {word}.
              </motion.span>
            ))}
          </h1>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-paper text-ink text-sm font-medium px-6 py-3.5 rounded-full transition-transform duration-300 ease-editorial hover:-translate-y-0.5"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-ink-line2 text-paper text-sm font-medium px-6 py-3.5 rounded-full transition-colors duration-300 hover:border-paper"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="md:col-span-5 lg:col-span-5 flex justify-center md:justify-end"
        >
          <motion.svg
            style={{ rotate, x: shiftX, y: shiftY }}
            width="360"
            height="360"
            viewBox="0 0 360 360"
            fill="none"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          >
            <circle cx="180" cy="180" r="150" stroke="#2E4470" strokeWidth="1" opacity="0.5" />
            <circle cx="180" cy="180" r="105" stroke="#F3F1EC" strokeWidth="0.6" opacity="0.18" />
            <motion.line
              x1="180" y1="30" x2="180" y2="330"
              stroke="#F3F1EC" strokeWidth="0.5" opacity="0.14"
            />
            <motion.line
              x1="30" y1="180" x2="330" y2="180"
              stroke="#F3F1EC" strokeWidth="0.5" opacity="0.14"
            />
            <motion.circle
              style={{ x: shiftY, y: shiftX }}
              cx="180" cy="180" r="7" fill="#F3F1EC"
            />
            <motion.circle cx="286" cy="120" r="4" fill="#2E4470" style={{ x: shiftX, y: shiftY }} />
            <motion.circle cx="94" cy="252" r="4" fill="#2E4470" style={{ x: shiftY, y: shiftX }} />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  )
}
