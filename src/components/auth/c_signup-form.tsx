"use client";
import Link from "next/link";
import { CustomButton } from "../custom/c_button";
import {
    CustomCard,
    CustomCardHeader,
    CustomCardTitle,
    CustomCardDescription,
    CustomCardContent,
} from "../custom/c_card";
import { CustomInput } from "../custom/c_input";
import {
    CustomFieldGroup,
    CustomFieldDescription,
    CustomFieldSeparator,
} from "../custom/c_field";
import {
    CustomForm,
    CustomFormDescription,
    CustomFormField,
    CustomFormItem,
    CustomFormLabel,
} from "../custom/c_form";
import { useState } from "react";
import ShowPasswordBtn from "../buttons/show-password-btn";
import { useSignUpFormContext } from "@/hooks/use-auth-context";
import { TSignUpSchema } from "@/types/types";
import { CustomSpinner } from "../custom/c_spinner";
import { useUserContext } from "@/contexts/user-context";
import { toast } from "sonner";

export function CustomSignupForm({
    ...props
}: React.ComponentProps<typeof CustomCard>) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const signUpForm = useSignUpFormContext();

    const { signUp } = useUserContext();

    const {
        handleSubmit,
        formState: { errors, isSubmitting },
    } = signUpForm;

    const onSubmit = async (data: TSignUpSchema) => {
        try {
            console.log(data);
            await signUp(
                {
                    name: data.name,
                    email: data.email,
                },
                data.password,
                data.confirmPassword
            );
            toast.success(
                "Signed Up Successfully! Please sign in to continue..."
            );
        } catch (error) {
            console.error(error);
            toast.error("Invalid Credentials");
        }
    };

    return (
        <CustomCard {...props} className="gap-4">
            <CustomCardHeader className="flex-col">
                <CustomCardTitle>Sign Up</CustomCardTitle>
                <CustomCardDescription>
                    Enter your information below to create your account
                </CustomCardDescription>
            </CustomCardHeader>
            <CustomFieldSeparator />
            <CustomCardContent>
                <CustomForm {...signUpForm}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CustomFieldGroup>
                            <CustomFormField
                                control={signUpForm.control}
                                name="name"
                                render={({ field }) => (
                                    <CustomFormItem>
                                        <CustomFormLabel htmlFor="name">
                                            Full Name
                                        </CustomFormLabel>
                                        <CustomInput
                                            id="name"
                                            type="text"
                                            placeholder="John Doe"
                                            required
                                            {...field}
                                        />
                                    </CustomFormItem>
                                )}
                            />

                            <CustomFormField
                                control={signUpForm.control}
                                name="email"
                                render={({ field }) => (
                                    <CustomFormItem>
                                        <CustomFormLabel htmlFor="email">
                                            Email
                                        </CustomFormLabel>
                                        <CustomInput
                                            id="email"
                                            type="email"
                                            placeholder="m@example.com"
                                            required
                                            {...field}
                                        />
                                        <CustomFormDescription>
                                            We&apos;ll use this to contact you.
                                            We will not share your email with
                                            anyone else.
                                        </CustomFormDescription>
                                    </CustomFormItem>
                                )}
                            />

                            <CustomFormField
                                control={signUpForm.control}
                                name="password"
                                render={({ field }) => (
                                    <CustomFormItem className="relative">
                                        <CustomFormLabel htmlFor="password">
                                            Password
                                        </CustomFormLabel>
                                        <CustomInput
                                            id="password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            required
                                            {...field}
                                        />
                                        <ShowPasswordBtn
                                            showPassword={showPassword}
                                            setShowPassword={setShowPassword}
                                        />
                                        <CustomFormDescription>
                                            Must be at least 8 characters long.
                                        </CustomFormDescription>
                                    </CustomFormItem>
                                )}
                            />

                            <CustomFormField
                                control={signUpForm.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <CustomFormItem className="relative">
                                        <CustomFormLabel htmlFor="confirmPassword">
                                            Confirm Password
                                        </CustomFormLabel>
                                        <CustomInput
                                            id="confirmPassword"
                                            type={
                                                showConfirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            required
                                            {...field}
                                        />
                                        <ShowPasswordBtn
                                            showPassword={showConfirmPassword}
                                            setShowPassword={
                                                setShowConfirmPassword
                                            }
                                        />
                                        <CustomFormDescription>
                                            Please confirm your password.
                                        </CustomFormDescription>
                                    </CustomFormItem>
                                )}
                            />

                            <CustomFieldSeparator />
                            <CustomButton>
                                {isSubmitting ? <CustomSpinner /> : "Sign Up"}
                            </CustomButton>

                            <CustomFieldDescription className="px-6 text-center">
                                Already have an account?{" "}
                                <Link href="/signin">Sign in</Link>
                            </CustomFieldDescription>
                        </CustomFieldGroup>
                    </form>
                </CustomForm>
            </CustomCardContent>
        </CustomCard>
    );
}
