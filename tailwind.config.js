/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle farthest-side at bottom left, #1FA911 37%, #2F15D0 71%, #091794 82%, #090426 100%)",
      },
    },
  },
  plugins: [],
};
