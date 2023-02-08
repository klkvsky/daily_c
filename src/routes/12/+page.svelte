<main class="w-screen h-screen bg-[#FFFF55] overflow-hidden p-[10px] grid place-items-center">
	<!-- <div class="fixed top-0 left-0 w-screen h-screen bg-white z-[60] mix-blend-color-burn" />
	<div class="fixed top-0 left-0 w-screen h-screen bg-black z-[50] mix-blend-color-burn" /> -->
	<div class="grid grid-cols-6 gap-[10px] w-fit place-items-center mx-auto">
		{#each Array(42) as item, i}
			<div class="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] bg-black rounded-full relative">
				<div
					class={`w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] absolute top-0 left-0  origin-bottom-right bg-[#FFFF55] ${
						Math.floor(i / 6) % 2 === 0
							? i % 2 === 0
								? ' animate-spin-new'
								: '  animate-spin-new-reverse'
							: i % 2 !== 0
							? '  animate-spin-new-1'
							: '  animate-spin-new-1-reverse'
					}`}
				/>
			</div>
		{/each}
	</div>
</main>
