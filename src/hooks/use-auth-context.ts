import { TSignInSchema, TSignUpSchema } from "@/types/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, signUpSchema } from "@/schema/authSchema";

export function useSignInFormContext() {
    const signInForm = useForm<TSignInSchema>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    return signInForm;
}

export function useSignUpFormContext() {
    const signUpForm = useForm<TSignUpSchema>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    return signUpForm;
}
