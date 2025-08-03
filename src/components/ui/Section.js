// src/components/ui/Section.js - Componente Section Corregido
import { cn } from '@/lib/utils'

export function Section({ 
  children, 
  background = 'default', 
  padding = 'default',
  className,
  ...props 
}) {
  const backgrounds = {
    // Backgrounds principales
    default: 'bg-white',
    warm: 'bg-stone-50',
    gray: 'bg-gray-50',
    light: 'bg-gray-25',
    
    // Backgrounds con color
    blue: 'bg-blue-600 text-white',
    'blue-light': 'bg-blue-50',
    green: 'bg-green-600 text-white',
    'green-light': 'bg-green-50',
    red: 'bg-red-600 text-white',
    'red-light': 'bg-red-50',
    
    // Backgrounds para situaciones específicas
    urgent: 'bg-red-50 border-t-4 border-red-200',
    success: 'bg-green-50 border-t-4 border-green-200',
    warning: 'bg-yellow-50 border-t-4 border-yellow-200',
    info: 'bg-blue-50 border-t-4 border-blue-200',
    
    // Backgrounds avanzados
    gradient: 'bg-gradient-to-br from-blue-600 to-blue-800 text-white',
    'gradient-warm': 'bg-gradient-to-br from-orange-400 to-red-500 text-white',
    dark: 'bg-gray-900 text-white',
    
    // Backgrounds transparentes
    transparent: 'bg-transparent',
    'glass': 'bg-white/80 backdrop-blur-sm'
  }

  const paddings = {
    none: '',
    xs: 'py-4',
    sm: 'py-8',
    default: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
    '2xl': 'py-32'
  }

  return (
    <section 
      className={cn(
        backgrounds[background],
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}

// Componente helper para secciones con patrones comunes
export function HeroSection({ children, className, ...props }) {
  return (
    <Section 
      background="gradient" 
      padding="xl" 
      className={cn("text-center", className)}
      {...props}
    >
      {children}
    </Section>
  )
}

export function FeatureSection({ children, className, ...props }) {
  return (
    <Section 
      background="warm" 
      padding="lg" 
      className={className}
      {...props}
    >
      {children}
    </Section>
  )
}

export function EmergencySection({ children, className, ...props }) {
  return (
    <Section 
      background="urgent" 
      padding="lg" 
      className={className}
      {...props}
    >
      {children}
    </Section>
  )
}