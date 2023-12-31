import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        black: 'var(--black)',
        faded: 'var(--faded)',
        overlay: 'var(--overlay)',
        dark: 'var(--darkblue)'
      },
      
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
