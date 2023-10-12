/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        tavern: {
          // colors
          "primary": "#0A0F06", 
          "secondary": "#464234", 
          "accent": "#090903",
          "neutral": "#1a1a1a",
          "base-100": "#413520",                 
          "info": "#464234",               
          "success": "#CAC6B5",                 
          "warning": "#7E6237",                 
          "error": "#20190C",
          // CSS Variables
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
          },
        },
      "forest",
      "garden",
      "halloween",
    ]
  },
  plugins: [require("daisyui")],
}

