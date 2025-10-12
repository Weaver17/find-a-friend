import z from "zod";

export const signInSchema = z.object({
    email: z.email(),
    password: z.string().min(8),
});

export const signUpSchema = z.object({
    name: z.string().min(4).max(24),
    email: z.email(),
    password: z.string().min(8).max(24),
    confirmPassword: z.string().min(8).max(24),
});

export const betterAtuhSignUpSchema = z.object({
    name: z.string().min(4).max(24),
    email: z.email(),
});
