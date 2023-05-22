import { z } from "zod";

export const userSignInSchema = z.object({
  email: z.string().email({ message: "Email is required." }),
  password: z.string().nonempty("Password field is required."),
});

export const userRegisterSchema = z
  .object({
    username: z
      .string()
      .nonempty("User name is required.")
      .max(32, { message: "Username should be less than 32 characters" }),
    email: z.string().email({ message: "Email is required." }),
    password: z
      .string()
      .nonempty("Password field is required.")
      .min(6, { message: "Must be at least 8 characters" }),
    passwordConfirmation: z.string().nonempty("Confirm your password"),
  })
  .refine((user) => user.password === user.passwordConfirmation, {
    message: "Passwords don't match, try again.",
    path: ["confirm"],
  });
