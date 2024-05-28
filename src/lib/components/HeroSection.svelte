<script>
	import { twMerge } from 'tailwind-merge';
	export let textLead = '';
	export let title = '';
	export let clazz = '';
</script>

<section
	class={twMerge(
		'flex flex-none flex-col sm:basis-full sm:max-w-full md:max-w-5xl md:basis-1/2 justify-center py-6 px-12 mb-6 border-solid border-2 border-gray-700',
		clazz
	)}>
	<div class="body flex flex-col justify-center px-6 py-12 mb-5">
		<h2 class="text-3xl font-bold mt-4 mb-2">{title}</h2>
		<p class="text-xl overflow-clip">{textLead}</p>
	</div>
</section>

<style>
	section {
		border-bottom-left-radius: 15px 255px;
		border-bottom-right-radius: 225px 15px;
		border-top-left-radius: 255px 15px;
		border-top-right-radius: 15px 225px;
	}
</style>
