import React, { createContext, ReactNode, useState } from "react";
import User from "../domain/User";

export type UserContextType = {
    user: User | null;
    setUser: (user: User) => void;
    resetUser: () => void;
};

export interface UserContextProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: (user) => console.log("nothing important here..."),
    resetUser: () => console.log("nothing..."),
});

export default function UserContextProvider({
    children,
}: UserContextProviderProps) {
    const [user, setUser] = useState(new User("anonymous", ""));

    const resetUser = () => {
        setUser(new User("anonymous", ""));
    };

    return (
        <UserContext.Provider value={{ user, setUser, resetUser }}>
            {children}
        </UserContext.Provider>
    );
}
