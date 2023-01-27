<script>
	import { browser } from '$app/environment';
	import { fly } from 'svelte/transition';
	//
	if (browser) {
		const myAtropos = Atropos({
			el: '.my-atropos',
			rotateXInvert: true,
			rotateYInvert: true,
			// shadow: true,
			shadowOffset: 50,
			shadowScale: 0.9,
			activeOffset: 0.01,
			highlight: true,
			rotateXMax: 10,
			rotateYMax: 10
		});
	}
	//
	let isRunning = false;
	let isFinished = false;

	$: if (isRunning) {
		setTimeout(() => {
			isRunning = false;
			isFinished = true;
		}, 5000);
	}
</script>

<!--  -->
<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/atropos@1.0.2/atropos.min.js"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/atropos@1.0.2/atropos.min.css" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/atropos@1.0.2/atropos.min.css" />
</svelte:head>
<!--  -->

<div
	class="atropos my-atropos lg:hover:scale-[2.1] transition-all duration-500 ease-in-out scale-[.6] hover:scale-[.75] lg:scale-[2]"
>
	<!-- scale container (required) -->
	<div class="atropos-scale">
		<!-- rotate container (required) -->
		<div class="atropos-rotate">
			<!-- inner container (required) -->
			<div class="atropos-inner rounded-[7px] overflow-hidden ">
				<!-- put your custom content here -->
				<button
					class={`w-[145px] h-[38px] grid place-items-center rounded-[7px] relative p-[1px] overflow-hidden transition-all duration-1000 ease-in-out special-button ${
						isFinished
							? 'shadow-[0_1px_8px_2px_rgba(255,255,255,0.25)]'
							: 'shadow-[0_1px_8px_2px_rgba(255,255,255,0.01)]'
					} ${isRunning ? 'before:opacity-100' : 'before:opacity-0'}`}
					on:click={() => {
						isRunning = true;
					}}
				>
					<div
						class="absolute top-0 left-0 w-full h-full z-0 transition-all duration-700"
						class:bg-white={isFinished}
					/>
					<div
						class="bg-[#533FD1] w-full h-full rounded-[7px] grid place-items-center relative z-10 overflow-hidden"
					>
						{#if isFinished}
							<p
								class="font-medium text-[14px] text-[#FFFFFF] text-center my-auto"
								in:fly={{ y: 100, duration: 2000, opacity: 0 }}
							>
								Saved
							</p>
						{:else}
							<p
								class="font-medium text-[14px] text-[#FFFFFF] text-center my-auto"
								out:fly={{ y: -20, duration: 700, opacity: 1 }}
							>
								Save and update
							</p>
						{/if}
					</div>
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.special-button::before {
		content: '';
		width: 150%; /* The upscaling allows the box to fill its container even when rotated */
		aspect-ratio: 1/1;
		position: absolute;
		bottom: -220%;
		left: -25%;
		transition: all 0.5s ease-in-out;
		background: conic-gradient(
			from 180deg at 50% 50.48%,
			#fff 0.28deg,
			rgba(0, 10, 53, 0) 106.33deg,
			rgba(0, 9, 47, 0) 179.09deg,
			#fff 150.91deg,
			rgba(0, 9, 47, 0) 179.09deg,
			rgba(0, 9, 47, 0) 179.09deg
		);

		animation: rotate-border 5s linear infinite;
	}

	@keyframes rotate-border {
		to {
			transform: rotate(-360deg);
		}
	}
</style>
