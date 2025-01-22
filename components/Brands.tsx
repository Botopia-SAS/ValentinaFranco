'use client';

import React from 'react';
import Marquee from 'react-fast-marquee'; // Usaremos la biblioteca react-fast-marquee para el carrusel infinito.

const BrandCarousel: React.FC = () => {
    const brands = [
        { id: 1, logo: "/brands/royalcanin.svg", name: "Marca 1" },
        { id: 2, logo: "/brands/hills.svg", name: "Marca 2" },
        { id: 3, logo: "/brands/nupec.svg", name: "Marca 3" },
        { id: 4, logo: "/brands/proplan.svg", name: "Marca 4" },
        { id: 5, logo: "/brands/max.svg", name: "Marca 5" },
        { id: 6, logo: "/brands/equilibrio.svg", name: "Marca 6" },
        { id: 7, logo: "/brands/nutranuggets.svg", name: "Marca 7" },
        { id: 8, logo: "/brands/brdog.svg", name: "Marca 8" },
    ];

    return (
        <div className="relative w-full bg-gray-100 py-8 overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
                ¡Más de 50 marcas disponibles!
            </h2>
            {/* Contenedor del carrusel con transparencia en los extremos */}
            <div className="relative">
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-100 via-gray-100 to-transparent pointer-events-none z-10"></div>
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-100 via-gray-100 to-transparent pointer-events-none z-10"></div>

                {/* Carrusel continuo */}
                <Marquee gradient={false} speed={40}>
                    {brands.map(brand => (
                        <div
                            key={brand.id}
                            className="mx-4 flex items-center justify-center"
                            style={{ width: "150px" }}
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default BrandCarousel;
