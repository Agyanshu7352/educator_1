/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a192f',
          navy: '#0f172a',
          primary: '#0ea5e9',
          secondary: '#06b6d4',
          accent: '#14b8a6',
          light: '#f8fafc',
          card: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        handwritten: ['var(--font-handwritten)', 'cursive'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.08)',
        float: '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
