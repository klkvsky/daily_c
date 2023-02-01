<script>
	import { browser } from '$app/environment';
	import { fade } from 'svelte/transition';

	let percent = 50;

	if (browser) {
		const slider = document.querySelector('.select-none');
		let deltaX = 0;

		slider?.addEventListener('mousemove', function (e) {
			if (slider?.matches(':active')) {
				updateSlider(e.clientX);
			}
		});

		slider.addEventListener('wheel', (e) => {
			deltaX += e.deltaX;
			//
			e.preventDefault();
			//

			const sliderRect = slider.getBoundingClientRect();
			const clientX = sliderRect.left + sliderRect.width / 2;

			if (deltaX > 100) {
				updateSlider(clientX + 100);
			} else if (deltaX < -100) {
				updateSlider(clientX + -100);
			} else {
				updateSlider(clientX + deltaX);
			}

			console.log(deltaX);
		});

		function updateSlider(clientX) {
			const sliderRect = slider.getBoundingClientRect();
			const percent2 = (clientX - sliderRect.left) / sliderRect.width;
			console.log(`Percent: ${percent2 * 100}%`);

			// if (slider?.classList.contains('active')) {
			// 	console.log('slider is active');
			// }

			percent = percent2 * 100;
		}
	}

	$: percent <= 1 && (percent = 0);
	$: percent > 98 && (percent = 100);
</script>

<main class="bg-[#1C1C1C] w-screen h-screen grid place-items-center text-white overflow-hidden">
	<div
		class="flex flex-row items-center py-[4px] px-[8px] group select-none scale-[1.3] cursor-ew-resize overflow-hidden"
	>
		<div
			class="w-10 h-10 grid place-items-center group-active:translate-x-[40px] z-20 relative scale-[0.75] transition-all duration-500 ease-in-out mix-blend-exclusion"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-6 h-6 overflow-visible"
				in:fade={{ duration: 500 }}
				out:fade={{ duration: 500 }}
			>
				<path
					d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 "
				/>
				{#if percent > 75}
					<path
						d="M 14 0 c 3.808 3.807 3.808 9.98 0 13.788 a 0.75 0.75 90 1 1 -1.06 -1.06 a 8.25 8.25 90 0 0 0 -11.668 a 0.75 0.75 90 0 1 1.06 -1.06 z"
						class="translate-x-[4px] translate-y-[1.5px] scale-150"
						in:fade={{ duration: 500 }}
						out:fade={{ duration: 500 }}
					/>
				{/if}
				{#if percent > 49}
					<path
						d="M13.5 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z"
						class="translate-x-[7px] translate-y-[5px]"
						in:fade={{ duration: 500 }}
						out:fade={{ duration: 500 }}
					/>
				{/if}
				{#if percent > 0}
					<path
						d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"
						in:fade={{ duration: 500 }}
						out:fade={{ duration: 500 }}
					/>
				{/if}
			</svg>
			<div
				class={`absolute w-[2px] h-[80%] bg-white -rotate-45 rounded-[8px] border-[0.4px] border-[#343434] transition-all duration-500 ease-in-out origin-top  -translate-x-[600%] translate-y-[13%] ${
					percent > 1 ? 'scale-y-0' : 'scale-y-100'
				}`}
			/>
		</div>

		<div
			class="bg-[#343434] w-[100px] h-[4px] rounded-[8px] will-change-transform group-active:w-[200px] group-active:h-[32px] transition-all duration-500 relative overflow-hidden"
		>
			{#key percent}
				<div
					class="bg-white h-full will-change-transform transition-all duration-1000 absolute top-0 left-0"
					style="width: {percent}%"
				/>
			{/key}
		</div>
	</div>
</main>
