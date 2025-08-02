// src/components/ui/Container.js
import { cn } from '@/lib/utils'

export function Container({ children, className, size = 'default', ...props }) {
  const sizeClasses = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    lg: 'max-w-8xl',
    full: 'max-w-full'
  }
  
  return (
    <div 
      className={cn(
        'mx-auto px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}







