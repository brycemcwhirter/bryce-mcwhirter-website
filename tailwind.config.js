export default {
  content: ['./src/**/*.{html,js,svelte,ts,svx}'],

  theme: {
  extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            h1: {
              color: '#013D5A',
            },
                        h2: {
              color: '#013D5A',
            },
                        h3: {
              color: '#013D5A',
            },
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },

          },
        },
      },
    },
    colors:{
      'primaryBlue': '#013D5A',
      'primaryWhite': '#FCF3E3',
      'secondaryBlue': '#BDD3CE',
      'secondaryGreen': '#708c69',
      'secondaryOrange':'#F4A258'
    }
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
};
