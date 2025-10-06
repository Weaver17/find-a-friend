import { cn } from "@/lib/utils";

function CustomKbd({ className, ...props }: React.ComponentProps<"kbd">) {
    return (
        <kbd
            data-slot="kbd"
            className={cn(
                "bg-muted-light/50 text-foreground border border-muted-dark/50 pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none dark:bg-muted-light/30 dark:border-muted-light/50",
                "[&_svg:not([class*='size-'])]:size-3",
                "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
                className
            )}
            {...props}
        />
    );
}

function CustomKbdGroup({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <kbd
            data-slot="kbd-group"
            className={cn("inline-flex items-center gap-1", className)}
            {...props}
        />
    );
}

export { CustomKbd, CustomKbdGroup };
