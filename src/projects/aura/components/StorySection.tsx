import { motion } from 'framer-motion'
import CinematicMedia from './CinematicMedia'

export default function StorySection() {
  return (
    <section id="story" className="max-w-[1320px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-6 order-2 md:order-1"
        >
          <p className="text-xs tracking-[0.15em] text-aura-charcoal/45 uppercase mb-4">Philosophy</p>
          <h2 className="font-auraDisplay italic text-3xl md:text-4xl mb-6 max-w-[16ch]">
            Not a scent. A memory in the making.
          </h2>
          <div className="flex flex-col gap-4 text-aura-charcoal/70 max-w-[48ch]">
            <p>
              We don't think of fragrance as something you wear to smell good. It's closer to weather, or light —
              something that quietly attaches itself to a place, a person, a particular hour of the day.
            </p>
            <p>
              Every AURA fragrance starts with an atmosphere, not a formula: a forest after rain, the last hour of a
              fire, the sand at the edge of a dry afternoon. The notes come second. The feeling comes first.
            </p>
            <p>Wear it enough times, and it stops being a scent. It becomes a memory you can return to.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-6 order-1 md:order-2 aspect-[4/5] rounded-sm overflow-hidden"
        >
          <CinematicMedia
            image="/projects/aura/story/philosophy.webp"
            alt="AURA — a quiet natural landscape"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
