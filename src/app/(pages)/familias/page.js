import { Container, Section, Card, Button } from '@/components/ui'
import { WidgetEmergencia, RecursosDescargables, ChatApoyo } from '@/components/common'
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
          <WidgetEmergencia />
        </Container>
      </Section>

      <Section background="blue" padding="lg">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Para Familias</h1>
              <p className="text-xl text-gray-700 mb-8">
                Cómo apoyar a tu ser querido en su proceso de reintegración
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 text-left">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-xl font-semibold mb-4">Lo Más Importante</h3>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <strong>Paciencia</strong> - cada proceso es diferente y toma tiempo
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <strong>Escucha sin juzgar</strong> - valida sus sentimientos
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <strong>Respeta sus límites</strong> - no presiones
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <strong>Busca apoyo para ti también</strong> - es importante
                  </li>
                </ul>
              </Card>
              
              <Card className="p-8 text-left">
                <div className="text-4xl mb-4">🤗</div>
                <h3 className="text-xl font-semibold mb-4">Cómo Ayudar</h3>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Mantén rutinas normales en casa
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Pregunta qué necesita, no asumas
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Da espacio cuando lo pida
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Celebra pequeños avances
                  </li>
                </ul>
              </Card>
            </div>

            {/* Guía descargable para familias */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Guía Completa de Comunicación
                </h2>
                <p className="text-lg text-gray-600">
                  Descarga nuestra guía detallada sobre cómo comunicarte efectivamente
                </p>
              </div>
              
              <RecursosDescargables categoria="Relaciones" />
            </div>

            {/* Señales de alerta para familias */}
            <div className="mb-12">
              <Card className="p-8 bg-amber-50 border-amber-200">
                <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                  <span className="text-2xl mr-3">⚠️</span>
                  Cuándo Buscar Ayuda Profesional
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-amber-800 mb-2">Señales emocionales:</h4>
                    <ul className="text-amber-700 space-y-1 text-sm">
                      <li>• Depresión severa o pensamientos de lastimarse</li>
                      <li>• Ataques de pánico frecuentes</li>
                      <li>• Aislamiento total por más de una semana</li>
                      <li>• Cambios drásticos de personalidad</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-800 mb-2">Señales físicas:</h4>
                    <ul className="text-amber-700 space-y-1 text-sm">
                      <li>• No come ni duerme por varios días</li>
                      <li>• Síntomas físicos sin causa médica</li>
                      <li>• Uso de alcohol o drogas para lidiar</li>
                      <li>• Comportamientos autodestructivos</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-amber-300">
                  <p className="text-amber-800 font-medium">
                    Si notas estas señales, busca ayuda profesional inmediatamente.
                  </p>
                </div>
              </Card>
            </div>

            {/* Recursos para diferentes tipos de familia */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">👨‍👩‍👧</div>
                <h3 className="font-semibold mb-2">Para Padres</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Cómo apoyar a tu hijo/a adulto/a
                </p>
                <p className="text-xs text-green-600">Información incluida en guía descargable</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">💏</div>
                <h3 className="font-semibold mb-2">Para Parejas</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Reconstruir intimidad y confianza
                </p>
                <p className="text-xs text-green-600">Información incluida en guía descargable</p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">👧👦</div>
                <h3 className="font-semibold mb-2">Para Hermanos</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Entender y apoyar apropiadamente
                </p>
                <p className="text-xs text-green-600">Información incluida en guía descargable</p>
              </Card>
            </div>

            <div className="text-center">
              <Card className="p-8 bg-blue-50 border-blue-200 inline-block max-w-2xl">
                <h3 className="text-xl font-semibold mb-4">¿Necesitas Hablar con Alguien?</h3>
                <p className="text-gray-600 mb-6">
                  A veces las familias también necesitan apoyo. No dudes en buscar ayuda 
                  para ti mientras apoyas a tu ser querido.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild>
                    <Link href="/apoyo-emocional">Apoyo Emocional</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/ayuda-inmediata">Líneas de Crisis</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Chat de apoyo también para familias */}
      <ChatApoyo />
    </>
  )
}