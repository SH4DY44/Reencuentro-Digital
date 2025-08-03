import React from 'react'
import { cn } from '@/lib/utils'

// src/components/ui/Button.js
export function Button({ 
    children, 
    variant = 'primary', 
    size = 'default',
    className,
    disabled = false,
    loading = false,
    asChild = false,
    ...props 
  }) {
    const baseClasses = 'font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variantClasses = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 focus:ring-blue-500',
      secondary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
      outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
      ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
      urgent: 'bg-red-600 hover:bg-red-700 text-white shadow-sm hover:shadow-lg focus:ring-red-500',
      safe: 'bg-green-600 hover:bg-green-700 text-white shadow-sm hover:shadow-lg focus:ring-green-500'
    }
    
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm rounded-md',
      default: 'px-6 py-3 rounded-lg',
      lg: 'px-8 py-4 text-lg rounded-lg'
    }

    const classes = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      loading && 'cursor-wait',
      className
    )

    // Si asChild es true, aplicar las clases a los children
    if (asChild) {
      return React.cloneElement(children, {
        className: cn(classes, children.props.className),
        ...props
      })
    }
    
    return (
      <button
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
            <span>Cargando...</span>
          </div>
        ) : (
          children
        )}
      </button>
    )
  }