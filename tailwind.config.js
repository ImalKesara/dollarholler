/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            sansSerif: ['Source Sans Pro'],
            mono: ['Source Code Pro'],
            handwriting: ['Kalam', 'cursive']
        },
        extend: {
            colors: {
                lavenderIndigo: '#8657e1',
                daisyBush: '#4714a5',
                goldenFizz: '#feff40',
                whisper: '#f9f4f9',
                pastelPurple: '#b2a1bb',
                purple: '#7209b7',
                robinEggBlue: '#00e9c0',
                blueGem: '#3813a0',
                caribbeanGreen: '#1CC6A0',
                scarlet: '#f72f45',
                monsoon: '#777878',
                silver: '#c0c0c0',
                gallery: '#efeaf2',
                prim: '#eae2ea',
                // caribbeanGreen: '#00ca9e',
                fog: '#decaec'
            },
            zIndex: {
                navBarToggle: 91,
                navBar: 90
            },
            boxShadow: {
                colored: '0px 7px 16px rgba(127,91,220,0.002)',
                coloredHover: '0px 16px 25px rgba(127,91,220,0.3)',
                tableShaodw: '0px 0px 6px rgba(0,0,0,0.16)'
            },
            gridTemplateColumns: {
                invoiceTab: '100px 100px 60px 1fr 116px 32px 32px'
            },
            borderWidth: {
                1: '1px'
            },

            backgroundImage: {
                arrowRight: "url('/images/arrow-right-up.svg')",
                arrowLeft: "url('/images/arrow-left-up.svg')",
                circle: "url('/images/circle.svg')"
            }
        }
    },
    plugins: []
};