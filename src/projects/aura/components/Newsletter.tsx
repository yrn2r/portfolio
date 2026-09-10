import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section className="border-t border-aura-charcoal/10 bg-aura-charcoal text-aura-ivory">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-2 gap-8 items-center">
        <h2 className="font-auraDisplay italic text-3xl md:text-4xl max-w-[16ch]">Enter the atmosphere.</h2>

        <div>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.p
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-aura-ivory/80"
              >
                You're on the list. Expect something worth opening.
              </motion.p>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <label htmlFor="aura-newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="aura-newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-transparent border-b border-aura-ivory/30 focus:border-aura-ivory outline-none py-2 text-aura-ivory placeholder:text-aura-ivory/40"
                />
                <button
                  type="submit"
                  className="text-sm tracking-wide border border-aura-ivory/40 hover:border-aura-ivory hover:bg-aura-ivory hover:text-aura-charcoal transition-colors px-6 py-2.5 rounded-full w-fit"
                >
                  Subscribe
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
