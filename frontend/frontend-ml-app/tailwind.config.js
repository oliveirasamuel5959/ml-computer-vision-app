/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#2563eb",
        "brand-strong": "#1e40af",
        "brand-medium": "#60a5fa",
      },
      borderRadius: {
        base: "8px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
