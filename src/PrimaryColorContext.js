import React, { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const PrimaryColorContext = createContext();

export const usePrimaryColor = () => useContext(PrimaryColorContext);

export const PrimaryColorProvider = ({ children }) => {
    const [primaryColor, setPrimaryColor] = useState("#22C55E");

    const value = useMemo(
        () => ({ primaryColor, setPrimaryColor }),
        [primaryColor]
    );

    return (
        <PrimaryColorContext.Provider value={value}>
            {children}
        </PrimaryColorContext.Provider>
    );
};

PrimaryColorProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
