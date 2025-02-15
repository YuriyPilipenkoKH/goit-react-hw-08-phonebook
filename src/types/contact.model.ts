import z from 'zod'

export const contactSchema = z.object({
   _id: z
  .string(),
   userId: z
  .string(),
  name: z
  .string()
  .trim()
  .min(3)
  .max(32)
  .refine((val) => !val.toLowerCase().startsWith('qwe'), {
    message: 'forbidden prefix',
  }),
  number: z
  .string()
  .trim()
  .regex(/^0\d{9}$/, {
    message: 'Correct format: 0985551204 ',
   })  ,
  createdAt: z
  .date()
  .optional(),
  updatedAt: z
  .date()
  .optional(),
}) 
export type Contact =  z.infer<typeof contactSchema>