<script>
	import { browser } from '$app/environment';
	import people from './people';

	let y = 0;
	if (browser) {
		window.addEventListener('scroll', () => {
			y = window.pageYOffset;
		});
	}

	const GRID_AREAS = 'abcdefgh';

	$: y >= 900 && (y = 900);
</script>

<div class="bg-neutral-100 w-screen h-[400vh] grid place-items-center">
	<div
		class="fixed top-[50%] left-[50%]"
		style={`transform: translate(-50%, -50%) rotate(${y / 2}deg) scale(${y / 1500 + 1}) ;`}
	>
		{#if people}
			<div class="grid gap-[20px] test">
				{#each people as person, index}
					<div
						class="w-full h-full relative "
						style={`grid-area: ${GRID_AREAS[index]}; overflow: hidden !important; border-radius: 5px !important; position: relative !important;`}
					>
						<div class="w-full h-full" style={`transform: rotate(-${y / 2}deg);`}>
							<video
								src={person.video}
								autoplay
								muted
								loop
								class="w-full h-full bg-red-500 object-cover scale-[2]"
							/>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.test {
		grid-template-areas:
			'. a a a a . . . .'
			'. a a a a b b . .'
			'. a a a a b b . .'
			'c c c d d d e e .'
			'c c c d d d e e .'
			'c c c d d d f f f'
			'. g g h h h f f f'
			'. g g h h h f f f'
			'. . . h h h . . .'
			'. . . h h h . . .';
	}
</style>
