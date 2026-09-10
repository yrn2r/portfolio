import { motion } from 'framer-motion'

export default function AuraIntro() {
  return (
    <section className="max-w-[1320px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-auraDisplay italic text-2xl md:text-4xl leading-snug max-w-[24ch]"
      >
        Fragrance inspired by nature, designed around emotion.
      </motion.p>
    </section>
  )
}
