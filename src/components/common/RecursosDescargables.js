'use client'

import { useState } from 'react'
import { Card, Button } from '@/components/ui'
import { cn } from '@/lib/utils'

const RECURSOS_DISPONIBLES = {
  'Trámites': [
    {
      id: 'guia-tramites',
      titulo: 'Guía Completa de Trámites',
      descripcion: 'Lista paso a paso de todos los trámites esenciales para tu reintegración',
      formato: 'PDF',
      tamaño: '2.3 MB',
      descargas: 1247,
      categoria: 'Trámites',
      icono: '📋'
    },
    {
      id: 'documentos-oficiales',
      titulo: 'Recuperación de Documentos',
      descripcion: 'Cómo obtener actas de nacimiento, identificación y otros documentos oficiales',
      formato: 'PDF',
      tamaño: '1.8 MB',
      descargas: 892,
      categoria: 'Trámites',
      icono: '📄'
    },
    {
      id: 'plan-seguridad',
      titulo: 'Plan de Seguridad Personal',
      descripcion: 'Plantilla para crear tu plan de seguridad personalizado',
      formato: 'PDF',
      tamaño: '1.2 MB',
      descargas: 567,
      categoria: 'Seguridad',
      icono: '🔒'
    },
    {
      id: 'comunicacion-familiar',
      titulo: 'Guía de Comunicación Familiar',
      descripcion: 'Estrategias para hablar con tu familia sobre tu proceso',
      formato: 'PDF',
      tamaño: '1.5 MB',
      descargas: 734,
      categoria: 'Comunicación',
      icono: '👥'
    },
    {
      id: 'recursos-emocionales',
      titulo: 'Recursos de Apoyo Emocional',
      descripcion: 'Técnicas y ejercicios para el bienestar emocional',
      formato: 'PDF',
      tamaño: '2.1 MB',
      descargas: 445,
      categoria: 'Bienestar',
      icono: '💜'
    },
    {
      id: 'contactos-emergencia',
      titulo: 'Directorio de Contactos de Emergencia',
      descripcion: 'Lista completa de números y servicios de emergencia',
      formato: 'PDF',
      tamaño: '0.8 MB',
      descargas: 1567,
      categoria: 'Emergencia',
      icono: '🚨'
    }
  ]
}

export function RecursosDescargables({ categoria = 'Trámites', maxItems = 6 }) {
  const [descargando, setDescargando] = useState(null)
  const recursos = RECURSOS_DISPONIBLES[categoria] || RECURSOS_DISPONIBLES['Trámites']

  const handleDescargar = async (recurso) => {
    setDescargando(recurso.id)
    
    // Simular descarga
    setTimeout(() => {
      setDescargando(null)
      // Aquí se podría implementar la descarga real
      alert(`Descarga iniciada: ${recurso.titulo}`)
    }, 2000)
  }

  const getColorByCategoria = (categoria) => {
    const colores = {
      'Trámites': 'bg-blue-50 text-blue-700 border-blue-200',
      'Seguridad': 'bg-red-50 text-red-700 border-red-200',
      'Comunicación': 'bg-green-50 text-green-700 border-green-200',
      'Bienestar': 'bg-purple-50 text-purple-700 border-purple-200',
      'Emergencia': 'bg-orange-50 text-orange-700 border-orange-200'
    }
    return colores[categoria] || colores['Trámites']
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recursos.slice(0, maxItems).map((recurso) => (
        <Card key={recurso.id} className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">{recurso.icono}</div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">{recurso.titulo}</h3>
              <p className="text-sm text-gray-600 mb-3">{recurso.descripcion}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className={cn(
                    'px-2 py-1 text-xs rounded-full border',
                    getColorByCategoria(recurso.categoria)
                  )}>
                    {recurso.categoria}
                  </span>
                  <span className="text-xs text-gray-500">{recurso.formato}</span>
                  <span className="text-xs text-gray-500">{recurso.tamaño}</span>
                </div>
                <span className="text-xs text-gray-500">
                  {recurso.descargas} descargas
                </span>
              </div>
              
              <Button
                onClick={() => handleDescargar(recurso)}
                disabled={descargando === recurso.id}
                variant="primary"
                size="sm"
                className="w-full"
              >
                {descargando === recurso.id ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                    <span>Descargando...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Descargar</span>
                  </div>
                )}
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
} 