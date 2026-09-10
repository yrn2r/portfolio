import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AuraHero from '../components/AuraHero'
import AuraIntro from '../components/AuraIntro'
import Collection from '../components/Collection'
import ScentFinder from '../components/ScentFinder'
import StorySection from '../components/StorySection'
import Reviews from '../components/Reviews'
import Newsletter from '../components/Newsletter'

export default function AuraHome() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    // Wait a tick so the section has mounted before scrolling to it.
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => clearTimeout(timer)
  }, [location.hash])

  return (
    <>
      <AuraHero />
      <AuraIntro />
      <Collection />
      <ScentFinder />
      <StorySection />
      <Reviews />
      <Newsletter />
    </>
  )
}
