// src/app/page.js
import Link from 'next/link'
import { Container, Section, Card, Button } from '@/components/ui'
import { ExitButton } from '@/components/common/ExitButton'
import { EMERGENCY_CONTACTS, SAFETY_MESSAGES } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      {/* Botón de salida rápida flotante */}
      <div className="fixed top-4 right-4 z-50">
        <ExitButton size="sm" className="shadow-lg" />
      </div>

      {/* Hero Section - Mensaje de Seguridad */}
      <Section background="default" padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Mensaje principal de seguridad */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Estás Seguro/a Aquí
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                Este es un espacio seguro y confidencial donde puedes encontrar apoyo, 
                información y recursos sin juicios ni preguntas invasivas.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-green-800 font-medium">Tu privacidad está protegida</span>
              </div>
            </div>

            {/* Opciones principales de ayuda */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              
              {/* Necesito ayuda YA */}
              <Card className="p-8 border-2 border-red-200 bg-red-50 hover:shadow-lg transition-all">
                <div className="text-6xl mb-4">🚨</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Necesito Ayuda AHORA
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Si estás en una situación de crisis o necesitas apoyo inmediato, 
                  tenemos recursos disponibles las 24 horas.
                </p>
                <Button asChild size="lg" className="w-full bg-red-600 hover:bg-red-700">
                  <Link href="/ayuda-inmediata">
                    Obtener Ayuda Inmediata
                  </Link>
                </Button>
              </Card>

              {/* Busco información */}
              <Card className="p-8 border-2 border-blue-200 bg-blue-50 hover:shadow-lg transition-all">
                <div className="text-6xl mb-4">📚</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Busco Información
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Quiero aprender sobre mis derechos, opciones disponibles 
                  y cómo navegar este proceso paso a paso.
                </p>
                <Button asChild variant="outline" size="lg" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  <Link href="/herramientas">
                    Ver Guías y Recursos
                  </Link>
                </Button>
              </Card>
            </div>

            {/* Aviso de seguridad de navegación */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-left">
                  <h3 className="font-semibold text-amber-800 mb-2">Para tu seguridad:</h3>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• Usa modo incógnito/privado en tu navegador</li>
                    <li>• El botón "SALIR RÁPIDO" borra tu historial automáticamente</li>
                    <li>• No almacenamos ninguna información personal</li>
                    <li>• Si alguien más usa tu dispositivo, borra el historial después</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* Contactos de Emergencia */}
      <Section background="gray" padding="default">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Líneas de Ayuda Disponibles
              </h2>
              <p className="text-lg text-gray-600">
                Profesionales capacitados están disponibles para ayudarte
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {EMERGENCY_CONTACTS.map((contact, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">
                    {contact.type === 'emergency' && '🚨'}
                    {contact.type === 'psychological' && '💚'}
                    {contact.type === 'legal' && '⚖️'}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{contact.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    <a href={`tel:${contact.phone}`} className="hover:text-blue-700">
                      {contact.phone}
                    </a>
                  </div>
                  <p className="text-sm text-gray-600">{contact.available}</p>
                  <Button asChild size="sm" className="mt-3 w-full">
                    <a href={`tel:${contact.phone}`}>
                      Llamar Ahora
                    </a>
                  </Button>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                ¿No puedes hablar por teléfono? También tenemos chat seguro disponible.
              </p>
              <Button asChild variant="outline">
                <Link href="/apoyo-emocional">
                  Acceder al Chat de Apoyo
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mensajes de Seguridad y Confianza */}
      <Section background="blue" padding="default">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tu Seguridad Es Nuestra Prioridad
              </h2>
              <p className="text-lg text-gray-600">
                Entendemos que la confianza se gana, no se exige
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SAFETY_MESSAGES.map((message, index) => (
                <Card key={index} className="p-6 text-center bg-white/70 backdrop-blur-sm border-blue-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 && <span className="text-2xl">🔒</span>}
                    {index === 1 && <span className="text-2xl">🚪</span>}
                    {index === 2 && <span className="text-2xl">✅</span>}
                    {index === 3 && <span className="text-2xl">💙</span>}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{message.title}</h3>
                  <p className="text-sm text-gray-600">{message.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Navegación a Recursos Específicos */}
      <Section background="default" padding="default">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              ¿Qué Tipo de Apoyo Necesitas?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💜</div>
                <h3 className="font-semibold text-gray-900 mb-2">Apoyo Emocional</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Espacios seguros para expresar lo que sientes
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/apoyo-emocional">Acceder</Link>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="font-semibold text-gray-900 mb-2">Para Familias</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Guías para familiares que quieren ayudar
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/familias">Acceder</Link>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-semibold text-gray-900 mb-2">Seguridad Digital</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Cómo protegerte en línea y comunicarte de forma segura
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/seguridad">Acceder</Link>
                </Button>
              </Card>
            </div>

            <div className="mt-10 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                <strong>Recuerda:</strong> No tienes que hacer esto solo/a. Hay personas y organizaciones 
                que entienden por lo que has pasado y están aquí para apoyarte en cada paso del camino. 
                Toma tu tiempo, ve a tu ritmo, y usa solo los recursos que te hagan sentir cómodo/a.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}