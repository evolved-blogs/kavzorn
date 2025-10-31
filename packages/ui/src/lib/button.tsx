import * as React from 'react';
import { cn } from './utils';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'md', ...props }, ref) => {
        const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
        const variants: Record<string, string> = {
            default: 'bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-400',
            outline: 'border border-slate-300 hover:bg-slate-50',
            ghost: 'hover:bg-slate-100'
        };
        const sizes: Record<string, string> = {
            sm: 'h-8 px-3 text-sm',
            md: 'h-10 px-4 text-sm',
            lg: 'h-12 px-6 text-base'
        };
        return (
            <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
        );
    }
);

Button.displayName = 'Button';


