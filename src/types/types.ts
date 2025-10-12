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
    age?: string;
    attributes?: {
        spayed_neutered?: boolean;
        house_trained?: boolean;
        declawed?: boolean | null;
        special_needs?: boolean;
        shots_current?: boolean;
    };
    breeds?: {
        primary?: string;
        secondary?: string;
        mixed?: boolean;
        unknown?: boolean;
    };
    coat?: string;
    colors?: {
        primary?: string;
        secondary?: string;
        tertiary?: string;
    };
    contact?: {
        email?: string;
        phone?: string;
        address?: {
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postcode?: string;
            country?: string;
        };
    };
    description?: string;
    distance?: number;
    environment?: {
        children?: boolean;
        dogs?: boolean;
        cats?: boolean;
    };
    gender?: string;
    id?: number;
    name?: string;
    organization_animal_id?: string;
    organization_id?: string;
    photos?: {
        small?: string;
        medium?: string;
        large?: string;
        full?: string;
    }[];
    primary_photo_cropped?: {
        small?: string;
        medium?: string;
        large?: string;
        full?: string;
    };
    published_at?: string;
    size?: string;
    species?: string;
    status?: string;
    status_changed_at?: string;
    tags?: string[];
    type?: string;
    url?: string;
    videos?: unknown[];
    _links?: {
        self?: {
            href?: string;
        };
        type?: {
            href?: string;
        };
        organization?: {
            href?: string;
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
