<script>
	import { twMerge } from 'tailwind-merge';
	import { page } from '$app/stores';
	export let href = '';
	export let clazz = '';
	export let color = '';
</script>

<li>
	<a
		{href}
		class={twMerge(
			'rounded-bl-[0.9375rem_0.1875rem] rounded-br-[0.9375rem_0.3125rem] border-b-4 border-solid pb-0.5 text-xl ',
			`text-${color}`,
			`border-${color}`,
			clazz
		)}
		class:active={$page.url.pathname === href}>
		<slot />
	</a>
</li>

<style>
	a.active {
		text-shadow:
			0.03125rem 0rem currentColor,
			-0.03125rem 0rem currentColor;
	}
</style>
