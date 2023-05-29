/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/react-tailwindcss-select/dist/index.esm.js",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    '50': '#EBECEC',
                    '100': '#C0C3C5',
                    '200': '#A2A5A9',
                    '500': '#B1B5BA',
                    'foundation-500': '#343C44',
                    'foundation-300': '#777C82',
                    '700': '#5C5E61',
                    '800': '#514E4E',
                },
                green: {
                    '50': '#E7F2EF',
                    '200': '#8FC3B5',
                    '300': '#5CA894',
                    '500': '#0B7D5F',
                    'foundation-500': '#12B76A',
                    '600': '#0A7256',
                },
                red: {
                    '50': '#FCEAEA',
                    '500': '#DE1B1B',
                    'foundation-500': '#F04438',
                },
                sky: {
                    'base': '#CDCFD0',
                    'standart': '#1BBDD4',
                    'light': '#E3E5E6',
                    'lightest': '#F7F9FA',
                    'dark': '#979C9E',
                },
                teal: {
                    '50': '#E8F5F3'
                },
                success: '#74B816'
            },
            fontSize: {
                '4xl': '34px',
            },
            fontWeight: {
                'semibold': '500',
                '600': '600',
            },
            fontFamily: {
                'display': 'Marcellus',
                'body': 'Lato',
                'nunito-sans': 'Nunito Sans',
                'open-sans' : 'Open Sans'
            },
        },
    },
    plugins: [],
};
