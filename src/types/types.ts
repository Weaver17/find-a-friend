import {
    signInSchema,
    signUpSchema,
    betterAtuhSignUpSchema,
} from "@/schema/authSchema";
import z from "zod";

export type TSignInSchema = z.infer<typeof signInSchema>;
export type TSignUpSchema = z.infer<typeof signUpSchema>;
export type TBetterAuthSignUpSchema = z.infer<typeof betterAtuhSignUpSchema>;

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
    id: number;
    organization_id: string;
    url: string;
    type: string;
    species: string;
    breeds: {
        primary: string;
        secondary: string | null;
        mixed: boolean;
        unknown: boolean;
    };
    colors: {
        primary: string;
        secondary: string | null;
        tertiary: string | null;
    };
    age: string;
    gender: string;
    size: string;
    coat: string;
    attributes: {
        spayed_neutered: boolean;
        house_trained: boolean;
        declawed: boolean | null;
        special_needs: boolean;
        shots_current: boolean;
    };
    environment: {
        children: boolean;
        dogs: boolean;
        cats: boolean;
    };
    tags: string[];
    name: string;
    description: string;
    organization_animal_id: string | null;
    photos: {
        small: string;
        medium: string;
        large: string;
        full: string;
    }[];
    primary_photo_cropped: {
        small: string;
        medium: string;
        large: string;
        full: string;
    };
    videos: unknown[];
    status: string;
    status_changed_at: string;
    published_at: string;
    distance: number | null;
    contact: {
        email: string;
        phone: string;
        address: {
            address1: string | null;
            address2: string | null;
            city: string;
            state: string;
            postcode: string;
            country: string;
        };
    };
    _links: {
        self: {
            href: string;
        };
        type: {
            href: string;
        };
        organization: {
            href: string;
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
    name: string;
    _links: {
        self: {
            href: string;
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
        city: string;
        state: string;
        postcode: string;
        country: string;
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
    id: string;
    mission_statement: string | null;
    name: string;
    phone: string | null;
    photos: {
        full: string;
        large: string;
        medium: string;
        small: string;
    }[];
    url: string;
    website: string | null;
    _links: {
        animals: {
            href: string;
        };
        self: {
            href: string;
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
