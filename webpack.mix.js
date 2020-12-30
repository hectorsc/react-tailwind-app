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

mix.react("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .postCss("resources/css/app.css", "public/css", [
        require("postcss-import"),
        require("tailwindcss")
    ])
    .webpackConfig(require("./webpack.config"));

mix.browserSync("127.0.0.1:8000");
