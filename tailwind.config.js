const em = (px) => `${px / 16}em`;
const rem = (px) => ({ [px]: `${px / 16}rem` });
const px = (num) => ({ [num]: `${num}px` });

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
			// Modular Scale Reference: https://www.modularscale.com/?16&px&1.125
			'-ms-3': rem(10),
			'-ms-2': rem(12),
			'-ms-1': rem(14),
			ms0: '1rem',
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
			primary: {
				light: '#333',
				DEFAULT: '#999',
				dark: '#ddd',
			},
			secondary: {
				light: '#333',
				DEFAULT: '#999',
				dark: '#ddd',
			},
			// tertiary: {
			// 	light: '#333',
			// 	DEFAULT: '#999',
			// 	dark: '#ddd',
			// },
			accent: {
				light: '#333',
				DEFAULT: '#999',
				dark: '#ddd',
			},
			gray: {
				100: '#1f2d3d',
				300: '#3c4858',
				DEFAULT: '#c0ccda',
				700: '#e0e6ed',
				900: '#f9fafc',
			},
			black: {
				trans: 'rgba(0,0,0,0.7)',
				DEFAULT: '#111',
			},
			white: '#fefefe',
			feedback: {
				success: '#6dcff6',
				warning: '#fdf0a9',
				error: '#f69679',
			},
			element: {
				input: '#fefefe',
				anchor: '#333',
				'anchor-light': '#333',
				'anchor-dark': '#333',
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
		},
	},
	variants: {
		extend: {},
	},
	// plugins: [require('./plugins/buttons')],
};
