'use client'

export default function LotFilters(props) {
  return (
    <div className='bg-white sticky w-100 rounded-xl p-8 flex flex-col gap-8'>
      <h1 className='text-2xl'>Фильтры</h1>
      <div>
        <h2 className='text-xl'>Вид топлива</h2>
      </div>
      <div>
        <h2 className='text-xl'>Регион нефтебазы, ФО</h2>
      </div>
      <div>
        <h2 className='text-xl'>Название нефтебазы</h2>
      </div>
    </div>
  );
}
