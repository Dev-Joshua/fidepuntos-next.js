import Image from 'next/image';
import ColumnInfoRigth from '@/components/ColumnInfoRigth';

export default function Page() {
  return (
    <div className='md:grid md:grid-cols-3 container mx-auto p-4 pb-8 md:p-0 md:pb-8'>
      <ColumnInfoRigth />
      <div className='col-span-2 md:order-1 md:space-x-4 mx-auto px-5'>
        <h1 className='text-center text-6xl font-bold text-yellow-600 pt-12'>
          Qué es?
        </h1>

        <div className='mt-6 mx-auto overflow-hidden rounded-xl bg-white/75 p-4 text-gray-600 shadow-lg backdrop-blur-lg'>
          <a
            className='flex justify-center'
            href='#'
          >
            <Image
              className='rounded-t-xl '
              src='/banner_que.jpg'
              alt=''
              width={920}
              height={100}
            />
          </a>
          <p className='my-0.5 text-gray-600 mt-8 text-lg'>
            Movich Dreams es el programa de lealtad de Hoteles Movich, diseñado
            para agradecer su lealtad y preferencia. Este programa permite
            acumular puntos por sus estadías para canjear por noches, y
            beneficios inmediatos en cualquiera de nuestros hoteles.
          </p>
          <br />
          <p className='my-0.5 text-gray-600  text-lg'>
            En Hoteles Movich queremos que nuestros huéspedes salgan de la
            rutina y disfruten de otra forma nuestros servicios. Acumule puntos
            y disfrute un fin de semana con una excelente compañía; o qué tal si
            redime una noche para que en su próximo viaje de trabajo su familia
            lo acompañe? Incluso, ahorre costos redimiendo sus puntos acumulados
            por noches de alojamiento, Almuerzos o Cenas para una o dos
            personas, un masaje relajante o tal vez bonos consumibles en
            nuestros restaurantes. Todo al alcance de un click.
          </p>
          <h3 className='mt-8 font-medium text-[1.875rem] leading-9 tracking-tight text-[#b47e0b]'>
            Bienvenido a Movich Dreams, la forma de conectar sueños!
          </h3>
        </div>
      </div>
    </div>
  );
}
