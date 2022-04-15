module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'heebo': ['Heebo', 'sans-serif']
      },
      colors: {
        'main': '#3f3fef',
        'secondary': '#94b8ff',
        'light': '#fffbf3',
        'dark': '#202028',
        'accent': '#ff6e5f',
      },
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
