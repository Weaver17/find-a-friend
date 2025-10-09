import { Friend } from "@/types/types";
import FriendCard from "../cards/friend-card";

type GeneralListProps = {
    friends: Friend[];
};

function GeneralList({ friends }: GeneralListProps) {
    return (
        <ul className="grid grid-cols-1 mx-auto gap-4 md:grid-cols-2 lg:grid-cols-4">
            {friends.map((friend) => (
                <li key={friend.id}>
                    <FriendCard friend={friend} />
                </li>
            ))}
        </ul>
    );
}

export default GeneralList;
