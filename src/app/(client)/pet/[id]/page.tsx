"use client";

import { CustomButton } from "@/components/custom/c_button";
import { LoadingOverlay } from "@/components/custom/c_loading-spinner";
import AboutPet from "@/components/pet-page/about-pet";
import NameImage from "@/components/pet-page/name-image";
import PetContact from "@/components/pet-page/pet-contact";
import PetPhotos from "@/components/pet-page/pet-photos";
import { H1Custom, H4Custom, PCustom } from "@/components/typeography/custom";
import images from "@/images/images";
import { getFriendById } from "@/lib/pet-api";
import { getAnimalTypeIconDark, getAnimalTypeIconLight } from "@/lib/utils";
import { Friend } from "@/types/types";
import { CheckIcon, Heart, StarIcon, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
    const [friend, setFriend] = useState<Friend | null>(null);

    const params = useParams<{ id: string }>();

    const { theme } = useTheme();

    useEffect(() => {
        async function getFriend() {
            await getFriendById(params.id).then((data) => {
                console.log(data);
                setFriend(data);
            });
        }

        getFriend();
    }, []);

    if (friend === null) {
        return <LoadingOverlay />;
    }

    const friendTypeIcon =
        theme === "dark"
            ? getAnimalTypeIconLight(friend.type)
            : getAnimalTypeIconDark(friend.type);

    const friendBackupImage =
        theme === "dark" ? images.coming_soon_dark : images.coming_soon_light;

    return (
        <div className="client-page">
            {friend === null ? (
                <LoadingOverlay />
            ) : (
                <div className="flex flex-col gap-6">
                    <NameImage
                        friend={friend}
                        friendTypeIcon={friendTypeIcon}
                        friendBackupImage={friendBackupImage}
                    />

                    <AboutPet friend={friend} />
                    <PetContact friend={friend} />
                    <PetPhotos friend={friend} />
                </div>
            )}
        </div>
    );
}

export default Page;
