import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

const Card = forwardRef(({ className, variant = 'default', ...props }, ref) => {
  const variants = {
    default: 'bg-white border border-gray-200 shadow-sm',
    elevated: 'bg-white border border-gray-200 shadow-lg',
    outlined: 'bg-white border-2 border-gray-300',
    ghost: 'bg-gray-50 border border-gray-100'
  }

  return (
    <div
      ref={ref}
      className={cn(
        'rounded-lg transition-all duration-300',
        variants[variant],
        className
      )}
      {...props}
    />
  )
})

Card.displayName = 'Card'

export { Card }