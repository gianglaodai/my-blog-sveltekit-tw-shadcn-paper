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
			'text-xl border-b-4 border-solid pb-0.5',
			`text-${color}`,
			`border-${color}`,
			clazz
		)}
		class:active={$page.url.pathname === href}>
		<slot />
	</a>
</li>

<style>
	a {
		border-bottom-left-radius: 15px 3px;
		border-bottom-right-radius: 15px 5px;
	}
	a.active {
		text-shadow:
			0.5px 0px currentColor,
			-0.5px 0px currentColor;
	}
</style>
