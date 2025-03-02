'use server'

import { API_ADDR } from '@/app/config';
import getLotsData from '@/app/get_lots_data';

export default async function BuyPage({ params }) {
  const lotId = params.lot_id;
  const { lot_list } = await getLotsData();

  // Находим лот по ID
  const currentLot = lot_list.find((lot) => lot.id === Number(lotId));

  if (!currentLot) {
    return <div>Лот не найден</div>;
  }

  return (
    <div>
      <h1>Совершение сделки</h1>
      <form action={API_ADDR + '/trade/orders/'} method="post">
        <input type="hidden" name="lot" value={lotId} />
        <label>
          Объём:
          <input
            type="number"
            step="0.01"
            min="0.01"
            max={currentLot.available_volume}
            name="volume"
          />
        </label>
        <br />
        <label>
          Тип доставки:
          <select name="deliveryType">
            <option value="delivery">Доставка</option>
            <option value="pickup">Самовывоз</option>
          </select>
        </label>
        <br />
        <label>
          Адрес доставки (при доставке):
          <input type="text" name="deliveryAddress" />
        </label>
        <br />
        <button type="submit">Совершить сделку</button>
      </form>
    </div>
  );
}
