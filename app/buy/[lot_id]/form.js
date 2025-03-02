'use client'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function BuyForm({props, onSubmit, max_fuel_amount}) {
    return (
      <form action={onSubmit} className="space-y-8">
        <Label htmlFor="volume">Сколько тонн топлива необходимо заказать?</Label>
        <Input type="number" id="volume" name="volume" step="0.1" max={max_fuel_amount}/>
        <p>Доступно: {max_fuel_amount}</p>
        <Label>Способ доставки</Label>
        <RadioGroup name="delivery_type" defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="delivery" id="delivery" />
            <Label htmlFor="delivery">Доставка Лукойл - 1% от цены лота</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="pickup" id="pickup" />
            <Label htmlFor="pickup">Самовывоз</Label>
          </div>
        </RadioGroup>

        <Label htmlFor="phone">Телефон для уточнения деталей</Label>
        <Input type="tel" id="phone" name="phone"/>

        <Button type="submit">Отправить заказ</Button>
      </form>
    );
}
