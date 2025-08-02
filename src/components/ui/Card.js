import { cn } from '@/lib/utils'

export function Card({ 
  children, 
  className, 
  variant = 'default',
  padding = 'default',
  ...props 
}) {
  const variantClasses = {
    default: 'bg-white border border-gray-200 shadow-sm',
    elevated: 'bg-white shadow-md',
    glass: 'bg-white/70 backdrop-blur-sm border border-gray-200',
    dark: 'bg-gray-800 border border-gray-700 text-white'
  }
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8'
  }
  
  return (
    <div
      className={cn(
        'rounded-lg',
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}