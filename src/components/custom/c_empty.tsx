import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

function CustomEmpty({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="empty"
            className={cn(
                "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
                className
            )}
            {...props}
        />
    );
}

function CustomEmptyHeader({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="empty-header"
            className={cn(
                "flex max-w-sm flex-col items-center gap-2 text-center",
                className
            )}
            {...props}
        />
    );
}

const customEmptyMediaVariants = cva(
    "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default: "bg-transparent",
                icon: "bg-muted-light text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6 dark:bg-muted-dark/90",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

function CustomEmptyMedia({
    className,
    variant = "default",
    ...props
}: React.ComponentProps<"div"> &
    VariantProps<typeof customEmptyMediaVariants>) {
    return (
        <div
            data-slot="empty-icon"
            data-variant={variant}
            className={cn(customEmptyMediaVariants({ variant, className }))}
            {...props}
        />
    );
}

function CustomEmptyTitle({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="empty-title"
            className={cn("text-lg font-medium tracking-tight", className)}
            {...props}
        />
    );
}

function CustomEmptyDescription({
    className,
    ...props
}: React.ComponentProps<"p">) {
    return (
        <div
            data-slot="empty-description"
            className={cn(
                "text-muted-dark [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4 dark:text-muted-light",
                className
            )}
            {...props}
        />
    );
}

function CustomEmptyContent({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="empty-content"
            className={cn(
                "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
                className
            )}
            {...props}
        />
    );
}

export {
    CustomEmpty,
    CustomEmptyHeader,
    CustomEmptyTitle,
    CustomEmptyDescription,
    CustomEmptyContent,
    CustomEmptyMedia,
};
