import { z } from "zod";

export const createServiceValidationSchema = z.object({
  name: z.string().min(1, { message: "Service name is required" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters" }),
  price: z
    .number()
    .positive({ message: "Price must be a positive number" })
    .or(z.string().regex(/^\d+$/).transform(Number)),
  duration: z
    .number()
    .positive({ message: "Duration must be a positive number" })
    .or(z.string().regex(/^\d+$/).transform(Number)),
  imgUrl: z.string().optional(),
  features: z.array(z.string()),
  unavailableFeatures: z.array(z.string()).optional(),
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

export const Vehicle_types = {
  car: "car",
  motorcycle: "motorcycle",
  truck: "truck",
  bus: "bus",
  van: "van",
  SUV: "SUV",
  electricVehicle: "electricVehicle",
  hybridVehicle: "hybridVehicle",
  bicycle: "bicycle",
  tractor: "tractor",
} as const;

export const createBookingValidationSchema = z.object({
  customerName: z.string(),
  email: z.string(),
  serviceId: z.string(),
  slotId: z.string(),
  vehicleType: z.nativeEnum(Vehicle_types, { message: "Invalid vehicle type" }),
  vehicleBrand: z.string().min(2, { message: "Vehicle brand is required" }),
  vehicleModel: z.string().min(2, { message: "Vehicle model is required" }),
  manufacturingYear: z
    .number()
    .min(1886, { message: "Manufacturing year must be 1886 or later" })
    .positive({ message: "Manufacturing year must be 1886 or later" })
    .or(z.string().regex(/^\d+$/).transform(Number)),
  registrationPlate: z
    .string()
    .min(5, { message: "Registration plate is required" }),
});

export const updateUserValidationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).optional(),
  email: z.string().email({ message: "Invalid email address" }).optional(),
  phone: z
    .string()
    .regex(/^[0-9]{10,11}$/, {
      message: "Phone number must be between 10 to 11 digits",
    })
    .optional(),
  address: z.string().min(1, { message: "Address is required" }).optional(),
});
