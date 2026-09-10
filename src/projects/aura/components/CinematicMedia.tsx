import { useState } from 'react'

interface CinematicMediaProps {
  /** Image src, or poster image if a video src is also provided. */
  image?: string
  video?: string
  alt: string
  className?: string
  objectPosition?: string
  overlay?: 'none' | 'soft' | 'strong'
  priority?: boolean
}

/**
 * Reusable media surface used across the hero, fragrance cards and product pages.
 * Gracefully falls back to a generated placeholder when an asset is missing,
 * so the interface never breaks even before real photography/video exists.
 */
export default function CinematicMedia({
  image,
  video,
  alt,
  className = '',
  objectPosition = 'center',
  overlay = 'none',
  priority = false,
}: CinematicMediaProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  const showVideo = Boolean(video) && !videoFailed
  const showImage = Boolean(image) && !imageFailed && !showVideo
  const showPlaceholder = !showVideo && !showImage

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {showVideo && (
        <video
          className="w-full h-full object-cover"
          style={{ objectPosition }}
          poster={image}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
        >
          <source src={video} />
        </video>
      )}

      {showImage && (
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ objectPosition }}
          loading={priority ? 'eager' : 'lazy'}
          onError={() => setImageFailed(true)}
        />
      )}

      {showPlaceholder && (
        <div
          role="img"
          aria-label={alt}
          className="w-full h-full flex items-center justify-center bg-gradient-to-br from-aura-stone/30 to-aura-charcoal/20"
        >
          <span className="font-auraDisplay italic text-aura-charcoal/40 text-sm">{alt}</span>
        </div>
      )}

      {overlay !== 'none' && (
        <div
          className={`absolute inset-0 pointer-events-none ${
            overlay === 'soft'
              ? 'bg-gradient-to-t from-black/35 via-black/0 to-black/0'
              : 'bg-gradient-to-t from-black/60 via-black/10 to-black/0'
          }`}
        />
      )}
    </div>
  )
}
