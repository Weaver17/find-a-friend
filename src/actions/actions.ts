"use server";
import { prisma } from "@/lib/prisma";
import { betterAtuhSignUpSchema, signInSchema } from "@/schema/authSchema";
import { TBetterAuthSignUpSchema, TSignInSchema } from "@/types/types";
import { auth } from "../../utils/auth";
import { headers } from "next/headers";

export async function createUser(
    { name, email }: TBetterAuthSignUpSchema,
    password: string,
    confirmPassword: string
) {
    try {
        const safeData = betterAtuhSignUpSchema.parse({
            name,
            email,
        });

        if (!safeData) {
            throw new Error("Invalid data");
        }

        const existingEmail = await prisma.user.findUnique({
            where: {
                email: safeData.email,
            },
        });

        if (existingEmail) {
            throw new Error("Email already in use");
        }

        // const existingName = await prisma.user.findFirst({
        //     where: {
        //         name: safeData.name,
        //     },
        // });

        // if (existingName) {
        //     throw new Error("Username already in use");
        // }

        if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }

        const data = await auth.api.signUpEmail({
            body: {
                name: safeData.name,
                email: safeData.email,
                password: password,
            },
        });

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function signIn(formData: TSignInSchema) {
    try {
        const safeData = signInSchema.parse(formData);

        if (!safeData) {
            throw new Error("Invalid data");
        }

        const data = await auth.api.signInEmail({
            body: {
                email: safeData.email,
                password: safeData.password,
            },
            headers: await headers(),
        });

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
