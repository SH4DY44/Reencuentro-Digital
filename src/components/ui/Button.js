import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Button = forwardRef(({ 
  className, 
  variant = 'default', 
  size = 'default', 
  asChild = false, 
  ...props 
}, ref) => {
  const Comp = asChild ? 'span' : 'button'

  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    urgent: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 animate-pulse',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    link: 'bg-transparent text-blue-600 underline-offset-4 hover:underline focus:ring-0 p-0 h-auto'
  }

  const sizes = {
    sm: 'h-9 px-3 text-sm rounded-md',
    default: 'h-10 px-4 py-2 rounded-lg',
    lg: 'h-12 px-8 text-lg rounded-lg',
    xl: 'h-14 px-10 text-xl rounded-xl'
  }

  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:-translate-y-0.5 hover:shadow-lg'

  return (
    <Comp
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button }