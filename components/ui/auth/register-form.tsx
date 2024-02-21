'use client';
import {HiEye, HiEyeOff} from 'react-icons/hi';
import {Button} from '@/components/ui/button';
import {Form, FormControl, FormField, FormItem, FormMessage,} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import useRegister from '@/app/hooks/useRegister';
import {AccountLink} from '@/components/ui/auth/callAction';
import {Label} from '@radix-ui/react-menu';

export function RegisterForm() {
  const { form, onSubmit, setShowPassword, showPassword } = useRegister();

  function onToggleVisibility() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-1/2 flex-col space-y-8  "
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birthdate"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <Label className={'text-xs'}>fecha de nacimiento</Label>
                    <Input type={'date'} {...field} />
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
                    placeholder="contraseña"
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

          <FormField
            control={form.control}
            name="passwordAgain"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="repetir contraseña"
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
          <Button type="submit">Crear cuenta</Button>
        </form>
      </Form>
      <AccountLink
        Head={'¿Ya tienes una cuenta?'}
        Path={'/auth'}
        Text={'ingresa'}
      />
    </>
  );
}
