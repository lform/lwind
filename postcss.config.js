module.exports = {
	parser: 'postcss-scss',
	plugins: [
		require('postcss-import'),
		require('precss'),
		require('tailwindcss'),
		require('autoprefixer'),
	],
};
