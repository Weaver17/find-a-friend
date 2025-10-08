"use client";
import { Heart } from "lucide-react";
import { CustomButton } from "../custom/c_button";
import { H1Custom, PCustom } from "../typeography/custom";
import Image from "next/image";
import { Friend } from "@/types/types";
import { useIsMobile } from "@/hooks/use-mobile";

type NameImageProps = {
    friend: Friend;
    friendTypeIcon: string;
    friendBackupImage: string;
};

function NameImage({
    friend,
    friendTypeIcon,
    friendBackupImage,
}: NameImageProps) {
    const isMobile = useIsMobile();
    return (
        <div className="p-4 flex flex-col gap-4 mx-auto border-b md:mx-0 md:flex-row ">
            {isMobile ? (
                <div className="flex flex-col gap-4">
                    <H1Custom className="text-center">{friend?.name}</H1Custom>
                    <Image
                        src={
                            friend?.primary_photo_cropped?.large ??
                            friendBackupImage
                        }
                        alt={friend?.name}
                        width={400}
                        height={400}
                        className="mx-auto max-h-[400px] rounded-sm shadow-sm"
                    />
                </div>
            ) : (
                <Image
                    src={
                        friend?.primary_photo_cropped?.large ??
                        friendBackupImage
                    }
                    alt={friend?.name}
                    width={400}
                    height={400}
                    className="max-h-[400px] rounded-sm shadow-sm"
                />
            )}

            <div className="flex flex-col gap-4 mx-auto md:mx-0 w-full">
                {isMobile ? (
                    <div></div>
                ) : (
                    <div className="flex justify-between">
                        <H1Custom>{friend?.name}</H1Custom>
                        <CustomButton
                            variant="ghost"
                            size="icon-lg"
                            className="hover:bg-secondary/25"
                        >
                            <Heart className="text-secondary size-8" />
                        </CustomButton>
                    </div>
                )}

                <div className="flex gap-2 flex-wrap text-xs sm:text-sm md:text-base">
                    <PCustom>{friend?.age}</PCustom>
                    <PCustom>{friend?.gender}</PCustom>
                    {friend?.breeds?.secondary !== null ? (
                        <PCustom>
                            {friend?.breeds?.primary} |{" "}
                            {friend?.breeds?.secondary}
                        </PCustom>
                    ) : (
                        <PCustom>{friend?.breeds?.primary}</PCustom>
                    )}
                </div>
                <div className="flex gap-2 text-xs sm:text-sm md:text-base">
                    {friend?.colors?.secondary !== null ? (
                        <PCustom>
                            {friend?.colors?.primary} /{" "}
                            {friend?.colors?.secondary}
                        </PCustom>
                    ) : (
                        <PCustom>{friend?.colors?.primary}</PCustom>
                    )}
                </div>
                <PCustom className=" text-xs sm:text-sm md:text-base">
                    {friend?.size}
                </PCustom>
                <PCustom className=" text-xs sm:text-sm md:text-base">
                    {friend?.species}
                </PCustom>
                <PCustom className=" text-xs sm:text-sm md:text-base">
                    {friend?.status}
                </PCustom>
                {isMobile ? (
                    <div className="mt-auto flex justify-between items-center">
                        <Image
                            src={friendTypeIcon}
                            alt={friend?.type}
                            width={25}
                            height={25}
                        />
                        <CustomButton
                            variant="ghost"
                            size="icon-sm"
                            className="hover:bg-secondary/25"
                        >
                            <Heart className="text-secondary size-6" />
                        </CustomButton>
                    </div>
                ) : (
                    <Image
                        src={friendTypeIcon}
                        alt={friend?.type}
                        width={40}
                        height={40}
                        className="mt-auto"
                    />
                )}
            </div>
        </div>
    );
}

export default NameImage;
