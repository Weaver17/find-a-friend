import Header from "@/components/header/header";
import React from "react";

function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen p-4 flex flex-col gap-2 md:gap-4 lg:gap-8">
            <Header />
            {children}
            FOOTER
        </div>
    );
}

export default ClientLayout;
