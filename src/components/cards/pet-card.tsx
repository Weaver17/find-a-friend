"use client";
import { Heart } from "lucide-react";
import { CustomButton } from "../custom/c_button";
import {
    CustomCard,
    CustomCardContent,
    CustomCardDescription,
} from "../custom/c_card";
import { H3Custom, PCustom } from "../typeography/custom";
import { Friend } from "@/types/types";
import { getAnimalTypeIcon } from "@/lib/utils";
import Image from "next/image";
import images from "@/images/images";
import { CustomSeparator } from "../custom/c_separator";
import { useTheme } from "next-themes";

type PetCardProps = {
    pet: Friend;
};

function PetCard({ pet }: PetCardProps) {
    const { theme } = useTheme();

    const friendTypeIcon = getAnimalTypeIcon(pet.type);

    const friendBackupImage =
        theme === "dark" ? images.coming_soon_dark : images.coming_soon_light;

    return (
        <CustomCard className="overflow-hidden p-0 gap-1 w-[240px] h-[600px]">
            <CustomCardContent className="p-0 w-full  flex flex-col">
                <div className="w-full h-[400px]">
                    <Image
                        src={
                            pet?.primary_photo_cropped?.large ??
                            friendBackupImage
                        }
                        alt={pet.name}
                        height={400}
                        width={240}
                        className="w-[240px] h-[400px] object-cover"
                    />
                </div>
                <div className="p-2 flex flex-col h-[200px]">
                    <div className=" flex justify-between">
                        <H3Custom className="truncate">{pet.name}</H3Custom>
                        <CustomButton
                            variant="ghost"
                            size="icon-sm"
                            className="hover:bg-secondary/25"
                        >
                            <Heart className="text-secondary" />
                        </CustomButton>
                    </div>
                    <CustomSeparator />
                    <CustomCardDescription className="p-2 text-xs h-full flex flex-col gap-2 text-foreground">
                        {pet.breeds.secondary !== null ? (
                            <PCustom className="text-center">
                                {pet.breeds.primary} | {pet.breeds.secondary}
                            </PCustom>
                        ) : (
                            <PCustom className="text-center">
                                {pet.breeds.primary}
                            </PCustom>
                        )}
                        <div className="flex justify-between items-center">
                            <PCustom className="text-primary font-semibold dark:text-secondary">
                                {pet.gender}
                            </PCustom>
                            <PCustom className="text-primary font-semibold dark:text-secondary">
                                {pet.age}
                            </PCustom>
                            <PCustom className="text-primary font-semibold dark:text-secondary">
                                {pet.size}
                            </PCustom>
                        </div>
                        <div className="w-full mt-auto flex justify-between items-end">
                            <Image
                                src={friendTypeIcon}
                                alt={pet.type}
                                width={40}
                                height={40}
                            />
                            <PCustom>{pet.species}</PCustom>
                        </div>
                    </CustomCardDescription>
                </div>
            </CustomCardContent>
        </CustomCard>
    );
}

export default PetCard;
