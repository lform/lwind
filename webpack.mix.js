let mix = require('laravel-mix');

// mix.sass('./scss/app.scss', 'src/app.prepost.css').postCss(
// 	'./src/app.prepost.css',
// 	'./dist/app.css',
// 	[require('tailwindcss')]
// );
//
// mix.minify('./dist/app.css');

mix.postCss('./css/app.css', './dist/app.css', [
	require('postcss-import'),
	//require('autoprefixer'),
	require('tailwindcss'),
]).minify('./dist/app.css');
