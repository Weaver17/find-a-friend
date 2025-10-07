"use client";
import { useEffect, useState } from "react";
import PetCard from "../cards/pet-card";
import { getLatestAnimals } from "@/lib/pet-api";
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
        <>
            {latestPets.length === 0 ? (
                <LoadingSpinner />
            ) : (
                <ul className="grid grid-cols-1 mx-auto gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {latestPets.map((pet) => (
                        <li key={pet.id}>
                            <PetCard pet={pet} />
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
