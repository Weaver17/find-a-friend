"use client";

import { LoadingOverlay } from "@/components/custom/c_loading-spinner";
import AboutPet from "@/components/pet-page/about-pet";
import NameImage from "@/components/pet-page/name-image";
import PetContact from "@/components/pet-page/pet-contact";
import PetPhotos from "@/components/pet-page/pet-photos";
import images from "@/images/images";
import { getFriendById } from "@/lib/pet-api";
import { getAnimalTypeIconDark, getAnimalTypeIconLight } from "@/lib/utils";
import { Friend } from "@/types/types";
import { useTheme } from "next-themes";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
    const [friend, setFriend] = useState<Friend | null>(null);

    const params = useParams<{ id: string }>();

    const petId = parseInt(params.id);

    const { theme } = useTheme();

    useEffect(() => {
        async function getFriend() {
            await getFriendById(petId).then((data) => {
                setFriend(data);
            });
        }

        getFriend();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (friend === null) {
        return <LoadingOverlay />;
    }

    const friendTypeIcon =
        theme === "dark"
            ? getAnimalTypeIconLight(friend.type!)
            : getAnimalTypeIconDark(friend.type!);

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
