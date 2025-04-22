import React, { useEffect, useState } from "react";
import "./Keyboard.css";
import Key from "./key";
import KeyboardRow from "./KeyboardRow";

export const Keyboard = ({ onKeyPress, language = "en" }) => {
    const layouts = {
        en: [
            [
                { key: "Esc", caps: "Esc" },
                { key: "F1", caps: "F1" },
                { key: "F2", caps: "F2" },
                { key: "F3", caps: "F3" },
                { key: "F4", caps: "F4" },
                { key: "F5", caps: "F5" },
                { key: "F6", caps: "F6" },
                { key: "F7", caps: "F7" },
                { key: "F8", caps: "F8" },
                { key: "F9", caps: "F9" },
                { key: "F10", caps: "F10" },
                { key: "F11", caps: "F11" },
                { key: "F12", caps: "F12" },
                { key: "Ins", caps: "Ins" },
                { key: "Del", caps: "Del" }
            ],
            [
                { key: "`", caps: "~" },
                { key: "1", caps: "!" },
                { key: "2", caps: "@" },
                { key: "3", caps: "#" },
                { key: "4", caps: "$" },
                { key: "5", caps: "%" },
                { key: "6", caps: "^" },
                { key: "7", caps: "&" },
                { key: "8", caps: "*" },
                { key: "9", caps: "(" },
                { key: "0", caps: ")" },
                { key: "-", caps: "_" },
                { key: "=", caps: "+" },
                { key: "Backspace", caps: "Backspace" }
            ],
            [
                { key: "Tab", caps: "Tab" },
                { key: "q", caps: "Q" },
                { key: "w", caps: "W" },
                { key: "e", caps: "E" },
                { key: "r", caps: "R" },
                { key: "t", caps: "T" },
                { key: "y", caps: "Y" },
                { key: "u", caps: "U" },
                { key: "i", caps: "I" },
                { key: "o", caps: "O" },
                { key: "p", caps: "P" },
                { key: "[", caps: "{" },
                { key: "]", caps: "}" },
                { key: "\\", caps: "|" }
            ],
            [
                { key: "Caps Lock", caps: "Caps Lock" },
                { key: "a", caps: "A" },
                { key: "s", caps: "S" },
                { key: "d", caps: "D" },
                { key: "f", caps: "F" },
                { key: "g", caps: "G" },
                { key: "h", caps: "H" },
                { key: "j", caps: "J" },
                { key: "k", caps: "K" },
                { key: "l", caps: "L" },
                { key: ";", caps: ":" },
                { key: "'", caps: "\"" },
                { key: "Enter", caps: "Enter" }
            ],
            [
                { key: "Shift", caps: "Shift" },
                { key: "z", caps: "Z" },
                { key: "x", caps: "X" },
                { key: "c", caps: "C" },
                { key: "v", caps: "V" },
                { key: "b", caps: "B" },
                { key: "n", caps: "N" },
                { key: "m", caps: "M" },
                { key: ",", caps: "<" },
                { key: ".", caps: ">" },
                { key: "/", caps: "?" },
                { key: "Shift r", caps: "Shift r" }
            ],
            [
                { key: "Ctrl", caps: "Ctrl" },
                { key: "Fn", caps: "Fn" },
                { key: "Win", caps: "Win" },
                { key: "Alt", caps: "Alt" },
                { key: "Space", caps: "Space" },
                { key: "Win r", caps: "Win r" },
                { key: "Alt r", caps: "Alt r" },
                { key: "Menu", caps: "Menu" },
                { key: "Ctrl r", caps: "Ctrl r" }
            ],
        ],
        he: [
            [{ key: "Esc", caps: "Esc" },
            { key: "F1", caps: "F1" },
            { key: "F2", caps: "F2" },
            { key: "F3", caps: "F3" },
            { key: "F4", caps: "F4" },
            { key: "F5", caps: "F5" },
            { key: "F6", caps: "F6" },
            { key: "F7", caps: "F7" },
            { key: "F8", caps: "F8" },
            { key: "F9", caps: "F9" },
            { key: "F10", caps: "F10" },
            { key: "F11", caps: "F11" },
            { key: "F12", caps: "F12" },
            { key: "Ins", caps: "Ins" },
            { key: "Del", caps: "Del" }
            ],
            [
                { key: "~", caps: "~" },
                { key: "1", caps: "1" },
                { key: "2", caps: "2" },
                { key: "3", caps: "3" },
                { key: "4", caps: "4" },
                { key: "5", caps: "5" },
                { key: "6", caps: "6" },
                { key: "7", caps: "7" },
                { key: "8", caps: "8" },
                { key: "9", caps: "9" },
                { key: "0", caps: "0" },
                { key: "-", caps: "-" },
                { key: "=", caps: "=" },
                { key: "Backspace", caps: "Backspace" }
            ],
            [
                { key: "Tab", caps: "Tab" },
                { key: "ק", caps: "ק" },
                { key: "ר", caps: "ר" },
                { key: "א", caps: "א" },
                { key: "ט", caps: "ט" },
                { key: "ו", caps: "ו" },
                { key: "ן", caps: "ן" },
                { key: "ם", caps: "ם" },
                { key: "פ", caps: "פ" },
                { key: "[", caps: "{" },
                { key: "]", caps: "}" },
                { key: "\\", caps: "|" }
            ],
            [
                { key: "Caps Lock", caps: "Caps Lock" },
                { key: "ש", caps: "ש" },
                { key: "ד", caps: "ד" },
                { key: "ג", caps: "ג" },
                { key: "כ", caps: "כ" },
                { key: "ע", caps: "ע" },
                { key: "י", caps: "י" },
                { key: "ח", caps: "ח" },
                { key: "ל", caps: "ל" },
                { key: ";", caps: ";" },
                { key: "'", caps: "'" },
                { key: "Enter", caps: "Enter" }
            ],
            [{ key: "Shift", caps: "Shift" },
            { key: "ז", caps: "ז" },
            { key: "ס", caps: "ס" },
            { key: "ב", caps: "ב" },
            { key: "ה", caps: "ה" },
            { key: "נ", caps: "נ" },
            { key: "מ", caps: "מ" },
            { key: ",", caps: "," },
            { key: ".", caps: "." },
            { key: "/", caps: "/" },
            { key: "Shift r", caps: "Shift r" }
            ],
            [{ key: "Ctrl", caps: "Ctrl" },
            { key: "Fn", caps: "Fn" },
            { key: "Win", caps: "Win" },
            { key: "Alt", caps: "Alt" },
            { key: "Space", caps: "Space" },
            { key: "Win r", caps: "Win r" },
            { key: "Alt r", caps: "Alt r" },
            { key: "Menu", caps: "Menu" },
            { key: "Ctrl r", caps: "Ctrl r" }
            ],
        ],
        emoji: [
            [
                { key: "😊", caps: "😊" },
                { key: "😂", caps: "😂" },
                { key: "😍", caps: "😍" },
                { key: "👍", caps: "👍" },
                { key: "🙏", caps: "🙏" },
                { key: "🔥", caps: "🔥" },
                { key: "🥺", caps: "🥺" },
                { key: "🎉", caps: "🎉" },
                { key: "❤️", caps: "❤️" },
                { key: "😭", caps: "😭" },
                { key: "✨", caps: "✨" },
                { key: "💯", caps: "💯" },
                { key: "❌", caps: "❌" }
            ],
            [
                { key: "😎", caps: "😎" },
                { key: "🤔", caps: "🤔" },
                { key: "😢", caps: "😢" },
                { key: "😡", caps: "😡" },
                { key: "😴", caps: "😴" },
                { key: "🙌", caps: "🙌" },
                { key: "💖", caps: "💖" },
                { key: "🎂", caps: "🎂" },
                { key: "🌟", caps: "🌟" },
                { key: "💥", caps: "💥" },
                { key: "🚀", caps: "🚀" },
                { key: "👏", caps: "👏" },
                { key: "✔", caps: "✔" }
            ],
        ],
    };

    const keySizes = {
        Backspace: 1,
        "\\": 1,
        Tab: 1.5,
        "Caps Lock": 1.75,
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

    const [pressedKeys, setPressedKeys] = useState({});

    useEffect(() => {
        const handleKeyDown = (e) => {
            let key = e.key;

            if (key === " ") key = "Space";
            if (key === "Control") key = e.location === 1 ? "Ctrl" : "Ctrl r";
            if (key === "Shift") key = e.location === 1 ? "Shift" : "Shift r";
            if (key === "Alt") key = e.location === 1 ? "Alt" : "Alt r";

            onKeyPress(key);
            setPressedKeys((prev) => ({ ...prev, [key]: true }));
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
    }, [onKeyPress]);

    const [isShift, setIsShift] = useState(false);
    const [isCapsLock, setIsCapsLock] = useState(false);

    const handleKeyPressed = (key) => {
        console.log(key);

        switch (key.key) {
            case 'Shift':
                setIsShift(true);
                break;
            case 'Caps Lock':
                setIsCapsLock(!isCapsLock);
                break;
            case 'Space':
                onKeyPress(' ');
                break;
            case 'Enter':
                onKeyPress('\n');
                break;
            default:
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
                    keys={row.map((key) => (
                        <Key
                            dataKey={key}
                            label={!caps ? key.key : key.caps}
                            onClick={handleKeyPressed}
                            pressed={!!pressedKeys[key.key]}
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

