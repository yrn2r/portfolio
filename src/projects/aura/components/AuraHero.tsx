import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CinematicMedia from './CinematicMedia'

export default function AuraHero() {
  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
      <CinematicMedia
        image="/projects/aura/hero/verde-hero.webp"
        video="/projects/aura/hero/verde-hero.mp4"
        alt="AURA VERDE — a forest after rain"
        className="absolute inset-0 w-full h-full"
        overlay="strong"
        priority
      />

      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-16 md:pb-20 max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <p className="text-white/70 text-xs tracking-[0.2em] uppercase mb-4">AURA — 01</p>
          <h1 className="font-auraDisplay italic text-white text-5xl sm:text-6xl md:text-7xl leading-none mb-4">
            VERDE
          </h1>
          <p className="text-white/80 text-sm tracking-wide mb-8">Fresh · Green · Aquatic</p>
          <p className="text-white/90 text-lg md:text-xl max-w-[28ch] font-auraDisplay italic mb-10">
            "After the rain, everything feels alive."
          </p>

          <Link
            to="/projects/aura/fragrance/verde"
            className="inline-flex items-center gap-2 text-white text-sm tracking-wide border-b border-white/50 hover:border-white transition-colors pb-1 w-fit"
          >
            Discover VERDE
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
