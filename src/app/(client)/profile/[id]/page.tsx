"use client";
import { getUserById } from "@/actions/actions";
import { CustomButton } from "@/components/custom/c_button";
import {
    LoadingOverlay,
    SmallSpinner,
} from "@/components/custom/c_loading-spinner";
import GeneralList from "@/components/lists/general-list";
import { H1Custom, H3Custom, PCustom } from "@/components/typeography/custom";
import { useUserContext } from "@/contexts/user-context";
import { User } from "@/generated/prisma";
import { redirect, useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
    const [profileUser, setProfileUser] = useState<User | null>(null);
    const params = useParams<{ id: string }>();

    const {
        currentUser,
        isLoading,
        getSavedFriends,
        savedFriends,
        getSession,
    } = useUserContext();

    const router = useRouter();

    useEffect(() => {
        getSession();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        async function getUser() {
            await getUserById(params.id).then((data) => {
                if (currentUser?.id !== data?.id) {
                    router.push("/");
                }
                setProfileUser(data);
            });
        }

        getUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (profileUser) {
            getSavedFriends(profileUser);
        }
    }, [profileUser, getSavedFriends]);

    if (!currentUser) {
        return redirect("/signin");
    }

    if (!profileUser) {
        return <LoadingOverlay />;
    }

    return (
        <div className="client-page">
            <div className="border-b border-secondary pb-4 flex flex-col gap-4 w-full mx-auto">
                <H1Custom className="text-center font-special">
                    {isLoading ? <SmallSpinner /> : profileUser?.name}
                </H1Custom>
            </div>
            <div className="flex flex-col gap-8 py-4 lg:px-8">
                <div className="w-full flex flex-col gap-4 items-center">
                    {profileUser?.emailVerified === false ? (
                        <CustomButton>Verify Email</CustomButton>
                    ) : (
                        <PCustom>{profileUser?.email}</PCustom>
                    )}
                </div>
                <div className="w-full flex flex-col items-center gap-4">
                    <H3Custom>Saved Friends</H3Custom>
                    <GeneralList friends={savedFriends} />
                </div>
            </div>
        </div>
    );
}

export default Page;
