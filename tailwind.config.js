const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],
    colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
    },
    theme: {
        extend: {
            fontFamily: {
                body: [ 'Tanha' , 'sans-serif'],
                display: [ 'Tanha' , 'sans-serif'],
                sans: ['Tanha' ,'Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },


    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
