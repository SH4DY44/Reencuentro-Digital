// src/components/common/EmergencyContact.js
import { Card, Button } from '@/components/ui'
import { EMERGENCY_CONTACTS } from '@/lib/constants'

export function EmergencyContactCard({ contact, className }) {
  const getIcon = (type) => {
    switch (type) {
      case 'emergency': return '🚨'
      case 'psychological': return '💚'
      case 'legal': return '⚖️'
      default: return '📞'
    }
  }

  return (
    <Card className={`p-6 text-center hover:shadow-lg transition-shadow ${className}`}>
      <div className="text-3xl mb-3">{getIcon(contact.type)}</div>
      <h3 className="font-semibold text-gray-900 mb-2">{contact.name}</h3>
      <div className="text-2xl font-bold text-blue-600 mb-2">
        <a href={`tel:${contact.phone}`} className="hover:text-blue-700">
          {contact.phone}
        </a>
      </div>
      <p className="text-sm text-gray-600 mb-3">{contact.available}</p>
      <Button asChild size="sm" className="w-full">
        <a href={`tel:${contact.phone}`}>
          Llamar Ahora
        </a>
      </Button>
    </Card>
  )
}

export function EmergencyContactsList({ title = "Líneas de Ayuda Disponibles", showDescription = true }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      {showDescription && (
        <p className="text-lg text-gray-600 mb-10">
          Profesionales capacitados están disponibles para ayudarte
        </p>
      )}
      
      <div className="grid md:grid-cols-3 gap-6">
        {EMERGENCY_CONTACTS.map((contact, index) => (
          <EmergencyContactCard key={index} contact={contact} />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 mb-4">
          ¿No puedes hablar por teléfono? También tenemos chat seguro disponible.
        </p>
      </div>
    </div>
  )
}

// Componente compacto para usar en otras páginas
export function QuickEmergencyContact() {
  const emergencyContact = EMERGENCY_CONTACTS[0] // Primera línea de emergencia

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl mr-3">🚨</span>
          <div>
            <p className="font-semibold text-red-800">¿Necesitas ayuda inmediata?</p>
            <p className="text-sm text-red-600">{emergencyContact.available}</p>
          </div>
        </div>
        <Button asChild variant="urgent" size="sm">
          <a href={`tel:${emergencyContact.phone}`}>
            {emergencyContact.phone}
          </a>
        </Button>
      </div>
    </div>
  )
}