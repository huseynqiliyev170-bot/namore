module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f8f6f1",
        ink: "#111111",
        gold: "#c8a96a",
        sand: "#e8dcc8",
        mist: "#ffffffcc",
      },
      fontFamily: {
        editorial: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 24px 80px rgba(17,17,17,0.10)",
        glow: "0 0 60px rgba(200,169,106,0.22)",
      },
    },
  },
  plugins: [],
};