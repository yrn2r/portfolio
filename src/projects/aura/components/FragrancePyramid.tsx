import { motion } from 'framer-motion'
import type { FragranceNotes } from '../data/fragrances'

const tiers: { key: keyof FragranceNotes; label: string }[] = [
  { key: 'top', label: 'Top' },
  { key: 'heart', label: 'Heart' },
  { key: 'base', label: 'Base' },
]

export default function FragrancePyramid({ notes, accent }: { notes: FragranceNotes; accent: string }) {
  return (
    <div className="flex flex-col divide-y divide-aura-charcoal/10 border-y border-aura-charcoal/10">
      {tiers.map((tier, i) => (
        <motion.div
          key={tier.key}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
          className="grid grid-cols-12 gap-4 py-6 items-baseline"
        >
          <span className="col-span-3 md:col-span-2 text-xs tracking-[0.15em] uppercase" style={{ color: accent }}>
            {tier.label}
          </span>
          <p className="col-span-9 md:col-span-10 text-aura-charcoal/75">{notes[tier.key].join(' · ')}</p>
        </motion.div>
      ))}
    </div>
  )
}
