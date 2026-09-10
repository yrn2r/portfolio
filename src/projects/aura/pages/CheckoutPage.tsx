import { useState, type FormEvent } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { PRICE_TABLE } from '../data/fragrances'

export default function CheckoutPage() {
  const { lines, subtotal, clear } = useCart()
  const [confirmed, setConfirmed] = useState(false)
  const [orderNumber] = useState(() => `AURA-${Math.floor(100000 + Math.random() * 900000)}`)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    clear()
    setConfirmed(true)
  }

  if (lines.length === 0 && !confirmed) {
    return <Navigate to="/projects/aura/cart" replace />
  }

  if (confirmed) {
    return (
      <div className="max-w-[640px] mx-auto px-6 md:px-10 py-32 text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs tracking-[0.15em] uppercase text-aura-charcoal/45 mb-4">Order confirmed</p>
          <h1 className="font-auraDisplay italic text-4xl mb-4">Thank you.</h1>
          <p className="text-aura-charcoal/60 mb-2">Order {orderNumber}</p>
          <p className="text-aura-charcoal/60 max-w-[42ch] mx-auto mb-10">
            This is a demonstration checkout — no payment was processed. In a live store, a confirmation would be on
            its way to your inbox right now.
          </p>
          <Link to="/projects/aura#collection" className="inline-flex text-sm tracking-wide border-b border-aura-charcoal pb-1 hover:opacity-70 transition-opacity">
            Continue browsing
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-[1000px] mx-auto px-6 md:px-10 py-16 md:py-24">
      <h1 className="font-auraDisplay italic text-3xl md:text-4xl mb-2">Checkout</h1>
      <p className="text-aura-charcoal/50 text-sm mb-12">Demonstration flow — no real payment is processed.</p>

      <div className="grid md:grid-cols-12 gap-12">
        <form onSubmit={handleSubmit} className="md:col-span-7 flex flex-col gap-10">
          <fieldset className="flex flex-col gap-4">
            <legend className="text-xs tracking-[0.15em] uppercase text-aura-charcoal/45 mb-2">Customer information</legend>
            <Field label="Full name" type="text" required />
            <Field label="Email" type="email" required />
          </fieldset>

          <fieldset className="flex flex-col gap-4">
            <legend className="text-xs tracking-[0.15em] uppercase text-aura-charcoal/45 mb-2">Shipping information</legend>
            <Field label="Address" type="text" required />
            <div className="grid grid-cols-2 gap-4">
              <Field label="City" type="text" required />
              <Field label="Postal code" type="text" required />
            </div>
            <Field label="Country" type="text" required />
          </fieldset>

          <fieldset className="flex flex-col gap-4">
            <legend className="text-xs tracking-[0.15em] uppercase text-aura-charcoal/45 mb-2">Payment</legend>
            <div className="border border-dashed border-aura-charcoal/25 rounded-sm p-5 text-sm text-aura-charcoal/50">
              Payment integration placeholder — this is a portfolio demonstration, not a connected payment provider.
            </div>
          </fieldset>

          <button
            type="submit"
            className="inline-flex items-center justify-center bg-aura-charcoal text-aura-ivory text-sm tracking-wide px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            Place order
          </button>
        </form>

        <aside className="md:col-span-5">
          <p className="text-xs tracking-[0.15em] uppercase text-aura-charcoal/45 mb-5">Order summary</p>
          <div className="flex flex-col divide-y divide-aura-charcoal/10 border-y border-aura-charcoal/10 mb-6">
            {lines.map((line) => (
              <div key={`${line.fragranceId}-${line.size}`} className="flex items-center justify-between py-4 text-sm">
                <span>
                  {line.name} <span className="text-aura-charcoal/45">· {line.size} × {line.quantity}</span>
                </span>
                <span>€{PRICE_TABLE[line.size] * line.quantity}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-aura-charcoal/60">Total</span>
            <span className="font-auraDisplay italic text-2xl">€{subtotal}</span>
          </div>
        </aside>
      </div>
    </div>
  )
}

function Field({ label, type, required }: { label: string; type: string; required?: boolean }) {
  const id = `checkout-${label.toLowerCase().replace(/\s+/g, '-')}`
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm text-aura-charcoal/60">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="border-b border-aura-charcoal/25 focus:border-aura-charcoal outline-none py-2 bg-transparent"
      />
    </div>
  )
}
