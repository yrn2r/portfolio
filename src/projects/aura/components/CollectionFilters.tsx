import type { Gender } from '../data/fragrances'

export type FilterValue = 'all' | Gender

const filters: { value: FilterValue; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'him', label: 'For Him' },
  { value: 'her', label: 'For Her' },
  { value: 'unisex', label: 'Unisex' },
]

export default function CollectionFilters({
  active,
  onChange,
}: {
  active: FilterValue
  onChange: (v: FilterValue) => void
}) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-3 mb-12" role="tablist" aria-label="Filter collection">
      {filters.map((f) => (
        <button
          key={f.value}
          role="tab"
          aria-selected={active === f.value}
          onClick={() => onChange(f.value)}
          className={`text-sm tracking-wide pb-1 border-b transition-colors ${
            active === f.value
              ? 'text-aura-charcoal border-aura-charcoal'
              : 'text-aura-charcoal/45 border-transparent hover:text-aura-charcoal/70'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
