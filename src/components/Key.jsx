import React from "react";
import "./key.css";

const Key = ({ label, onClick, style }) => {
    return (
        <button className="key" onClick={onClick} style={style}>
            {label}
        </button>
    );
};

export default Key;