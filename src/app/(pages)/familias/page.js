import { Container, Section, Card, Button } from '@/components/ui'
import { QuickEmergencyContact } from '@/components/common'
import { generatePageMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = generatePageMetadata({
  title: 'Para Familias',
  description: 'Guías y recursos para familiares que quieren apoyar en el proceso de reintegración',
  keywords: ['familias', 'apoyo familiar', 'reintegración', 'comunicación familiar'],
  path: '/familias'
})

export default function FamiliasPage() {
  return (
    <>
      <Section background="default" padding="sm">
        <Container>
          <QuickEmergencyContact />
        </Container>
      </Section>

      <Section background="blue" padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Para Familias</h1>
            <p className="text-xl text-gray-700 mb-12">
              Cómo apoyar a tu ser querido en su proceso de reintegración
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 text-left">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-semibold mb-4">Lo Más Importante</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Paciencia - cada proceso es diferente</li>
                  <li>• Escucha sin juzgar</li>
                  <li>• Respeta sus tiempos y límites</li>
                  <li>• Busca apoyo para ti también</li>
                </ul>
              </Card>
              
              <Card className="p-8 text-left">
                <div className="text-4xl mb-4">🤗</div>
                <h3 className="text-xl font-semibold mb-4">Cómo Ayudar</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Mantén rutinas normales en casa</li>
                  <li>• Pregunta qué necesita, no asumas</li>
                  <li>• Da espacio cuando lo pida</li>
                  <li>• Celebra pequeños avances</li>
                </ul>
              </Card>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-semibold text-amber-800 mb-4">
                Recursos en Desarrollo
              </h3>
              <p className="text-amber-700 mb-4">
                Estamos preparando guías detalladas, talleres para familias y grupos de apoyo específicos
              </p>
              <Button asChild variant="outline">
                <Link href="/apoyo-emocional">Ver Apoyo Emocional Mientras Tanto</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}