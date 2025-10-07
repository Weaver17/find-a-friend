"use client";
import { useEffect, useState } from "react";
import PetCard from "../cards/pet-card";
import { getLatestAnimals } from "@/lib/pet-api";
import { Friend } from "@/types/types";

function LatestList() {
    const [latestPets, setLatestPets] = useState<Friend[]>([]);

    useEffect(() => {
        const fetchLatestPets = async () => {
            await getLatestAnimals()
                .then((data) => {
                    setLatestPets(data);
                })
                .catch(console.error);
        };

        fetchLatestPets();
    }, []);

    return (
        <ul className="grid grid-cols-3 gap-4 lg:grid-cols-2">
            {latestPets.map((pet) => (
                <li key={pet.id}>
                    <PetCard pet={pet} />
                </li>
            ))}
        </ul>
    );
}

export default LatestList;
