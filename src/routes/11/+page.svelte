<script lang="ts">
	import { browser } from '$app/environment';
	//
	let isButtonOn = false;
	let isSwitchOn = false;
	let isSmallButtonOn = false;
	//
	let audioOff: HTMLAudioElement;
	let audioOn: HTMLAudioElement;
	let audioSwitch: HTMLAudioElement;
	if (browser) {
		audioOff = new Audio('https://cdn.freesound.org/previews/391/391697_149792-lq.mp3');
		audioOff.volume = 0.5;
		audioOn = new Audio('https://cdn.freesound.org/previews/391/391698_149792-lq.mp3');
		audioOn.volume = 0.5;
		//
		audioSwitch = new Audio('https://cdn.freesound.org/previews/59/59877_333536-lq.mp3');
		audioSwitch.volume = 0.5;
	}
	//
</script>

<main class="bg-[#F7F7F8] w-screen h-screen flex flex-col items-center justify-center gap-[30px]">
	<div class="flex flex-row items-center gap-[30px]">
		<button
			style="background: linear-gradient(180deg, #E9E9E9 0%, #E9E9E9 0.01%, #FFFFFF 100%); box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.05);
  border-radius: 52px;"
			class="w-[122px] h-[74px] p-[12px] relative"
			on:click={() => {
				isSwitchOn = !isSwitchOn;
				if (isSwitchOn) {
					audioSwitch.play();
				} else {
					audioSwitch.play();
				}
			}}
		>
			<div
				class={`absolute top-[50%] left-[50%] w-[52px] aspect-square rounded-full -translate-y-[50%] transition-all duration-300 ease-in-out ${
					isSwitchOn ? '-translate-x-[5%]' : '-translate-x-[95%]'
				}`}
				style="background: linear-gradient(180deg, #EAEAEA 0%, #F4F4F4 100%);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1), 0px 6px 6px -1px rgba(0, 0, 0, 0.25);"
			/>
			<div
				class="w-full h-full rounded-[40px] transition-all duration-300 ease-in-out"
				style={`background: ${
					isSwitchOn
						? 'radial-gradient(100% 100% at 50% 100%, #F2F2F2 14.06%, #757575 100%, #B3B3B3 100%)'
						: ' radial-gradient(100% 100% at 50% 100%, #EAFAF7 12.5%, #08E2A7 100%)'
				};box-shadow: inset 0px 0px 2px 2px rgba(0, 0, 0, 0.1), inset 0px 2px 5px 1px rgba(0, 0, 0, 0.25);`}
			/></button
		>
		<button
			class="w-[168px] aspect-square rounded-[54px] p-[14px] grid place-items-center"
			style="background: linear-gradient(180deg, #E9E9E9 0%, #E9E9E9 0.01%, #FFFFFF 100%); box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.05);"
			on:click={() => {
				isSmallButtonOn = !isSmallButtonOn;
				if (isSmallButtonOn) {
					audioOn.play();
				} else {
					audioOff.play();
				}
			}}
		>
			<div
				class={`transition-all duration-300 ease-in-out ${
					isSmallButtonOn ? 'p-[6px]' : ' p-[12px]'
				} rounded-[40px] grid place-items-center bg-gradient-to-b ${
					isSmallButtonOn ? 'from-[#FAFAFA]' : ' from-[#FFFFFF]'
				} to-[#ECECEC] w-full h-full`}
				style={`box-shadow: ${
					isSmallButtonOn
						? '0px 0px 1px 2px rgba(0, 0, 0, 0.25)'
						: '0px 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 4px 4px 4px rgba(0, 0, 0, 0.15), 0px 2px 10px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.2)'
				};`}
			>
				<div
					class="w-full h-full rounded-[35px] grid place-items-center transition-all duration-300 ease-in-out"
					style={`background: ${
						isSmallButtonOn
							? 'linear-gradient(180deg, #EAEAEA 0%, #F4F4F4 100%)'
							: 'linear-gradient(180deg, #F4F4F4 0%, #FEFEFE 100%)'
					};`}
				>
					<svg
						width="54"
						height="54"
						viewBox="0 0 54 54"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class:opacity-70={isSmallButtonOn}
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M9.95999 21.0357L8.90011 17.0802C8.47128 15.4798 9.42103 13.8347 11.0214 13.4059L14.8596 12.3775L19.3525 18.519L9.95999 21.0357ZM25.2906 16.9279L24.5322 17.1311L20.2149 11.2295L27.5187 9.23273L31.8386 15.1377L25.2906 16.9279ZM26.5967 21.7543L47.9593 16.0302C49.0262 15.7443 49.6594 14.6476 49.3735 13.5807L47.5371 6.72739C46.3936 2.45966 42.0069 -0.0729955 37.7392 1.07054L9.72733 8.57629C5.4596 9.71982 2.92694 14.1065 4.07048 18.3742L5.90682 25.2276C5.93183 25.3209 5.96304 25.4109 5.9999 25.4973V45C5.9999 49.4183 9.58162 53 13.9999 53H42.9999C47.4182 53 50.9999 49.4183 50.9999 45V25C50.9999 23.8954 50.1045 23 48.9999 23H21.9476L22.5187 22.847L22.5322 22.8655L24.1927 22.4115L26.5967 21.7543ZM37.0402 13.7796L32.5473 7.63808L39.0333 5.90017C40.6337 5.47134 42.2787 6.42109 42.7075 8.02148L43.7674 11.977L37.0402 13.7796ZM10.9999 28V45C10.9999 46.6568 12.343 48 13.9999 48H42.9999C44.6567 48 45.9999 46.6568 45.9999 45V28H10.9999Z"
							fill="black"
						/>
					</svg>
				</div>
			</div>
		</button>
	</div>

	<button
		class="bg-gradient-to-b from-[#E9E9E9] to-[#FFFFFF] p-[24px] rounded-[68px] shadow-[inset_0_0_4px_rgba(0,0,0,0.05)] w-[338px] aspect-square"
		on:click={() => {
			isButtonOn = !isButtonOn;
			if (isButtonOn) {
				audioOn.play();
			} else {
				audioOff.play();
			}
		}}
	>
		<div
			class={`${isButtonOn ? 'p-[6px]' : 'p-[14px]'} bg-gradient-to-b from-[${
				isButtonOn ? '#FAFAFA' : '#FFFFFF'
			}] to-[${
				isButtonOn ? '#DBDBDB' : '#ECECEC'
			}] grid place-items-center rounded-[48px] transition-all duration-300 ease-in-out w-full h-full`}
			style={`box-shadow: ${
				isButtonOn
					? '0px 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 0px 1px 3px rgba(0, 0, 0, 0.08)'
					: '0px 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 0px 1px 3px rgba(0, 0, 0, 0.08), 0px 12px 13px -6px rgba(0, 0, 0, 0.3), 0px 4px 16px 4px rgba(0, 0, 0, 0.2)'
			};`}
		>
			<div
				style={`background: ${
					isButtonOn
						? 'linear-gradient(180deg, #EAEAEA 0%, #F4F4F4 100%)'
						: 'linear-gradient(180deg, #F4F4F4 0%, #FEFEFE 100%)'
				};`}
				class={` w-full h-full rounded-[48px] transition-all duration-300 ease-in-out grid place-items-center`}
			>
				<div
					style={`box-shadow: ${
						isButtonOn
							? '0px 2px 2px 1px rgba(255, 255, 255, 0.8), inset 0px 1px 5px rgba(0, 0, 0, 0.08)'
							: 'inset 0px 1px 5px rgba(0, 0, 0, 0.14);'
					};`}
					class={`w-[220px] aspect-square rounded-full transition-all duration-300 ease-in-out bg-[#${
						isButtonOn ? 'EFEFEF' : 'ECECEC'
					}] grid place-items-center`}
				>
					<div
						style={`background: radial-gradient(100% 100% at 50% 100%,${
							isButtonOn ? ' #EAFAF7 12.5%, #08E2A7 ' : ' #F2F2F2 14.06%, #757575 100%, #B3B3B3'
						}100%);`}
						class="shadow-[inset_0_8px_5px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(0,0,0,0.31)] rounded-[40px] w-[22px] aspect-square transition-all duration-300 ease-in-out"
					/>
				</div>
			</div>
		</div>
	</button>
</main>
