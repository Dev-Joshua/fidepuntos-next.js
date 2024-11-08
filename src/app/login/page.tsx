import Image from 'next/image';
import Link from 'next/link';

// Mediante el sistema de archivos de NextJs, cada archivo page.tsx dentro de una carpeta se convierte en una ruta
export default function Page() {
  return (
    <div className='bg-center bg-cover py-5  mx-auto  relative'>
      {/* Utilizo componente Image para optimizar imagenes */}
      <Image
        className='rounded-2xl object-cover w-full h-screen'
        src='https://cdn0.matrimonio.com.co/vendor/7572/3_2/1280/jpg/4j3a3926_10_97572_v1.webp'
        alt='fondo-login'
        width={1500}
        height={200}
      />
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          overflow: 'hidden',
          borderRadius: '0.75rem',
          backgroundColor: 'rgb(255 255 255 / 0.75)',
          padding: '1rem',
          color: 'rgb(102 102 102 / 1)',
          position: 'absolute',
          top: '10%',
          left: '0',
          right: '0',
          bottom: '10%',
          maxWidth: '28rem',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <h2 className='mb-4 text-center text-5xl font-medium text-yellow-600 tracking-tighter'>
              ¡Bienvenido!
            </h2>
            <p className='mt-4 text-colordos text-black text-center  text-base'>
              Ingrese digitando número de identificación
            </p>
          </div>
          <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form
              className='space-y-6'
              action='#'
              method='POST'
            >
              <div>
                <label className='block text-base font-medium leading-6  '>
                  Número de identificación
                </label>
                <div className='mt-2'>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    autoComplete='email'
                    required
                    className='py-2 w-full'
                    style={{
                      backgroundColor: '#F7F0EA',
                      borderColor: '#ca8a04 ',
                      borderWidth: '1px',
                      borderRadius: '5px',
                      outline: 'none',
                      paddingLeft: '10px',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#ca8a04';
                      e.target.style.backgroundColor = '#fff'; // Color de fondo en foco
                    }}
                  />
                </div>
              </div>
              <div>
                <div className='flex items-center justify-between'>
                  <label className='block text-base font-medium leading-6 text-colortres dark:text-colortresdark'>
                    Contraseña
                  </label>
                </div>
                <div className='mt-2'>
                  <input
                    id='password'
                    name='password'
                    required
                    autoComplete='current-password'
                    type='password'
                    className='py-2 w-full'
                    style={{
                      backgroundColor: '#F7F0EA',
                      borderColor: '#ca8a04 ',
                      borderWidth: '1px',
                      borderRadius: '5px',
                      outline: 'none',
                      paddingLeft: '10px',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#ca8a04';
                      e.target.style.backgroundColor = '#fff'; // Color de fondo en foco
                    }}
                  />
                </div>
                <div className='text-sm text-center mt-4 '>
                  <a
                    href='#'
                    className='font-semibold text-yellow-600 text-sm text-center hover:text-gray-600'
                  >
                    ¿Olvidó su contraseña?
                  </a>
                </div>
              </div>
              <div>
                <Link href='/home'>
                  <button
                    type='submit'
                    className='w-full text-lg hover:bg-opacity-10 hover:text-yellow-600 rounded-full border border-yellow-600 bg-yellow-600 px-5 py-2 font-semibold text-white transition duration-300'
                  >
                    Iniciar Sesión
                  </button>
                </Link>
              </div>
            </form>
            <p className='pt-10  text-center text-sm'>
              ¿No tienes una cuenta? Registrate:
            </p>
            <Link href='/register'>
              <div>
                <button
                  type='submit'
                  className='mt-3 w-full text-lg hover:bg-opacity-10 hover:text-yellow-600 rounded-full border border-yellow-600 bg-white px-5 py-2 font-semibold text-yellow-600 transition duration-300'
                >
                  Crear una cuenta
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
