import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Fragrance } from '../data/fragrances'
import FragranceCarousel from './FragranceCarousel'

const genderLabel: Record<Fragrance['gender'], string> = {
  unisex: 'Unisex',
  him: 'For Him',
  her: 'For Her',
}

export default function FragranceCard({ fragrance }: { fragrance: Fragrance }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-aura-charcoal/5">
        <FragranceCarousel
          images={fragrance.images}
          name={fragrance.name}
          slug={fragrance.slug}
          accent={fragrance.accent}
          className="w-full h-full"
        />
      </div>

      <Link
        to={`/projects/aura/fragrance/${fragrance.slug}`}
        className="block pt-4 group/link"
      >
        <div className="flex items-baseline justify-between">
          <h3 className="font-auraDisplay italic text-2xl group-hover/link:opacity-70 transition-opacity">
            {fragrance.name}
          </h3>

          <span className="text-[11px] tracking-wide text-aura-charcoal/45">
            {genderLabel[fragrance.gender]}
          </span>
        </div>

        <p className="text-sm text-aura-charcoal/60 mt-1">
          {fragrance.character}
        </p>

        <span className="inline-block mt-3 text-xs tracking-wide text-aura-charcoal/70 border-b border-aura-charcoal/30 group-hover/link:border-aura-charcoal transition-colors pb-0.5">
          Discover
        </span>
      </Link>
    </motion.article>
  )
}