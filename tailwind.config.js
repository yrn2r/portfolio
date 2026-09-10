/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#12182A',
          elevated: '#1A2340',
          line: 'rgba(243,241,236,0.08)',
          line2: 'rgba(243,241,236,0.14)',
        },
        accent: {
          DEFAULT: '#2E4470',
          soft: '#3A5488',
        },
        paper: {
          DEFAULT: '#F3F1EC',
          muted: '#9BA3B8',
          dim: '#6B7285',
        },
        // AURA project — scoped to src/projects/aura, does not affect portfolio tokens above.
        aura: {
          ivory: '#F5F1E8',
          paper: '#EFEAE0',
          charcoal: '#211E1B',
          black: '#111010',
          green: '#3C4A3B',
          mist: '#AEB9B7',
          stone: '#8C877C',
          beige: '#D8CBB4',
          brown: '#5A4636',
          amber: '#B4834C',
          lavender: '#B7B2C4',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
        // AURA-specific typography
        auraDisplay: ['"Instrument Serif"', 'Georgia', 'serif'],
        auraSans: ['"Manrope"', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
