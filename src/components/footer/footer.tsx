import React from "react";
import Logo from "../header/logo";
import Link from "next/link";
import FooterAuthBtns from "./footer-auth-btns";

function Footer() {
    return (
        <div className="relative h-[400px] flex gap-4 justify-between p-12 max-w-[1380px] mx-auto">
            <Logo />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-300 text-center text-xs font-semibold">
                Developed by Andrew Weaver in 2025 with the help of{" "}
                <Link
                    className="text-secondary hover:underline hover:underline-offset-2"
                    href="https://www.petfinder.com/"
                    target="_blank"
                >
                    petfinder.com
                </Link>
            </div>

            <FooterAuthBtns />
        </div>
    );
}

export default Footer;
