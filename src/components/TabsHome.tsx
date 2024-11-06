'use client';

import { useState } from 'react';

export default function TabsHome() {
  const [selectedTab, setSelectedTab] = useState('alojamiento');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
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
              strokeWidth='1.5'
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
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
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
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                fill='none'
                stroke='currentColor'
                strokeLinejoin='round'
                strokeWidth='24'
                d='m57.49 47.74l368.43 368.43a37.28 37.28 0 0 1 0 52.72a37.29 37.29 0 0 1-52.72 0l-90-91.55a32 32 0 0 1-9.2-22.43v-5.53a32 32 0 0 0-9.52-22.78l-11.62-10.73a32 32 0 0 0-29.8-7.44a48.53 48.53 0 0 1-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74Z'
              ></path>
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='24'
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
              strokeWidth='0'
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
  );
}
