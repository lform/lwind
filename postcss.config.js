module.exports = {
	parser: 'postcss-scss',
	plugins: [
		require('postcss-import')({
			path: ['./css', './node_modules/@lform/lwind/css'],
		}),
		require('precss'),
		require('postcss-rem'),
		require('tailwindcss'),
		require('autoprefixer'),
	],
};
