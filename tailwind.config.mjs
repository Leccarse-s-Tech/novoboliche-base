/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#121110',
          elevated: '#1C1A18',
        },
        mahogany: {
          DEFAULT: '#2B0C0E',
          deep: '#1D0708',
        },
        pin: {
          ivory: '#F5F0E6',
          card: '#EAE3D5',
          border: '#DCD4C4',
        },
        strike: {
          red: '#C9281D',
          hover: '#A91F16',
        },
        'pin-stripe': {
          orange: '#E04E22',
        },
        lane: {
          maple: '#D4A36A',
          gold: '#C59556',
        },
        whatsapp: {
          DEFAULT: '#1FA855',
          hover: '#198f48',
          dark: '#147038',
        },
        metallic: {
          border: '#383431',
          light: '#4E4945',
        },
        content: {
          onDark: '#F5F0E6',
          mutedDark: '#A8A096',
          onLight: '#181615',
          mutedLight: '#5C554E',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Syne', 'Impact', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'arcade-red': '4px 4px 0px #C9281D',
        'arcade-black': '4px 4px 0px #181615',
        'arcade-orange': '4px 4px 0px #E04E22',
        'arcade-dark': '4px 4px 0px #000000',
        'scoreboard': '0 8px 30px rgba(0, 0, 0, 0.4)',
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
    },
  },
  plugins: [],
};
