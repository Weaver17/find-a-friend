"use client";
import { CustomButton } from "@/components/custom/c_button";
import {
    LoadingSpinner,
    SmallSpinner,
} from "@/components/custom/c_loading-spinner";
import { H1Custom, H2Custom, H3Custom } from "@/components/typeography/custom";
import { getSingleAnimalType } from "@/lib/pet-api";
import { getScientificName, slugify } from "@/lib/utils";
import { AnimalType } from "@/types/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
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

        getType();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="client-page">
            <div className="flex flex-col items-center justify-center gap-4">
                {type === null ? (
                    <SmallSpinner />
                ) : (
                    <>
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
                    </>
                )}
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <H2Custom>Genders</H2Custom>
                {type === null ? (
                    <SmallSpinner />
                ) : (
                    <ul className="flex flex-col items-center gap-2 sm:gap-8 sm:flex-row">
                        {type?.genders.map((gender) => (
                            <li key={gender}>
                                <CustomButton size="lg" variant="link" asChild>
                                    <Link
                                        href={`/pet-types/${
                                            params.animal
                                        }/gender/${gender.toLowerCase()}`}
                                    >
                                        {gender}
                                    </Link>
                                </CustomButton>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className=" flex flex-col gap-8 mx-auto w-full lg:justify-evenly lg:flex-row">
                <div className="flex flex-col items-center gap-4">
                    {type?.coats.length === 0 ? (
                        <></>
                    ) : (
                        <H3Custom>Coats</H3Custom>
                    )}
                    {type?.coats.length === 0 ? (
                        <></>
                    ) : (
                        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {type?.coats.map((coat) => (
                                <li key={coat}>
                                    <CustomButton
                                        className="w-[200px] text-sm"
                                        size="lg"
                                        asChild
                                    >
                                        <Link
                                            href={`/pet-types/${
                                                params.animal
                                            }/coat/${coat.toLowerCase()}`}
                                        >
                                            {coat}
                                        </Link>
                                    </CustomButton>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    {type?.colors.length === 0 ? (
                        <></>
                    ) : (
                        <H3Custom>Colors</H3Custom>
                    )}

                    {type?.colors.length === 0 ? (
                        <></>
                    ) : (
                        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {type?.colors.map((color) => {
                                const colorSlug = slugify(color);

                                return (
                                    <li key={color}>
                                        <CustomButton
                                            className="w-[200px] text-sm"
                                            size="lg"
                                            asChild
                                        >
                                            <Link
                                                href={`/pet-types/${params.animal}/color/${colorSlug}`}
                                            >
                                                {color}
                                            </Link>
                                        </CustomButton>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Page;
