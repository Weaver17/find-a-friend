"use client";

import { LoadingOverlay } from "@/components/custom/c_loading-spinner";
import GeneralList from "@/components/lists/general-list";
import { H1Custom } from "@/components/typeography/custom";
import { getAnimalsByTypeAndCoat } from "@/lib/pet-api";
import { Friend } from "@/types/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
    const [friends, setFriends] = useState<Friend[]>([]);

    const params = useParams<{ animal: string; coat: string }>();

    useEffect(() => {
        async function getFriends() {
            await getAnimalsByTypeAndCoat(params.animal, params.coat).then(
                (data) => {
                    setFriends(data.animals);
                }
            );
        }

        getFriends();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="client-page">
            {friends === null ? (
                <LoadingOverlay />
            ) : (
                <div className="flex flex-col gap-4">
                    <H1Custom className="capitalize font-header text-center border-b pb-2">
                        Coat: {`${params.coat}`}
                    </H1Custom>
                    <GeneralList friends={friends} />
                </div>
            )}
        </div>
    );
}

export default Page;
