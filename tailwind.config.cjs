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
				}
			},
			animation: {
				'fade-in-down': 'fade-in-down 1s ease-out infinite'
			}
		}
	},
	plugins: []
};
