"use client";

import { LoadingOverlay } from "@/components/custom/c_loading-spinner";
import GeneralList from "@/components/lists/general-list";
import { H1Custom } from "@/components/typeography/custom";
import { getAnimalsByTypeAndGender } from "@/lib/pet-api";
import { deslugify } from "@/lib/utils";
import { Friend, Pagination } from "@/types/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
    const [friends, setFriends] = useState<Friend[]>([]);
    const [pagination, setPagination] = useState<Pagination | null>(null);
    const [page, setPage] = useState(1);

    const params = useParams<{ animal: string; gender: string }>();

    useEffect(() => {
        async function getFriends() {
            await getAnimalsByTypeAndGender(
                params.animal,
                params.gender,
                page
            ).then((data) => {
                setFriends(data.animals);
                setPagination(data.pagination);
            });
        }

        getFriends();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const typeTitle = deslugify(params.animal);

    return (
        <div className="client-page">
            {friends === null ? (
                <LoadingOverlay />
            ) : (
                <div className="flex flex-col gap-4">
                    <H1Custom className="capitalize font-header text-center border-b pb-2">{`${params.gender} ${typeTitle}s`}</H1Custom>
                    <GeneralList
                        friends={friends}
                        pagination={pagination}
                        setPage={setPage}
                        page={page}
                    />
                </div>
            )}
        </div>
    );
}

export default Page;
