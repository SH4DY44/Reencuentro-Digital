import { Container, Section, Card, Button } from '@/components/ui'
import { QuickEmergencyContact, ExitButton } from '@/components/common'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Seguridad Digital',
  description: 'Cómo protegerte online y mantener tu privacidad mientras buscas apoyo',
  keywords: ['seguridad digital', 'privacidad', 'protección online', 'navegación segura'],
  path: '/seguridad'
})

export default function SeguridadPage() {
  return (
    <>
      <Section background="default" padding="sm">
        <Container>
          <QuickEmergencyContact />
        </Container>
      </Section>

      <Section background="gray" padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Seguridad Digital</h1>
              <p className="text-xl text-gray-700">
                Cómo protegerte mientras buscas ayuda online
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="text-2xl mr-3">🔒</span>
                  Navegación Segura
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Usar modo incógnito/privado
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Borrar historial después de navegar
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Usar WiFi seguro (no público)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    El botón "Salir Rápido" borra todo automáticamente
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="text-2xl mr-3">📱</span>
                  Comunicación Segura
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Nuestros chats están encriptados
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Puedes usar nombres falsos si quieres
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    No guardamos conversaciones
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    Líneas telefónicas son confidenciales
                  </li>
                </ul>
              </Card>
            </div>
            
            <div className="text-center">
              <Card className="p-8 bg-blue-50 border-blue-200 inline-block">
                <h3 className="text-xl font-semibold mb-4">Botón de Salida Rápida</h3>
                <p className="text-gray-600 mb-6">
                  Si necesitas salir rápidamente de esta página y borrar tu historial, 
                  usa este botón. Te llevará a Google y borrará todo rastro.
                </p>
                <ExitButton />
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}