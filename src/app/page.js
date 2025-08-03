import Link from 'next/link'
import { Container, Section, Card, Button } from '@/components/ui'
import { ExitButton, SafetyBadges, EmergencyWidget, NavigationHelper } from '@/components/common'
import { EMERGENCY_CONTACTS, SAFETY_MESSAGES, NAVIGATION_ITEMS } from '@/lib/constants'

export default function HomePage() {
  const helpOptions = [
    {
      id: 'emergency',
      title: 'Necesito Ayuda AHORA',
      description: 'Estoy en crisis y necesito apoyo inmediato las 24 horas',
      icon: '🚨',
      href: '/ayuda-inmediata',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-800',
      buttonVariant: 'urgent'
    },
    {
      id: 'information',
      title: 'Busco Información',
      description: 'Quiero explorar recursos y herramientas a mi ritmo',
      icon: '📚',
      href: '/apoyo-emocional',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-800',
      buttonVariant: 'primary'
    }
  ]

  const mainSections = NAVIGATION_ITEMS.filter(item => 
    ['apoyo-emocional', 'herramientas', 'familias', 'seguridad'].includes(item.href.replace('/', ''))
  )

  return (
    <>
      {/* Botón de Salida Rápida - Siempre Visible */}
      <div className="fixed top-20 right-4 z-50">
        <ExitButton size="lg" className="shadow-lg animate-pulse" />
      </div>

      {/* Hero Section - Mensaje de Seguridad Principal */}
      <Section background="default" padding="xl">
        <Container>
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Mensaje Principal de Seguridad */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <span className="text-4xl">🛡️</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Estás Seguro/a Aquí
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
                Este es un espacio <strong>completamente seguro y confidencial</strong> donde puedes 
                encontrar apoyo, información y recursos sin juicios ni preguntas invasivas.
              </p>

              {/* Indicadores de Seguridad */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-green-800 font-medium text-sm">Navegación Privada</span>
                </div>
                <div className="flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="text-blue-800 font-medium text-sm">Sin Registro Requerido</span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-50 border border-purple-200 rounded-lg px-4 py-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span className="text-purple-800 font-medium text-sm">Información Verificada</span>
                </div>
              </div>
            </div>

            {/* Opciones Principales de Ayuda */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {helpOptions.map((option) => (
                <Card 
                  key={option.id} 
                  className={`p-8 ${option.bgColor} border-2 ${option.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">{option.icon}</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {option.title}
                    </h2>
                    <p className={`${option.textColor} mb-8 text-lg leading-relaxed`}>
                      {option.description}
                    </p>
                    <Button 
                      asChild 
                      variant={option.buttonVariant} 
                      size="lg" 
                      className="w-full"
                    >
                      <Link href={option.href}>
                        {option.id === 'emergency' ? 'Obtener Ayuda Inmediata' : 'Explorar Recursos'}
                        <span className="ml-2">→</span>
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Instrucciones de Navegación Segura */}
            <Card className="p-8 bg-yellow-50 border-2 border-yellow-200 mb-12">
              <div className="text-center">
                <span className="text-4xl mb-4 block">ℹ️</span>
                <h3 className="text-xl font-bold text-yellow-800 mb-4">
                  Navegación Segura
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">🚪 Salir Rápido</h4>
                    <p className="text-yellow-700 text-sm">
                      El botón rojo te lleva a Google y borra automáticamente tu historial de navegación.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">🔒 Privacidad</h4>
                    <p className="text-yellow-700 text-sm">
                      No guardamos información personal ni rastreamos tu actividad en este sitio.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">📱 Dispositivos</h4>
                    <p className="text-yellow-700 text-sm">
                      Considera usar modo incógnito y borrar el historial después de navegar.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Aviso de Confidencialidad */}
      <Section background="blue" padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Tu Confidencialidad es Nuestra Prioridad
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {SAFETY_MESSAGES.map((message, index) => (
                <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h3 className="font-semibold mb-3">{message.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {message.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Secciones Principales */}
      <Section background="warm" padding="lg">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explora Nuestros Recursos
              </h2>
              <p className="text-xl text-gray-700">
                Todo diseñado pensando en tu bienestar y seguridad
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mainSections.map((section) => (
                <Card 
                  key={section.href} 
                  className="p-6 hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {section.label}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {section.description}
                  </p>
                  <Button asChild variant="secondary" size="sm" className="w-full">
                    <Link href={section.href}>
                      Explorar
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Widget de Emergencia Siempre Accesible */}
      <Section background="urgent" padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-red-50 border-2 border-red-200">
              <div className="text-center mb-8">
                <span className="text-6xl mb-4 block">📞</span>
                <h2 className="text-2xl font-bold text-red-800 mb-4">
                  Líneas de Crisis - Disponibles 24/7
                </h2>
                <p className="text-red-700">
                  Si estás en peligro inmediato o necesitas hablar con alguien ahora mismo
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {EMERGENCY_CONTACTS.map((contact, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 text-center">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                      {contact.name}
                    </h3>
                    <a 
                      href={`tel:${contact.phone}`}
                      className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors block mb-2"
                    >
                      {contact.phone}
                    </a>
                    <p className="text-gray-600 text-xs">
                      {contact.available}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button asChild variant="primary" size="lg">
                  <Link href="/ayuda-inmediata">
                    Ver Más Recursos de Emergencia
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Mensaje Final de Esperanza */}
      <Section background="default" padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-6xl mb-6 block">💜</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                No Estás Solo/a en Este Proceso
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Cada paso que das hacia tu recuperación es valioso. Hay personas capacitadas 
                y recursos disponibles para acompañarte en este camino hacia el reencuentro 
                contigo mismo/a y con quienes amas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="primary" size="lg">
                  <Link href="/apoyo-emocional">
                    Encontrar Apoyo Emocional
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/herramientas">
                    Ver Herramientas Prácticas
                  </Link>
                </Button>
              </div>
            </div>

            {/* Recordatorio de Seguridad Final */}
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 text-sm">
                <strong>Recordatorio:</strong> Si alguien más usa tu dispositivo, 
                recuerda usar el botón "Salir Rápido" antes de alejarte. 
                Tu seguridad es lo más importante.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}