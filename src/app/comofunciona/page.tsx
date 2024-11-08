import Image from 'next/image';
import ColumnInfoRigth from '@/components/ColumnInfoRigth';

export default function Page() {
  return (
    <div className='md:grid md:grid-cols-3 container mx-auto p-4 pb-8 md:p-0 md:pb-8'>
      <ColumnInfoRigth />
      <div className='col-span-2 md:order-1 md:space-x-4 mx-auto px-5'>
        <h1 className='text-center text-6xl font-bold text-yellow-600 pt-12'>
          ¿Cómo funciona?
        </h1>

        <div className='mt-6 mx-auto overflow-hidden rounded-xl bg-white/75 p-4 text-gray-600 shadow-lg backdrop-blur-lg'>
          <a
            className='flex justify-center'
            href='#'
          >
            <Image
              className='rounded-t-xl '
              src='/banner_como.jpg'
              alt=''
              width={920}
              height={100}
            />
          </a>
          <p className='my-0.5 text-gray-600 mt-8 text-lg'>
            Cualquier persona natural mayor de edad puede pertenecer a Movich
            Dreams, el programa de fidelización de Hoteles Movich. Disfrutar de
            los beneficios de Movich Dreams es muy sencillo:
          </p>
          <br />
          <ol className='ps-5 mt-2 text-lg space-y-1 list-decimal list-inside'>
            <li>Regístrese.</li>
            <li>
              Al hacer su reserva hotelera mencione el número de documento de
              identidad con el cuál se inscribió.
            </li>
            <li>
              48 horas después de hacer Check-out los puntos serán acumulados en
              la cuenta del títular de la reserva.
            </li>
            <li>
              Acumule la cantidad de puntos requeridos, para redimir la noche
              que desea en alguno de nuestros hoteles.
            </li>
            <li>¡Disfrute su redención!</li>
          </ol>
          <br />
          <a
            className='flex justify-center'
            href='#'
          >
            <Image
              src='/acumu.jpg'
              alt=''
              width={869}
              height={331}
            />
          </a>
          <h3 className='text-center mt-8 font-medium text-[1.875rem] leading-9 tracking-tight text-[#b47e0b]'>
            ¡Así de fácil es pertenecer, acumular y usar sus puntos en Movich
            Dreams!
          </h3>
        </div>
      </div>
    </div>
  );
}
