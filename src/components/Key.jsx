import React from "react";
import "../styles/key.css";

const Key = ({ dataKey, label, onClick, style, pressed }) => {
    return (
        <button
            className={`key ${pressed ? "pressed" : ""}`}
            onClick={() => onClick(dataKey)}
            style={style}
            data-key={dataKey}
        >
        {label}
        </button>
    );
};

export default Key;