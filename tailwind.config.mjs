/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#fdfdfc',
          100: '#faf9f5',
          200: '#f4f3ed',
          300: '#e8e6dc',
        },
        brand: {
          yellow: '#facc15',
          amber: '#f59e0b',
          dark: '#18181b',
          subtle: '#71717a',
          coral: '#f43f5e',
        },
      },
      fontFamily: {
        display: ['Caprasimo', 'Fraunces', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'float': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      },
    },
  },
  plugins: [],
};
