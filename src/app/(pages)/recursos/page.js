import { Container, Section, Card, Button } from '@/components/ui'
import { WidgetEmergencia, RecursosDescargables, DirectorioContactos } from '@/components/common'
import { generatePageMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = generatePageMetadata({
  title: 'Biblioteca de Recursos',
  description: 'Colección completa de guías, herramientas y recursos descargables para tu proceso de reintegración',
  keywords: ['recursos', 'biblioteca', 'guías', 'herramientas', 'descargables'],
  path: '/recursos'
})

export default function RecursosPage() {
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
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Biblioteca de Recursos
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Herramientas, guías y recursos que puedes descargar y usar cuando los necesites
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg">
                  <span>✓</span>
                  <span className="text-sm font-medium">Funcionan sin internet</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
                  <span>✓</span>
                  <span className="text-sm font-medium">Descarga gratuita</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-lg">
                  <span>✓</span>
                  <span className="text-sm font-medium">Puedes imprimirlos</span>
                </div>
              </div>
            </div>

            {/* Biblioteca completa de recursos */}
            <RecursosDescargables />
          </div>
        </Container>
      </Section>

      {/* Sección de contactos */}
      <Section background="gray" padding="default">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Contactos de Apoyo
              </h2>
              <p className="text-lg text-gray-600">
                Números verificados y servicios especializados disponibles
              </p>
            </div>
            
            <DirectorioContactos compacto={true} />
            
            <div className="text-center mt-8">
              <Button asChild size="lg">
                <Link href="/ayuda-inmediata">
                  Ver Todos los Contactos de Emergencia
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Enlaces a páginas especializadas */}
      <Section background="blue" padding="default">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explora Otras Secciones
              </h2>
              <p className="text-lg text-gray-600">
                Cada sección tiene recursos y herramientas específicas
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💜</div>
                <h3 className="font-semibold mb-2">Apoyo Emocional</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Técnicas de calma, chat de apoyo y bienestar
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/apoyo-emocional">Explorar</Link>
                </Button>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="font-semibold mb-2">Herramientas Prácticas</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Guías de trámites y procesos paso a paso
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/herramientas">Explorar</Link>
                </Button>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="font-semibold mb-2">Para Familias</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Recursos para familiares y seres queridos
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/familias">Explorar</Link>
                </Button>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}