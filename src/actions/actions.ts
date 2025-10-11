"use server";
import { prisma } from "@/lib/prisma";
import { betterAtuhSignUpSchema, signInSchema } from "@/schema/authSchema";
import {
    TBetterAuthSignUpSchema,
    TSavedFriendSchema,
    TSignInSchema,
} from "@/types/types";
import { auth } from "../../utils/auth";
import { headers } from "next/headers";

export async function createUser(
    { name, email }: TBetterAuthSignUpSchema,
    password: string,
    confirmPassword: string
) {
    try {
        const safeData = betterAtuhSignUpSchema.parse({
            name,
            email,
        });

        if (!safeData) {
            throw new Error("Invalid data");
        }

        const existingEmail = await prisma.user.findUnique({
            where: {
                email: safeData.email,
            },
        });

        if (existingEmail) {
            throw new Error("Email already in use");
        }

        // const existingName = await prisma.user.findFirst({
        //     where: {
        //         name: safeData.name,
        //     },
        // });

        // if (existingName) {
        //     throw new Error("Username already in use");
        // }

        if (password !== confirmPassword) {
            throw new Error("Passwords do not match");
        }

        const data = await auth.api.signUpEmail({
            body: {
                name: safeData.name,
                email: safeData.email,
                password: password,
            },
        });

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function signIn(formData: TSignInSchema) {
    try {
        const safeData = signInSchema.parse(formData);

        if (!safeData) {
            throw new Error("Invalid data");
        }

        const data = await auth.api.signInEmail({
            body: {
                email: safeData.email,
                password: safeData.password,
            },
            headers: await headers(),
        });

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getUserById(id: string) {
    try {
        console.log("getting user by Id in server action");
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
            include: {
                savedFriends: true,
            },
        });
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function fetchSession() {
    try {
        console.log("fetching session in server action");
        const session = await auth.api.getSession({
            headers: await headers(),
        });
        return session;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function signOut() {
    try {
        console.log("signing out in server action");
        await auth.api.signOut({
            headers: await headers(),
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function saveFriendAction(
    email: string,
    data: TSavedFriendSchema
) {
    try {
        console.log("saving friend...");

        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
            include: {
                savedFriends: true,
            },
        });

        if (!user) {
            throw new Error("No account associated with that email");
        }

        const {
            breeds,
            colors,
            photos,
            videos,
            attributes,
            environment,
            contact,
            _links,
        } = data;

        await prisma.savedFriends.create({
            data: {
                userId: user.id,
                age: data.age,
                attributes: {
                    create: {
                        declawed: attributes.declawed,
                        houseTrained: attributes.house_trained,
                        shotsCurrent: attributes.shots_current,
                        spayedNeutered: attributes.spayed_neutered,
                        specialNeeds: attributes.special_needs,
                    },
                },
                breeds: {
                    create: {
                        primary: breeds.primary,
                        secondary: breeds.secondary,
                        mixed: breeds.mixed,
                        unknown: breeds.unknown,
                    },
                },
                coat: data.coat,
                colors: {
                    create: {
                        primary: colors.primary,
                        secondary: colors.secondary,
                        tertiary: colors.tertiary,
                    },
                },
                contact: {
                    create: {
                        id: data.id.toString(),
                        email: contact.email,
                        phone: contact.phone,
                        address: {
                            create: {
                                address1: contact.address.address1,
                                address2: contact.address.address2,
                                city: contact.address.city,
                                state: contact.address.state,
                                country: contact.address.country,
                                postcode: contact.address.postcode,
                            },
                        },
                    },
                },
                description: data.description,
                distance: data.distance,
                environment: {
                    create: {
                        cats: environment.cats,
                        children: environment.children,
                        dogs: environment.dogs,
                    },
                },
                gender: data.gender,
                id: data.id,
                name: data.name,
                organization_animal_id: data.organization_animal_id,
                organization_id: data.organization_id,
                photos: {
                    create: photos.map((photo) => ({
                        small: photo.small,
                        medium: photo.medium,
                        large: photo.large,
                        full: photo.full,
                    })),
                },
                primary_photo_cropped: {
                    create: {
                        small: data.primary_photo_cropped.small,
                        medium: data.primary_photo_cropped.medium,
                        large: data.primary_photo_cropped.large,
                        full: data.primary_photo_cropped.full,
                    },
                },
                publishedAt: data.published_at,
                size: data.size,
                species: data.species,
                status: data.status,
                status_changed_at: data.status_changed_at,
                tags: data.tags,
                type: data.type,
                url: data.url,
                videos: {
                    create: videos.map((video) => ({
                        embed: video.embed,
                    })),
                },
                links: {
                    create: {
                        self: _links.self,
                        type: _links.type,
                        organization: _links.organization,
                    },
                },
            },
        });

        console.log("saved friend");

        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getSavedFriendsAction = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
            include: {
                savedFriends: true,
            },
        });

        if (!user) {
            throw new Error("No account associated with that email");
        }

        return user.savedFriends;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const unsaveFriendAction = async (email: string, friendId: number) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
            include: {
                savedFriends: true,
            },
        });

        if (!user) {
            throw new Error("No account associated with that email");
        }

        const friend = await prisma.savedFriends.findFirst({
            where: {
                id: friendId,
                userId: user.id,
            },
        });

        if (!friend) {
            throw new Error("Friend not found");
        }

        await prisma.savedFriends.delete({
            where: {
                saved_id: friend.saved_id,
            },
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
};
