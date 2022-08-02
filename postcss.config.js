module.exports = {
	parser: 'postcss-scss',
	plugins: [
		require('postcss-import')({
			path: ['./css', './node_modules/@lform/lwind/css'],
		}),
		require('postcss-extend-rule'),
		require('postcss-advanced-variables'),
		require('postcss-preset-env'),
		require('postcss-atroot'),
		require('postcss-property-lookup'),
		require('tailwindcss/nesting'),
		require('postcss-rem'),
		require('tailwindcss'),
		require('autoprefixer'),
	],
};
