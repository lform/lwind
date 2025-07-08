module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-advanced-variables'),
		require('postcss-atroot'),
		require('postcss-extend-rule'),
		require('tailwindcss/nesting'),
		require('tailwindcss'),
		require('autoprefixer'),
	],
};
