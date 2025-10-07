import { Heart } from "lucide-react";
import { CustomButton } from "../custom/c_button";
import {
    CustomCard,
    CustomCardHeader,
    CustomCardContent,
    CustomCardDescription,
    CustomCardFooter,
} from "../custom/c_card";
import { H3Custom, LargeCustom, PCustom } from "../typeography/custom";
import { Friend } from "@/types/types";
import { getAnimalTypeIcon } from "@/lib/utils";
import Image from "next/image";
import { CustomAspectRatio } from "../custom/c_aspect-ratio";
import images from "@/images/images";
import { CustomSeparator } from "../custom/c_separator";

type PetCardProps = {
    pet: Friend;
};

function PetCard({ pet }: PetCardProps) {
    const friendTypeIcon = getAnimalTypeIcon(pet.type);

    return (
        <CustomCard className="overflow-hidden p-0 gap-1 w-[320px] h-[400px] lg:w-[550px] lg:flex-row">
            <CustomCardContent className="pl-0 w-full flex flex-row gap-4">
                <div className="w-1/2 h-full">
                    <CustomAspectRatio
                        ratio={10 / 16}
                        className="w-full h-full"
                    >
                        <Image
                            src={
                                pet?.primary_photo_cropped?.large ??
                                images.paw_outline
                            }
                            alt={pet.name}
                            fill
                            className="w-full h-full object-cover"
                        />
                    </CustomAspectRatio>
                </div>
                <div className="flex flex-col w-1/2 h-full">
                    <div className="p-2 flex justify-between items-center">
                        <H3Custom>{pet.name}</H3Custom>
                        <CustomButton
                            variant="ghost"
                            size="icon-sm"
                            className="hover:bg-secondary/25"
                        >
                            <Heart className="text-secondary" />
                        </CustomButton>
                    </div>
                    <CustomSeparator />
                    <CustomCardDescription className="p-2 h-full flex flex-col justify-between gap-2 text-foreground">
                        {pet.breeds.secondary !== null ? (
                            <PCustom className="text-center">
                                {pet.breeds.primary} | {pet.breeds.secondary}
                            </PCustom>
                        ) : (
                            <PCustom className="text-center">
                                {pet.breeds.primary}
                            </PCustom>
                        )}
                        <div className="h-1/2 flex flex-col justify-between items-center">
                            <PCustom>Gender</PCustom>
                            <PCustom>Age</PCustom>
                            <PCustom>Size</PCustom>
                        </div>{" "}
                        <div className="w-full flex justify-between items-center">
                            <Image
                                src={friendTypeIcon}
                                alt={pet.type}
                                width={40}
                                height={40}
                            />
                            <PCustom>{pet.species}</PCustom>
                        </div>
                    </CustomCardDescription>{" "}
                </div>
            </CustomCardContent>
        </CustomCard>
    );
}

export default PetCard;
