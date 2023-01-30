<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	let checked = false;
	let isTimed = false;
	let text = 'Todo Item';
	let isDone = false;
	let id;

	export let info;

	onMount(() => {
		checked = info.checked;
		isTimed = info.isTimed;
		text = info.text;
		isDone = info.isDone;
		id = info.id;
	});

	// function to change item in localstorage on change of checkbox, text and isTimed
	function save() {
		let todosFromStorage = JSON.parse(localStorage.getItem('todos'));
		let index = todosFromStorage.findIndex((todo) => todo.id === id);
		todosFromStorage[index] = {
			...todosFromStorage[index],
			checked,
			text,
			isTimed,
			isDone
		};
		localStorage.setItem('todos', JSON.stringify(todosFromStorage));
	}

	$: checked && (isDone = true) && save();

	// if item is done, remove it from localstorage
	$: isDone &&
		(() => {
			let todosFromStorage = JSON.parse(localStorage.getItem('todos'));
			let index = todosFromStorage.findIndex((todo) => todo.id === id);
			todosFromStorage.splice(index, 1);
			localStorage.setItem('todos', JSON.stringify(todosFromStorage));
		})();
</script>

{#if browser && info}
	<div
		class="bg-black w-full h-[82px] rounded-[12.8px] px-[32px] py-[26px] flex flex-row items-center gap-[24px] border border-transparent focus-within:border-[#F0A501] transition-all duration-500 scale-75 hover:scale-100 ease-in-out"
		id="item"
	>
		<label for={`checkbox-${id}`} class="relative cursor-pointer">
			<input
				type="checkbox"
				id={`checkbox-${id}`}
				class="hidden peer"
				{checked}
				on:change={(e) => {
					checked = e.target.checked;
					save();
				}}
			/>
			<div class="w-[35px] h-[35px] rounded-[6px] bg-[#313131] peer-checked:bg-[#F0A501]" />
			<svg
				width="29"
				height="29"
				viewBox="0 0 29 29"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] stroke-black/0 pointer-events-none peer-checked:stroke-black transition-all duration-300 ease-in scale-50 peer-checked:scale-100"
			>
				<path
					d="M23.8333 7.5L11 20.3333L5.16663 14.5"
					stroke-width="4"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</label>
		<div class="relative w-fit h-fit">
			<p
				class="text-white text-[32px] font-medium outline-none transition-all duration-300 ease-in-out w-full"
				class:text-[#313131]={checked}
				contenteditable
				on:input={(e) => {
					text = e.target.innerText;
					if (e.target.innerText === '') {
						isDone = true;
					}
					save();
				}}
			>
				{text}
			</p>
			<span
				class="absolute top-[55%] left-0 transition-all duration-500 ease-in-out h-[3px] bg-[#313131] rounded-sm"
				class:w-full={checked}
				class:w-0={!checked}
				class:opacity-0={!checked}
				class:opacity-100={checked}
			/>
		</div>
		<label for={`isTimed-${id}`} class="relative cursor-pointer ml-auto">
			<input
				type="checkbox"
				id={`isTimed-${id}`}
				class="peer hidden"
				checked={isTimed}
				on:change={(e) => {
					isTimed = e.target.checked;
					save();
				}}
			/>
			<svg
				width="35"
				height="35"
				viewBox="0 0 35 35"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-[#313131] transition-all duration-300 ease-in-out"
				class:stroke-[#F0A501]={isTimed}
			>
				<path
					d="M7.29163 32.0833H27.7083"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M7.29163 2.91666H27.7083"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M24.7917 32.0833V25.9992C24.7915 25.2257 24.4841 24.4839 23.9371 23.9371L17.5 17.5L11.063 23.9371C10.5159 24.4839 10.2085 25.2257 10.2084 25.9992V32.0833"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M10.2084 2.91666V9.00082C10.2085 9.77431 10.5159 10.5161 11.063 11.0629L17.5 17.5L23.9371 11.0629C24.4841 10.5161 24.7915 9.77431 24.7917 9.00082V2.91666"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</label>
	</div>
{/if}
