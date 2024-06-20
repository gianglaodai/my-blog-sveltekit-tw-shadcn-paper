import { tv } from 'tailwind-variants';
import Root from './button.svelte';
const buttonVariants = tv({
	base: `inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background border-2
          transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
rounded-bl-[0.9375rem_15.9375rem] rounded-br-[14.0625rem_0.9375rem] rounded-tl-[15.9375rem_0.9375rem] rounded-tr-[0.9375rem_14.0625rem]
transition-all duration-300 ease-in-out shadow-[15px_28px_25px_-18px_rgba(0,0,0,0.2)]
focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
	variants: {
		variant: {
			default: 'bg-primary-light text-primary border-primary hover:bg-primary/90',
			destructive: 'bg-destructive text-destructive-foreground border-destructive-foreground hover:bg-destructive/90',
			outline: 'bg-background text-primary border-primary hover:bg-accent hover:text-accent-foreground',
			secondary: 'bg-secondary text-secondary-foreground border-secondary-foreground hover:bg-secondary/80',
			ghost: 'hover:bg-accent hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 hover:underline'
		},
		size: {
			default: 'h-10 px-4 py-2',
			sm: 'h-9 rounded-md px-3',
			lg: 'h-11 rounded-md px-8',
			icon: 'h-10 w-10'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});
export {
	Root,
	//
	Root as Button,
	buttonVariants
};
