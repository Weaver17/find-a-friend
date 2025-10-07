import { darkIcons, whiteIcons } from "@/images/icons";
import images from "@/images/images";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getAnimalTypeIconLight = (animalType: string) => {
    let icon = images.paw_outline_light;

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

export const getAnimalTypeIconDark = (animalType: string) => {
    let icon = images.paw_outline_dark;

    switch (animalType) {
        case "Dog":
            icon = darkIcons.dog_d;
            break;
        case "Cat":
            icon = darkIcons.cat_d;
            break;
        case "Bird":
            icon = darkIcons.bird_d;
            break;
        case "Rabbit":
            icon = darkIcons.rabbit_d;
            break;
        case "Horse":
            icon = darkIcons.horse_d;
            break;
        case "Small & Furry":
            icon = darkIcons.fuzzy_d;
            break;
        case "Barnyard":
            icon = darkIcons.barn_d;
            break;
        case "Scales, Fins & Other":
            icon = darkIcons.scales_d;
            break;
    }

    return icon;
};
