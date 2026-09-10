import { Link } from 'react-router-dom'

export default function AuraFooter() {
  return (
    <footer className="border-t border-aura-charcoal/10 mt-32">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-auraDisplay italic text-2xl mb-3">AURA</p>
          <p className="text-sm text-aura-charcoal/60 max-w-[32ch]">
            Fragrance inspired by nature, designed around emotion.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-aura-charcoal/70">
          <Link to="/projects/aura#collection" className="hover:text-aura-charcoal transition-colors w-fit">
            Collection
          </Link>
          <Link to="/projects/aura#scent-finder" className="hover:text-aura-charcoal transition-colors w-fit">
            Scent Finder
          </Link>
          <Link to="/projects/aura#story" className="hover:text-aura-charcoal transition-colors w-fit">
            Story
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-sm text-aura-charcoal/70">
          <p className="text-aura-charcoal/40 text-xs uppercase tracking-wide mb-1">A portfolio case study</p>
          <Link to="/" className="hover:text-aura-charcoal transition-colors w-fit">
            ← Back to portfolio
          </Link>
        </div>
      </div>

      <div className="border-t border-aura-charcoal/10 py-6 text-center text-xs text-aura-charcoal/40">
        AURA is a fictional concept brand created for portfolio purposes.
      </div>
    </footer>
  )
}
