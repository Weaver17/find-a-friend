"use client";

import images from "@/images/images";
import { useTheme } from "next-themes";
import Image from "next/image";

function Logo() {
    const { theme } = useTheme();

    return (
        <div className="w-[100px] h-[25px] lg:w-[400px] lg:h-[75px]">
            {theme === "dark" ? (
                <Image
                    src={images.dark_logo}
                    alt="Find A Friend"
                    width={400}
                    height={75}
                />
            ) : (
                <Image
                    src={images.main_logo}
                    alt="Find A Friend"
                    width={400}
                    height={75}
                />
            )}
        </div>
    );
}

export default Logo;
