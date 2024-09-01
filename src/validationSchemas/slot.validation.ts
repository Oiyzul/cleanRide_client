import { z } from "zod";

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const createSlotValidationSchema = z.object({
  service: z.string(),
  // .refine(
  //   (value) => {
  //       try {
  //         new mongoose.Types.ObjectId(value);
  //         return true;
  //       } catch (error) {
  //         return false;
  //       }
  //   },
  //   { message: "Invalid ObjectId format" }
  // )
  date: z
    .string()
    .regex(dateRegex, { message: "Invalid date format (YYYY-MM-DD)" })
    .refine(
      (value) => {
        const date = new Date(value);
        return !isNaN(date.getTime()) && date.toISOString().startsWith(value);
      },
      { message: "Invalid date" }
    ),
  startTime: z.string({ required_error: "Start time is required" }),
  endTime: z.string({ required_error: "End time is required" }),
});
