<script>
	import { Button } from '$lib';
	import { HeroSection, HomeSection } from '$lib/components/ui/layout/sections/index.js';
</script>

<main class="flex flex-col items-center">
	<HeroSection />
	<HomeSection clazz="bg-teal-50" title="Articles">
		<div slot="textLead" class="flex flex-col gap-4">
			<p>
				I’ll try to write a lot of articles about what I’ve learned so far – it's like my personal
				diary, but less embarrassing. I aim to keep things light and funny, even when diving into
				advanced topics. Don’t worry, I’ll give you a heads up if things get too complex, so you can
				save them for when you’re ready (or never, no judgment here).
			</p>
			<p>
				I dabble in quite a few programming languages: C, C++, C#, Java, Python, JavaScript, Scala,
				Kotlin, Go, Rust... you name it. But my true love is Java, so most of my examples will be in
				Java. Why Java, you ask? Stick around, and I’ll share my reasons (hint: it’s not just
				because I enjoy coffee).
			</p>
			<div class="rounded-parent flex flex-wrap gap-4">
				<Button variant="default" size="lg">Click</Button>
				<Button variant="secondary" size="lg">Click</Button>
				<Button variant="success" size="lg">Click</Button>
				<Button variant="warning" size="lg">Click</Button>
				<Button variant="danger" size="lg">Click</Button>

				<Button variant="outline-primary" size="lg">Click</Button>
				<Button variant="outline-secondary" size="lg">Click</Button>
				<Button variant="outline-success" size="lg">Click</Button>
				<Button variant="outline-warning" size="lg">Click</Button>
				<Button variant="outline-danger" size="lg">Click</Button>
			</div>
		</div>
	</HomeSection>
	<HomeSection
		clazz="bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
		title="About Me"
		textLead="">
		<div slot="textLead" class="flex flex-col gap-4">
			<p>
				I started my programming journey a bit late – like, really late. I transitioned from a
				Master's degree and four years in underground construction and mining engineering to the
				exciting world of coding. Now, instead of digging tunnels, I'm digging through lines of
				code, mainly in Java. But my curiosity doesn’t stop there – I dabble in all sorts of
				programming languages, especially the functional ones like Scala and Clojure, because who
				doesn't love a good challenge?
			</p>
			<p>
				This blog is my way of sharing what I've learned, in the simplest and most entertaining way
				possible. My goal is to create a space where we can laugh, learn, and discuss various
				programming topics. Whether you're a seasoned developer or just starting out (especially if
				you started late like me), I hope you’ll find my posts helpful and maybe even a bit
				humorous.
			</p>
		</div>
	</HomeSection>
</main>
