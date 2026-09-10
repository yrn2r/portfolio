type Variant = 'aura' | 'noir' | 'vertex'

/**
 * Abstract, subject-specific visual placeholders built purely in SVG —
 * used in place of real client photography for the concept projects.
 */
export default function ProjectVisual({ variant }: { variant: Variant }) {
  if (variant === 'aura') {
    return (
      <img
        src="/aura-cover.png"
        alt="AURA perfume collection"
        className="w-full h-full object-cover"
      />
    )
  }

  if (variant === 'noir') {
    return (
      <svg viewBox="0 0 480 360" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <rect width="480" height="360" fill="#181F38" />
        <circle cx="240" cy="180" r="95" fill="none" stroke="#F3F1EC" strokeOpacity="0.16" strokeWidth="14" />
        <circle cx="240" cy="180" r="95" fill="none" stroke="#2E4470" strokeOpacity="0.8" strokeWidth="3" strokeDasharray="12 10" />
        <circle cx="240" cy="180" r="46" fill="#12182A" stroke="#F3F1EC" strokeOpacity="0.25" />
        <text x="240" y="186" textAnchor="middle" fill="#F3F1EC" fillOpacity="0.4" fontSize="11" fontFamily="Space Grotesk, sans-serif">NOIR</text>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 480 360" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="480" height="360" fill="#181F38" />
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={60 + col * 51}
            cy={60 + row * 48}
            r={col === 3 && row === 2 ? 4.5 : 1.6}
            fill={col === 3 && row === 2 ? '#F3F1EC' : '#F3F1EC'}
            opacity={col === 3 && row === 2 ? 0.9 : 0.18}
          />
        )),
      )}
      <line x1="111" y1="60" x2="264" y2="156" stroke="#2E4470" strokeWidth="1" opacity="0.7" />
      <line x1="264" y1="156" x2="366" y2="108" stroke="#2E4470" strokeWidth="1" opacity="0.7" />
      <line x1="264" y1="156" x2="213" y2="252" stroke="#2E4470" strokeWidth="1" opacity="0.7" />
    </svg>
  )
}
