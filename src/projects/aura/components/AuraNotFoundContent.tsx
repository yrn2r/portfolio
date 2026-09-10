import { Link } from 'react-router-dom'

export default function AuraNotFoundContent({
  message = "This page doesn't exist within AURA.",
}: {
  message?: string
}) {
  return (
    <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-32 md:py-48 text-center">
      <p className="font-auraDisplay italic text-4xl md:text-5xl mb-5">Lost the scent.</p>
      <p className="text-aura-charcoal/60 mb-10 max-w-[40ch] mx-auto">{message}</p>
      <Link
        to="/projects/aura#collection"
        className="inline-flex text-sm tracking-wide border-b border-aura-charcoal pb-1 hover:opacity-70 transition-opacity"
      >
        Return to the collection
      </Link>
    </div>
  )
}
