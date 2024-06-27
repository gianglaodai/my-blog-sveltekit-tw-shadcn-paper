import { tv } from 'tailwind-variants';
import Root from './button.svelte';
const buttonVariants = tv({
	base: [
		'text-md inline-flex cursor-pointer items-center justify-center whitespace-nowrap ',
		'rounded-paper border-2 font-medium leading-6',
		'shadow-[15px_28px_25px_-18px_rgba(0,0,0,0.2)] ',
		'ring-offset-background transition-all duration-300 ease-in-out',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
		'disabled:pointer-events-none disabled:opacity-50',
		'hover:translate-y-0.5 hover:transform hover:shadow-md'
	],
	variants: {
		variant: {
			default: 'border-primary-border bg-primary text-primary-foreground hover:bg-primary/90',
			secondary:
				'border-secondary-border bg-secondary text-secondary-foreground hover:bg-secondary/80',
			success: 'border-success-foreground bg-success text-success-foreground hover:bg-success/90',
			warning: 'border-warning-foreground bg-warning text-warning-foreground hover:bg-warning/90',
			danger: 'border-danger-foreground bg-danger text-danger-foreground hover:bg-danger/90',
			destructive:
				'border-destructi bg-destructive text-destructive-foreground hover:bg-destructive/90',
			'outline-primary':
				'border-primary-border bg-background text-primary-foreground hover:bg-accent hover:bg-primary',
			'outline-secondary':
				'border-secondary-border bg-background text-secondary-foreground hover:bg-accent hover:bg-secondary',
			'outline-success':
				'border-success-foreground bg-background text-success-foreground hover:bg-accent hover:bg-success',
			'outline-warning':
				'border-warning-foreground bg-background text-warning-foreground hover:bg-accent hover:bg-warning',
			'outline-danger':
				'border-danger-foreground bg-background text-danger-foreground hover:bg-accent hover:bg-danger',
			'outline-destructive':
				'border-destructive-foreground bg-background text-destructive-foreground hover:bg-accent hover:bg-destructive',
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

export { Root, Root as Button, buttonVariants };
