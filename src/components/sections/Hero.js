"use client"

export default function Hero() {
    return (
        <section className="relative bg-gradient-to-br from-blue-50/50 via-stone-50 to-orange-50/30 py-20 lg:py-32 overflow-hidden">

            {/* Patrón de fondo sutil */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            ></div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Programa de Apoyo Integral
                    </div>

                    {/* Título principal */}
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Reconectando
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
                            {" "}vidas{" "}
                        </span>
                        a través de la tecnología
                    </h1>

                    {/* Subtítulo */}
                    <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Un programa integral que integra acompañamiento psicosocial con herramientas
                        tecnológicas para facilitar la readaptación familiar y social de personas
                        víctimas de desaparición forzada.
                    </p>

                    {/* Botones de acción */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <a
                            href="#fases"
                            onClick={e => {
                                e.preventDefault();
                                document.getElementById('fases')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            <span className="flex items-center">
                                Conocer el Programa
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </span>
                        </a>
                        <a href="/comunicacion" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300">
                            Ver Metodología
                        </a>
                    </div>

                    {/* Estadísticas */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">3 Fases</div>
                            <div className="text-gray-600 text-sm">Programa Estructurado</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-600 mb-2">Integral</div>
                            <div className="text-gray-600 text-sm">Enfoque Multidisciplinario</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">Seguro</div>
                            <div className="text-gray-600 text-sm">Privacidad Garantizada</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}