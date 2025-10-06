"use client";

import { useMemo } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { CustomSeparator } from "./c_separator";
import { CustomLabel } from "./c_label";

function CustomFieldSet({
    className,
    ...props
}: React.ComponentProps<"fieldset">) {
    return (
        <fieldset
            data-slot="field-set"
            className={cn(
                "flex flex-col gap-6",
                "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
                className
            )}
            {...props}
        />
    );
}

function CustomFieldLegend({
    className,
    variant = "legend",
    ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
    return (
        <legend
            data-slot="field-legend"
            data-variant={variant}
            className={cn(
                "mb-3 font-medium",
                "data-[variant=legend]:text-base",
                "data-[variant=label]:text-sm",
                className
            )}
            {...props}
        />
    );
}

function CustomFieldGroup({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="field-group"
            className={cn(
                "group/field-group @container/field-group flex w-full flex-col gap-4 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
                className
            )}
            {...props}
        />
    );
}

const customFieldVariants = cva(
    "group/field flex w-full gap-1.5 data-[invalid=true]:text-destructive",
    {
        variants: {
            orientation: {
                vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
                horizontal: [
                    "flex-row items-center",
                    "[&>[data-slot=field-label]]:flex-auto",
                    "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
                ],
                responsive: [
                    "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
                    "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
                    "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
                ],
            },
        },
        defaultVariants: {
            orientation: "vertical",
        },
    }
);

function CustomField({
    className,
    orientation = "vertical",
    ...props
}: React.ComponentProps<"div"> & VariantProps<typeof customFieldVariants>) {
    return (
        <div
            data-slot="field"
            data-orientation={orientation}
            className={cn(customFieldVariants({ orientation }), className)}
            {...props}
        />
    );
}

function CustomFieldContent({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="field-content"
            className={cn(
                "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
                className
            )}
            {...props}
        />
    );
}

function CustomFieldLabel({
    className,
    ...props
}: React.ComponentProps<typeof CustomLabel>) {
    return (
        <CustomLabel
            data-slot="field-label"
            className={cn(
                "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
                "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-sm has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
                "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
                className
            )}
            {...props}
        />
    );
}

function CustomFieldTitle({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="field-label"
            className={cn(
                "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
                className
            )}
            {...props}
        />
    );
}

function CustomFieldDescription({
    className,
    ...props
}: React.ComponentProps<"p">) {
    return (
        <p
            data-slot="field-description"
            className={cn(
                "text-muted-dark text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
                "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
                "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
                className
            )}
            {...props}
        />
    );
}

function CustomFieldSeparator({
    children,
    className,
    ...props
}: React.ComponentProps<"div"> & {
    children?: React.ReactNode;
}) {
    return (
        <div
            data-slot="field-separator"
            data-content={!!children}
            className={cn(
                "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
                className
            )}
            {...props}
        >
            <CustomSeparator className="absolute inset-0 top-1/2" />
            {children && (
                <span
                    className="bg-background text-muted-dark relative mx-auto block w-fit px-2"
                    data-slot="field-separator-content"
                >
                    {children}
                </span>
            )}
        </div>
    );
}

function CustomFieldError({
    className,
    children,
    errors,
    ...props
}: React.ComponentProps<"div"> & {
    errors?: Array<{ message?: string } | undefined>;
}) {
    const content = useMemo(() => {
        if (children) {
            return children;
        }

        if (!errors) {
            return null;
        }

        if (errors?.length === 1 && errors[0]?.message) {
            return errors[0].message;
        }

        return (
            <ul className="ml-4 flex list-disc flex-col gap-1">
                {errors.map(
                    (error, index) =>
                        error?.message && <li key={index}>{error.message}</li>
                )}
            </ul>
        );
    }, [children, errors]);

    if (!content) {
        return null;
    }

    return (
        <div
            role="alert"
            data-slot="field-error"
            className={cn("text-destructive text-sm font-normal", className)}
            {...props}
        >
            {content}
        </div>
    );
}

export {
    CustomField,
    CustomFieldLabel,
    CustomFieldDescription,
    CustomFieldError,
    CustomFieldGroup,
    CustomFieldLegend,
    CustomFieldSeparator,
    CustomFieldSet,
    CustomFieldContent,
    CustomFieldTitle,
};
