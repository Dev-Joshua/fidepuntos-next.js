import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        overflow: 'hidden',
        borderTopLeftRadius: '1rem',
        borderTopRightRadius: '1rem',
        backgroundColor: 'rgb(255 255 255 / 0.5)',
        padding: '1rem',
        opacity: '1',
        color: 'rgb(102 102 102 / 1)',
        marginTop: '10px',
      }}
    >
      <div className='max-w-7xl mx-auto divide-y divide-coloruno/50 px-4 sm:px-4 md:px-4 '>
        <div className='flex-none lg:flex'>
          <div className='flex-none lg:w-1/2 lg:flex lg:pb-0 pb-8'>
            <div className='lg:flex-none lg:w-2/3'>
              <p className='text-colordos text-black font-semibold '>
                MovichDreams
              </p>
              <p className='mt-3 space-y-2 text-sm'>
                <b>MovichDreams</b> es el programa de lealtad de Hoteles Movich,
                diseñado para agradecer su lealtad y preferencia. Este programa
                permite acumular puntos por sus estadías para canjear por
                noches, y beneficios inmediatos en cualquiera de nuestros
                hoteles.
              </p>
              <div className='mt-4 flex items-center text-lg font-medium text-black'>
                Acumula tus
                <Image
                  src='/Punto.png'
                  alt='icon-punto'
                  width={32}
                  height={32}
                  className='mx-2'
                />
                Puntos
              </div>
            </div>
          </div>

          <div className='flex lg:w-1/2 lg:flex-none space-x-4 sm:space-y-0'>
            <div className='lg:flex-none lg:w-1/2'>
              <p className='text-colordos dark:text-colordosdark font-semibold'>
                Acerca de
              </p>
              <ul className='mt-2 space-y-0  text-sm font-semibold'>
                <li>
                  <a
                    href=''
                    className='flex items-center gap-2 menuItem group p-2'
                  >
                    <svg
                      className='w-6 h-6 text-yellow-600 dark:text-white'
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
                        d='M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z'
                      />
                    </svg>
                    <span className='flex-1 ms-1 whitespace-nowrap'>
                      QUE ES
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href=''
                    className='flex items-center gap-2 menuItem group p-2'
                  >
                    <svg
                      className='w-6 h-6 text-yellow-600 dark:text-white'
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
                        d='M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z'
                      />
                    </svg>
                    <span className='flex-1 ms-1 whitespace-nowrap'>
                      COMO FUNCIONA
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href=''
                    className='flex items-center gap-2 menuItem group p-2'
                  >
                    <svg
                      className='w-6 h-6 text-yellow-600 dark:text-white'
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
                        d='M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z'
                      />
                    </svg>
                    <span>NUESTROS HOTELES</span>
                  </a>
                </li>
                <li>
                  <a
                    href=''
                    className='flex items-center gap-2 menuItem group p-2'
                  >
                    <svg
                      className='w-6 h-6 text-yellow-600 dark:text-white'
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
                        d='M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z'
                      />
                    </svg>
                    <span>TERMINOS Y CONDICIONES</span>
                  </a>
                </li>
                <li>
                  <a
                    href=''
                    className='flex items-center gap-2 menuItem group p-2'
                  >
                    <svg
                      className='w-6 h-6 text-yellow-600 dark:text-white'
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
                        d='M16.153 19 21 12l-4.847-7H3l4.848 7L3 19h13.153Z'
                      />
                    </svg>
                    <span>TRATAMIENTO DE DATOS PERSONALES</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='lg:flex-none lg:w-1/2'>
              <p className='text-colordos dark:text-colordosdark font-semibold'>
                Usuario
              </p>
              <ul className='mt-2 space-y-0 font-semibold text-sm'>
                <li>
                  <a
                    href=''
                    className='flex items-center gap-2 menuItem group p-2'
                  >
                    <svg
                      className='w-6 h-6 text-yellow-600 dark:text-white'
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
                        d='M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2'
                      />
                    </svg>

                    <span className='ms-2 uppercase'>Iniciar Sesión</span>
                  </a>
                </li>
                <li>
                  <a
                    href=''
                    className='flex items-center gap-2 menuItem group p-2'
                  >
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
                        d='M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z'
                        clipRule='evenodd'
                      />
                    </svg>

                    <span className='ms-2 uppercase'>Registrarme</span>
                  </a>
                </li>
                <li>
                  <a
                    href=''
                    className='flex items-center gap-2 menuItem group p-2'
                  >
                    <svg
                      className='w-6 h-6 text-yellow-600 dark:text-white'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z' />
                      <path d='M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z' />
                    </svg>

                    <span className='ms-2 uppercase'>Contáctenos</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-4 pt-4 border-yellow-600'>
          <span className='text-sm  text-colortres sm:text-center dark:text-colortresdark'>
            © 2024 <a className='hover:underline'>MovichDreams</a>. Todos los
            derechos reservados.
            <br />
          </span>

          <span className='text-xs  text-colortres sm:text-center dark:text-colortresdark'>
            Aviso de cookies: Si continúa navegando, consideramos que acepta
            nuestra <a className='hover:underline'>política de cookies.</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
