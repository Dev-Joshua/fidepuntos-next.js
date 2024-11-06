import Image from 'next/image';
import CarouselNovedades from './CarouselNovedades';

export default function ColumnInfoRigth() {
  return (
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
              <div className='w-full font-bold'>
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
      <h3 className='hidden md:block text-yellow-600 font-medium text-3xl pt-6'>
        Novedades
      </h3>
      <CarouselNovedades />
    </div>
  );
}
