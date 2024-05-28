<script>
	import HeaderItem from './HeaderItem.svelte';
</script>

<header>
	<nav class="primary-nav">
		<ul class="nav-list flex justify-center gap-3 font-bodyCap py-5">
			<HeaderItem color="red-500" href="/">HOME</HeaderItem>
			<HeaderItem color="orange-500" href="/article">ARTICLE</HeaderItem>
			<HeaderItem color="purple-500" href="/about">ABOUT</HeaderItem>
			<HeaderItem color="blue-500" href="/newsletter">NEWSLETTER</HeaderItem>
			<HeaderItem color="green-500" href="/contact">CONTACT</HeaderItem>
		</ul>
	</nav>
</header>
