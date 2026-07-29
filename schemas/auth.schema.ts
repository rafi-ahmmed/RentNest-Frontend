import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export const signupSchema = z.object({
  name: z.string().min(5, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  imageUrl: z
    .string()
    .url("Please enter a valid image URL.")
    .optional()
    .or(z.literal("")),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export type ILoginData = z.infer<typeof loginSchema>
export type ISignupData = z.infer<typeof signupSchema>
