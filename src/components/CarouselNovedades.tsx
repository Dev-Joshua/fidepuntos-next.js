'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CarouselNovedades() {
  // Usando Reac y Hooks realizo el comportamiento del carousel con useEffect.
  const [activeIndex, setActiveIndex] = useState(0); //activeIndes es el estado que guarda el indice de la imagen prev o next
  const novedadesImages = [
    {
      src: '/novedad-1.jpg',
      alt: 'Imagen 1',
      text: 'Ala, ¿Qué hay para hacer en Bogotá?',
    },
    {
      src: '/novedad-2.jpg',
      alt: 'Imagen 2',
      text: 'En Las Lomas la naturaleza te saluda',
    },
    {
      src: '/novedad-3.jpg',
      alt: 'Imagen 3',
      text: 'Cartagena Histórica, Fantástica',
    },
    { src: '/novedad-4.jpg', alt: 'Imagen 4', text: 'Nuestro Aliado' },
    { src: '/novedad-5.jpg', alt: 'Imagen 5', text: 'Restaurante Ébano' },
  ];

  //Funciones que actualizan el activeIndex
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % novedadesImages.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + novedadesImages.length) % novedadesImages.length
    );
  };

  // Cambio automático de imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className='relative w-full hidden md:block'>
      {/* Carousel Wrapper */}
      <div className='relative h-56 overflow-hidden rounded-lg md:h-96 pb-10 px-4 py-2 rounded-b-xl'>
        {novedadesImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === activeIndex ? 'translate-x-0 z-20' : 'translate-x-full'
            }`}
            style={{
              marginTop: '1rem',
              marginBottom: '2rem',
              borderRadius: '0.75rem',
              backgroundColor: 'rgb(255 255 255 /0.75)',
              boxShadow: '0 0 #0000, 0 0 #0000',
              height: '50rem',
            }}
          >
            <a href='#'>
              <Image
                className='rounded-t-xl w-full'
                src={image.src}
                alt={image.alt}
                width={425}
                height={280}
              />
            </a>
            <div className='px-4 py-2 rounded-b-xl'>
              <p className='text-md py-2 font-medium text-black'>
                {image.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className='absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse'>
        {novedadesImages.map((_, index) => (
          <button
            key={index}
            type='button'
            className={`w-3 h-3 rounded-full ${
              index === activeIndex
                ? 'bg-white'
                : 'bg-white/50 dark:bg-gray-800/50'
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Controls */}
      <button
        type='button'
        className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        onClick={handlePrev}
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
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
        type='button'
        className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        onClick={handleNext}
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
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
  );
}
