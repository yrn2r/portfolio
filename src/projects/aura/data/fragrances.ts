export type Gender = 'unisex' | 'him' | 'her'

export interface FragranceNotes {
  top: string[]
  heart: string[]
  base: string[]
}

export interface FragranceReview {
  name: string
  quote: string
}

export interface FragranceAttributes {
  /** Used by the Scent Finder scoring system — not shown directly in the UI. */
  mood: string[] // fresh | warm | mysterious | soft | clean | bold
  atmosphere: string[] // forest | night | sunlight | desert | rain | fire
}

export interface Fragrance {
  id: string
  slug: string
  index: string
  name: string
  gender: Gender
  character: string
  concept: string
  notes: FragranceNotes
  season: string
  occasion: string
  longevity: number
  projection: number
  freshness: number
  feeling: string
  accent: string
  theme: string
  images: string[]
  reviews: FragranceReview[]
  attributes: FragranceAttributes
}

export const PRICE_TABLE: Record<'30ml' | '50ml' | '100ml', number> = {
  '30ml': 85,
  '50ml': 125,
  '100ml': 175,
}

export type Size = keyof typeof PRICE_TABLE

const img = (slug: string, n: number) => `/projects/aura/${slug}/${n.toString().padStart(2, '0')}.webp`

export const fragrances: Fragrance[] = [
  {
    id: 'verde',
    slug: 'verde',
    index: '01',
    name: 'VERDE',
    gender: 'unisex',
    character: 'Fresh · Green · Aquatic',
    concept: 'Rain, green leaves, fresh air and wet stone.',
    notes: {
      top: ['Bergamot', 'Lemon', 'Mint'],
      heart: ['Green Tea', 'Jasmine', 'Violet Leaf'],
      base: ['Cedar', 'Vetiver', 'Musk'],
    },
    season: 'Spring / Summer',
    occasion: 'Day / Everyday',
    longevity: 8,
    projection: 7,
    freshness: 9,
    feeling:
      'The air after rain. Cold stone beneath your feet. Green leaves moving in the wind. A moment where the world feels completely awake.',
    accent: '#3C4A3B',
    theme: 'forest',
    images: [img('verde', 1), img('verde', 2), img('verde', 3), img('verde', 4)],
    reviews: [
      { name: 'Aigerim K.', quote: 'The first spray reminds me of walking through a forest immediately after rain.' },
      { name: 'Daniel R.', quote: 'Understated and honest. It wears like weather, not like perfume.' },
    ],
    attributes: { mood: ['fresh', 'clean'], atmosphere: ['forest', 'rain'] },
  },
  {
    id: 'noir',
    slug: 'noir',
    index: '02',
    name: 'NOIR',
    gender: 'him',
    character: 'Woody · Spicy · Smoky',
    concept: 'Dark wood, smoke, leather and warm evening air.',
    notes: {
      top: ['Black Pepper', 'Cardamom', 'Bergamot'],
      heart: ['Cedar', 'Leather', 'Incense'],
      base: ['Sandalwood', 'Vetiver', 'Amber'],
    },
    season: 'Autumn / Winter',
    occasion: 'Evening',
    longevity: 9,
    projection: 8,
    freshness: 5,
    feeling:
      'A room lit by a single lamp. Leather, smoke, and the quiet weight of the evening settling in around you.',
    accent: '#211E1B',
    theme: 'night',
    images: [img('noir', 1), img('noir', 2), img('noir', 3), img('noir', 4)],
    reviews: [
      { name: 'Marat T.', quote: 'Confident without shouting. People notice it before they notice you.' },
      { name: 'Elena S.', quote: 'The smoke and leather stay just under the surface all evening.' },
    ],
    attributes: { mood: ['mysterious', 'bold'], atmosphere: ['night', 'fire'] },
  },
  {
    id: 'eclat',
    slug: 'eclat',
    index: '03',
    name: 'ÉCLAT',
    gender: 'her',
    character: 'Citrus · Floral · Bright',
    concept: 'Morning sunlight, white flowers and fresh citrus.',
    notes: {
      top: ['Bergamot', 'Mandarin', 'Neroli'],
      heart: ['Orange Blossom', 'Jasmine', 'Peony'],
      base: ['White Musk', 'Cedar', 'Soft Amber'],
    },
    season: 'Spring / Summer',
    occasion: 'Day',
    longevity: 7,
    projection: 6,
    freshness: 8,
    feeling:
      'Light through a half-open window. Citrus on the air, white flowers just opening. Nothing forced, everything bright.',
    accent: '#D8CBB4',
    theme: 'sunlight',
    images: [img('eclat', 1), img('eclat', 2), img('eclat', 3), img('eclat', 4)],
    reviews: [
      { name: 'Amina B.', quote: 'It smells like the first good morning of spring. Never heavy, always kind.' },
      { name: 'Sofia L.', quote: 'Bright without being sweet — rare for a citrus floral.' },
    ],
    attributes: { mood: ['soft', 'clean'], atmosphere: ['sunlight'] },
  },
  {
    id: 'sable',
    slug: 'sable',
    index: '04',
    name: 'SABLE',
    gender: 'unisex',
    character: 'Warm · Spicy · Mineral',
    concept: 'Dry heat, warm sand and distant spices.',
    notes: {
      top: ['Pink Pepper', 'Saffron', 'Bergamot'],
      heart: ['Iris', 'Clove', 'Dry Woods'],
      base: ['Amber', 'Suede', 'Sandalwood'],
    },
    season: 'Autumn / Winter',
    occasion: 'Evening',
    longevity: 9,
    projection: 8,
    freshness: 4,
    feeling:
      'Heat rising off open ground at dusk. Spice carried on dry wind, and the quiet of a landscape with nowhere to hide.',
    accent: '#B4834C',
    theme: 'desert',
    images: [img('sable', 1), img('sable', 2), img('sable', 3), img('sable', 4)],
    reviews: [
      { name: 'Yerlan D.', quote: 'Warm and dry, like the last hour of daylight in the desert.' },
      { name: 'Chloé M.', quote: 'Sits close to the skin. Spice without ever feeling loud.' },
    ],
    attributes: { mood: ['warm', 'bold'], atmosphere: ['desert', 'fire'] },
  },
  {
    id: 'luna',
    slug: 'luna',
    index: '05',
    name: 'LUNA',
    gender: 'her',
    character: 'Floral · Musky · Soft',
    concept: 'White flowers beneath a quiet night sky.',
    notes: {
      top: ['Pear', 'Bergamot'],
      heart: ['Jasmine', 'Tuberose', 'Iris'],
      base: ['White Musk', 'Vanilla', 'Sandalwood'],
    },
    season: 'Spring / Autumn',
    occasion: 'Evening',
    longevity: 8,
    projection: 7,
    freshness: 6,
    feeling:
      'A garden after dark. Flowers still warm from the day, the air gone quiet, the moon somewhere above the trees.',
    accent: '#B7B2C4',
    theme: 'night',
    images: [img('luna', 1), img('luna', 2), img('luna', 3), img('luna', 4)],
    reviews: [
      { name: 'Nazerke A.', quote: 'Soft but it lingers — the kind of scent people ask about the next day.' },
      { name: 'Julien F.', quote: 'Feels like moonlight, if moonlight had a smell.' },
    ],
    attributes: { mood: ['soft', 'mysterious'], atmosphere: ['night'] },
  },
  {
    id: 'ember',
    slug: 'ember',
    index: '06',
    name: 'EMBER',
    gender: 'him',
    character: 'Woody · Amber · Warm',
    concept: 'Warm skin, glowing wood and the final light of fire.',
    notes: {
      top: ['Black Pepper', 'Cinnamon', 'Bergamot'],
      heart: ['Cedar', 'Nutmeg', 'Leather'],
      base: ['Amber', 'Tonka Bean', 'Sandalwood'],
    },
    season: 'Autumn / Winter',
    occasion: 'Evening',
    longevity: 9,
    projection: 9,
    freshness: 3,
    feeling:
      'The last light of a dying fire. Warm skin, dry wood, and a stillness that asks nothing of you.',
    accent: '#5A4636',
    theme: 'fire',
    images: [img('ember', 1), img('ember', 2), img('ember', 3), img('ember', 4)],
    reviews: [
      { name: 'Timur B.', quote: 'The warmest thing I own. Perfect for the first cold week of the year.' },
      { name: 'Hana W.', quote: 'Amber and wood, done with real restraint. Nothing about it feels cheap.' },
    ],
    attributes: { mood: ['warm', 'bold'], atmosphere: ['fire', 'night'] },
  },
  {
    id: 'mist',
    slug: 'mist',
    index: '07',
    name: 'MIST',
    gender: 'unisex',
    character: 'Mineral · Aquatic · Clean',
    concept: 'Cold air, stone, water and open space.',
    notes: {
      top: ['Sea Salt', 'Bergamot', 'Green Notes'],
      heart: ['Mineral Accord', 'Iris', 'Tea'],
      base: ['Musk', 'Cedar', 'Ambergris Accord'],
    },
    season: 'Spring / Summer',
    occasion: 'Day',
    longevity: 7,
    projection: 6,
    freshness: 9,
    feeling:
      'Standing at the edge of cold water at first light. Salt in the air, stone underfoot, the whole day still ahead.',
    accent: '#AEB9B7',
    theme: 'rain',
    images: [img('mist', 1), img('mist', 2), img('mist', 3), img('mist', 4)],
    reviews: [
      { name: 'Aidana N.', quote: 'Cold and clean without ever feeling sterile. My go-to for hot days.' },
      { name: 'Leo P.', quote: 'Mineral, salty, quiet — it doesn\u2019t try to impress you, and that\u2019s the point.' },
    ],
    attributes: { mood: ['fresh', 'clean'], atmosphere: ['rain', 'forest'] },
  },
]

export function getFragranceBySlug(slug: string | undefined): Fragrance | undefined {
  return fragrances.find((f) => f.slug === slug)
}

export function getRelatedFragrances(current: Fragrance, count = 2): Fragrance[] {
  return fragrances.filter((f) => f.id !== current.id).slice(0, count)
}
