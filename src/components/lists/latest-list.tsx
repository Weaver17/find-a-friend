"use client";
import { useEffect, useState } from "react";
import { getLatestFriends } from "@/lib/pet-api";
import { Friend, Pagination } from "@/types/types";
import { LoadingSpinner } from "../custom/c_loading-spinner";
import FriendCard from "../cards/friend-card";
import PaginationComponent from "../pagination/pagination";

function LatestList() {
    const [latestFriends, setLatestFriends] = useState<Friend[]>([]);
    const [pagination, setPagination] = useState<Pagination | null>(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchLatestFriends = async () => {
            await getLatestFriends(page)
                .then((data) => {
                    setLatestFriends(data.animals);
                    setPagination(data.pagination);
                })
                .catch(console.error);
        };

        fetchLatestFriends();
    }, [page]);

    return (
        <>
            {latestFriends.length === 0 ? (
                <LoadingSpinner />
            ) : (
                <ul className="grid grid-cols-1 mx-auto gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {latestFriends.map((friend) => (
                        <li key={friend.id}>
                            <FriendCard friend={friend} />
                        </li>
                    ))}
                </ul>
            )}
            {pagination === null ? (
                <></>
            ) : (
                <PaginationComponent
                    pagination={pagination}
                    page={page}
                    setPage={setPage}
                />
            )}
        </>
    );
}

export default LatestList;
