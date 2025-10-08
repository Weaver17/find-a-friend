import { CheckIcon, XIcon, StarIcon } from "lucide-react";
import React from "react";
import { H4Custom, PCustom } from "../typeography/custom";
import { Friend } from "@/types/types";

type AboutPetProps = {
    friend: Friend;
};

function AboutPet({ friend }: AboutPetProps) {
    return (
        <>
            <H4Custom className="text-center">About Me</H4Custom>
            <div className="flex flex-col gap-4 justify-center mx-auto md:flex-row">
                <div className="flex flex-col gap-0  text-xs sm:text-sm md:text-base">
                    {friend?.attributes.declawed !== null ? (
                        <PCustom>{friend?.attributes.declawed} </PCustom>
                    ) : (
                        <></>
                    )}
                    {friend?.attributes.house_trained === true ? (
                        <div className="flex gap-2 items-center">
                            <CheckIcon className="size-4 sm:size-6 md:size-8" />
                            <PCustom>I am house trained</PCustom>
                        </div>
                    ) : (
                        <div className="flex gap-2 items-center">
                            <XIcon />
                            <PCustom>I have not been house trained</PCustom>
                        </div>
                    )}
                    {friend?.attributes.shots_current === true ? (
                        <div className="flex gap-2 items-center">
                            <CheckIcon className="size-4 sm:size-6 md:size-8" />
                            <PCustom>My shots are up to date</PCustom>
                        </div>
                    ) : (
                        <div className="flex gap-2 items-center">
                            <XIcon />
                            <PCustom>My shots are not up to date</PCustom>
                        </div>
                    )}
                    {friend?.attributes.spayed_neutered === true ? (
                        <div className="flex gap-2 items-center">
                            <CheckIcon className="size-4 sm:size-6 md:size-8" />
                            <PCustom>I have been spayed/neutered</PCustom>
                        </div>
                    ) : (
                        <div className="flex gap-2 items-center">
                            <XIcon />
                            <PCustom>I have not been spayed/neutered</PCustom>
                        </div>
                    )}
                    {friend?.attributes.special_needs === true ? (
                        <div className="flex gap-2 items-center">
                            <StarIcon className="size-4 sm:size-6 md:size-8" />
                            <PCustom>
                                I have needs that require special
                                attention/training
                            </PCustom>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="flex flex-col gap-0  text-xs sm:text-sm md:text-base">
                    {friend?.environment.cats === true ? (
                        <div className="flex gap-2 items-center">
                            <CheckIcon className="size-4 sm:size-6 md:size-8" />
                            <PCustom> I am good with cats</PCustom>
                        </div>
                    ) : (
                        <div className="flex gap-2 items-center">
                            <XIcon className="size-4 sm:size-6 md:size-8" />
                            <PCustom>I do not like cats</PCustom>
                        </div>
                    )}
                    {friend?.environment?.children === true ? (
                        <div className="flex gap-2 items-center">
                            <CheckIcon className="size-4 sm:size-6 md:size-8" />
                            <PCustom> I am good with kids</PCustom>
                        </div>
                    ) : (
                        <div className="flex gap-2 items-center">
                            <XIcon className="size-4 sm:size-6 md:size-8" />
                            <PCustom>I prefer a house without kids</PCustom>
                        </div>
                    )}
                    {friend?.environment?.dogs === true ? (
                        <div className="flex gap-2 items-center">
                            <CheckIcon className="size-4 sm:size-6 md:size-8" />
                            <PCustom> I am good with dogs</PCustom>
                        </div>
                    ) : (
                        <div className="flex gap-2 items-center">
                            <XIcon className="size-4 sm:size-6 md:size-8" />
                            <PCustom>I do not like dogs</PCustom>
                        </div>
                    )}
                </div>
            </div>
            <ul className="flex flex-col items-center justify-center  text-xs sm:text-sm md:text-base">
                {friend?.tags?.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        </>
    );
}

export default AboutPet;
