// src/lib/utils.js

/**
 * Combina clases CSS de forma inteligente
 * @param {...string} classes - Clases CSS a combinar
 * @returns {string} Clases combinadas
 */
export function cn(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  /**
   * Genera metadatos dinámicos para páginas
   * @param {Object} options - Opciones de metadatos
   * @returns {Object} Metadatos de Next.js
   */
  export function generateMetadata({
    title,
    description,
    keywords = [],
    canonical,
    openGraph = {}
  }) {
    const baseTitle = 'Reencuentro Digital'
    const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle
    
    return {
      title: fullTitle,
      description,
      keywords: keywords.join(', '),
      canonical,
      openGraph: {
        title: fullTitle,
        description,
        type: 'website',
        locale: 'es_MX',
        ...openGraph
      },
      twitter: {
        card: 'summary_large_image',
        title: fullTitle,
        description
      }
    }
  }
  
  /**
   * Validador de email simple
   * @param {string} email 
   * @returns {boolean}
   */
  export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  
  /**
   * Scroll suave a elemento
   * @param {string} elementId - ID del elemento
   * @param {number} offset - Offset adicional
   */
  export function scrollToElement(elementId, offset = 80) {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
  
  /**
   * Formatea fecha para mostrar
   * @param {Date|string} date 
   * @returns {string}
   */
  export function formatDate(date) {
    return new Date(date).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  
  /**
   * Debounce function para optimizar performance
   * @param {Function} func 
   * @param {number} wait 
   * @returns {Function}
   */
  export function debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }
  
  /**
   * Hook personalizado para detectar si elemento está en viewport
   * @param {React.RefObject} ref 
   * @returns {boolean}
   */
  export function useInView(ref) {
    if (typeof window === 'undefined') return false
    
    const [isInView, setIsInView] = React.useState(false)
    
    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIsInView(entry.isIntersecting),
        { threshold: 0.1 }
      )
      
      if (ref.current) observer.observe(ref.current)
      
      return () => observer.disconnect()
    }, [ref])
    
    return isInView
  }
  
  /**
   * Genera ID único para componentes
   * @param {string} prefix 
   * @returns {string}
   */
  export function generateId(prefix = 'component') {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
  }