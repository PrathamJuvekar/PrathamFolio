// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "github-dark": "#0d1117",
        "github-black": "#010409",
        "github-deep": "#161b22",
        "github-panel": "#21262d",
        "github-gray": "#8b949e",
        "github-accent": "#2f81f7",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      theme: {
  extend: {
    backdropBlur: {
      xs: '2px',
    },
  },
},

    },
  },
  plugins: [],
};
