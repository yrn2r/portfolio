import { useInView } from 'framer-motion'
import { useRef } from 'react'

/** Triggers once when the element enters the viewport, used for restrained section reveals. */
export function useReveal(margin: string = '-80px') {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: margin as any })
  return { ref, inView }
}
