import * as z from "zod";

export const Form1Schema = z.object({
  emailId: z.string().email({ message: "Invalid email address" }).min(1, "Required"),
  password: z
    .string()
    .min(8, { message: "Password must contain minimum 8 characters" })
    .regex(/^(?=(?:.*[A-Z]){2})(?=(?:.*[a-z]){2})(?=(?:.*\d){2})(?=(?:.*[^A-Za-z\d]){2}).{8,}$/, {
      message:
        "Password must contain 2 capital letters, 2 small letters, 2 numbers, and 2 special characters",
    }),
});

export const Form2Schema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Minimum of 2 characters required" })
    .max(50, { message: "Maximum of 50 characters allowed" })
    .regex(/^[a-zA-Z]+$/, { message: "Only alphabets are allowed" })
    .min(1, "Required"),
  lastName: z
    .string()
    .regex(/^[a-zA-Z]*$/, { message: "Only alphabets are allowed" })
    .optional(),
  address: z
    .string()
    .min(10, { message: "Minimum length of 10 characters required" })
    .min(1, "Required"),
});

export const Form3Schema = z.object({
  countryCode: z.enum(["+91", "+1"], { message: "Invalid country code" }),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "Phone number must be 10 digits" })
    .min(1, "Required"),
  acceptTermsAndCondition: z
    .boolean()
    .refine((val) => val === true, { message: "Must accept terms and conditions" }),
});
