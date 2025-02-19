import z from 'zod'
import { LangType } from '../utils/languages';


export const contactSchema = (lang: LangType) => z.object({
   _id: z
  .string(),
   userId: z
  .string(),
  name: z
  .string()
  .trim()
  .min(3,  lang.minLength)
  .max(16, lang.maxLength)
  .refine((val) => !val.toLowerCase().startsWith('qwe'), {
    message: lang.forbiddenPrefix,
  }),
  number: z
  .string()
  .trim()
  .min(10 , '')
  .max(10)
  // .regex(/^0\d{9}$/, {
  //   message: 'Correct format: 0985551204 ',
  //  }) //moved to backend
    ,
  createdAt: z
  .date()
  .optional(),
  updatedAt: z
  .date()
  .optional(),
}) 
export type Contact = z.infer<ReturnType<typeof contactSchema>>;

