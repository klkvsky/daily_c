<script>
	let isToggle = 0;

	setInterval(() => {
		isToggle = 1;

		setTimeout(() => {
			isToggle = 2;

			setTimeout(() => {
				isToggle = 0;
			}, 1000);
		}, 500);
	}, 3000);
</script>

<main class="w-screen h-screen grid place-items-center">
	<h1
		class="font-black text-4xl transition-all duration-500 ease-in-out"
		style={isToggle === 1
			? 'transform: scaleX(1.5)'
			: isToggle === 2
			? 'transform: scaleX(3)'
			: 'transform: scaleX(1)'}
	>
		D
	</h1>
</main>
