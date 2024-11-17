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
  completed: z
    .string()
    .refine(
      (value) => ["true", "false"].includes(value),
      "Completed must be boolean"
    ),
});

// update todo validation
export const updateTodoSchema = z.object({
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

// update completed validation
export const patchTodoSchema = z.object({
  completed: z
    .string()
    .refine(
      (value) => ["true", "false"].includes(value),
      "Completed must be boolean"
    ),
});
