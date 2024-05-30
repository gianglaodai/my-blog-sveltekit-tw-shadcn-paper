<script>
	import { twMerge } from 'tailwind-merge';
	export let textLead = '';
	export let title = '';
	export let clazz = '';
</script>

<section
	{...$$restProps}
	class={twMerge('flex flex-col justify-center items-center w-full', clazz)}>
	<div class="body flex flex-col justify-center px-6 py-12 mb-5 md:max-w-3xl">
		{#if $$slots.title}
			<slot name="title" />
		{:else}
			<h2 class="text-3xl font-bold mt-4 mb-2">{title}</h2>
		{/if}
		{#if $$slots.textLead || textLead}
			<p class="text-xl overflow-clip">
				{#if $$slots.textLead}
					<slot name="textLead" />
				{:else}
					{textLead}
				{/if}
			</p>
		{/if}
	</div>
</section>

<style>
	section {
		/* border-bottom-left-radius: 15px 255px; */
		/* border-bottom-right-radius: 225px 15px; */
		/* border-top-left-radius: 255px 15px; */
		/* border-top-right-radius: 15px 225px; */
	}
</style>
