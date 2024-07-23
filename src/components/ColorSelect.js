import React from "react";
import PropTypes from "prop-types";
import "./ColorSelect.css";

const ColorSelect = ({ setPrimaryColor }) => {
    const colors = [
        "#E63946", // Red
        "#EAB308", // Yellow
        "#3B82F6", // Blue
        "#A855F7", // Purple
        "#22C55E", // Green
    ];

    return (
        <div className="color">
            {colors.map((color) => (
                <button
                    key={color}
                    className="color__button"
                    style={{ backgroundColor: color }}
                    onClick={() => setPrimaryColor(color)}
                />
            ))}
        </div>
    );
};

ColorSelect.propTypes = {
    setPrimaryColor: PropTypes.func.isRequired,
};

export default ColorSelect;
