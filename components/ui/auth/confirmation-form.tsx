'use client';

import {Button} from '@/components/ui/button';
import {Form, FormControl, FormField, FormItem, FormMessage,} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';

import {maskEmail} from '@/utils/tools';

import useConfirmation from '@/app/hooks/useConfirmation';

export function ConfirmationForm() {
  const { form, onSubmit, valid, email } = useConfirmation();

  return (
    <>
      <div className={'flex w-1/2 flex-col space-y-4'}>
        {!valid && (
          <div className={'p-4 font-semibold border-red-900 text-red-700'}>
            Verificacion invalida, intente de nuevo
          </div>
        )}
        <p className={'text-justify text-sm'}>
          Hemos enviado un código por correo electrónico a
          <span className={'font-semibold'}> {maskEmail(email)}</span> Ingréselo
          a continuación para confirmar su cuenta.
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-1/2 flex-col space-y-8  "
        >
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div>
                    <Label>Codigo de verificación</Label>
                    <Input type={'text'} {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Confirmar cuenta</Button>
        </form>
      </Form>
    </>
  );
}
