import ColumnInfoRigth from '@/components/ColumnInfoRigth';
import ColumnInfoLeft from '@/components/ColumnInfoLeft';

export default function Page() {
  return (
    <div className='md:grid md:grid-cols-3 container mx-auto p-4 pb-8 md:p-0 md:pb-8'>
      {/* Columna derecha */}
      <ColumnInfoRigth />

      {/* Grilla izquierda */}
      <div className='col-span-2 md:order-1 pt-12 '>
        <ColumnInfoLeft />
      </div>
    </div>
  );
}
