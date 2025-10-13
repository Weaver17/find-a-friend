"use client";
import { useUserContext } from "@/contexts/user-context";
import { CustomButton } from "../custom/c_button";
import Link from "next/link";
import { useEffect } from "react";
import { User } from "lucide-react";

function HeaderAuthBtns() {
    const { isLoggedIn, logout, currentUser, getSession } = useUserContext();

    const onSignOutClick = () => {
        logout();
    };

    useEffect(() => {
        getSession();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex gap-0.5 items-center md:gap-2">
            {isLoggedIn ? (
                <>
                    <CustomButton
                        type="button"
                        className="text-accent!"
                        asChild
                    >
                        <Link href={`/profile/${currentUser?.id}`}>
                            <User />
                        </Link>
                    </CustomButton>
                    <CustomButton
                        onClick={onSignOutClick}
                        type="button"
                        className="text-accent!"
                    >
                        Sign Out
                    </CustomButton>
                </>
            ) : (
                <>
                    <CustomButton
                        type="button"
                        className="text-accent!"
                        asChild
                    >
                        <Link href="/signin"> Sign In</Link>
                    </CustomButton>
                    <CustomButton type="button" asChild>
                        <Link href="/signup">Sign Up</Link>
                    </CustomButton>
                </>
            )}
        </div>
    );
}

export default HeaderAuthBtns;
