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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    CustomForm,
    CustomFormDescription,
    CustomFormField,
    CustomFormItem,
    CustomFormLabel,
} from "../custom/c_form";
import { useState } from "react";
import ShowPasswordBtn from "../buttons/show-password-btn";

const formSchema = z.object({
    name: z.string().min(3),
    email: z.email(),
    password: z.string().min(8),
    "confirm-password": z.string().min(8),
});

export function CustomSignupForm({
    ...props
}: React.ComponentProps<typeof CustomCard>) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const signUpForm = useForm({
        resolver: zodResolver(formSchema),
    });

    return (
        <CustomCard {...props} className="gap-4">
            <CustomCardHeader>
                <CustomCardTitle>Create an account</CustomCardTitle>
                <CustomCardDescription>
                    Enter your information below to create your account
                </CustomCardDescription>
            </CustomCardHeader>
            <CustomFieldSeparator />
            <CustomCardContent>
                <CustomForm {...signUpForm}>
                    <form>
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
                                name="confirm-password"
                                render={({ field }) => (
                                    <CustomFormItem className="relative">
                                        <CustomFormLabel htmlFor="confirm-password">
                                            Confirm Password
                                        </CustomFormLabel>
                                        <CustomInput
                                            id="confirm-password"
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
                            <CustomButton>Create Account</CustomButton>

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
