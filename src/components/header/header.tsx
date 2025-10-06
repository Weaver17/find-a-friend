import React from "react";
import Logo from "./logo";
import { CustomThemeBtn } from "../theme/c_theme-btn";
import HeaderAuthBtns from "./header-auth-btns";
import Navbar from "./navbar";

function Header() {
    return (
        <header className="relative flex justify-between items-center gap-6 py-4">
            <div className="flex gap-2 items-center">
                <span>SideBar</span>
                <CustomThemeBtn />
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col gap-2 justify-center items-center">
                <Logo />
                <Navbar />
            </div>
            <div>
                <HeaderAuthBtns />
            </div>
        </header>
    );
}

export default Header;
