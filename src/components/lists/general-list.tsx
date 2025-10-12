"use client";
import { Friend, Pagination } from "@/types/types";
import FriendCard from "../cards/friend-card";
import {
    CustomPagination,
    CustomPaginationContent,
    CustomPaginationItem,
    CustomPaginationPrevious,
    CustomPaginationLink,
    CustomPaginationNext,
} from "../custom/c_pagination";

type GeneralListProps = {
    friends: Friend[];
    pagination: Pagination | null;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
};

function GeneralList({ friends, pagination, page, setPage }: GeneralListProps) {
    const onNextClick = () => {
        setPage(page + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const onPreviousClick = () => {
        setPage(page - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <ul className="grid grid-cols-1 mx-auto gap-4 md:grid-cols-2 lg:grid-cols-4">
                {friends.map((friend) => (
                    <li key={friend.id}>
                        <FriendCard friend={friend} />
                    </li>
                ))}
            </ul>

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
                        pagination?.current_page + 1 <=
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

export default GeneralList;
