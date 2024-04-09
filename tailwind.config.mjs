/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        golden: {
          DEFAULT: "#fbbf24", // golden
        },

        blue: {
          DEFAULT: "#023047", // hard blue
          light: "#374151", // soft blue
          medium: "#202a37", // medium blue
        },

        orange: {
          DEFAULT: "#f69f41", // hard orange
          light: "#f9c378", // soft orange
        },

        /* GREY */
        grey: {
          100: "#FCFDFD",
          200: "#E5E5E5",
          300: "#BFBFBF",
          400: "#999999",
          DEFAULT: "#4D4D4D", // 900
        },

        black: "#121112",
        white: "#FFFFFF",
        border: "#374151",
      },

      textShadow: {
        sm: '0 3px 2px #ba00ff',
        lg: '0 5px 7px #ba00ff',
      },
    },
    minHeight: {
      '96': '24rem', // 384px
      '52': '13rem', // 208px
      '36': '9rem', // 144px
      'screen': '100vh', // 100vh
    },
    minWidth: {
      '96': '24rem', // 384px
      '32': '8rem', // 128px
      'screen': '100vw', // 100vw
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
