import React from "react";
import PetCard from "../cards/pet-card";

function LatestList() {
    return (
        <ul className="grid grid-cols-3 gap-4">
            <li>
                <PetCard />
            </li>
            <li>
                <PetCard />
            </li>
            <li>
                <PetCard />
            </li>
        </ul>
    );
}

export default LatestList;
