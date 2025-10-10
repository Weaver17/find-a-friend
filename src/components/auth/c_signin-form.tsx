"use client";
import { cn } from "@/lib/utils";
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
    CustomFieldDescription,
    CustomFieldGroup,
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
    email: z.email(),
    password: z.string().min(8),
});

export function CustomSignInForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [showPassword, setShowPassword] = useState(false);

    const signInForm = useForm({
        resolver: zodResolver(formSchema),
    });

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <CustomCard className="gap-4">
                <CustomCardHeader className="flex-col">
                    <CustomCardTitle>Sign In</CustomCardTitle>
                    <CustomCardDescription>
                        Enter your email below to login to your account
                    </CustomCardDescription>
                </CustomCardHeader>
                <CustomFieldSeparator />

                <CustomCardContent>
                    <CustomForm {...signInForm}>
                        <form>
                            <CustomFieldGroup>
                                <CustomFormField
                                    control={signInForm.control}
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
                                        </CustomFormItem>
                                    )}
                                />

                                <CustomFormField
                                    control={signInForm.control}
                                    name="password"
                                    render={({ field }) => (
                                        <CustomFormItem className="mt-4 relative">
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
                                                setShowPassword={
                                                    setShowPassword
                                                }
                                            />
                                            <CustomFormDescription>
                                                <Link
                                                    href="#"
                                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                                >
                                                    Forgot your password?
                                                </Link>
                                            </CustomFormDescription>
                                        </CustomFormItem>
                                    )}
                                />

                                <CustomFieldSeparator />
                                <CustomButton>Sign In</CustomButton>
                                <CustomFieldDescription className="text-center">
                                    Don&apos;t have an account?{" "}
                                    <Link href="/signup">Sign up</Link>
                                </CustomFieldDescription>
                            </CustomFieldGroup>
                        </form>
                    </CustomForm>
                </CustomCardContent>
            </CustomCard>
        </div>
    );
}
