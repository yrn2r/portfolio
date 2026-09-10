import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { PRICE_TABLE } from '../data/fragrances'

export default function CartPage() {
  const { lines, removeLine, setQuantity, subtotal } = useCart()

  if (lines.length === 0) {
    return (
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-32 text-center">
        <p className="font-auraDisplay italic text-3xl mb-5">Your cart is empty.</p>
        <Link
          to="/projects/aura#collection"
          className="inline-flex text-sm tracking-wide border-b border-aura-charcoal pb-1 hover:opacity-70 transition-opacity"
        >
          Browse the collection
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-[900px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <h1 className="font-auraDisplay italic text-3xl md:text-4xl mb-12">Your Cart</h1>

      <div className="flex flex-col divide-y divide-aura-charcoal/10 border-y border-aura-charcoal/10">
        {lines.map((line) => (
          <div key={`${line.fragranceId}-${line.size}`} className="flex items-center justify-between py-6 gap-4">
            <div>
              <Link to={`/projects/aura/fragrance/${line.slug}`} className="font-auraDisplay italic text-xl hover:opacity-70 transition-opacity">
                {line.name}
              </Link>
              <p className="text-sm text-aura-charcoal/50 mt-1">{line.size}</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center border border-aura-charcoal/25 rounded-full">
                <button
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity(line.fragranceId, line.size, line.quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center text-aura-charcoal/70 hover:text-aura-charcoal"
                >
                  −
                </button>
                <span className="w-6 text-center text-sm">{line.quantity}</span>
                <button
                  aria-label="Increase quantity"
                  onClick={() => setQuantity(line.fragranceId, line.size, line.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center text-aura-charcoal/70 hover:text-aura-charcoal"
                >
                  +
                </button>
              </div>

              <p className="w-16 text-right text-sm">€{PRICE_TABLE[line.size] * line.quantity}</p>

              <button
                aria-label={`Remove ${line.name} ${line.size}`}
                onClick={() => removeLine(line.fragranceId, line.size)}
                className="text-aura-charcoal/40 hover:text-aura-charcoal transition-colors"
              >
                <X size={16} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-8 mb-10">
        <span className="text-aura-charcoal/60">Subtotal</span>
        <span className="font-auraDisplay italic text-2xl">€{subtotal}</span>
      </div>

      <Link
        to="/projects/aura/checkout"
        className="inline-flex items-center justify-center bg-aura-charcoal text-aura-ivory text-sm tracking-wide px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto"
      >
        Proceed to Checkout
      </Link>
    </div>
  )
}
