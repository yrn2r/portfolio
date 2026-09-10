import { motion } from 'framer-motion'

interface PerformanceBarsProps {
  longevity: number
  projection: number
  freshness: number
  accent: string
}

export default function PerformanceBars({ longevity, projection, freshness, accent }: PerformanceBarsProps) {
  const rows = [
    { label: 'Longevity', value: longevity },
    { label: 'Projection', value: projection },
    { label: 'Freshness', value: freshness },
  ]

  return (
    <div className="flex flex-col gap-5">
      {rows.map((row, i) => (
        <div key={row.label}>
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-sm text-aura-charcoal/70">{row.label}</span>
            <span className="text-xs text-aura-charcoal/45">{row.value}/10</span>
          </div>
          <div className="aura-bar">
            <motion.div
              className="aura-bar-fill"
              style={{ background: accent }}
              initial={{ width: 0 }}
              whileInView={{ width: `${row.value * 10}%` }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
