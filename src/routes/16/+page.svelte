<script lang="ts">
	let videoSource: HTMLVideoElement | null = null;
	let videoSource2: HTMLVideoElement | null = null;
	let loading = false;

	const obtenerVideoCamara = async () => {
		try {
			loading = true;
			const stream = await navigator.mediaDevices.getUserMedia({
				video: true
			});
			videoSource!.srcObject = stream;
			videoSource2!.srcObject = stream;
			await videoSource!.play();
			await videoSource2!.play();
			loading = false;
		} catch (error) {
			console.log(error);
		}
	};

	const createDivs = (event: MouseEvent) => {
		console.log(event.offsetX);
		const div = document.createElement('div');
		div.classList.add('cursor');
		div.style.top = `${event.offsetY}px`;
		div.style.left = `${event.offsetX}px`;
		div.style.position = 'absolute';
		div.style.background = 'rgb(255,255,255)';
		div.style.transform = 'translate(-50%, -50%)';
		div.style.borderRadius = '100%';
		div.style.opacity = '0.1';
		div.style.filter = 'blur(20px)';
		div.style.zIndex = '100';
		div.style.width = '76px';
		div.style.height = '76px';
		div.style.pointerEvents = 'none';
		const button = document.querySelector('#containerForDivs')!;
		button.appendChild(div);
	};

	obtenerVideoCamara();

	// get mouse position relative to button and set it to variables
	let mouseX = 0;
	let mouseY = 0;
	let isOver = false;

	let isEraser = false;

	// function that deletes the cursor divs by clicking on them if isEraser is true
	const deleteDivs = (event: MouseEvent) => {
		if (isEraser) {
			const divs = document.querySelectorAll('.cursor');
			divs.forEach((div) => {
				if (
					event.clientX >= div.getBoundingClientRect().left &&
					event.clientX <= div.getBoundingClientRect().right &&
					event.clientY >= div.getBoundingClientRect().top &&
					event.clientY <= div.getBoundingClientRect().bottom
				) {
					div.remove();
				}
			});
		}
	};
</script>

<main class="w-screen h-screen grid place-items-center bg-[#E0E0E0]">
	<button
		class="w-[300px] h-[100px] relative transition-all ease-in-out group"
		disabled={isEraser}
		on:click={(event) => {
			if (!isEraser) {
				createDivs(event);
			} else {
				deleteDivs(event);
			}
		}}
	>
		<div
			class="absolute top-0 rounded-[56px] overflow-clip left-0 w-full h-full"
			id="containerForDivs"
		>
			<svg
				width="22"
				height="22"
				viewBox="0 0 22 22"
				fill="none"
				class="absolute top-0 left-0"
				xmlns="http://www.w3.org/2000/svg"
				style={`transform: translate(${mouseX}px, ${mouseY}px); opacity: ${
					isOver ? 1 : 0
				}; transition: opacity 0.2s ease-in-out;`}
				><g filter="url(#filter0_d_3664_1573)"
					><path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6.61891 14.309C6.33491 13.95 5.98991 13.216 5.37591 12.325C5.02791 11.821 4.16491 10.872 3.90791 10.39C3.68491 9.96404 3.70891 9.77304 3.76191 9.42004C3.85591 8.79204 4.49991 8.30304 5.18691 8.36904C5.70591 8.41804 6.14591 8.76104 6.54191 9.08504C6.78091 9.28004 7.07491 9.65904 7.25191 9.87304C7.41491 10.069 7.45491 10.15 7.62891 10.382C7.85891 10.689 7.93091 10.841 7.84291 10.503C7.77191 10.007 7.65591 9.16004 7.48791 8.41104C7.35991 7.84304 7.32891 7.75404 7.20691 7.31804C7.07791 6.85404 7.01191 6.52904 6.89091 6.03704C6.80691 5.68904 6.65591 4.97804 6.61491 4.57804C6.55791 4.03104 6.52791 3.13904 6.87891 2.72904C7.15391 2.40804 7.78491 2.31104 8.17591 2.50904C8.68791 2.76804 8.97891 3.51204 9.11191 3.80904C9.35091 4.34304 9.49891 4.96004 9.62791 5.77004C9.79191 6.80104 10.0939 8.23204 10.1039 8.53304C10.1279 8.16404 10.0359 7.38704 10.0999 7.03304C10.1579 6.71204 10.4279 6.33904 10.7659 6.23804C11.0519 6.15304 11.3869 6.12204 11.6819 6.18304C11.9949 6.24704 12.3249 6.47104 12.4479 6.68204C12.8099 7.30604 12.8169 8.58104 12.8319 8.51304C12.9179 8.13704 12.9029 7.28404 13.1159 6.92904C13.2559 6.69504 13.6129 6.48404 13.8029 6.45004C14.0969 6.39804 14.4579 6.38204 14.7669 6.44204C15.0159 6.49104 15.3529 6.78704 15.4439 6.92904C15.6619 7.27304 15.7859 8.24604 15.8229 8.58704C15.8379 8.72804 15.8969 8.19504 16.1159 7.85104C16.5219 7.21204 17.9589 7.08804 18.0139 8.49004C18.0389 9.14404 18.0339 9.11404 18.0339 9.55404C18.0339 10.071 18.0219 10.382 17.9939 10.756C17.9629 11.156 17.8769 12.06 17.7519 12.498C17.6659 12.799 17.3809 13.476 17.0999 13.882C17.0999 13.882 16.0259 15.132 15.9089 15.695C15.7909 16.257 15.8299 16.261 15.8069 16.66C15.7839 17.058 15.9279 17.582 15.9279 17.582C15.9279 17.582 15.1259 17.686 14.6939 17.617C14.3029 17.554 13.8189 16.776 13.6939 16.538C13.5219 16.21 13.1549 16.273 13.0119 16.515C12.7869 16.898 12.3029 17.585 11.9609 17.628C11.2929 17.712 9.90691 17.659 8.82191 17.648C8.82191 17.648 9.00691 16.637 8.59491 16.29C8.28991 16.031 7.76491 15.506 7.45091 15.23L6.61891 14.309Z"
						fill="white"
					/><path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6.61891 14.309C6.33491 13.95 5.98991 13.216 5.37591 12.325C5.02791 11.821 4.16491 10.872 3.90791 10.39C3.68491 9.96404 3.70891 9.77304 3.76191 9.42004C3.85591 8.79204 4.49991 8.30304 5.18691 8.36904C5.70591 8.41804 6.14591 8.76104 6.54191 9.08504C6.78091 9.28004 7.07491 9.65904 7.25191 9.87304C7.41491 10.069 7.45491 10.15 7.62891 10.382C7.85891 10.689 7.93091 10.841 7.84291 10.503C7.77191 10.007 7.65591 9.16004 7.48791 8.41104C7.35991 7.84304 7.32891 7.75404 7.20691 7.31804C7.07791 6.85404 7.01191 6.52904 6.89091 6.03704C6.80691 5.68904 6.65591 4.97804 6.61491 4.57804C6.55791 4.03104 6.52791 3.13904 6.87891 2.72904C7.15391 2.40804 7.78491 2.31104 8.17591 2.50904C8.68791 2.76804 8.97891 3.51204 9.11191 3.80904C9.35091 4.34304 9.49891 4.96004 9.62791 5.77004C9.79191 6.80104 10.0939 8.23204 10.1039 8.53304C10.1279 8.16404 10.0359 7.38704 10.0999 7.03304C10.1579 6.71204 10.4279 6.33904 10.7659 6.23804C11.0519 6.15304 11.3869 6.12204 11.6819 6.18304C11.9949 6.24704 12.3249 6.47104 12.4479 6.68204C12.8099 7.30604 12.8169 8.58104 12.8319 8.51304C12.9179 8.13704 12.9029 7.28404 13.1159 6.92904C13.2559 6.69504 13.6129 6.48404 13.8029 6.45004C14.0969 6.39804 14.4579 6.38204 14.7669 6.44204C15.0159 6.49104 15.3529 6.78704 15.4439 6.92904C15.6619 7.27304 15.7859 8.24604 15.8229 8.58704C15.8379 8.72804 15.8969 8.19504 16.1159 7.85104C16.5219 7.21204 17.9589 7.08804 18.0139 8.49004C18.0389 9.14404 18.0339 9.11404 18.0339 9.55404C18.0339 10.071 18.0219 10.382 17.9939 10.756C17.9629 11.156 17.8769 12.06 17.7519 12.498C17.6659 12.799 17.3809 13.476 17.0999 13.882C17.0999 13.882 16.0259 15.132 15.9089 15.695C15.7909 16.257 15.8299 16.261 15.8069 16.66C15.7839 17.058 15.9279 17.582 15.9279 17.582C15.9279 17.582 15.1259 17.686 14.6939 17.617C14.3029 17.554 13.8189 16.776 13.6939 16.538C13.5219 16.21 13.1549 16.273 13.0119 16.515C12.7869 16.898 12.3029 17.585 11.9609 17.628C11.2929 17.712 9.90691 17.659 8.82191 17.648C8.82191 17.648 9.00691 16.637 8.59491 16.29C8.28991 16.031 7.76491 15.506 7.45091 15.23L6.61891 14.309Z"
						stroke="black"
						stroke-width="0.75"
						stroke-linecap="round"
						stroke-linejoin="round"
					/><path
						d="M14.8538 14.6635V11.2045"
						stroke="black"
						stroke-width="0.75"
						stroke-linecap="round"
					/><path
						d="M12.8382 14.6752L12.8222 11.2022"
						stroke="black"
						stroke-width="0.75"
						stroke-linecap="round"
					/><path
						d="M10.8421 11.2338L10.8631 14.6598"
						stroke="black"
						stroke-width="0.75"
						stroke-linecap="round"
					/></g
				><defs
					><filter
						id="filter0_d_3664_1573"
						x="0.733344"
						y="0.4"
						width="21.2"
						height="22.2"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
						><feFlood flood-opacity="0" result="BackgroundImageFix" /><feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/><feOffset dy="1" /><feGaussianBlur stdDeviation="1.3" /><feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"
						/><feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_3664_1573"
						/><feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_3664_1573"
							result="shape"
						/></filter
					></defs
				></svg
			>
		</div>
		<video
			bind:this={videoSource}
			class="min-w-[350px] h-[150px] absolute top-[50%] left-[50%] -translate-x-1/2 rounded-[100px] -scale-x-100 object-fill -translate-y-1/2 opacity-40 transition-all blur-[24px] group-active:opacity-10"
			playsinline={true}
			muted
		/>
		<div
			class="w-full h-full overflow-hidden rounded-[56px] transition-all cursor-pointer group-active:scale-[0.96] group-active:shadow-[0_-2px_1px_#ffffff80,0_-1px_1px_#00000080,0_-4px_1px_#ffffff80,0_4px_1px_#ffffff80,0_1px_1px_#00000080,0_4px_1px_#ffffff80]"
			style="translateZ(0)"
			on:mousemove={(event) => {
				mouseX = event.layerX + 5;
				mouseY = event.layerY + 5;
				isOver = true;
			}}
			on:mouseleave={() => {
				isOver = false;
			}}
		>
			<video
				class="shadow-[0_4px_8px_#00000040,0_8px_16px_#00000026,0_16px_32px #00000020] blur-[3px] saturate-[0.4] brightness-[1.1] min-w-full min-h-full -scale-x-125 scale-y-[1.25] object-cover opacity-[0.7] overflow-hidden rounded-[56px]"
				style="content: normal; object-position: 0px -120px;"
				playsinline={true}
				muted
				bind:this={videoSource2}
			/>
			<div
				class="absolute top-0 left-0 w-full h-full opacity-70 rounded-[56px] transition-all shadow-[inset_0_2px_2px_#fff,inset_0_2px_2px_#fffc,inset_0_-2px_2px_#ffffff80] group-active:shadow-[inset_0_4px_8px_#0000001a,inset_0_4px_4px_#0003,inset_0_-6px_8px_#0000001a]"
			/>
		</div>
		<div
			class="cursor-pointer pointer-events-none text-[#000000b3] text-[48px] font-medium absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 group-active:scale-[0.96] transition-all ease-in-out z-[200]"
			style="filter: drop-shadow(0px -1px 0px rgba(255,255,255,.5)) drop-shadow(0px 1px 0px rgba(255,255,255,.6));"
		>
			Button
		</div>
	</button>

	<div
		class="fixed bottom-10 left-0 w-screen h-[48px] flex flex-row items-center justify-center gap-4 scale-125"
	>
		<div
			class="flex flex-row items-center gap-1 bg-neutral-100 p-1 px-1.5 rounded-full border border-neutral-300"
		>
			<button
				class={`w-[32px] aspect-square border border-dashed border-white/20 rounded-full grid place-items-center group cursor-pointer hover:border-white/40 transition-all duration-300 ease-in-out ${
					isEraser ? 'bg-neutral-300' : ''
				}`}
				on:click={() => {
					isEraser = true;
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="w-6 h-6 opacity-60 group-hover:opacity-80 transition-all duration-300 ease-in-out"
					><path
						d="m2.586 15.408 4.299 4.299a.996.996 0 0 0 .707.293h12.001v-2h-6.958l7.222-7.222c.78-.779.78-2.049 0-2.828L14.906 3a2.003 2.003 0 0 0-2.828 0l-4.75 4.749-4.754 4.843a2.007 2.007 0 0 0 .012 2.816zM13.492 4.414l4.95 4.95-2.586 2.586L10.906 7l2.586-2.586zM8.749 9.156l.743-.742 4.95 4.95-4.557 4.557a1.026 1.026 0 0 0-.069.079h-1.81l-4.005-4.007 4.748-4.837z"
					/></svg
				>
			</button>

			<div class="h-[30px] w-px bg-black/10 rounded-full mx-0.5" />
			<button
				class={`w-[32px] aspect-square border border-dashed border-white/20 rounded-full grid place-items-center group cursor-pointer hover:border-white/40 transition-all duration-300 ease-in-out ${
					isEraser ? '' : 'bg-neutral-300'
				}
				`}
				on:click={() => {
					isEraser = false;
				}}
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 22 22"
					class="w-6 h-6 opacity-60 group-hover:opacity-80 transition-all duration-300 ease-in-out"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><g filter="url(#filter0_d_3664_1573)"
						><path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M6.61891 14.309C6.33491 13.95 5.98991 13.216 5.37591 12.325C5.02791 11.821 4.16491 10.872 3.90791 10.39C3.68491 9.96404 3.70891 9.77304 3.76191 9.42004C3.85591 8.79204 4.49991 8.30304 5.18691 8.36904C5.70591 8.41804 6.14591 8.76104 6.54191 9.08504C6.78091 9.28004 7.07491 9.65904 7.25191 9.87304C7.41491 10.069 7.45491 10.15 7.62891 10.382C7.85891 10.689 7.93091 10.841 7.84291 10.503C7.77191 10.007 7.65591 9.16004 7.48791 8.41104C7.35991 7.84304 7.32891 7.75404 7.20691 7.31804C7.07791 6.85404 7.01191 6.52904 6.89091 6.03704C6.80691 5.68904 6.65591 4.97804 6.61491 4.57804C6.55791 4.03104 6.52791 3.13904 6.87891 2.72904C7.15391 2.40804 7.78491 2.31104 8.17591 2.50904C8.68791 2.76804 8.97891 3.51204 9.11191 3.80904C9.35091 4.34304 9.49891 4.96004 9.62791 5.77004C9.79191 6.80104 10.0939 8.23204 10.1039 8.53304C10.1279 8.16404 10.0359 7.38704 10.0999 7.03304C10.1579 6.71204 10.4279 6.33904 10.7659 6.23804C11.0519 6.15304 11.3869 6.12204 11.6819 6.18304C11.9949 6.24704 12.3249 6.47104 12.4479 6.68204C12.8099 7.30604 12.8169 8.58104 12.8319 8.51304C12.9179 8.13704 12.9029 7.28404 13.1159 6.92904C13.2559 6.69504 13.6129 6.48404 13.8029 6.45004C14.0969 6.39804 14.4579 6.38204 14.7669 6.44204C15.0159 6.49104 15.3529 6.78704 15.4439 6.92904C15.6619 7.27304 15.7859 8.24604 15.8229 8.58704C15.8379 8.72804 15.8969 8.19504 16.1159 7.85104C16.5219 7.21204 17.9589 7.08804 18.0139 8.49004C18.0389 9.14404 18.0339 9.11404 18.0339 9.55404C18.0339 10.071 18.0219 10.382 17.9939 10.756C17.9629 11.156 17.8769 12.06 17.7519 12.498C17.6659 12.799 17.3809 13.476 17.0999 13.882C17.0999 13.882 16.0259 15.132 15.9089 15.695C15.7909 16.257 15.8299 16.261 15.8069 16.66C15.7839 17.058 15.9279 17.582 15.9279 17.582C15.9279 17.582 15.1259 17.686 14.6939 17.617C14.3029 17.554 13.8189 16.776 13.6939 16.538C13.5219 16.21 13.1549 16.273 13.0119 16.515C12.7869 16.898 12.3029 17.585 11.9609 17.628C11.2929 17.712 9.90691 17.659 8.82191 17.648C8.82191 17.648 9.00691 16.637 8.59491 16.29C8.28991 16.031 7.76491 15.506 7.45091 15.23L6.61891 14.309Z"
							fill="white"
						/><path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M6.61891 14.309C6.33491 13.95 5.98991 13.216 5.37591 12.325C5.02791 11.821 4.16491 10.872 3.90791 10.39C3.68491 9.96404 3.70891 9.77304 3.76191 9.42004C3.85591 8.79204 4.49991 8.30304 5.18691 8.36904C5.70591 8.41804 6.14591 8.76104 6.54191 9.08504C6.78091 9.28004 7.07491 9.65904 7.25191 9.87304C7.41491 10.069 7.45491 10.15 7.62891 10.382C7.85891 10.689 7.93091 10.841 7.84291 10.503C7.77191 10.007 7.65591 9.16004 7.48791 8.41104C7.35991 7.84304 7.32891 7.75404 7.20691 7.31804C7.07791 6.85404 7.01191 6.52904 6.89091 6.03704C6.80691 5.68904 6.65591 4.97804 6.61491 4.57804C6.55791 4.03104 6.52791 3.13904 6.87891 2.72904C7.15391 2.40804 7.78491 2.31104 8.17591 2.50904C8.68791 2.76804 8.97891 3.51204 9.11191 3.80904C9.35091 4.34304 9.49891 4.96004 9.62791 5.77004C9.79191 6.80104 10.0939 8.23204 10.1039 8.53304C10.1279 8.16404 10.0359 7.38704 10.0999 7.03304C10.1579 6.71204 10.4279 6.33904 10.7659 6.23804C11.0519 6.15304 11.3869 6.12204 11.6819 6.18304C11.9949 6.24704 12.3249 6.47104 12.4479 6.68204C12.8099 7.30604 12.8169 8.58104 12.8319 8.51304C12.9179 8.13704 12.9029 7.28404 13.1159 6.92904C13.2559 6.69504 13.6129 6.48404 13.8029 6.45004C14.0969 6.39804 14.4579 6.38204 14.7669 6.44204C15.0159 6.49104 15.3529 6.78704 15.4439 6.92904C15.6619 7.27304 15.7859 8.24604 15.8229 8.58704C15.8379 8.72804 15.8969 8.19504 16.1159 7.85104C16.5219 7.21204 17.9589 7.08804 18.0139 8.49004C18.0389 9.14404 18.0339 9.11404 18.0339 9.55404C18.0339 10.071 18.0219 10.382 17.9939 10.756C17.9629 11.156 17.8769 12.06 17.7519 12.498C17.6659 12.799 17.3809 13.476 17.0999 13.882C17.0999 13.882 16.0259 15.132 15.9089 15.695C15.7909 16.257 15.8299 16.261 15.8069 16.66C15.7839 17.058 15.9279 17.582 15.9279 17.582C15.9279 17.582 15.1259 17.686 14.6939 17.617C14.3029 17.554 13.8189 16.776 13.6939 16.538C13.5219 16.21 13.1549 16.273 13.0119 16.515C12.7869 16.898 12.3029 17.585 11.9609 17.628C11.2929 17.712 9.90691 17.659 8.82191 17.648C8.82191 17.648 9.00691 16.637 8.59491 16.29C8.28991 16.031 7.76491 15.506 7.45091 15.23L6.61891 14.309Z"
							stroke="black"
							stroke-width="0.75"
							stroke-linecap="round"
							stroke-linejoin="round"
						/><path
							d="M14.8538 14.6635V11.2045"
							stroke="black"
							stroke-width="0.75"
							stroke-linecap="round"
						/><path
							d="M12.8382 14.6752L12.8222 11.2022"
							stroke="black"
							stroke-width="0.75"
							stroke-linecap="round"
						/><path
							d="M10.8421 11.2338L10.8631 14.6598"
							stroke="black"
							stroke-width="0.75"
							stroke-linecap="round"
						/></g
					><defs
						><filter
							id="filter0_d_3664_1573"
							x="0.733344"
							y="0.4"
							width="21.2"
							height="22.2"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
							><feFlood flood-opacity="0" result="BackgroundImageFix" /><feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/><feOffset dy="1" /><feGaussianBlur stdDeviation="1.3" /><feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"
							/><feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_3664_1573"
							/><feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_3664_1573"
								result="shape"
							/></filter
						></defs
					></svg
				>
			</button>
		</div>
	</div>
</main>
