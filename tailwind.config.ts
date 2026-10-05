import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/error.vue',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#f2ead9',
          50: '#fbf8f2',
          100: '#f2ead9',
          200: '#e9dcc0',
          300: '#dcc79d',
        },
        ink: {
          DEFAULT: '#15130f',
          soft: '#3a362f',
        },
        accent: {
          DEFAULT: '#b6394a',
          soft: '#e3a9a0',
          deep: '#7d2431',
        },
      },
      fontFamily: {
        display: ['Anton', 'Arial Narrow', 'sans-serif'],
        condensed: ['"Bebas Neue"', 'Arial Narrow', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.06em',
        widest2: '0.28em',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
}
