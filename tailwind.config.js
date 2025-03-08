/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}', './lessons/**/*.{html,js}'],
	theme: {
		extend: {},
		colors: {
			primary: '#505053',
			secondary: '#7e7e7e',
			white: '#ffffff',
			black: '#000000',
			transparent: 'transparent',
			bg: '#323234',
			orange: {
				50: '#fefaec',
				100: '#fbf0ca',
				200: '#f6e091',
				300: '#f1cb58',
				400: '#eeb631',
				500: '#e7981b',
				600: '#cc7313',
				700: '#aa5213',
				800: '#8a4016',
				900: '#723615',
				950: '#411a07'
			},
			purple: {
				50: '#f6f6f9',
				100: '#ededf1',
				200: '#d6d6e1',
				300: '#b3b5c6',
				400: '#898ca7',
				500: '#6b6e8c',
				600: '#565873',
				700: '#46475e',
				800: '#3c3d50',
				900: '#363744',
				950: '#1d1d25'
			},
			green: {
				50: '#f2f8f1',
				100: '#e1eedd',
				200: '#c2ddbd',
				300: '#8dbf89',
				400: '#66a463',
				500: '#428841',
				600: '#2f6c30',
				700: '#265627',
				800: '#204522',
				900: '#1b391d',
				950: '#0e2010'
			},
			cinder: {
				50: '#f2f2fb',
				100: '#e8e8f7',
				200: '#d5d5f0',
				300: '#bebce5',
				400: '#a7a0d9',
				500: '#9488cc',
				600: '#8470bb',
				700: '#725ea4',
				800: '#5d4e85',
				900: '#4d446b',
				950: '#16131e'
			},
			red: {
				50: '#fff0f0',
				100: '#ffdddd',
				200: '#ffc0c0',
				300: '#ff9494',
				400: '#ff5757',
				500: '#ff2323',
				600: '#ff0000',
				700: '#d70000',
				800: '#b10303',
				900: '#920a0a',
				950: '#500000'
			},
			puce: {
				50: '#faf6f6',
				100: '#f6edef',
				200: '#eddee1',
				300: '#dfc2c9',
				400: '#cca0ab',
				500: '#b98090',
				600: '#9f5f74',
				700: '#844c60',
				800: '#6f4253',
				900: '#603b4a',
				950: '#341d26'
			},
			gray: {
				50: '#f4f6f7',
				100: '#e4e7e9',
				200: '#cbd1d6',
				300: '#a7b1b9',
				400: '#7c8994',
				500: '#616e79',
				600: '#535c67',
				700: '#474e57',
				800: '#3f444b',
				900: '#383c41',
				950: '#272a2f'
			},
			zinc: {
				50: '#f5f5f6',
				100: '#e6e6e7',
				200: '#cfcfd2',
				300: '#adadb3',
				400: '#84848c',
				500: '#71717a',
				600: '#5a5a60',
				700: '#4d4c52',
				800: '#434347',
				900: '#3c3b3e',
				950: '#252527'
			},
			slate: {
				50: '#f5f7fa',
				100: '#e9edf5',
				200: '#cedae9',
				300: '#a3bad6',
				400: '#7297be',
				500: '#5079a7',
				600: '#3e608b',
				700: '#334e71',
				800: '#2d435f',
				900: '#2a3a50',
				950: '#0e131b'
			},
			cayn: {
				50: '#f1fcfc',
				100: '#cef9f6',
				200: '#89efea',
				300: '#64e4e2',
				400: '#35c9cc',
				500: '#1cabb0',
				600: '#13878e',
				700: '#146b71',
				800: '#15545a',
				900: '#16464b',
				950: '#06282d'
			},
			kanagawa: {
				50: '#f6f6f9',
				100: '#ececf2',
				200: '#d5d6e2',
				300: '#b0b2c9',
				400: '#8689aa',
				500: '#676a90',
				600: '#525577',
				700: '#434461',
				800: '#3a3c52',
				900: '#343446',
				950: '#16161e'
			},
			woodsmoke: {
				50: '#f5f6f6',
				100: '#e4e8e9',
				200: '#ccd4d5',
				300: '#a9b5b7',
				400: '#7e9092',
				500: '#637577',
				600: '#556365',
				700: '#495255',
				800: '#40474a',
				900: '#393e40',
				950: '#191c1d'
			},
			intognito: {
				50: '#faf8fb',
				100: '#f5f0f7',
				200: '#ece1ed',
				300: '#dcc8df',
				400: '#c8a7cb',
				500: '#af83b2',
				600: '#926594',
				700: '#78517a',
				800: '#644464',
				900: '#5b405b',
				950: '#331f33'
			},
			pink: {
				50: '#fef2f4',
				100: '#fde6e9',
				200: '#fad1d8',
				300: '#f7bac5',
				400: '#ef7d93',
				500: '#e44f70',
				600: '#d02e5a',
				700: '#af214c',
				800: '#931e45',
				900: '#7e1d41',
				950: '#460b1f'
			}
		},
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			roboto: ['Roboto', 'sans-serif'],
			firaCode: ['Fira Code', 'monospace']
		}
	},
	plugins: []
}
