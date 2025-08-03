import { Container, Section, Card, Button } from '@/components/ui'
import { DirectorioContactos, ChatApoyo } from '@/components/common'
import { generatePageMetadata } from '@/lib/metadata'
import Link from 'next/link'
import Image from 'next/image'

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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Líneas de Apoyo Especializadas
              </h2>
              <p className="text-lg text-gray-600">
                Profesionales capacitados disponibles para diferentes tipos de crisis
              </p>
            </div>
            
            {/* Sistema de contactos mejorado */}
            <DirectorioContactos compacto={false} />
          </div>
        </Container>
      </Section>

      {/* Sección de Psicólogos Profesionales */}
      <Section background="blue" padding="default">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Psicólogos Profesionales
              </h2>
              <p className="text-lg text-gray-600">
                Especialistas certificados disponibles para apoyo psicológico personalizado
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Psicólogo 1 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3">
                    <Image
                      src="/assets/psicologos/narciso-castaneda.jpg"
                      alt="Mtro. Narciso Castañeda Téllez"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Mtro. Narciso Castañeda Téllez</h3>
                  <p className="text-sm text-gray-600">Psicólogo Clínico</p>
                  <p className="text-xs text-gray-500 mt-1">Cédula: 7214686</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <Button asChild variant="primary" size="sm" className="w-full">
                      <a href="tel:5596923335">📞 55-96-92-33-35</a>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Psicóloga 2 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3">
                    <Image
                      src="/assets/psicologos/alma-beltran.jpg"
                      alt="Mtra. Alma Beltrán"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Mtra. Alma Beltrán</h3>
                  <p className="text-sm text-gray-600">Psicóloga Clínica</p>
                  <p className="text-xs text-gray-500 mt-1">Cédula: 8160009 12353031</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <Button asChild variant="primary" size="sm" className="w-full">
                      <a href="tel:5517055775">📞 55-17-05-57-75</a>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Psicóloga 3 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3">
                    <Image
                      src="/assets/psicologos/carolina-ramirez.jpg"
                      alt="Mtra. Carolina Ramírez Arias"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Mtra. Carolina Ramírez Arias</h3>
                  <p className="text-sm text-gray-600">Psicóloga Clínica</p>
                  <p className="text-xs text-gray-500 mt-1">Cédula: 8334915 14639486</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <Button asChild variant="primary" size="sm" className="w-full">
                      <a href="tel:5513756268">📞 55-13-75-62-68</a>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Psicólogo 4 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3">
                    <Image
                      src="/assets/psicologos/alonzo-flores.jpg"
                      alt="Lic. Alonzo Flores Ramírez"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Lic. Alonzo Flores Ramírez</h3>
                  <p className="text-sm text-gray-600">Psicólogo Clínico</p>
                  <p className="text-xs text-gray-500 mt-1">Cédula: 3976687</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <Button asChild variant="primary" size="sm" className="w-full">
                      <a href="tel:5586143769">📞 55-86-14-37-69</a>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Psicóloga 5 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3">
                    <Image
                      src="/assets/psicologos/rosa-soto.jpg"
                      alt="Mtra. Rosa Soto Villagómez"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Mtra. Rosa Soto Villagómez</h3>
                  <p className="text-sm text-gray-600">Psicóloga Clínica</p>
                  <p className="text-xs text-gray-500 mt-1">Cédula: 12054988 11141885</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <Button asChild variant="primary" size="sm" className="w-full">
                      <a href="tel:7861312911">📞 786-131-2911</a>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Psicólogo 6 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3">
                    <Image
                      src="/assets/psicologos/armando-rosillo.jpg"
                      alt="Mtro. Armando Rosillo Zárate"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Mtro. Armando Rosillo Zárate</h3>
                  <p className="text-sm text-gray-600">Psicólogo Clínico</p>
                  <p className="text-xs text-gray-500 mt-1">Cédula: 11106167</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <Button asChild variant="primary" size="sm" className="w-full">
                      <a href="tel:5544650947">📞 55-44-65-09-47</a>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Psicóloga 7 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3">
                    <Image
                      src="/assets/psicologos/alejandra-gomez.jpg"
                      alt="Lic. Alejandra Gómez Martínez"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Lic. Alejandra Gómez Martínez</h3>
                  <p className="text-sm text-gray-600">Psicóloga Clínica</p>
                  <p className="text-xs text-gray-500 mt-1">Cédula: 09054134</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <Button asChild variant="primary" size="sm" className="w-full">
                      <a href="tel:5551831310">📞 55-51-83-13-10</a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-4">
                Información Importante
              </h3>
              <p className="text-blue-700 leading-relaxed">
                <strong>Todos los psicólogos están certificados</strong> y cuentan con cédula profesional vigente. 
                Puedes contactarlos directamente para agendar una consulta o recibir apoyo inmediato. 
                La confidencialidad y el profesionalismo están garantizados.
              </p>
            </div>
          </div>
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
                <p className="text-xs text-green-600 mb-3">
                  ✓ Chat funcional disponible (esquina inferior derecha)
                </p>
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

            <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-4">
                Recordatorio Importante
              </h3>
              <p className="text-blue-700 leading-relaxed">
                <strong>No estás solo/a.</strong> Buscar ayuda es una muestra de fortaleza, no de debilidad. 
                Estos servicios están diseñados específicamente para personas que han pasado por experiencias como la tuya. 
                Los profesionales entienden y están capacitados para ayudarte.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Chat de apoyo disponible */}
      <ChatApoyo />
    </>
  )
}