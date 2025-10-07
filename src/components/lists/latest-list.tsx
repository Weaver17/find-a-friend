"use client";
import { useEffect, useState } from "react";
import { getLatestFriends } from "@/lib/pet-api";
import { Friend } from "@/types/types";
import { LoadingSpinner } from "../custom/c_loading-spinner";
import {
    CustomPagination,
    CustomPaginationContent,
    CustomPaginationEllipsis,
    CustomPaginationItem,
    CustomPaginationLink,
    CustomPaginationNext,
    CustomPaginationPrevious,
} from "../custom/c_pagination";
import FriendCard from "../cards/friend-card";

function LatestList() {
    const [latestFriends, setLatestFriends] = useState<Friend[]>([]);

    useEffect(() => {
        const fetchLatestFriends = async () => {
            await getLatestFriends()
                .then((data) => {
                    setLatestFriends(data);
                })
                .catch(console.error);
        };

        fetchLatestFriends();
    }, []);

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
            <CustomPagination className="mt-12">
                <CustomPaginationContent>
                    <CustomPaginationItem>
                        <CustomPaginationPrevious />
                    </CustomPaginationItem>
                    <CustomPaginationItem>
                        <CustomPaginationLink href="#">1</CustomPaginationLink>
                    </CustomPaginationItem>
                    <CustomPaginationItem>
                        <CustomPaginationLink href="#" isActive>
                            2
                        </CustomPaginationLink>
                    </CustomPaginationItem>
                    <CustomPaginationItem>
                        <CustomPaginationLink href="#">3</CustomPaginationLink>
                    </CustomPaginationItem>
                    <CustomPaginationItem>
                        <CustomPaginationEllipsis />
                    </CustomPaginationItem>
                    <CustomPaginationItem>
                        <CustomPaginationNext href="#" />
                    </CustomPaginationItem>
                </CustomPaginationContent>
            </CustomPagination>
        </>
    );
}

export default LatestList;
