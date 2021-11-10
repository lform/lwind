let mix = require('laravel-mix');

mix.webpackConfig({
	stats: {
		children: true,
	},
});

mix.postCss('./css/main.pcss', './dist/app.css', [
	require('postcss-import'),
	// require('autoprefixer'),
	require('tailwindcss'),
]).minify('./dist/app.css');
