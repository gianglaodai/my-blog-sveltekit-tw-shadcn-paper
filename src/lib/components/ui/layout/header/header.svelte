<script>
	import { HeaderItem } from '$lib/components/ui/layout/header';
</script>

<header>
	<nav
		class="primary-nav rounded-bl-[0.9375rem_15.9375rem] rounded-br-[14.0625rem_0.9375rem] rounded-tl-[15.9375rem_0.9375rem] rounded-tr-[0.9375rem_14.0625rem] border-2
      border-solid border-gray-700">
		<ul class="nav-list flex justify-center gap-3 py-5 font-bodyCap">
			<HeaderItem color="sky-900" href="/">TRANG CHỦ</HeaderItem>
			<HeaderItem color="teal-500" href="/article">BÀI VIẾT</HeaderItem>
			<HeaderItem color="yellow-500" href="/about">GIỚI THIỆU</HeaderItem>
			<HeaderItem color="red-500" href="/contact">LIÊN HỆ</HeaderItem>
		</ul>
	</nav>
</header>
