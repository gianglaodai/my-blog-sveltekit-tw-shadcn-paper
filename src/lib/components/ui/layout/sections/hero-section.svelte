<section class="relative py-28 rounded-lg max-w-4xl mx-auto gap-5 px-6">
	<picture
		class="avatar w-full h-full min-h-60 min-w-60 max-h-max overflow-hidden relative border-8 border-white bg-white self-start">
		<img
			src="avatar.jpg"
			alt="Giang Hoang"
			class="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover object-center" />
	</picture>
	<h1 class="text-3xl sm:text-5xl md:text-4xl font-bold text-white">
		Hi, I'm Giang Hoàng, the Lazy Programmer Extraordinaire: automating my way to more nap times
		with clean code and functional programming.
	</h1>
	<div class="text-xl mt-4 text-gray-700">
		<p>
			Welcome to my blog! Join me as I navigate the wild world of software development, from the zen
			of clean code to the chaos of functional programming.
		</p>
		<p class="mt-4">
			Welcome to my blog! Join me as I dive into the world of software development, exploring
			everything from clean code principles to the intricacies of functional programming. Let's
			learn and laugh together!
		</p>
	</div>
</section>

<style>
	section {
		display: grid;
		grid-template-areas:
			'avatar title'
			'avatar text';
	}
	section::before {
		@apply absolute -top-2 -left-2 -right-2 -bottom-2 -z-10 row-start-1 row-end-2 bg-gradient-to-r from-cyan-500 to-blue-500;
		border-bottom-left-radius: 15px 255px;
		border-bottom-right-radius: 225px 15px;
		border-top-left-radius: 255px 15px;
		border-top-right-radius: 15px 225px;
		content: '';
	}
	picture {
		grid-area: avatar;
		border-bottom-left-radius: 15px 255px;
		border-bottom-right-radius: 225px 15px;
		border-top-left-radius: 255px 15px;
		border-top-right-radius: 15px 225px;
	}
	picture img {
		border-bottom-left-radius: 15px 255px;
		border-bottom-right-radius: 225px 15px;
		border-top-left-radius: 255px 15px;
		border-top-right-radius: 15px 225px;
	}
	h1 {
		grid-area: title;
	}
	div {
		grid-area: text;
	}

	@media (max-width: 768px) {
		section {
			grid-template-areas:
				'avatar title'
				'text text';
			grid-template-columns: auto 1fr;
		}
	}

	@media (max-width: 640px) {
		section {
			grid-template-areas:
				'title'
				'avatar'
				'text';
		}
		picture {
			justify-self: center;
			width: 100%;
			aspect-ratio: 1/1;
		}
	}
</style>
