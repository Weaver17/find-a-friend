"use client";

import {
    LoadingOverlay,
    LoadingSpinner,
} from "@/components/custom/c_loading-spinner";
import GeneralList from "@/components/lists/general-list";
import { H1Custom } from "@/components/typeography/custom";
import { getAnimalsByOrg, getOrgById } from "@/lib/pet-api";
import { Friend, Org, Pagination } from "@/types/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
    const [friends, setFriends] = useState<Friend[] | null>([]);
    const [pagination, setPagination] = useState<Pagination | null>(null);
    const [page, setPage] = useState(1);
    const [org, setOrg] = useState<Org | null>(null);

    const params = useParams<{ id: string }>();

    useEffect(() => {
        async function getOrg() {
            await getOrgById(params.id).then((data) => {
                setOrg(data);
            });
        }

        getOrg();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        async function getFriends() {
            await getAnimalsByOrg(params.id, page).then((data) => {
                setFriends(data.animals);
                setPagination(data.pagination);
            });
        }
        getFriends();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <div className="client-page">
            {org === null ? (
                <LoadingOverlay />
            ) : (
                <div className="flex flex-col gap-4">
                    <H1Custom className="text-center font-header border-b pb-4">
                        Friends of {org?.name}
                    </H1Custom>
                    {friends === null ? (
                        <LoadingSpinner />
                    ) : (
                        <GeneralList
                            friends={friends as unknown as Friend[]}
                            pagination={pagination}
                            page={page}
                            setPage={setPage}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

export default Page;
