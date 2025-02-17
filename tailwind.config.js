/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#017AFB',
        'secondary': '#F2F8FF',
        'black': '#121212',
        'light-black': '#605B57',

        'gray': '#757575',
        'light-gray': '#AFAFB4',
        'dark-gray': '#585858',

        'red': '#FE3A30',

        'purple': '#B95EDB',
        'light-purple': '#BB6BD9',
        'orange': '#FF8139',
        'light-orange': '#FF8139',
        'green': '#61AF3C',
        'light-green': '#8ED96B',
        'blue': '#2F5C9E',
        'light-blue': '#6B97D9',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '10': ['10px', {
          lineHeight: '12px',
        }],
        '12': ['12px', {
          lineHeight: '14.4px',
        }],
        '14': ['14px', {
          lineHeight: '19.1px',
        }],
        '16': ['16px', {
          lineHeight: '19.2px',
        }],
        '18': ['18px', {
          // lineHeight: '24.55px',
          lineHeight: '19.1px',
        }],
        '20': ['20px', {
          lineHeight: '24.55px',
        }],
        '24': ['24px', {
          lineHeight: '39.5px',
        }],
        '32': ['32px', {
          lineHeight: '38.4px',
        }],
        '36': ['36px', {
          lineHeight: '49.1px',
        }],
        '40': ['40px', {
          lineHeight: '48.76px',
        }],
        '48': ['48px', {
          lineHeight: '65px',
        }],
        '51': ['51px', {
          lineHeight: '45.74px',
        }],
        '63': ['63px', {
          lineHeight: '56px',
        }],
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
      },
      width: {
        "10v": "10vw",
        "20v": "20vw",
        "30v": "30vw",
        "40v": "40vw",
        "50v": "50vw",
        "60v": "60vw",
        "70v": "70vw",
        "80v": "80vw",
        "90v": "90vw",
      },
    },
    screens: {
      'phone-bg': '460px',
      // => @media (min-width: 460px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}

