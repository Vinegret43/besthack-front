import { API_ADDR } from '@/app/config';
import LotEntry from '@/app/listing/lot_entry';

export default function LotList(props) {
  let entries = [];
  console.log(props);
  for (const i in props.lot_list) {
    const e = props.lot_list[i];
    entries.push(
      <LotEntry 
        key={e.id}
        lot_id={e.id}
        expiration_date={e.expiration_date}
        oil_base={props.oil_bases[e.oil_base].name}
        fuel_type={props.fuel_types[e.fuel_type].name}
        available_volume={e.available_volume}
        status={e.status}
      />
    )
  };

  return (
    <div className='w-full flex flex-col gap-4 pt-6'>
      {entries}
    </div>
  )
}
