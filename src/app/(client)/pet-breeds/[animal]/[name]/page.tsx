"use client";

import { LoadingOverlay } from "@/components/custom/c_loading-spinner";
import ListByBreed from "@/components/lists/list-by-breed";
import { H1Custom } from "@/components/typeography/custom";
import { getAnimalsOfBreed } from "@/lib/pet-api";
import { deslugify } from "@/lib/utils";
import { Friend } from "@/types/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
    const [friends, setFriends] = useState<Friend[]>([]);

    const params = useParams<{ animal: string; name: string }>();

    useEffect(() => {
        async function getFriends() {
            await getAnimalsOfBreed(params.animal, params.name).then((data) => {
                setFriends(data.animals);
            });
        }

        getFriends();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const breedName = deslugify(params.name);

    return (
        <div className="client-page">
            {friends?.length === null ? (
                <LoadingOverlay />
            ) : (
                <div className="flex flex-col gap-4 mt-6">
                    <H1Custom className="capitalize text-center font-header border-b pb-2">
                        {breedName}
                    </H1Custom>
                    <ListByBreed friends={friends} />
                </div>
            )}
        </div>
    );
}

export default Page;
