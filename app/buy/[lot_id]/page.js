import { API_ADDR } from '@/app/config';
import getLotsData from '@/app/get_lots_data';
import { cookies } from 'next/headers';
import Nav from '@/app/nav';
import BuyForm from './form';
import LotEntry from '@/app/listing/lot_entry';

import { Droplets } from 'lucide-react';

export default async function BuyPage({params}) {
  const params_ready = (await params);
  const lotId = await params_ready.lot_id;
  const { lot_list, fuel_types, oil_bases } = await getLotsData();

  const currentLot = lot_list.find((lot) => lot.id === Number(lotId));

  if (!currentLot) {
    return <div>Лот не найден</div>;
  }

  async function onSubmit(formData) {
    'use server'

    const rawFormData = {
      lot: currentLot.id,
      volume: formData.get('volume'),
      delivery_type: formData.get('delivery_type'),
      price: '100.0',
      delivery_address: 'smhlol'
    }

    const cookieStore = await cookies();
    let token = cookieStore.get('access').value;

    const request = fetch(API_ADDR + '/trade/orders/', {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rawFormData)
    });

    const response = await request;
    console.log(await response.text());
  };

  return (
    <div>
      <Nav></Nav>
      <div className='max-w-160 m-auto p-8'>
        <h1 className="text-2xl m-4">Оформление заказа</h1>

        <div className='flex gap-16 bg-white rounded-xl w-full h-24 p-4 mt-8 mb-8'>
          <div className='flex p-4 bg-slate-200 rounded-xl'>
            <div className='flex items-center'>
              <Droplets/>
              {fuel_types[currentLot.fuel_type].name}
            </div>
          </div>
          <div className='flex p-4'>
            <div className='flex items-center'>
              {oil_bases[currentLot.oil_base].name}
            </div>
          </div>
          <div className='flex p-4'>
            <div className='flex items-center'>
              Цена за тонну: {currentLot.price_per_ton} ₽
            </div>
          </div>
        </div>

        <div className='bg-white rounded-xl p-8'>
          <BuyForm onSubmit={onSubmit} max_fuel_amount={currentLot.available_volume}/>
        </div>
      </div>
    </div>
  );
}
