import React from "react";
import {
    CustomSidebar,
    CustomSidebarContent,
    CustomSidebarFooter,
    CustomSidebarHeader,
    CustomSidebarTrigger,
} from "../custom/c_sidebar";
import { CustomButton } from "../custom/c_button";

function AppSidebar() {
    return (
        <CustomSidebar>
            <CustomSidebarHeader className="text-start flex-row justify-between items-center py-6">
                Username
                <CustomSidebarTrigger />
            </CustomSidebarHeader>
            <CustomSidebarContent>Sidebar Content</CustomSidebarContent>
            <CustomSidebarFooter>
                <CustomButton
                    variant="ghost"
                    className="hover:bg-muted-light dark:hover:bg-muted-dark"
                >
                    Sign Out
                </CustomButton>
            </CustomSidebarFooter>
        </CustomSidebar>
    );
}

export default AppSidebar;
