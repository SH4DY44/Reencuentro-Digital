import './globals.css'

export const metadata = {
  title: 'Reencuentro Digital - Programa de Apoyo Post-Desaparición Forzada',
  description: 'Un programa integral de acompañamiento psicosocial y tecnológico para la reintegración de personas víctimas de desaparición forzada.',
  keywords: 'desaparición forzada, reintegración, tecnología, comunicación, diseño, interdisciplinario',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-stone-50 antialiased">

        {/* Header Profesional Mejorado */}
        {/* Header Profesional con márgenes */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <nav className="flex justify-between items-center py-4">
              
              {/* Logo y Marca */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Reencuentro Digital</h1>
                  <p className="text-sm text-gray-600">Programa de Apoyo Integral</p>
                </div>
              </div>

              {/* Navegación Principal */}
              <div className="hidden lg:flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                  Inicio
                </a>
                <a href="/comunicacion" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                  Comunicación
                </a>
                <a href="/diseno" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                  Diseño
                </a>
                <a href="/tecnologia" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                  Tecnología
                </a>
                <a href="/interdisciplinas" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                  Interdisciplinas
                </a>
                <a href="/interaccion-social" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                  Interacción Social
                </a>
              </div>

              {/* Botón CTA */}
              <div className="hidden lg:block">
                <a href="/referencias" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5">
                  Ver Referencias
                </a>
              </div>

              {/* Menú móvil (placeholder) */}
              <div className="lg:hidden">
                <button className="text-gray-600 hover:text-gray-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

            </nav>
          </div>
        </header>
        {/* Contenido Principal */}
        <main>
          {children}
        </main>

        {/* Footer Profesional Mejorado */}
        {/* Footer Profesional con márgenes */}
        <footer className="bg-gray-900 text-gray-300 mt-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Información Principal */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">R</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Reencuentro Digital</h3>
                </div>
                <p className="text-gray-400 max-w-md leading-relaxed mb-6">
                  Un programa integral que integra acompañamiento psicosocial con tecnología 
                  para facilitar la readaptación de personas víctimas de desaparición forzada.
                </p>
                <div className="text-sm text-gray-500">
                  <p className="font-medium text-gray-400 mb-2">Proyecto Académico</p>
                  <p>Universidad Autónoma Metropolitana - Cuajimalpa</p>
                  <p>Seminario de Titulación 2025</p>
                </div>
              </div>

              {/* Enlaces del Programa */}
              <div>
                <h4 className="text-white font-semibold mb-4">Programa</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><a href="/#fases" className="hover:text-white transition-colors">Fases del Programa</a></li>
                  <li><a href="/comunicacion" className="hover:text-white transition-colors">Comunicación</a></li>
                  <li><a href="/diseno" className="hover:text-white transition-colors">Diseño</a></li>
                  <li><a href="/tecnologia" className="hover:text-white transition-colors">Tecnología</a></li>
                  <li><a href="/interdisciplinas" className="hover:text-white transition-colors">Interdisciplinas</a></li>
                </ul>
              </div>

              {/* Equipo */}
              <div>
                <h4 className="text-white font-semibold mb-4">Equipo</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>Eric Leonardo Camacho Revilla</li>
                  <li>Jesús Iván Galindo Agonizante</li>
                  <li>Héctor Ledesma Vázquez</li>
                  <li>Sebastián Tamayo Moreno</li>
                </ul>
              </div>

            </div>
            
            {/* Línea separadora y copyright */}
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
              <p>&copy; 2025 Reencuentro Digital - Proyecto Académico UAM Cuajimalpa</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}