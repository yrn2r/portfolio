import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { PRICE_TABLE, type Size } from '../data/fragrances'

const STORAGE_KEY = 'aura-cart'

export interface CartLine {
  fragranceId: string
  name: string
  slug: string
  size: Size
  quantity: number
}

interface CartContextValue {
  lines: CartLine[]
  addLine: (line: Omit<CartLine, 'quantity'>, quantity?: number) => void
  removeLine: (fragranceId: string, size: Size) => void
  setQuantity: (fragranceId: string, size: Size, quantity: number) => void
  clear: () => void
  subtotal: number
  count: number
}

const CartContext = createContext<CartContextValue | null>(null)

function readStoredCart(): CartLine[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(readStoredCart)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      // localStorage unavailable — cart simply won't persist across reloads.
    }
  }, [lines])

  function addLine(line: Omit<CartLine, 'quantity'>, quantity = 1) {
    setLines((prev) => {
      const existing = prev.find((l) => l.fragranceId === line.fragranceId && l.size === line.size)
      if (existing) {
        return prev.map((l) =>
          l.fragranceId === line.fragranceId && l.size === line.size
            ? { ...l, quantity: l.quantity + quantity }
            : l,
        )
      }
      return [...prev, { ...line, quantity }]
    })
  }

  function removeLine(fragranceId: string, size: Size) {
    setLines((prev) => prev.filter((l) => !(l.fragranceId === fragranceId && l.size === size)))
  }

  function setQuantity(fragranceId: string, size: Size, quantity: number) {
    if (quantity < 1) {
      removeLine(fragranceId, size)
      return
    }
    setLines((prev) =>
      prev.map((l) => (l.fragranceId === fragranceId && l.size === size ? { ...l, quantity } : l)),
    )
  }

  function clear() {
    setLines([])
  }

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + PRICE_TABLE[l.size] * l.quantity, 0),
    [lines],
  )
  const count = useMemo(() => lines.reduce((sum, l) => sum + l.quantity, 0), [lines])

  const value: CartContextValue = {
    lines,
    addLine,
    removeLine,
    setQuantity,
    clear,
    subtotal,
    count,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
