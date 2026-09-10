import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fragrances, type Fragrance } from '../data/fragrances'

const moodOptions = ['Fresh', 'Warm', 'Mysterious', 'Soft', 'Clean', 'Bold'] as const
const atmosphereOptions = ['Forest', 'Night', 'Sunlight', 'Desert', 'Rain', 'Fire'] as const

type Mood = (typeof moodOptions)[number]
type Atmosphere = (typeof atmosphereOptions)[number]

/** Simple, reusable scoring system — matches answers against each fragrance's tagged attributes. */
function recommend(mood: Mood, atmosphere: Atmosphere): { winner: Fragrance; reason: string } {
  const moodKey = mood.toLowerCase()
  const atmosphereKey = atmosphere.toLowerCase()

  let best = fragrances[0]
  let bestScore = -1

  for (const f of fragrances) {
    let score = 0
    if (f.attributes.mood.includes(moodKey)) score += 2
    if (f.attributes.atmosphere.includes(atmosphereKey)) score += 2
    if (score > bestScore) {
      bestScore = score
      best = f
    }
  }

  const reason =
    bestScore >= 3
      ? `A close match for something ${mood.toLowerCase()}, set in ${atmosphere.toLowerCase()}.`
      : `The closest atmosphere in the collection to what you're after.`

  return { winner: best, reason }
}

export default function ScentFinder() {
  const [step, setStep] = useState(0)
  const [mood, setMood] = useState<Mood | null>(null)
  const [atmosphere, setAtmosphere] = useState<Atmosphere | null>(null)

  const result = mood && atmosphere ? recommend(mood, atmosphere) : null

  function reset() {
    setStep(0)
    setMood(null)
    setAtmosphere(null)
  }

  return (
    <section id="scent-finder" className="max-w-[1320px] mx-auto px-6 md:px-10 py-24 md:py-32 border-t border-aura-charcoal/10">
      <div className="max-w-[52ch] mb-12">
        <p className="text-xs tracking-[0.15em] text-aura-charcoal/45 uppercase mb-4">Scent Finder</p>
        <h2 className="font-auraDisplay italic text-3xl md:text-4xl">Not sure where to start?</h2>
      </div>

      <div className="max-w-2xl">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="q1" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <p className="text-lg mb-6">What do you want to feel?</p>
              <div className="flex flex-wrap gap-3">
                {moodOptions.map((m) => (
                  <button
                    key={m}
                    onClick={() => {
                      setMood(m)
                      setStep(1)
                    }}
                    className="text-sm tracking-wide border border-aura-charcoal/25 hover:border-aura-charcoal hover:bg-aura-charcoal hover:text-aura-ivory transition-colors px-5 py-2.5 rounded-full"
                  >
                    {m}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="q2" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
              <p className="text-lg mb-6">What kind of atmosphere?</p>
              <div className="flex flex-wrap gap-3">
                {atmosphereOptions.map((a) => (
                  <button
                    key={a}
                    onClick={() => {
                      setAtmosphere(a)
                      setStep(2)
                    }}
                    className="text-sm tracking-wide border border-aura-charcoal/25 hover:border-aura-charcoal hover:bg-aura-charcoal hover:text-aura-ivory transition-colors px-5 py-2.5 rounded-full"
                  >
                    {a}
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(0)} className="mt-6 text-xs text-aura-charcoal/45 hover:text-aura-charcoal">
                ← back
              </button>
            </motion.div>
          )}

          {step === 2 && result && (
            <motion.div key="result" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-xs tracking-[0.15em] uppercase text-aura-charcoal/45 mb-3">Your AURA</p>
              <h3 className="font-auraDisplay italic text-4xl mb-2" style={{ color: result.winner.accent }}>
                {result.winner.name}
              </h3>
              <p className="text-aura-charcoal/60 mb-1">{result.winner.character}</p>
              <p className="text-aura-charcoal/70 max-w-[46ch] mt-4 mb-8">{result.reason}</p>

              <div className="flex items-center gap-6">
                <Link
                  to={`/projects/aura/fragrance/${result.winner.slug}`}
                  className="inline-flex text-sm tracking-wide border-b border-aura-charcoal pb-1 hover:opacity-70 transition-opacity"
                >
                  Discover {result.winner.name}
                </Link>
                <button onClick={reset} className="text-xs text-aura-charcoal/45 hover:text-aura-charcoal">
                  Start over
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
