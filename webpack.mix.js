let mix = require('laravel-mix');

mix.sass('./scss/app.scss', 'src/app.prepost.css').postCss(
	'./src/app.prepost.css',
	'./dist/app.css',
	[require('tailwindcss')]
);

mix.minify('./dist/app.css');
