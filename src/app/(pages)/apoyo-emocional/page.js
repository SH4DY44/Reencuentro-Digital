import { Container, Section, Card, Button } from '@/components/ui'
import { EmergencyContactsList, QuickEmergencyContact } from '@/components/common'
import { generatePageMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = generatePageMetadata({
  title: 'Ayuda Inmediata',
  description: 'Recursos de emergencia y apoyo inmediato disponible 24/7',
  keywords: ['ayuda inmediata', 'emergencia', 'crisis', 'apoyo 24/7'],
  path: '/ayuda-inmediata'
})

export default function AyudaInmediataPage() {
  return (
    <>
      <Section background="urgent" padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Ayuda Inmediata</h1>
            <p className="text-xl text-gray-700 mb-8">
              Si estás en crisis o necesitas apoyo urgente, estamos aquí para ti
            </p>
            
            <div className="bg-red-100 border-2 border-red-300 rounded-lg p-6 mb-8">
              <div className="text-6xl mb-4">🚨</div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">
                ¿Estás en peligro inmediato?
              </h2>
              <p className="text-red-700 mb-6">
                Si tu seguridad está en riesgo, contacta inmediatamente a emergencias
              </p>
              <Button asChild variant="urgent" size="lg">
                <a href="tel:911">LLAMAR 911</a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="default" padding="default">
        <Container>
          <EmergencyContactsList />
        </Container>
      </Section>

      <Section background="gray" padding="default">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Otras Opciones de Apoyo
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-semibold mb-4">Chat de Crisis</h3>
                <p className="text-gray-600 mb-4">
                  Si no puedes hablar por teléfono, tenemos chat de texto disponible
                </p>
                <Button className="w-full">Iniciar Chat</Button>
              </Card>
              
              <Card className="p-6">
                <div className="text-4xl mb-4">💜</div>
                <h3 className="text-xl font-semibold mb-4">Apoyo Emocional</h3>
                <p className="text-gray-600 mb-4">
                  Herramientas para manejar emociones intensas y encontrar calma
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/apoyo-emocional">Ver Recursos</Link>
                </Button>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}