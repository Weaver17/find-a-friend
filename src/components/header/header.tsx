import Logo from "./logo";
import { CustomThemeBtn } from "../theme/c_theme-btn";
import HeaderAuthBtns from "./header-auth-btns";
import Navbar from "./navbar";

function Header() {
    return (
        <header className="relative p-4 flex font-header max-w-[1380px] mb-0 w-full mx-auto justify-between sm:items-center sm:gap-6 md:mb-4 lg:mb-10">
            <div className="flex pt-24 gap-2 items-center sm:pt-0">
                <CustomThemeBtn />
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col gap-1 justify-center items-center md:gap-4 lg:gap-8">
                <Logo />
                <Navbar />
            </div>
            <div className="pt-24 sm:pt-0">
                <HeaderAuthBtns />
            </div>
        </header>
    );
}

export default Header;
