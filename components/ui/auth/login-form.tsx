'use client';

import {HiEye, HiEyeOff} from 'react-icons/hi';

import {Button} from '@/components/ui/button';
import {Form, FormControl, FormField, FormItem, FormMessage,} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import useLogin from '@/app/hooks/useLogin';
import {AccountLink} from '@/components/ui/auth/callAction';

export function LoginForm() {
  const { form, onSubmit, setShowPassword, showPassword, valid } = useLogin();

  function onToggleVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      {valid === false && (
        <div>
          <p className={'text-red-800'}>usuario o contraseña incorrecta</p>
        </div>
      )}
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
                    type={showPassword ? 'text' : 'password'}
                    placeholder="password"
                    {...field}
                    rightIcon={
                      showPassword ? (
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

      <AccountLink
        Head={'¿No tienes una cuenta?'}
        Path={'/auth/signup'}
        Text={' registrate'}
      />
    </>
  );
}
