/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				'fade-in-down': {
					'0%': {
						scale: '1',
						transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
					},
					'100%': {
						scale: '0.75',
						transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
					}
				},
				'spin-new': {
					'0%': {
						transform: 'rotate(180deg)'
					},
					'25%': {
						transform: 'rotate(90deg)'
					},
					'50%': {
						transform: 'rotate(0deg)'
					},
					'75%': {
						transform: 'rotate(-90deg)'
					},
					'100%': {
						transform: 'rotate(-180deg)'
					}
				},
				'spin-new-reverse': {
					'0%': {
						transform: 'rotate(-90deg)'
					},
					'25%': {
						transform: 'rotate(0deg)'
					},
					'50%': {
						transform: 'rotate(90deg)'
					},
					'75%': {
						transform: 'rotate(180deg)'
					},
					'100%': {
						transform: 'rotate(270deg)'
					}
				},
				'spin-new-1': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'25%': {
						transform: 'rotate(-90deg)'
					},
					'50%': {
						transform: 'rotate(-180deg)'
					},
					'75%': {
						transform: 'rotate(-270deg)'
					},
					'100%': {
						transform: 'rotate(-360deg)'
					}
				},
				'spin-new-1-reverse': {
					'0%': {
						transform: 'rotate(90deg)'
					},
					'25%': {
						transform: 'rotate(180deg)'
					},
					'50%': {
						transform: 'rotate(270deg)'
					},
					'75%': {
						transform: 'rotate(360deg)'
					},
					'100%': {
						transform: 'rotate(450deg)'
					}
				}
			},
			animation: {
				'fade-in-down': 'fade-in-down 1s ease-out infinite',
				'spin-reverse': 'spin 1s linear infinite reverse',
				'spin-new': 'spin-new 2s  ease-in-out infinite',
				'spin-new-reverse': 'spin-new-reverse 2s  ease-in-out infinite',
				'spin-new-1': 'spin-new-1 2s ease-in-out infinite',
				'spin-new-1-reverse': 'spin-new-1-reverse 2s ease-in-out infinite'
			}
		}
	},
	plugins: []
};
