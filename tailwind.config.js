/** @type {import('tailwindcss').Config} */
export default {
  content: [
  
    './src/**/*.{html,js,svelte,ts}'
    
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
  },
  plugins: [],
}
}
