import { tv } from 'tailwind-variants';
import Root from './button.svelte';
const buttonVariants = tv({
	base: 'inline-flex items-center justify-center whitespace-nowrap rounded-bl-[0.9375rem_15.9375rem] rounded-br-[14.0625rem_0.9375rem] rounded-tl-[15.9375rem_0.9375rem] rounded-tr-[0.9375rem_14.0625rem] border-2 font-medium leading-6 shadow-[15px_28px_25px_-18px_rgba(0,0,0,0.2)] ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	variants: {
		variant: {
			default: 'border-primary-border bg-primary text-primary-foreground hover:bg-primary/90',
			secondary:
				'border-secondary-border bg-secondary text-secondary-foreground hover:bg-secondary/80',
			success: 'border-success-foreground bg-success text-success-foreground hover:bg-success/90',
			warning: 'border-warning-foreground bg-warning text-warning-foreground hover:bg-warning/90',
			danger: 'border-danger-foreground bg-danger text-danger-foreground hover:bg-danger/90',
			destructive:
				'border-destructive-foreground bg-destructive text-destructive-foreground hover:bg-destructive/90',
			outline:
				'border-primary bg-background text-primary hover:bg-accent hover:text-accent-foreground',
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
