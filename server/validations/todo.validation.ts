import { z } from "zod";
// create todo validation
export const createTodoSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(3),
  priorities: z
    .string()
    .refine(
      (value) => ["low", "medium", "high"].includes(value),
      "Invalid priorities"
    ),
  completed: z.boolean().optional(),
});

export type createTodoSchemaType = z.infer<typeof createTodoSchema>;

// update todo validation
export const updateTodoSchema = z.object({
  // id: z.string(),
  title: z.string().min(3).optional().or(z.literal("")),
  description: z.string().min(3).optional().or(z.literal("")),
  priorities: z
    .string()
    .refine(
      (value) => ["low", "medium", "high"].includes(value),
      "Invalid priorities"
    )
    .optional()
    .or(z.literal("")),
});

export type updateTodoSchemaType = z.infer<typeof updateTodoSchema>;

// update completed validation
export const patchTodoSchema = z.object({
  completed: z.boolean(),
});

export type patchTodoSchemaType = z.infer<typeof patchTodoSchema>;
