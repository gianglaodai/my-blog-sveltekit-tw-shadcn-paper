import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		'dark',
		{
			pattern: /text-(red|green|blue|sky|yellow|orange|teal|slate|gray)-(400|500|600|700|800|900)/
		},
		{
			pattern: /border-(red|green|blue|sky|yellow|orange|teal|slate|gray)-(400|500|600|700|800|900)/
		}
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					border: 'hsl(var(--primary-border) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					border: 'hsl(var(--secondary-border) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				success: {
					DEFAULT: 'hsl(var(--success) / <alpha-value>)',
					border: 'hsl(var(--success-border) / <alpha-value>)',
					foreground: 'hsl(var(--success-foreground) / <alpha-value>)'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning) / <alpha-value>)',
					border: 'hsl(var(--warning-border) / <alpha-value>)',
					foreground: 'hsl(var(--warning-foreground) / <alpha-value>)'
				},
				danger: {
					DEFAULT: 'hsl(var(--danger) / <alpha-value>)',
					border: 'hsl(var(--danger-border) / <alpha-value>)',
					foreground: 'hsl(var(--danger-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				paper: '225px 15px 225px 15px / 15px 225px 15px 225px',
				'paper-2': '125px 10px 20px 185px / 25px 205px 205px 25px',
				'paper-3': '15px 255px 15px 225px / 225px 15px 255px 15px',
				'paper-4': '15px 25px 115px 25px / 225px 150px 25px 115px',
				'paper-5': '250px 25px 15px 20px / 15px 80px 105px 115px',
				'paper-6': '28px 100px 20px 15px / 125px 30px 205px 225px'
			},
			fontFamily: {
				sans: [...fontFamily.sans],
				patrick: ['Patrick Hand', 'cursive'],
				body: ['Patrick Hand', 'cursive'],
				bodyCap: ['Patrick Hand SC', 'cursive']
			}
		}
	}
};

export default config;
