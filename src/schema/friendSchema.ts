import z from "zod";

export const TSavedFriendSchema = z.object({
    age: z.string(),
    attributes: z.object({
        spayed_neutered: z.boolean(),
        house_trained: z.boolean(),
        declawed: z.boolean(),
        special_needs: z.boolean(),
        shots_current: z.boolean(),
    }),
    breeds: z.object({
        primary: z.string(),
        secondary: z.string(),
        mixed: z.boolean(),
        unknown: z.boolean(),
    }),
    coat: z.string(),
    colors: z.object({
        primary: z.string(),
        secondary: z.string(),
        tertiary: z.string(),
    }),
    contact: z.object({
        email: z.string(),
        phone: z.string(),
        address: z.object({
            address1: z.string(),
            address2: z.string(),
            city: z.string(),
            state: z.string(),
            postcode: z.string(),
            country: z.string(),
        }),
    }),
    description: z.string(),
    distance: z.number(),
    environment: z.object({
        children: z.boolean(),
        dogs: z.boolean(),
        cats: z.boolean(),
    }),
    gender: z.string(),
    id: z.number(),
    name: z.string(),
    organization_animal_id: z.string(),
    organization_id: z.string(),
    photos: z.array(
        z.object({
            small: z.string(),
            medium: z.string(),
            large: z.string(),
            full: z.string(),
        })
    ),
    primary_photo_cropped: z.object({
        small: z.string(),
        medium: z.string(),
        large: z.string(),
        full: z.string(),
    }),
    published_at: z.string(),
    size: z.string(),
    species: z.string(),
    status: z.string(),
    status_changed_at: z.string(),
    tags: z.array(z.string()),
    type: z.string(),
    url: z.string(),
    videos: z.array(
        z.object({
            embed: z.string(),
        })
    ),
    _links: z.object({
        self: z.object({
            href: z.string(),
        }),
        type: z.object({
            href: z.string(),
        }),
        organization: z.object({
            href: z.string(),
        }),
    }),
});
