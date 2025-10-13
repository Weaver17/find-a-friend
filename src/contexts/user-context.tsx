"use client";

import {
    createUser,
    fetchSession,
    getSavedFriendsAction,
    getUserById,
    signIn,
    signOut,
} from "@/actions/actions";
import { SavedFriend, User } from "@/generated/prisma";
import { TNewUser, TSignInSchema } from "@/types/types";
import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";

interface UserContextType {
    signUp: (
        { name, email }: TNewUser,
        password: string,
        confirmPassword: string
    ) => Promise<void>;
    login: (user: TSignInSchema) => Promise<void>;
    logout: () => void;
    getSession: () => Promise<void>;
    saveFriend: (friend: SavedFriend) => Promise<void>;
    unsaveFriend: (friendId: number) => Promise<void>;
    getSavedFriends: (currentUser: User) => Promise<void>;
    isFriendSaved: (friendId: number) => boolean;
    currentUser: User | null;
    isLoading: boolean;
    isLoggedIn: boolean;
    savedFriends: SavedFriend[];
}

export const userContext = createContext<UserContextType | null>(null);

export function UserProvider({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [savedFriends, setSavedFriends] = useState<SavedFriend[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const signUp = useCallback(
        async (
            { name, email }: TNewUser,
            password: string,
            confirmPassword: string
        ) => {
            setIsLoading(true);
            try {
                await createUser({ name, email }, password, confirmPassword);
            } catch (error) {
                console.error(error);
                throw error;
            } finally {
                setIsLoading(false);
            }
        },
        []
    );

    const login = async (user: TSignInSchema) => {
        setIsLoading(true);
        try {
            setIsLoggedIn(true);
            await signIn(user).then((user) => {
                setCurrentUser(user.user as User);
            });
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        setIsLoading(true);
        try {
            await signOut();
            setCurrentUser(null);
            setIsLoggedIn(false);
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const getSession = async () => {
        setIsLoading(true);
        try {
            await fetchSession().then((session) => {
                if (!session) return;
                getUserById(session.user.id).then((user) => {
                    setCurrentUser(user);
                    setIsLoggedIn(true);
                });
            });
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const saveFriend = useCallback(
        async (friend: SavedFriend) => {
            setIsLoading(true);
            try {
                if (!currentUser) {
                    throw Error("Must be logged in to save friend");
                }
                setSavedFriends((prevSavedFriends) => [
                    ...prevSavedFriends,
                    friend,
                ]);
            } catch (error) {
                console.error(error);
                throw error;
            } finally {
                setIsLoading(false);
            }
        },
        [currentUser]
    );

    const unsaveFriend = useCallback(
        async (friendId: number) => {
            setIsLoading(true);
            try {
                if (!currentUser) {
                    throw Error("Must be logged in to unsave game");
                }
                setSavedFriends((prevSavedFriends) =>
                    prevSavedFriends.filter((friend) => friend.id !== friendId)
                );
            } catch (error) {
                console.error(error);
                throw error;
            } finally {
                setIsLoading(false);
            }
        },
        [currentUser]
    );

    const getSavedFriends = useCallback(async (currentUser: User) => {
        try {
            const friends = await getSavedFriendsAction(currentUser.email);
            setSavedFriends(friends);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }, []);

    const isFriendSaved = useCallback(
        (friendId: number) => {
            return savedFriends.some((friend) => friend.id === friendId);
        },
        [savedFriends]
    );

    const values = useMemo(
        () => ({
            signUp,
            login,
            logout,
            getSession,
            saveFriend,
            unsaveFriend,
            getSavedFriends,
            isFriendSaved,
            currentUser,
            isLoading,
            isLoggedIn,
            savedFriends,
        }),
        [
            signUp,
            saveFriend,
            unsaveFriend,
            getSavedFriends,
            isFriendSaved,
            currentUser,
            isLoading,
            isLoggedIn,
            savedFriends,
        ]
    );

    return (
        <userContext.Provider value={values}>{children}</userContext.Provider>
    );
}

export function useUserContext() {
    const context = useContext(userContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
}
