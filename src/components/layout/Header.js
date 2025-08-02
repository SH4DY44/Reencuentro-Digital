'use client'

import { useEffect, useState } from 'react'
import { Container } from '@/components/ui'
import { Logo } from '@/components/common/Logo'
import { Navigation } from './Navigation'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Detectar scroll para efectos visuales
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200' 
          : 'bg-white border-b border-gray-200'
      )}
    >
      <Container>
        <div className="flex justify-between items-center py-4 relative">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Logo variant="default" />
            <Logo variant="mobile" />
          </div>

          {/* Navigation */}
          <Navigation variant="header" />

        </div>
      </Container>
    </header>
  )
}