import { useEffect, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

interface Props {
  open: boolean
  onClose: () => void
}

export default function AuthModal({ open, onClose }: Props) {
  const { signIn, signUp, configured } = useAuth()
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [message, setMessage] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (!open) return
    setMessage('')
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  function switchMode(next: 'signin' | 'signup') {
    setMode(next)
    setMessage('')
  }

  async function submit(e: FormEvent) {
    e.preventDefault()
    setMessage('')
    setBusy(true)

    if (mode === 'signin') {
      const { error } = await signIn(email.trim(), password)
      if (error) setMessage(error.message)
      else onClose()
    } else {
      if (!displayName.trim()) {
        setMessage('Please enter your name.')
      } else if (password.length < 6) {
        setMessage('Password must be at least 6 characters.')
      } else {
        const { error, needsConfirmation } = await signUp(email.trim(), password, displayName)
        if (error) setMessage(error.message)
        else if (needsConfirmation) setMessage('Account created. Check your email to confirm your address, then sign in.')
        else onClose()
      }
    }

    setBusy(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-aura-charcoal/45 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="AURA account"
            className="relative w-full max-w-md rounded-sm bg-aura-ivory p-7 md:p-9 shadow-2xl"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
          >
            <button onClick={onClose} aria-label="Close" className="absolute right-5 top-5 text-aura-charcoal/50 hover:text-aura-charcoal">
              <X size={18} strokeWidth={1.5} />
            </button>

            <p className="text-xs tracking-[0.15em] uppercase text-aura-charcoal/45 mb-3">AURA</p>
            <h2 className="font-auraDisplay italic text-3xl mb-7">
              {mode === 'signin' ? 'Welcome back.' : 'Join the house.'}
            </h2>

            {!configured ? (
              <p className="text-sm text-aura-charcoal/65 leading-relaxed">
                Authentication is ready in the interface, but Supabase still needs to be connected. Add the variables from
                <code className="mx-1">.env.local</code> after creating the project.
              </p>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                {mode === 'signup' && (
                  <label className="block">
                    <span className="text-xs text-aura-charcoal/50">Name</span>
                    <input
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="mt-2 w-full border-b border-aura-charcoal/20 bg-transparent py-2 outline-none focus:border-aura-charcoal"
                      autoComplete="name"
                    />
                  </label>
                )}

                <label className="block">
                  <span className="text-xs text-aura-charcoal/50">Email</span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full border-b border-aura-charcoal/20 bg-transparent py-2 outline-none focus:border-aura-charcoal"
                    autoComplete="email"
                  />
                </label>

                <label className="block">
                  <span className="text-xs text-aura-charcoal/50">Password</span>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 w-full border-b border-aura-charcoal/20 bg-transparent py-2 outline-none focus:border-aura-charcoal"
                    autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                  />
                </label>

                {message && <p className="text-sm text-aura-charcoal/65 leading-relaxed">{message}</p>}

                <button
                  disabled={busy}
                  className="w-full rounded-full bg-aura-charcoal px-6 py-3 text-sm text-aura-ivory disabled:opacity-50"
                >
                  {busy ? 'Please wait…' : mode === 'signin' ? 'Sign in' : 'Create account'}
                </button>
              </form>
            )}

            <div className="mt-6 text-center text-sm text-aura-charcoal/50">
              {mode === 'signin' ? (
                <>
                  New here?{' '}
                  <button onClick={() => switchMode('signup')} className="text-aura-charcoal underline underline-offset-4">
                    Create an account
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <button onClick={() => switchMode('signin')} className="text-aura-charcoal underline underline-offset-4">
                    Sign in
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
