import React from "react";
import {
    CustomNavigationMenu,
    CustomNavigationMenuItem,
    CustomNavigationMenuLink,
    CustomNavigationMenuList,
    CustomNavigationMenuTrigger,
    customNavigationMenuTriggerStyle,
} from "../custom/c_navigation-menu";
import Link from "next/link";

function Navbar() {
    return (
        <nav className="bg-secondary rounded-sm px-6 py-2 border">
            <CustomNavigationMenu viewport={false}>
                <CustomNavigationMenuList className="gap-6">
                    <CustomNavigationMenuItem>
                        <CustomNavigationMenuLink
                            asChild
                            className={customNavigationMenuTriggerStyle()}
                        >
                            <Link href="/">Search</Link>
                        </CustomNavigationMenuLink>
                    </CustomNavigationMenuItem>
                    <CustomNavigationMenuItem>
                        <CustomNavigationMenuTrigger>
                            Animals
                        </CustomNavigationMenuTrigger>
                    </CustomNavigationMenuItem>
                    <CustomNavigationMenuItem>
                        <CustomNavigationMenuTrigger>
                            Breeds
                        </CustomNavigationMenuTrigger>
                    </CustomNavigationMenuItem>
                    <CustomNavigationMenuItem>
                        <CustomNavigationMenuLink
                            asChild
                            className={customNavigationMenuTriggerStyle()}
                        >
                            <Link href="/">Orgs</Link>
                        </CustomNavigationMenuLink>
                    </CustomNavigationMenuItem>
                </CustomNavigationMenuList>
            </CustomNavigationMenu>
        </nav>
    );
}

export default Navbar;
