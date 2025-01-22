'use client';

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero: React.FC = () => {
    const CustomArrow = ({ onClick, direction }: { onClick?: () => void; direction: "prev" | "next" }) => (
        <button
            className={`hidden md:flex absolute top-1/2 transform -translate-y-1/2 z-10 ${
                direction === "prev" ? "left-6" : "right-6"
            } bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition`}
            onClick={onClick}
        >
            {direction === "prev" ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2 h-2 sm:w-8 sm:h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <polyline points="15 18 9 12 15 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-2 h-2 sm:w-8 sm:h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <polyline points="9 18 15 12 9 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
        </button>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <CustomArrow direction="next" />,
        prevArrow: <CustomArrow direction="prev" />,
        appendDots: (dots: React.ReactNode) => (
            <div style={{ padding: "10px" }}>
                <ul className="flex justify-center space-x-2">{dots}</ul>
            </div>
        ),
        customPaging: (i: number) => (
            <div
                className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-600 transition mt-4"
                title={`Slide ${i + 1}`}
            ></div>
        ),
    };

    const slides = [
        {
            id: 1,
            image: "/promo1.jpg",
            text: "¡Gran descuento en juguetes para perros!",
        },
        {
            id: 2,
            image: "/promo2.jpg",
            text: "Comida premium para gatos, ¡ahora 30% menos!",
        },
        {
            id: 3,
            image: "/promo3.jpg",
            text: "Servicios veterinarios con descuento exclusivo.",
        },
    ];

    return (
        <div className="relative w-full  bg-transparent overflow-hidden pb-10">
            <div className="relative  mx-auto">
                <Slider {...settings}>
                    {slides.map(slide => (
                        <div key={slide.id} className="relative">
                            {/* Imagen del carrusel */}
                            <img
                                src={slide.image}
                                alt={slide.text}
                                className="w-full h-[100px] sm:h-[200px] md:h-[300px] object-cover"
                            />
                            {/* Texto superpuesto */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90 px-4">
                                <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold text-center">
                                    {slide.text}
                                </h2>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;
