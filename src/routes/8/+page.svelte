<script>
	// @ts-nocheck
	import TodoItem from '$lib/components/todoItem.svelte';
	//
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { cubicInOut } from 'svelte/easing';
	//
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	//
	let todos = [];
	let text = '';

	function save() {
		localStorage.setItem('todos', JSON.stringify(todos));
	}

	onMount(() => {
		let todosFromStorage = JSON.parse(localStorage.getItem('todos'));
		if (todosFromStorage) {
			todos = todosFromStorage.filter((todo) => !todo.isDone);
		}
	});

	// look at localstorage for updates every 10 seconds and update todos accordingly and chack if browser
	$: browser &&
		setInterval(() => {
			let todosFromStorage = JSON.parse(localStorage.getItem('todos'));
			if (todosFromStorage) {
				todos = todosFromStorage.filter((todo) => !todo.isDone);
			}
		}, 1000);
</script>

<main class="bg-[#1E1E1E] w-screen h-screen grid place-items-center overflow-hidden relative">
	<div class="flex flex-col gap-[16px] w-full scale-90 lg:scale-100 lg:w-[520px] h-fit transition-all duration-500 ease-in-out">
		{#if browser}
			<div
				class="bg-black w-full h-[82px] rounded-[12.8px] px-[32px] py-[26px] flex flex-row items-center gap-[24px] border border-transparent focus-within:border-[#F0A501] transition-all duration-500 scale-75 hover:scale-100 ease-in-out z-50 relative "
				id="item"
			>
				<div class="relative cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 stroke-white"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
						/>
					</svg>
				</div>
				<div class="relative w-fit h-fit">
					<input
						class="text-white text-[32px] font-medium outline-none transition-all duration-300 ease-in-out w-full bg-transparent placeholder:text-[#313131]"
						bind:value={text}
						placeholder="Add a new task"
						on:keydown={(e) => {
							if (e.key === 'Enter') {
								todos = [
									{ text, checked: false, isTimed: false, isDone: false, id: Math.random() },
									...todos
								];
								text = '';
								save();
							}
						}}
					/>
				</div>
				<button
					class="relative cursor-pointer ml-auto hover:scale-125 transition-all duration-500 ease-in-out group"
					on:click={() => {
						if (text !== '') {
							todos = [
								...todos,
								{ text, checked: false, isTimed: false, isDone: false, id: Math.random() }
							];
							text = '';
							save();
						}
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 stroke-white group-hover:stroke-[#F0A501] transition-all ease-in-out duration-500"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</button>
			</div>

			{#each todos as todo (todo.id)}
				<div
					class="w-full z-0 relative"
					in:fly={{ y: -100, duration: 1000, easing: cubicInOut }}
					out:fly={{ x: -100, duration: 500, opacity: 0, easing: cubicInOut }}
					animate:flip
				>
					<TodoItem info={todo} />
				</div>
			{/each}
		{/if}
	</div>
</main>
