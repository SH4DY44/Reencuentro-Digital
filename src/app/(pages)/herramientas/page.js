import { Container, Section, Card, Button } from '@/components/ui'
import { WidgetEmergencia, StepByStepGuide, ProgressTracker, DocumentPlanner } from '@/components/common'
import { generatePageMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = generatePageMetadata({
  title: 'Herramientas Prácticas',
  description: 'Guías paso a paso para trámites, documentos y proceso de reintegración',
  keywords: ['herramientas', 'trámites', 'documentos', 'guías paso a paso', 'reintegración'],
  path: '/herramientas'
})

const PRACTICAL_TOOLS = [
  {
    id: 'documentos-oficiales',
    title: 'Recuperar Documentos Oficiales',
    icon: '📋',
    difficulty: 'Básico',
    time: '1-3 semanas',
    priority: 'Alta',
    description: 'Guía completa para recuperar identificación, actas y documentos esenciales',
    steps: [
      {
        title: 'Denuncia de Documentos Extraviados',
        details: 'Acude al Ministerio Público más cercano con 2 testigos',
        documents: ['Copia de denuncia previa (si existe)', 'Identificación de testigos'],
        tips: 'Lleva una copia de cualquier documento que tengas, aunque esté dañado'
      },
      {
        title: 'Solicitar Acta de Nacimiento',
        details: 'En el Registro Civil del lugar donde naciste',
        documents: ['Denuncia del MP', 'Dos testigos con identificación'],
        tips: 'Si no recuerdas el lugar exacto, el personal puede ayudarte a buscarlo'
      },
      {
        title: 'Tramitar Nueva Identificación',
        details: 'Con el acta de nacimiento, solicita credencial para votar',
        documents: ['Acta de nacimiento', 'Comprobante de domicilio'],
        tips: 'El proceso es gratuito si presentas la denuncia del MP'
      }
    ]
  },
  {
    id: 'apoyo-legal',
    title: 'Acceder a Apoyo Legal Gratuito',
    icon: '⚖️',
    difficulty: 'Intermedio',
    time: '1-2 semanas',
    priority: 'Alta',
    description: 'Cómo obtener representación legal sin costo',
    steps: [
      {
        title: 'Ubicar Defensoría Pública',
        details: 'Contacta la Defensoría de Oficio más cercana',
        documents: ['Identificación (provisional si no tienes)', 'Comprobante de ingresos'],
        tips: 'Puedes llamar sin cita previa en casos urgentes'
      },
      {
        title: 'Preparar tu Caso',
        details: 'Organiza toda la información y documentos disponibles',
        documents: ['Denuncia de desaparición', 'Documentos médicos', 'Testimonios'],
        tips: 'No te preocupes si no tienes todo, ellos te ayudarán a conseguirlo'
      },
      {
        title: 'Primera Consulta',
        details: 'Expón tu situación de forma tranquila y completa',
        documents: ['Carpeta con todos los documentos organizados'],
        tips: 'Pregunta todo lo que necesites, es tu derecho entender el proceso'
      }
    ]
  },
  {
    id: 'apoyo-economico',
    title: 'Solicitar Apoyo Económico',
    icon: '💰',
    difficulty: 'Intermedio',
    time: '2-4 semanas',
    priority: 'Media',
    description: 'Recursos económicos y becas disponibles',
    steps: [
      {
        title: 'Programas Gubernamentales',
        details: 'Revisa programas de desarrollo social disponibles',
        documents: ['CURP', 'Comprobante de ingresos', 'Estudio socioeconómico'],
        tips: 'Muchos programas tienen cupos limitados, aplica cuanto antes'
      },
      {
        title: 'Organizaciones Civiles',
        details: 'Contacta ONGs especializadas en víctimas',
        documents: ['Carta explicando tu situación', 'Documentos de identidad'],
        tips: 'Sé honesto sobre tu situación, están ahí para ayudar'
      },
      {
        title: 'Fondos de Emergencia',
        details: 'Para necesidades inmediatas de alimentación y vivienda',
        documents: ['Comprobante de gastos urgentes', 'Carta de necesidad'],
        tips: 'Estos fondos son para cubrir necesidades básicas inmediatas'
      }
    ]
  },
  {
    id: 'comunicacion-familiar',
    title: 'Restablecer Comunicación Familiar',
    icon: '👥',
    difficulty: 'Variable',
    time: 'Proceso continuo',
    priority: 'Media',
    description: 'Estrategias para reconectar con familia y seres queridos',
    steps: [
      {
        title: 'Preparación Emocional',
        details: 'Habla con un psicólogo sobre tus miedos y expectativas',
        documents: ['Plan de apoyo emocional'],
        tips: 'Es normal sentir ansiedad, tomate el tiempo que necesites'
      },
      {
        title: 'Primer Contacto',
        details: 'Considera hacer el primer contacto a través de un intermediario',
        documents: ['Lista de contactos de confianza'],
        tips: 'Un familiar cercano o trabajador social puede ayudar con el primer contacto'
      },
      {
        title: 'Reuniones Graduales',
        details: 'Empieza con llamadas cortas o mensajes antes de reunirte en persona',
        documents: ['Plan de encuentros graduales'],
        tips: 'No hay prisa, cada familia tiene su ritmo de reencuentro'
      }
    ]
  }
]

const QUICK_CHECKLIST = [
  { task: 'Ubicar lugar seguro para dormir', priority: 'Crítica', timeframe: 'Inmediato' },
  { task: 'Contactar línea de crisis', priority: 'Crítica', timeframe: 'Inmediato' },
  { task: 'Atención médica básica', priority: 'Alta', timeframe: '24-48 horas' },
  { task: 'Denuncia de documentos extraviados', priority: 'Alta', timeframe: '1 semana' },
  { task: 'Solicitar acta de nacimiento', priority: 'Alta', timeframe: '1-2 semanas' },
  { task: 'Contactar defensoría pública', priority: 'Media', timeframe: '1-2 semanas' },
  { task: 'Apoyo psicológico inicial', priority: 'Media', timeframe: '2 semanas' },
  { task: 'Explorar apoyo económico', priority: 'Media', timeframe: '2-4 semanas' }
]

export default function HerramientasPage() {
  return (
    <>
      {/* Widget de Emergencia */}
      <Section background="default" padding="sm">
        <Container>
          <WidgetEmergencia />
        </Container>
      </Section>

      {/* Header Section */}
      <Section background="default" padding="lg" className="bg-gradient-to-br from-blue-600 to-blue-800">
        <Container>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-6">
              Herramientas Prácticas
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Guías paso a paso para los trámites más importantes. 
              Todo explicado de forma simple y clara.
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <span className="text-2xl mb-2 block">📋</span>
                <p className="font-medium text-sm">Paso a Paso</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <span className="text-2xl mb-2 block">💡</span>
                <p className="font-medium text-sm">Tips Útiles</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <span className="text-2xl mb-2 block">📄</span>
                <p className="font-medium text-sm">Documentos</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <span className="text-2xl mb-2 block">⏱️</span>
                <p className="font-medium text-sm">Tiempos</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Lista de Verificación Rápida */}
      <Section background="warm" padding="lg">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Lista de Verificación: Primeros Pasos
              </h2>
              <p className="text-lg text-gray-700">
                Prioridades organizadas por urgencia para las primeras semanas
              </p>
            </div>
            
            <Card className="p-8">
              <div className="space-y-4">
                {QUICK_CHECKLIST.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-6 h-6 border-2 border-gray-300 rounded"></div>
                      <span className="font-medium text-gray-900">{item.task}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className={`px-2 py-1 rounded-full font-medium ${
                        item.priority === 'Crítica' ? 'bg-red-100 text-red-800' :
                        item.priority === 'Alta' ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {item.priority}
                      </span>
                      <span className="text-gray-600">{item.timeframe}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Guías Detalladas */}
      <Section background="default" padding="lg">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Guías Detalladas Paso a Paso
              </h2>
              <p className="text-lg text-gray-700">
                Cada proceso explicado de forma simple con documentos necesarios y consejos útiles
              </p>
            </div>
            
            <div className="space-y-8">
              {PRACTICAL_TOOLS.map((tool, index) => (
                <Card key={tool.id} className="p-8 hover:shadow-lg transition-shadow">
                  {/* Header del Tool */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{tool.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {tool.title}
                        </h3>
                        <p className="text-gray-700 mb-3">{tool.description}</p>
                        <div className="flex flex-wrap gap-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            tool.difficulty === 'Básico' ? 'bg-green-100 text-green-800' :
                            tool.difficulty === 'Intermedio' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {tool.difficulty}
                          </span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {tool.time}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            tool.priority === 'Alta' ? 'bg-orange-100 text-orange-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            Prioridad {tool.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pasos del Proceso */}
                  <div className="space-y-6">
                    {tool.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="border-l-4 border-blue-200 pl-6">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {stepIndex + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                              {step.title}
                            </h4>
                            <p className="text-gray-700 mb-3">{step.details}</p>
                            
                            {step.documents && (
                              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                                <p className="font-medium text-gray-900 mb-2">Documentos necesarios:</p>
                                <ul className="space-y-1">
                                  {step.documents.map((doc, docIndex) => (
                                    <li key={docIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                                      <span className="text-green-600">✓</span>
                                      <span>{doc}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {step.tips && (
                              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                <p className="text-blue-800 text-sm">
                                  <span className="font-medium">💡 Consejo: </span>
                                  {step.tips}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Botón de Acción */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                      <p className="text-sm text-gray-600">
                        ¿Necesitas ayuda personalizada con este proceso?
                      </p>
                      <div className="flex gap-3">
                        <Button variant="secondary" size="sm">
                          Descargar Guía PDF
                        </Button>
                        <Button variant="primary" size="sm">
                          Contactar Apoyo
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Herramientas Adicionales */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Herramientas Adicionales
              </h2>
              <p className="text-lg text-gray-700">
                Recursos complementarios para facilitar tu proceso
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">📅</span>
                <h3 className="text-lg font-semibold mb-2">Planificador Personal</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Organiza tus citas, trámites y fechas importantes
                </p>
                <Button variant="secondary" size="sm">
                  Crear Calendario
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">📝</span>
                <h3 className="text-lg font-semibold mb-2">Generador de Cartas</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Plantillas para solicitudes oficiales y comunicaciones
                </p>
                <Button variant="secondary" size="sm">
                  Ver Plantillas
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">📍</span>
                <h3 className="text-lg font-semibold mb-2">Mapa de Recursos</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Encuentra oficinas y servicios cerca de ti
                </p>
                <Button variant="secondary" size="sm">
                  Abrir Mapa
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">💬</span>
                <h3 className="text-lg font-semibold mb-2">Chat de Apoyo</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Resuelve dudas específicas con especialistas
                </p>
                <Button variant="secondary" size="sm">
                  Iniciar Chat
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">📊</span>
                <h3 className="text-lg font-semibold mb-2">Seguimiento Personal</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Monitorea tu progreso en cada trámite
                </p>
                <Button variant="secondary" size="sm">
                  Ver Progreso
                </Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">📚</span>
                <h3 className="text-lg font-semibold mb-2">Biblioteca de Formularios</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Descarga formularios oficiales pre-llenados
                </p>
                <Button variant="secondary" size="sm">
                  Explorar Formularios
                </Button>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}