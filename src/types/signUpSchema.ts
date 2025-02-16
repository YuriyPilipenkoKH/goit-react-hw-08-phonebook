import z from 'zod'
import { userSchema } from './user.model';

export const signUpSchema =  userSchema.pick({
  name: true,
  email: true,
  password: true,
});

export type signUpSchemaType =  z.infer<typeof signUpSchema>

