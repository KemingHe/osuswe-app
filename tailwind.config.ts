import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        // biome-ignore format: added alignment for clarity.
        osuswe: {
          "primary"          : "#d2cee0",
          "primary-content"  : "#5d5278",
          "secondary"        : "#746c94",
          "secondary-content": "#ffffff",
          "accent"           : "#dbc457",
          "accent-content"   : "#ffffff",
          "neutral"          : "#a9a9a9",
          "neutral-content"  : "#ffffff",
          "base-100"         : "#5d5278",
          "base-200"         : "#1f1b27",
          "base-300"         : "#3e3750",
          "base-content"     : "#ffffff",
          "info"             : "#68c4fe",
          "success"          : "#68fec4",
          "warning"          : "#fec468",
          "error"            : "#ff7a7a",

          "--rounded-box"    : "1rem",    // border radius rounded-box utility class, used in card and other large boxes.
          "--rounded-btn"    : "1rem",    // border radius rounded-btn utility class, used in buttons and similar element.
          "--rounded-badge"  : "1rem",    // border radius rounded-badge utility class, used in badges and similar.
          "--animation-btn"  : "0.25s",   // duration of animation when you click on button.
          "--animation-input": "0.2s",    // duration of animation for inputs like checkbox, toggle, radio, etc.
          "--btn-focus-scale": "0.95",    // scale transform of button when you focus on it.
          "--border-btn"     : "2px",     // border width of buttons.
          "--tab-border"     : "2px",     // border width of tabs.
          "--tab-radius"     : "1rem",    // border radius of tabs.
        },
      },
    ],
  },
} satisfies Config;
