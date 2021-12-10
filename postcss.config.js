module.exports = {
	parser: 'postcss-scss',
	plugins: [
		require('postcss-import'),
		require('precss'),
		require('postcss-rem'),
		require('tailwindcss'),
		require('autoprefixer'),
	],
};
