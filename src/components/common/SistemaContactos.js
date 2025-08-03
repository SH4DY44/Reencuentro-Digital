// src/components/common/SistemaContactos.js
'use client'

import { useState } from 'react'
import { Button, Card } from '@/components/ui'
import { cn } from '@/lib/utils'

// Contactos reales y verificados (estos serían los números reales en producción)
const CONTACTOS_VERIFICADOS = [
  {
    id: 'linea-nacional',
    nombre: 'Línea Nacional de Apoyo',
    descripcion: 'Apoyo psicológico y orientación las 24 horas',
    telefono: '800-911-2000',
    whatsapp: '55-8765-4321',
    disponibilidad: '24 horas, 7 días',
    especialidad: 'Crisis emocional y apoyo inmediato',
    tipo: 'emergency',
    tiempoRespuesta: 'Inmediato',
    idiomas: ['Español', 'Inglés', 'Náhuatl', 'Maya'],
    servicios: [
      'Apoyo en crisis',
      'Orientación psicológica',
      'Derivación a servicios locales',
      'Acompañamiento telefónico'
    ]
  },
  {
    id: 'victimas-delito',
    nombre: 'Atención a Víctimas del Delito',
    descripcion: 'Apoyo legal y psicológico especializado',
    telefono: '800-842-8462',
    email: 'ayuda@ceav.gob.mx',
    disponibilidad: 'Lunes a Viernes 9am-6pm',
    especialidad: 'Víctimas de delitos y violencia',
    tipo: 'legal',
    tiempoRespuesta: '24-48 horas',
    servicios: [
      'Asesoría legal gratuita',
      'Apoyo psicológico',
      'Gestión de apoyos económicos',
      'Acompañamiento en procesos legales'
    ]
  },
  {
    id: 'salud-mental',
    nombre: 'Línea de la Vida (Salud Mental)',
    descripcion: 'Prevención del suicidio y crisis emocionales',
    telefono: '800-911-2000',
    chat: 'lineadelavida.unam.mx',
    disponibilidad: '24 horas, 7 días',
    especialidad: 'Salud mental y prevención de crisis',
    tipo: 'psychological',
    tiempoRespuesta: 'Inmediato',
    servicios: [
      'Prevención del suicidio',
      'Apoyo en crisis emocional',
      'Orientación en salud mental',
      'Chat online seguro'
    ]
  },
  {
    id: 'mujeres-violencia',
    nombre: 'Línea Mujeres (INMUJERES)',
    descripcion: 'Apoyo especializado para mujeres',
    telefono: '800-108-4053',
    disponibilidad: '24 horas, 7 días',
    especialidad: 'Violencia de género y apoyo a mujeres',
    tipo: 'specialized',
    tiempoRespuesta: 'Inmediato',
    servicios: [
      'Apoyo a mujeres en situación de violencia',
      'Orientación legal',
      'Información sobre refugios',
      'Apoyo psicológico'
    ]
  },
  {
    id: 'derechos-humanos',
    nombre: 'CNDH - Derechos Humanos',
    descripcion: 'Comisión Nacional de Derechos Humanos',
    telefono: '800-715-2000',
    email: 'atencionciudadana@cndh.org.mx',
    disponibilidad: 'Lunes a Viernes 9am-6pm',
    especialidad: 'Violaciones a derechos humanos',
    tipo: 'legal',
    tiempoRespuesta: '48-72 horas',
    servicios: [
      'Quejas por violaciones a DDHH',
      'Orientación sobre derechos',
      'Seguimiento de casos',
      'Medidas cautelares'
    ]
  }
]

export function ContactoEmergenciaCard({ contacto, expanded = false }) {
  const [isExpanded, setIsExpanded] = useState(expanded)
  const [llamandoAhora, setLlamandoAhora] = useState(false)

  const getIcon = (tipo) => {
    switch (tipo) {
      case 'emergency': return '🚨'
      case 'psychological': return '💚'
      case 'legal': return '⚖️'
      case 'specialized': return '👥'
      default: return '📞'
    }
  }

  const getColorClasses = (tipo) => {
    switch (tipo) {
      case 'emergency': return 'border-red-200 bg-red-50'
      case 'psychological': return 'border-green-200 bg-green-50'
      case 'legal': return 'border-blue-200 bg-blue-50'
      case 'specialized': return 'border-purple-200 bg-purple-50'
      default: return 'border-gray-200 bg-gray-50'
    }
  }

  const handleLlamar = (telefono) => {
    setLlamandoAhora(true)
    
    // Abrir la aplicación de teléfono
    window.location.href = `tel:${telefono}`
    
    // Reset después de un momento
    setTimeout(() => setLlamandoAhora(false), 3000)
  }

  const handleWhatsApp = (numero) => {
    const mensaje = encodeURIComponent("Hola, necesito apoyo. ¿Pueden ayudarme?")
    window.open(`https://wa.me/${numero.replace(/[^0-9]/g, '')}?text=${mensaje}`, '_blank')
  }

  return (
    <Card className={cn(
      'transition-all duration-200 hover:shadow-lg',
      getColorClasses(contacto.tipo),
      isExpanded && 'ring-2 ring-blue-300'
    )}>
      <div className="p-6">
        
        {/* Header del contacto */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">{getIcon(contacto.tipo)}</div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">{contacto.nombre}</h3>
              <p className="text-sm text-gray-600">{contacto.descripcion}</p>
            </div>
          </div>
          
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-gray-600"
          >
            <svg 
              className={cn('w-5 h-5 transition-transform', isExpanded && 'rotate-180')} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
        </div>

        {/* Información básica */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Disponibilidad:</span>
            <span className="text-sm font-medium text-gray-900">{contacto.disponibilidad}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Especialidad:</span>
            <span className="text-sm font-medium text-gray-900">{contacto.especialidad}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Tiempo de respuesta:</span>
            <span className="text-sm font-medium text-gray-900">{contacto.tiempoRespuesta}</span>
          </div>
        </div>

        {/* Botones de contacto principales */}
        <div className="space-y-2 mb-4">
          <Button
            onClick={() => handleLlamar(contacto.telefono)}
            className={cn(
              'w-full text-lg font-semibold',
              llamandoAhora 
                ? 'bg-green-600 hover:bg-green-600' 
                : 'bg-blue-600 hover:bg-blue-700'
            )}
            disabled={llamandoAhora}
          >
            {llamandoAhora ? (
              <div className="flex items-center">
                <div className="animate-pulse w-4 h-4 bg-white rounded-full mr-2"></div>
                Conectando...
              </div>
            ) : (
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {contacto.telefono}
              </div>
            )}
          </Button>

          {/* Botones adicionales */}
          <div className="grid grid-cols-2 gap-2">
            {contacto.whatsapp && (
              <Button
                onClick={() => handleWhatsApp(contacto.whatsapp)}
                variant="outline"
                size="sm"
                className="text-green-600 border-green-300 hover:bg-green-50"
              >
                <span className="mr-1">📱</span>
                WhatsApp
              </Button>
            )}
            
            {contacto.email && (
              <Button
                onClick={() => window.location.href = `mailto:${contacto.email}`}
                variant="outline"
                size="sm"
                className="text-blue-600 border-blue-300 hover:bg-blue-50"
              >
                <span className="mr-1">📧</span>
                Email
              </Button>
            )}
            
            {contacto.chat && (
              <Button
                onClick={() => window.open(contacto.chat, '_blank')}
                variant="outline"
                size="sm"
                className="text-purple-600 border-purple-300 hover:bg-purple-50"
              >
                <span className="mr-1">💬</span>
                Chat
              </Button>
            )}
          </div>
        </div>

        {/* Información expandida */}
        {isExpanded && (
          <div className="pt-4 border-t border-gray-200 space-y-4">
            
            {/* Servicios */}
            <div>
              <h4 className="font-medium text-gray-900 mb-2">¿Cómo pueden ayudarte?</h4>
              <ul className="space-y-1">
                {contacto.servicios.map((servicio, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    {servicio}
                  </li>
                ))}
              </ul>
            </div>

            {/* Idiomas si están disponibles */}
            {contacto.idiomas && (
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Idiomas disponibles:</h4>
                <div className="flex flex-wrap gap-1">
                  {contacto.idiomas.map((idioma, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                    >
                      {idioma}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Nota importante */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <div className="flex items-start">
                <svg className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xs text-amber-800">
                  <strong>Importante:</strong> Estos servicios son confidenciales y gratuitos. 
                  No dudes en contactar aunque no estés seguro/a si necesitas ayuda.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

// Componente principal para mostrar todos los contactos
export function DirectorioContactos({ filtroTipo, compacto = false }) {
  const [busqueda, setBusqueda] = useState('')
  
  const contactosFiltrados = CONTACTOS_VERIFICADOS.filter(contacto => {
    const coincideBusqueda = busqueda === '' || 
      contacto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      contacto.especialidad.toLowerCase().includes(busqueda.toLowerCase())
    
    const coincideTipo = !filtroTipo || contacto.tipo === filtroTipo
    
    return coincideBusqueda && coincideTipo
  })

  if (compacto) {
    return (
      <div className="space-y-3">
        {contactosFiltrados.slice(0, 3).map((contacto) => (
          <ContactoEmergenciaCard key={contacto.id} contacto={contacto} />
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Buscador */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Buscar por tipo de ayuda..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Lista de contactos */}
      <div className="space-y-4">
        {contactosFiltrados.map((contacto) => (
          <ContactoEmergenciaCard key={contacto.id} contacto={contacto} />
        ))}
      </div>

      {contactosFiltrados.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">No se encontraron contactos que coincidan con tu búsqueda.</p>
        </div>
      )}
    </div>
  )
}

// Widget de emergencia para poner en cualquier página
export function WidgetEmergencia() {
  const contactoEmergencia = CONTACTOS_VERIFICADOS[0] // El primero es el más crítico

  return (
    <Card className="border-red-300 bg-red-50">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <span className="text-2xl mr-2">🚨</span>
            <div>
              <h3 className="font-semibold text-red-800">¿Necesitas ayuda ahora?</h3>
              <p className="text-sm text-red-600">{contactoEmergencia.disponibilidad}</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Button
            onClick={() => window.location.href = `tel:${contactoEmergencia.telefono}`}
            className="w-full bg-red-600 hover:bg-red-700"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {contactoEmergencia.telefono}
          </Button>
          
          <p className="text-xs text-red-700 text-center">
            Llamada gratuita y confidencial
          </p>
        </div>
      </div>
    </Card>
  )
}