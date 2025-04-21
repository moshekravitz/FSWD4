import React from "react";
import "./Keyboard.css";
import KeyboardRow from "./keybardRow";
import Key from "./key";

export const Keyboard = ({ onKeyPress }) => {
    const keys = [
        ["Esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12","home","end", "ins", "del"],
        ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
        ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
        ["Caps Lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
        ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift r"],
        ["Ctrl", "Win", "Alt", "Space", "Alt r", "Win r", "Menu", "Ctrl r"],
    ];

    const keySizes = {
        "`": 0.3, 
        "Backspace": 2,
        "Tab": 1.5,
        "Caps Lock": 1.75,
        "Enter": 2.25,
        "Shift": 2.25,
        "Shift r": 2.25,
        "Space": 15,
        "Ctrl": 2.25,
         "Ctrl r": 2.25,
    };

    const rowStyle = {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
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
                                flexGrow: keySizes[key] || 1,
                                aspectRatio: keySizes[key] ? null : 1 / 1,
                            }}
                        />
                    ))}
                />
            ))}
        </div>
    );
};