import React, { createContext, useState, useContext } from "react";

const PrimaryColorContext = createContext();

export const usePrimaryColor = () => useContext(PrimaryColorContext);

export const PrimaryColorProvider = ({ children }) => {
    const [primaryColor, setPrimaryColor] = useState("#22C55E");

    return (
        <PrimaryColorContext.Provider value={{ primaryColor, setPrimaryColor }}>
            {children}
        </PrimaryColorContext.Provider>
    );
};
