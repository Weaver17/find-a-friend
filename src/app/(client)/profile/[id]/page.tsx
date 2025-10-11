"use client";
import { getUserById } from "@/actions/actions";
import { CustomButton } from "@/components/custom/c_button";
import {
    LoadingOverlay,
    SmallSpinner,
} from "@/components/custom/c_loading-spinner";
import { H1Custom, H3Custom, PCustom } from "@/components/typeography/custom";
import { useUserContext } from "@/contexts/user-context";
import { User } from "@/generated/prisma";
import { redirect, useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
    const [profileUser, setProfileUser] = useState<User | null>(null);
    const params = useParams<{ id: string }>();

    const { currentUser, isLoading } = useUserContext();

    const router = useRouter();

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
            <div className="flex flex-col gap-12 py-4 lg:px-8 lg:flex-row">
                <div className="w-full flex flex-col gap-4 items-center min-h-[300px] lg:w-1/4">
                    <PCustom>{profileUser?.email}</PCustom>
                    {profileUser?.emailVerified === false ? (
                        <CustomButton>Verify Email</CustomButton>
                    ) : (
                        <></>
                    )}
                    <CustomButton className="mt-auto" variant="outline">
                        Sign Out
                    </CustomButton>
                </div>
                <div className="w-full flex flex-col gap-4 lg:w-3/4">
                    <H3Custom>Saved Friends</H3Custom>
                </div>
            </div>
        </div>
    );
}

export default Page;
