import { createContentSection, createSubsection, createKeyPoint, createExample } from './index'

export const apoyoEmocionalContent = createContentSection({
  id: 'apoyo-emocional',
  title: 'Apoyo Emocional - No Estás Solo/a',
  subtitle: 'Espacios seguros y herramientas para el bienestar emocional',
  
  // Hero section
  hero: {
    title: 'No Estás Solo/a',
    subtitle: 'Espacios Seguros para Sanar y Conectar',
    description: 'Aquí encontrarás apoyo emocional, herramientas de bienestar y conexión con personas que entienden tu experiencia.',
    keyStats: [
      { value: '24/7', label: 'Apoyo disponible' },
      { value: 'Seguro', label: 'Espacio confidencial' },
      { value: 'Sin juicios', label: 'Solo comprensión' }
    ]
  },

  // Introducción
  introduction: {
    overview: 'Sabemos que las emociones después de una experiencia como la desaparición forzada pueden ser intensas, confusas y abrumadoras. Es completamente normal sentir miedo, tristeza, rabia, confusión, o incluso entumecimiento. No hay una forma "correcta" de sentirse, y no hay un tiempo "correcto" para sanar.',
    importance: 'El apoyo emocional no se trata de "superar" lo que pasó, sino de aprender a vivir con ello de una manera que te permita encontrar paz, seguridad y momentos de alegría otra vez.',
    scope: 'En esta sección encontrarás herramientas prácticas, espacios de conexión segura, y recursos para cuidar tu bienestar emocional a tu propio ritmo.'
  },

  // Desarrollo principal - Herramientas prácticas
  development: {
    title: 'Herramientas para tu Bienestar Emocional',
    sections: [
      createSubsection({
        id: 'tecnicas-inmediatas',
        title: 'Técnicas de Calma Inmediata',
        content: 'Cuando las emociones se sienten demasiado intensas, estas técnicas simples pueden ayudarte a encontrar un poco de calma y estabilidad en el momento.',
        examples: [
          createExample({
            title: 'Respiración 4-7-8',
            description: 'Técnica simple para reducir ansiedad y encontrar calma',
            implementation: '1. Inhala por la nariz contando hasta 4\n2. Mantén la respiración contando hasta 7\n3. Exhala por la boca contando hasta 8\n4. Repite 3-4 veces',
            benefits: ['Reduce ansiedad inmediata', 'Activa sistema nervioso calmante', 'Se puede hacer en cualquier lugar']
          }),
          createExample({
            title: 'Técnica de Conexión a Tierra (5-4-3-2-1)',
            description: 'Para cuando te sientes desconectado/a o abrumado/a',
            implementation: 'Identifica:\n• 5 cosas que puedes VER\n• 4 cosas que puedes TOCAR\n• 3 cosas que puedes ESCUCHAR\n• 2 cosas que puedes OLER\n• 1 cosa que puedes SABOREAR',
            benefits: ['Te trae al momento presente', 'Reduce disociación', 'Usa todos los sentidos para calmarte']
          }),
          createExample({
            title: 'Lugar Seguro Mental',
            description: 'Crear un espacio de calma en tu mente',
            implementation: 'Imagina un lugar donde te sientes completamente seguro/a y en paz. Puede ser real o imaginario. Nota todos los detalles: colores, sonidos, olores, sensaciones.',
            benefits: ['Refugio mental disponible siempre', 'Reduce estrés y ansiedad', 'Fortalece sensación de seguridad']
          })
        ]
      }),
      
      createSubsection({
        id: 'manejo-emociones',
        title: 'Entendiendo y Manejando las Emociones',
        content: 'Las emociones después del trauma pueden sentirse confusas o abrumadoras. Es importante recordar que todas las emociones son válidas y tienen un propósito.',
        examples: [
          createExample({
            title: 'Mapa de Emociones',
            description: 'Herramienta para identificar y nombrar lo que sientes',
            implementation: 'Cada día, toma unos minutos para preguntarte: "¿Qué estoy sintiendo ahora?" Puedes usar palabras simples como: triste, enojado/a, asustado/a, confundido/a, cansado/a.',
            benefits: ['Mayor autoconocimiento', 'Reduce confusión emocional', 'Ayuda a comunicar necesidades']
          }),
          createExample({
            title: 'Validación Personal',
            description: 'Practicar autocompasión y comprensión',
            implementation: 'Cuando sientes algo difícil, dite a ti mismo/a: "Es normal que me sienta así después de lo que pasé. Mis emociones tienen sentido."',
            benefits: ['Reduce autocrítica', 'Aumenta autocompasión', 'Normaliza la experiencia emocional']
          })
        ]
      }),

      createSubsection({
        id: 'cuidado-diario',
        title: 'Cuidado Personal Diario',
        content: 'Pequeñas acciones diarias que pueden hacer una gran diferencia en cómo te sientes. No tienes que hacer todo, elige lo que te funcione.',
        examples: [
          createExample({
            title: 'Rutina de Mañana Suave',
            description: 'Comenzar el día con intención y cuidado',
            implementation: '• Al despertar, respira profundo 3 veces\n• Bebe un vaso de agua lentamente\n• Di una cosa por la que estás agradecido/a hoy\n• Haz algo que te haga sentir cómodo/a',
            benefits: ['Establece tono positivo del día', 'Crea sensación de control', 'Práctica de mindfulness']
          }),
          createExample({
            title: 'Momentos de Pausa',
            description: 'Pequeños descansos durante el día',
            implementation: 'Cada pocas horas, para 2 minutos para: respirar conscientemente, estirarte suavemente, o simplemente estar en silencio.',
            benefits: ['Previene acumulación de estrés', 'Reconecta contigo mismo/a', 'Mejora regulación emocional']
          })
        ]
      })
    ]
  },

  // Recursos de conexión
  practicalApplication: {
    title: 'Espacios de Conexión y Apoyo',
    scenarios: [
      {
        title: 'Grupos de Apoyo Virtual',
        description: 'Reuniones semanales con personas que han pasado por experiencias similares',
        implementation: 'Sesiones moderadas por profesionales, en ambiente seguro y confidencial',
        tools: ['Videoconferencia segura', 'Chat grupal moderado', 'Recursos compartidos']
      },
      {
        title: 'Chat de Apoyo 24/7',
        description: 'Conversación en tiempo real con personas capacitadas',
        implementation: 'Servicio anónimo, sin registros permanentes, disponible cuando lo necesites',
        tools: ['Chat encriptado', 'Opción de anonimato', 'Derivación a profesionales']
      },
      {
        title: 'Biblioteca de Recursos',
        description: 'Audios, videos y lecturas para momentos difíciles',
        implementation: 'Contenido descargable para usar offline cuando necesites apoyo',
        tools: ['Meditaciones guiadas', 'Historias de esperanza', 'Técnicas de relajación']
      },
      {
        title: 'Línea de Crisis',
        description: 'Apoyo inmediato para momentos de crisis emocional',
        implementation: 'Profesionales disponibles 24/7 para situaciones urgentes',
        tools: ['Llamada telefónica directa', 'Chat de crisis', 'Protocolo de emergencia']
      }
    ]
  },

  // Análisis de necesidades
  criticalAnalysis: {
    title: 'Consideraciones Importantes',
    strengths: [
      'Cada persona sana a su propio ritmo - no hay prisa',
      'Es normal tener días buenos y días difíciles',
      'Buscar ayuda es una muestra de fortaleza, no de debilidad',
      'La sanación no significa olvidar, sino aprender a vivir con paz'
    ],
    challenges: [
      'Las emociones pueden ser impredecibles y intensas',
      'Es posible sentirse peor antes de sentirse mejor',
      'Puede ser difícil confiar después del trauma',
      'La familia y amigos pueden no entender completamente'
    ],
    limitations: [
      'El apoyo emocional no reemplaza ayuda profesional si la necesitas',
      'Cada proceso es único - lo que ayuda a otros puede no ayudarte',
      'La sanación emocional toma tiempo - no hay soluciones rápidas',
      'Es importante respetar tus límites y ir a tu propio ritmo'
    ]
  },

  // Conclusiones prácticas
  conclusions: {
    title: 'Recordatorios Importantes',
    summary: 'Tu bienestar emocional importa. Mereces apoyo, comprensión y espacios seguros para sanar. No tienes que hacer este camino solo/a, y no tienes que hacerlo todo de una vez.',
    keyFindings: [
      'Tus emociones son válidas, sin importar cuáles sean',
      'La sanación es posible, aunque tome tiempo',
      'Hay personas y recursos disponibles para apoyarte',
      'Pequeños pasos diarios pueden hacer gran diferencia'
    ],
    implications: [
      'Es importante pedir ayuda cuando la necesites',
      'Cuidar tu bienestar emocional es una prioridad, no un lujo',
      'La conexión con otros puede ser sanadora',
      'Tienes el derecho de establecer límites y cuidarte'
    ],
    futureWork: [
      'Explorar qué técnicas y recursos te funcionan mejor',
      'Construir una red de apoyo que te haga sentir seguro/a',
      'Considerar ayuda profesional si sientes que la necesitas',
      'Recordar que la sanación es un proceso, no un destino'
    ]
  },

  // Puntos clave prácticos
  keyPoints: [
    createKeyPoint({
      title: 'Todas las Emociones Son Válidas',
      description: 'No hay emociones "correctas" o "incorrectas". Lo que sientes tiene sentido dado lo que has vivido.',
      importance: 'critical',
      relatedConcepts: ['Autocompasión', 'Validación emocional', 'Sanación']
    }),
    createKeyPoint({
      title: 'Tu Ritmo Es el Correcto',
      description: 'No hay un cronograma para sanar. Puedes ir tan lento o tan rápido como te sientas cómodo/a.',
      importance: 'critical',
      relatedConcepts: ['Autocompasión', 'Límites personales', 'Sanación']
    }),
    createKeyPoint({
      title: 'No Estás Solo/a',
      description: 'Hay otras personas que han pasado por experiencias similares y profesionales que entienden.',
      importance: 'high',
      relatedConcepts: ['Conexión', 'Apoyo mutuo', 'Comunidad']
    }),
    createKeyPoint({
      title: 'Pedir Ayuda Es Fortaleza',
      description: 'Reconocer cuando necesitas apoyo y buscarlo es un acto de valentía y cuidado personal.',
      importance: 'high',
      relatedConcepts: ['Autodefensa', 'Red de apoyo', 'Bienestar']
    })
  ],

  // Recursos prácticos
  references: [
    'líneas de crisis disponibles',
    'grupos de apoyo locales', 
    'aplicaciones de mindfulness recomendadas',
    'organizaciones especializadas en trauma',
    'recursos de autoayuda verificados'
  ]
})

export default apoyoEmocionalContent