<script>
	import { crossfade, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	let hoveredItem = 1;
	let isInField = false;

	const [send, receive] = crossfade({
		duration: 3000,
		easing: quintOut
	});
</script>

<main class="w-screen h-screen grid place-items-center">
	<div class="relative px-6 h-[280px]">
		<div
			class="flex flex-row items-center gap-2 text-base font-medium relative z-20"
			on:mouseover={() => {
				isInField = true;
			}}
			on:focus={() => {
				isInField = true;
			}}
			on:blur={() => {
				isInField = false;
			}}
			on:mouseout={() => {
				isInField = false;
			}}
		>
			<div
				class="absolute top-0 left-0 w-[73px] h-[36px] rounded-[20px] z-10 transition-all duration-300 ease-in-out"
				class:opacity-0={!isInField}
				class:translate-x-[75%]={hoveredItem === 2}
				class:w-[108px]={hoveredItem === 2}
				class:translate-x-[250%]={hoveredItem === 3}
				class:w-[78px]={hoveredItem === 3}
				class:bg-black={hoveredItem === 3}
				class:bg-white={hoveredItem === 2 || hoveredItem === 1}
			/>
			<p
				class="px-4 py-1.5 relative z-20 cursor-pointer select-none transition-all duration-300 ease-in-out"
				class:text-white={hoveredItem === 3 && isInField}
				on:mouseover={() => {
					hoveredItem = 1;
				}}
				on:focus={() => {
					hoveredItem = 1;
				}}
			>
				Login
			</p>
			<p
				class="px-4 py-1.5 relative z-20 cursor-pointer select-none transition-all duration-300 ease-in-out"
				class:text-white={hoveredItem === 3 && isInField}
				on:mouseover={() => {
					hoveredItem = 2;
				}}
				on:focus={() => {
					hoveredItem = 2;
				}}
			>
				Upcoming
			</p>
			<div
				class="flex flex-row items-center gap-2 px-4 py-1.5 relative z-20 cursor-pointer select-none transition-all duration-300 ease-in-out"
				class:text-white={hoveredItem === 3 && isInField}
				on:mouseover={() => {
					hoveredItem = 3;
				}}
				on:focus={() => {
					hoveredItem = 3;
				}}
			>
				<p>Live</p>
				<div class="bg-red-500 w-2 h-2 aspect-square rounded-full" />
			</div>
		</div>

		<div
			class={`absolute -top-4 left-0 w-full h-[280px] rounded-[40px] -z-10 flex flex-col transition-all duration-500 ease-in-out overflow-hidden before:w-full before:absolute before:top-0 before:left-0 before:h-[280px] before:bg-gradient-to-b before:from-[#b6bceb] before:to-[#D6D9F0] before:-z-10 bg-[#F2F5F6] before:opacity-${
				hoveredItem === 1 ? 0 : 1
			} before:transition-all before:duration-500 before:ease-in-out origin-top`}
			class:opacity-0={!isInField}
			class:scale-y-[0.8]={!isInField}
		/>
		<div
			class={`absolute -top-4 left-0 w-full h-[280px] rounded-[40px] z-10 flex flex-col transition-all duration-500 ease-in-out overflow-hidden`}
			class:opacity-0={!isInField}
		>
			{#if hoveredItem === 1}
				<div
					class="flex flex-col pt-16 px-6"
					in:send={{ key: hoveredItem === 1 }}
					out:receive={{ key: hoveredItem === 1 }}
				>
					<input
						type="email"
						class="bg-white rounded-[12px] text-lg px-4 py-2 font-medium"
						placeholder="Email"
						autocomplete="false"
						style={`
              transform: translateY(${hoveredItem === 1 && isInField ? 0 : -5}px);
              opacity: ${hoveredItem === 1 && isInField ? 1 : 0};
              transition: all 0.3s ease-in-out 0.1s;
            `}
					/>
					<input
						type="text"
						class="bg-white rounded-[12px] text-lg px-4 py-2 font-medium mt-2"
						placeholder="Password"
						autocomplete="false"
						style={`
              transform: translateY(${hoveredItem === 1 && isInField ? 0 : -10}px);
              opacity: ${hoveredItem === 1 && isInField ? 1 : 0};
              transition: all 0.3s ease-in-out 0.2s;
            `}
					/>
					<button
						class="text-center bg-black px-4 py-2.5 text-white mt-2 rounded-[12px] font-medium"
						style={`
              transform: translateY(${hoveredItem === 1 && isInField ? 0 : -15}px);
              opacity: ${hoveredItem === 1 && isInField ? 1 : 0};
              transition: all 0.3s ease-in-out 0.3s;
            `}
					>
						Sign in
					</button>
					<button
						class="text-center px-4 py-2 opacity-40 mt-2 rounded-[12px]"
						style={`
              transform: translateY(${hoveredItem === 1 && isInField ? 0 : -20}px);
              opacity: ${hoveredItem === 1 && isInField ? 1 : 0};
              transition: all 0.3s ease-in-out 0.4s;
            `}
					>
						Forgot password
					</button>
				</div>
			{:else if hoveredItem === 2}
				<div
					class="flex flex-col pt-16 px-6"
					in:send={{ key: hoveredItem === 2 }}
					out:receive={{ key: hoveredItem === 2 }}
				>
					<button
						class="bg-white px-4 py-2.5 text-black rounded-[12px] flex flex-row items-center "
						style={`
              transform: translateX(${hoveredItem === 2 && isInField ? 0 : -5}px);
              opacity: ${hoveredItem === 2 && isInField ? 1 : 0};
              transition: all 0.3s ease-in-out 0.05s;
            `}
					>
						<span class="font-medium"> Lightbath </span>
						<span class="ml-auto opacity-50"> 4:15 - 5:00 </span>
					</button>
					<button
						class="bg-white px-4 py-2.5 text-black mt-2 rounded-[12px] flex flex-row items-center "
						style={`
              transform: translateX(${hoveredItem === 2 && isInField ? 0 : -10}px);
              opacity: ${hoveredItem === 2 && isInField ? 1 : 0};
              transition: all 0.3s ease-in-out 0.1s;
            `}
					>
						<span class="font-medium"> Josiah Steinbrick </span>
						<span class="ml-auto opacity-50"> 5:30 - 6:30 </span>
					</button>
					<button
						class="bg-white px-4 py-2.5 text-black mt-2 rounded-[12px] flex flex-row items-center "
						style={`
              transform: translateX(${hoveredItem === 2 && isInField ? 0 : -15}px);
              opacity: ${hoveredItem === 2 && isInField ? 1 : 0};
              transition: all 0.3s ease-in-out 0.15s;
            `}
					>
						<span class="font-medium"> A.G. Cook </span>
						<span class="ml-auto opacity-50"> 7:15 - 8:30 </span>
					</button>
					<button
						class="text-center px-4 py-2 opacity-40 mt-2 rounded-[12px]"
						style={`
              transform: translateX(${hoveredItem === 2 && isInField ? 0 : -20}px);
              opacity: ${hoveredItem === 2 && isInField ? 1 : 0};
              transition: all 0.3s ease-in-out 0.2s;
            `}
					>
						View All
					</button>
				</div>
			{:else}
				<div
					class="flex flex-col pt-16 px-6 h-full pb-5"
					in:send={{ key: hoveredItem === 3 }}
					out:receive={{ key: hoveredItem === 3 }}
				>
					<!-- <video
						src="https://www.w3schools.com/html/mov_bbb.mp4"
						class="absolute top-0 left-0 z-0 w-[330px] h-[280px] object-cover"
						autoplay
						loop
						muted
					/> -->
					<button
						class="bg-black px-4 py-3 text-white mt-auto rounded-[16px] text-center relative z-10"
						style={`
              transform: translateX(${hoveredItem === 3 && isInField ? 0 : -10}px);
              opacity: ${hoveredItem === 3 && isInField ? 1 : 0};
              transition: all 0.4s ease-in-out 0.05s;
            `}
					>
						Watch Sam Gendel
					</button>
				</div>
			{/if}
			<iframe
				width="340"
				height="280"
				src="https://www.youtube.com/embed/yl9woQAZQhQ?controls=0&autoplay=1"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
				class={`absolute top-0 left-0 z-0 scale-[1.65] bg-red-500 opacity-${
					hoveredItem === 3 && isInField ? 1 : 0
				} transition-all duration-500 ease-in-out`}
				allowfullscreen
			/>
		</div>
	</div>
</main>

<style>
	.gradient {
		position: relative;
		background-image: linear-gradient(to right, hsl(211, 100%, 50%), hsl(179, 100%, 30%));
		z-index: 1;
	}

	.gradient::before {
		position: absolute;
		content: '';
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: linear-gradient(to bottom, #f2f5f6, #f2f5f6);
		z-index: -1;
		transition: opacity 0.5s linear;
		opacity: 0;
	}

	.gradient:hover::before {
		opacity: 1;
	}
</style>
