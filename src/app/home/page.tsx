'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState('alojamiento');

  const images = [
    '/movich-cartagena-servicios-piscina.jpg',
    '/movich-lomas-lobby-d.jpg',
    '/movich-lomas-servicios-piscina.jpg',
    '/movich-pereira-servicios-piscina.jpg',
    '/SALONES_DE_EVENOS.jpg',
  ];

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

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
    <div className='md:grid md:grid-cols-3 container mx-auto p-4 pb-8 md:p-0 md:pb-8'>
      {/* Columna derecha */}
      <div className='pt-12 col-span-1 md:order-2 md:mx-4 space-y-4'>
        <div className="mx-auto overflow-hidden rounded-2xl bg-[rgba(180,126,11,var(--tw-bg-opacity))] mb-4 bg-cover bg-bottom p-4 text-white bg-[url('https://maqueta.fidepuntos.com.co/public/img/textura.svg')">
          <h1 className='text-center text-6xl font-bold'>5000</h1>
          <div className='flex justify-center items-center'>
            <div>
              <Image
                className='m-1 h-8 w-8 object-cover'
                src='/Punto.png'
                alt='icono'
                width={32}
                height={32}
              />
            </div>
            <div className='text-sm font-light'>Puntos</div>
          </div>
          <div className='px-8 text-center font-semibold'> HD Vargas</div>
        </div>
        <div className='mx-auto overflow-hidden rounded-2xl bg-[rgba(255,255,255,0.75)] p-4 text-[rgba(102,102,102,var(--tw-text-opacity))] hidden md:block'>
          <div>
            <div className='text-xl font-medium text-black'>Estatus actual</div>
            <p className='text-colortres dark:text-colortresdark'>Silver</p>
            <p className=' text-colortres dark:text-colortresdark'>
              Faltan 236 Puntos para convertirte en Bronce
            </p>
            <p> Silver +10000 • Bronce +20000 • Oro +30000</p>
          </div>
        </div>
        <div className='mx-auto overflow-hidden rounded-2xl bg-[rgba(255,255,255,0.75)] p-4 text-[rgba(102,102,102,var(--tw-text-opacity))] hidden md:block'>
          <div className='w-full'>
            <div className='text-xl font-medium text-black'>
              Últimas transacciones
            </div>
            <div className='flex items-center'>
              Tienes
              <Image
                className='m-1 h-4 w-4 object-cover'
                src='/Punto.png'
                alt='icono'
                width={32}
                height={32}
              />
              4500 Puntos
            </div>
            <p className=' text-colortres dark:text-colortresdark'>
              50 Puntos expiran el 2024-05-15
            </p>
            <p className=' text-colortres dark:text-colortresdark text-sm'>
              Última actualización: 2024-05-15
            </p>
            <div className='w-full text-sm py-6'>
              <div className='justify-stretch'>
                <div className='w-full text-colordos dark:text-colordosdark font-bold'>
                  Mayo
                  <span className='text-yellow-600'>2024</span>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/2 w-full flex items-center'>
                  ACUMULACIONES
                </div>
                <div className='basis-1/2 w-full flex items-center'>
                  <Image
                    className='m-1 h-4 w-4 object-cover'
                    src='/Punto.png'
                    alt='icono'
                    width={32}
                    height={32}
                  />
                  500 Puntos
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/2 w-full flex items-center'>
                  REDENCIONES
                </div>
                <div className='basis-1/2 w-full flex items-center'>
                  <Image
                    className='m-1 h-4 w-4 object-cover'
                    src='/Punto.png'
                    alt='icono'
                    width={32}
                    height={32}
                  />
                  1500 Puntos
                </div>
              </div>
            </div>
            <div className='w-full text-sm py-6'>
              <div className='justify-stretch'>
                <div className='w-full text-black font-bold'>
                  Abril
                  <span className='text-yellow-600'>2024</span>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/2 w-full flex items-center'>
                  ACUMULACIONES
                </div>
                <div className='basis-1/2 w-full flex items-center'>
                  <Image
                    className='m-1 h-4 w-4 object-cover'
                    src='/Punto.png'
                    alt='icono'
                    width={32}
                    height={32}
                  />
                  500 Puntos
                </div>
              </div>
              <div className='flex flex-row'>
                <div className='basis-1/2 w-full flex items-center'>
                  REDENCIONES
                </div>
                <div className='basis-1/2 w-full flex items-center'>
                  <Image
                    className='m-1 h-4 w-4 object-cover'
                    src='/Punto.png'
                    alt='icono'
                    width={32}
                    height={32}
                  />
                  1500 Puntos
                </div>
              </div>
              <button className='rounded-full border border-[rgba(180,126,11,var(--tw-border-opacity))] bg-[rgba(255,255,255,var(--tw-bg-opacity))] px-5 py-2 font-semibold text-[rgba(180,126,11,var(--tw-text-opacity))]'>
                Cargar más
              </button>
            </div>
          </div>
        </div>
        <div className='mx-auto overflow-hidden rounded-2xl bg-[rgba(255,255,255,0.75)] p-4 text-[rgba(102,102,102,var(--tw-text-opacity))] hidden md:block'>
          <div>
            <div className='text-xl font-medium text-black'>
              Últimas redenciones
            </div>
            <p className=' text-colortres dark:text-colortresdark'>
              No tienes redenciones recientes
            </p>
          </div>
        </div>
        <h3 className='hidden md:block'>Novedades</h3>
        <div
          id='default-carousel'
          className='relative w-full hidden md:block'
          data-carousel='slide'
        >
          {/* Carousel wrapper */}
          <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
            {/* Item 1 */}
            <div
              style={{
                marginTop: '1rem',
                marginBottom: '2rem',
                borderRadius: '0.75rem',
                backgroundColor: 'rgb(255 255 255 /0.75)',
                boxShadow: '0 0 #0000, 0 0 #0000',
              }}
              className='duration-700 ease-in-out absolute inset-0 transition-transform transform z-10 translate-x-full z-20'
              data-carousel-item=''
            >
              <div className='actividad'>
                <a href='#'>
                  <Image
                    className='rounded-t-xl w-full'
                    src='/novedad-1.jpg'
                    alt=''
                    width={425}
                    height={280}
                  />
                </a>
                <div className='px-4 py-2'>
                  <p className='text-md font-medium text-colordos dark:text-colordosdark'>
                    Ala, ¿Qué hay para hacer en Bogotá?
                  </p>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div
              className='duration-700 ease-in-out absolute inset-0 transition-transform transform z-20 translate-x-0 z-30'
              data-carousel-item=''
            >
              <div
                style={{
                  marginTop: '1rem',
                  marginBottom: '2rem',
                  borderRadius: '0.75rem',
                  backgroundColor: 'rgb(255 255 255 /0.75)',
                  boxShadow: '0 0 #0000, 0 0 #0000',
                }}
              >
                <a href='#'>
                  <Image
                    className='rounded-t-xl w-full'
                    src='/novedad-2.jpg'
                    alt=''
                    width={425}
                    height={280}
                  />
                </a>
                <div className='px-4 py-2'>
                  <p className='text-md font-medium text-colordos dark:text-colordosdark'>
                    En Las Lomas la naturaleza te saluda
                  </p>
                </div>
              </div>
            </div>
            {/* Item 3 */}
            <div
              className='duration-700 ease-in-out absolute inset-0 transition-transform transform z-20 translate-x-0 z-30'
              data-carousel-item=''
            >
              <div
                className="style={{
                  marginTop: '1rem',
                  marginBottom: '2rem',
                  borderRadius: '0.75rem',
                  backgroundColor: 'rgb(255 255 255 /0.75)',
                  boxShadow: '0 0 #0000, 0 0 #0000',
                }}"
              >
                <a href='./novedades.html'>
                  <Image
                    className='rounded-t-xl w-full'
                    src='/novedad-3.jpg'
                    alt=''
                    width={425}
                    height={280}
                  />
                </a>
                <div className='px-4 py-2'>
                  <p className='text-md font-medium text-colordos dark:text-colordosdark'>
                    Cartagena Histórica, Fantástica
                  </p>
                </div>
              </div>
            </div>
            {/* Item 4 */}
            <div
              className='duration-700 ease-in-out absolute inset-0 transition-transform transform z-30 -translate-x-full z-10 hidden'
              data-carousel-item=''
            >
              <div
                style={{
                  marginTop: '1rem',
                  marginBottom: '2rem',
                  borderRadius: '0.75rem',
                  backgroundColor: 'rgb(255 255 255 /0.75)',
                  boxShadow: '0 0 #0000, 0 0 #0000',
                }}
              >
                <a href='./novedades.html'>
                  <Image
                    className='rounded-t-xl w-full'
                    src='/novedad-4.jpg'
                    alt=''
                    width={425}
                    height={280}
                  />
                </a>
                <div className='px-4 py-2'>
                  <p className='text-md font-medium text-colordos dark:text-colordosdark'>
                    Nuestro Aliado
                  </p>
                </div>
              </div>
            </div>
            {/* Item 5 */}
            <div
              className='duration-700 ease-in-out absolute inset-0 transition-transform transform z-10 translate-x-full z-20'
              data-carousel-item=''
            >
              <div className='actividad'>
                <a href='./novedades.html'>
                  <Image
                    className='rounded-t-xl w-full'
                    src='/novedad-5.jpg'
                    alt=''
                    width={425}
                    height={280}
                  />
                </a>
                <div className='px-4 py-2'>
                  <p className='text-md font-medium text-colordos dark:text-colordosdark'>
                    Restaurante Ébano
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slider indicators */}
          <div className='absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse'>
            <button
              type='button'
              className='w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
              aria-current='false'
              aria-label='Slide 1'
              data-carousel-slide-to='0'
            ></button>
            <button
              type='button'
              className='w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
              aria-current='false'
              aria-label='Slide 2'
              data-carousel-slide-to='1'
            ></button>
            <button
              type='button'
              className='w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
              aria-current='false'
              aria-label='Slide 3'
              data-carousel-slide-to='2'
            ></button>
            <button
              type='button'
              className='w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
              aria-current='false'
              aria-label='Slide 4'
              data-carousel-slide-to='3'
            ></button>
          </div>
          {/* Slider controls */}
          <button
            type='button'
            className='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
            data-carousel-prev=''
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
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M5 1 1 5l4 4'
                ></path>
              </svg>
              <span className='sr-only'>Previous</span>
            </span>
          </button>
          <button
            type='button'
            className='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
            data-carousel-next=''
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
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 9 4-4-4-4'
                ></path>
              </svg>
              <span className='sr-only'>Next</span>
            </span>
          </button>
        </div>
      </div>

      {/* Grrilla izquierda */}
      <div className='col-span-2 md:order-1 pt-12 '>
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

        <div className='rounded-t-lg mb-4 border-b border-yellow-600'>
          <ul
            className='flex flex-wrap -mb-px text-sm font-medium text-center'
            id='default-styled-tab'
            data-tabs-toggle='#default-styled-tab-content'
            data-tabs-active-classes='text-colordosdark hover:text-coloruno dark:text-colordosdark dark:hover:text-colorunodark bg-coloruno'
            data-tabs-inactive-classes='text-coloruno dark:text-colorunodark hover:text-colortres dark:colorunodark dark:hover:text-gray-300'
            role='tablist'
          >
            <li
              className='tab'
              role='alojamiento'
            >
              <button
                onClick={() => handleTabClick('alojamiento')}
                className={`inline-block p-4 rounded-t-xl font-semibold 
              ${
                selectedTab === 'alojamiento'
                  ? 'bg-yellow-600 text-white'
                  : 'hover:bg-gray-50 text-yellow-700'
              } 
              dark:hover:bg-black/50 dark:hover:text-colordosdark`}
                type='button'
                role='tab'
                aria-selected={selectedTab === 'alojamiento'}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    stroke='none'
                    d='M0 0h24v24H0z'
                  ></path>{' '}
                  <path d='M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6'></path>{' '}
                  <circle
                    cx='7'
                    cy='10'
                    r='1'
                  ></circle>
                </svg>
                Alojamiento
              </button>
            </li>
            <li
              className='tab'
              role='bonos'
            >
              <button
                onClick={() => handleTabClick('bonos')}
                className={`inline-block p-4 rounded-t-xl font-semibold 
              ${
                selectedTab === 'bonos'
                  ? 'bg-yellow-600 text-white'
                  : 'hover:bg-gray-50 text-yellow-700'
              } 
              dark:hover:bg-black/50 dark:hover:text-colordosdark`}
                type='button'
                role='tab'
                aria-selected={selectedTab === 'bonos'}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z'
                  ></path>
                </svg>
                Bonos
              </button>
            </li>
            <li
              className='tab'
              role='gastronomia'
            >
              <button
                onClick={() => handleTabClick('gastronomia')}
                className={`inline-block p-4 rounded-t-xl font-semibold 
              ${
                selectedTab === 'gastronomia'
                  ? 'bg-yellow-600 text-white'
                  : 'hover:bg-gray-50 text-yellow-700'
              } 
              dark:hover:bg-black/50 dark:hover:text-colordosdark`}
                type='button'
                role='tab'
                aria-selected={selectedTab === 'gastronomia'}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 512 512'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    fill='none'
                    stroke='currentColor'
                    stroke-linejoin='round'
                    stroke-width='24'
                    d='m57.49 47.74l368.43 368.43a37.28 37.28 0 0 1 0 52.72a37.29 37.29 0 0 1-52.72 0l-90-91.55a32 32 0 0 1-9.2-22.43v-5.53a32 32 0 0 0-9.52-22.78l-11.62-10.73a32 32 0 0 0-29.8-7.44a48.53 48.53 0 0 1-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74Z'
                  ></path>
                  <path
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='24'
                    d='m400 32l-77.25 77.25A64 64 0 0 0 304 154.51v14.86a16 16 0 0 1-4.69 11.32L288 192m32 32l11.31-11.31a16 16 0 0 1 11.32-4.69h14.86a64 64 0 0 0 45.26-18.75L480 112m-40-40l-80 80M200 368l-99.72 100.28a40 40 0 0 1-56.56 0h0a40 40 0 0 1 0-56.56L128 328'
                  ></path>
                </svg>{' '}
                Gastronomía
              </button>
            </li>
            <li
              className='tab flex items-center text-center'
              role='spa'
            >
              <button
                onClick={() => handleTabClick('spa')}
                className={`inline-block p-4 rounded-t-xl font-semibold 
              ${
                selectedTab === 'spa'
                  ? 'bg-yellow-600 text-white'
                  : 'hover:bg-gray-50 text-yellow-700'
              } 
              dark:hover:bg-black/50 dark:hover:text-colordosdark`}
                type='button'
                role='tab'
                aria-selected={selectedTab === 'spa'}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 32 32'
                  stroke-width='0'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    fill='currentColor'
                    d='M16 4c-2.914 0-5.266 2.316-5.438 5.188c-2.582-.508-5.257.835-6.218 3.374c-1 2.641.258 5.528 2.718 6.782c-1.636 2.304-1.292 5.527.907 7.375c2.316 1.949 5.804 1.629 7.75-.688c.12-.144.152-.34.25-.5c.105.172.148.375.281.532c1.95 2.316 5.434 2.636 7.75.687c2.203-1.855 2.523-5.07.875-7.375c2.504-1.238 3.79-4.152 2.781-6.813c-.96-2.539-3.64-3.882-6.218-3.374C21.265 6.316 18.913 4 16 4m0 2c1.945 0 3.5 1.555 3.5 3.5c0 .156-.066.438-.188.781c-.003.012.004.02 0 .031l-2.968 4.22C16.656 13.5 17 12.327 17 12c0-.55-.45-1-1-1s-1 .45-1 1c0 .316.273 1.426.531 2.438l-2.906-4.376c-.066-.23-.125-.437-.125-.562C12.5 7.555 14.055 6 16 6m-6.625 5c.457-.016.922.047 1.375.219c.078.027.207.133.375.25c.012.008.02-.008.031 0l2.781 4.219c-.874-.594-1.851-1.235-2.156-1.344a.997.997 0 1 0-.688 1.875c.302.11 1.473.191 2.532.25l-5.063 1.406c-.128-.023-.238-.066-.312-.094a3.5 3.5 0 0 1-2.031-4.531A3.49 3.49 0 0 1 9.375 11m13.25 0a3.49 3.49 0 0 1 3.156 2.25a3.504 3.504 0 0 1-2.031 4.531a2.59 2.59 0 0 1-.656.125l-4.875-1.437c1.09-.059 2.367-.133 2.687-.25a.997.997 0 1 0-.687-1.875c-.332.117-1.418.828-2.313 1.437l3.032-4.375c.125-.086.25-.164.312-.187A3.512 3.512 0 0 1 22.625 11m-8.313 7.375c-.89.621-1.984 1.387-2.218 1.656c-.36.418-.293 1.078.125 1.438a.998.998 0 0 0 1.406-.125c.27-.313.965-1.895 1.375-2.844v3.688c-.184 1.199-.547 2.246-.813 2.562a3.492 3.492 0 0 1-4.937.438a3.492 3.492 0 0 1-.438-4.938c.106-.125.348-.313.657-.5l.125-.063zm3.47.063l4.78 1.375c.278.175.497.351.594.468a3.495 3.495 0 0 1-.437 4.938a3.495 3.495 0 0 1-4.938-.438c-.254-.3-.593-1.277-.781-2.406V18.5c.41.95 1.105 2.531 1.375 2.844c.36.418.988.484 1.406.125c.418-.36.485-1.02.125-1.438c-.222-.258-1.242-.976-2.125-1.593z'
                  ></path>
                </svg>
                Spa
              </button>
            </li>
          </ul>
        </div>

        <div
          id='default-styled-tab-content'
          className='w-full'
        >
          <div
            className='p-0 rounded-lg'
            id='styled-profile'
            role='tabpanel'
            aria-labelledby='profile-tab'
          >
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-4 pb-4'>
              <select
                style={{
                  display: 'block',
                  width: '100%',
                  borderRadius: '0.375rem',
                  borderWidth: '0px',
                  backgroundColor: 'rgb(247 240 234 / 1)',
                  paddingTop: '0.375rem',
                  paddingBottom: '0.375rem',
                  borderColor: '#B47E0B',
                }}
              >
                <option value='1'>De menor a mayor</option>
                <option value='2'>De mayor a menor</option>
                <option value='3'>Destacados</option>
                <option value='id_lugar_553'>Solamente para Cali</option>
                <option value='id_lugar_260'>Solamente para Rionegro </option>
                <option value='id_lugar_486'>Solamente para Pereira</option>
                <option value='id_lugar_601'>Solamente para Bogotá D.C.</option>
                <option value='id_lugar_259'>Solamente para Medellín</option>
                <option value='id_lugar_262'>
                  Solamente para Barranquilla
                </option>
                <option value='id_lugar_280'>Solamente para Cartagena</option>
              </select>
              <label className='fidelabel text-md'>Ver:</label>
            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4'>
              <div className='cajaPremio'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='medium-modal'
                  data-modal-toggle='medium-modal'
                  className='boton-blanco absolute m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-lg w-full'
                  src='/movich-buro-habitacion-estandar-superior-queen-b.jpg'
                  alt='product image'
                  width={700}
                  height={467}
                />
                <div className='px-5 pb-5'>
                  <h3 className='text-xl tracking-tight text-coloruno dark:text-colorunodark '>
                    Noche de alojamiento en habitación Superior Movich Casa del
                    Alferez
                  </h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center mt-1 text-lg font-medium text-colordos dark:text-colordosdark'>
                      <Image
                        className='m-1 h-8 w-8 '
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={32}
                        height={32}
                      />
                      <b>800</b>Puntos
                    </div>
                    <button
                      className='boton-color'
                      type='button'
                    >
                      Redimir
                    </button>
                  </div>
                </div>
              </div>

              {/* <!-- Default Modal --> */}
              <div
                id='medium-modal'
                tabIndex={-1}
                className='fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center'
              >
                <div className='relative w-full max-w-4xl max-h-full'>
                  {/* <!-- Modal content --> */}
                  <div className='relative bg-colorfondo rounded-lg shadow dark:bg-colorfondodark'>
                    {/* <!-- Modal header --> */}
                    <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t border-colordosdark dark:border-colordos '>
                      <h2 className=''>
                        Noche de alojamiento en habitación Superior Movich Casa
                        del Alferez
                      </h2>
                      <button
                        type='button'
                        className='text-coloruno bg-transparent hover:bg-colorunodark hover:text-colordos rounded-lg text-sm w-12 h-12 ms-auto inline-flex justify-center items-center dark:hover:bg-black/50 dark:hover:text-colordosdark'
                        data-modal-hide='medium-modal'
                      >
                        <svg
                          className='w-6 h-6'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 14 14'
                        >
                          <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                          ></path>
                        </svg>
                        <span className='sr-only'>Close modal</span>
                      </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className='p-4 md:p-5 space-y-4'>
                      <div className='flex flex-row space-x-4'>
                        <div className='basis-1/3 w-full '>
                          <Image
                            className='mb-4 rounded-lg'
                            src='/hab-1.jpg'
                            alt='product image'
                            width={700}
                            height={467}
                          />
                        </div>
                        <div className='basis-2/3 w-full '>
                          <h4 className=' text-colordos dark:text-colordosdark'>
                            Redima una noche en habitacion Superior en nuestro
                            Hotel Movich Casa del Alferez en Cali en acomodacion
                            sencilla o doble con desayuno a la carta y amenities
                            superiores.
                          </h4>
                          <p className='mt-2 text-colortres dark:text-colortresdark text-sm'>
                            Condiciones generales: Sujeto a disponibilidad,
                            verificación de la cuenta del usuario en saldo
                            disponible y puntaje aplicable. Una vez redimido,
                            tiene un mes para hacer efectiva su reserva. Previa
                            reserva con mínimo 8 días de anticipación a través
                            del correo electrónico
                            movichdreams@movichhotels.com. Es personal e
                            intransferible. No es redimible por dinero. Toda
                            cancelación de la reserva deberá hacerse con al
                            menos 5 días de anticipación de lo contrario se
                            perderá el derecho a utilizar el premio y no se hara
                            devolucion de puntos. Para hacer efectivo el premio
                            es necesario entregar el bono original al momento de
                            ingresar al hotel. No incluye gastos no
                            especificados. El huésped debe cancelar impuestos y
                            seguros hoteleros en el hotel. Al momento de la
                            reserva el huésped debe suministrar datos de la
                            tarjeta de credito como garantia de su reserva. Para
                            mayor información por favor visite los Términos y
                            Condiciones del programa. El presente mensaje no
                            representa aceptación, ni confirmación de reserva
                            para el afiliado, la reserva procesada/confirmada
                            será enviada por medio de nuestro departamento de
                            reservas con las observaciones y/o comentarios
                            pertinentes.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className=' p-4 md:p-5 border-t  rounded-b border-colordosdark dark:border-colordos'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center text-colordos dark:text-colordosdark text-lg'>
                          Redimir con
                          <Image
                            className='m-1 h-8 w-8 object-cover'
                            src='/Punto.png'
                            alt='icono-puntos'
                            width={32}
                            height={32}
                          />
                          <b> 1000 </b> Puntos
                        </div>
                        <button
                          data-modal-target='medium-modal'
                          data-modal-toggle='medium-modal'
                          className='boton-color'
                          type='button'
                        >
                          Redimir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='cajaPremio'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='medium-modal'
                  data-modal-toggle='medium-modal'
                  className='boton-blanco absolute m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-lg w-full'
                  src='/hab-2.jpg'
                  alt='product image'
                  width={327}
                  height={218}
                />
                <div className='px-5 pb-5'>
                  <h3 className='text-xl tracking-tight text-coloruno dark:text-colorunodark '>
                    Upgrade Superior a Suite por una noche
                  </h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center mt-1 text-lg font-medium text-colordos dark:text-colordosdark'>
                      <Image
                        className='m-1 h-8 w-8 '
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={32}
                        height={32}
                      />
                      <b>250</b>Puntos
                    </div>
                    <button
                      className='boton-color'
                      type='button'
                    >
                      Redimir
                    </button>
                  </div>
                </div>
              </div>

              <div className='cajaPremio'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='medium-modal'
                  data-modal-toggle='medium-modal'
                  className='boton-blanco absolute m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-lg w-full'
                  src='/hab-3.jpg'
                  alt='product image'
                  width={327}
                  height={179}
                />
                <div className='px-5 pb-5'>
                  <h3 className='text-xl tracking-tight text-coloruno dark:text-colorunodark '>
                    Upgrade standard-superior por una noche
                  </h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center mt-1 text-lg font-medium text-colordos dark:text-colordosdark'>
                      <Image
                        className='m-1 h-8 w-8 '
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={32}
                        height={32}
                      />
                      <b>300</b>Puntos
                    </div>
                    <button
                      className='boton-color'
                      type='button'
                    >
                      Redimir
                    </button>
                  </div>
                </div>
              </div>

              <div className='cajaPremio'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='medium-modal'
                  data-modal-toggle='medium-modal'
                  className='boton-blanco absolute m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-lg w-full'
                  src='/hab-1.jpg'
                  alt='product image'
                  width={327}
                  height={218}
                />
                <div className='px-5 pb-5'>
                  <h3 className='text-xl tracking-tight text-coloruno dark:text-colorunodark '>
                    Upgrade standard-suite por una noche
                  </h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center mt-1 text-lg font-medium text-colordos dark:text-colordosdark'>
                      <Image
                        className='m-1 h-8 w-8 '
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={32}
                        height={32}
                      />
                      <b>550</b>Puntos
                    </div>
                    <button
                      className='boton-color'
                      type='button'
                    >
                      Redimir
                    </button>
                  </div>
                </div>
              </div>

              <div className='cajaPremio'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='medium-modal'
                  data-modal-toggle='medium-modal'
                  className='boton-blanco absolute m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-lg w-full'
                  src='/movich-buro-habitacion-estandar-superior-queen-b.jpg'
                  alt='product image'
                  width={327}
                  height={327}
                />
                <div className='px-5 pb-5'>
                  <h3 className='text-xl tracking-tight text-coloruno dark:text-colorunodark '>
                    Noche de alojamiento en hab. Estandar Movich Las Lomas
                  </h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center mt-1 text-lg font-medium text-colordos dark:text-colordosdark'>
                      <Image
                        className='m-1 h-8 w-8 '
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={32}
                        height={32}
                      />
                      <b>550</b>Puntos
                    </div>
                    <button
                      className='boton-color'
                      type='button'
                    >
                      Redimir
                    </button>
                  </div>
                </div>
              </div>

              <div className='cajaPremio'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='medium-modal'
                  data-modal-toggle='medium-modal'
                  className='boton-blanco absolute m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-lg w-full'
                  src='/movich-buro-habitacion-estandar-superior-queen-b.jpg'
                  alt='product image'
                  width={327}
                  height={327}
                />
                <div className='px-5 pb-5'>
                  <h3 className='text-xl tracking-tight text-coloruno dark:text-colorunodark '>
                    Noche de alojamiento en hab. Estandar Movich Pereira
                  </h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center mt-1 text-lg font-medium text-colordos dark:text-colordosdark'>
                      <Image
                        className='m-1 h-8 w-8 '
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={32}
                        height={32}
                      />
                      <b>550</b>Puntos
                    </div>
                    <button
                      className='boton-color'
                      type='button'
                    >
                      Redimir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className='hidden p-0 rounded-lg'
            id='styled-dashboard'
            role='tabpanel'
            aria-labelledby='dashboard-tab'
          >
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-4 pb-4'>
              <select
                id='premioFilter'
                className='fideinput'
              >
                <option value='1'>De menor a mayor</option>
                <option value='2'>De mayor a menor</option>
                <option value='3'>Destacados</option>
                <option value='id_lugar_553'>Solamente para Cali</option>
                <option value='id_lugar_260'>Solamente para Rionegro </option>
                <option value='id_lugar_486'>Solamente para Pereira</option>
                <option value='id_lugar_601'>Solamente para Bogotá D.C.</option>
                <option value='id_lugar_259'>Solamente para Medellín</option>
                <option value='id_lugar_262'>
                  Solamente para Barranquilla
                </option>
                <option value='id_lugar_280'>Solamente para Cartagena</option>
              </select>
              <label className='fidelabel text-md'>Ver:</label>
            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 '>
              <div className='cajaPremio'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='bonos-modal'
                  data-modal-toggle='bonos-modal'
                  className='boton-blanco absolute m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-lg w-full'
                  src='/bono.jpg'
                  alt='product image'
                  width={1200}
                  height={630}
                />
                <div className='px-5 pb-5'>
                  <h3 className='text-xl tracking-tight text-coloruno dark:text-colorunodark '>
                    Bono Consumo $100.000 pesos
                  </h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center mt-1 text-lg font-medium text-colordos dark:text-colordosdark'>
                      <Image
                        className='m-1 h-8 w-8 '
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={512}
                        height={512}
                      />
                      <b>350</b>Puntos
                    </div>
                    <button
                      className='boton-color'
                      type='button'
                    >
                      Redimir
                    </button>
                  </div>
                </div>
              </div>

              {/* <!-- Bonos Modal --> */}
              <div
                id='bonos-modal'
                tabIndex={-1}
                className='fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center'
              >
                <div className='relative w-full max-w-4xl max-h-full'>
                  {/* <!-- Modal content --> */}
                  <div className='relative bg-colorfondo rounded-lg shadow dark:bg-colorfondodark'>
                    {/* <!-- Modal header --> */}
                    <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t border-colordosdark dark:border-colordos '>
                      <h2 className=''>Bono Consumo $100.000 pesos</h2>
                      <button
                        type='button'
                        className='text-coloruno bg-transparent hover:bg-colorunodark hover:text-colordos rounded-lg text-sm w-12 h-12 ms-auto inline-flex justify-center items-center dark:hover:bg-black/50 dark:hover:text-colordosdark'
                        data-modal-hide='bonos-modal'
                      >
                        <svg
                          className='w-6 h-6'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 14 14'
                        >
                          <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                          ></path>
                        </svg>
                        <span className='sr-only'>Close modal</span>
                      </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className='p-4 md:p-5 space-y-4'>
                      <div className='flex flex-row space-x-4'>
                        <div className='basis-1/3 w-full '>
                          <Image
                            className='mb-4 rounded-lg'
                            src='/bono.jpg'
                            alt='product image'
                            width={1200}
                            height={630}
                          />
                        </div>
                        <div className='basis-2/3 w-full '>
                          <h4 className=' text-colordos dark:text-colordosdark'>
                            Disfrute de nuestra carta en cualquiera de nuestros
                            restaurantes a nivel nacional por un consumo de
                            $100.000.
                          </h4>
                          <p className='mt-2 text-colortres dark:text-colortresdark text-sm'>
                            Condiciones generales: Bono valido por un (1) mes.
                            No es redimible por bebidas alcoholicas. Bono
                            consumible en su totalidad para una sola
                            oportunidad. No es redimible por dinero. No se
                            realizara devolucion de puntos por parte del
                            programa despues de canjeado. Sujeto a
                            disponibilidad del ambiente. Para hacer efectivo el
                            premio es necesario presentar el bono recibido en su
                            cuenta de correo personal a la recepcion del hotel o
                            al area de alimentos y bebidas con el fin de
                            coordinar su entrega y disfrute. Por ser un
                            beneficio expres debe considerar su inmediatez y
                            consultar con el hotel en el cual se encuentra
                            alojado al momento de su redencion. Es personal e
                            intransferible. No incluye gastos no especificados.
                            El huesped debe cancelar adicionales que no estan
                            contemplados en la descripcion de este beneficio.
                            Para mayor informacion por favor visite los Terminos
                            y Condiciones del programa. El presente mensaje
                            representa aceptacion y confirmacion de solicitud
                            para el afiliado y debera ser tramitado por el hotel
                            donde se encuentre alojado siempre que tenga
                            disponibilidad del mismo y se ofrezca este servicio.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className=' p-4 md:p-5 border-t  rounded-b border-colordosdark dark:border-colordos'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center text-colordos dark:text-colordosdark text-lg'>
                          Redimir con
                          <Image
                            className='m-1 h-8 w-8 object-cover'
                            src='/Punto.png'
                            alt='icono-puntos'
                            width={512}
                            height={512}
                          />
                          <b> 1000 </b> Puntos
                        </div>
                        <button
                          data-modal-target='bonos-modal'
                          data-modal-toggle='bonos-modal'
                          className='boton-color'
                          type='button'
                        >
                          Redimir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className='hidden p-0 rounded-lg'
            id='styled-settings'
            role='tabpanel'
            aria-labelledby='settings-tab'
          >
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-4 pb-4'>
              <select
                id='premioFilter'
                className='fideinput'
              >
                <option value='1'>De menor a mayor</option>
                <option value='2'>De mayor a menor</option>
                <option value='3'>Destacados</option>
                <option value='id_lugar_553'>Solamente para Cali</option>
                <option value='id_lugar_260'>Solamente para Rionegro </option>
                <option value='id_lugar_486'>Solamente para Pereira</option>
                <option value='id_lugar_601'>Solamente para Bogotá D.C.</option>
                <option value='id_lugar_259'>Solamente para Medellín</option>
                <option value='id_lugar_262'>
                  Solamente para Barranquilla
                </option>
                <option value='id_lugar_280'>Solamente para Cartagena</option>
              </select>
              <label className='fidelabel text-md'>Ver:</label>
            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 '>
              <div className='cajaPremio'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='gastro-modal'
                  data-modal-toggle='gastro-modal'
                  className='boton-blanco absolute m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-lg w-full'
                  src='https://maqueta.fidepuntos.com.co/public/img/gastro-1.webp'
                  alt='product image'
                  width={1114}
                  height={1240}
                />
                <div className='px-5 pb-5'>
                  <h3 className='text-xl tracking-tight text-coloruno dark:text-colorunodark '>
                    Almuerzo/Cena de 3 tiempos para 1 persona
                  </h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center mt-1 text-lg font-medium text-colordos dark:text-colordosdark'>
                      <Image
                        className='m-1 h-8 w-8 '
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={512}
                        height={512}
                      />
                      <b>200</b>Puntos
                    </div>
                    <button
                      className='boton-color'
                      type='button'
                    >
                      Redimir
                    </button>
                  </div>
                </div>
              </div>

              {/* <!-- Gastro Modal --> */}
              <div
                id='gastro-modal'
                tabIndex={-1}
                className='fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center'
              >
                <div className='relative w-full max-w-4xl max-h-full'>
                  {/* <!-- Modal content --> */}
                  <div className='relative bg-colorfondo rounded-lg shadow dark:bg-colorfondodark'>
                    {/* <!-- Modal header --> */}
                    <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t border-colordosdark dark:border-colordos '>
                      <h2 className=''>
                        Almuerzo/Cena de 3 tiempos para 1 persona
                      </h2>
                      <button
                        type='button'
                        className='text-coloruno bg-transparent hover:bg-colorunodark hover:text-colordos rounded-lg text-sm w-12 h-12 ms-auto inline-flex justify-center items-center dark:hover:bg-black/50 dark:hover:text-colordosdark'
                        data-modal-hide='gastro-modal'
                      >
                        <svg
                          className='w-6 h-6'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 14 14'
                        >
                          <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                          ></path>
                        </svg>
                        <span className='sr-only'>Close modal</span>
                      </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className='p-4 md:p-5 space-y-4'>
                      <div className='flex flex-row space-x-4'>
                        <div className='basis-1/3 w-full '>
                          <Image
                            className='mb-4 rounded-lg'
                            src='https://maqueta.fidepuntos.com.co/public/img/gastro-1.webp'
                            alt='product image'
                            width={1114}
                            height={1240}
                          />
                        </div>
                        <div className='basis-2/3 w-full '>
                          <h4 className=' text-colordos dark:text-colordosdark'>
                            Disfrute de un Almuerzo o Cena sugerencia del chef,
                            de 3 tiempos para una (1) persona.
                          </h4>
                          <p className='mt-2 text-colortres dark:text-colortresdark text-sm'>
                            Este beneficio incluye una (1) entrada, un (1) plato
                            fuerte y un (1)postre con una (1) bebida no
                            alcoholica. Condiciones generales: Sujeto a
                            disponibilidad. Para hacer efectivo el premio es
                            necesario presentar el bono recibido en su cuenta de
                            correo personal a la recepcion del hotel o a el area
                            de alimentos y bebidas con el fin de coordinar su
                            entrega y disfrute. Por ser un beneficio expres debe
                            considerar su inmediatez y consultar con el hotel en
                            el cual se encuentra alojado al momento de su
                            redencion. Es personal e intransferible. No es
                            redimible por dinero. No se realizara devolucion de
                            puntos por parte del programa despues de canjeado.
                            No se permite reprogramacion. No incluye gastos no
                            especificados. El huesped debe cancelar adicionales
                            que no esten contemplados en la descripcion de este
                            beneficio. Para mayor informacion por favor visite
                            los Terminos y Condiciones del programa. El presente
                            mensaje representa aceptacion y confirmacion de
                            solicitud para el afiliado y deberá ser tramitado
                            por el hotel donde se encuentre alojado siempre que
                            tenga disponibilidad del mismo y se ofrezca este
                            servicio. Valido para redimir en cualquiera de
                            nuestros hoteles.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className=' p-4 md:p-5 border-t  rounded-b border-colordosdark dark:border-colordos'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center text-colordos dark:text-colordosdark text-lg'>
                          Redimir con
                          <Image
                            className='m-1 h-8 w-8 object-cover'
                            src='/Punto.png'
                            alt='icono-puntos'
                            width={512}
                            height={512}
                          />
                          <b> 1000 </b> Puntos
                        </div>
                        <button
                          data-modal-target='gastro-modal'
                          data-modal-toggle='gastro-modal'
                          className='boton-color'
                          type='button'
                        >
                          Redimir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='cajaPremio'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='gastro-modal'
                  data-modal-toggle='gastro-modal'
                  className='boton-blanco absolute m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-lg w-full'
                  src='https://maqueta.fidepuntos.com.co/public/img/gastro-2.webp'
                  alt='product image'
                  width={740}
                  height={525}
                />
                <div className='px-5 pb-5'>
                  <h3 className='text-xl tracking-tight text-coloruno dark:text-colorunodark '>
                    Almuerzo/Cena de 3 tiempos para 2 personas
                  </h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center mt-1 text-lg font-medium text-colordos dark:text-colordosdark'>
                      <Image
                        className='m-1 h-8 w-8 '
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={512}
                        height={512}
                      />
                      <b>350</b>Puntos
                    </div>
                    <button
                      className='boton-color'
                      type='button'
                    >
                      Redimir
                    </button>
                  </div>
                </div>
              </div>

              <div className='cajaPremio'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='gastro-modal'
                  data-modal-toggle='gastro-modal'
                  className='boton-blanco absolute m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-lg w-full'
                  src='https://maqueta.fidepuntos.com.co/public/img/gastro-3.webp'
                  alt='product image'
                  width={740}
                  height={525}
                />
                <div className='px-5 pb-5'>
                  <h3 className='text-xl tracking-tight text-coloruno dark:text-colorunodark '>
                    Botella de Vino de La Casa
                  </h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center mt-1 text-lg font-medium text-colordos dark:text-colordosdark'>
                      <Image
                        className='m-1 h-8 w-8 '
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={512}
                        height={512}
                      />
                      <b>600</b>Puntos
                    </div>
                    <button
                      className='boton-color'
                      type='button'
                    >
                      Redimir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className='hidden p-0 rounded-lg'
            id='styled-contacts'
            role='tabpanel'
            aria-labelledby='contacts-tab'
          >
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-4 pb-4'>
              <select
                id='premioFilter'
                className='fideinput'
              >
                <option value='1'>De menor a mayor</option>
                <option value='2'>De mayor a menor</option>
                <option value='3'>Destacados</option>
                <option value='id_lugar_553'>Solamente para Cali</option>
                <option value='id_lugar_260'>Solamente para Rionegro </option>
                <option value='id_lugar_486'>Solamente para Pereira</option>
                <option value='id_lugar_601'>Solamente para Bogotá D.C.</option>
                <option value='id_lugar_259'>Solamente para Medellín</option>
                <option value='id_lugar_262'>
                  Solamente para Barranquilla
                </option>
                <option value='id_lugar_280'>Solamente para Cartagena</option>
              </select>
              <label className='fidelabel text-md'>Ver:</label>
            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 '>
              <div className='cajaPremio'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='spa-modal'
                  data-modal-toggle='spa-modal'
                  className='boton-blanco absolute m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-lg w-full'
                  src='/spa-1.jpg'
                  alt='product image'
                  width={1024}
                  height={683}
                />
                <div className='px-5 pb-5'>
                  <h3 className='text-xl tracking-tight text-coloruno dark:text-colorunodark '>
                    Masaje de Espalda y hombros(30 Minutos)
                  </h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center mt-1 text-lg font-medium text-colordos dark:text-colordosdark'>
                      <Image
                        className='m-1 h-8 w-8 '
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={512}
                        height={512}
                      />
                      <b>200</b>Puntos
                    </div>
                    <button
                      className='boton-color'
                      type='button'
                    >
                      Redimir
                    </button>
                  </div>
                </div>
              </div>

              <div
                id='spa-modal'
                tabIndex={-1}
                className='fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full justify-center items-center'
              >
                <div className='relative w-full max-w-4xl max-h-full'>
                  <div className='relative bg-colorfondo rounded-lg shadow dark:bg-colorfondodark'>
                    <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t border-colordosdark dark:border-colordos '>
                      <h2 className=''>
                        Masaje de Espalda y hombros (60 Minutos)
                      </h2>
                      <button
                        type='button'
                        className='text-coloruno bg-transparent hover:bg-colorunodark hover:text-colordos rounded-lg text-sm w-12 h-12 ms-auto inline-flex justify-center items-center dark:hover:bg-black/50 dark:hover:text-colordosdark'
                        data-modal-hide='spa-modal'
                      >
                        <svg
                          className='w-6 h-6'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 14 14'
                        >
                          <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                          ></path>
                        </svg>
                        <span className='sr-only'>Close modal</span>
                      </button>
                    </div>

                    <div className='p-4 md:p-5 space-y-4'>
                      <div className='flex flex-row space-x-4'>
                        <div className='basis-1/3 w-full '>
                          <Image
                            className='mb-4 rounded-lg'
                            src='/spa-1.jpg'
                            alt='product image'
                            width={1024}
                            height={6883}
                          />
                        </div>
                        <div className='basis-2/3 w-full '>
                          <h4 className=' text-colordos dark:text-colordosdark'>
                            Disfrute de un masaje para espalda y hombros de 30
                            minutos de duracion para una(1)persona. Valido para
                            redimir en cualquiera de nuestros hoteles que tengan
                            el servicio y este se encuentre activo (No Aplica
                            para KUA SPA en Movich Las Lomas Rionegro, Casa del
                            Alferez en Cali, Movich Cartagena).
                          </h4>
                          <p className='mt-2 text-colortres dark:text-colortresdark text-sm'>
                            Condiciones generales: Este beneficio debe ser
                            tomado exclusivamente donde se solicito. Sujeto a
                            disponibilidad. Para hacer efectivo el premio es
                            necesario presentar el bono recibido en su cuenta de
                            correo personal a la recepcion del hotel o a nuestro
                            Spa con el fin de coordinar su entrega y disfrute.
                            Una vez redimido, tiene un mes para hacerlo efectivo
                            en el hotel donde fue solicitado. Por ser un
                            beneficio expres debe considerar su inmediatez y
                            consultar con el hotel en el cual se encuentra
                            alojado al momento de su redencion. Es personal e
                            intransferible. No es redimible por dinero. No se
                            realizara devolucion de puntos por parte del
                            programa despues de canjeado. Solo admite
                            reprogramacion por un periodo de un (1) mes
                            calendario en caso de no poder ser disfrutado. Toda
                            cancelacion/reprogramacion de la redencion debera
                            notificarse por escrito en un periodo no mayor a 5
                            dias calendario, de lo contrario se perdera el
                            derecho a utilizar el premio y no se hara devolucion
                            de puntos. No incluye gastos no especificados. El
                            huesped debe cancelar adicionales que no esten
                            contemplados en la descripcion de este beneficio.
                            Para mayor informacion por favor visite los Terminos
                            y Condiciones del programa. El presente mensaje
                            representa aceptacion y confirmacion de solicitud
                            para el afiliado y debera ser tramitado por el hotel
                            donde se encuentre alojado siempre que tenga
                            disponibilidad del mismo y se ofrezca este servicio.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=' p-4 md:p-5 border-t  rounded-b border-colordosdark dark:border-colordos'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center text-colordos dark:text-colordosdark text-lg'>
                          Redimir con
                          <Image
                            className='m-1 h-8 w-8 object-cover'
                            src='/Punto.png'
                            alt='icono-puntos'
                            width={512}
                            height={512}
                          />
                          <b> 1000 </b> Puntos
                        </div>
                        <button
                          data-modal-target='spa-modal'
                          data-modal-toggle='spa-modal'
                          className='boton-color'
                          type='button'
                        >
                          Redimir
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='cajaPremio'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='spa-modal'
                  data-modal-toggle='spa-modal'
                  className='boton-blanco absolute m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-lg w-full'
                  src='/spa-2.jpg'
                  alt='product image'
                  width={750}
                  height={500}
                />
                <div className='px-5 pb-5'>
                  <h3 className='text-xl tracking-tight text-coloruno dark:text-colorunodark '>
                    Masaje Relax Completo(60 Minutos)
                  </h3>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center mt-1 text-lg font-medium text-colordos dark:text-colordosdark'>
                      <Image
                        className='m-1 h-8 w-8 '
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={512}
                        height={512}
                      />
                      <b>350</b>Puntos
                    </div>
                    <button
                      className='boton-color'
                      type='button'
                    >
                      Redimir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
