import { whiteIcons } from "@/images/icons";
import images from "@/images/images";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getAnimalTypeIcon = (animalType: string) => {
    let icon = images.paw_outline;

    switch (animalType) {
        case "Dog":
            icon = whiteIcons.dog_w;
            break;
        case "Cat":
            icon = whiteIcons.cat_w;
            break;
        case "Bird":
            icon = whiteIcons.bird_w;
            break;
        case "Rabbit":
            icon = whiteIcons.rabbit_w;
            break;
        case "Horse":
            icon = whiteIcons.horse_w;
            break;
        case "Small & Furry":
            icon = whiteIcons.fuzzy_w;
            break;
        case "Barnyard":
            icon = whiteIcons.barn_w;
            break;
        case "Scales, Fins & Other":
            icon = whiteIcons.scales_w;
            break;
    }

    return icon;
};
