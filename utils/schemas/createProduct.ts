import * as z from 'zod';

export const productSchema = z.object({
  name: z
    .string()
    .regex(
      /^[A-Za-z]+[A-Za-z0-9. ]*$/,
      'La descripción debe contener letras y puede contener números y puntos'
    ),
  description: z.string(),
  price: z
    .string()
    .regex(
      /^\d+(\.\d+)?$/,
      'El precio debe ser un número que puede contener un punto decimal'
    ),
  color: z.string().regex(/^[A-Za-z ]+$/, 'El color debe contener solo letras'),
  available: z.boolean().optional(),
  size2_4: z.string().regex(/^\d+$/),
  size6_8: z.string().regex(/^\d+$/),
  size10_12: z.string().regex(/^\d+$/),
  size14_16: z.string().regex(/^\d+$/),
  imageFiles: z.array(
    z
      .instanceof(File)
      .refine((file) => file.type.match(/image\/(png|jpeg|jpg)$/), {
        message: 'Todos los archivos deben ser imágenes PNG o JPEG',
      })
  ),
});
