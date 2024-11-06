'use client';

import Carousel from '@/components/Carousel';
import CarouselNovedades from '@/components/CarouselNovedades';
import TabsHome from '@/components/TabsHome';

import Image from 'next/image';

export default function Page() {
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

      {/* Grilla izquierda */}
      <div className='col-span-2 md:order-1 pt-12 '>
        <Carousel />

        <TabsHome />

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
                id='premioFilter'
                className=' '
                style={{
                  display: 'block',
                  width: '100%',
                  appearance: 'none',
                  borderRadius: '0.375rem',
                  borderWidth: '0px',
                  backgroundColor: 'rgb(247 240 234 / 1)',
                  paddingTop: '0.375rem',
                  paddingBottom: '0.375rem',
                  color: 'rgb(34 34 34 / 1)',
                  caretColor: '#B47E0B',
                  boxShadow:
                    'inset 0 0 0 1px rgba(180, 126, 11, 0.5), 0 1px 2px rgba(0, 0, 0, 0.05)',
                  backgroundImage:
                    'url(\'data:image/svg+xml,%3csvg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"%3e %3cpath stroke="%236B7280" stroke-linecap="round" stroke-linejoin="round" stroke-Width="2" d="m1 1 4 4 4-4"/%3e %3c/svg%3e\')',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '0.75em 0.75em',
                  paddingRight: '2.5rem',
                  paddingLeft: '1rem',
                  outline: 'none',
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
              <label
                className='text-md'
                style={{
                  position: 'absolute',
                  top: '0px',
                  zIndex: -10,
                  transformOrigin: '0',
                  transform: 'translate(0, -1.5rem) scaleX(0.75) scaleY(0.75)',
                  color: 'rgb(180, 126, 11)',
                  transitionDuration: '300ms',
                }}
              >
                Ver:
              </label>
            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4'>
              <div className='bg-white rounded-xl flex flex-col justify-center relative'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='medium-modal'
                  data-modal-toggle='medium-modal'
                  className='rounded-full border border-[#B47E0B] bg-white px-5 py-2 font-semibold text-[#B47E0B] transition-colors duration-300 ease-in-out absolute top-0  m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-xl w-full h-80 object-cover'
                  src='/movich-buro-habitacion-estandar-superior-queen-b.jpg'
                  alt='product image'
                  width={700}
                  height={467}
                />
                <div className='px-5 pb-5 h-40'>
                  <h3 className='font-medium text-lg h-20 tracking-tight text-yellow-700 '>
                    Noche de alojamiento en habitación Superior Movich Casa del
                    Alferez
                  </h3>
                  <div className='flex items-center justify-between mt-4'>
                    <div className='flex items-center mt-1 text-lg font-medium'>
                      <Image
                        className='m-1 h-8 w-8'
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={32}
                        height={32}
                      />
                      <b className='text-black'>800</b>Puntos
                    </div>
                    <button
                      className='text-base hover:bg-opacity-10 hover:text-yellow-600 rounded-full border border-yellow-600 bg-yellow-600 px-5 py-2 font-semibold text-white transition duration-300'
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
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
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
                            className='mb-4 rounded-lg h-80 object-cover'
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
                            className='m-1 h-8 w-8'
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

              <div className='bg-white rounded-xl flex flex-col justify-center relative'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='medium-modal'
                  data-modal-toggle='medium-modal'
                  className='rounded-full border border-[#B47E0B] bg-white px-5 py-2 font-semibold text-[#B47E0B] transition-colors duration-300 ease-in-out absolute top-0  m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-xl w-full h-80 object-cover'
                  src='/hab-2.jpg'
                  alt='product image'
                  width={327}
                  height={218}
                />
                <div className='h-40 px-5 pb-5'>
                  <h3 className='font-medium text-lg h-20 tracking-tight text-yellow-700 '>
                    Upgrade Superior a Suite por una noche
                  </h3>
                  <div className='flex items-center justify-between mt-4'>
                    <div className='flex items-center mt-1 text-lg font-medium'>
                      <Image
                        className='m-1 h-8 w-8 '
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={32}
                        height={32}
                      />
                      <b className='text-black'>250</b>Puntos
                    </div>
                    <button
                      className='text-base hover:bg-opacity-10 hover:text-yellow-600 rounded-full border border-yellow-600 bg-yellow-600 px-5 py-2 font-semibold text-white transition duration-300'
                      type='button'
                    >
                      Redimir
                    </button>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-xl flex flex-col justify-center relative'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='medium-modal'
                  data-modal-toggle='medium-modal'
                  className='rounded-full border border-[#B47E0B] bg-white px-5 py-2 font-semibold text-[#B47E0B] transition-colors duration-300 ease-in-out absolute top-0  m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-xl w-full h-80 object-cover'
                  src='/hab-3.jpg'
                  alt='product image'
                  width={327}
                  height={179}
                />
                <div className='h-40 px-5 pb-5'>
                  <h3 className='font-medium text-lg h-20 tracking-tight text-yellow-700 '>
                    Upgrade standard-superior por una noche
                  </h3>
                  <div className='flex items-center justify-between mt-4'>
                    <div className='flex items-center mt-1 text-lg font-medium '>
                      <Image
                        className='m-1 h-8 w-8 '
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={32}
                        height={32}
                      />
                      <b className='text-black'>300</b>Puntos
                    </div>
                    <button
                      className='text-base hover:bg-opacity-10 hover:text-yellow-600 rounded-full border border-yellow-600 bg-yellow-600 px-5 py-2 font-semibold text-white transition duration-300'
                      type='button'
                    >
                      Redimir
                    </button>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-xl flex flex-col justify-center relative'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='medium-modal'
                  data-modal-toggle='medium-modal'
                  className='rounded-full border border-[#B47E0B] bg-white px-5 py-2 font-semibold text-[#B47E0B] transition-colors duration-300 ease-in-out absolute top-0  m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-xl w-full h-80 object-cover'
                  src='/hab-1.jpg'
                  alt='product image'
                  width={327}
                  height={218}
                />
                <div className='h-40 px-5 pb-5'>
                  <h3 className='font-medium text-lg h-20 tracking-tight text-yellow-700'>
                    Upgrade standard-suite por una noche
                  </h3>
                  <div className='flex items-center justify-between mt-4'>
                    <div className='flex items-center mt-1 text-lg font-medium'>
                      <Image
                        className='m-1 h-8 w-8 '
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={32}
                        height={32}
                      />
                      <b className='text-black'>550</b>Puntos
                    </div>
                    <button
                      className='text-base hover:bg-opacity-10 hover:text-yellow-600 rounded-full border border-yellow-600 bg-yellow-600 px-5 py-2 font-semibold text-white transition duration-300'
                      type='button'
                    >
                      Redimir
                    </button>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-xl flex flex-col justify-center relative'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='medium-modal'
                  data-modal-toggle='medium-modal'
                  className='rounded-full border border-[#B47E0B] bg-white px-5 py-2 font-semibold text-[#B47E0B] transition-colors duration-300 ease-in-out absolute top-0  m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-xl w-full h-80 object-cover'
                  src='/movich-buro-habitacion-estandar-superior-queen-b.jpg'
                  alt='product image'
                  width={327}
                  height={327}
                />
                <div className='h-40 px-5 pb-5'>
                  <h3 className='font-medium text-lg tracking-tight text-yellow-700 h-20 '>
                    Noche de alojamiento en hab. Estandar Movich Las Lomas
                  </h3>
                  <div className='flex items-center justify-between mt-4'>
                    <div className='flex items-center mt-1 text-lg font-medium'>
                      <Image
                        className='m-1 h-8 w-8 '
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={32}
                        height={32}
                      />
                      <b className='text-black'>550</b>Puntos
                    </div>
                    <button
                      className='text-base hover:bg-opacity-10 hover:text-yellow-600 rounded-full border border-yellow-600 bg-yellow-600 px-5 py-2 font-semibold text-white transition duration-300'
                      type='button'
                    >
                      Redimir
                    </button>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-xl flex flex-col justify-center relative'>
                <button
                  data-tooltip-target='tooltip-default'
                  data-modal-target='medium-modal'
                  data-modal-toggle='medium-modal'
                  className='rounded-full border border-[#B47E0B] bg-white px-5 py-2 font-semibold text-[#B47E0B] transition-colors duration-300 ease-in-out absolute top-0  m-4'
                  type='button'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    ></path>
                  </svg>
                </button>
                <Image
                  className='mb-4 rounded-t-xl w-full h-80 object-cover'
                  src='/movich-buro-habitacion-estandar-superior-queen-b.jpg'
                  alt='product image'
                  width={327}
                  height={327}
                />
                <div className='h-40 px-5 pb-5'>
                  <h3 className='font-medium text-lg tracking-tight text-yellow-700 h-20 '>
                    Noche de alojamiento en hab. Estandar Movich Pereira
                  </h3>
                  <div className='flex items-center justify-between mt-4'>
                    <div className='flex items-center mt-1 text-lg font-medium'>
                      <Image
                        className='m-1 h-8 w-8 '
                        src='/Punto.png'
                        alt='icono-puntos'
                        width={32}
                        height={32}
                      />
                      <b className='text-black'>550</b>Puntos
                    </div>
                    <button
                      className='text-base hover:bg-opacity-10 hover:text-yellow-600 rounded-full border border-yellow-600 bg-yellow-600 px-5 py-2 font-semibold text-white transition duration-300'
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
              <div className=''>
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
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
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
                    <div className='flex items-center mt-1 text-lg font-medium'>
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
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
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
                          <h4 className=''>
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
                        <div className='flex items-center text-lg'>
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
              <div className=''>
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
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
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
                    <div className='flex items-center mt-1 text-lg font-medium'>
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
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
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
                          <h4 className=''>
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
                        <div className='flex items-center text-lg'>
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

              <div className=''>
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
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
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
                    <div className='flex items-center mt-1 text-lg font-medium'>
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

              <div className=''>
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
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
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
                    <div className='flex items-center mt-1 text-lg font-medium'>
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
              <div className=''>
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
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
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
                    <div className='flex items-center mt-1 text-lg font-medium'>
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
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
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
                          <h4 className=''>
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
                        <div className='flex items-center text-lg'>
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

              <div className=''>
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
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
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
                    <div className='flex items-center mt-1 text-lg font-medium'>
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
