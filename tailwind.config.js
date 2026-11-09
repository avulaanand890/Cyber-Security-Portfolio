/** @type {import('tailwindcss').Config} */

// Neon-green-on-black cyber-security theme.
// Every colour family used across the site is remapped here, so the whole
// site re-themes from this one file (plus the CSS variables in src/index.css).
const neon = {
  50: '#eaffe6',
  100: '#d6ffd6', // off-white body text
  200: '#a9ff98',
  300: '#74ff5c',
  400: '#39ff14', // accent
  500: '#2bd60f',
  600: '#1faa0e', // dimmed green: borders / secondary text
  700: '#168009',
  800: '#0d5a06',
  900: '#073a04',
};

// Near-black panels with a green tint (used for the old "gray-*" classes).
const panel = {
  50: '#eaffe6',
  100: '#d6ffd6',
  200: '#b9f2b2',
  300: '#9fdc98', // readable secondary text
  400: '#7fbf79',
  500: '#5a9a55',
  600: '#2f6a2b',
  700: '#14401a',
  800: '#0b1a0b',
  900: '#060a06', // card panel
  950: '#020402',
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      colors: {
        black: '#000000',
        green: neon,
        emerald: neon,
        teal: neon,
        lime: neon,
        blue: neon,
        sky: neon,
        cyan: neon,
        purple: neon,
        violet: neon,
        indigo: neon,
        pink: neon,
        fuchsia: neon,
        red: neon,
        orange: neon,
        yellow: neon,
        amber: neon,
        rose: neon,
        gray: panel,
        slate: panel,
        zinc: panel,
        neutral: panel,
      },
    },
  },
  plugins: [],
};
