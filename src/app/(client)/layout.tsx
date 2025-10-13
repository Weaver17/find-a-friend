import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import React from "react";

function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex flex-col gap-2 md:gap-4 lg:gap-8">
            <Header />
            {children}
            <div className="border-t-4 border-primary bg-foreground dark:bg-background mt-auto">
                <Footer />
            </div>
        </div>
    );
}

export default ClientLayout;
