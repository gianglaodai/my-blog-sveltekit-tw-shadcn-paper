<script>
	import HeaderItem from './HeaderItem.svelte';
</script>

<header>
	<nav class="primary-nav">
		<ul class="nav-list flex justify-center gap-3 font-bodyCap py-5">
			<HeaderItem color="sky-900" href="/">TRANG CHỦ</HeaderItem>
			<HeaderItem color="teal-500" href="/article">BÀI VIẾT</HeaderItem>
			<HeaderItem color="orange-400" href="/newsletter">BẢN TIN</HeaderItem>
			<HeaderItem color="yellow-500" href="/about">GIỚI THIỆU</HeaderItem>
			<HeaderItem color="red-500" href="/contact">LIÊN HỆ</HeaderItem>
		</ul>
	</nav>
</header>
