import React from "react";
import { H2Custom } from "../typeography/custom";
import { Friend } from "@/types/types";
import Image from "next/image";

type PetPhotosProps = {
    friend: Friend;
};

function PetPhotos({ friend }: PetPhotosProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {friend?.photos?.length === 0 ? (
                <></>
            ) : (
                <>
                    <H2Custom>Photos</H2Custom>
                    <ul className="flex flex-col items-center justify-center gap-4">
                        {friend?.photos?.map((photo) => (
                            <li key={photo.small}>
                                <Image
                                    src={photo.full}
                                    alt={friend?.name}
                                    width={600}
                                    height={600}
                                    className="rounded-sm shadow-sm"
                                />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default PetPhotos;
