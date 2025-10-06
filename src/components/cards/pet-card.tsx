import { Heart } from "lucide-react";
import { CustomButton } from "../custom/c_button";
import {
    CustomCard,
    CustomCardHeader,
    CustomCardContent,
    CustomCardDescription,
    CustomCardFooter,
} from "../custom/c_card";
import { LargeCustom, PCustom } from "../typeography/custom";
import { Friend } from "@/types/types";

type PetCardProps = {
    pet: Friend;
};

function PetCard({ pet }: PetCardProps) {
    return (
        <CustomCard className="p-0 gap-1 w-[320px] h-[400px]">
            <CustomCardHeader className="py-2">
                <LargeCustom>{pet.name}</LargeCustom>
                <CustomButton
                    variant="ghost"
                    size="icon-sm"
                    className="hover:bg-secondary/25"
                >
                    <Heart className="text-secondary" />
                </CustomButton>
            </CustomCardHeader>
            <CustomCardContent className="p-0">
                <div className="h-50 w-full bg-amber-800">IMAGE</div>
                <CustomCardDescription className="p-2">
                    <div className="w-full flex justify-between items-center">
                        <PCustom>Type Icon</PCustom>
                        <PCustom>Species</PCustom>
                    </div>

                    <PCustom className="text-center">
                        Primary Breed | Secondary Breed
                    </PCustom>
                    <div className="w-full flex justify-between items-center">
                        <PCustom>Gender</PCustom>
                        <PCustom>Age</PCustom>
                        <PCustom>Size</PCustom>
                    </div>
                </CustomCardDescription>
            </CustomCardContent>
            <CustomCardFooter className="mt-auto">Other Info</CustomCardFooter>
        </CustomCard>
    );
}

export default PetCard;
