/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
    	extend: {
    		width: {
    			'1/3-custom': 'calc(33.333% - 8px)',
    			'1/2-custom': 'calc(50% - 6px)',
					
    		},
				maxWidth: {
					'container-w': 'calc(100% - 3.5rem)'
				},
    		colors: {
    			white: '#FFFFFF',
    			gray: '#ABAEB6',
    			darkGray: '#2E2E2F',
					bgDark: '#0A0A0A',
    			darkAccentBlue: '#4422EF',
    			darkTextLink: '#7C8FFF',
    			darkAccentRed: '#FF4D00',
    			darkAccentGreen: '#BCFE2F',
    			darkTextMuted: '#707277',
    			darkBgPrimary: '#1D1C30',
    			lightBgPrimary: '#2A2942',
    			darkBgSecondary: '#1A1B1D',
					'violet':'rgb(149, 16, 165)',
    			bulletPrimary: '#C1CBDC',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		backgroundImage: {
    			'dark-gradient': 'linear-gradient(180deg, #141416 0%, #000000 100%)'
    		},
    		backgroundColor: {
    			'red-20': 'rgba(255, 77, 0, 0.2)',
    			'black-10': 'rgba(0, 0, 0, 0.1)',
    			'black-40': 'rgba(7, 7, 7, 0.4)',
    			'black7-30': 'rgba(7, 7, 7, 0.3)',
    			'black-30': 'rgba(14, 14, 14, 0.3)',
    			'black-40-alt': 'rgba(9, 9, 9, 0.4)',
    			'black-30-alt': 'rgba(4, 4, 4, 0.3)',
    			'black-40-cart': 'rgba(6, 5, 5, 0.4)',
    			'dark-gradient': 'linear-gradient(180deg, #141416 0%, #000000 100%)',
					'custom-gradient': 'linear-gradient(109.33% 196.79% at -16.9% 5%, #111111 0%, #381140 100%)'

    		},
    		fontFamily: {
    			jost: [
    				'Jost',
    				'sans-serif'
    			]
    		},
    	},
    	screens: {
    		sm: '320px',
				xs: '500px',
    		md: '768px',
    		lg: '1024px',
    		xl: '1280px',
				lp: '1440px',
    		'2xl': '1536px'
    	}
    },
	plugins: [require("tailwindcss-animate")],
}
