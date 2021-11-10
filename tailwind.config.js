const em = (px) => `${px / 16}em`;
const rem = (px) => `${px / 16}rem`;
const px = (num) => `${num}px`;

module.exports = {
	purge: [],
	darkMode: false,
	theme: {
		fontFamily: {
			body: ['Roboto', 'Franklin Gothic Medium', 'Tahoma', 'sans-serif'],
			header: ['Oswald', 'Impact', 'Franklin Gothic Bold', 'sans-serif'],
			subheader: [
				'Oswald',
				'Impact',
				'Franklin Gothic Bold',
				'sans-serif',
			],
		},
		fontSize: {
			// The font-scaling system uses Modular Scale
			// Base is 16px with 1.125x scaling
			// Reference: https://www.modularscale.com/?16&px&1.125
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
		},
		// For reference
		// screens: {
		//   'sm': '640px',
		//   'md': '768px',
		//   'lg': '1024px',
		//   'xl': '1280px',
		//   '2xl': '1536px',
		// },
		colors: {
			// Primary, secondary, tertiary should have the main brand colors, then up-shade and down-shade
			primary: {
				light: '#333',
				DEFAULT: '#999',
				dark: '#ddd',
				fore: '#fff',
			},
			secondary: {
				light: '#333',
				DEFAULT: '#999',
				dark: '#ddd',
				fore: '#fff',
			},
			tertiary: {
				light: '#333',
				DEFAULT: '#999',
				dark: '#ddd',
				fore: '#fff',
			},
			// Accents should be added as numeric items
			accent: {
				1: '#333',
				2: '#999',
				3: '#ddd',
			},
			grey: {
				100: '#1f2d3d',
				300: '#3c4858',
				500: '#c0ccda',
				700: '#e0e6ed',
				900: '#f9fafc',
			},
			black: {
				transparent: 'rgba(0,0,0,0.7)',
				DEFAULT: '#111',
			},
			white: {
				transparent: 'rgba(255,255,255,0.7)',
				DEFAULT: '#fefefe',
			},
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
			},
		},
		container: (theme) => ({
			center: true,
			padding: theme('spacing.4'),
		}),
		extend: {
			spacing: {
				xs: '0.25rem',
				s: '0.5rem',
				m: '1rem',
				l: '2rem',
				xl: '4rem',
			},
			// Controls rich-text styling (tailwind typography plugin)
			typography: (theme) => ({
				DEFAULT: {
					css: {
						lineHeight: 1.5,
						a: {
							color: theme('colors.primary'),
						},
					},
				},
				sm: {
					css: {
						fontSize: rem(14),
						lineHeight: 1.5,
					},
				},
				lg: {
					css: {
						fontSize: rem(18),
						lineHeight: 1.5,
					},
				},
				xl: {
					css: {
						fontSize: rem(20),
						lineHeight: 1.5,
					},
				},
				'2xl': {
					css: {
						fontSize: rem(22),
						lineHeight: 1.5,
					},
				},
			}),
		},
	},
	// TODO Add plugins
	// TODO Add pre-css plugins
	plugins: [
		require('@tailwindcss/typography')({
			className: 'rich-text',
		}),
		require('@tailwindcss/forms'),
	],
};
