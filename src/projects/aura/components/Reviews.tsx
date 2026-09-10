import { motion } from 'framer-motion'

const featured = [
  { name: 'Aigerim K.', quote: 'The first spray reminds me of walking through a forest immediately after rain.', fragrance: 'VERDE' },
  { name: 'Marat T.', quote: 'Confident without shouting. People notice it before they notice you.', fragrance: 'NOIR' },
  { name: 'Amina B.', quote: 'It smells like the first good morning of spring. Never heavy, always kind.', fragrance: 'ÉCLAT' },
  { name: 'Timur B.', quote: 'The warmest thing I own. Perfect for the first cold week of the year.', fragrance: 'EMBER' },
]

export default function Reviews() {
  return (
    <section className="max-w-[1320px] mx-auto px-6 md:px-10 py-24 md:py-32 border-t border-aura-charcoal/10">
      <p className="text-xs tracking-[0.15em] text-aura-charcoal/45 uppercase mb-10">In their words</p>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
        {featured.map((r, i) => (
          <motion.figure
            key={r.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
          >
            <blockquote className="font-auraDisplay italic text-xl md:text-2xl leading-snug mb-4">
              "{r.quote}"
            </blockquote>
            <figcaption className="text-sm text-aura-charcoal/50">
              {r.name} — {r.fragrance}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}
