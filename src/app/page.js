import Hero from '@/components/sections/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Sección de Fases - Fondo más suave */}
      <section id="fases" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Fases del Programa
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Un proceso estructurado en tres etapas que acompaña la reintegración 
              de manera gradual y respetuosa.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Fase 1 - Fondo crema muy suave */}
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 hover:shadow-lg hover:border-stone-300 transition-all duration-300 p-8 relative group">
              <div className="absolute top-4 right-4 text-4xl font-bold text-blue-50 group-hover:text-blue-100 transition-colors">
                01
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-stone-900">
                Acogida y Evaluación
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Acogida inmediata con equipo multidisciplinario, evaluación de necesidades 
                tecnológicas y consentimiento informado, siempre respetando los tiempos 
                de cada persona.
              </p>
            </div>

            {/* Fase 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 hover:shadow-lg hover:border-stone-300 transition-all duration-300 p-8 relative group">
              <div className="absolute top-4 right-4 text-4xl font-bold text-orange-50 group-hover:text-orange-100 transition-colors">
                02
              </div>
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-stone-900">
                Fortalecimiento Psicosocial
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Acompañamiento psicológico especializado, talleres de comunicación familiar 
                y alfabetización digital adaptada a las necesidades individuales.
              </p>
            </div>

            {/* Fase 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 hover:shadow-lg hover:border-stone-300 transition-all duration-300 p-8 relative group">
              <div className="absolute top-4 right-4 text-4xl font-bold text-green-50 group-hover:text-green-100 transition-colors">
                03
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-stone-900">
                Integración Comunitaria
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Vínculos con la comunidad, capacitación en ciberseguridad, apoyo para 
                reintegración laboral y seguimiento continuo personalizado.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Sección Interdisciplinaria - Fondo crema cálido */}
      <section className="py-20 bg-orange-50/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">
              Enfoque Interdisciplinario
            </h2>
            <p className="text-xl text-stone-600 mb-12">
              La complejidad de la reintegración requiere la convergencia de múltiples disciplinas 
              trabajando en armonía hacia un objetivo común.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm border border-stone-200">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">Comunicación</h3>
                <p className="text-sm text-stone-600">Estrategias empáticas y efectivas</p>
              </div>
              
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm border border-stone-200">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">Diseño</h3>
                <p className="text-sm text-stone-600">Experiencias centradas en el usuario</p>
              </div>
              
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm border border-stone-200">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">Tecnología</h3>
                <p className="text-sm text-stone-600">Herramientas seguras y accesibles</p>
              </div>
              
              <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm border border-stone-200">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">Psicosocial</h3>
                <p className="text-sm text-stone-600">Acompañamiento especializado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}