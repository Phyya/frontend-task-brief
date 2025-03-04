import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7839EE',


        },
        secondary: {
          DEFAULT: '#FCFCFC',

        },
        tertiary: {
          DEFAULT: '#F5F5F5',

        },
        gray: {
          DEFAULT: '#737373',
          dark: "#292929",
          dark2: "#E5E5E5",

        },

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
