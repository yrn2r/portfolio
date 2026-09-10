import { useRef, useState, type MouseEvent } from 'react'
import { AnimatePresence, motion, type PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import CinematicMedia from './CinematicMedia'

interface FragranceCarouselProps {
  images: string[]
  name: string
  slug: string
  accent: string
  className?: string
}

export default function FragranceCarousel({
  images,
  name,
  slug,
  accent,
  className = '',
}: FragranceCarouselProps) {
  const [index, setIndex] = useState(0)
  const dragging = useRef(false)

  function goTo(nextIndex: number, event?: MouseEvent) {
    event?.preventDefault()
    event?.stopPropagation()

    setIndex((nextIndex + images.length) % images.length)
  }

  function handleDragStart() {
    dragging.current = true
  }

  function handleDragEnd(_: unknown, info: PanInfo) {
    const threshold = 40

    if (info.offset.x < -threshold) {
      setIndex((current) => (current + 1) % images.length)
    } else if (info.offset.x > threshold) {
      setIndex((current) => (current - 1 + images.length) % images.length)
    }

    setTimeout(() => {
      dragging.current = false
    }, 50)
  }

  function handleImageClick(event: MouseEvent) {
    if (dragging.current) {
      event.preventDefault()
    }
  }

  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <Link
            key={index}
            to={`/projects/aura/fragrance/${slug}`}
            onClick={handleImageClick}
            className="absolute inset-0 block"
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.015 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 cursor-pointer"
            >
              <CinematicMedia
                image={images[index]}
                alt={`${name} — view ${index + 1}`}
                className="w-full h-full"
              />

              <span className="absolute top-4 right-4 rounded-full bg-aura-ivory/70 px-3 py-1.5 text-[10px] tracking-wide text-aura-charcoal backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Discover
              </span>
            </motion.div>
          </Link>
        </AnimatePresence>
      </div>

      <button
        type="button"
        aria-label="Previous image"
        onClick={(event) => goTo(index - 1, event)}
        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full items-center justify-center bg-aura-ivory/70 backdrop-blur-sm text-aura-charcoal opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <ChevronLeft size={16} strokeWidth={1.5} />
      </button>

      <button
        type="button"
        aria-label="Next image"
        onClick={(event) => goTo(index + 1, event)}
        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full items-center justify-center bg-aura-ivory/70 backdrop-blur-sm text-aura-charcoal opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <ChevronRight size={16} strokeWidth={1.5} />
      </button>

      <div
        className="absolute bottom-4 left-4 right-4 flex gap-1.5 z-10"
        role="tablist"
        aria-label={`${name} image ${index + 1} of ${images.length}`}
      >
        {images.map((_, imageIndex) => (
          <button
            key={imageIndex}
            type="button"
            role="tab"
            aria-selected={imageIndex === index}
            aria-label={`View image ${imageIndex + 1}`}
            onClick={(event) => goTo(imageIndex, event)}
            className="aura-progress flex-1"
          >
            <span
              className="aura-progress-fill block"
              style={{
                width: imageIndex <= index ? '100%' : '0%',
                background: accent,
              }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
