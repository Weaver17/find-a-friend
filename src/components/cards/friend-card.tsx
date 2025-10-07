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
import { getAnimalTypeIconDark, getAnimalTypeIconLight } from "@/lib/utils";
import Image from "next/image";
import images from "@/images/images";
import { CustomSeparator } from "../custom/c_separator";
import { useTheme } from "next-themes";
import { fr } from "date-fns/locale";

type FriendCardProps = {
    friend: Friend;
};

function FriendCard({ friend }: FriendCardProps) {
    const { theme } = useTheme();

    const friendTypeIcon =
        theme === "dark"
            ? getAnimalTypeIconLight(friend.type)
            : getAnimalTypeIconDark(friend.type);

    const friendBackupImage =
        theme === "dark" ? images.coming_soon_dark : images.coming_soon_light;

    return (
        <CustomCard className="overflow-hidden p-0 gap-1 w-[240px] h-[600px]">
            <CustomCardContent className="p-0 w-full  flex flex-col">
                <div className="w-full h-[400px]">
                    <Image
                        src={
                            friend?.primary_photo_cropped?.large ??
                            friendBackupImage
                        }
                        alt={friend.name}
                        height={400}
                        width={240}
                        className="w-[240px] h-[400px] object-cover"
                    />
                </div>
                <div className="p-2 flex flex-col h-[200px]">
                    <div className=" flex justify-between">
                        <H3Custom className="truncate">{friend.name}</H3Custom>
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
                        {friend.breeds.secondary !== null ? (
                            <PCustom className="text-center">
                                {friend.breeds.primary} |{" "}
                                {friend.breeds.secondary}
                            </PCustom>
                        ) : (
                            <PCustom className="text-center">
                                {friend.breeds.primary}
                            </PCustom>
                        )}
                        <div className="flex justify-between items-center">
                            <PCustom className="text-primary font-semibold dark:text-secondary">
                                {friend.gender}
                            </PCustom>
                            <PCustom className="text-primary font-semibold dark:text-secondary">
                                {friend.age}
                            </PCustom>
                            <PCustom className="text-primary font-semibold dark:text-secondary">
                                {friend.size}
                            </PCustom>
                        </div>
                        <div className="w-full mt-auto flex justify-between items-end">
                            <Image
                                src={friendTypeIcon}
                                alt={friend.type}
                                width={40}
                                height={40}
                            />
                            <PCustom>{friend.species}</PCustom>
                        </div>
                    </CustomCardDescription>
                </div>
            </CustomCardContent>
        </CustomCard>
    );
}

export default FriendCard;
