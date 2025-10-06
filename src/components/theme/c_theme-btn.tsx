"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { CustomButton } from "../custom/c_button";
import {
    CustomDropdownMenu,
    CustomDropdownMenuTrigger,
    CustomDropdownMenuContent,
    CustomDropdownMenuItem,
} from "../custom/c_dropdown-menu";

export function CustomThemeBtn() {
    const { setTheme, theme } = useTheme();

    const onThemeClick = () => {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };

    return (
        <CustomButton
            variant="outline"
            size="icon"
            className="hover:bg-muted-light! dark:hover:bg-muted-dark/50!"
            onClick={onThemeClick}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
        </CustomButton>
    );
}
