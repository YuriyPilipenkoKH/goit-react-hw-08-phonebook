import z from 'zod'
import { LangType } from '../lang/zodLang'

export const userSchema = (lang: LangType) => z.object({
   _id: z
  .string(),
  name: z
  .string()
  .trim()
  .min(3,  lang.minLength)
  .max(16, lang.maxLength)
  .refine((val) => !val.toLowerCase().startsWith('qwe'), {
    message: lang.forbiddenPrefix,
  }),
  email: z
  .string()
  .trim()
  .email(lang.invalidEmail)
  .refine((val) => !val.toLowerCase().startsWith('admin'), {
    message: lang.notAllowed,
  })
  .refine((val) => !val.endsWith('.ru'), {
    message: lang.forbiddenDomain,
  }),
  password: z
  .string()
  .trim()
  .min(4, lang.minLengthPass)
  .regex(/^(?=.*[A-Za-z])(?=.*\d).+$/, {
    message: lang.includeNum,
  }),
  image: z
  .string(),
  role: z
  .enum(["admin", "user", "editor"]),
  phone: z
  .string()
  .trim()
  .regex(/^0\d{9}$/, {
    message: 'Correct format: 0985551204 ',
  })
  .optional(),
  city: z
  .string()
  .trim()
  .optional(),
  createdAt: z
  .date()
  .optional(),
  updatedAt: z
  .date()
  .optional(),
 })


export type User =  z.infer<ReturnType<typeof userSchema>>;

