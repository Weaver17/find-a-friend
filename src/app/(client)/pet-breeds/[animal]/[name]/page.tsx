"use client";

import { LoadingOverlay } from "@/components/custom/c_loading-spinner";
import GeneralList from "@/components/lists/general-list";
import { H1Custom } from "@/components/typeography/custom";
import { getAnimalsOfBreed } from "@/lib/pet-api";
import { deslugify } from "@/lib/utils";
import { Friend, Pagination } from "@/types/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
    const [friends, setFriends] = useState<Friend[]>([]);
    const [pagination, setPagination] = useState<Pagination | null>(null);
    const [page, setPage] = useState(1);

    const params = useParams<{ animal: string; name: string }>();

    useEffect(() => {
        async function getFriends() {
            await getAnimalsOfBreed(params.animal, params.name, page).then(
                (data) => {
                    setFriends(data.animals);
                    setPagination(data.pagination);
                }
            );
        }

        getFriends();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

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
                    <GeneralList
                        friends={friends}
                        pagination={pagination}
                        page={page}
                        setPage={setPage}
                    />
                </div>
            )}
        </div>
    );
}

export default Page;
