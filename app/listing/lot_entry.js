import Link from 'next/link'
import { Droplets } from 'lucide-react';

export default function LotEntry(props) {
  return (
    <Link href='' className='flex gap-16 bg-white rounded-xl w-full h-24 p-4'>
      <div className='flex p-4 bg-slate-200 rounded-xl'>
        <div className='flex items-center'>
          <Droplets/>
          {props.fuel_type}
        </div>
      </div>
      <div className='flex p-4'>
        <div className='flex items-center'>
          Нефтебаза {props.oil_base}
        </div>
      </div>
      <div className='flex p-4'>
        <div className='flex items-center'>
          Доступно {Math.floor(props.available_volume)} тонн<br/>
          Истекает {props.expiration_date}
        </div>
      </div>
      <div className='flex p-4'>
        <div className='flex items-center'>
          Цена за тонну: TODO ₽
        </div>
      </div>
    </Link>
  );
}
