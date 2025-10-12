import { CustomThemeBtn } from "@/components/theme/c_theme-btn";
import React from "react";

function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="relative">
            <div className="fixed top-4 left-4 z-50">
                <CustomThemeBtn />
            </div>
            {children}
        </main>
    );
}

export default AuthLayout;
