<script>
	import { browser } from '$app/environment';
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
	let randomNumber = Math.floor(Math.random() * 10);
	let randomNumber2 = Math.floor(Math.random() * 10);

	setInterval(() => {
		randomNumber = Math.floor(Math.random() * 10);
	}, 2500);
	setInterval(() => {
		randomNumber2 = Math.floor(Math.random() * 10);
	}, 1000);

	let heartRate = -160;

	setInterval(() => {
		if (heartRate < 550) {
			heartRate = heartRate + 1;
		} else {
			setTimeout(() => {
				heartRate = -160;
			}, 10);
		}
	}, 1);
</script>

<!--  -->
<svelte:head>
	<title>Card - Heartbeat Animation</title>
	<meta name="title" content="Card - Heartbeat Animation" />
	<meta
		name="description"
		content="D_006: Card - Heartbeat Animation; Design: @JoshGuoSpace; Thank to you all for checking it out"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://daily-c.vercel.app/4" />
	<meta property="og:title" content="Card - Heartbeat Animation" />
	<meta
		property="og:description"
		content="D_006: Card - Heartbeat Animation; Design: @JoshGuoSpace; Thank to you all for checking it out"
	/>
	<meta
		property="og:image"
		content="https://pbs.twimg.com/card_img/1617099812784177153/elSCkZ8W?format=png&name=medium"
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://daily-c.vercel.app/4" />
	<meta property="twitter:title" content="Card - Heartbeat Animation" />
	<meta
		property="twitter:description"
		content="D_006: Card - Heartbeat Animation; Design: @JoshGuoSpace; Thank to you all for checking it out"
	/>
	<meta
		property="twitter:image"
		content="https://pbs.twimg.com/card_img/1617099812784177153/elSCkZ8W?format=png&name=medium"
	/>
	<!--  -->
	<script src="https://cdn.jsdelivr.net/npm/atropos@1.0.2/atropos.min.js"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/atropos@1.0.2/atropos.min.css" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/atropos@1.0.2/atropos.min.css" />
</svelte:head>
<!--  -->
<main class="w-scren h-screen bg-[#0A0A0A] grid place-items-center">
	<div
		class="atropos my-atropos lg:hover:scale-[1.1] transition-all duration-500 ease-in-out scale-[.6] hover:scale-[.75] lg:scale-100 relative z-30 group"
	>
		<!-- scale container (required) -->
		<div class="atropos-scale">
			<!-- rotate container (required) -->
			<div class="atropos-rotate">
				<!-- inner container (required) -->
				<div class="atropos-inner">
					<!-- put your custom content here -->
					<div
						class="grid place-items-center p-[1px] bg-gradient-to-br from-[#AAAAAA]/50 via-[#464646]/50 to-[#606060]/50 w-[400px] h-fit rounded-[16px] group-hover:from-[#AAAAAA] group-hover:via-[#464646] group-hover:to-[#606060] transition-all duration-500 ease-in-out"
					>
						<div
							class="w-full h-full bg-[#0A0A0A] rounded-[16px] flex flex-col items-center p-[16px]"
						>
							<p class="text-[12px] text-[#F4F4F4] h-[48px] grid place-items-center">
								Heart Rate Monitor
							</p>
							<div class="flex flex-row items-center">
								<div class="grid place-items-center w-[54px] h-[54px] translate-y-[5%]">
									<svg
										width="32"
										height="32"
										viewBox="0 0 32 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										class="animate-fade-in-down"
									>
										<mask
											id="mask0_1_11"
											style="mask-type:alpha"
											maskUnits="userSpaceOnUse"
											x="0"
											y="0"
											width="32"
											height="32"
										>
											<rect width="32" height="32" fill="#D9D9D9" />
										</mask>
										<g mask="url(#mask0_1_11)">
											<path
												d="M14.3667 25.6667L12.4667 23.9C10.0889 21.7444 7.97245 19.6276 6.11734 17.5493C4.26134 15.472 3.33334 13.2444 3.33334 10.8667C3.33334 8.97778 3.97245 7.39422 5.25068 6.116C6.52801 4.83867 8.11112 4.2 10 4.2C11.0667 4.2 12.128 4.44978 13.184 4.94933C14.2391 5.44978 15.1778 6.25556 16 7.36667C16.8222 6.25556 17.7613 5.44978 18.8173 4.94933C19.8725 4.44978 20.9333 4.2 22 4.2C23.8889 4.2 25.472 4.83867 26.7493 6.116C28.0276 7.39422 28.6667 8.97778 28.6667 10.8667C28.6667 13.2667 27.7222 15.5164 25.8333 17.616C23.9445 19.7164 21.8333 21.8222 19.5 23.9333L17.6333 25.6333C17.1667 26.0556 16.6222 26.2667 16 26.2667C15.3778 26.2667 14.8333 26.0667 14.3667 25.6667Z"
												fill="#DA1E28"
											/>
										</g>
									</svg>
								</div>
								<div class="flex flex-row items-center h-[54px] text-white">
									<div
										class="font-medium text-[36px] text-[#FFFFFF] flex flex-col h-[2.3ch] overflow-hidden"
									>
										<h1
											class={`${`-mt-[${
												randomNumber * 2.4
											}ch]`} transition-all duration-500 ease-in-out`}
										>
											1
										</h1>
										<h1>2</h1>
										<h1>3</h1>
										<h1>4</h1>
										<h1>5</h1>
										<h1>6</h1>
										<h1>7</h1>
										<h1>8</h1>
										<h1>9</h1>
										<h1>0</h1>
									</div>
									<div
										class="font-medium text-[36px] text-[#FFFFFF] flex flex-col h-[2.3ch] overflow-hidden"
									>
										<h1
											class={`${`-mt-[${
												randomNumber2 * 2.4
											}ch]`} transition-all duration-500 ease-in-out`}
										>
											1
										</h1>
										<h1>2</h1>
										<h1>3</h1>
										<h1>4</h1>
										<h1>5</h1>
										<h1>6</h1>
										<h1>7</h1>
										<h1>8</h1>
										<h1>9</h1>
										<h1>0</h1>
									</div>
									<p
										class="font-light text-[12px] text-[#FFFFFF] translate-x-[4px] translate-y-[50%]"
									>
										BPM
									</p>
								</div>
							</div>

							<svg
								width="327"
								height="112"
								viewBox="35 30 327 112"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="h-auto w-full "
							>
								<path
									opacity="0.25"
									d="M36.5 100.342H81.6488L85.5938 89.3836L89.1005 100.342H96.1139L101.374 45L105.319 125L109.264 100.342H114.524L119.784 74.589L124.168 108.562L128.989 100.342H179.398L183.782 89.3836L186.85 100.342H194.74L199.123 45L203.507 125L207.452 100.342H212.712L217.534 74.589L221.917 108.562L227.177 100.342H278.024L281.969 89.3836L285.038 100.342H292.489L297.311 45L300.818 125L305.201 100.342H310.461L315.721 74.589L320.543 108.562L325.365 100.342H363.5"
									stroke="#DA1E28"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<mask
									id="mask0_1_17"
									style="mask-type:alpha"
									maskUnits="userSpaceOnUse"
									x="35"
									y="44"
									width="330"
									height="82"
								>
									<path
										d="M36.5 100.342H81.6488L85.5938 89.3836L89.1005 100.342H96.1139L101.374 45L105.319 125L109.264 100.342H114.524L119.784 74.589L124.168 108.562L128.989 100.342H179.398L183.782 89.3836L186.85 100.342H194.74L199.123 45L203.507 125L207.452 100.342H212.712L217.534 74.589L221.917 108.562L227.177 100.342H278.024L281.969 89.3836L285.038 100.342H292.489L297.311 45L300.818 125L305.201 100.342H310.461L315.721 74.589L320.543 108.562L325.365 100.342H363.5"
										stroke="#A2191F"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</mask>
								<g mask="url(#mask0_1_17)">
									<rect x="0" width="352" height="169" fill="url(#paint0_linear_1_17)" />
								</g>
								<mask
									id="mask1_1_17"
									style="mask-type:alpha"
									maskUnits="userSpaceOnUse"
									x="35"
									y="44"
									width="330"
									height="82"
								>
									<path
										d="M36.5 100.342H81.6488L85.5938 89.3836L89.1005 100.342H96.1139L101.374 45L105.319 125L109.264 100.342H114.524L119.784 74.589L124.168 108.562L128.989 100.342H179.398L183.782 89.3836L186.85 100.342H194.74L199.123 45L203.507 125L207.452 100.342H212.712L217.534 74.589L221.917 108.562L227.177 100.342H278.024L281.969 89.3836L285.038 100.342H292.489L297.311 45L300.818 125L305.201 100.342H310.461L315.721 74.589L320.543 108.562L325.365 100.342H363.5"
										stroke="#A2191F"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</mask>
								<g mask="url(#mask1_1_17)">
									<rect x="0" width="352" height="169" fill="url(#paint1_linear_1_17)" />
								</g>
								<defs>
									<linearGradient
										id="paint0_linear_1_17"
										x1="187"
										y1="108.021"
										x2={heartRate}
										y2="108.021"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset="0.45" stop-color="#DA1E28" stop-opacity="0" />
										<stop offset="0.5" stop-color="#FF000C" />
										<stop offset="1" stop-color="#DA1E28" stop-opacity="0" />
									</linearGradient>
									<linearGradient
										id="paint1_linear_1_17"
										x1="187"
										y1="108.021"
										x2={heartRate}
										y2="108.021"
										gradientUnits="userSpaceOnUse"
									>
										<stop offset="0.45" stop-color="white" stop-opacity="0" />
										<stop offset="0.5" stop-color="white" stop-opacity=".5" />
										<stop offset="1" stop-color="white" stop-opacity="0" />
									</linearGradient>
								</defs>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
