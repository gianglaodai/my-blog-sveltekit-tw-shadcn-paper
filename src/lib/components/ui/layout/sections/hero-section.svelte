<section
	class="relative mx-auto grid max-w-4xl gap-5 rounded-lg px-6 py-28
  before:absolute before:-bottom-2 before:-left-2 before:-right-2 before:-top-3 before:-z-10 before:row-start-1 before:row-end-2
  before:rounded-bl-[0.9375rem_15.9375rem] before:rounded-br-[14.0625rem_0.9375rem] before:rounded-tl-[15.9375rem_0.9375rem]
  before:rounded-tr-[0.9375rem_14.0625rem] before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500">
	<picture
		class="avatar relative h-full max-h-max min-h-60 w-full min-w-60 self-start overflow-hidden rounded-bl-[0.9375rem_15.9375rem] rounded-br-[14.0625rem_0.9375rem] rounded-tl-[15.9375rem_0.9375rem]
    rounded-tr-[0.9375rem_14.0625rem] border-8 border-white bg-white">
		<img
			src="avatar.jpg"
			alt="Giang Hoang"
			class="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-bl-[0.9375rem_15.9375rem] rounded-br-[14.0625rem_0.9375rem]
      rounded-tl-[15.9375rem_0.9375rem] rounded-tr-[0.9375rem_14.0625rem] object-cover object-center sm:aspect-square sm:w-full sm:justify-self-center" />
	</picture>
	<h1 class="text-3xl font-bold text-white sm:text-5xl md:text-4xl">
		Hi, I'm Giang Hoàng, the Lazy Programmer Extraordinaire: automating my way to more nap times
		with clean code and functional programming.
	</h1>
	<div class="mt-4 text-xl text-gray-700">
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
		grid-template-areas:
			'avatar title'
			'avatar text';
	}
	picture {
		grid-area: avatar;
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
	}
</style>
