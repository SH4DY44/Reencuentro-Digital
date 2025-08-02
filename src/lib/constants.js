// src/lib/constants.js
export const SITE_CONFIG = {
    name: 'Reencuentro Digital',
    tagline: 'Apoyo Integral y Seguro',
    description: 'Plataforma segura de apoyo integral para personas víctimas de desaparición forzada y sus familias.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    author: 'Universidad Autónoma Metropolitana - Cuajimalpa',
    year: '2025'
  }
  
  export const TEAM_MEMBERS = [
    'Héctor Ledesma Vázquez'
  ]
  
  // Nueva navegación centrada en ayuda real
  export const NAVIGATION_ITEMS = [
    {
      label: 'Inicio',
      href: '/',
      icon: '🏠',
      description: 'Página principal segura'
    },
    {
      label: 'Ayuda Inmediata',
      href: '/ayuda-inmediata',
      icon: '🚨',
      description: 'Necesito ayuda ahora',
      variant: 'urgent'
    },
    {
      label: 'Apoyo Emocional',
      href: '/apoyo-emocional',
      icon: '💜',
      description: 'No estás solo/a'
    },
    {
      label: 'Herramientas Prácticas',
      href: '/herramientas',
      icon: '📋',
      description: 'Guías paso a paso'
    },
    {
      label: 'Para Familias',
      href: '/familias',
      icon: '👨‍👩‍👧‍👦',
      description: 'Cómo ayudar'
    },
    {
      label: 'Seguridad Digital',
      href: '/seguridad',
      icon: '🔒',
      description: 'Protégete online'
    }
  ]
  
  // Líneas de ayuda y contactos de emergencia
  export const EMERGENCY_CONTACTS = [
    {
      name: 'Línea Nacional Contra la Desaparición',
      phone: '800-123-4567',
      available: '24 horas, 7 días',
      type: 'emergency'
    },
    {
      name: 'Apoyo Psicológico de Crisis',
      phone: '800-987-6543',
      available: '24 horas',
      type: 'psychological'
    },
    {
      name: 'Asistencia Legal Gratuita',
      phone: '800-555-0123',
      available: 'Lunes a Viernes 8am-6pm',
      type: 'legal'
    }
  ]
  
  // Mensajes de seguridad y tranquilidad
  export const SAFETY_MESSAGES = [
    {
      title: 'Tu navegación es privada',
      description: 'No guardamos información personal ni rastreamos tu actividad.'
    },
    {
      title: 'Puedes salir en cualquier momento',
      description: 'El botón "Salir Rápido" borra tu historial y cierra la página.'
    },
    {
      title: 'Información verificada',
      description: 'Todos nuestros recursos han sido validados por profesionales.'
    },
    {
      title: 'Sin juicios, solo apoyo',
      description: 'Este es un espacio seguro donde puedes buscar ayuda sin temor.'
    }
  ]
  
  export const COLORS = {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe', 
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8'
    },
    // Colores cálidos y seguros para el nuevo enfoque
    warm: {
      50: '#fefce8',
      100: '#fef3c7',
      500: '#f59e0b',
      600: '#d97706'
    },
    safe: {
      50: '#ecfdf5',
      100: '#d1fae5',
      500: '#10b981',
      600: '#059669'
    },
    urgent: {
      50: '#fef2f2',
      100: '#fee2e2',
      500: '#ef4444',
      600: '#dc2626'
    }
  }
  
  export const BREAKPOINTS = {
    sm: '640px',
    md: '768px', 
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }