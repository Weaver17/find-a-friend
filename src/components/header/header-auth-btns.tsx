import React from "react";
import { CustomButton } from "../custom/c_button";

function HeaderAuthBtns() {
    return (
        <div className="flex gap-2 items-center">
            <CustomButton type="button" className="text-accent!">
                Sign In
            </CustomButton>
            <CustomButton type="button">Sign Up</CustomButton>
        </div>
    );
}

export default HeaderAuthBtns;
