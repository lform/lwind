const em = (px) => `${px / 16}em`;
const rem = (px) => ({ [px]: `${px / 16}rem` });
const px = (num) => ({ [num]: `${num}px` });

module.exports = {
	purge: [],
	darkMode: false,
	theme: {
		fontFamily: {
			body: ['Roboto', 'sans-serif'],
			header: ['Oswald', 'sans-serif'],
			subheader: ['Oswald', 'sans-serif'],
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
				300: '#333',
				DEFAULT: '#999',
				700: '#ddd',
			},
			secondary: {
				300: '#333',
				DEFAULT: '#999',
				700: '#ddd',
			},
			tertiary: {
				300: '#333',
				DEFAULT: '#999',
				700: '#ddd',
			},
			accent: {
				1: '#fab',
				2: '#6f2',
				3: '#0ad',
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
			alert: {
				success: '#0f0',
				warning: '#ff0',
				error: '#f00',
			},
			anchor: {
				300: 'colors.brand-1-300',
				DEFAULT: 'colors.brand-1',
				700: 'colors.brand-1.700',
			},
			input: {
				DEFAULT: 'colors.brand-1.700',
			},
		},
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
	plugins: [require('./plugins/buttons')],
};
