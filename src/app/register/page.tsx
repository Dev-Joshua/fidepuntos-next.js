import Image from 'next/image';

export default function Page() {
  return (
    <div className='bg-center bg-cover  py-5 my-5 bg-fixed mx-auto w-full relative'>
      <Image
        className='rounded-2xl object-cover w-full'
        src='https://cdn0.matrimonio.com.co/vendor/7572/3_2/1280/jpg/4j3a3926_10_97572_v1.webp'
        alt='fondo-login'
        width={1280}
        height={850}
      />
      <div
        className=''
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
          maxWidth: '36rem',
          minHeight: '90vh',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className='flex flex-col justify-center px-6 py-12 lg:px-8 '>
          <div className='sm:mx-auto sm:w-full sm:max-w-xl'>
            <h2 className='text-center'>Formulario de registro</h2>
          </div>
          <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-xl'>
            <form className='space-y-6 h-full'>
              <fieldset>
                <legend className='sr-only'>Countries</legend>
                <div className='grid grid-cols-3 items-center'>
                  <div className='flex items-center mb-4'>
                    <input
                      id='country-option-1'
                      type='radio'
                      name='countries'
                      value='USA'
                      className='fideradio'
                    />
                    <label className='block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300'>
                      Huesped
                    </label>
                  </div>

                  <div className='flex items-center mb-4'>
                    <input
                      id='country-option-2'
                      type='radio'
                      name='countries'
                      value='Germany'
                      className='fideradio'
                    />
                    <label className='block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      Agencia
                    </label>
                  </div>

                  <div className='flex items-center mb-4'>
                    <input
                      id='country-option-3'
                      type='radio'
                      name='countries'
                      value='Spain'
                      className='fideradio'
                    />
                    <label className='block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      Corporativo
                    </label>
                  </div>
                </div>
              </fieldset>

              <div className='relative z-0 w-full group'>
                <p className='text-colordos dark:text-colordosdark text-center font-semibold'>
                  Información Personal
                </p>
              </div>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='text'
                    name='floating_first_name'
                    id='floating_first_name'
                    className='fideinput peer'
                    placeholder='Nombre'
                  />
                  <label className='fidelabel text-md'>Nombre</label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='text'
                    name='floating_last_name'
                    id='floating_last_name'
                    className='fideinput peer'
                    placeholder='Apellidos'
                  />
                  <label className='fidelabel text-md'>Apellidos</label>
                </div>

                <div className='relative z-0 w-full mb-5 group'>
                  <select
                    id='tipo-id'
                    className='fideinput peer'
                  >
                    <option>Seleccione...</option>
                    <option>CC - Cédula de ciudadanía</option>
                    <option>CE - Cédula de extranjería</option>
                    <option>P - Pasaporte</option>
                  </select>
                  <label className='fidelabel text-md'>
                    Tipo de Identificación
                  </label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='text'
                    name='no-identificacion'
                    id='no-identificacion'
                    className='fideinput peer'
                    placeholder='No. de Identificación'
                  />
                  <label className='fidelabel text-md'>
                    No. de Identificación
                  </label>
                </div>

                <div className='relative z-0 w-full mb-5 group'>
                  <select
                    id='genero'
                    className='fideinput peer'
                  >
                    <option>Seleccione...</option>
                    <option>Masculino</option>
                    <option>Femenino</option>
                  </select>
                  <label className='fidelabel text-md'>Género</label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                    <svg
                      className='w-4 h-4 text-gray-500 dark:text-gray-400'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z'></path>
                    </svg>
                  </div>
                  <input
                    datepicker-orientation='bottom right'
                    type='text'
                    className='fideinput ps-10 p-2.5 datepicker-input'
                    placeholder='Seleccione fecha'
                  />
                  <label className='fidelabel text-md'>
                    Fecha de Nacimiento
                  </label>
                </div>

                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='text'
                    name='floating_first_name'
                    id='ciudad-pais'
                    className='fideinput peer'
                    placeholder='Ciudad / Pais de residencia'
                  />
                  <label className='fidelabel text-md'>
                    Ciudad / Pais de residencia
                  </label>
                </div>

                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='text'
                    name='floating_first_name'
                    id='direccion'
                    className='fideinput peer'
                    placeholder='Dirección Residencia'
                  />
                  <label className='fidelabel text-md'>
                    Dirección Residencia
                  </label>
                </div>

                <div className='flex items-center'>
                  <button
                    id='dropdown-phone-button'
                    data-dropdown-toggle='dropdown-phone'
                    className='flex-shrink-0 z-10 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-900 bg-colorfondo border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600'
                    type='button'
                  >
                    <svg
                      fill='none'
                      aria-hidden='true'
                      className='h-4 w-4 me-2'
                      viewBox='0 0 20 15'
                    >
                      <rect
                        width='19.6'
                        height='14'
                        y='.5'
                        fill='#fff'
                        rx='2'
                      ></rect>
                      <mask
                        id='a'
                        width='20'
                        height='15'
                        x='0'
                        y='0'
                        maskUnits='userSpaceOnUse'
                      >
                        <rect
                          width='19.6'
                          height='14'
                          y='.5'
                          fill='#fff'
                          rx='2'
                        ></rect>
                      </mask>
                      <g mask='url(#a)'>
                        <path
                          fill='#D02F44'
                          fillRule='evenodd'
                          d='M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z'
                          clipRule='evenodd'
                        ></path>
                        <path
                          fill='#46467F'
                          d='M0 .5h8.4v6.533H0z'
                        ></path>
                        <g filter='url(#filter0_d_343_121520)'>
                          <path
                            fill='url(#paint0_linear_343_121520)'
                            fillRule='evenodd'
                            d='M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z'
                            clipRule='evenodd'
                          ></path>
                        </g>
                      </g>
                      <defs>
                        <linearGradient
                          id='paint0_linear_343_121520'
                          x1='.933'
                          x2='.933'
                          y1='1.433'
                          y2='6.1'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#fff'></stop>
                          <stop
                            offset='1'
                            stopColor='#F0F0F0'
                          ></stop>
                        </linearGradient>
                        <filter
                          id='filter0_d_343_121520'
                          width='6.533'
                          height='5.667'
                          x='.933'
                          y='1.433'
                          color-interpolation-filters='sRGB'
                          filterUnits='userSpaceOnUse'
                        >
                          <feFlood
                            flood-opacity='0'
                            result='BackgroundImageFix'
                          ></feFlood>
                          <feColorMatrix
                            in='SourceAlpha'
                            result='hardAlpha'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                          ></feColorMatrix>
                          <feOffset dy='1'></feOffset>
                          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'></feColorMatrix>
                          <feBlend
                            in2='BackgroundImageFix'
                            result='effect1_dropShadow_343_121520'
                          ></feBlend>
                          <feBlend
                            in='SourceGraphic'
                            in2='effect1_dropShadow_343_121520'
                            result='shape'
                          ></feBlend>
                        </filter>
                      </defs>
                    </svg>
                    +1
                    <svg
                      className='w-2.5 h-2.5 ms-2.5'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 10 6'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='m1 1 4 4 4-4'
                      ></path>
                    </svg>
                  </button>
                  <div
                    id='dropdown-phone'
                    className='z-10 hidden bg-colorfondo divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-colorfondodark'
                    style={{
                      position: 'absolute',
                      inset: 'auto auto 0px 0px',
                      margin: '0px',
                      transform: 'translate3d(560.8px, 364.8px, 0px)',
                    }}
                    data-popper-placement='top'
                    data-popper-reference-hidden=''
                    data-popper-escaped=''
                  >
                    <ul
                      className='py-2 text-sm text-gray-700 dark:text-gray-200'
                      aria-labelledby='dropdown-phone-button'
                    >
                      <li>
                        <button
                          type='button'
                          className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          <span className='inline-flex items-center'>
                            <svg
                              fill='none'
                              aria-hidden='true'
                              className='h-4 w-4 me-2'
                              viewBox='0 0 20 15'
                            >
                              <rect
                                width='19.6'
                                height='14'
                                y='.5'
                                fill='#fff'
                                rx='2'
                              ></rect>
                              <mask
                                id='a'
                                width='20'
                                height='15'
                                x='0'
                                y='0'
                                maskUnits='userSpaceOnUse'
                              >
                                <rect
                                  width='19.6'
                                  height='14'
                                  y='.5'
                                  fill='#fff'
                                  rx='2'
                                ></rect>
                              </mask>
                              <g mask='url(#a)'>
                                <path
                                  fill='#D02F44'
                                  fillRule='evenodd'
                                  d='M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z'
                                  clipRule='evenodd'
                                ></path>
                                <path
                                  fill='#46467F'
                                  d='M0 .5h8.4v6.533H0z'
                                ></path>
                                <g filter='url(#filter0_d_343_121520)'>
                                  <path
                                    fill='url(#paint0_linear_343_121520)'
                                    fillRule='evenodd'
                                    d='M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z'
                                    clipRule='evenodd'
                                  ></path>
                                </g>
                              </g>
                              <defs>
                                <linearGradient
                                  id='paint0_linear_343_121520'
                                  x1='.933'
                                  x2='.933'
                                  y1='1.433'
                                  y2='6.1'
                                  gradientUnits='userSpaceOnUse'
                                >
                                  <stop stopColor='#fff'></stop>
                                  <stop
                                    offset='1'
                                    stopColor='#F0F0F0'
                                  ></stop>
                                </linearGradient>
                                <filter
                                  id='filter0_d_343_121520'
                                  width='6.533'
                                  height='5.667'
                                  x='.933'
                                  y='1.433'
                                  color-interpolation-filters='sRGB'
                                  filterUnits='userSpaceOnUse'
                                >
                                  <feFlood
                                    flood-opacity='0'
                                    result='BackgroundImageFix'
                                  ></feFlood>
                                  <feColorMatrix
                                    in='SourceAlpha'
                                    result='hardAlpha'
                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                  ></feColorMatrix>
                                  <feOffset dy='1'></feOffset>
                                  <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'></feColorMatrix>
                                  <feBlend
                                    in2='BackgroundImageFix'
                                    result='effect1_dropShadow_343_121520'
                                  ></feBlend>
                                  <feBlend
                                    in='SourceGraphic'
                                    in2='effect1_dropShadow_343_121520'
                                    result='shape'
                                  ></feBlend>
                                </filter>
                              </defs>
                            </svg>
                            United States (+1)
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          <span className='inline-flex items-center'>
                            <svg
                              className='h-4 w-4 me-2'
                              fill='none'
                              viewBox='0 0 20 15'
                            >
                              <rect
                                width='19.6'
                                height='14'
                                y='.5'
                                fill='#fff'
                                rx='2'
                              ></rect>
                              <mask
                                id='a'
                                width='20'
                                height='15'
                                x='0'
                                y='0'
                                maskUnits='userSpaceOnUse'
                              >
                                <rect
                                  width='19.6'
                                  height='14'
                                  y='.5'
                                  fill='#fff'
                                  rx='2'
                                ></rect>
                              </mask>
                              <g mask='url(#a)'>
                                <path
                                  fill='#0A17A7'
                                  d='M0 .5h19.6v14H0z'
                                ></path>
                                <path
                                  fill='#fff'
                                  fillRule='evenodd'
                                  d='M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z'
                                  clipRule='evenodd'
                                ></path>
                                <path
                                  stroke='#DB1F35'
                                  stroke-linecap='round'
                                  stroke-width='.667'
                                  d='M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093'
                                ></path>
                                <path
                                  fill='#E6273E'
                                  fillRule='evenodd'
                                  d='M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z'
                                  clipRule='evenodd'
                                ></path>
                              </g>
                            </svg>
                            United Kingdom (+44)
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          <span className='inline-flex items-center'>
                            <svg
                              className='h-4 w-4 me-2'
                              fill='none'
                              viewBox='0 0 20 15'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <rect
                                width='19.6'
                                height='14'
                                y='.5'
                                fill='#fff'
                                rx='2'
                              ></rect>
                              <mask
                                id='a'
                                width='20'
                                height='15'
                                x='0'
                                y='0'
                                maskUnits='userSpaceOnUse'
                              >
                                <rect
                                  width='19.6'
                                  height='14'
                                  y='.5'
                                  fill='#fff'
                                  rx='2'
                                ></rect>
                              </mask>
                              <g mask='url(#a)'>
                                <path
                                  fill='#0A17A7'
                                  d='M0 .5h19.6v14H0z'
                                ></path>
                                <path
                                  fill='#fff'
                                  stroke='#fff'
                                  stroke-width='.667'
                                  d='M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z'
                                ></path>
                                <path
                                  fill='url(#paint0_linear_374_135177)'
                                  fillRule='evenodd'
                                  d='M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z'
                                  clipRule='evenodd'
                                ></path>
                                <path
                                  fill='url(#paint1_linear_374_135177)'
                                  fillRule='evenodd'
                                  d='M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z'
                                  clipRule='evenodd'
                                ></path>
                                <path
                                  fill='#fff'
                                  fillRule='evenodd'
                                  d='M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z'
                                  clipRule='evenodd'
                                ></path>
                              </g>
                              <defs>
                                <linearGradient
                                  id='paint0_linear_374_135177'
                                  x1='0'
                                  x2='0'
                                  y1='.5'
                                  y2='7.5'
                                  gradientUnits='userSpaceOnUse'
                                >
                                  <stop stopColor='#fff'></stop>
                                  <stop
                                    offset='1'
                                    stopColor='#F0F0F0'
                                  ></stop>
                                </linearGradient>
                                <linearGradient
                                  id='paint1_linear_374_135177'
                                  x1='0'
                                  x2='0'
                                  y1='.5'
                                  y2='7.033'
                                  gradientUnits='userSpaceOnUse'
                                >
                                  <stop stopColor='#FF2E3B'></stop>
                                  <stop
                                    offset='1'
                                    stopColor='#FC0D1B'
                                  ></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                            Australia (+61)
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          <span className='inline-flex items-center'>
                            <svg
                              className='w-4 h-4 me-2'
                              fill='none'
                              viewBox='0 0 20 15'
                            >
                              <rect
                                width='19.6'
                                height='14'
                                y='.5'
                                fill='#fff'
                                rx='2'
                              ></rect>
                              <mask
                                id='a'
                                width='20'
                                height='15'
                                x='0'
                                y='0'
                                maskUnits='userSpaceOnUse'
                              >
                                <rect
                                  width='19.6'
                                  height='14'
                                  y='.5'
                                  fill='#fff'
                                  rx='2'
                                ></rect>
                              </mask>
                              <g mask='url(#a)'>
                                <path
                                  fill='#262626'
                                  fillRule='evenodd'
                                  d='M0 5.167h19.6V.5H0v4.667z'
                                  clipRule='evenodd'
                                ></path>
                                <g filter='url(#filter0_d)'>
                                  <path
                                    fill='#F01515'
                                    fillRule='evenodd'
                                    d='M0 9.833h19.6V5.167H0v4.666z'
                                    clipRule='evenodd'
                                  ></path>
                                </g>
                                <g filter='url(#filter1_d)'>
                                  <path
                                    fill='#FFD521'
                                    fillRule='evenodd'
                                    d='M0 14.5h19.6V9.833H0V14.5z'
                                    clipRule='evenodd'
                                  ></path>
                                </g>
                              </g>
                              <defs>
                                <filter
                                  id='filter0_d'
                                  width='19.6'
                                  height='4.667'
                                  x='0'
                                  y='5.167'
                                  colorInterpolationFilters='sRGB'
                                  filterUnits='userSpaceOnUse'
                                >
                                  <feFlood
                                    floodOpacity='0'
                                    result='BackgroundImageFix'
                                  ></feFlood>
                                  <feColorMatrix
                                    in='SourceAlpha'
                                    result='hardAlpha'
                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'></feColorMatrix>
                                  <feBlend
                                    in2='BackgroundImageFix'
                                    result='effect1_dropShadow'
                                  ></feBlend>
                                  <feBlend
                                    in='SourceGraphic'
                                    in2='effect1_dropShadow'
                                    result='shape'
                                  ></feBlend>
                                </filter>
                                <filter
                                  id='filter1_d'
                                  width='19.6'
                                  height='4.667'
                                  x='0'
                                  y='9.833'
                                  colorInterpolationFilters='sRGB'
                                  filterUnits='userSpaceOnUse'
                                >
                                  <feFlood
                                    floodOpacity='0'
                                    result='BackgroundImageFix'
                                  ></feFlood>
                                  <feColorMatrix
                                    in='SourceAlpha'
                                    result='hardAlpha'
                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'></feColorMatrix>
                                  <feBlend
                                    in2='BackgroundImageFix'
                                    result='effect1_dropShadow'
                                  ></feBlend>
                                  <feBlend
                                    in='SourceGraphic'
                                    in2='effect1_dropShadow'
                                    result='shape'
                                  ></feBlend>
                                </filter>
                              </defs>
                            </svg>
                            Germany (+49)
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          <span className='inline-flex items-center'>
                            <svg
                              className='w-4 h-4 me-2'
                              fill='none'
                              viewBox='0 0 20 15'
                            >
                              <rect
                                width='19.1'
                                height='13.5'
                                x='.25'
                                y='.75'
                                fill='#fff'
                                stroke='#F5F5F5'
                                stroke-width='.5'
                                rx='1.75'
                              ></rect>
                              <mask
                                id='a'
                                width='20'
                                height='15'
                                x='0'
                                y='0'
                                maskUnits='userSpaceOnUse'
                              >
                                <rect
                                  width='19.1'
                                  height='13.5'
                                  x='.25'
                                  y='.75'
                                  fill='#fff'
                                  stroke='#fff'
                                  stroke-width='.5'
                                  rx='1.75'
                                ></rect>
                              </mask>
                              <g mask='url(#a)'>
                                <path
                                  fill='#F44653'
                                  d='M13.067.5H19.6v14h-6.533z'
                                ></path>
                                <path
                                  fill='#1035BB'
                                  fillRule='evenodd'
                                  d='M0 14.5h6.533V.5H0v14z'
                                  clipRule='evenodd'
                                ></path>
                              </g>
                            </svg>
                            France (+33)
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          <span className='inline-flex items-center'>
                            <svg
                              className='w-4 h-4 me-2'
                              fill='none'
                              viewBox='0 0 20 15'
                            >
                              <rect
                                width='19.6'
                                height='14'
                                y='.5'
                                fill='#fff'
                                rx='2'
                              ></rect>
                              <mask
                                id='a'
                                width='20'
                                height='15'
                                x='0'
                                y='0'
                                maskUnits='userSpaceOnUse'
                              >
                                <rect
                                  width='19.6'
                                  height='14'
                                  y='.5'
                                  fill='#fff'
                                  rx='2'
                                ></rect>
                              </mask>
                              <g mask='url(#a)'>
                                <path
                                  fill='#262626'
                                  fillRule='evenodd'
                                  d='M0 5.167h19.6V.5H0v4.667z'
                                  clipRule='evenodd'
                                ></path>
                                <g filter='url(#filter0_d_374_135180)'>
                                  <path
                                    fill='#F01515'
                                    fillRule='evenodd'
                                    d='M0 9.833h19.6V5.167H0v4.666z'
                                    clipRule='evenodd'
                                  ></path>
                                </g>
                                <g filter='url(#filter1_d_374_135180)'>
                                  <path
                                    fill='#FFD521'
                                    fillRule='evenodd'
                                    d='M0 14.5h19.6V9.833H0V14.5z'
                                    clipRule='evenodd'
                                  ></path>
                                </g>
                              </g>
                              <defs>
                                <filter
                                  id='filter0_d_374_135180'
                                  width='19.6'
                                  height='4.667'
                                  x='0'
                                  y='5.167'
                                  color-interpolation-filters='sRGB'
                                  filterUnits='userSpaceOnUse'
                                >
                                  <feFlood
                                    flood-opacity='0'
                                    result='BackgroundImageFix'
                                  ></feFlood>
                                  <feColorMatrix
                                    in='SourceAlpha'
                                    result='hardAlpha'
                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'></feColorMatrix>
                                  <feBlend
                                    in2='BackgroundImageFix'
                                    result='effect1_dropShadow_374_135180'
                                  ></feBlend>
                                  <feBlend
                                    in='SourceGraphic'
                                    in2='effect1_dropShadow_374_135180'
                                    result='shape'
                                  ></feBlend>
                                </filter>
                                <filter
                                  id='filter1_d_374_135180'
                                  width='19.6'
                                  height='4.667'
                                  x='0'
                                  y='9.833'
                                  color-interpolation-filters='sRGB'
                                  filterUnits='userSpaceOnUse'
                                >
                                  <feFlood
                                    flood-opacity='0'
                                    result='BackgroundImageFix'
                                  ></feFlood>
                                  <feColorMatrix
                                    in='SourceAlpha'
                                    result='hardAlpha'
                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'></feColorMatrix>
                                  <feBlend
                                    in2='BackgroundImageFix'
                                    result='effect1_dropShadow_374_135180'
                                  ></feBlend>
                                  <feBlend
                                    in='SourceGraphic'
                                    in2='effect1_dropShadow_374_135180'
                                    result='shape'
                                  ></feBlend>
                                </filter>
                              </defs>
                            </svg>
                            Germany (+49)
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <label className='fidelabel text-md'>Teléfono</label>
                  <div className='relative w-full'>
                    <input
                      type='text'
                      id='phone-input'
                      className='fideinput p-2.5 w-full z-20 rounded-e-lg '
                      pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                      placeholder='123-456-7890'
                    />
                  </div>
                </div>

                <div className='flex items-center'>
                  <button
                    id='dropdown-phone-button'
                    data-dropdown-toggle='dropdown-phone-2'
                    className='flex-shrink-0 z-10 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-900 bg-colorfondo border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600'
                    type='button'
                  >
                    <svg
                      fill='none'
                      aria-hidden='true'
                      className='h-4 w-4 me-2'
                      viewBox='0 0 20 15'
                    >
                      <rect
                        width='19.6'
                        height='14'
                        y='.5'
                        fill='#fff'
                        rx='2'
                      ></rect>
                      <mask
                        id='a'
                        width='20'
                        height='15'
                        x='0'
                        y='0'
                        maskUnits='userSpaceOnUse'
                      >
                        <rect
                          width='19.6'
                          height='14'
                          y='.5'
                          fill='#fff'
                          rx='2'
                        ></rect>
                      </mask>
                      <g mask='url(#a)'>
                        <path
                          fill='#D02F44'
                          fillRule='evenodd'
                          d='M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z'
                          clipRule='evenodd'
                        ></path>
                        <path
                          fill='#46467F'
                          d='M0 .5h8.4v6.533H0z'
                        ></path>
                        <g filter='url(#filter0_d_343_121520)'>
                          <path
                            fill='url(#paint0_linear_343_121520)'
                            fillRule='evenodd'
                            d='M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z'
                            clipRule='evenodd'
                          ></path>
                        </g>
                      </g>
                      <defs>
                        <linearGradient
                          id='paint0_linear_343_121520'
                          x1='.933'
                          x2='.933'
                          y1='1.433'
                          y2='6.1'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stopColor='#fff'></stop>
                          <stop
                            offset='1'
                            stopColor='#F0F0F0'
                          ></stop>
                        </linearGradient>
                        <filter
                          id='filter0_d_343_121520'
                          width='6.533'
                          height='5.667'
                          x='.933'
                          y='1.433'
                          color-interpolation-filters='sRGB'
                          filterUnits='userSpaceOnUse'
                        >
                          <feFlood
                            flood-opacity='0'
                            result='BackgroundImageFix'
                          ></feFlood>
                          <feColorMatrix
                            in='SourceAlpha'
                            result='hardAlpha'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                          ></feColorMatrix>
                          <feOffset dy='1'></feOffset>
                          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'></feColorMatrix>
                          <feBlend
                            in2='BackgroundImageFix'
                            result='effect1_dropShadow_343_121520'
                          ></feBlend>
                          <feBlend
                            in='SourceGraphic'
                            in2='effect1_dropShadow_343_121520'
                            result='shape'
                          ></feBlend>
                        </filter>
                      </defs>
                    </svg>
                    +1
                    <svg
                      className='w-2.5 h-2.5 ms-2.5'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 10 6'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='m1 1 4 4 4-4'
                      ></path>
                    </svg>
                  </button>
                  <div
                    id='dropdown-phone-2'
                    className='z-10 hidden bg-colorfondo divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-colorfondodark'
                    style={{
                      position: 'absolute',
                      inset: 'auto auto 0px 0px',
                      margin: '0px',
                      transform: 'translate3d(812.8px, 364.8px, 0px)',
                    }}
                    data-popper-placement='top'
                    data-popper-reference-hidden=''
                    data-popper-escaped=''
                  >
                    <ul
                      className='py-2 text-sm text-gray-700 dark:text-gray-200'
                      aria-labelledby='dropdown-phone-button'
                    >
                      <li>
                        <button
                          type='button'
                          className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          <span className='inline-flex items-center'>
                            <svg
                              fill='none'
                              aria-hidden='true'
                              className='h-4 w-4 me-2'
                              viewBox='0 0 20 15'
                            >
                              <rect
                                width='19.6'
                                height='14'
                                y='.5'
                                fill='#fff'
                                rx='2'
                              ></rect>
                              <mask
                                id='a'
                                width='20'
                                height='15'
                                x='0'
                                y='0'
                                maskUnits='userSpaceOnUse'
                              >
                                <rect
                                  width='19.6'
                                  height='14'
                                  y='.5'
                                  fill='#fff'
                                  rx='2'
                                ></rect>
                              </mask>
                              <g mask='url(#a)'>
                                <path
                                  fill='#D02F44'
                                  fillRule='evenodd'
                                  d='M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z'
                                  clipRule='evenodd'
                                ></path>
                                <path
                                  fill='#46467F'
                                  d='M0 .5h8.4v6.533H0z'
                                ></path>
                                <g filter='url(#filter0_d_343_121520)'>
                                  <path
                                    fill='url(#paint0_linear_343_121520)'
                                    fillRule='evenodd'
                                    d='M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z'
                                    clipRule='evenodd'
                                  ></path>
                                </g>
                              </g>
                              <defs>
                                <linearGradient
                                  id='paint0_linear_343_121520'
                                  x1='.933'
                                  x2='.933'
                                  y1='1.433'
                                  y2='6.1'
                                  gradientUnits='userSpaceOnUse'
                                >
                                  <stop stopColor='#fff'></stop>
                                  <stop
                                    offset='1'
                                    stopColor='#F0F0F0'
                                  ></stop>
                                </linearGradient>
                                <filter
                                  id='filter0_d_343_121520'
                                  width='6.533'
                                  height='5.667'
                                  x='.933'
                                  y='1.433'
                                  color-interpolation-filters='sRGB'
                                  filterUnits='userSpaceOnUse'
                                >
                                  <feFlood
                                    flood-opacity='0'
                                    result='BackgroundImageFix'
                                  ></feFlood>
                                  <feColorMatrix
                                    in='SourceAlpha'
                                    result='hardAlpha'
                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                  ></feColorMatrix>
                                  <feOffset dy='1'></feOffset>
                                  <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'></feColorMatrix>
                                  <feBlend
                                    in2='BackgroundImageFix'
                                    result='effect1_dropShadow_343_121520'
                                  ></feBlend>
                                  <feBlend
                                    in='SourceGraphic'
                                    in2='effect1_dropShadow_343_121520'
                                    result='shape'
                                  ></feBlend>
                                </filter>
                              </defs>
                            </svg>
                            United States (+1)
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          <span className='inline-flex items-center'>
                            <svg
                              className='h-4 w-4 me-2'
                              fill='none'
                              viewBox='0 0 20 15'
                            >
                              <rect
                                width='19.6'
                                height='14'
                                y='.5'
                                fill='#fff'
                                rx='2'
                              ></rect>
                              <mask
                                id='a'
                                width='20'
                                height='15'
                                x='0'
                                y='0'
                                maskUnits='userSpaceOnUse'
                              >
                                <rect
                                  width='19.6'
                                  height='14'
                                  y='.5'
                                  fill='#fff'
                                  rx='2'
                                ></rect>
                              </mask>
                              <g mask='url(#a)'>
                                <path
                                  fill='#0A17A7'
                                  d='M0 .5h19.6v14H0z'
                                ></path>
                                <path
                                  fill='#fff'
                                  fillRule='evenodd'
                                  d='M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z'
                                  clipRule='evenodd'
                                ></path>
                                <path
                                  stroke='#DB1F35'
                                  stroke-linecap='round'
                                  stroke-width='.667'
                                  d='M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093'
                                ></path>
                                <path
                                  fill='#E6273E'
                                  fillRule='evenodd'
                                  d='M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z'
                                  clipRule='evenodd'
                                ></path>
                              </g>
                            </svg>
                            United Kingdom (+44)
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          <span className='inline-flex items-center'>
                            <svg
                              className='h-4 w-4 me-2'
                              fill='none'
                              viewBox='0 0 20 15'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <rect
                                width='19.6'
                                height='14'
                                y='.5'
                                fill='#fff'
                                rx='2'
                              ></rect>
                              <mask
                                id='a'
                                width='20'
                                height='15'
                                x='0'
                                y='0'
                                maskUnits='userSpaceOnUse'
                              >
                                <rect
                                  width='19.6'
                                  height='14'
                                  y='.5'
                                  fill='#fff'
                                  rx='2'
                                ></rect>
                              </mask>
                              <g mask='url(#a)'>
                                <path
                                  fill='#0A17A7'
                                  d='M0 .5h19.6v14H0z'
                                ></path>
                                <path
                                  fill='#fff'
                                  stroke='#fff'
                                  stroke-width='.667'
                                  d='M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z'
                                ></path>
                                <path
                                  fill='url(#paint0_linear_374_135177)'
                                  fillRule='evenodd'
                                  d='M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z'
                                  clipRule='evenodd'
                                ></path>
                                <path
                                  fill='url(#paint1_linear_374_135177)'
                                  fillRule='evenodd'
                                  d='M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z'
                                  clipRule='evenodd'
                                ></path>
                                <path
                                  fill='#fff'
                                  fillRule='evenodd'
                                  d='M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z'
                                  clipRule='evenodd'
                                ></path>
                              </g>
                              <defs>
                                <linearGradient
                                  id='paint0_linear_374_135177'
                                  x1='0'
                                  x2='0'
                                  y1='.5'
                                  y2='7.5'
                                  gradientUnits='userSpaceOnUse'
                                >
                                  <stop stopColor='#fff'></stop>
                                  <stop
                                    offset='1'
                                    stopColor='#F0F0F0'
                                  ></stop>
                                </linearGradient>
                                <linearGradient
                                  id='paint1_linear_374_135177'
                                  x1='0'
                                  x2='0'
                                  y1='.5'
                                  y2='7.033'
                                  gradientUnits='userSpaceOnUse'
                                >
                                  <stop stopColor='#FF2E3B'></stop>
                                  <stop
                                    offset='1'
                                    stopColor='#FC0D1B'
                                  ></stop>
                                </linearGradient>
                              </defs>
                            </svg>
                            Australia (+61)
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          <span className='inline-flex items-center'>
                            <svg
                              className='w-4 h-4 me-2'
                              fill='none'
                              viewBox='0 0 20 15'
                            >
                              <rect
                                width='19.6'
                                height='14'
                                y='.5'
                                fill='#fff'
                                rx='2'
                              ></rect>
                              <mask
                                id='a'
                                width='20'
                                height='15'
                                x='0'
                                y='0'
                                maskUnits='userSpaceOnUse'
                              >
                                <rect
                                  width='19.6'
                                  height='14'
                                  y='.5'
                                  fill='#fff'
                                  rx='2'
                                ></rect>
                              </mask>
                              <g mask='url(#a)'>
                                <path
                                  fill='#262626'
                                  fillRule='evenodd'
                                  d='M0 5.167h19.6V.5H0v4.667z'
                                  clipRule='evenodd'
                                ></path>
                                <g filter='url(#filter0_d_374_135180)'>
                                  <path
                                    fill='#F01515'
                                    fillRule='evenodd'
                                    d='M0 9.833h19.6V5.167H0v4.666z'
                                    clipRule='evenodd'
                                  ></path>
                                </g>
                                <g filter='url(#filter1_d_374_135180)'>
                                  <path
                                    fill='#FFD521'
                                    fillRule='evenodd'
                                    d='M0 14.5h19.6V9.833H0V14.5z'
                                    clipRule='evenodd'
                                  ></path>
                                </g>
                              </g>
                              <defs>
                                <filter
                                  id='filter0_d_374_135180'
                                  width='19.6'
                                  height='4.667'
                                  x='0'
                                  y='5.167'
                                  color-interpolation-filters='sRGB'
                                  filterUnits='userSpaceOnUse'
                                >
                                  <feFlood
                                    flood-opacity='0'
                                    result='BackgroundImageFix'
                                  ></feFlood>
                                  <feColorMatrix
                                    in='SourceAlpha'
                                    result='hardAlpha'
                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'></feColorMatrix>
                                  <feBlend
                                    in2='BackgroundImageFix'
                                    result='effect1_dropShadow_374_135180'
                                  ></feBlend>
                                  <feBlend
                                    in='SourceGraphic'
                                    in2='effect1_dropShadow_374_135180'
                                    result='shape'
                                  ></feBlend>
                                </filter>
                                <filter
                                  id='filter1_d_374_135180'
                                  width='19.6'
                                  height='4.667'
                                  x='0'
                                  y='9.833'
                                  color-interpolation-filters='sRGB'
                                  filterUnits='userSpaceOnUse'
                                >
                                  <feFlood
                                    flood-opacity='0'
                                    result='BackgroundImageFix'
                                  ></feFlood>
                                  <feColorMatrix
                                    in='SourceAlpha'
                                    result='hardAlpha'
                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'></feColorMatrix>
                                  <feBlend
                                    in2='BackgroundImageFix'
                                    result='effect1_dropShadow_374_135180'
                                  ></feBlend>
                                  <feBlend
                                    in='SourceGraphic'
                                    in2='effect1_dropShadow_374_135180'
                                    result='shape'
                                  ></feBlend>
                                </filter>
                              </defs>
                            </svg>
                            Germany (+49)
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          <span className='inline-flex items-center'>
                            <svg
                              className='w-4 h-4 me-2'
                              fill='none'
                              viewBox='0 0 20 15'
                            >
                              <rect
                                width='19.1'
                                height='13.5'
                                x='.25'
                                y='.75'
                                fill='#fff'
                                stroke='#F5F5F5'
                                stroke-width='.5'
                                rx='1.75'
                              ></rect>
                              <mask
                                id='a'
                                width='20'
                                height='15'
                                x='0'
                                y='0'
                                maskUnits='userSpaceOnUse'
                              >
                                <rect
                                  width='19.1'
                                  height='13.5'
                                  x='.25'
                                  y='.75'
                                  fill='#fff'
                                  stroke='#fff'
                                  stroke-width='.5'
                                  rx='1.75'
                                ></rect>
                              </mask>
                              <g mask='url(#a)'>
                                <path
                                  fill='#F44653'
                                  d='M13.067.5H19.6v14h-6.533z'
                                ></path>
                                <path
                                  fill='#1035BB'
                                  fillRule='evenodd'
                                  d='M0 14.5h6.533V.5H0v14z'
                                  clipRule='evenodd'
                                ></path>
                              </g>
                            </svg>
                            France (+33)
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          type='button'
                          className='inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                          role='menuitem'
                        >
                          <span className='inline-flex items-center'>
                            <svg
                              className='w-4 h-4 me-2'
                              fill='none'
                              viewBox='0 0 20 15'
                            >
                              <rect
                                width='19.6'
                                height='14'
                                y='.5'
                                fill='#fff'
                                rx='2'
                              ></rect>
                              <mask
                                id='a'
                                width='20'
                                height='15'
                                x='0'
                                y='0'
                                maskUnits='userSpaceOnUse'
                              >
                                <rect
                                  width='19.6'
                                  height='14'
                                  y='.5'
                                  fill='#fff'
                                  rx='2'
                                ></rect>
                              </mask>
                              <g mask='url(#a)'>
                                <path
                                  fill='#262626'
                                  fillRule='evenodd'
                                  d='M0 5.167h19.6V.5H0v4.667z'
                                  clipRule='evenodd'
                                ></path>
                                <g filter='url(#filter0_d_374_135180)'>
                                  <path
                                    fill='#F01515'
                                    fillRule='evenodd'
                                    d='M0 9.833h19.6V5.167H0v4.666z'
                                    clipRule='evenodd'
                                  ></path>
                                </g>
                                <g filter='url(#filter1_d_374_135180)'>
                                  <path
                                    fill='#FFD521'
                                    fillRule='evenodd'
                                    d='M0 14.5h19.6V9.833H0V14.5z'
                                    clipRule='evenodd'
                                  ></path>
                                </g>
                              </g>
                              <defs>
                                <filter
                                  id='filter0_d_374_135180'
                                  width='19.6'
                                  height='4.667'
                                  x='0'
                                  y='5.167'
                                  color-interpolation-filters='sRGB'
                                  filterUnits='userSpaceOnUse'
                                >
                                  <feFlood
                                    flood-opacity='0'
                                    result='BackgroundImageFix'
                                  ></feFlood>
                                  <feColorMatrix
                                    in='SourceAlpha'
                                    result='hardAlpha'
                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'></feColorMatrix>
                                  <feBlend
                                    in2='BackgroundImageFix'
                                    result='effect1_dropShadow_374_135180'
                                  ></feBlend>
                                  <feBlend
                                    in='SourceGraphic'
                                    in2='effect1_dropShadow_374_135180'
                                    result='shape'
                                  ></feBlend>
                                </filter>
                                <filter
                                  id='filter1_d_374_135180'
                                  width='19.6'
                                  height='4.667'
                                  x='0'
                                  y='9.833'
                                  color-interpolation-filters='sRGB'
                                  filterUnits='userSpaceOnUse'
                                >
                                  <feFlood
                                    flood-opacity='0'
                                    result='BackgroundImageFix'
                                  ></feFlood>
                                  <feColorMatrix
                                    in='SourceAlpha'
                                    result='hardAlpha'
                                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                  ></feColorMatrix>
                                  <feOffset></feOffset>
                                  <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'></feColorMatrix>
                                  <feBlend
                                    in2='BackgroundImageFix'
                                    result='effect1_dropShadow_374_135180'
                                  ></feBlend>
                                  <feBlend
                                    in='SourceGraphic'
                                    in2='effect1_dropShadow_374_135180'
                                    result='shape'
                                  ></feBlend>
                                </filter>
                              </defs>
                            </svg>
                            Germany (+49)
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <label className='fidelabel text-md'>Teléfono</label>
                  <div className='relative w-full'>
                    <input
                      type='text'
                      id='phone-input'
                      className='fideinput p-2.5 w-full z-20 rounded-e-lg '
                      pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                      placeholder='123-456-7890'
                    />
                  </div>
                </div>

                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='email'
                    name='floating_email'
                    id='floating_email'
                    className='fideinput peer'
                    placeholder='Email'
                  />
                  <label className='fidelabel text-md'>
                    Correo electrónico
                  </label>
                </div>

                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='email'
                    name='floating_email_2'
                    id='floating_email_2'
                    className='fideinput peer'
                    placeholder='Email alternativo'
                  />
                  <label className='fidelabel text-md'>
                    Correo alternativo
                  </label>
                </div>

                <div className='relative z-0 w-full mb-5 group'>
                  <select
                    id='estado-civil'
                    className='fideinput peer'
                  >
                    <option>Seleccione...</option>
                    <option>Soltero</option>
                    <option>Casado</option>
                    <option>Viudo</option>
                    <option>Separado</option>
                    <option>Unión libre</option>
                  </select>
                  <label className='fidelabel text-md'>Estado civil</label>
                </div>
              </div>

              <div className='relative z-0 w-full group'>
                <p className='text-colordos dark:text-colordosdark text-center font-semibold'>
                  Información Profesional
                </p>
              </div>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='text'
                    name='floating_first_name'
                    id='nivel-academico'
                    className='fideinput peer'
                    placeholder='Nivel Académico (opcional)'
                  />
                  <label className='fidelabel text-md'>Nivel Académico</label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='text'
                    name='floating_first_name'
                    id='profesion'
                    className='fideinput peer'
                    placeholder='Profesión (opcional)'
                  />
                  <label className='fidelabel text-md'>Profesión</label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='text'
                    name='floating_first_name'
                    id='empresa-actual'
                    className='fideinput peer'
                    placeholder='Empresa Actual (opcional)'
                  />
                  <label className='fidelabel text-md'>Empresa Actual</label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='text'
                    name='floating_first_name'
                    id='cargo'
                    className='fideinput peer'
                    placeholder='Cargo (opcional)'
                  />
                  <label className='fidelabel text-md'>Cargo</label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='text'
                    name='floating_first_name'
                    id='direccion-empresa'
                    className='fideinput peer'
                    placeholder='Dirección de la empresa (opcional)'
                  />
                  <label className='fidelabel text-md'>
                    Dirección de la empresa
                  </label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='text'
                    name='floating_first_name'
                    id='telefono-empresa'
                    className='fideinput peer'
                    placeholder='Teléfono empresa (opcional)'
                  />
                  <label className='fidelabel text-md'>Teléfono empresa</label>
                </div>
              </div>
              <div className='relative z-0 w-full group'>
                <p className='text-colordos dark:text-colordosdark text-center font-semibold'>
                  ¿Cómo se enteró de MovichDreams?
                </p>
              </div>
              <div className='relative z-0 w-full mb-5 group'>
                <select
                  id='referido'
                  className='fideinput peer'
                >
                  <option value=''>Seleccionar...</option>
                  <option value='97'>CAMARGO</option>
                  <option value='57'>Movich Buró 26</option>
                  <option value='58'>Movich Buró 51 - Barranquilla</option>
                  <option value='62'>Movich Cartagena de Indias</option>
                  <option value='59'>Movich Casa del Alférez - Cali</option>
                  <option value='61'>Movich Pereira</option>
                  <option value='63'>Movich Las Lomas</option>
                  <option value='64'>InterContinental Medellín</option>
                  <option value='74'>Página Web de Hoteles Movich</option>
                  <option value='71'>Contact Center</option>
                  <option value='76'>Otro</option>
                  <option value='77'>Ninguno</option>
                  <option value='67'>Regional Ventas Antioquia</option>
                  <option value='68'>Regional Ventas Costa</option>
                  <option value='69'>Regional Ventas Eje Cafetero</option>
                  <option value='65'>Regional Ventas Bogotá</option>
                  <option value='66'>Regional Ventas Cali</option>
                  <option value='60'>
                    Tour &amp; Travel, ventas internacionales y Corporativo
                  </option>
                  <option value='78'>Colaborador Corp</option>
                </select>
                <label className='fidelabel text-md'>Nombre del referido</label>
              </div>

              <div className='relative z-0 w-full group'>
                <p className='text-colordos dark:text-colordosdark text-center font-semibold'>
                  Información de la cuenta
                </p>
              </div>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='password'
                    name='floating_password'
                    id='floating_password'
                    className='fideinput peer'
                    placeholder='Contraseña'
                  />
                  <label className='fidelabel text-md'>Contraseña</label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='password'
                    name='repeat_password'
                    id='floating_repeat_password'
                    className='fideinput peer'
                    placeholder='Confirmar contraseña'
                  />
                  <label className='fidelabel text-md'>
                    Confirmar contraseña
                  </label>
                </div>
              </div>

              <fieldset>
                <legend className='sr-only'>Checkbox variants</legend>

                <div className='flex items-center mb-4'>
                  <input
                    id='checkbox-1'
                    type='checkbox'
                    value=''
                    className='fidecheckbox'
                  />
                  <label className='ms-4 text-xs font-medium text-colortres dark:text-colortresdark'>
                    Acepto que para acumular y disfrutar del programa me hagan
                    llegar noticias/ofertas especiales y que mi información
                    personal pueda ser objeto de tratamiento, recolectada,
                    almacenada, usada, procesada y/o compartida de acuerdo a la
                    Ley Habeas Data vigente en el pais y su politica de
                    privacidad y proyeteccion de datos.
                  </label>
                </div>

                <div className='flex items-center mb-4'>
                  <input
                    id='checkbox-2'
                    type='checkbox'
                    value=''
                    className='fidecheckbox'
                  />
                  <label className='ms-4 text-xs font-medium text-colortres dark:text-colortresdark'>
                    He leído y acepto los
                    <a
                      href='https://movichdreams.com/terminos.php'
                      className='text-coloruno hover:underline dark:text-colorunodark'
                    >
                      Términos y Condiciones
                    </a>
                    del programa y la Política de Privacidad.
                  </label>
                </div>
                <div>NOSOY UN ROBOT RECAPTCHA</div>
              </fieldset>

              <button
                type='submit'
                className='boton-color w-full'
              >
                Crear una cuenta
              </button>
            </form>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
