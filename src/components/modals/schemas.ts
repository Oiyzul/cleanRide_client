import { z } from "zod";

export const createServiceValidationSchema = z.object({
  name: z.string().min(1, { message: "Service name is required" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),
  price: z.number().positive({ message: "Price must be a positive number" }).or(z.string().regex(/^\d+$/).transform(Number)),
  duration: z
    .number()
    .positive({ message: "Duration must be a positive number" }).or(z.string().regex(/^\d+$/).transform(Number)),
  imgUrl: z.string().min(10, { message: "Invalid imgUrl" }).optional(),
  isDeleted: z.boolean().default(false).optional(),
});

export const editServiceValidationSchema = z.object({
  name: z.string().min(1, { message: "Service name is required" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" })
    .optional(),
  price: z
    .number()
    .positive({ message: "Price must be a positive number" })
    .optional(),
  duration: z
    .number()
    .positive({ message: "Duration must be a positive number" })
    .optional(),
  imgUrl: z.string().min(10, { message: "Invalid imgUrl" }).optional(),
  isDeleted: z.boolean().default(false),
});

