import { useEffect, useState, type FormEvent } from 'react'
import { Star } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'
import AuthModal from './AuthModal'
import type { FragranceReview } from '../data/fragrances'

interface ReviewRow {
  id: string
  author_name: string
  quote: string
  rating: number
  created_at: string
}

export default function FragranceReviews({
  fragranceId,
  initialReviews,
}: {
  fragranceId: string
  initialReviews: FragranceReview[]
}) {
  const { user, configured } = useAuth()
  const [reviews, setReviews] = useState<ReviewRow[]>([])
  const [authOpen, setAuthOpen] = useState(false)
  const [quote, setQuote] = useState('')
  const [rating, setRating] = useState(5)
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!supabase) return
    supabase
      .from('reviews')
      .select('id, author_name, quote, rating, created_at')
      .eq('fragrance_id', fragranceId)
      .order('created_at', { ascending: false })
      .then(({ data }) => setReviews((data as ReviewRow[]) ?? []))
  }, [fragranceId])

  async function submitReview(e: FormEvent) {
    e.preventDefault()
    if (!user) {
      setAuthOpen(true)
      return
    }
    if (!supabase || !quote.trim()) return

    setBusy(true)
    setMessage('')
    const authorName =
      (user.user_metadata?.display_name as string | undefined)?.trim() ||
      user.email?.split('@')[0] ||
      'AURA guest'

    const { data, error } = await supabase
      .from('reviews')
      .insert({
        fragrance_id: fragranceId,
        user_id: user.id,
        author_name: authorName,
        quote: quote.trim(),
        rating,
      })
      .select('id, author_name, quote, rating, created_at')
      .single()

    if (error) {
      setMessage(error.message)
    } else if (data) {
      setReviews((current) => [data as ReviewRow, ...current])
      setQuote('')
      setRating(5)
      setMessage('Your review has been published.')
    }
    setBusy(false)
  }

  return (
    <section className="mt-16 border-t border-aura-charcoal/10 pt-10">
      <div className="flex items-end justify-between gap-5 mb-7">
        <div>
          <p className="text-xs tracking-[0.15em] uppercase text-aura-charcoal/45 mb-2">Reviews</p>
          <h2 className="font-auraDisplay italic text-2xl">Words from the atmosphere.</h2>
        </div>
        <button
          onClick={() => (user ? document.getElementById('aura-review-form')?.scrollIntoView({ behavior: 'smooth' }) : setAuthOpen(true))}
          className="shrink-0 rounded-full border border-aura-charcoal/25 px-4 py-2 text-xs tracking-wide hover:border-aura-charcoal transition-colors"
        >
          Write a review
        </button>
      </div>

      <div className="flex flex-col gap-6">
        {initialReviews.map((r) => (
          <div key={`${r.name}-${r.quote}`}>
            <div className="flex gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} fill={i < 5 ? 'currentColor' : 'none'} className="text-aura-charcoal/35" />
              ))}
            </div>
            <p className="italic mb-1">"{r.quote}"</p>
            <p className="text-sm text-aura-charcoal/45">{r.name}</p>
          </div>
        ))}

        {reviews.map((r) => (
          <div key={r.id}>
            <div className="flex gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} fill={i < r.rating ? 'currentColor' : 'none'} className="text-aura-charcoal/35" />
              ))}
            </div>
            <p className="italic mb-1">"{r.quote}"</p>
            <p className="text-sm text-aura-charcoal/45">
              {r.author_name} · {new Date(r.created_at).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>

      <div id="aura-review-form" className="mt-10 rounded-sm border border-aura-charcoal/10 p-6 md:p-8">
        {!user ? (
          <div>
            <p className="font-auraDisplay italic text-xl mb-2">Want to leave your mark?</p>
            <p className="text-sm text-aura-charcoal/55 mb-5">Create an AURA account or sign in to publish a review.</p>
            <button
              onClick={() => setAuthOpen(true)}
              className="rounded-full bg-aura-charcoal text-aura-ivory px-6 py-3 text-sm"
            >
              Sign in / Register
            </button>
          </div>
        ) : (
          <form onSubmit={submitReview}>
            <p className="font-auraDisplay italic text-xl mb-5">Share your experience.</p>

            <div className="mb-5">
              <p className="text-xs text-aura-charcoal/50 mb-2">Rating</p>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <button
                    type="button"
                    key={i}
                    aria-label={`${i + 1} stars`}
                    onClick={() => setRating(i + 1)}
                    className="p-1"
                  >
                    <Star size={18} fill={i < rating ? 'currentColor' : 'none'} className="text-aura-charcoal/60" />
                  </button>
                ))}
              </div>
            </div>

            <textarea
              required
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              maxLength={500}
              rows={4}
              placeholder="How does this fragrance feel to you?"
              className="w-full resize-none border-b border-aura-charcoal/20 bg-transparent py-3 outline-none focus:border-aura-charcoal"
            />

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-xs text-aura-charcoal/45">
                {message || `Signed in as ${user.email}`}
              </p>
              <button
                disabled={busy || !configured}
                className="rounded-full bg-aura-charcoal text-aura-ivory px-6 py-3 text-sm disabled:opacity-50"
              >
                {busy ? 'Publishing…' : 'Publish review'}
              </button>
            </div>
          </form>
        )}
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </section>
  )
}
