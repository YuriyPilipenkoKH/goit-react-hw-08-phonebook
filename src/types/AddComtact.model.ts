
import z from 'zod'
import { contactSchema } from './contact.model';
import { zodLangEn, zodLangUa } from '../lang/zodLang';


const language = localStorage.getItem('language')
const lang = language === 'ukrainian' ? zodLangUa : zodLangEn


export const addContactSchema = contactSchema(lang).pick({
  name: true,
  number: true,
});

// Infer the type of loginSchema
export type addContactSchemaType = z.infer<typeof addContactSchema>