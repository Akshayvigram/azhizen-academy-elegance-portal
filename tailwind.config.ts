import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
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
				
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Updated color palette
				'dark-blue': {
					DEFAULT: '#03045E',
					50: '#f0f1ff',
					100: '#e3e6ff',
					200: '#ced3ff',
					300: '#acb6ff',
					400: '#8690ff',
					500: '#6066ff',
					600: '#4338ff',
					700: '#342aef',
					800: '#2822c7',
					900: '#03045E',
					950: '#020240'
				},
				'light-blue': {
					DEFAULT: '#00B4D8',
					50: '#f0fcff',
					100: '#e0f8ff',
					200: '#baf0ff',
					300: '#7ee6ff',
					400: '#39d9ff',
					500: '#00B4D8',
					600: '#0295ba',
					700: '#0a7795',
					800: '#10637b',
					900: '#125266',
					950: '#083545'
				},
				// Keep legacy colors for compatibility
				royal: {
					50: '#f8f7ff',
					100: '#f0eeff',
					200: '#e4ddff',
					300: '#d1c1ff',
					400: '#b895ff',
					500: '#9d5fff',
					600: '#8b3dff',
					700: '#7c2dff',
					800: '#6624d4',
					900: '#03045E',
					950: '#020240'
				},
				gold: {
					50: '#fffef7',
					100: '#fffbeb',
					200: '#fff4c7',
					300: '#ffe88f',
					400: '#00B4D8',
					500: '#00B4D8',
					600: '#0295ba',
					700: '#0a7795',
					800: '#10637b',
					900: '#125266',
					950: '#083545'
				},
				cream: {
					50: '#fefdfb',
					100: '#fdfaf5',
					200: '#faf4e6',
					300: '#f5e9cc',
					400: '#eed5a3',
					500: '#e4bc77',
					600: '#d49f4a',
					700: '#c1853a',
					800: '#9d6b32',
					900: '#7f582d',
					950: '#442f17'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(60px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'parallax': {
					'0%': {
						transform: 'translateY(0px)'
					},
					'100%': {
						transform: 'translateY(-50px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 1s ease-out',
				'fade-in-down': 'fade-in-down 1s ease-out',
				'fade-in-left': 'fade-in-left 1s ease-out',
				'fade-in-right': 'fade-in-right 1s ease-out',
				'scale-in': 'scale-in 0.8s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'parallax': 'parallax 1s ease-out'
			},
			fontFamily: {
				'serif': ['Poppins', 'sans-serif'],
				'sans': ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
