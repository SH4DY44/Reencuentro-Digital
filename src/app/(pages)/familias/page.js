import { Container, Section, Card, Button } from '@/components/ui'
import { WidgetEmergencia, RecursosDescargables, TestimoniosAnonymous } from '@/components/common'
import { generatePageMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = generatePageMetadata({
  title: 'Para Familias - Cómo Ayudar',
  description: 'Guía práctica para familias sobre cómo acompañar a un ser querido en su proceso de reintegración',
  keywords: ['familias', 'cómo ayudar', 'reintegración familiar', 'apoyo familiar'],
  path: '/familias'
})

const FAMILY_SUPPORT_SECTIONS = [
  {
    id: 'que-esperar',
    title: 'Qué Esperar Cuando Alguien Regresa',
    icon: '🏠',
    content: [
      'El proceso de reintegración toma tiempo y es diferente para cada persona',
      'Es normal que haya momentos difíciles, avances y retrocesos',
      'La paciencia y el amor incondicional son fundamentales',
      'Buscar ayuda profesional es una muestra de fortaleza, no de debilidad'
    ]
  },
  {
    id: 'comunicacion',
    title: 'Técnicas de Comunicación No Invasiva',
    icon: '💬',
    content: [
      'Escucha sin juzgar, permite que compartan a su ritmo',
      'Evita preguntas específicas sobre lo que pasó inicialmente',
      'Usa frases como "Estoy aquí para ti" en lugar de "¿Qué te hicieron?"',
      'Respeta los silencios y los momentos en que no quieran hablar'
    ]
  },
  {
    id: 'apoyo-practico',
    title: 'Apoyo Práctico Día a Día',
    icon: '🤝',
    content: [
      'Mantén rutinas normales pero sé flexible con los cambios',
      'Permite que tomen decisiones sobre cosas pequeñas (qué comer, qué ver)',
      'Crea espacios seguros y predecibles en casa',
      'Acompaña en trámites pero deja que lideren cuando se sientan listos'
    ]
  },
  {
    id: 'autocuidado',
    title: 'Cuidar al Cuidador',
    icon: '❤️',
    content: [
      'Tu bienestar emocional también importa',
      'Busca apoyo en grupos de familias o terapia individual',
      'No puedes "arreglar" todo, y eso está bien',
      'Celebra los pequeños avances junto con tu ser querido'
    ]
  }
]

const WARNING_SIGNS = [
  {
    title: 'Señales de Alarma',
    signs: [
      'Aislamiento extremo por más de 2 semanas',
      'Menciones de autolesión o pensamientos suicidas',
      'Uso excesivo de alcohol o sustancias',
      'Agresividad o violencia hacia sí mismo o otros'
    ],
    action: 'Si observas estas señales, busca ayuda profesional inmediatamente'
  }
]

export default function FamiliasPage() {
  return (
    <>
      {/* Widget de Emergencia */}
      <Section background="default" padding="sm">
        <Container>
          <WidgetEmergencia />
        </Container>
      </Section>

      {/* Header Section */}
      <Section background="warm" padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Para Familias: Cómo Ayudar
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Tu amor y apoyo son fundamentales. Aquí encontrarás herramientas para 
              acompañar a tu ser querido de la mejor manera posible.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <span className="text-2xl mb-2 block">👨‍👩‍👧‍👦</span>
                <p className="text-blue-800 font-medium text-sm">Apoyo Familiar</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <span className="text-2xl mb-2 block">🕒</span>
                <p className="text-green-800 font-medium text-sm">A Tu Ritmo</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <span className="text-2xl mb-2 block">💜</span>
                <p className="text-purple-800 font-medium text-sm">Con Amor</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Guías de Apoyo Familiar */}
      <Section background="default" padding="lg">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {FAMILY_SUPPORT_SECTIONS.map((section, index) => (
                <Card 
                  key={section.id} 
                  className="p-8 hover:shadow-lg transition-shadow h-full"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{section.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <span className="text-green-600 font-bold text-lg mt-0.5">•</span>
                            <span className="text-gray-700 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Señales de Alarma */}
      <Section background="urgent" padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            {WARNING_SIGNS.map((warning, index) => (
              <Card key={index} className="p-8 border-red-200 bg-red-50">
                <div className="text-center mb-6">
                  <span className="text-6xl mb-4 block">⚠️</span>
                  <h2 className="text-2xl font-bold text-red-800 mb-4">
                    {warning.title}
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-semibold text-red-800 mb-4">
                      Busca ayuda profesional si observas:
                    </h3>
                    <ul className="space-y-2">
                      {warning.signs.map((sign, signIndex) => (
                        <li key={signIndex} className="flex items-start space-x-2">
                          <span className="text-red-600 font-bold">•</span>
                          <span className="text-red-700">{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-red-700 mb-6 font-medium">
                      {warning.action}
                    </p>
                    <Button asChild variant="primary" className="bg-red-600 hover:bg-red-700">
                      <Link href="/ayuda-inmediata">
                        Buscar Ayuda Ahora
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Recursos Específicos para Familias */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Recursos para Familias
              </h2>
              <p className="text-xl text-gray-700">
                Herramientas descargables y guías específicas para el apoyo familiar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Guías Descargables */}
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">📄</span>
                <h3 className="text-lg font-semibold mb-2">Guía de Primeros Auxilios Emocionales</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Qué hacer y qué no hacer en las primeras semanas
                </p>
                <Button variant="secondary" size="sm">
                  Descargar PDF
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">🗂️</span>
                <h3 className="text-lg font-semibold mb-2">Lista de Verificación para Familias</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Pasos prácticos para organizar el apoyo familiar
                </p>
                <Button variant="secondary" size="sm">
                  Descargar Lista
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">📞</span>
                <h3 className="text-lg font-semibold mb-2">Directorio de Contactos</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Números importantes para familias disponibles 24/7
                </p>
                <Button variant="secondary" size="sm">
                  Ver Contactos
                </Button>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Apoyo entre Familias */}
      <Section background="warm" padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              No Están Solos en Esto
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Conecta con otras familias que entienden lo que están viviendo
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8">
                <h3 className="text-xl font-semibold mb-4">Grupos de Apoyo Virtual</h3>
                <p className="text-gray-700 mb-6">
                  Sesiones moderadas por profesionales donde las familias pueden 
                  compartir experiencias y apoyo mutuo de forma segura.
                </p>
                <Button variant="primary">
                  Próximas Sesiones
                </Button>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-semibold mb-4">Chat Seguro para Familias</h3>
                <p className="text-gray-700 mb-6">
                  Espacio privado y moderado para hacer preguntas y recibir apoyo 
                  de otras familias las 24 horas.
                </p>
                <Button variant="secondary">
                  Acceder al Chat
                </Button>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}