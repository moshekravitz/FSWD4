import React from "react";
import "./Keyboard.css";
import Key from "./key";
import KeyboardRow from "./KeyboardRow";

export const Keyboard = ({ onKeyPress }) => {
    const keys = [
        ["Esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Ins", "Del"],
        ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
        ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
        ["Caps Lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
        ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift r"],
        ["Ctrl", "Fn", "Win", "Alt", "Space", "Win r", "Alt r", "Menu", "Ctrl r"],
    ];

    const keySizes = {
        "Backspace": 1,
        "\\": 1,
        "Tab": 1.5,
        "Caps Lock": 1.75,
        "Enter": 2.25,
        "Shift": 2.25,
        "Shift r": 2.25,
        "Space": 15,
        "Ctrl": 2.25,
        "Ctrl r": 1.5,
    };

    const rowStyle = {
        display: "flex",
        width: "100%",
        gap: "5px",
    };
    return (
        <div className="keyboard">
            {keys.map((row, rowIndex) => (
                <KeyboardRow
                    key={rowIndex}
                    style={rowStyle}
                    keys={row.map((key) => (
                        <Key
                            key={key}
                            label={key}
                            onClick={() => onKeyPress(key)}
                            style={{
                                flexGrow: keySizes[key] || 0,
                                flexBasis: keySizes[key] ? "auto" : "50px",
                                height: rowIndex === 0 ? "30px" : "50px",
                            }}
                        />
                    ))}
                />
            ))}
        </div>
    );
};