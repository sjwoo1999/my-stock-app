/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#F9F5FF', // optional → 밝은 보라색 계열 (배경 쓸 때)
          primary: '#9333EA', // rgba(147, 51, 234, 1) → #9333EA
          dark: '#4B1C8C',   // optional → 진한 보라색 계열
        },
        surface: {
          base: '#FFFFFF',
          subtle: '#F4F4F4',
          overlay: 'rgba(255,255,255,0.4)',
        },
        text: {
          default: '#111',
          muted: '#666',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Pretendard"', 'sans-serif'],
        accent: ['"Gmarket Sans"', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '18px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 2px 6px rgba(0,0,0,0.06)',
        card: '0 6px 16px rgba(0,0,0,0.08)',
        inner: 'inset 0 1px 2px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
