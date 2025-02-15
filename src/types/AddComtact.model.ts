
import z from 'zod'
import { contactSchema } from './contact.model';


export const addContactSchema = contactSchema.pick({
  name: true,
  number: true,
});

// Infer the type of loginSchema
export type addContactSchemaType = z.infer<typeof addContactSchema>;