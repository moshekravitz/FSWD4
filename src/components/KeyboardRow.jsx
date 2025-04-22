import React from 'react';

const KeyboardRow = ({ keys, style }) => {
    return <div className="keyboard-row" style={style}>{keys}</div>;
};

export default KeyboardRow;