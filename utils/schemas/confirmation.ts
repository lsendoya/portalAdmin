import * as z from 'zod';

export const confirmationSchema = z.object({
  code: z.string(),
});
