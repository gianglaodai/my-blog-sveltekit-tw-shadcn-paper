<script>
	import { twMerge } from 'tailwind-merge';
	export let textLead = '';
	export let title = '';
	export let clazz = '';
</script>

<section
	{...$$restProps}
	class={twMerge('flex w-full flex-col items-center justify-start px-6', clazz)}>
	<div class="body mb-5 flex flex-col justify-start px-6 py-12 md:max-w-4xl">
		{#if $$slots.title}
			<slot name="title" />
		{:else}
			<h2 class="mb-2 mt-4 text-3xl font-bold">{title}</h2>
		{/if}
		{#if $$slots.textLead || textLead}
			<p class="overflow-clip text-xl">
				{#if $$slots.textLead}
					<slot name="textLead" />
				{:else}
					{textLead}
				{/if}
			</p>
		{/if}
	</div>
</section>
