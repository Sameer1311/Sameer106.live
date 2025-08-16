/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/ui/**/*.{js,ts,jsx,tsx}", // keep if needed
  ],
  theme: {
    extend: {
       backgroundImage: {
        'dot-grid': 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        pixelify: ["var(--font-pixelify-sans)"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
