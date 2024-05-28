<script>
	import HeroSection from '$lib/components/HeroSection.svelte';
</script>

<main class="flex flex-col items-center">
	<HeroSection
		clazz="bg-sky-50"
		title="Hi, I'm Giang Hoang. I am a Software Engineer. I love coding and learn new things. I created this blog to note and share what I learn and want to get contribute from other developers."
		textLead="I worked in IT industry for 10 years. I learned a lot of things. Some of them are very useful and some of them are not but very fun to learn. I will try to write what I learn so far in the funny way so you can feel that programming is very easy.">
	</HeroSection>
	<HeroSection
		clazz="bg-teal-50"
		title="Articles"
		textLead="I will try to write a lot of articles about what I learned so far at first so I can keep my knowledge and try to explain it in funny way. Sometime I will come with advance topic but with the warning so you can read it later if it is too hard to understand.">
	</HeroSection>
	<HeroSection
		clazz="bg-orange-50"
		title="Programming Language"
		textLead="I know C, C++, C#, Java, Python, Javascript, Scala, Kotlin, Go, Rust but my most used programming language is Java so my example will mostly be written in Java. There are some reason behind why I choose Java and you will know it in some articles.">
	</HeroSection>
	<HeroSection
		clazz="bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
		title="Framework"
		textLead="Learn the programming language is easy but learn the framework is not. They are very different. I will try to write about frameworks so we can discuss together about it.">
	</HeroSection>
</main>
