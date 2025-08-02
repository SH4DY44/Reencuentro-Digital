'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export function BackToTop({ 
  threshold = 300,
  className,
  ...props 
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [threshold])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-8 right-8 z-50',
        'w-12 h-12 rounded-full',
        'bg-blue-600 hover:bg-blue-700',
        'text-white shadow-lg hover:shadow-xl',
        'transition-all duration-300',
        'transform hover:scale-110',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        'group',
        className
      )}
      aria-label="Volver arriba"
      {...props}
    >
      <svg 
        className="w-6 h-6 mx-auto transition-transform group-hover:-translate-y-0.5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  )
}