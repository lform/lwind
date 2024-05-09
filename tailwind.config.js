/* https://tailwindcss.com/docs/configuration */

const em = (px) => `${px / 16}em`;
const rem = (px) => `${px / 16}rem`;

module.exports = {
	content: ['./resources/views/**/*.{html,js,twig}'],
	theme: {
		fontFamily: {
			body: ['Barlow', 'Franklin Gothic Medium', 'Tahoma', 'sans-serif'],
			header: [
				'IBM Plex Sans',
				'Impact',
				'Franklin Gothic Bold',
				'sans-serif',
			],
			subheader: [
				'Oswald',
				'Impact',
				'Franklin Gothic Bold',
				'sans-serif',
			],
		},
		fontSize: {
			'-ms-3': rem(10),
			'-ms-2': rem(12),
			'-ms-1': rem(14),
			'ms-0': rem(16),
			'ms-1': rem(18),
			'ms-2': rem(20),
			'ms-3': rem(22),
			'ms-4': rem(25),
			'ms-5': rem(28),
			'ms-6': rem(32),
			'ms-7': rem(36),
			'ms-8': rem(41),
			'ms-9': rem(46),
			'ms-10': rem(52),
			'ms-11': rem(58),
			'ms-12': rem(65),
			'ms-13': rem(72),
		},
		colors: {
			// Primary, secondary, tertiary should have the main brand colors,
			// then up-shade and down-shade for the light and dark versions
			primary: {
				light: '#e52560',
				DEFAULT: '#a01b44',
				dark: '#710627',
				fg: '#fff',
			},
			secondary: {
				light: '#fdf0a9',
				DEFAULT: '#dbc764',
				dark: '#d0b635',
				fg: '#000',
			},
			tertiary: {
				light: '#d3356c',
				DEFAULT: '#a01b44',
				dark: '#710627',
				fg: '#fff',
			},
			// Accents should be added as numeric items
			accent: {
				1: '#333',
				2: '#999',
				3: '#ddd',
			},
			grey: {
				100: '#f1f1f1',
				300: '#d2d2d2',
				500: '#9a9a9a',
				700: '#5a5a5a',
				900: '#1a1818',
			},
			black: {
				transparent: 'rgba(0,0,0,0.7)',
				DEFAULT: '#1a1818',
			},
			white: {
				transparent: 'rgba(255,255,255,0.7)',
				DEFAULT: '#fefefe',
			},
			transparent: 'rgba(0,0,0,0)',
			feedback: {
				success: '#6dcff6',
				warning: '#fdf0a9',
				error: '#f69679',
			},
			social: {
				facebook: '#3b5998',
				flickr: '#ff0084',
				houzz: '#7ac142',
				instagram: '#833ab4',
				linkedin: '#0976b4',
				medium: 'rgba(0, 0, 0, 0.84)',
				pinterest: '#cc2127',
				rss: '#f26522',
				tumblr: '#35465c',
				twitter: '#55acee',
				youtube: '#b31217',
				vimeo: '#1ab7ea',
				yelp: '#f43939',
			},
			color: {
				link: '#a01b44',
				'field': '#E4EEF7',
				'field-required': '#F2EED6',
			},
		},
		containers: {
			sm: rem(640),
			md: rem(768),
			lg: rem(1024),
			xl: rem(1280),
			'2xl': rem(1536),
			'3xl': rem(1800),
			DEFAULT: rem(1536),
			padding: '1.5rem',
		},
		extend: {},
		richtext: ({ theme }) => ({
			spacing: {
				DEFAULT: '1rem',
				hr: '2rem',
				header: '2.5rem',
				gallery: '3rem',
				list: '1rem',
			},
			backgroundColors: {
				'table-td': 'inherit',
				'table-th': theme('colors.primary.DEFAULT'),
			},
			borderColors: {
				'table-td': theme('colors.grey.300'),
				'table-th': theme('colors.primary.light'),
			},
			colors: {
				base: theme('colors.grey.900'),
				bullet: theme('colors.primary.DEFAULT'),
				blockquote: theme('colors.grey.900'),
				link: theme('colors.primary.DEFAULT'),
				'table-td': theme('colors.grey.900'),
				'table-th': theme('colors.white.DEFAULT'),
			},
			fontFamily: {
				'table-td': theme('fontFamily.body'),
				'table-th': theme('fontFamily.subheader'),
			},
			fontSize: {
				base: rem(16),
				blockquote: rem(20),
				'heading-1': rem(36),
				'heading-2': rem(31),
				'heading-3': rem(28),
				'heading-4': rem(25),
				'heading-5': rem(22),
				'heading-6': rem(20),
				'table-td': rem(20),
				'table-th': rem(22),
			},
			fontWeight: {
				base: 400,
				blockquote: 700,
				bullet: 700,
				'heading-1': 700,
				'heading-2': 700,
				'heading-3': 700,
				'heading-4': 700,
				'heading-5': 700,
				'heading-6': 700,
				'table-td': 400,
				'table-th': 700,
			},
		}),
	},
	corePlugins: {
		container: false,
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
};
