import { da } from "date-fns/locale";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID!;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_API_SECRET!;

export const handleServerResponse = (res: Response) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export async function request(
    url: string | URL | Request,
    options: RequestInit | undefined
) {
    const res = await fetch(url, options);
    return handleServerResponse(res);
}

// getting access token
const fetchAccessKey = async () => {
    try {
        const body = `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

        const res = await fetch(`${BASE_URL}/oauth2/token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: body,
        });

        if (!res.ok) {
            throw new Error("Error in fetching access key");
        }

        const data = await res.json();

        return data.access_token;
    } catch (e) {
        console.log(e);
        throw e;
    }
};

// getting latest animals
export const getLatestFriends = async () => {
    try {
        const accessKey = await fetchAccessKey();

        if (!accessKey) {
            throw new Error("No access key");
        }

        const data = await request(`${BASE_URL}/animals`, {
            headers: {
                Authorization: `Bearer ${accessKey}`,
            },
        });

        return data.animals;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// getting animal by ID
export const getFriendById = async (id: string) => {
    try {
        const accessKey = await fetchAccessKey();

        if (!accessKey) {
            throw new Error("No access key");
        }

        const data = await request(`${BASE_URL}/animals/${id}`, {
            headers: {
                Authorization: `Bearer ${accessKey}`,
            },
        });

        return data.animal;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// getting specific animal type
export const getSingleAnimalType = async (animalType: string) => {
    try {
        const accessKey = await fetchAccessKey();

        if (!accessKey) {
            throw new Error("No access key");
        }

        const data = await request(`${BASE_URL}/types/${animalType}`, {
            headers: {
                Authorization: `Bearer ${accessKey}`,
            },
        });

        return data.type;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// getting specific animal breeds
export const getSingleAnimalBreeds = async (animalType: string) => {
    try {
        const accessKey = await fetchAccessKey();

        if (!accessKey) {
            throw new Error("No access key");
        }

        const data = await request(`${BASE_URL}/types/${animalType}/breeds`, {
            headers: {
                Authorization: `Bearer ${accessKey}`,
            },
        });

        return data.breeds;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// getting all animals of specific breed
export const getAnimalsOfBreed = async (animalType: string, breed: string) => {
    try {
        const accessKey = await fetchAccessKey();

        if (!accessKey) {
            throw new Error("No access key");
        }

        const data = await request(
            `${BASE_URL}/animals?type=${animalType}&breed=${breed}`,
            {
                headers: {
                    Authorization: `Bearer ${accessKey}`,
                },
            }
        );

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// getting all orgs
export const getAllOrgs = async (page: number) => {
    try {
        const accessKey = await fetchAccessKey();

        if (!accessKey) {
            throw new Error("No access key");
        }

        const data = await request(`${BASE_URL}/organizations?page=${page}`, {
            headers: {
                Authorization: `Bearer ${accessKey}`,
            },
        });

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// getting single org by ID
export const getOrgById = async (id: string) => {
    try {
        const accessKey = await fetchAccessKey();

        if (!accessKey) {
            throw new Error("No access key");
        }

        const data = await request(`${BASE_URL}/organizations/${id}`, {
            headers: {
                Authorization: `Bearer ${accessKey}`,
            },
        });

        return data.organization;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
