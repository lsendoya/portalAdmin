'use client';
import { useRouter } from 'next/navigation';
import { HiEyeOff, HiEye } from 'react-icons/hi';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
  birthdate: z.string(),
  name: z.string(),
});

export function ProfileForm() {
  const [visibility, setVisibility] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push('/dashboard');
  }

  function onToggleVisibility() {
    console.log('funciona de nuevo');
    setVisibility(!visibility);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-1/2 flex-col space-y-8  "
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type={visibility ? 'text' : 'password'}
                  placeholder="password"
                  {...field}
                  rightIcon={
                    visibility ? (
                      <HiEye onClick={onToggleVisibility} />
                    ) : (
                      <HiEyeOff onClick={onToggleVisibility} />
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  );
}

//TODO AJUSTAR EL LOGIN PARA RESTRINGIR EN CASO DE QUE NO SEA CORRECTO LA CONTRASEÑA
