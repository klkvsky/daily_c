<script>
	import { browser } from '$app/environment';

	const lettersAndNumbers = [...Array(26).keys()]
		.map((i) => String.fromCharCode(i + 65))
		.concat([...Array(26).keys()].map((i) => String.fromCharCode(i + 97)))
		.concat([...Array(10).keys()].map((i) => i.toString()));

	let isToggle = false;
	let isChanged = false;
	let iteration = -5;
	let password = [
		'O',
		' l ',
		'j',
		'T',
		'5',
		'v',
		'V',
		'a',
		'u',
		'6',
		'M',
		'3',
		'a',
		'd',
		'7',
		'x',
		'c',
		't',
		'j',
		'G',
		'A',
		'6',
		'T'
	];

	function generateNewPassword() {
		password = Array(23)
			.fill(0)
			.map(() => lettersAndNumbers[Math.floor(Math.random() * lettersAndNumbers.length)]);
	}

	if (browser) {
		setInterval(function () {
			if (iteration > 23) {
				return;
			}
			changeLetter();
			iteration++;
		}, 50);

		function changeLetter() {
			let spans = document.querySelectorAll('.password');

			if (spans) {
				spans.forEach((span, index) => {
					if (index < iteration) {
						span.innerText = password[index];
						return;
					}
					if (index > iteration + 10) {
						span.innerText = 'X';
						return;
					}
					span.innerText = lettersAndNumbers[Math.floor(Math.random() * lettersAndNumbers.length)];
				});
			}
		}
	}
</script>

<main class="w-screen h-screen grid place-items-center">
	<div class="flex flex-col gap-[6px] w-[400px]">
		<p class="text-[14px] font-medium">Secret Key</p>
		<div
			class="font-mono flex flex-row items-center bg-slate-100 pl-[12px] py-[8px] rounded-[6px] text-[14px] pr-[56px] w-full relative text-slate-900 h-[37px] overflow-hidden"
		>
			{#each Array(23) as _, i}
				{#if isChanged}
					<div class="relative">
						<!-- <div
							class="absolute transition-all duration-500 ease-in-out top-0 left-0 "
							style={`margin-top: ${iteration < i ? '-6ch' : '6ch'}`}
						>
							{password[i]}
						</div>
						<div
							class="absolute transition-all duration-500 ease-in-out top-0 left-0"
							style={`margin-top: ${iteration < i ? '-5ch' : '0'}; transform: scale(${
								!isToggle && 0.3
							}); font-weight: ${!isToggle ? 900 : 400}`}
						>
							{password[i]}
						</div>
						<div
							class="absolute transition-all duration-500 ease-in-out top-0 left-0 "
							style={`margin-top: ${iteration < i ? '-3ch' : '3ch'}`}
						>
							{password[i]}
						</div> -->
						<!-- <div
							class="password transition-all duration-500 ease-in-out"
							style={`transform: translateY(${iteration < i ? '0' : 'calc(100% + 10ch)'});`}
						> -->
						<div
							class="password transition-all duration-500 ease-in-out"
							style={`transform: scale(${!isToggle && 0.3}); font-weight: ${!isToggle ? 900 : 400}`}
						>
							{lettersAndNumbers[Math.floor(Math.random() * lettersAndNumbers.length)]}
						</div>
					</div>
				{:else}
					{#key isChanged}
						<span
							class="mr-[.2ch] text-slate-900 text-[8px] absolute top-[33%] -translate-y-[50%] left-[12px] w-[1.6ch] text-center transition-all duration-500 ease-in-out"
							style={`transform: translateX(calc(${i} * 1.75ch)) translateY(calc(${
								isToggle ? (i % 2 === 0 ? '1.5' : '-1.5') : '0'
							}px));`}
						>
							●
						</span>
					{/key}
				{/if}
			{/each}

			<button
				class="absolute top-[50%] right-[90.12px] bg-white grid place-items-center aspect-square rounded-[6px] h-[calc(100%-10px)] -translate-y-[50%] hover:bg-slate-300 transition-all duration-500 ease-in-out cursor-pointer shadow-sm active:scale-90"
				on:click={() => {
					isToggle = !isToggle;
					setTimeout(() => {
						isChanged = !isChanged;
						if (isChanged) iteration = -5;
					}, 300);
				}}
			>
				{#if !isChanged}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-4 h-4"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-4 h-4"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
				{/if}
			</button>
			<button
				class="absolute top-[50%] right-[5px] bg-white grid place-items-center rounded-[6px] h-[calc(100%-10px)] -translate-y-[50%] hover:bg-slate-300 transition-all duration-500 ease-in-out cursor-pointer shadow-sm px-[8px] font-sans text-[12px]"
				on:click={() => {
					isChanged = true;
					isToggle = true;
					iteration = -5;
					generateNewPassword();
				}}
			>
				Create new
			</button>
		</div>
	</div>
</main>
