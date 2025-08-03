import { Container, Section, Card, Button } from '@/components/ui'
import { WidgetEmergencia, ExitButton, RecursosDescargables } from '@/components/common'
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
          <WidgetEmergencia />
        </Container>
      </Section>

      <Section background="gray" padding="lg">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Seguridad Digital</h1>
              <p className="text-xl text-gray-700">
                Cómo protegerte mientras buscas ayuda online
              </p>
            </div>
            
            {/* Botón de salida rápida destacado */}
            <div className="mb-12">
              <Card className="p-8 bg-red-50 border-red-200 text-center">
                <h2 className="text-2xl font-semibold text-red-800 mb-4">
                  Botón de Salida Rápida
                </h2>
                <p className="text-red-700 mb-6 max-w-2xl mx-auto">
                  Si necesitas salir rápidamente de esta página y borrar tu historial, 
                  usa este botón. Te llevará a Google y borrará todo rastro automáticamente.
                </p>
                <ExitButton size="lg" />
                <p className="text-sm text-red-600 mt-4">
                  ⚠️ Este botón realmente funciona - úsalo solo si necesitas salir urgentemente
                </p>
              </Card>
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
                    <div>
                      <strong>Modo incógnito/privado:</strong> Evita que se guarde historial
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <div>
                      <strong>WiFi seguro:</strong> Evita redes públicas para temas sensibles
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <div>
                      <strong>Borrar historial:</strong> Después de navegar, límpialo manualmente
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <div>
                      <strong>Botón &quot;Salir Rápido&quot;:</strong> Hace todo automáticamente
                    </div>
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
                    <div>
                      <strong>Nuestros chats están encriptados</strong> y son privados
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <div>
                      <strong>Puedes usar nombres falsos</strong> si te hace sentir más seguro/a
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <div>
                      <strong>No guardamos conversaciones</strong> permanentemente
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <div>
                      <strong>Líneas telefónicas son confidenciales</strong> por ley
                    </div>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Guía de seguridad descargable */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Plan de Seguridad Personal
                </h2>
                <p className="text-lg text-gray-600">
                  Descarga y personaliza tu propio plan de seguridad
                </p>
              </div>
              
              <RecursosDescargables categoria="Seguridad" />
            </div>

            {/* Consejos adicionales de seguridad */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="font-semibold mb-2">Contraseñas Seguras</h3>
                <p className="text-sm text-gray-600">
                  Usa contraseñas únicas y fuertes para cuentas importantes
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-semibold mb-2">Llamadas Privadas</h3>
                <p className="text-sm text-gray-600">
                  Usa *67 antes del número para ocultar tu número de teléfono
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">🚫</div>
                <h3 className="font-semibold mb-2">Redes Sociales</h3>
                <p className="text-sm text-gray-600">
                  Ten cuidado con lo que compartes públicamente online
                </p>
              </Card>
            </div>

            {/* Instrucciones paso a paso para dispositivos comunes */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="text-2xl mr-3">📱</span>
                  En el Teléfono
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <strong>iPhone:</strong> Safari → Privado → Nueva Pestaña Privada
                  </div>
                  <div>
                    <strong>Android:</strong> Chrome → ⋮ → Nueva pestaña de incógnito
                  </div>
                  <div>
                    <strong>Borrar historial:</strong> Configuración → Privacidad → Borrar datos de navegación
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="text-2xl mr-3">💻</span>
                  En la Computadora
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <strong>Chrome:</strong> Ctrl+Shift+N (Windows) o Cmd+Shift+N (Mac)
                  </div>
                  <div>
                    <strong>Firefox:</strong> Ctrl+Shift+P (Windows) o Cmd+Shift+P (Mac)
                  </div>
                  <div>
                    <strong>Safari:</strong> Cmd+Shift+N (Mac)
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="p-8 bg-blue-50 border-blue-200 inline-block max-w-3xl">
                <h3 className="text-xl font-semibold mb-4">Recuerda</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Tu seguridad es lo más importante.</strong> Si sientes que alguien está 
                  monitoreando tu actividad online o si no te sientes seguro/a navegando desde tu 
                  casa, considera usar una computadora pública en una biblioteca o centro comunitario. 
                  Los profesionales de las líneas de ayuda también pueden orientarte sobre seguridad digital.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}