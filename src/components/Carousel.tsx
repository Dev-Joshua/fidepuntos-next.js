'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/movich-cartagena-servicios-piscina.jpg',
    '/movich-lomas-lobby-d.jpg',
    '/movich-lomas-servicios-piscina.jpg',
    '/movich-pereira-servicios-piscina.jpg',
    '/SALONES_DE_EVENOS.jpg',
  ];

  // Cambiar la imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambiar el tiempo en milisegundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [images.length]);

  // Funciones para cambiar manualmente la imagen
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <div className='mx-auto mb-4 flex overflow-hidden rounded-2xl bg-white/75 text-gray-600 '>
      <div className='relative w-full'>
        <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-700 ease-in-out transform ${
                index === currentIndex
                  ? 'translate-x-0 z-30'
                  : 'translate-x-full z-10'
              }`}
              style={{
                visibility: index === currentIndex ? 'visible' : 'hidden',
              }}
            >
              <Image
                src={src}
                className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                alt={`Slide ${index + 1}`}
                width={800}
                height={600}
              />
            </div>
          ))}
        </div>

        {/* Indicadores */}
        <div className='absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Controles de navegación */}
        <button
          onClick={prevSlide}
          className='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        >
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50'>
            <svg
              className='w-4 h-4 text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 1 1 5l4 4'
              ></path>
            </svg>
            <span className='sr-only'>Previous</span>
          </span>
        </button>
        <button
          onClick={nextSlide}
          className='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        >
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50'>
            <svg
              className='w-4 h-4 text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 9 4-4-4-4'
              ></path>
            </svg>
            <span className='sr-only'>Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
