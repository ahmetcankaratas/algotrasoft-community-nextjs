import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(217, 28%, 15%)',
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: 'hsl(219, 30%, 18%)',
        accentCyan: 'hsl(176, 68%, 64%)',
        darkCyan: 'hsl(161, 100%, 44%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'scanner-cover': "url('/images/peaks.svg')",
        'scanner-cover-light': "url('/images/light-peaks.svg')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
export default config
