import { Container, Section, Card, Button } from '@/components/ui'
import { WidgetEmergencia, RecursosDescargables } from '@/components/common'
import { generatePageMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = generatePageMetadata({
  title: 'Herramientas Prácticas',
  description: 'Guías paso a paso, trámites y recursos prácticos para tu proceso de reintegración',
  keywords: ['herramientas', 'guías', 'trámites', 'documentos', 'proceso'],
  path: '/herramientas'
})

export default function HerramientasPage() {
  return (
    <>
      <Section background="default" padding="sm">
        <Container>
          <WidgetEmergencia />
        </Container>
      </Section>

      <Section background="warm" padding="lg">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Herramientas Prácticas</h1>
              <p className="text-xl text-gray-700 mb-8">
                Guías paso a paso para trámites, documentos y procesos importantes
              </p>
            </div>
            
            {/* Recursos descargables de trámites */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Guías Descargables
              </h2>
              <RecursosDescargables categoria="Trámites" />
            </div>
            
            {/* Enlaces a recursos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="font-semibold mb-2">Lista de Trámites</h3>
                <p className="text-sm text-gray-600 mb-4">Descarga la guía completa de trámites esenciales</p>
                <p className="text-xs text-green-600 mb-3">✓ Disponible para descarga</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="font-semibold mb-2">Documentos Oficiales</h3>
                <p className="text-sm text-gray-600 mb-4">Cómo recuperar actas, identificaciones y más</p>
                <p className="text-xs text-green-600 mb-3">✓ Información incluida en guía de trámites</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="font-semibold mb-2">Apoyo Legal</h3>
                <p className="text-sm text-gray-600 mb-4">Contactos de asesoría legal gratuita</p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/ayuda-inmediata">Ver Contactos</Link>
                </Button>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="font-semibold mb-2">Salud y Bienestar</h3>
                <p className="text-sm text-gray-600 mb-4">Acceso a servicios de salud física y mental</p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/apoyo-emocional">Ver Recursos</Link>
                </Button>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-semibold mb-2">Plan de Seguridad</h3>
                <p className="text-sm text-gray-600 mb-4">Crea tu plan personal de seguridad</p>
                <p className="text-xs text-green-600 mb-3">✓ Plantilla descargable disponible</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="font-semibold mb-2">Comunicación Familiar</h3>
                <p className="text-sm text-gray-600 mb-4">Guía para hablar con tu familia</p>
                <p className="text-xs text-green-600 mb-3">✓ Guía descargable disponible</p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}