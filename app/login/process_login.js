'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { API_ADDR } from '@/app/config';

export async function processForm(values) {
  const cookieStore = await cookies();

  const raw_response = await fetch(API_ADDR + '/users/token/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }
  );
  if (raw_response.status == 200) {
    const content = await raw_response.json();
    cookieStore.set('access', content.access);
    cookieStore.set('refresh', content.refresh);
    await redirect('/');
  } else {
    // const content = await raw_response.json();
    // return content.message;
  }
  return "Неверный логин или пароль";
}
