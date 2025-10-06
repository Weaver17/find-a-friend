import { CustomSidebarProvider } from "@/components/custom/c_sidebar";
import Header from "@/components/header/header";
import AppSidebar from "@/components/sidebar/app-sidebar";
import React from "react";

function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <CustomSidebarProvider className="flex flex-col">
            <AppSidebar />
            <main className="min-h-screen p-4 flex flex-col gap-2 md:gap-4 lg:gap-8">
                <Header />
                {children}
                FOOTER
            </main>
        </CustomSidebarProvider>
    );
}

export default ClientLayout;
