/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
  ],
  daisyui: {
    themes: ['forest', 'pastel'],
    themeRoot: ':body'
  },
  darkMode: ['selector', '[data-theme="forest"]'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

