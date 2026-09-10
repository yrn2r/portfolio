import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import AuraNavbar from './AuraNavbar'
import AuraFooter from './AuraFooter'

export default function AuraLayout() {
  const location = useLocation()

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'AURA — Fragrance, Atmosphere, Emotion'
    return () => {
      document.title = previousTitle
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col font-auraSans text-aura-charcoal">
      <AuraNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <AuraFooter />
    </div>
  )
}
