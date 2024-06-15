// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add custom scrollbar styles
      scrollbar: ['webkit'],
    },
  },
  plugins: [
    // Enable scrollbar utilities
    require('tailwind-scrollbar'),
  ],
};
