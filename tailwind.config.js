/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Roboto-Slab': ['Roboto-Slab'],
        'Open-sans': ['Open-sans'],
        'Roboto-condensed': ['Roboto-condensed'],
        'Open-sans-italic': ['Open-sans-italic']
      }
    },
    colors: {
      'white': '#FFFFFF',
      'x-dark-blue': '#142B47',
      'dark-blue': '#1B3A61',
      'blue': '#225089',
      'light-blue': '#3068AD',
      'ex-light-blue': '#0074C1',
      'blue-gray': '#93A4BD',
      'light-sky': '#35B0CB',
      'dark-sky': '#415A7B',
      'dark-yellow': '#8C6910',
      'light-yellow': '#D2B859',
      'red': '#E9261D',
      'fuchsia-light': '#F7F4ED',
      'fuchsia': '#F0EBDD',
      'black': '#000000',
      'black-3': '#333333',
      'black-6': '#666666',
      'black-75': '#757575',
      'black-c3': '#C3C3C3',
      'black-cc': '#CCCCCC',
      'black-E1': '#E1E5EA',
      'black-F3': '#F3F6F9',
      'white': 'white',
      'gray-1': '#F3F6F9',
    }
  },
  plugins: [],
}
