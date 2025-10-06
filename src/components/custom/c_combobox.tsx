"use client";

import * as React from "react";
import { Check, ChevronsUpDown, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { CustomButton } from "./c_button";
import {
    CustomCommand,
    CustomCommandInput,
    CustomCommandList,
    CustomCommandEmpty,
    CustomCommandGroup,
    CustomCommandItem,
} from "./c_command";
import {
    CustomPopover,
    CustomPopoverTrigger,
    CustomPopoverContent,
} from "./c_popover";
import {
    CustomDropdownMenu,
    CustomDropdownMenuTrigger,
    CustomDropdownMenuContent,
    CustomDropdownMenuLabel,
    CustomDropdownMenuGroup,
    CustomDropdownMenuItem,
    CustomDropdownMenuSeparator,
    CustomDropdownMenuSub,
    CustomDropdownMenuSubTrigger,
    CustomDropdownMenuSubContent,
    CustomDropdownMenuShortcut,
} from "./c_dropdown-menu";
import { useForm } from "react-hook-form";

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
];

export function CustomComboboxDemo() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    return (
        <CustomPopover open={open} onOpenChange={setOpen}>
            <CustomPopoverTrigger asChild>
                <CustomButton
                    variant="outline"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? frameworks.find(
                              (framework) => framework.value === value
                          )?.label
                        : "Select framework..."}
                    <ChevronsUpDown className="opacity-50" />
                </CustomButton>
            </CustomPopoverTrigger>
            <CustomPopoverContent className="w-[200px] p-0">
                <CustomCommand>
                    <CustomCommandInput
                        placeholder="Search framework..."
                        className="h-9"
                    />
                    <CustomCommandList>
                        <CustomCommandEmpty>
                            No framework found.
                        </CustomCommandEmpty>
                        <CustomCommandGroup>
                            {frameworks.map((framework) => (
                                <CustomCommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(
                                            currentValue === value
                                                ? ""
                                                : currentValue
                                        );
                                        setOpen(false);
                                    }}
                                >
                                    {framework.label}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === framework.value
                                                ? "opacity-100"
                                                : "opacity-0"
                                        )}
                                    />
                                </CustomCommandItem>
                            ))}
                        </CustomCommandGroup>
                    </CustomCommandList>
                </CustomCommand>
            </CustomPopoverContent>
        </CustomPopover>
    );
}

type Status = {
    value: string;
    label: string;
};
const statuses: Status[] = [
    {
        value: "backlog",
        label: "Backlog",
    },
    {
        value: "todo",
        label: "Todo",
    },
    {
        value: "in progress",
        label: "In Progress",
    },
    {
        value: "done",
        label: "Done",
    },
    {
        value: "canceled",
        label: "Canceled",
    },
];
export function CustomComboboxPopoverDemo() {
    const [open, setOpen] = React.useState(false);
    const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
        null
    );
    return (
        <div className="flex items-center space-x-4">
            <p className="text-muted-foreground text-sm">Status</p>
            <CustomPopover open={open} onOpenChange={setOpen}>
                <CustomPopoverTrigger asChild>
                    <CustomButton
                        variant="outline"
                        className="w-[150px] justify-start"
                    >
                        {selectedStatus ? (
                            <>{selectedStatus.label}</>
                        ) : (
                            <>+ Set status</>
                        )}
                    </CustomButton>
                </CustomPopoverTrigger>
                <CustomPopoverContent
                    className="p-0"
                    side="right"
                    align="start"
                >
                    <CustomCommand>
                        <CustomCommandInput placeholder="Change status..." />
                        <CustomCommandList>
                            <CustomCommandEmpty>
                                No results found.
                            </CustomCommandEmpty>
                            <CustomCommandGroup>
                                {statuses.map((status) => (
                                    <CustomCommandItem
                                        key={status.value}
                                        value={status.value}
                                        onSelect={(value) => {
                                            setSelectedStatus(
                                                statuses.find(
                                                    (priority) =>
                                                        priority.value === value
                                                ) || null
                                            );
                                            setOpen(false);
                                        }}
                                    >
                                        {status.label}
                                    </CustomCommandItem>
                                ))}
                            </CustomCommandGroup>
                        </CustomCommandList>
                    </CustomCommand>
                </CustomPopoverContent>
            </CustomPopover>
        </div>
    );
}

const labels = [
    "feature",
    "bug",
    "enhancement",
    "documentation",
    "design",
    "question",
    "maintenance",
];
export function CustomComboboxDropdownMenuDemo() {
    const [label, setLabel] = React.useState("feature");
    const [open, setOpen] = React.useState(false);
    return (
        <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
            <p className="text-sm leading-none font-medium">
                <span className="bg-primary text-primary-foreground mr-2 rounded-lg px-2 py-1 text-xs">
                    {label}
                </span>
                <span className="text-muted-foreground">
                    Create a new project
                </span>
            </p>
            <CustomDropdownMenu open={open} onOpenChange={setOpen}>
                <CustomDropdownMenuTrigger asChild>
                    <CustomButton variant="ghost" size="sm">
                        <MoreHorizontal />
                    </CustomButton>
                </CustomDropdownMenuTrigger>
                <CustomDropdownMenuContent align="end" className="w-[200px]">
                    <CustomDropdownMenuLabel>Actions</CustomDropdownMenuLabel>
                    <CustomDropdownMenuGroup>
                        <CustomDropdownMenuItem>
                            Assign to...
                        </CustomDropdownMenuItem>
                        <CustomDropdownMenuItem>
                            Set due date...
                        </CustomDropdownMenuItem>
                        <CustomDropdownMenuSeparator />
                        <CustomDropdownMenuSub>
                            <CustomDropdownMenuSubTrigger>
                                Apply label
                            </CustomDropdownMenuSubTrigger>
                            <CustomDropdownMenuSubContent className="p-0">
                                <CustomCommand>
                                    <CustomCommandInput
                                        placeholder="Filter label..."
                                        autoFocus={true}
                                        className="h-9"
                                    />
                                    <CustomCommandList>
                                        <CustomCommandEmpty>
                                            No label found.
                                        </CustomCommandEmpty>
                                        <CustomCommandGroup>
                                            {labels.map((label) => (
                                                <CustomCommandItem
                                                    key={label}
                                                    value={label}
                                                    onSelect={(value) => {
                                                        setLabel(value);
                                                        setOpen(false);
                                                    }}
                                                >
                                                    {label}
                                                </CustomCommandItem>
                                            ))}
                                        </CustomCommandGroup>
                                    </CustomCommandList>
                                </CustomCommand>
                            </CustomDropdownMenuSubContent>
                        </CustomDropdownMenuSub>
                        <CustomDropdownMenuSeparator />
                        <CustomDropdownMenuItem className="text-red-600">
                            Delete
                            <CustomDropdownMenuShortcut>
                                ⌘⌫
                            </CustomDropdownMenuShortcut>
                        </CustomDropdownMenuItem>
                    </CustomDropdownMenuGroup>
                </CustomDropdownMenuContent>
            </CustomDropdownMenu>
        </div>
    );
}

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";

const languages = [
    { label: "English", value: "en" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Spanish", value: "es" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Japanese", value: "ja" },
    { label: "Korean", value: "ko" },
    { label: "Chinese", value: "zh" },
] as const;
const FormSchema = z.object({
    language: z.string(),
});
export function CustomComboboxFormDemo() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });
    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast("You submitted the following values", {
            description: (
                <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        });
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="language"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Language</FormLabel>
                            <CustomPopover>
                                <CustomPopoverTrigger asChild>
                                    <FormControl>
                                        <CustomButton
                                            variant="outline"
                                            className={cn(
                                                "w-[200px] justify-between",
                                                !field.value &&
                                                    "text-muted-foreground"
                                            )}
                                        >
                                            {field.value
                                                ? languages.find(
                                                      (language) =>
                                                          language.value ===
                                                          field.value
                                                  )?.label
                                                : "Select language"}
                                            <ChevronsUpDown className="opacity-50" />
                                        </CustomButton>
                                    </FormControl>
                                </CustomPopoverTrigger>
                                <CustomPopoverContent className="w-[200px] p-0">
                                    <CustomCommand>
                                        <CustomCommandInput
                                            placeholder="Search framework..."
                                            className="h-9"
                                        />
                                        <CustomCommandList>
                                            <CustomCommandEmpty>
                                                No framework found.
                                            </CustomCommandEmpty>
                                            <CustomCommandGroup>
                                                {languages.map((language) => (
                                                    <CustomCommandItem
                                                        value={language.label}
                                                        key={language.value}
                                                        onSelect={() => {
                                                            form.setValue(
                                                                "language",
                                                                language.value
                                                            );
                                                        }}
                                                    >
                                                        {language.label}
                                                        <Check
                                                            className={cn(
                                                                "ml-auto",
                                                                language.value ===
                                                                    field.value
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                    </CustomCommandItem>
                                                ))}
                                            </CustomCommandGroup>
                                        </CustomCommandList>
                                    </CustomCommand>
                                </CustomPopoverContent>
                            </CustomPopover>
                            <FormDescription>
                                This is the language that will be used in the
                                dashboard.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <CustomButton>Submit</CustomButton>
            </form>
        </Form>
    );
}
