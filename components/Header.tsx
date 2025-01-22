'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Barra superior */}
            <div className="bg-gray-800 text-white text-sm py-2">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
                    {/* Información a la izquierda */}
                    <div className="hidden md:flex space-x-4">
                        <span>Compras seguras online</span>
                        <span>|</span>
                        <span>Pago contra entrega</span>
                        <span>|</span>
                        <span>Entregas el mismo día</span>
                    </div>

                    {/* Contacto e íconos a la derecha */}
                    <div className="flex items-center space-x-4">
                        <span>Llámanos 3001112222</span>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.352 3.608 1.326.974.974 1.264 2.242 1.326 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.352 2.633-1.326 3.608-.974.974-2.242 1.264-3.608 1.326-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.352-3.608-1.326-.974-.974-1.264-2.242-1.326-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.352-2.633 1.326-3.608.974-.974 2.242-1.264 3.608-1.326 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.741 0 8.332.012 7.052.07 5.766.129 4.558.392 3.513 1.437 2.468 2.482 2.205 3.691 2.146 4.977c-.058 1.28-.07 1.69-.07 4.85s.012 3.584.07 4.85c.058 1.286.322 2.495 1.367 3.54 1.045 1.045 2.254 1.308 3.54 1.367 1.28.058 1.69.07 4.85.07s3.584-.012 4.85-.07c1.286-.058 2.495-.322 3.54-1.367 1.045-1.045 1.308-2.254 1.367-3.54.058-1.28.07-1.69.07-4.85s-.012-3.584-.07-4.85c-.058-1.286-.322-2.495-1.367-3.54-1.045-1.045-2.254-1.308-3.54-1.367C15.584.012 15.174 0 12 0zM12 5.838a6.162 6.162 0 1 0 6.162 6.162A6.168 6.168 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 1-1.44-1.44 1.441 1.441 0 0 1 1.44 1.44z" />
                            </svg>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.5 24v-9h3.25l.5-4H13.5V8.75C13.5 7.312 14.25 7 15.5 7h1.5V3h-3.5C10.687 3 10 4.25 10 6.75V11H7v4h3v9h3.5z" />
                            </svg>
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill='currentColor'
                                viewBox="0 0 24 24"
                            >
                                <path d="M19.615 3.184c.896.241 1.617.964 1.86 1.861C22 6.806 22 12 22 12s0 5.194-.525 6.955c-.242.897-.964 1.62-1.86 1.861C18.194 22 12 22 12 22s-6.194 0-7.955-.525c-.897-.241-1.62-.964-1.861-1.86C2 17.194 2 12 2 12s0-5.194.525-6.955c.241-.897.964-1.62 1.861-1.861C5.806 2 12 2 12 2s6.194 0 7.955.525zm-9.615 8.9v6.25l5.75-3.125-5.75-3.125z" />
                            </svg>
                        </a>
                    </div>

                    <button
                        className="md:hidden text-white focus:outline-none"
                        aria-label="Toggle Menu"
                        onClick={toggleMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <header className="bg-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                    {/* Logo y título */}
                    <div className="hidden md:flex items-center space-x-3">
                        <img
                            src="/logo.svg" // Reemplaza con la ruta de tu logo
                            alt="Logo"
                            className="w-auto h-12 md:h-20 absolute top-9 md:top-7 -left-1"
                        />
                        <h1 className="text-xl font-bold text-white tracking-wide">
                            PetStore
                        </h1>
                    </div>
                    <div className="flex md:hidden items-center space-x-3">
                        <img
                            src="/logo2.svg" // Reemplaza con la ruta de tu logo
                            alt="Logo"
                            className="w-auto h-20 absolute "
                        />
                        <h1 className="text-xl font-bold text-white tracking-wide">
                            PetStore
                        </h1>
                    </div>

                    {/* Navegación con barra de búsqueda */}
                    <div className="flex items-center space-x-4">
                        {/* Navegación con barra de búsqueda */}
                        <div className="flex items-center space-x-4 w-full md:w-auto">
                            {/* Barra de búsqueda */}
                            <div className="relative flex-grow md:flex-grow-0">
                                <input
                                    type="text"
                                    placeholder="Buscar productos..."
                                    className="pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-64"
                                />
                                <button className="absolute right-2 top-2 text-gray-500 hover:text-primary focus:outline-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-4.35-4.35m1.85-6.15a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>


                        {/* Navegación Desktop */}
                        <nav className="hidden md:flex space-x-8">
                            <Link href="/" className="text-black font-medium hover:underline">
                                Inicio
                            </Link>
                            <Link href="/productos" className="text-black font-medium hover:underline">
                                Productos
                            </Link>
                            <Link href="/categorias" className="text-black font-medium hover:underline">
                                Categorías
                            </Link>
                            <Link href="/contacto" className="text-black font-medium hover:underline">
                                Contacto
                            </Link>
                        </nav>
                    </div>

                    {/* Ícono del carrito */}
                    <div className="items-center space-x-4">
                        <Link href="/carrito" className="relative hidden md:flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-black"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7m1.6 6a1 1 0 100 2 1 1 0 000-2m10 0a1 1 0 100 2 1 1 0 000-2"
                                />
                            </svg>
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                0
                            </span>
                        </Link>

                        {/* Menú móvil */}
                    </div>
                </div>

                {/* Menú móvil desplegable */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white shadow-lg justify-end">
                        <nav className="flex flex-col space-y-2 p-4 justify-end text-center">
                            <Link href="/" className="text-gray-800 font-medium hover:text-primary">
                                Inicio
                            </Link>
                            <Link href="/productos" className="text-gray-800 font-medium hover:text-primary">
                                Productos
                            </Link>
                            <Link href="/categorias" className="text-gray-800 font-medium hover:text-primary">
                                Categorías
                            </Link>
                            <Link href="/contacto" className="text-gray-800 font-medium hover:text-primary">
                                Contacto
                            </Link>
                            <Link href="/carrito" className="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-black"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7m1.6 6a1 1 0 100 2 1 1 0 000-2m10 0a1 1 0 100 2 1 1 0 000-2"
                                    />
                                </svg>
                            </Link>
                        </nav>
                    </div>
                )}
            </header>
            {/* Botones horizontales debajo del header */}
            <div className="bg-gray-100 py-2 shadow-md">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 md:gap-28 px-6">
                    <Link href="/perros" className="flex items-center space-x-2 bg-transparent text-black py-1 px-2 rounded-full shadow-lg hover:bg-blue-700">
                        <img
                            src="/perro.svg" // Reemplaza con la ruta de tu logo
                            alt="Perro"
                            className='w-5 h-auto'
                        />
                        <span className='hidden md:flex'>Perros</span>
                    </Link>
                    <Link href="/gatos" className="flex items-center space-x-2 bg-transparent text-black py-1 px-4 rounded-full shadow-lg hover:bg-yellow-700">
                        <img
                            src="/gato.svg" // Reemplaza con la ruta de tu logo
                            alt="Gato"
                            className='w-5 h-auto'
                        />
                        <span className='hidden md:flex'>Gatos</span>
                    </Link>
                    <Link href="/veterinaria" className="flex items-center space-x-2 bg-transparent text-black py-1 px-4 rounded-full shadow-md hover:bg-green-700">
                        <img
                            src="/veterinaria.svg" // Reemplaza con la ruta de tu logo
                            alt="Veterinaria"
                            className='w-5 h-auto'
                        />
                        <span className='hidden md:flex'>Servicios</span>
                    </Link>
                    <Link href="/suscripcion" className="flex items-center space-x-2 bg-purple-600 text-white py-1 px-4 rounded-full shadow-md hover:bg-purple-700">
                        <img
                            src="/sub.svg" // Reemplaza con la ruta de tu logo
                            alt="Subs"
                            className='w-5 h-auto'
                        />
                        <span className='hidden md:flex'>Suscripción</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
