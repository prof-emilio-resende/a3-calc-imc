import React, { createContext, ReactNode, useState } from "react";
import Person from "../domain/Person";

export type PersonContextType = {
    person: Person | null;
    setData: (person: Person) => void;
};

export interface PersonContextProviderProps {
    children: ReactNode;
}

export const PersonContext = createContext<PersonContextType>({
    person: null,
    setData: (person) => console.log("nothing important here..."),
});

export default function PersonContextProvider({
    children,
}: PersonContextProviderProps) {
    const [person, setPerson] = useState(new Person(0.0, 0.0));
    const setData = (data: Person) => {
        if (person) {
            const newPerson = Object.assign(Object.create({}), person, data);
            setPerson(newPerson);
        }
    };

    return (
        <PersonContext.Provider value={{ person, setData }}>
            {children}
        </PersonContext.Provider>
    );
}
