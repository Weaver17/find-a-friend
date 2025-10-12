"use client";
import { useEffect, useState } from "react";
import { getLatestFriends } from "@/lib/pet-api";
import { Friend, Pagination } from "@/types/types";
import { LoadingSpinner } from "../custom/c_loading-spinner";
import {
    CustomPagination,
    CustomPaginationContent,
    CustomPaginationItem,
    CustomPaginationLink,
    CustomPaginationNext,
    CustomPaginationPrevious,
} from "../custom/c_pagination";
import FriendCard from "../cards/friend-card";

function LatestList() {
    const [latestFriends, setLatestFriends] = useState<Friend[]>([]);
    const [pagination, setPagination] = useState<Pagination | null>(null);
    const [page, setPage] = useState(1);

    const onNextClick = () => {
        setPage(page + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const onPreviousClick = () => {
        setPage(page - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

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
                <CustomPagination className="mt-12 font-header">
                    <CustomPaginationContent>
                        {/* previous button  */}
                        <CustomPaginationItem>
                            <CustomPaginationPrevious
                                onClick={onPreviousClick}
                            />
                        </CustomPaginationItem>

                        {/* previous number  */}
                        {pagination?.current_page &&
                        pagination?.current_page - 1 > 0 ? (
                            <CustomPaginationItem>
                                <CustomPaginationLink onClick={onPreviousClick}>
                                    {pagination?.current_page - 1}
                                </CustomPaginationLink>
                            </CustomPaginationItem>
                        ) : (
                            <> </>
                        )}
                        {/* current number  */}
                        <CustomPaginationItem>
                            <CustomPaginationLink href="#" isActive>
                                {pagination?.current_page}
                            </CustomPaginationLink>
                        </CustomPaginationItem>
                        {/* next number  */}
                        {pagination?.current_page &&
                        pagination?.current_page + 1 <
                            pagination?.total_pages ? (
                            <CustomPaginationItem>
                                <CustomPaginationLink onClick={onNextClick}>
                                    {pagination.current_page + 1}
                                </CustomPaginationLink>
                            </CustomPaginationItem>
                        ) : (
                            <> </>
                        )}
                        {/* next button  */}
                        <CustomPaginationItem>
                            <CustomPaginationNext onClick={onNextClick} />
                        </CustomPaginationItem>
                    </CustomPaginationContent>
                </CustomPagination>
            )}
        </>
    );
}

export default LatestList;
