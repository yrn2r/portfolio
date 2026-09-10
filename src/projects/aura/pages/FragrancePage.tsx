import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import { getFragranceBySlug, getRelatedFragrances, PRICE_TABLE, type Size } from '../data/fragrances'
import { useCart } from '../context/CartContext'
import CinematicMedia from '../components/CinematicMedia'
import FragrancePyramid from '../components/FragrancePyramid'
import PerformanceBars from '../components/PerformanceBars'
import FragranceCard from '../components/FragranceCard'
import FragranceReviews from '../components/FragranceReviews'
import AuraNotFoundContent from '../components/AuraNotFoundContent'

const genderLabel = { unisex: 'Unisex', him: 'For Him', her: 'For Her' } as const
const sizes: Size[] = ['30ml', '50ml', '100ml']

export default function FragrancePage() {
  const { slug } = useParams()
  const fragrance = getFragranceBySlug(slug)
  const { addLine } = useCart()

  const [size, setSize] = useState<Size>('50ml')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!fragrance) {
    return <AuraNotFoundContent message="We couldn't find that fragrance. It may have been renamed or retired." />
  }

  const related = getRelatedFragrances(fragrance)

  function handleAddToCart() {
    addLine({ fragranceId: fragrance!.id, name: fragrance!.name, slug: fragrance!.slug, size }, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div>
      {/* Cinematic hero */}
      <section className="relative h-[64vh] min-h-[420px] w-full overflow-hidden">
        <CinematicMedia
          image={fragrance.images[0]}
          alt={`${fragrance.name} — ${fragrance.concept}`}
          className="absolute inset-0 w-full h-full"
          overlay="soft"
          priority
        />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-12 max-w-[1320px] mx-auto">
          <p className="text-white/70 text-xs tracking-[0.2em] uppercase mb-3">AURA — {fragrance.index}</p>
          <h1 className="font-auraDisplay italic text-white text-5xl md:text-6xl">{fragrance.name}</h1>
        </div>
      </section>

      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Bottle visual */}
          <div className="md:col-span-5">
            <div className="aspect-[4/5] rounded-sm overflow-hidden sticky top-24">
              <CinematicMedia image={fragrance.images[1]} alt={`${fragrance.name} bottle`} className="w-full h-full" />
            </div>
          </div>

          {/* Purchase panel */}
          <div className="md:col-span-7">
            <div className="flex items-baseline justify-between mb-2">
              <p className="text-sm text-aura-charcoal/60">{fragrance.character}</p>
              <span className="text-[11px] tracking-wide text-aura-charcoal/45">{genderLabel[fragrance.gender]}</span>
            </div>
            <p className="text-2xl font-auraDisplay italic mb-6" style={{ color: fragrance.accent }}>
              €{PRICE_TABLE[size]}
            </p>

            <p className="text-aura-charcoal/70 max-w-[56ch] mb-8">{fragrance.concept}</p>

            {/* Size selector */}
            <div className="mb-6">
              <p className="text-xs tracking-wide text-aura-charcoal/50 mb-3">Size</p>
              <div className="flex gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                      size === s
                        ? 'border-aura-charcoal bg-aura-charcoal text-aura-ivory'
                        : 'border-aura-charcoal/25 text-aura-charcoal/70 hover:border-aura-charcoal/60'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + add to cart */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center border border-aura-charcoal/25 rounded-full">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 flex items-center justify-center text-aura-charcoal/70 hover:text-aura-charcoal"
                >
                  −
                </button>
                <span className="w-6 text-center text-sm">{quantity}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-9 h-9 flex items-center justify-center text-aura-charcoal/70 hover:text-aura-charcoal"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-aura-charcoal text-aura-ivory text-sm tracking-wide px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {added ? (
                    <motion.span key="added" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Check size={14} /> Added
                    </motion.span>
                  ) : (
                    <motion.span key="add" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      Add to Cart
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* The feeling */}
            <blockquote className="font-auraDisplay italic text-xl md:text-2xl leading-snug border-l-2 pl-6 mb-12" style={{ borderColor: fragrance.accent }}>
              "{fragrance.feeling}"
            </blockquote>

            {/* Pyramid */}
            <div className="mb-12">
              <p className="text-xs tracking-[0.15em] uppercase text-aura-charcoal/45 mb-4">Fragrance Pyramid</p>
              <FragrancePyramid notes={fragrance.notes} accent={fragrance.accent} />
            </div>

            {/* Performance */}
            <div className="mb-12">
              <p className="text-xs tracking-[0.15em] uppercase text-aura-charcoal/45 mb-5">Performance</p>
              <PerformanceBars
                longevity={fragrance.longevity}
                projection={fragrance.projection}
                freshness={fragrance.freshness}
                accent={fragrance.accent}
              />
            </div>

            {/* Meta */}
            <div className="grid grid-cols-2 gap-6 text-sm mb-12 border-t border-aura-charcoal/10 pt-6">
              <div>
                <p className="text-aura-charcoal/45 mb-1">Season</p>
                <p>{fragrance.season}</p>
              </div>
              <div>
                <p className="text-aura-charcoal/45 mb-1">Occasion</p>
                <p>{fragrance.occasion}</p>
              </div>
            </div>

            <FragranceReviews fragranceId={fragrance.id} initialReviews={fragrance.reviews} />
          </div>
        </div>

        {/* Related */}
        <div className="mt-24 md:mt-32 border-t border-aura-charcoal/10 pt-16">
          <p className="text-xs tracking-[0.15em] uppercase text-aura-charcoal/45 mb-10">You may also like</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 max-w-3xl">
            {related.map((f) => (
              <FragranceCard key={f.id} fragrance={f} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
