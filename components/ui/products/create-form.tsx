'use client';
import {Button} from '@/components/ui/button';
import {Form, FormControl, FormField, FormItem, FormMessage,} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';

import {Label} from '@/components/ui/label';
import {useCreateProduct} from '@/app/hooks/useProduct';
import {Loader} from '@/components/ui/products/loader';

export function CreateForm() {
  const { form, onCreateProduct, isLoading } = useCreateProduct();

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onCreateProduct)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="color" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="$" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className={'grid grid-cols-2 gap-3'}>
            <FormField
              control={form.control}
              name="size2_4"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="talla 2-4" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="size6_8"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="talla 6-8" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="size10_12"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="talla 10-12" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="size14_16"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="talla 14-16" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="descripcion" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="available"
            control={form.control}
            render={({ field: { onChange, onBlur, value, ref, name } }) => (
              <FormItem>
                <FormControl>
                  <div className={'flex items-center space-x-2'}>
                    <input
                      type="checkbox"
                      id="available"
                      name={name}
                      ref={ref}
                      checked={value}
                      onChange={(e) => onChange(e.target.checked)}
                      onBlur={onBlur}
                    />
                    <Label htmlFor="available">
                      ¿Está disponible el producto?
                    </Label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageFiles"
            render={({ field: { onChange, onBlur, name, ref } }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="file"
                    name={name}
                    ref={ref}
                    onBlur={onBlur}
                    multiple
                    onChange={(e) => {
                      const files = e.target.files
                        ? Array.from(e.target.files)
                        : [];
                      onChange(files);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {!isLoading && (
            <Button disabled={isLoading} type="submit">
              Crear
            </Button>
          )}
        </form>
      </Form>

      {isLoading && <Loader />}
    </>
  );
}
