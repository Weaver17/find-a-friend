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

function Navbar() {
    return (
        <nav className="bg-secondary rounded-sm border md:px-6 md:py-2 dark:text-background">
            <CustomNavigationMenu viewport={false} className="z-50">
                <CustomNavigationMenuList className="gap-2! md:gap-6!">
                    <CustomNavigationMenuItem>
                        <CustomNavigationMenuTrigger>
                            Animals
                        </CustomNavigationMenuTrigger>
                        <CustomNavigationMenuContent className="bg-secondary! z-50 w-[260px]  md:w-[360px]! dark:text-background">
                            <ul className="flex flex-col gap-2">
                                {ANIMAL_TYPES.map((animal) => (
                                    <li
                                        key={animal.slug}
                                        className="w-full flex gap-2 items-center"
                                    >
                                        <div className="my-1 flex items-center w-[30px] h-[30px] md:w-[40px] md:h-[40px]">
                                            <Image
                                                src={animal.icon}
                                                alt={animal.label}
                                                width={40}
                                                height={40}
                                                className=""
                                            />
                                        </div>

                                        <CustomNavigationMenuLink
                                            asChild
                                            className={customNavigationMenuTriggerStyle()}
                                        >
                                            <Link
                                                href={`/pet-types/${animal.slug}`}
                                                className="w-full text-xs md:text-base"
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
                        <CustomNavigationMenuContent className="bg-secondary! z-50 w-[260px] -left-20 md:w-[360px]! dark:text-background">
                            <ul className="flex flex-col gap-2">
                                {ANIMAL_BREEDS.map((animal) => (
                                    <li
                                        key={animal.slug}
                                        className="w-full flex gap-2 items-center"
                                    >
                                        <div className="my-1 flex items-center w-[30px] h-[30px] md:w-[40px] md:h-[40px]">
                                            <Image
                                                src={animal.icon}
                                                alt={animal.label}
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <CustomNavigationMenuLink
                                            asChild
                                            className={customNavigationMenuTriggerStyle()}
                                        >
                                            <Link
                                                // href={`/${animal.slug}`}
                                                href="/pet-breeds"
                                                className="w-full text-xs md:text-base"
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
                            <Link href="/orgs">Orgs</Link>
                        </CustomNavigationMenuLink>
                    </CustomNavigationMenuItem>
                </CustomNavigationMenuList>
            </CustomNavigationMenu>
        </nav>
    );
}

export default Navbar;
