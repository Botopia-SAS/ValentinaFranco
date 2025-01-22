import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="max-w-7xl mx-auto px-6">
                {/* Sección superior */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo y descripción */}
                    <div className="flex flex-col items-start space-y-4">
                        <h1 className="text-2xl font-bold">PetStore</h1>
                        <p className="text-sm">
                            Todo lo que necesitas para consentir a tus mascotas. <br /><br /> Desde productos hasta servicios veterinarios.
                        </p>
                    </div>

                    {/* Navegación rápida */}
                    <div className="flex flex-col items-start space-y-4">
                        <h2 className="text-lg font-semibold">Navegación</h2>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/perros" className="hover:underline">Perros</Link>
                            <Link href="/gatos" className="hover:underline">Gatos</Link>
                            <Link href="/veterinaria" className="hover:underline">Veterinaria</Link>
                            <Link href="/suscripcion" className="hover:underline">Suscripción</Link>
                        </nav>
                    </div>

                    {/* Contacto */}
                    <div className="flex flex-col items-start space-y-4">
                        <h2 className="text-lg font-semibold">Contáctanos</h2>
                        <p className="text-sm">Llámanos: 300-111-2222</p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-200"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.352 3.608 1.326.974.974 1.264 2.242 1.326 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.352 2.633-1.326 3.608-.974.974-2.242 1.264-3.608 1.326-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.352-3.608-1.326-.974-.974-1.264-2.242-1.326-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.352-2.633 1.326-3.608.974-.974 2.242-1.264 3.608-1.326 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.741 0 8.332.012 7.052.07 5.766.129 4.558.392 3.513 1.437 2.468 2.482 2.205 3.691 2.146 4.977c-.058 1.28-.07 1.69-.07 4.85s.012 3.584.07 4.85c.058 1.286.322 2.495 1.367 3.54 1.045 1.045 2.254 1.308 3.54 1.367 1.28.058 1.69.07 4.85.07s3.584-.012 4.85-.07c1.286-.058 2.495-.322 3.54-1.367 1.045-1.045 1.308-2.254 1.367-3.54.058-1.28.07-1.69.07-4.85s-.012-3.584-.07-4.85c-.058-1.286-.322-2.495-1.367-3.54-1.045-1.045-2.254-1.308-3.54-1.367C15.584.012 15.174 0 12 0zM12 5.838a6.162 6.162 0 1 0 6.162 6.162A6.168 6.168 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 1-1.44-1.44 1.441 1.441 0 0 1 1.44 1.44z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-200"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 24v-9h3.25l.5-4H13.5V8.75C13.5 7.312 14.25 7 15.5 7h1.5V3h-3.5C10.687 3 10 4.25 10 6.75V11H7v4h3v9h3.5z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-200"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.615 3.184c.896.241 1.617.964 1.86 1.861C22 6.806 22 12 22 12s0 5.194-.525 6.955c-.242.897-.964 1.62-1.86 1.861C18.194 22 12 22 12 22s-6.194 0-7.955-.525c-.897-.241-1.62-.964-1.861-1.86C2 17.194 2 12 2 12s0-5.194.525-6.955c.241-.897.964-1.62 1.861-1.861C5.806 2 12 2 12 2s6.194 0 7.955.525zm-9.615 8.9v6.25l5.75-3.125-5.75-3.125z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Línea divisoria */}
                <div className="border-t border-white opacity-50 mt-8"></div>

                {/* Sección inferior */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm">
                    <p>© 2025 PetStore. Todos los derechos reservados.</p>
                    <p>
                        Desarrollado por{' '}
                        <a href="https://www.botopia.tech/es" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Botopia Technology S.A.S.
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
