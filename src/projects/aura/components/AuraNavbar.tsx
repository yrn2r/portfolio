import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ShoppingBag, Menu, X } from 'lucide-react'
import AuthModal from './AuthModal'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

export default function AuraNavbar() {
  const { count } = useCart()
  const { user, signOut } = useAuth()
  const [authOpen, setAuthOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/projects/aura#collection', label: 'Collection' },
    { to: '/projects/aura#scent-finder', label: 'Scent Finder' },
    { to: '/projects/aura#story', label: 'Story' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-aura-ivory/90 backdrop-blur-sm border-b border-aura-charcoal/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-[11px] tracking-wide text-aura-charcoal/50 hover:text-aura-charcoal transition-colors"
        >
          <ArrowLeft size={13} strokeWidth={1.75} />
          Portfolio
        </Link>

        <Link
          to="/projects/aura"
          className="absolute left-1/2 -translate-x-1/2 font-auraDisplay italic text-xl tracking-wide text-aura-charcoal"
        >
          AURA
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] tracking-wide text-aura-charcoal/55 hover:text-aura-charcoal transition-colors"
            >
              {l.label}
            </Link>
          ))}
          {user ? (
            <button
              onClick={() => void signOut()}
              className="text-[12px] tracking-wide text-aura-charcoal/55 hover:text-aura-charcoal transition-colors"
            >
              Sign out
            </button>
          ) : (
            <button
              onClick={() => setAuthOpen(true)}
              className="text-[12px] tracking-wide text-aura-charcoal/55 hover:text-aura-charcoal transition-colors"
            >
              Account
            </button>
          )}
          <Link
            to="/projects/aura/cart"
            aria-label={`Cart, ${count} item${count === 1 ? '' : 's'}`}
            className="relative text-aura-charcoal/70 hover:text-aura-charcoal transition-colors"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] w-4 h-4 rounded-full bg-aura-charcoal text-aura-ivory flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
        </nav>

        <button
          className="md:hidden text-aura-charcoal"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-aura-charcoal/10 bg-aura-ivory px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-base text-aura-charcoal">
              {l.label}
            </Link>
          ))}
          {user ? (
            <button onClick={() => { setOpen(false); void signOut() }} className="text-base text-left text-aura-charcoal">
              Sign out
            </button>
          ) : (
            <button onClick={() => { setOpen(false); setAuthOpen(true) }} className="text-base text-left text-aura-charcoal">
              Account
            </button>
          )}
          <Link
            to="/projects/aura/cart"
            onClick={() => setOpen(false)}
            className="text-base text-aura-charcoal flex items-center gap-2"
          >
            <ShoppingBag size={16} strokeWidth={1.5} /> Cart {count > 0 ? `(${count})` : ''}
          </Link>
        </div>
      )}
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </header>
  )
}
