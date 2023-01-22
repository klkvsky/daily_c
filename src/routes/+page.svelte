<script>
	let activeElement = 1;
	let isInField = false;
	let isTyping = false;

	let inputValue = 'Ethereum';
</script>

<main class="bg-[#F8F9FA] w-screen h-screen grid place-items-center">
	<div
		class={`w-[520px] h-fit overflow-hidden bg-[#FFFFFF] rounded-[12px] border border-[#D7DBDF] shadow-[0_10px_40px_-20px_rgba(17,24,28,0.12),0_1px_12px_rgba(17,24,28,0.12),0_2px_4px_-1px_rgba(17,24,28,0.04)] flex flex-col transition-all duration-500 ease-in-out origin-top ${
			isTyping ? 'h-[48px]' : 'h-[428px]'
		}`}
	>
		<div
			class="flex flex-row items-center min-h-[48px] px-[14px] border-b border-[#DFE3E6] focus-within:border-[#DFE3E6] rounded-t-[10px] transition-all duration-300 ease-in-out group"
		>
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="group-focus-within:scale-[1.1] fill-[#889096] group-focus-within:fill-[#11181C] transition-all duration-500 ease-in-out"
			>
				<path
					d="M15.7812 14.6289L12.1172 10.9648C12.9102 10.0078 13.3477 8.77734 13.3477 7.4375C13.3477 4.32031 10.7773 1.75 7.66016 1.75C4.51562 1.75 2 4.32031 2 7.4375C2 10.582 4.54297 13.125 7.66016 13.125C8.97266 13.125 10.2031 12.6875 11.1875 11.8945L14.8516 15.5586C14.9883 15.6953 15.1523 15.75 15.3438 15.75C15.5078 15.75 15.6719 15.6953 15.7812 15.5586C16.0547 15.3125 16.0547 14.9023 15.7812 14.6289ZM3.3125 7.4375C3.3125 5.03125 5.25391 3.0625 7.6875 3.0625C10.0938 3.0625 12.0625 5.03125 12.0625 7.4375C12.0625 9.87109 10.0938 11.8125 7.6875 11.8125C5.25391 11.8125 3.3125 9.87109 3.3125 7.4375Z"
				/>
			</svg>
			<input
        id="text"
				type="text"
				bind:value={inputValue}
				class="w-full text-[#11181C] font-medium text-[16px] ml-[6px] outline-none"
				on:focusin={() => {
					isTyping = true;
				}}
				on:blur={() => {
					isTyping = false;
				}}
			/>

			<button
				class="hover:scale-[1.1] transition-all duration-500 ease-in-out group/delete group-focus-within:opacity-0 group-focus-within:scale-[.25]"
				on:click={() => {
					inputValue = '';
					isTyping = true;
          document.getElementById("text").focus();
				}}
			>
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="fill-[#889096] group-hover/delete:fill-[#11181C] transition-all duration-300 ease-in-out group-hover/delete:rotate-90 "
				>
					<path
						d="M2 8.75C2 4.89453 5.11719 1.75 9 1.75C12.8555 1.75 16 4.89453 16 8.75C16 12.6328 12.8555 15.75 9 15.75C5.11719 15.75 2 12.6328 2 8.75ZM6.78516 7.46484L8.07031 8.75L6.78516 10.0352C6.51172 10.3086 6.51172 10.7188 6.78516 10.9648C7.03125 11.2383 7.44141 11.2383 7.6875 10.9648L8.97266 9.67969L10.2852 10.9648C10.5312 11.2383 10.9414 11.2383 11.1875 10.9648C11.4609 10.7188 11.4609 10.3086 11.1875 10.0352L9.90234 8.75L11.1875 7.46484C11.4609 7.21875 11.4609 6.80859 11.1875 6.53516C10.9414 6.28906 10.5312 6.28906 10.2852 6.53516L8.97266 7.84766L7.6875 6.53516C7.44141 6.28906 7.03125 6.28906 6.78516 6.53516C6.51172 6.80859 6.51172 7.21875 6.78516 7.46484Z"
					/>
				</svg>
			</button>
		</div>

		<div
			class={`bg-[#F8F9FA] h-full w-full flex flex-col px-[8px] py-[8px] relative select-none transition-all duration-300 ease-in-out origin-top transform-gpu ${
				isTyping ? 'opacity-0 max-h-[0px]' : 'opacity-100 max-h-[380px]'
			}`}
			on:blur={() => {
				isInField = false;
			}}
			on:mouseout={() => {
				isInField = false;
			}}
			on:focus={() => {
				isInField = true;
			}}
			on:mouseover={() => {
				isInField = true;
			}}
		>
			<p class="text-[14px] text-[#889096] font-bold h-[38px] flex items-center px-[8px]">Coins</p>
			<div
				class={`h-[48px] w-[calc(100%-16px)] translate-x-[8px] rounded-[8px] border border-[#D7DBDF] bg-[#FFFFFF] absolute top-0 left-0 transition-all duration-500 ease-in-out ${
					isInField ? 'opacity-100 z-0' : 'opacity-0 z-0'
				} ${activeElement === 1 ? 'translate-y-[46px] z-0' : ''} ${
					activeElement === 2 ? 'translate-y-[94px] z-0' : ''
				} ${activeElement === 3 ? 'translate-y-[142px] z-0' : ''} ${
					activeElement === 4 ? 'translate-y-[190px] z-0' : ''
				} ${activeElement === 5 ? 'translate-y-[238px] z-0' : ''}`}
			/>
			<div
				class="flex flex-row items-center h-[48px] px-[8px] z-10 relative"
				on:focus={() => {
					activeElement = 1;
				}}
				on:mouseover={() => {
					activeElement = 1;
				}}
			>
				<img
					src="https://s3-alpha-sig.figma.com/img/510d/ef9f/cff280ea0736ba55432487aac1d293ce?Expires=1675036800&Signature=jUJeuUfLKyySrS4cslMMNb48zg4WKbk8emtEI8uolfauuNgVLUGrJ9nCglBntq0WxWi1xlVEkgJBQXhSxNdk78m73oEzM7D~x~9qD-j6gjUFWajdnGZMZvuTbqYYgTe6U~8lL7mz-bhGIxkYDxE5irh11CV3X3AGpoxyCz7s-HNB-eTP3qS8Gf~W7XtnqLLYHtMnXsktHsAJYN-k8chnS2~1kkUhyD9ptVRUSdrwxtTcM0Cj88fhbebrgNEtHtO4rUNFgABX2YCvOnAmtvr8S9ozcUQo70UMlV~LaDNXlgW6HnI9NyR38Uz4pLDG40zs9k6V7iTz~n-zW8V0fPVElQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
					alt="yo"
					class="w-[24px] h-[24px] object-cover"
				/>

				<p class="font-bold text-[16px] text-[#11181C] ml-[6px]">Ethereum</p>
				<p class="text-[16px] font-medium text-[#889096] ml-[.5ch]">ETH</p>

				<p
					class="bg-[#3E63DD] rounded-[4px] px-[6px] py-[2px] text-white font-medium text-[12px] ml-auto"
				>
					HODL
				</p>
			</div>
			<div
				class="flex flex-row items-center h-[48px] px-[8px] rounded-[8px] relative z-10"
				on:focus={() => {
					activeElement = 2;
				}}
				on:mouseover={() => {
					activeElement = 2;
				}}
			>
				<img
					src="https://s3-alpha-sig.figma.com/img/b7f1/0324/d204cfb965ca47df554a41593b14976a?Expires=1675036800&Signature=PTpZoNADttUpgOzukwX5gTHLFyBh5e4UVL36pR7Xx9WaZo36wZ7vRD4dos3wHETCBHgntU8Spsk1FEnsZO6nmepjWVgsarJfLjMDjEGSDMwEl5s0n4h7eSUyMYEbC3dhNzyXz6zbztTK~7IFiLGpyIXrpLlIzweDx5eJwY-YZzthToBfMPA9~1DAtI6eu9bOO3MtOOLq-JOFf734a21UG9oJJ2exXh6YE3hREk67RP1JYslcC1yWNITswezY-yMJQm3SZmDVHT9v4XYck7is9pf~X6o7BTmHlUoi64KNvJQU5KL~gi5HvRDuzG0iRz42qw7Aul3RF3xGCRaahxQshw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
					alt="yo"
					class="w-[24px] h-[24px] object-cover"
				/>

				<p class="font-bold text-[16px] text-[#11181C] ml-[6px]">Ethereum Classic</p>
				<p class="text-[16px] font-medium text-[#889096] ml-[.5ch]">ETH</p>

				<p
					class="bg-[#30A46C] rounded-[4px] px-[6px] py-[2px] text-white font-medium text-[12px] ml-auto"
				>
					UP
				</p>
			</div>
			<div
				class="flex flex-row items-center h-[48px] px-[8px] relative z-10"
				on:focus={() => {
					activeElement = 3;
				}}
				on:mouseover={() => {
					activeElement = 3;
				}}
			>
				<img
					src="https://s3-alpha-sig.figma.com/img/0bb3/e3e6/08a6bbc5e77726f8158338f34371622e?Expires=1675036800&Signature=W0TCaSyy8FJ7ip04kRi5~uYXfi2Awc7XjxNEwZfxzU6DkybGQsw-4OKqtZCV9VCi2TsfDiYp222rzGWoqRMK6kDsTdQcQ8uH28WzhXes5458xgFU0msNclDT~NMLVkvIB84oDjEIzmvMKR3M6wWhwW-JLtZ48eLXZcyrxLspJtCAcnumuq3w7qqJb5Y6ZWHiro4LM9gVsNP1yZxUJdiQvGdaS1vsCySdFbEhUA4J1O4ltXORpjA8iTf8lZZ7mM36mZxPVgfPZM8SLJvtWgsY60GRWhuQIwcKUp6ythji8iJFZd-917xYw6x4JpQySAGzxpaICH2apLCOm7RZ3TrICw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
					alt="yo"
					class="w-[24px] h-[24px] object-cover"
				/>

				<p class="font-bold text-[16px] text-[#11181C] ml-[6px]">Ethereum Max</p>
				<p class="text-[16px] font-medium text-[#889096] ml-[.5ch]">EMAX</p>

				<p
					class="bg-[#E5484D] rounded-[4px] px-[6px] py-[2px] text-white font-medium text-[12px] ml-auto"
				>
					DOWN
				</p>
			</div>
			<div
				class="flex flex-row items-center h-[48px] px-[8px] relative z-10"
				on:focus={() => {
					activeElement = 4;
				}}
				on:mouseover={() => {
					activeElement = 4;
				}}
			>
				<img
					src="https://s3-alpha-sig.figma.com/img/e104/a248/3c1336cc249f1b625f1bdbe42c53f299?Expires=1675036800&Signature=EKnPSVzmO7LTafb2YrN4IHGKqGTZED7K6rc0cUElxhvcu6v5liOJV3uLhlJV2b~ZD6A3s05JPklsglZ38gKVmtMW2Zuw69nXIaHfXtgz6Wida8--jygENXFA8R5PXMYLqL6sBjLh1VfFosdPmtrrAlQicym2Sj2jgdchPIbd58naOT7yYrK3xBfh5OML9yTW3jKFLFnCrqOx~S-uAnu~sisavVO14ncuH3McIgK830raVcPVJah0eff0ZU4ggbBWvNojNNg9gjBoZWdem5HpD1ED9~J~QXfCAMLzP9Neq0WuBrbBVEKrUpiafKQ5AdVg1SKOIg-vKjsZRMPqwOrdYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
					alt="yo"
					class="w-[24px] h-[24px] object-cover"
				/>

				<p class="font-bold text-[16px] text-[#11181C] ml-[6px]">Ethereum Name Service</p>
				<p class="text-[16px] font-medium text-[#889096] ml-[.5ch]">ENS</p>

				<p
					class="bg-[#E5484D] rounded-[4px] px-[6px] py-[2px] text-white font-medium text-[12px] ml-auto"
				>
					DOWN
				</p>
			</div>
			<div
				class="flex flex-row items-center h-[48px] px-[8px] relative z-10"
				on:focus={() => {
					activeElement = 5;
				}}
				on:mouseover={() => {
					activeElement = 5;
				}}
			>
				<img
					src="https://s3-alpha-sig.figma.com/img/7beb/5fb3/5af0c046bbd571cf5692c00476263645?Expires=1675036800&Signature=B9LrgbEmTYymkS6yqpbrCf38F9MaDvAU2Htni9vw6tUrna2gWzy8O5RQHlACBh52KDQ1v7vw~AoTsKTOpUl3LOdbhg3oe0HXye7GVHzZEtdSV5zIrn6VB-pFkE3Rz8LwEf7zYa36YljkaegfxPB3O0i22aKqYoaYKoBERWbfTSc1d72q~EUdjBGK-f6nYJGXuSzckgvxJT9bzzH5h6lu2O0aWpo4R~Bmino5O89cpsNW~TdZcuK5HLcAeMElhuvGb7HDmo94QjauY6yIxH2nnRE75XtF4cMNRm5~pzAG07s5LJ0ZFAOo4NuYMpDIeTn8PpJjTLpI-gRTMckaWpBgXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
					alt="yo"
					class="w-[24px] h-[24px] object-cover"
				/>

				<p class="font-bold text-[16px] text-[#11181C] ml-[6px]">Ethereum PoW</p>
				<p class="text-[16px] font-medium text-[#889096] ml-[.5ch]">ETHW</p>

				<p
					class="bg-[#3E63DD] rounded-[4px] px-[6px] py-[2px] text-white font-medium text-[12px] ml-auto"
				>
					HODL
				</p>
			</div>

			<p class="text-[14px] text-[#889096] font-bold h-[38px] flex items-center px-[8px]">
				Categories
			</p>

			<p class="h-[48px] text-[16px] text-[#11181C] font-bold flex items-center px-[8px]">
				Ethereum Ecosystem
			</p>
		</div>
	</div>
</main>
