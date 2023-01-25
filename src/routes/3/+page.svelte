<script>
	// @ts-nocheck
	import { browser } from '$app/environment';
	if (browser) {
		const myAtropos = Atropos({
			el: '.my-atropos',
			rotateXInvert: true,
			rotateYInvert: true,
			shadow: true,
			shadowOffset: 50,
			shadowScale: 0.9,
			activeOffset: 0.01,
			rotateXMax: 10,
			rotateYMax: 10
		});
	}
	//
	let typedText = '';
	let status = 'idle';
</script>

<svelte:head>
	<title>Card - Product Feature</title>
	<meta name="title" content="Modal - Delete Space" />
	<meta
		name="description"
		content="D_005: Modal - Delete Space; Design: @predragus; Thank to you all for checking it out"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://daily-c.vercel.app/3" />
	<meta property="og:title" content="Modal - Delete Space" />
	<meta
		property="og:description"
		content="D_005: Modal - Delete Space; Design: @predragus; Thank to you all for checking it out"
	/>
	<meta
		property="og:image"
		content="https://pbs.twimg.com/media/FnPhPxSacAEOmgH?format=jpg&name=4096x4096"
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://daily-c.vercel.app/3" />
	<meta property="twitter:title" content="Modal - Delete Space" />
	<meta
		property="twitter:description"
		content="D_005: Modal - Delete Space; Design: @predragus; Thank to you all for checking it out"
	/>
	<meta
		property="twitter:image"
		content="https://pbs.twimg.com/media/FnPhPxSacAEOmgH?format=jpg&name=4096x4096"
	/>
	<!--  -->
	<script src="https://cdn.jsdelivr.net/npm/atropos@1.0.2/atropos.min.js"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/atropos@1.0.2/atropos.min.css" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/atropos@1.0.2/atropos.min.css" />
</svelte:head>

<div class="fixed top-[64px] left-[64px] w-screen h-screen text-[#4C5155] z-0">
	<h1 class="font-medium text-[32px]">Be best yourself you can be!</h1>
	<p class="text-[20px]">This is easier said than done, obviously. But I’ll give my best!</p>
</div>
<div
	class={`fixed top-0 left-0 w-screen h-screen bg-[#FFFFFF0A] backdrop-blur-[10px] z-10 transition-all duration-500 ease-in-out ${
		status === 'deleted' || status === 'candeled' ? 'pointer-events-none opacity-0' : ''
	}`}
/>
<img
	src="https://s3-alpha-sig.figma.com/img/fe31/918b/1652ce428bd245c8d5a10570494021c0?Expires=1675641600&Signature=Ev09voe8WxwRTLrQNiZX9L3omV9rRMV66HAjgNgu5B0DQgTaG~S~UoexDrzJ0A1yOk9FELHxSOUYeQGaw32duegQQz81iqrQ9zePatuZZUeg1OjzZZVpTKrY4TaRk8jabWoEmNqz3PBxjuMG5mQCDVwLp0fsFIlEAQekHPXxOy3V~zME526sPpkEJ7OZc8Y9wbosxEDMd~ylm5er7g0VEodIbzlO2Fphc2-fLGTyc9DIUTNacXXrgoGjzBv6YFra-t-4J9sbgOFVPwfkQz3tDlbAkFOYzInRUCMueOISVqKe-Sd-9V6wR6eJevA9E~C4W7sXx0xaWi1zcqYHMJMbbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
	alt=""
	class={`fixed top-0 left-0 w-screen h-screen object-cover opacity-[0.44] mix-blend-soft-light z-20 transition-all duration-500 ease-in-out ${
		status === 'deleted' || status === 'candeled' ? 'pointer-events-none opacity-0' : ''
	}`}
/>
<main class="bg-[#0A0A0A] w-screen h-screen grid place-items-center">
	<div
		class={`${
			status === 'deleted'
				? 'translate-y-[150%] scale-[0.1] pointer-events-none opacity-0 z-30'
				: ''
		} transition-all duration-700 relative ease-in-out ${
			status === 'candeled' ? '-translate-y-[300%] scale-[1.5] pointer-events-none z-30' : ''
		} `}
	>
		<div
			class="atropos my-atropos lg:hover:scale-[1.1] transition-all duration-500 ease-in-out scale-[.6] hover:scale-[.75] lg:scale-100 relative z-30"
		>
			<!-- scale container (required) -->
			<div class="atropos-scale">
				<!-- rotate container (required) -->
				<div class="atropos-rotate">
					<!-- inner container (required) -->
					<div class="atropos-inner">
						<!-- put your custom content here -->
						<div
							class="w-[350px] h-fit bg-[#00000080] border border-[#E2F0FD14] shadow-[0_1px_2px_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.32),0_8px_24px_rgba(0,0,0,0.32)] backdrop-blur-[10px] rounded-[8px] flex flex-col relative overflow-hidden hover:border-[#DFEFFE1F]"
						>
							<div
								class="flex flex-col w-full bg-[#E2F0FD05] h-fit p-[16px] gap-[8px] border-b border-[#E2F0FD14]"
							>
								<h1 class="text-[#F5F7FA] font-bold text-[14px]">Delete Space</h1>
								<p class="text-[14px] font-medium text-[#5E6266]">
									Are you sure? This cannot be undone.
								</p>
							</div>
							<div class="flex flex-col p-[16px] gap-[16px] w-full h-full">
								<h3 class="text-[#5E6266] font-medium text-[14px]">
									Please type <a
										href="https://twitter.com/predragus"
										target="_blank"
										rel="noreferrer"
										class="text-[#F5F7FA]"
									>
										predragus-workspace
									</a> to confirm.
								</h3>
								<div class="w-full h-fit flex flex-row relative">
									<input
										type="text"
										placeholder="predragus-workspace"
										bind:value={typedText}
										class="bg-[#D5FEFF0A] py-[8px] px-[12px] rounded-[6px] border border-[#DFEFFE1F] backdrop-blur-[1px] text-[#F5F7FA] font-medium text-[14px] shadow-[0_-0.5px_0.5px_rgba(0,0,0,0.16] outline-none w-full font-mono"
									/>
								</div>
								<div class="flex flex-row items-center justify-end gap-[8px] w-full text-[#F5F7FA]">
									<button
										class="rounded-[6px] px-[12px] py-[8px] bg-[#D5FEFF0A] border border-[#DFEFFE1F] backdrop-blur-[1px] relative overflow-hidden group hover:scale-[1.05] transition-all ease-in-out duration-300"
										on:click={() => {
											status = 'candeled';
										}}
									>
										Cancel
										<div
											class="absolute top-[30px] left-[calc(50% - 48px/2)] bg-[#F5F7FA3D] h-[24px] w-[48px] rounded-full blur-[6px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out translate-y-[5%] group-hover:translate-y-0"
											data-atropos-offset="-5.5"
										/>
									</button>
									<button
										class={`rounded-[6px] px-[12px] py-[8px] bg-[#B8122E] border border-[#DFEFFE1F] backdrop-blur-[1px] relative overflow-hidden group hover:scale-[1.05] transition-all ease-in-out duration-300 ${
											typedText === 'predragus-workspace'
												? 'opacity-100'
												: 'opacity-50 pointer-events-none'
										}`}
										on:click={() => {
											status = 'deleted';
										}}
									>
										Delete
										<div
											class="absolute top-[30px] left-[calc(50% - 48px/2)] bg-[#FF1A1A] h-[24px] w-[48px] rounded-full blur-[6px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out translate-y-[5%] group-hover:translate-y-0"
											data-atropos-offset="-5.5"
										/>
									</button>
								</div>
							</div>
							<!--  -->
							<svg
								width="432"
								height="327"
								viewBox="0 0 280 218"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="absolute -top-[50px] -left-[20%] pointer-events-none"
								data-atropos-offset="-1.5"
							>
								<g opacity="0.06">
									<g filter="url(#filter0_f_63_64)">
										<rect
											x="134.646"
											y="-143.506"
											width="100"
											height="500"
											transform="rotate(30 134.646 -143.506)"
											fill="url(#paint0_linear_63_64)"
										/>
									</g>
									<g filter="url(#filter1_f_63_64)">
										<rect
											x="216.053"
											y="-96.5063"
											width="50"
											height="500"
											transform="rotate(30 216.053 -96.5063)"
											fill="url(#paint1_linear_63_64)"
										/>
									</g>
								</g>
								<defs>
									<filter
										id="filter0_f_63_64"
										x="-135.354"
										y="-163.506"
										width="376.603"
										height="523.013"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="BackgroundImageFix"
											result="shape"
										/>
										<feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_63_64" />
									</filter>
									<filter
										id="filter1_f_63_64"
										x="-53.9474"
										y="-116.506"
										width="333.301"
										height="498.013"
										filterUnits="userSpaceOnUse"
										color-interpolation-filters="sRGB"
									>
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feBlend
											mode="normal"
											in="SourceGraphic"
											in2="BackgroundImageFix"
											result="shape"
										/>
										<feGaussianBlur stdDeviation="10" result="effect1_foregroundBlur_63_64" />
									</filter>
									<linearGradient
										id="paint0_linear_63_64"
										x1="234.646"
										y1="106.494"
										x2="134.646"
										y2="106.494"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="white" stop-opacity="0" />
										<stop offset="0.25" stop-color="white" stop-opacity="0.5" />
										<stop offset="0.5" stop-color="white" stop-opacity="0.75" />
										<stop offset="0.75" stop-color="white" stop-opacity="0.5" />
										<stop offset="1" stop-color="white" stop-opacity="0" />
									</linearGradient>
									<linearGradient
										id="paint1_linear_63_64"
										x1="266.053"
										y1="153.494"
										x2="216.053"
										y2="153.494"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="white" stop-opacity="0" />
										<stop offset="0.25" stop-color="white" stop-opacity="0.5" />
										<stop offset="0.5" stop-color="white" stop-opacity="0.75" />
										<stop offset="0.75" stop-color="white" stop-opacity="0.5" />
										<stop offset="1" stop-color="white" stop-opacity="0" />
									</linearGradient>
								</defs>
							</svg>
							<!--  -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
