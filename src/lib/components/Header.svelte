<script>
	import HeaderItem from './HeaderItem.svelte';
</script>

<header>
	<nav class="primary-nav border-solid border-2 border-gray-700">
		<ul class="nav-list flex justify-center gap-3 font-bodyCap py-5">
			<HeaderItem color="sky-900" href="/">TRANG CHỦ</HeaderItem>
			<HeaderItem color="teal-500" href="/article">BÀI VIẾT</HeaderItem>
			<HeaderItem color="orange-400" href="/newsletter">BẢN TIN</HeaderItem>
			<HeaderItem color="yellow-500" href="/about">GIỚI THIỆU</HeaderItem>
			<HeaderItem color="red-500" href="/contact">LIÊN HỆ</HeaderItem>
		</ul>
	</nav>
</header>

<style>
	nav {
		border-bottom-left-radius: 15px 255px;
		border-bottom-right-radius: 225px 15px;
		border-top-left-radius: 255px 15px;
		border-top-right-radius: 15px 225px;
	}
</style>
