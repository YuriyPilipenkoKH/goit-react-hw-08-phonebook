import { z } from "zod";


export const searchSchema = z.object({
   query: z
    .string()
    .regex(/^[a-zA-Z0-9]+$/, {
    message: 'letters & digits only ',
   })
})
export type Search = z.infer<typeof searchSchema>