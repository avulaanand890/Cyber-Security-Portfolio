/** @type {import('tailwindcss').Config} */

// Cyber-security palette. Existing utility classes (green-*, blue-*, purple-*,
// gray-* ...) are remapped here so the whole site re-themes from one place.
const neonTeal = {
  50: '#ecfffb',
  100: '#c9fff4',
  200: '#8dfbe8',
  300: '#52f7dc',
  400: '#19f5d0',
  500: '#10d9b6',
  600: '#0cb398',
  700: '#0a8c78',
  800: '#0a6b5f',
  900: '#073f39',
};

const cyan = {
  300: '#7ee6f7',
  400: '#38d5f0',
  500: '#0fb8d9',
  600: '#0a93b3',
  700: '#0a7590',
  900: '#073447',
};

const electric = {
  200: '#c4d8ff',
  300: '#9bbcff',
  400: '#6a9bff',
  500: '#4a7df0',
  600: '#3a62cc',
  700: '#2d4ba3',
  900: '#16224d',
};

const navy = {
  50: '#f1f6fc',
  100: '#e1ebf7',
  200: '#d6e4f5',
  300: '#b5c5dc',
  400: '#8aa0c0',
  500: '#5b7094',
  600: '#2a3f66',
  700: '#1b2c4d',
  800: '#0f1b30',
  900: '#0a1220',
  950: '#060d1a',
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains Mono"', 'ui-monospace', 'Cascadia Code', 'Consolas', 'monospace'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Cascadia Code', 'Consolas', 'monospace'],
      },
      colors: {
        black: '#050a14',
        green: neonTeal,
        emerald: neonTeal,
        teal: neonTeal,
        blue: cyan,
        sky: cyan,
        purple: electric,
        violet: electric,
        indigo: electric,
        pink: cyan,
        fuchsia: electric,
        gray: navy,
        slate: navy,
        zinc: navy,
      },
    },
  },
  plugins: [],
};
