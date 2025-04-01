/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#1e3a8a", // A rich blue for highlights
          secondary: "#1e293b", // A dark blue-gray for backgrounds
          accent: "#2563eb", // A brighter blue for buttons and links
          neutral: "#1f2937", // A near-black color for sections
        },
      },
    },
    plugins: [],
  };

