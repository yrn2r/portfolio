import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { fragrances } from '../data/fragrances'
import FragranceCard from './FragranceCard'
import CollectionFilters, { type FilterValue } from './CollectionFilters'

export default function Collection() {
  const [filter, setFilter] = useState<FilterValue>('all')

  const filtered = useMemo(
    () => (filter === 'all' ? fragrances : fragrances.filter((f) => f.gender === filter)),
    [filter],
  )

  return (
    <section id="collection" className="max-w-[1320px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-[48ch] mb-10">
        <p className="text-xs tracking-[0.15em] text-aura-charcoal/45 uppercase mb-4">The Collection</p>
        <h2 className="font-auraDisplay italic text-3xl md:text-4xl">Seven atmospheres, one house.</h2>
      </div>

      <CollectionFilters active={filter} onChange={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 md:gap-y-20">
        <AnimatePresence mode="popLayout">
          {filtered.map((f) => (
            <motion.div
              key={f.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <FragranceCard fragrance={f} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
