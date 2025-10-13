import {
    signInSchema,
    signUpSchema,
    betterAtuhSignUpSchema,
} from "@/schema/authSchema";
import { TSavedFriendSchema } from "@/schema/friendSchema";
import z from "zod";

export type TSignInSchema = z.infer<typeof signInSchema>;
export type TSignUpSchema = z.infer<typeof signUpSchema>;
export type TBetterAuthSignUpSchema = z.infer<typeof betterAtuhSignUpSchema>;
export type TSavedFriendSchema = z.infer<typeof TSavedFriendSchema>;

export type TNewUser = {
    name: string;
    email: string;
};

export type NavbarOption = {
    label: string;
    slug: string;
    icon: string;
};

export type Friend = {
    age: string | null;
    attributes: {
        spayed_neutered: boolean | null;
        house_trained: boolean | null;
        declawed: boolean | null;
        special_needs: boolean | null;
        shots_current: boolean | null;
    };
    breeds: {
        primary: string | null;
        secondary: string | null;
        mixed: boolean | null;
        unknown: boolean | null;
    };
    coat: string | null;
    colors: {
        primary: string | null;
        secondary: string | null;
        tertiary: string | null;
    };
    contact: {
        email: string | null;
        phone: string | null;
        address: {
            address1: string | null;
            address2: string | null;
            city: string | null;
            state: string | null;
            postcode: string | null;
            country: string | null;
        };
    };
    description: string | null;
    distance: number | null;
    environment: {
        children: boolean | null;
        dogs: boolean | null;
        cats: boolean | null;
    };
    gender: string | null;
    id: number | null;
    name: string | null;
    organization_animal_id: string | null;
    organization_id: string | null;
    photos: {
        small: string | null;
        medium: string | null;
        large: string | null;
        full: string | null;
    }[];
    primary_photo_cropped: {
        small: string | null;
        medium: string | null;
        large: string | null;
        full: string | null;
    };
    published_at: string | null;
    size: string | null;
    species: string | null;
    status: string | null;
    status_changed_at: string | null;
    tags: string[] | null;
    type: string | null;
    url: string | null;
    videos: unknown[] | null;
    _links: {
        self: {
            href: string | null;
        };
        type: {
            href: string | null;
        };
        organization: {
            href: string | null;
        };
    };
};

export type AnimalType = {
    coats: string[];
    colors: string[];
    genders: string[];
    name: string;
    _links: {
        breeds: {
            href: string;
        };
        self: {
            href: string;
        };
    };
};

export type Breed = {
    name: string | null;
    _links: {
        self: {
            href: string | null;
        };
    };
};

export type TOrgsFetch = {
    organizations: Org[];
    pagination: Pagination;
};

export type Org = {
    address: {
        address1: string | null;
        address2: string | null;
        city: string | null;
        state: string | null;
        postcode: string | null;
        country: string | null;
    };
    adoption: {
        policy: string | null;
        url: string | null;
    };
    distance: number | null;
    email: string | null;
    hours: {
        monday: string | null;
        tuesday: string | null;
        wednesday: string | null;
        thursday: string | null;
        friday: string | null;
        saturday: string | null;
        sunday: string | null;
    };
    id: string | null;
    mission_statement: string | null;
    name: string | null;
    phone: string | null;
    photos: {
        full: string | null;
        large: string | null;
        medium: string | null;
        small: string | null;
    }[];
    url: string | null;
    website: string | null;
    _links: {
        animals: {
            href: string | null;
        };
        self: {
            href: string | null;
        };
    };
};

export type Pagination = {
    count_per_page: number;
    current_page: number;
    total_pages: number;
    total_count: number;
    _links?: {
        first?: {
            href: string;
        };
        next?: {
            href: string;
        };
        last?: {
            href: string;
        };
    };
};
