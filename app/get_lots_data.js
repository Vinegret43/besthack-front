'use server'

import { API_ADDR } from '@/app/config';

function convert_to_dict(list) {
  let dict = {};
  for (const i in list) {
    let {id, ...other} = list[i];
    dict[id] = other;
  };
  return dict;
}

export default async function getLotsData() {
  const lot_list_req = fetch(API_ADDR + '/trade/lots');
  const fuel_types_req = fetch(API_ADDR + '/trade/fuel-types');
  const oil_bases_req = fetch(API_ADDR + '/trade/oil-bases');

  const [lot_list_res, fuel_types_res, oil_bases_res] =
    await Promise.all([lot_list_req, fuel_types_req, oil_bases_req]);
  const [lot_list, fuel_types_raw, oil_bases_raw] =
    await Promise.all([lot_list_res.json(), fuel_types_res.json(), oil_bases_res.json()]);

  const fuel_types = convert_to_dict(fuel_types_raw);
  const oil_bases = convert_to_dict(oil_bases_raw);
  return {
    "lot_list": lot_list,
    "fuel_types": fuel_types,
    "oil_bases": oil_bases,
  };
}
