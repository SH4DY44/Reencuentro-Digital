// src/app/(pages)/herramientas/page.js
import { Container, Section, Card, Button } from '@/components/ui'
import { QuickEmergencyContact } from '@/components/common'
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
          <QuickEmergencyContact />
        </Container>
      </Section>

      <Section background="warm" padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Herramientas Prácticas</h1>
            <p className="text-xl text-gray-700 mb-12">
              Guías paso a paso para trámites, documentos y procesos importantes
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="font-semibold mb-2">Lista de Trámites</h3>
                <p className="text-sm text-gray-600 mb-4">Qué documentos necesitas y dónde conseguirlos</p>
                <Button size="sm" className="w-full">Próximamente</Button>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="font-semibold mb-2">Documentos Oficiales</h3>
                <p className="text-sm text-gray-600 mb-4">Cómo recuperar actas, identificaciones y más</p>
                <Button size="sm" className="w-full">Próximamente</Button>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="font-semibold mb-2">Apoyo Legal</h3>
                <p className="text-sm text-gray-600 mb-4">Tus derechos y cómo ejercerlos</p>
                <Button size="sm" className="w-full">Próximamente</Button>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="font-semibold mb-2">Salud y Bienestar</h3>
                <p className="text-sm text-gray-600 mb-4">Acceso a servicios de salud física y mental</p>
                <Button size="sm" className="w-full">Próximamente</Button>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-semibold mb-2">Oportunidades Laborales</h3>
                <p className="text-sm text-gray-600 mb-4">Capacitación y búsqueda de empleo</p>
                <Button size="sm" className="w-full">Próximamente</Button>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="font-semibold mb-2">Vivienda Temporal</h3>
                <p className="text-sm text-gray-600 mb-4">Opciones de alojamiento seguro</p>
                <Button size="sm" className="w-full">Próximamente</Button>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}