import {z} from 'zod';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
const nameRegex = /^[A-Za-z\s]+$/;

export const registerSchema = z
  .object({
    email: z.string().regex(emailRegex, { message: 'Email no válido' }),
    password: z.string().regex(passwordRegex, {
      message:
        'Contraseña no válida. Debe tener al menos 8 caracteres, incluyendo 1 número, 1 minúscula, 1 mayúscula y 1 carácter especial.',
    }),
    passwordAgain: z.string(),
    birthdate: z
      .string()
      .regex(birthdateRegex, { message: 'Fecha de nacimiento no válida' }),
    name: z.string().regex(nameRegex, { message: 'Nombre no válido' }),
  })
  .refine((data) => data.password === data.passwordAgain, {
    message: 'Las contraseñas no coinciden',
    path: ['passwordAgain'],
  });
