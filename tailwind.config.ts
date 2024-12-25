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
          "primary"          : "#746c94",
          "primary-content"  : "#ffffff",
          "secondary"        : "#5b5476",
          "secondary-content": "#ffffff",
          "accent"           : "#dbc457",
          "accent-content"   : "#ffffff",
          "neutral"          : "#a9a9a9",
          "neutral-content"  : "#ffffff",
          "base-100"         : "#ffffff",
          "base-200"         : "#fafafa",
          "base-300"         : "#d2cee0",
          "base-content"     : "#1f1b27",

          "--rounded-box"    : "0rem",    // border radius rounded-box utility class, used in card and other large boxes.
          "--rounded-btn"    : "0rem",    // border radius rounded-btn utility class, used in buttons and similar element.
          "--rounded-badge"  : "0rem",    // border radius rounded-badge utility class, used in badges and similar.
          "--animation-btn"  : "0.25s",   // duration of animation when you click on button.
          "--animation-input": "0.2s",    // duration of animation for inputs like checkbox, toggle, radio, etc.
          "--btn-focus-scale": "0.95",    // scale transform of button when you focus on it.
          "--border-btn"     : "2px",     // border width of buttons.
          "--tab-border"     : "2px",     // border width of tabs.
          "--tab-radius"     : "0rem",    // border radius of tabs.
        },
      },
    ],
  },
} satisfies Config;
