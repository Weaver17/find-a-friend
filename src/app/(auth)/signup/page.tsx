import { CustomSignupForm } from "@/components/auth/c_signup-form";
import { CustomThemeBtn } from "@/components/theme/c_theme-btn";
import React from "react";

function Page() {
    return (
        <div className="relative flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="fixed top-4 right-4 z-50">
                <CustomThemeBtn />
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2">
                <CustomSignupForm />
            </div>
        </div>
    );
}

export default Page;
