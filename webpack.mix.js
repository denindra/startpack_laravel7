const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    //  templates themes thesass
    .sass("resources/plugins/thesass/scss/page.scss", "public/css")
    .js("resources/plugins/thesass/js/src/page.js", "public/js")
    .browserSync("http://localhost:8000/");
