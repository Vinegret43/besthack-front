import Link from 'next/link';
import { Search } from 'lucide-react';

import { Input } from "@/components/ui/input"

export default function Nav() {
  return (
    <div className='z-10 sticky top-0 bg-white w-full p-4 pl-10 pr-10'>
      <div className='max-w-400 flex justify-between items-center m-auto gap-12'>
        <img src='/logo.png' className='h-8'/>
        <Link href='/' className='text-xl'>Главная</Link>
        <Input className='rounded-full' placeholder="Поиск"></Input>
        <Link href='' className='text-xl text-nowrap'>Личный кабинет</Link>
      </div>
    </div>
  )
}
