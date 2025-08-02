import { cn } from '@/lib/utils'

export function Section({ 
  children, 
  className, 
  background = 'default',
  padding = 'default',
  ...props 
}) {
  const backgroundClasses = {
    default: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50/30',
    orange: 'bg-orange-50/30',
    dark: 'bg-gray-900'
  }
  
  const paddingClasses = {
    sm: 'py-12',
    default: 'py-20',
    lg: 'py-32',
    none: ''
  }
  
  return (
    <section 
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}