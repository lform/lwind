module.exports = {
	parser: 'postcss-scss',
	plugins: [
		require('postcss-import')({
			path: [
				'./node_modules/@lform/lwind/css',
				'./public/assets/tailwind/css',
			],
		}),
		require('precss'),
		require('postcss-rem'),
		require('tailwindcss'),
		require('autoprefixer'),
	],
};
