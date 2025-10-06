"use client";

import { CustomButton } from "../custom/c_button";
import { Eye, EyeClosed } from "lucide-react";

type ShowPasswordBtnProps = {
    showPassword: boolean;
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

function ShowPasswordBtn({
    showPassword,
    setShowPassword,
}: ShowPasswordBtnProps) {
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <CustomButton
            type="button"
            size="icon-sm"
            variant="ghost"
            className="absolute top-[25px] right-2 text-foreground/25 hover:bg-transparent dark:hover:bg-transparent"
            onClick={toggleShowPassword}
        >
            {showPassword ? <Eye /> : <EyeClosed />}
        </CustomButton>
    );
}

export default ShowPasswordBtn;
