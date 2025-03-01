'use client'

import Nav from '@/app/nav';
import LotList from '@/app/listing/lot_list';
import LotFilters from '@/app/listing/lot_filters';

import { useState } from 'react';

export default function Listing(props) {
  const [fuelTypeFilter, setFuelTypeFilter] = useState(null);
  const [oilBaseFilter, setOilBaseFilter] = useState(null);
  const [oilBaseName, setOilBaseName] = useState(null);

  return (
    <div>
      <Nav></Nav>
      <div className='flex items-start max-w-400 m-auto gap-16 p-8'>
        <LotFilters {...props}/>
        <div className='w-full'>
          <h1 className='text-2xl'>Маркетплейс</h1>
          <LotList {...props}/>
        </div>
      </div>
    </div>
  );
}
