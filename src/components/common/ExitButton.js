// src/components/common/ExitButton.js
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

export function ExitButton({ 
  className,
  variant = 'urgent',
  size = 'default',
  redirectTo = 'https://www.google.com'
}) {
  const [isConfirming, setIsConfirming] = useState(false)

  const handleExit = () => {
    if (!isConfirming) {
      setIsConfirming(true)
      // Auto-reset después de 3 segundos si no confirman
      setTimeout(() => setIsConfirming(false), 3000)
      return
    }

    // Limpiar historial y datos de navegación
    try {
      // Limpiar historial
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, '', redirectTo)
      }
      
      // Limpiar localStorage y sessionStorage
      if (typeof Storage !== 'undefined') {
        localStorage.clear()
        sessionStorage.clear()
      }
      
      // Limpiar cookies (las que se puedan)
      document.cookie.split(";").forEach(cookie => {
        const eqPos = cookie.indexOf("=")
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"
      })
      
      // Redirigir inmediatamente
      window.location.replace(redirectTo)
      
    } catch (error) {
      // Fallback: simplemente redirigir
      window.location.href = redirectTo
    }
  }

  const handleCancel = () => {
    setIsConfirming(false)
  }

  if (isConfirming) {
    return (
      <div className="flex items-center space-x-2">
        <Button
          onClick={handleExit}
          variant="urgent"
          size={size}
          className="bg-red-600 hover:bg-red-700 text-white animate-pulse"
        >
          ✓ Confirmar Salida
        </Button>
        <Button
          onClick={handleCancel}
          variant="outline"
          size={size}
          className="border-gray-400"
        >
          Cancelar
        </Button>
      </div>
    )
  }

  return (
    <Button
      onClick={handleExit}
      variant={variant}
      size={size}
      className={cn(
        'bg-red-600 hover:bg-red-700 text-white font-semibold',
        'border-2 border-red-600 hover:border-red-700',
        'transition-all duration-200',
        'focus:ring-2 focus:ring-red-500 focus:ring-offset-2',
        'flex items-center justify-center',
        className
      )}
      aria-label="Salir rápido de la página y borrar historial"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 12h13.5" />
      </svg>
      SALIR RÁPIDO
    </Button>
  )
}

// Componente para el botón fijo en la esquina
export function FloatingExitButton() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <ExitButton size="sm" className="shadow-lg" />
    </div>
  )
}