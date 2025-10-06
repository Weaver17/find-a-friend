"use client";

import * as React from "react";
import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import { CustomButton } from "./c_button";
import { CustomCalendar } from "./c_calendar";
import { CustomInput } from "./c_input";
import { CustomLabel } from "./c_label";
import {
    CustomPopover,
    CustomPopoverTrigger,
    CustomPopoverContent,
} from "./c_popover";

export function CustomDatePickerDoB() {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    return (
        <div className="flex flex-col gap-3">
            <CustomLabel htmlFor="date" className="px-1">
                Date of birth
            </CustomLabel>
            <CustomPopover open={open} onOpenChange={setOpen}>
                <CustomPopoverTrigger asChild>
                    <CustomButton
                        variant="outline"
                        id="date"
                        className="w-48 justify-between font-normal"
                    >
                        {date ? date.toLocaleDateString() : "Select date"}
                        <ChevronDownIcon />
                    </CustomButton>
                </CustomPopoverTrigger>
                <CustomPopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                >
                    <CustomCalendar
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                            setDate(date);
                            setOpen(false);
                        }}
                    />
                </CustomPopoverContent>
            </CustomPopover>
        </div>
    );
}

function formatDate(date: Date | undefined) {
    if (!date) {
        return "";
    }
    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}
function isValidDate(date: Date | undefined) {
    if (!date) {
        return false;
    }
    return !isNaN(date.getTime());
}
export function CustomDatePickerInput() {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(
        new Date("2025-06-01")
    );
    const [month, setMonth] = React.useState<Date | undefined>(date);
    const [value, setValue] = React.useState(formatDate(date));
    return (
        <div className="flex flex-col gap-3">
            <CustomLabel htmlFor="date" className="px-1">
                Subscription Date
            </CustomLabel>
            <div className="relative flex gap-2">
                <CustomInput
                    id="date"
                    value={value}
                    placeholder="June 01, 2025"
                    className="bg-background pr-10"
                    onChange={(e) => {
                        const date = new Date(e.target.value);
                        setValue(e.target.value);
                        if (isValidDate(date)) {
                            setDate(date);
                            setMonth(date);
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "ArrowDown") {
                            e.preventDefault();
                            setOpen(true);
                        }
                    }}
                />
                <CustomPopover open={open} onOpenChange={setOpen}>
                    <CustomPopoverTrigger asChild>
                        <CustomButton
                            id="date-picker"
                            variant="ghost"
                            className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                        >
                            <CalendarIcon className="size-3.5" />
                            <span className="sr-only">Select date</span>
                        </CustomButton>
                    </CustomPopoverTrigger>
                    <CustomPopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="end"
                        alignOffset={-8}
                        sideOffset={10}
                    >
                        <CustomCalendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            month={month}
                            onMonthChange={setMonth}
                            onSelect={(date) => {
                                setDate(date);
                                setValue(formatDate(date));
                                setOpen(false);
                            }}
                        />
                    </CustomPopoverContent>
                </CustomPopover>
            </div>
        </div>
    );
}

export function CustomDatePickerDateAndTime() {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    return (
        <div className="flex gap-4">
            <div className="flex flex-col gap-3">
                <CustomLabel htmlFor="date-picker" className="px-1">
                    Date
                </CustomLabel>
                <CustomPopover open={open} onOpenChange={setOpen}>
                    <CustomPopoverTrigger asChild>
                        <CustomButton
                            variant="outline"
                            id="date-picker"
                            className="w-32 justify-between font-normal"
                        >
                            {date ? date.toLocaleDateString() : "Select date"}
                            <ChevronDownIcon />
                        </CustomButton>
                    </CustomPopoverTrigger>
                    <CustomPopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="start"
                    >
                        <CustomCalendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            onSelect={(date) => {
                                setDate(date);
                                setOpen(false);
                            }}
                        />
                    </CustomPopoverContent>
                </CustomPopover>
            </div>
            <div className="flex flex-col gap-3">
                <CustomLabel htmlFor="time-picker" className="px-1">
                    Time
                </CustomLabel>
                <CustomInput
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    className="bg-background appearance-none [&::-webkit-Customcalendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
            </div>
        </div>
    );
}
