"use client"

import { processForm } from "./process_login"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react";

import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { AlertCircle } from "lucide-react"

// TODO: максимальный лимит длины
const formSchema = z.object({
  username: z.string().min(2, {
    message: "TODO",
  }),
  password: z.string().min(2, {
    message: "TODO",
  }),
})
 
export default function ProfileForm() {
  const [errorMsg, setErrorMsg] = useState('');

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })
 
  async function onSubmit(values) {
    const errMsg = await processForm(values);
    if (errMsg) {
      setErrorMsg(errMsg);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Логин</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Alert variant="destructive" hidden={!errorMsg}>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Неверный логин или пароль</AlertTitle>
          <AlertDescription>
            Проверьте их правильность
          </AlertDescription>
        </Alert>
        <Button type="submit">Войти</Button>
      </form>
    </Form>
  )
}
