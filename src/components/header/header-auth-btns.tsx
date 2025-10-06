import React from "react";
import { CustomButton } from "../custom/c_button";
import Link from "next/link";

function HeaderAuthBtns() {
    return (
        <div className="flex gap-2 items-center">
            <CustomButton type="button" className="text-accent!" asChild>
                <Link href="/signin"> Sign In</Link>
            </CustomButton>
            <CustomButton type="button" asChild>
                <Link href="/signup">Sign Up</Link>
            </CustomButton>
        </div>
    );
}

export default HeaderAuthBtns;
