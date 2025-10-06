import React from "react";
import {
    CustomNavigationMenu,
    CustomNavigationMenuContent,
    CustomNavigationMenuItem,
    CustomNavigationMenuLink,
    CustomNavigationMenuList,
    CustomNavigationMenuTrigger,
    customNavigationMenuTriggerStyle,
} from "../custom/c_navigation-menu";
import Link from "next/link";
import { ANIMAL_BREEDS, ANIMAL_TYPES } from "@/lib/constants";
import Image from "next/image";
import { whiteIcons } from "@/images/icons";

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
                        <CustomNavigationMenuContent className="bg-secondary! w-[360px]! ">
                            <ul className="flex flex-col gap-2">
                                {ANIMAL_TYPES.map((animal) => (
                                    <li
                                        key={animal.slug}
                                        className="w-full flex gap-2 items-center"
                                    >
                                        <Image
                                            src={animal.icon}
                                            alt={animal.label}
                                            width={40}
                                            height={40}
                                        />
                                        <CustomNavigationMenuLink
                                            asChild
                                            className={customNavigationMenuTriggerStyle()}
                                        >
                                            <Link
                                                href={`/${animal.slug}`}
                                                className="w-full"
                                            >
                                                Browse {animal.label}
                                            </Link>
                                        </CustomNavigationMenuLink>
                                    </li>
                                ))}
                            </ul>
                        </CustomNavigationMenuContent>
                    </CustomNavigationMenuItem>
                    <CustomNavigationMenuItem>
                        <CustomNavigationMenuTrigger>
                            Breeds
                        </CustomNavigationMenuTrigger>
                        <CustomNavigationMenuContent className="bg-secondary! w-[360px]! ">
                            <ul className="flex flex-col gap-2">
                                {ANIMAL_BREEDS.map((animal) => (
                                    <li
                                        key={animal.slug}
                                        className="w-full flex gap-2 items-center"
                                    >
                                        <Image
                                            src={animal.icon}
                                            alt={animal.label}
                                            width={40}
                                            height={40}
                                        />
                                        <CustomNavigationMenuLink
                                            asChild
                                            className={customNavigationMenuTriggerStyle()}
                                        >
                                            <Link
                                                href={`/${animal.slug}`}
                                                className="w-full"
                                            >
                                                {animal.label} Breeds
                                            </Link>
                                        </CustomNavigationMenuLink>
                                    </li>
                                ))}
                            </ul>
                        </CustomNavigationMenuContent>
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
