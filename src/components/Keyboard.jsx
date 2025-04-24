import React, { useEffect, useState } from "react";
import "./Keyboard.css";
import Key from "./key";
import KeyboardRow from "./KeyboardRow";
import layouts from "../data/keyboardLayouts.json";

export const Keyboard = ({ onKeyPress, language = "en" }) => {

    const keySizes = {
        Backspace: 1,
        "\\": 1,
        Tab: 1.5,
        "CapsLock": 1.75,
        Enter: 2.25,
        Shift: 2.25,
        "Shift r": 2.25,
        Space: 15,
        Ctrl: 2.25,
        "Ctrl r": 1.5,
    };

    const rowStyle = {
        display: "flex",
        width: "100%",
        gap: "5px",
    };

    //const [pressedKeys, setPressedKeys] = useState({});

    /*
    useEffect(() => {
        const handleKeyDown = (e) => {
            let key = e.key;

            if (key === " ") key = "Space";
            if (key === "Control") key = e.location === 1 ? "Ctrl" : "Ctrl r";
            if (key === "Shift") key = e.location === 1 ? "Shift" : "Shift r";
            if (key === "Alt") key = e.location === 1 ? "Alt" : "Alt r";

            const layout = layouts[language] || layouts.en;
            const keyObject = layout.flat().find((k) => k.key === key);

            if (keyObject) {
                handleKeyPressed(keyObject);
                setPressedKeys((prev) => ({ ...prev, [key]: true }));
            }
        };

        const handleKeyUp = (e) => {
            let key = e.key;

            if (key === " ") key = "Space";
            if (key === "Control") key = e.location === 1 ? "Ctrl" : "Ctrl r";
            if (key === "Shift") key = e.location === 1 ? "Shift" : "Shift r";
            if (key === "Alt") key = e.location === 1 ? "Alt" : "Alt r";

            setPressedKeys((prev) => ({ ...prev, [key]: false }));
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    });
    */

    const [isShift, setIsShift] = useState(false);
    const [isCapsLock, setIsCapsLock] = useState(false);

    const handleKeyPressed = (key) => {
        console.log(key);

        switch (key.key) {
            case 'Shift':
                setIsShift(true);
                break;
            case 'CapsLock':
                setIsCapsLock(!isCapsLock);
                break;
            case 'Space':
                onKeyPress(' ');
                break;
            case 'Tab':
                onKeyPress('\t');
                break;
            case 'Enter':
                onKeyPress('\n');
                break;
            case 'Backspace':
                onKeyPress('backspace');
                break;
            case 'Ctrl':
                break;
            case 'Alt':
                break;
            case 'Fn':
                break;
            default:
                console.log(!caps ? key.key : key.caps);
                onKeyPress(!caps ? key.key : key.caps);
                if (isShift) setIsShift(false);
                break;
        }
    }

    let caps = isShift ^ isCapsLock;
    console.log(`shift: ${isShift} caps: ${caps}`);


    const layout = layouts[language] || layouts.en;

    return (
        <div className="keyboard">
            <div className="keyboard-language">Current: {language.toUpperCase()}</div>
            {layout.map((row, rowIndex) => (
                <KeyboardRow
                    key={rowIndex}
                    style={rowStyle}
                    keys={row.map((key, index) => (
                        <Key
                            key={index}
                            dataKey={key}
                            label={!caps ? key.key : key.caps}
                            onClick={handleKeyPressed}
                            /*pressed={!!pressedKeys[key.key]}*/
                            style={{
                                flexGrow: keySizes[key.key] || 0,
                                flexBasis: keySizes[key.key] ? "auto" : "50px",
                                height: rowIndex === 0 ? "30px" : "50px",
                            }}
                        />
                    ))}
                />
            ))}
        </div>
    );
};

