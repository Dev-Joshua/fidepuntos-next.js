'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMenuDropdownOpen, setItMenuDropdownOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };
  const toggleMenuDropdown = () => {
    setItMenuDropdownOpen(!isMenuDropdownOpen);
  };
  const handleClose = () => {
    setItMenuDropdownOpen(false);
  };

  return (
    <nav
      className='fixed z-50 ml-auto mr-auto p-2 w-full border-b-2 border-white'
      style={{ backgroundColor: '#F7F0EA' }}
    >
      <div className='flex justify-between mx-auto max-w-screen-xl items-center'>
        <a>
          <div>
            <Image
              src={'/logo._2.png'}
              alt='Logo'
              width={228.56}
              height={80}
            />
          </div>
        </a>
        <div className='relative flex gap-1'>
          {/* Boton idiomas */}
          <button
            type='button'
            onClick={toggleLanguageDropdown}
            className='inline-flex w-full justify-center rounded-xl gap-x-1.5  bg-none px-3 p-4 text-sm font-medium text-yellow-600  hover:bg-white cursor-pointer'
            aria-expanded={isLanguageDropdownOpen}
            aria-haspopup='true'
          >
            <Image
              src={'/spain.png'}
              alt='Logo'
              width={20}
              height={7}
            />
            <span>ESPAÑOL</span>
          </button>

          {/* Dropdown idioma*/}
          {isLanguageDropdownOpen && (
            <div
              style={{ backdropFilter: 'blur(12px)' }}
              className='absolute z-10 mt-14 w-40 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='menu-button'
            >
              <ul className='py-1'>
                <li>
                  <a className='flex gap-2 px-4 py-2 text-sm rounded-xl text-gray-700 font-medium hover:bg-white hover:text-yellow-600 cursor-pointer'>
                    <Image
                      src={'/spain.png'}
                      alt='Logo'
                      width={20}
                      height={7}
                    />
                    ESPAÑOL
                  </a>
                </li>
                <li>
                  <a className='flex gap-2 px-4 py-2 text-sm rounded-xl text-gray-700 font-medium hover:bg-white hover:text-yellow-600 cursor-pointer'>
                    <Image
                      src={'/united-states.png'}
                      alt='Logo'
                      width={20}
                      height={7}
                    />
                    ENGLISH (US)
                  </a>
                </li>
                <li>
                  <a className='flex gap-2 px-4 py-2 text-sm rounded-xl text-gray-700 font-medium hover:bg-white hover:text-yellow-600 cursor-pointer'>
                    <Image
                      src={'/italy.png'}
                      alt='Logo'
                      width={20}
                      height={7}
                    />
                    ITALIANO
                  </a>
                </li>
              </ul>
            </div>
          )}

          {/* Boton luna */}
          <button className='hover:bg-white rounded-xl w-20 flex justify-center items-center '>
            <svg
              className='w-6 h-8 text-yellow-600 dark:text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                fillRule='evenodd'
                d='M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z'
                clipRule='evenodd'
              />
            </svg>
          </button>

          {/* Boton menu */}
          <button
            className='hover:bg-white rounded-xl'
            onClick={toggleMenuDropdown}
            aria-expanded={isMenuDropdownOpen}
            aria-haspopup='true'
          >
            <svg
              className='w-12 h-8 text-yellow-600 dark:text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeWidth='2'
                d='M5 7h14M5 12h14M5 17h14'
              />
            </svg>
          </button>

          {/* Dropdown menu */}
          {isMenuDropdownOpen && (
            <div
              className='fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-orange-50  w-80 text-xs transform-none'
              aria-labelledby='drawer-navigation-label'
              aria-modal='true'
              role='dialog'
            >
              <h3 className='py-6 text-3xl font-medium text-yellow-600 '>
                Menú
              </h3>
              <button
                onClick={handleClose}
                type='button'
                data-drawer-hide='drawer-navigation'
                aria-controls='drawer-navigation'
                className='mt-6 py-4 bg-transparent hover:bg-white  rounded-xl text-sm w-10 h-10 absolute top-3 end-3 inline-flex items-center justify-center '
              >
                <svg
                  className='w-8 h-8 text-yellow-600 hover:text-black mt-1'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18 17.94 6M18 18 6.06 6'
                  />
                </svg>
              </button>
              <div className='py-2 overflow-y-auto '>
                <ul className='py-1'>
                  <li>
                    <a className='flex items-center gap-4 font-semibold px-4 py-4 text-sm text-gray-700 '>
                      <svg
                        className='w-6 h-6 0 dark:text-white text-yellow-600'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M20 7h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C10.4 2.842 8.949 2 7.5 2A3.5 3.5 0 0 0 4 5.5c.003.52.123 1.033.351 1.5H4a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a2 2 0 0 0-2-2Zm-9.942 0H7.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM13 14h-2v8h2v-8Zm-4 0H4v6a2 2 0 0 0 2 2h3v-8Zm6 0v8h3a2 2 0 0 0 2-2v-6h-5Z' />
                      </svg>
                      <span className='flex-1 ms-3'>INICIO</span>
                    </a>
                  </li>
                  <li>
                    <a className='flex gap-4 font-semibold px-4 py-4 text-sm text-gray-700 items-center'>
                      <svg
                        className='w-6 h-6 text-yellow-600 dark:text-white '
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fillRule='evenodd'
                          d='M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span className='flex-1 ms-3'>QUE ES</span>
                    </a>
                  </li>
                  <li>
                    <a className='flex items-center gap-4 font-semibold px-4 py-4 text-sm text-gray-700'>
                      <svg
                        className='w-6 h-6 text-yellow-600 dark:text-white'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fillRule='evenodd'
                          d='M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span className='flex-1 ms-3'>COMO FUNCIONA</span>
                    </a>
                  </li>
                  <li>
                    <a className='flex items-center gap-4 font-semibold px-4 py-4 text-sm text-gray-700'>
                      <svg
                        className='w-6 h-6 text-yellow-600 dark:text-white'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fillRule='evenodd'
                          d='M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span className='flex-1 ms-3'>NUESTROS HOTELES</span>
                    </a>
                  </li>
                  <li>
                    <a className='flex items-center gap-4 font-semibold px-4 py-4 text-sm text-gray-700'>
                      <svg
                        className='w-6 h-6 text-yellow-600 dark:text-white'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fillRule='evenodd'
                          d='M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span className='flex-1 ms-3'>
                        TERMINOS Y CONDICIONES
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className='flex items-center gap-4 font-semibold px-4 py-4 text-sm text-gray-700'>
                      <svg
                        className='w-6 h-6 text-yellow-600 dark:text-white'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          fillRule='evenodd'
                          d='M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z'
                          clipRule='evenodd'
                        />
                      </svg>
                      <span className='flex-1 ms-3'>
                        TRATAMIENTO DE DATOS PERSONALES
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
