module.exports = {
	parser: 'postcss-scss',
	plugins: [
		require('postcss-import'),
		require('postcss-advanced-variables'),
		require('postcss-atroot'),
		require('postcss-extend-rule'),
		require('postcss-preset-env'),
		require('postcss-property-lookup'),
		require('postcss-rem'),
		require('tailwindcss/nesting'),
		require('tailwindcss'),
		require('autoprefixer'),
	],
};
