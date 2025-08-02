'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NAVIGATION_ITEMS } from '@/lib/constants'
import { Button } from '@/components/ui'

export function Navigation({ variant = 'header' }) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Cerrar menú móvil al cambiar ruta
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Cerrar menú al hacer scroll (UX improvement)
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const mainItems = NAVIGATION_ITEMS.filter(item => item.variant !== 'primary')
  const ctaItem = NAVIGATION_ITEMS.find(item => item.variant === 'primary')

  if (variant === 'footer') {
    return (
      <div className="space-y-3">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block text-gray-400 hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    )
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        {mainItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'font-medium py-2 transition-colors relative group',
              isActive(item.href)
                ? 'text-blue-600'
                : 'text-gray-700 hover:text-blue-600'
            )}
          >
            {item.label}
            {/* Active indicator */}
            {isActive(item.href) && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
            )}
            {/* Hover indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform" />
          </Link>
        ))}
      </nav>

      {/* CTA Button */}
      {ctaItem && (
        <div className="hidden lg:block">
          <Button asChild variant="primary">
            <Link href={ctaItem.href}>
              {ctaItem.label}
            </Link>
          </Button>
        </div>
      )}

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Abrir menú de navegación"
        aria-expanded={isMobileMenuOpen}
      >
        <svg 
          className={cn(
            'w-6 h-6 transition-transform duration-200',
            isMobileMenuOpen && 'rotate-90'
          )} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 lg:hidden">
            <div className="py-4 space-y-1">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center px-6 py-3 text-base transition-colors',
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50 border-r-2 border-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  <div>
                    <div className="font-medium">{item.label}</div>
                    {item.description && (
                      <div className="text-sm text-gray-500">{item.description}</div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}