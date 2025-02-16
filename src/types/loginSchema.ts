
import z from 'zod'
import { userSchema } from './user.model';


export const loginSchema = userSchema.pick({
  email: true,
  password: true,
});

// Infer the type of loginSchema
export type LoginSchemaType = z.infer<typeof loginSchema>;