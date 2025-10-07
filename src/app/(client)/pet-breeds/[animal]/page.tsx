"use client";
import { CustomButton } from "@/components/custom/c_button";
import { LoadingSpinner } from "@/components/custom/c_loading-spinner";
import { H1Custom, H2Custom, H3Custom } from "@/components/typeography/custom";
import { ALPHABET } from "@/lib/constants";
import { getSingleAnimalBreeds, getSingleAnimalType } from "@/lib/pet-api";
import { getScientificName } from "@/lib/utils";
import { AnimalType, Breed } from "@/types/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
    const [breeds, setBreeds] = useState<Breed[] | null>(null);
    const [type, setType] = useState<AnimalType | null>(null);

    const params = useParams<{ animal: string }>();

    const scientificName = getScientificName(params.animal);

    useEffect(() => {
        async function getType() {
            await getSingleAnimalType(params.animal).then(
                (data: AnimalType) => {
                    setType(data);
                }
            );
        }

        async function getBreeds() {
            await getSingleAnimalBreeds(params.animal).then((data: Breed[]) => {
                setBreeds(data);
            });
        }

        getBreeds();
        getType();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="client-page">
            <div className="flex flex-col items-center justify-center gap-4">
                <H1Custom className="">{type?.name}</H1Custom>

                {scientificName === "N/A" ? (
                    <></>
                ) : (
                    <div className="py-4 px-8 bg-accent/40 rounded-sm">
                        <span className="text-muted-dark dark:text-muted-light">
                            {scientificName}
                        </span>
                    </div>
                )}
            </div>
            <div className="flex flex-col items-center gap-12">
                <div>
                    <H2Custom>Breeds</H2Custom>
                </div>
                <div className="text-sm text-muted-dark">
                    <ul
                        id="alphabet-list"
                        className="flex flex-no-wrap justify-center gap-4 max-w-[1100px]"
                    >
                        {ALPHABET.map((letter) => (
                            <li key={letter}>
                                <Link
                                    href={`#letter-${letter.toLowerCase()}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const element = document.getElementById(
                                            `letter-${letter.toLowerCase()}`
                                        );
                                        if (element) {
                                            element.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                        }
                                    }}
                                >
                                    <CustomButton
                                        variant="link"
                                        className="p-0"
                                    >
                                        {letter}
                                    </CustomButton>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {breeds === null ? (
                    <LoadingSpinner />
                ) : (
                    "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => {
                        const breedsForLetter = breeds.filter((breed) =>
                            breed.name.toLowerCase().startsWith(letter)
                        );
                        if (breedsForLetter.length === 0) {
                            return null;
                        }
                        return (
                            <div
                                key={letter}
                                id={`letter-${letter}`}
                                className="flex flex-col items-center gap-4"
                            >
                                <H3Custom className="text-muted-dark dark:text-muted-light">
                                    {letter.toUpperCase()}
                                </H3Custom>
                                <ul className="flex flex-wrap justify-center gap-4 max-w-[1100px]">
                                    {breedsForLetter.map((breed) => (
                                        <li key={breed.name}>
                                            <CustomButton size="lg" asChild>
                                                <Link href="#">
                                                    {breed.name}
                                                </Link>
                                            </CustomButton>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default Page;
