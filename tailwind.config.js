import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29c26f',
      },
    },
    colors: {
      primary: {
        400: '#cbbde5',
        500: '#5C546B',
        600: '#CDBCEB',
        700: '#000',
        800:"#45E9E9",
        900:"#0000FF"
      },
      grayscale: {
        50: '#ffffff',
        100: '#efefef',
        200: '#FDFDFF',
        950: '#16161b',
    
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
