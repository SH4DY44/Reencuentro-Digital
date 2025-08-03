import { Container } from '@/components/ui'
import { Logo } from '@/components/common/Logo'
import { Navigation } from './Navigation'
import { SITE_CONFIG, TEAM_MEMBERS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <Container>
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Información Principal */}
            <div className="lg:col-span-2">
        
              
              <p className="text-gray-400 max-w-md leading-relaxed mb-6">
                {SITE_CONFIG.description}
              </p>
              
              <div className="text-sm text-gray-500">
                <p className="font-medium text-gray-400 mb-2">Proyecto Académico</p>
                <p>{SITE_CONFIG.author}</p>
                <p>SCDI {SITE_CONFIG.year}</p>
              </div>
            </div>

            {/* Enlaces del Programa */}
            <div>
              <h4 className="text-white font-semibold mb-4">Programa</h4>
              <Navigation variant="footer" />
            </div>

            {/* Equipo */}
            <div>
              <h4 className="text-white font-semibold mb-4">Equipo</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {TEAM_MEMBERS.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            </div>

          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; {SITE_CONFIG.year} {SITE_CONFIG.name} - {SITE_CONFIG.author}</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}