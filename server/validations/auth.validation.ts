import { z } from "zod";

export const authSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(5),
});

export type authSchemaType = z.infer<typeof authSchema>;
