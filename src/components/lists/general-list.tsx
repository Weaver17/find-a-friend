"use client";
import { Friend, Pagination } from "@/types/types";
import FriendCard from "../cards/friend-card";
import PaginationComponent from "../pagination/pagination";

type GeneralListProps = {
    friends: Friend[];
    pagination: Pagination | null;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
};

function GeneralList({ friends, pagination, page, setPage }: GeneralListProps) {
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
                <PaginationComponent
                    pagination={pagination}
                    page={page}
                    setPage={setPage}
                />
            )}
        </>
    );
}

export default GeneralList;
